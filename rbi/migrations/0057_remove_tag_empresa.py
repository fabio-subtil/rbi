# Generated by Django 4.2.16 on 2024-10-14 14:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0056_alter_area_id_alter_componente_id_alter_empresa_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tag',
            name='Empresa',
        ),
    ]