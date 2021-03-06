# Generated by Django 4.0.4 on 2022-06-04 00:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Agency',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('agency_name', models.CharField(max_length=100)),
                ('agency_id', models.CharField(max_length=100)),
                ('doe', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('destination', models.CharField(max_length=100)),
                ('date_time', models.CharField(max_length=100)),
                ('transport_type', models.CharField(max_length=100)),
                ('price', models.CharField(max_length=100)),
                ('max_passengers', models.CharField(max_length=10)),
                ('min_passengers', models.CharField(max_length=10)),
                ('status', models.IntegerField(default=1)),
                ('agency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.agency')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('username', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('proffesion', models.CharField(max_length=100)),
                ('trip', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.trip')),
            ],
        ),
    ]
