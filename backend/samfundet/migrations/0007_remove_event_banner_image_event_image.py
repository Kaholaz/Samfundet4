# Generated by Django 4.1.7 on 2023-03-15 20:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0006_event_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='banner_image',
        ),
        migrations.AddField(
            model_name='event',
            name='image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='samfundet.image'),
        ),
    ]
