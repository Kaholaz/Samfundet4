# Generated by Django 4.1.3 on 2022-11-29 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samfundet', '0020_foodcategory_foodpreference_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Saksdokument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_no', models.CharField(max_length=80, verbose_name='Tittel (Norsk)')),
                ('title_en', models.CharField(max_length=80, verbose_name='Tittel (Engelsk)')),
                ('publication_date', models.DateTimeField()),
                ('category', models.CharField(choices=[('FS_REFERAT', 'FS-Referat'), ('STYRET', 'Styret'), ('RADET', 'Rådet'), ('ARSBERETNINGER', 'Årsberetninger, regnskap og budsjettkunngjøringger')], max_length=25)),
                ('file', models.FileField(upload_to='uploads/saksdokument/')),
            ],
            options={
                'verbose_name': 'Saksdokument',
                'verbose_name_plural': 'Saksdokument',
            },
        ),
    ]
