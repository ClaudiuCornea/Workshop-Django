from django.shortcuts import render

# Create your views here.


def welcome(request):
    return render(request, "Application/welcome.html")


def page_1(request):
    return render(request, "Application/page_1.html")


def contact(request):
    return render(request, "Application/contact.html")