# Generated by Django 5.1.1 on 2024-09-17 21:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0007_empresa_area'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='empresa',
            name='Area',
        ),
        migrations.AddField(
            model_name='area',
            name='Empresa',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='area_empresa', to='rbi.empresa'),
        ),
    ]
