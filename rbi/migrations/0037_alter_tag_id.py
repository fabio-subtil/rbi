# Generated by Django 4.2.16 on 2024-10-12 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0036_alter_tag_empresa1'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
