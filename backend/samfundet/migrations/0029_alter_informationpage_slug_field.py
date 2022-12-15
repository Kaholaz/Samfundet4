# Generated by Django 4.1.3 on 2022-12-15 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0028_alter_gang_gang_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='informationpage',
            name='slug_field',
            field=models.SlugField(help_text='Primary key, this field will identify the object and be used in the URL.', max_length=64, primary_key=True, serialize=False, unique=True),
        ),
    ]
