# Generated by Django 4.2.16 on 2024-10-12 18:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0035_tag_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='Empresa1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='area_empresa', to='rbi.empresa'),
        ),
    ]