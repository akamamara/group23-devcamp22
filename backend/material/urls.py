from .views import material_get_all
from django.urls import path

urlpatterns = [
    path('', material_get_all)
]
