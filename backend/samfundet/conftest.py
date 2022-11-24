import pytest

from rest_framework.test import APIClient

from django.test import Client
from django.contrib.auth.models import User

# pylint: disable=pointless-string-statement
"""
This module contains fixtures available in pytests.
These do not need to be imported.

It's recommended to yield objects, and tear them down afterwards.

https://docs.pytest.org/en/7.1.x/how-to/fixtures.html
"""

# pylint: disable=unused-argument # These are fixtures.


@pytest.fixture
def fixture_rest_client() -> APIClient:
    yield APIClient()


@pytest.fixture
def fixture_django_client() -> Client:
    yield Client()


@pytest.fixture
def fixture_superuser(db) -> User:  # type: ignore[no-untyped-def]
    superuser = User.objects.create_superuser(  # nosec hardcoded_password_funcarg
        username='superuser',
        email='superuser@test.com',
        password='Django123',
    )
    yield superuser
    superuser.delete()


@pytest.fixture
def fixture_staff(db) -> User:  # type: ignore[no-untyped-def]
    staff = User.objects.create_user(  # nosec hardcoded_password_funcarg
        username='staff',
        email='staff@test.com',
        password='Django123',
        is_staff=True,
    )
    yield staff
    staff.delete()


@pytest.fixture
def fixture_user(db) -> User:  # type: ignore[no-untyped-def]
    user = User.objects.create_user(  # nosec hardcoded_password_funcarg
        username='user',
        email='user@test.com',
        password='Django123',
    )
    yield user
    user.delete()
