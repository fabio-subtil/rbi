# Generated by Django 4.2.16 on 2024-10-14 14:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0058_remove_componente_area_remove_componente_empresa'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='proposta',
            name='Area',
        ),
        migrations.RemoveField(
            model_name='proposta',
            name='Empresa',
        ),
        migrations.RemoveField(
            model_name='proposta',
            name='tag',
        ),
    ]
