# Generated by Django 4.2.1 on 2023-06-06 19:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0030_alter_informationpage_slug_field'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_nb', models.CharField(blank=True, max_length=64, null=True, verbose_name='Tittel (norsk)')),
                ('text_nb', models.TextField(blank=True, null=True, verbose_name='Tekst (norsk)')),
                ('title_en', models.CharField(blank=True, max_length=64, null=True, verbose_name='Tittel (engelsk)')),
                ('text_en', models.TextField(blank=True, null=True, verbose_name='Tekst (engelsk)')),
                ('publish', models.DateTimeField(auto_now_add=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('image', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='samfundet.image')),
            ],
            options={
                'verbose_name': 'Blog post',
                'verbose_name_plural': 'Blogg posts',
            },
        ),
    ]
