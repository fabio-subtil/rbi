# Generated by Django 4.2.16 on 2024-10-13 13:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0049_rename_dados_equipamento_numeroproposta'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tag',
            old_name='Empresa1',
            new_name='Empresa',
        ),
    ]
