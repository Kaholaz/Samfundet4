# Generated by Django 4.1.7 on 2023-03-28 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0009_alter_user_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='userpreference',
            name='mirror_dimension',
            field=models.BooleanField(default=False),
        ),
    ]
