# Generated by Django 4.1.6 on 2023-02-21 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0002_rename_description_no_closedperiod_description_nb_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='TextItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(max_length=40, unique=True)),
                ('text_nb', models.TextField()),
                ('text_en', models.TextField()),
            ],
            options={
                'verbose_name': 'nøkkel-tekst objekt',
                'verbose_name_plural': 'nøkkel-tekst objekter',
            },
        ),
    ]
