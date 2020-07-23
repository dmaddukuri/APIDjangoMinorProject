from django.contrib import admin
from .models import UserAPI
from .models import RestaurantList
# Register your models here.

admin.site.register(UserAPI)
admin.site.register(RestaurantList)