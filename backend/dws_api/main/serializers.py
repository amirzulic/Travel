from rest_framework import serializers
from . import models

class AgencySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Agency
        fields = ['id', 'agency_name', 'agency_email', 'doe', 'password']

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Trip
        fields = ['id', 'destination', 'agency', 'date_time', 'transport_type', 'price', 'max_passengers', 'min_passengers', 'status']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id', 'first_name', 'last_name', 'email', 'password']

class UserTripSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserTrip
        field = ['user', 'trip']