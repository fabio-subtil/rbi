from rest_framework import serializers
from rbi.models import (
    AreaModel
)

# Aqui serão feitos todos os serializers

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AreaModel
        fields = "__all__"
