from dataclasses import field
from rest_framework import serializers
from .models import Craftsman, CraftsmanCategory

class CraftsmanSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()
    services = serializers.StringRelatedField(many=True)
    class Meta:
        model = Craftsman
        fields = ("id", 'name', 'profile_img', 'bio', 'category', 'services')

class CraftsmanCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CraftsmanCategory
        fields = "__all__"