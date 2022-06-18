from tkinter import E
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import permissions
from .serializers import AgencySerializer, TripSerializer, UserSerializer, UserTripSerializer
from . import models
from . import serializers
from rest_framework.response import Response

class AgencyList(generics.ListCreateAPIView):
    queryset = models.Agency.objects.all()
    serializer_class = AgencySerializer

class AgencyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Agency.objects.all()
    serializer_class = AgencySerializer

@csrf_exempt
def agency_login(request):
    email = request.POST['email']
    password = request.POST['password']
    agency_id = models.Agency.objects.get(agency_email = email)
    agency = models.Agency.objects.get(agency_email = email, password = password)
    if agency:
        return JsonResponse({'bool' : True, 'user_type': 'agency','id': agency_id.id})
    else:
        return JsonResponse({'bool' : False})

class TripList(generics.ListCreateAPIView):
    queryset = models.Trip.objects.all()
    serializer_class = TripSerializer
    #permission_classes = [permissions.IsAuthenticated]

class TripDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Trip.objects.all()
    serializer_class = TripSerializer
    #permission_classes = [permissions.IsAuthenticated]

class UserList(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = UserSerializer

@csrf_exempt
def user_login(request):
    email = request.POST['email']
    password = request.POST['password']
    user_id = models.User.objects.get(email = email)
    user = models.User.objects.get(email = email, password = password)
    if user:
        return JsonResponse({'bool' : True, 'user_type': 'user','id': user_id.id})
    else:
        return JsonResponse({'bool' : False})

class UserTripList(generics.ListCreateAPIView):
    queryset = models.UserTrip.objects.all()
    serializer_class = UserTripSerializer

class UserTripDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.UserTrip.objects.all()
    serializer_class = UserTripSerializer