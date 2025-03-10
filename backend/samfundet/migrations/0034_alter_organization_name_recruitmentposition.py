# Generated by Django 4.2.1 on 2023-06-12 17:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0033_remove_gang_event_admin_remove_gang_gang_leader_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='name',
            field=models.CharField(max_length=32, unique=True),
        ),
        migrations.CreateModel(
            name='RecruitmentPosition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_nb', models.CharField(help_text='Name of the position', max_length=100)),
                ('name_en', models.CharField(help_text='Name of the position', max_length=100)),
                ('short_description_nb', models.CharField(help_text='Short description of the position', max_length=100)),
                ('short_description_en', models.CharField(help_text='Short description of the position', max_length=100)),
                ('long_description_nb', models.TextField(help_text='Long description of the position')),
                ('long_description_en', models.TextField(help_text='Long description of the position')),
                ('is_funksjonaer_position', models.BooleanField(help_text='Is this a funksjonær position?')),
                ('default_admission_letter_nb', models.TextField(help_text='Default admission letter for the position')),
                ('default_admission_letter_en', models.TextField(help_text='Default admission letter for the position')),
                ('tags', models.CharField(help_text='Tags for the position', max_length=100)),
                ('gang', models.ForeignKey(help_text='The gang that is recruiting', on_delete=django.db.models.deletion.CASCADE, to='samfundet.gang')),
                ('interviewers', models.ManyToManyField(blank=True, help_text='Interviewers for the position', related_name='interviews', to=settings.AUTH_USER_MODEL)),
                ('recruitment', models.ForeignKey(blank=True, help_text='The recruitment that is recruiting', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='positions', to='samfundet.recruitment')),
            ],
        ),
    ]
