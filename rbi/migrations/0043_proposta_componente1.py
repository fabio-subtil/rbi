# Generated by Django 4.2.16 on 2024-10-12 23:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0042_proposta_area3_proposta_empresa3'),
    ]

    operations = [
        migrations.AddField(
            model_name='proposta',
            name='componente1',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tag_componente', to='rbi.tag'),
        ),
    ]
