from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions,status
from rest_framework.response import Response 
from .models import InternshipPlacement
from .serializers import PlacementSerializer, PlacementCreateSerializer
from user.permissions import IsAdmin


class PlacementViewset(viewsets.ModelViewSet):
    """
    ViewSet for InternshipPlacement.


    Access rules:
    -Admin:full CRUD (create,read,update,delete)
    -Supervisor: read only(their supervised placements)
    -Student: read only (their own plaxement)
    """

    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        """Use lighter serializer when creating/updating."""
        if self.action in ['create','update','partial_update']:
            return PLacementsCreateSerializer
        return PlacementSerializer