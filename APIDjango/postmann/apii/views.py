#from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from .models import UserAPI
from .serializers import UserApiSerializers
from django.shortcuts import get_object_or_404
from .models import RestaurantList
from .serializers import RestaurantListSerializers

class UserRestaurantList(APIView):
    def get(self, request):
        #print(request.data.get('email'))
        #print(request)
        print(request.data)
        data = RestaurantList.objects.all()
        serializer = RestaurantListSerializers(data, context={'request': request}, many=True)
        stri = str(serializer.data)
        return Response(serializer.data)
       # stri = str(Rdata)
       # query = RestaurantList.objects.filter(Rname=request.data.get('Rname'))#.values().first()
       # if query:
       #     if query.values('Rname').first()['Rname']==request.data.get('Rname'):
       #         return Response(stri)
       #     else:
       #         return Response("Rname is incorrect")
       #          #print(query)
       #     return Response("Your have list")
       #     #return Response(UserAPI.objects.all())
       #else:
       #    return Response("you dont have list"+stri)

    


class UserApiView(APIView):

    def get(self, request):
        #print(request.data.get('email'))
        #print(request)
        print(request.data)
        query = UserAPI.objects.filter(email=request.data.get('email'))#.values().first()
        if query:
            if query.values('password').first()['password']==request.data.get('password'):
                return Response("Welcome, You are succesfully logged in")
            else:
                return Response("password is incorrect")
                 #print(query)
            return Response("Your are succcesfully logged in")
            #return Response(UserAPI.objects.all())
        else:
            return Response("User is not registered")

    def post(self, request):
        que=UserAPI.objects.filter(email=request.data.get('email'))
        if que:
            return Response("User with email id '{} cannot be registered".format(que))
        else:
            queryset = request.data

            serializer = UserApiSerializers(data=queryset)
            if serializer.is_valid(raise_exception=True):
                save_data = serializer.save()

            return Response({"Success":"User '{} created successfully".format(save_data.name)})

    def put(self,request, pk):
        queryset = get_object_or_404(UserAPI.objects.all(),pk=pk) # to get the stored data

        parsed_data = request.data # it will give the new values which user wants to update
        serializer = UserApiSerializers(instance=queryset, data=parsed_data,partial=True)

        if serializer.is_valid(raise_exception=True):
            save_data = serializer.save()
        return Response({"Success":"User '{} updated successfully".format(save_data.name)})


    def delete(self, request,pk):
        queryset = get_object_or_404(UserAPI.objects.all(),pk=pk)
        queryset.delete()
        return Response({"Success": "User with id '{}' deleted successfully".format(pk)})
