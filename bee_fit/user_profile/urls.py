from django.conf.urls import include, url
from django.urls import path
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework import routers

from user_profile.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'user', UserViewSet,)

urlpatterns = [
    # This is used for user reset password
    url(r'^', include('django.contrib.auth.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    url(r'^api/',  include(router.urls)),
]

