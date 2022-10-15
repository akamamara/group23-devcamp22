from django.urls import path
from .views import craftsman_get, craftsman_get_allcategory, craftsman_get_detail

urlpatterns = [
    path('', craftsman_get),
    path("<int:pk>", craftsman_get_detail),
    path('category/', craftsman_get_allcategory)
]
