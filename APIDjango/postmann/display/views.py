from django.shortcuts import render

import json
# Create your views here.
from pip._vendor import requests

def homePage(request):
    return render(request, 'home.html')

def contact(request):
    return render(request, 'contact.html')

def service(request):
    return render(request, 'service.html')

def login(request):
    return render(request, 'register.html')

def loginHtml(request):
    return render(request, 'login.html')

def getRList(request):
    Rname = request.GET['Rname']
    cuisine=request.GET['cuisine']
    rating=request.GET['rating']
   # name=request.GET['name']
    print(Rname,cuisine,rating," printing details")

    url = "http://127.0.0.1:8000/apii/RestaurantList/"
    payload={"Rname":Rname,"cuisine":cuisine,"rating":rating}
    payload = json.dumps(payload)
    # payload = "{\r\n    \"email\": \"c@gmail.com\",\r\n    \"password\": \"suman5\",\r\n    \"name\": \"suman5\"\r\n}"
    headers = {
        'Token': '',
        'X-Amz-Content-Sha256': 'beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3',
        'X-Amz-Date': '20200702T013306Z',
        'Authorization': 'AWS4-HMAC-SHA256 Credential=undefined/20200702/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=6b2753c6f4ee84dbef9e5b717cc760b2de89fc5bad9d4d5f4d6817a44d20076f',
        'Content-Type': 'application/json'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    data = response.text
    return render(request,'temp.html',{'data':data})

def submitUser(request):
    email = request.GET['email']
    password=request.GET['password']
    name=request.GET['name']
    print(email,password,name," printing details")

    url = "http://127.0.0.1:8000/apii/login/"
    payload={"email":email,"password":password,"name":name}
    payload = json.dumps(payload)
    # payload = "{\r\n    \"email\": \"c@gmail.com\",\r\n    \"password\": \"suman5\",\r\n    \"name\": \"suman5\"\r\n}"
    headers = {
        'Token': '',
        'X-Amz-Content-Sha256': 'beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3',
        'X-Amz-Date': '20200702T013306Z',
        'Authorization': 'AWS4-HMAC-SHA256 Credential=undefined/20200702/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=6b2753c6f4ee84dbef9e5b717cc760b2de89fc5bad9d4d5f4d6817a44d20076f',
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    data = response.text
    return render(request,'login.html',{'data':data})

def loginUser(request):
    email = request.GET['email']
    password=request.GET['password']
   # name=request.GET['name']
    print(email,password," printing details")

    url = "http://127.0.0.1:8000/apii/login/"
    payload={"email":email,"password":password}
    payload = json.dumps(payload)
    # payload = "{\r\n    \"email\": \"c@gmail.com\",\r\n    \"password\": \"suman5\",\r\n    \"name\": \"suman5\"\r\n}"
    headers = {
        'Token': '',
        'X-Amz-Content-Sha256': 'beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3',
        'X-Amz-Date': '20200702T013306Z',
        'Authorization': 'AWS4-HMAC-SHA256 Credential=undefined/20200702/us-east-1/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=6b2753c6f4ee84dbef9e5b717cc760b2de89fc5bad9d4d5f4d6817a44d20076f',
        'Content-Type': 'application/json'
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    data = response.text
    return render(request,'temp.html',{'data':data})