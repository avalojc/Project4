from rest_framework import serializers

from .models import KeplerianElements, CESBody, Planet, NearEarthObjects, LastUpdate


class KeplerianElementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeplerianElements
        fields = ('id',
                  'semi_major_axis_diacritic',
                  'semi_major_axis_subscript',
                  'eccentricity_diacritic',
                  'eccentricity_subscript',
                  'inclination_diacritic',
                  'inclination_subscript',
                  'mean_longitude_diacritic',
                  'mean_longitude_subscript',
                  'longitude_of_perihelion_diacritic',
                  'longitude_of_perihelion_subscript',
                  'longitude_of_the_ascending_node_diacritic',
                  'longitude_of_the_ascending_node_subscript',
                  'name',
                  'x_pos',
                  'y_pos',
                  'z_pos', )


class CESBodySerializer(serializers.ModelSerializer):
    class Meta:
        model = CESBody
        fields = ('id',
                  'name',
                  'description',
                  'velocity',
                  'x_pos',
                  'y_pos',
                  'z_pos', )


class PlanetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planet
        fields = ('id',
                  'name',
                  'photo_url',
                  'gas_or_rocky',)


class NearEarthObjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NearEarthObjects
        fields = ('id',
                  'name',
                  'photo_url',
                  'orbiting_body',)


class LastUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = LastUpdate
        fields = ('id',
                  'date',)
