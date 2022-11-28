# Generated by Django 4.1.3 on 2022-11-23 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0007_gangtype_gang'),
    ]

    operations = [
        migrations.CreateModel(
            name='InformationPage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_no', models.CharField(max_length=64, unique=True, verbose_name='Navn Norsk')),
                ('title_no', models.CharField(max_length=64, verbose_name='Tittel Norsk')),
                ('text_no', models.TextField(verbose_name='Tekst Norsk')),
                ('name_en', models.CharField(max_length=64, verbose_name='Navn Engelsk')),
                ('title_en', models.CharField(max_length=64, verbose_name='Tittel Engelsk')),
                ('text_en', models.TextField(verbose_name='Tekst Engelsk')),
            ],
        ),
    ]
