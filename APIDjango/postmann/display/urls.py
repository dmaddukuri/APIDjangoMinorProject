#from django.contrib import admin
from django.urls import path
#from .views import UserApiView
from . import views

urlpatterns = [
    path('display/', views.login,name="display"),
    path('submit/', views.submitUser, name="submitb"),
    path('login/', views.loginUser, name="loginb"),
    path('', views.homePage, name="homePage"),
    path('c/', views.contact, name="contact"),
    path('s/', views.service, name="service"),
    path('lh/', views.loginHtml, name="loginHtml"),
    path('RList/', views.getRList, name="RListb"),
        
]