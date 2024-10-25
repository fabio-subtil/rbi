# Generated by Django 4.2.16 on 2024-10-15 12:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rbi', '0062_rename_razaocentraltorisferico_abacomponente_razaomaiormenoreixos'),
    ]

    operations = [
        migrations.CreateModel(
            name='Abadadosgerais',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dataavalicao', models.DateField(auto_now_add=True)),
                ('metodoavaliacao', models.CharField(blank=True, max_length=20, null=True)),
                ('periodoavaliado', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tipogeometriaapi', models.CharField(blank=True, max_length=20, null=True)),
                ('codigoprojeto', models.CharField(blank=True, max_length=20, null=True)),
                ('datainiciooperacao', models.DateField(auto_now_add=True)),
                ('nomecomponente', models.CharField(blank=True, max_length=20, null=True)),
                ('materialcomponente', models.CharField(blank=True, max_length=20, null=True)),
                ('tensaoresistencia', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tensaoescoamento', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tensaoadmissivel', models.DecimalField(decimal_places=2, max_digits=10)),
                ('percenxofre', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tratamentotermico', models.BooleanField()),
                ('controleadministrativo', models.BooleanField()),
                ('confiabilidadedados', models.CharField(blank=True, max_length=20, null=True)),
                ('FMS', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tipodeconstrucao', models.CharField(blank=True, max_length=20, null=True)),
                ('manutençãoapi653', models.CharField(blank=True, max_length=20, null=True)),
                ('avaliacaorequalque', models.CharField(blank=True, max_length=20, null=True)),
                ('numeroproposta', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tag_componente4', to='rbi.proposta')),
            ],
        ),
    ]