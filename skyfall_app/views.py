from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .serializers import KeplerianElementsSerializer, CESBodySerializer, PlanetSerializer, NearEarthObjectsSerializer, LastUpdateSerializer
from .models import KeplerianElements, CESBody, Planet, NearEarthObjects, LastUpdate


class KeplerianElementsView(viewsets.ModelViewSet):
    queryset = KeplerianElements.objects.all()
    serializer_class = KeplerianElementsSerializer


class CESBodyView(viewsets.ModelViewSet):
    queryset = CESBody.objects.all()
    serializer_class = CESBodySerializer


class PlanetView(viewsets.ModelViewSet):
    queryset = Planet.objects.all()
    serializer_class = PlanetSerializer


class NearEarthObjectsView(viewsets.ModelViewSet):
    queryset = NearEarthObjects.objects.all()
    serializer_class = NearEarthObjectsSerializer


class LastUpdateView(viewsets.ModelViewSet):
    queryset = LastUpdate.objects.all()
    serializer_class = LastUpdateSerializer
