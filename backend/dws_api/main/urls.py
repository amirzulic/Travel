from django.urls import path
from . import views

urlpatterns = [
    path('agency/', views.AgencyList.as_view()),
    path('agency/<int:pk>/', views.AgencyDetail.as_view()),
    path('trip/', views.TripList.as_view()),
    path('trip/<int:pk>/', views.TripDetail.as_view()),
    path('user/', views.UserList.as_view()),
    path('user/<int:pk>/', views.UserDetail.as_view()),
    path('user-trip/', views.UserTripList.as_view()),
    path('user-trip/<int:pk>/', views.UserTripDetail.as_view()),
    path('user-login', views.user_login),
    path('agency-login', views.agency_login)
] 