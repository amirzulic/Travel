# Generated by Django 4.0.4 on 2022-06-07 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_trip_max_passengers_trip_min_passengers'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='status',
            field=models.IntegerField(default=1),
        ),
    ]
