# Generated by Django 4.2.16 on 2024-10-12 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0040_rename_area_tag_area'),
    ]

    operations = [
        migrations.AddField(
            model_name='componente',
            name='slug',
            field=models.SlugField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='proposta',
            name='slug',
            field=models.SlugField(blank=True, null=True),
        ),
    ]
