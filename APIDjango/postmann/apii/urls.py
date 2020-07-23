#from django.contrib import admin
from django.urls import path
from .views import UserApiView
from .views import UserRestaurantList

urlpatterns = [
    path('login/', UserApiView.as_view()),
    path('login/<int:pk>', UserApiView.as_view()),
    path('RestaurantList/', UserRestaurantList.as_view()),
    path('RestaurantList/<int:pk>', UserRestaurantList.as_view()),
     
]