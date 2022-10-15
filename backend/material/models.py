from email.policy import default
from django.db import models
from craftsman.models import CraftsmanCategory

# Create your models here.
class Material(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    img = models.ImageField(upload_to='material', null=True, blank=True)
    price = models.FloatField(default=0)
    used_by = models.ManyToManyField(CraftsmanCategory)

    def __str__(self) -> str:
        return self.name