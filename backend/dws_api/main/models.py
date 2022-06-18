from tabnanny import verbose
from django.db import models

# User

class Agency(models.Model):
    agency_name = models.CharField(max_length=100)
    agency_email = models.CharField(max_length=100)
    doe = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Agencies"

class Trip(models.Model):
    destination = models.CharField(max_length=100)
    agency = models.CharField(max_length=10)
    date_time = models.CharField(max_length=100)
    transport_type = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    max_passengers = models.IntegerField(default = 5)
    min_passengers = models.IntegerField(default = 2)
    #agency = models.ForeignKey(Agency, on_delete=models.CASCADE)
    status = models.IntegerField(default=1)
    
class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

class UserTrip(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)

