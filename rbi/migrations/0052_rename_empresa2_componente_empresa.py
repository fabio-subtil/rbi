# Generated by Django 4.2.16 on 2024-10-13 14:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0051_rename_tagequip_tag_tag'),
    ]

    operations = [
        migrations.RenameField(
            model_name='componente',
            old_name='Empresa2',
            new_name='Empresa',
        ),
    ]
