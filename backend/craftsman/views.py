from ast import Return
from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Craftsman, CraftsmanCategory
from .serializers import CraftsmanCategorySerializer, CraftsmanSerializer
from drf_yasg.utils import swagger_auto_schema

# Create your views here.
@api_view(['GET'])
@swagger_auto_schema(method='get')
def craftsman_get(request):
    """
    Get all data of tukangs

    Requires
    --------
    
    Args
    -------
    - query param
        - category
            - To get list of tukangs based on category id
            - usage : <GET> https://devcamp.kuadran.co/craftsman/?category=1

    Returns
    -------
    List data of tukangs
    """

    craftsman = Craftsman.objects.all()
    category = request.query_params.get('category')
    if category is not None:
        craftsman = Craftsman.objects.filter(category=category)

    serializer = CraftsmanSerializer(craftsman, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])  
@swagger_auto_schema(method='get')
def craftsman_get_detail(request, pk:int):
    """
    Get detail of tukang

    Requires
    --------
    
    Args
    -------
    - param
        - id
            - usage : <GET> https://devcamp.kuadran.co/craftsman/1

    Returns
    -------
    Detail of tukang
    """
    try:     
        craftsman = Craftsman.objects.get(id=pk)
    except ObjectDoesNotExist:
        craftsman = None
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = CraftsmanSerializer(craftsman)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@swagger_auto_schema(method='get')
def craftsman_get_allcategory(request):
    """
    Get all categories of tukang

    Requires
    --------
    
    Args
    -------

    Returns
    -------
    List of categories of tukang
    """
    category = CraftsmanCategory.objects.all()
    serializer = CraftsmanCategorySerializer(category, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)