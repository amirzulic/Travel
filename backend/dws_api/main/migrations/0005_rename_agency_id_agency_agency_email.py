# Generated by Django 4.0.4 on 2022-06-06 00:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_remove_user_trip_usertrip'),
    ]

    operations = [
        migrations.RenameField(
            model_name='agency',
            old_name='agency_id',
            new_name='agency_email',
        ),
    ]