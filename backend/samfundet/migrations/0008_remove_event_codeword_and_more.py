# Generated by Django 4.1.7 on 2023-03-16 20:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('samfundet', '0007_remove_event_banner_image_event_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='codeword',
        ),
        migrations.AlterField(
            model_name='event',
            name='description_long_en',
            field=models.TextField(default='missing description'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='description_long_nb',
            field=models.TextField(default='mangler beskrivelse'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='description_short_en',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='description_short_nb',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='duration',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='event',
            name='host',
            field=models.CharField(default='', max_length=140),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ForeignKey(
                default=0,
                on_delete=django.db.models.deletion.PROTECT,
                to='samfundet.image'
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='location',
            field=models.CharField(default='', max_length=140),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='publish_dt',
            field=models.DateTimeField(default='2023-01-01'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='start_dt',
            field=models.DateTimeField(default='2023-01-01'),
            preserve_default=False,
        ),
    ]
