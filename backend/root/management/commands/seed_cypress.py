from datetime import time

from django.db import transaction
from django.conf import settings
from django.utils import timezone
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

from root.constants import Environment

from samfundet.models import (
    Venue,
    InformationPage,
)

User = get_user_model()

PW = 'Django123'
TIME_8 = time(hour=8)
TIME_23 = time(hour=23)


class Command(BaseCommand):
    help = 'Seed database for testing and development.'

    def handle(self, *args, **options):
        print('Running seed script for Cypress...')

        # Avoid running seed in production.
        if settings.ENV == Environment.PROD:
            print("Detected production environment! Cancelled seed script. You're welcome.")
            return

        # All or nothing.
        with transaction.atomic():

            User.objects.create_superuser(
                username='cypress_superuser',
                password=PW,
                first_name='Cypress',
                last_name='Superuser',
                email='superuser@cypress.com',
            )
            User.objects.create_user(
                username='cypress_user',
                password=PW,
                first_name='Cypress',
                last_name='User',
                email='user@cypress.com',
            )

            InformationPage.objects.create(
                slug_field='cypress',
                title_no='Cypress Test Side',
                title_en='Cypress Test Page',
                text_no='Noe tekst',
                text_en='Some text',
            )

            Venue.objects.create(
                name='Cypress Area',
                description='Some description',
                floor=1,
                last_renovated=timezone.now(),
                handicapped_approved=True,
                responsible_crew='Cypress team',
                opening_monday=TIME_8,
                closing_monday=TIME_23,
            )

        # Done.
        print('Seeding complete.')
