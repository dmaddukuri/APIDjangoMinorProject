from django.db import models

# Create your models here.
class UserAPI(models.Model):
    name = models.CharField(unique=False, max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(unique=False, max_length=50)


    def __str__(self):
       return self.email

#name, cuisine and rating
class RestaurantList(models.Model):
    image=models.ImageField(upload_to='images/',null=True)
    Rname=models.CharField(unique=True, max_length=50)
    cuisine = models.CharField(unique=False, max_length=50)
    rating = models.CharField(unique=False, max_length=50)

    def __str__(self):
       return self.Rname