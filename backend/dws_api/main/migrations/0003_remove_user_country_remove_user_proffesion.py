# Generated by Django 4.0.4 on 2022-06-06 00:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_agency_options_remove_user_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='country',
        ),
        migrations.RemoveField(
            model_name='user',
            name='proffesion',
        ),
    ]