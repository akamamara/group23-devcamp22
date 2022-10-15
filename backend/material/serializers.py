from rest_framework import serializers
from .models import Material

class MaterialSerializer(serializers.ModelSerializer):
    used_by = serializers.StringRelatedField(many=True)
    class Meta:
        model = Material
        fields = "__all__"