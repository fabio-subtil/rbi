# Generated by Django 4.2.16 on 2024-10-12 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0034_alter_area_id_alter_empresa_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='slug',
            field=models.SlugField(blank=True, null=True),
        ),
    ]
