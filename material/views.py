from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Material
from .serializers import MaterialSerializer
from drf_yasg.utils import swagger_auto_schema

# Create your views here.
@api_view(['GET'])
def material_get_all(request):
    """
    Get all data of material

    Requires
    --------
    
    Args
    -------
    - query param
        - category
            - To get list of material based on tukang category id
            - usage : <GET> https://devcamp.kuadran.co/material/?category=1

    Returns
    -------
    List data of material
    """
    materials = Material.objects.all()
    serializer = MaterialSerializer(materials, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
