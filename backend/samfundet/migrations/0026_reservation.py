# Generated by Django 4.2 on 2023-04-21 09:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0025_alter_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=64, verbose_name='Navn')),
                ('email', models.EmailField(blank=True, max_length=64, verbose_name='Epost')),
                ('phonenumber', models.CharField(blank=True, max_length=8, null=True, verbose_name='Telefonnummer')),
                ('date', models.DateField(blank=True, verbose_name='Dato')),
                ('start_time', models.TimeField(blank=True, verbose_name='Starttid')),
                ('end_time', models.TimeField(blank=True, verbose_name='Sluttid')),
                ('occasion', models.CharField(choices=[('DRINK', 'Drikke'), ('FOOD', 'Mat')], default='FOOD', max_length=24)),
                ('guest_count', models.PositiveSmallIntegerField(verbose_name='Antall gjester')),
                ('additional_info', models.TextField(blank=True, null=True, verbose_name='Tilleggsinformasjon')),
                ('internal_messages', models.TextField(blank=True, null=True, verbose_name='Interne meldinger')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('venue', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='samfundet.venue', verbose_name='Sted')),
            ],
            options={
                'verbose_name': 'Reservation',
                'verbose_name_plural': 'Reservations',
            },
        ),
    ]
