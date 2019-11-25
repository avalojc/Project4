from django.db import models

# Create your models here.


class KeplerianElements(models.Model):
    semi_major_axis_diacritic = models.CharField(max_length=100, default='')
    semi_major_axis_subscript = models.CharField(max_length=100, default='')
    eccentricity_diacritic = models.CharField(max_length=100, default='')
    eccentricity_subscript = models.CharField(max_length=100, default='')
    inclination_diacritic = models.CharField(max_length=100, default='')
    inclination_subscript = models.CharField(max_length=100, default='')
    mean_longitude_diacritic = models.CharField(max_length=100, default='')
    mean_longitude_subscript = models.CharField(max_length=100, default='')
    longitude_of_perihelion_diacritic = models.CharField(max_length=100, default='')
    longitude_of_perihelion_subscript = models.CharField(max_length=100, default='')
    longitude_of_the_ascending_node_diacritic = models.CharField(max_length=100, default='')
    longitude_of_the_ascending_node_subscript = models.CharField(max_length=100, default='')
    name = models.CharField(max_length=32, default='')
    x_pos = models.CharField(max_length=100, default='')
    y_pos = models.CharField(max_length=100, default='')
    z_pos = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.name


class CESBody(models.Model):
    name = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=250, default='')
    velocity = models.CharField(max_length=100, default='')
    x_pos = models.CharField(max_length=100, default='')
    y_pos = models.CharField(max_length=100, default='')
    z_pos = models.CharField(max_length=101, default='')

    def __str__(self):
        return self.name


class Planet(models.Model):
    CESBodyData = models.ForeignKey(CESBody, on_delete=models.CASCADE, related_name='Planet', default='')
    name = models.CharField(max_length=100, default='')
    gas_or_rocky = models.CharField(max_length=101, default='')
    photo_url = models.TextField(default='')

    def __str__(self):
        return self.name


class NearEarthObjects(models.Model):
    CESBodyData = models.ForeignKey(CESBody, on_delete=models.CASCADE, related_name='NearEarthObjects', default='')
    name = models.CharField(max_length=100, default='')
    orbiting_body = models.CharField(max_length=101, default='')
    photo_url = models.TextField(default='')

    def __str__(self):
        return self.name


class LastUpdate(models.Model):
    date = models.CharField(max_length=32, default='')

    def __str__(self):
        return self.date
