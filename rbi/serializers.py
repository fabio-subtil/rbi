from rest_framework import serializers
from rbi.models import (
    Area
)

# Aqui serão feitos todos os serializers

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = "__all__"
