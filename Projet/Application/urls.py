"""Application URL Configuration

Router propre à l'Application.
"""

from django.urls import path
from . import views


urlpatterns = [
    path("", views.welcome, name="welcome"),
    path("page_1", views.page_1, name="page_1"),
    path("contact", views.contact, name="contact")
]
