# Generated by Django 4.1.3 on 2022-11-26 23:24

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0013_alter_event_options_alter_eventgroup_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='venue',
            name='closing',
            field=models.TimeField(blank=True, default=datetime.time(20, 0)),
        ),
        migrations.AddField(
            model_name='venue',
            name='opening',
            field=models.TimeField(blank=True, default=datetime.time(8, 0)),
        ),
        migrations.AlterField(
            model_name='event',
            name='description_long_en',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='description_long_no',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='description_short_en',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='description_short_no',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='end_dt',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_group',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.PROTECT, to='samfundet.eventgroup'),
        ),
        migrations.AlterField(
            model_name='event',
            name='host',
            field=models.CharField(blank=True, max_length=140),
        ),
        migrations.AlterField(
            model_name='event',
            name='location',
            field=models.CharField(blank=True, max_length=140),
        ),
        migrations.AlterField(
            model_name='event',
            name='price_group',
            field=models.CharField(blank=True, choices=[('INCLUDED', 'Included with entrance'), ('FREE', 'Free'), ('BILLIG', 'Paid'), ('REGISTRATION', 'Free with registration')], default='FREE', max_length=30),
        ),
        migrations.AlterField(
            model_name='event',
            name='publish_dt',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='start_dt',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='venue',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='venue',
            name='handicapped_approved',
            field=models.BooleanField(blank=True),
        ),
        migrations.AlterField(
            model_name='venue',
            name='last_renovated',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='venue',
            name='name',
            field=models.CharField(blank=True, max_length=140, unique=True),
        ),
        migrations.AlterField(
            model_name='venue',
            name='responsible_crew',
            field=models.CharField(blank=True, max_length=140),
        ),
    ]
