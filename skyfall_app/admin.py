from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import KeplerianElements, CESBody, Planet, NearEarthObjects, LastUpdate

admin.site.register([KeplerianElements, CESBody, Planet, NearEarthObjects, LastUpdate])
