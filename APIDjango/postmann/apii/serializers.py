from rest_framework import serializers
from .models import UserAPI
from .models import RestaurantList


class UserApiSerializers(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    email = serializers.CharField()
    password = serializers.CharField()

    def create(self,validated_data):
        return UserAPI.objects.create(**validated_data)

    def update(self,instance, validated_data):
        instance.name = validated_data.get('name',instance.name)
        instance.email = validated_data.get('email',instance.email)
        instance.password = validated_data.get('password',instance.password)
        instance.save()
        return  instance

class RestaurantListSerializers(serializers.Serializer):
    Rname = serializers.CharField(max_length=50)
    cuisine = serializers.CharField()
    rating = serializers.CharField()
    image=serializers.ImageField()

    def create(self,validated_data):
        return RestaurantList.objects.create(**validated_data)

    def update(self,instance, validated_data):
        instance.image=validated_data.get('image',instance.image)
        instance.Rname = validated_data.get('Rname',instance.Rname)
        instance.cuisine = validated_data.get('cuisine',instance.cuisine)
        instance.rating = validated_data.get('rating',instance.rating)
        instance.save()
        return  instance