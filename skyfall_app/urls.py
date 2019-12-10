from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('KeplerianElements', views.KeplerianElementsView)
router.register('CESBody', views.CESBodyView)
router.register('Planet', views.PlanetView)
router.register('NearEarthObjects', views.NearEarthObjectsView)
router.register('LastUpdate', views.LastUpdateView)


urlpatterns = [
    path('', include(router.urls))
]