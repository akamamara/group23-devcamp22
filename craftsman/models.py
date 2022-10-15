from django.db import models

# Create your models here.
class CraftsmanCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self) -> str:
        return self.name

class CraftsmanService(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self) -> str:
        return self.name
class Craftsman(models.Model):
    name = models.CharField(max_length=50)
    bio = models.TextField()
    profile_img = models.ImageField(upload_to='craftsman')
    category = models.ForeignKey(CraftsmanCategory, on_delete=models.CASCADE, null=True, blank=True)
    services = models.ManyToManyField(CraftsmanService)

    def __str__(self) -> str:
        return self.name