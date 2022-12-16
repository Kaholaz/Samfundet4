# Generated by Django 4.1.3 on 2022-12-14 16:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0027_alter_gang_abbreviation_alter_gang_name_en_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gang',
            name='gang_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='gangs', to='samfundet.gangtype', verbose_name='Gruppetype'),
        ),
    ]
