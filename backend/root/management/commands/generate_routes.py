from __future__ import annotations

import json
from typing import Any
from dataclasses import dataclass

from dataclasses_json import dataclass_json

from django.conf import settings
from django.core import management
from django.utils import timezone
from django.core.management.base import BaseCommand

# pylint: disable=positional-arguments


def to_camel_case(snake_str: str) -> str:
    components = snake_str.split('_')
    # We capitalize the first letter of each component except the first one
    # with the 'title' method and join them together.
    return components[0] + ''.join(x.title() for x in components[1:])


class Colorize:
    # pylint: disable=all
    GREEN = '\033[92m'
    RED = '\033[91m'
    _ENDC = '\033[0m'

    @staticmethod
    def __call__(string: str, *modifiers: Any) -> str:
        return ''.join(modifiers) + string + colorize._ENDC


colorize = Colorize()


def ts_comment(string: str, /) -> str:
    return '// ' + string


def ts_docstring(string: str, /) -> str:
    return f'/**{string}*/'


@dataclass_json
@dataclass
class Url:
    url: str
    module: str
    name: str
    decorators: str


def parse_name(name: str) -> str:
    """
    Parse django url name to frontend route format.
    'scope:some-name' -> 'scope__some_name'
    """
    scoped_snake_name = name.replace(':', '__').replace('-', '_').replace('/', '')
    return scoped_snake_name


### common ###
NEWLINE = '\n'
SEPARATOR = '#' * 60 + NEWLINE

### frontend ###
OUTPUT_FRONTEND_FILE = '../frontend/src/routes/backend.ts'

### backend ###
DOCSTRING = '"""'
YAPF_DISABLE = '# yapf: disable'
PYLINT_DISABLE_INVALID_NAME = '# pylint: disable=invalid-name'
OUTPUT_BACKEND_FILE = 'root/utils/routes.py'

ENTRY_MSG = f"""
{DOCSTRING}
THIS FILE IS AUTOGENERATED.
DO NOT WRITE IN THIS FILE, AS IT WILL BE OVERWRITTEN ON NEXT UPDATE.

THIS FILE WAS GENERATED BY: {__name__}
LAST UPDATE: {timezone.now()}
{DOCSTRING}
"""


def parse_url(url: str) -> str:
    """Parse django url to frontend route format."""

    # from: '/some/path/<int:org_id>/'
    sub_paths = url.split('/')
    # to: ['', 'some', 'path', '<int:org_id>', '']

    for i, sub_path in enumerate(sub_paths, 0):
        # Keep new equal to old if no parsing is needed.
        new_sub_path = sub_path

        try:
            colon_index = sub_path.index(':')
            # Assuming sub_path param has no prefix of form 'something<int:org_id>'.
            # crocl_index = sub_path.index('<')
            new_sub_path = to_camel_case(sub_path[colon_index:-1])  # ':orgId'

        except ValueError:
            # ':' was not found.
            # sub_path = '<org_id>' or 'path'
            if sub_path.startswith('<'):
                # Found param, sub_path = '<org_id>'
                new_sub_path = ':' + to_camel_case(sub_path[1:-1])  # ':orgId'

        # Replace old sub_path with new_sub_path.
        sub_paths[i] = new_sub_path

    # from: ['', 'some', 'path', ':orgId', '']
    new_url = '/'.join(sub_paths)
    # to: '/some/path/:orgId/'

    return new_url


class Command(BaseCommand):
    """Generate frontend routes"""

    def handle(self, *args, **options) -> None:  # type: ignore
        # Get all urls as json.
        urls_json: str = management.call_command('show_urls', format_style='json')

        # Load urls to dict.
        urls_dict: dict = json.loads(urls_json)

        # Parse urls into objects.
        urls: list[Url] = [Url.from_dict(url) for url in urls_dict]  # type: ignore # Yes it does!

        # Create space from output after call_command('show_urls').
        print('\n' * 40)

        with open(file=settings.BASE_DIR / OUTPUT_FRONTEND_FILE, mode='w', encoding='UTF-8') as frontend_file:
            with open(file=settings.BASE_DIR / OUTPUT_BACKEND_FILE, mode='w', encoding='UTF-8') as backend_file:

                ### entry message ###
                # backend
                backend_file.write(YAPF_DISABLE)
                backend_file.write(NEWLINE)
                backend_file.write(PYLINT_DISABLE_INVALID_NAME)
                backend_file.write(ENTRY_MSG)
                backend_file.write(NEWLINE)
                backend_file.write(SEPARATOR)
                backend_file.write(NEWLINE)

                # frontend
                frontend_file.write(ts_docstring(ENTRY_MSG))
                frontend_file.write(NEWLINE)
                frontend_file.write(ts_comment(SEPARATOR))
                frontend_file.write(NEWLINE)

                frontend_file.write('export const ROUTES_BACKEND = {')

                # Parse all urls to frontend routes.
                for url in urls:

                    if '<format>' in url.url:
                        # Generic and malformed urls we don't need to keep.
                        continue

                    # Parse url to frontend route.
                    parsed_url = parse_url(url.url)
                    parsed_name = parse_name(url.name or parsed_url)  # 'feide:new_tjeneste' -> 'feide__new_tjeneste'

                    # Write to file.
                    frontend_file.write(NEWLINE + f"  {parsed_name}: '{parsed_url}',")
                    backend_file.write(NEWLINE + f"{parsed_name} = '{url.name}'")

                    # Print in javascript mode for easy copy.
                    red_name = colorize(parsed_name or 'unknown', Colorize.RED)
                    green_url = colorize(f"'{parsed_url}'", Colorize.GREEN)
                    print(f'{red_name}: {green_url},')

                backend_file.write(NEWLINE)
                frontend_file.write(NEWLINE)
                frontend_file.write('} as const;')
