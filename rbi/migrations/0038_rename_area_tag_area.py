# Generated by Django 4.2.16 on 2024-10-12 22:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0037_alter_tag_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tag',
            old_name='Area',
            new_name='area',
        ),
    ]