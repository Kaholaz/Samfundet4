# Generated by Django 4.1.6 on 2023-03-06 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0004_booking_created_at_booking_updated_at_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TextItem',
            fields=[
                ('key', models.CharField(max_length=40, primary_key=True, serialize=False, unique=True)),
                ('text_nb', models.TextField()),
                ('text_en', models.TextField()),
            ],
            options={
                'verbose_name': 'TextItem',
                'verbose_name_plural': 'TextItems',
            },
        ),
    ]
