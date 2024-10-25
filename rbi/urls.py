from django.urls import path, include
from rbi.views import (
    Index_view,
    Cadastroempresa_view,
    # Cadastroarea_view,
    Cadastroequip_view,
    Cadastroproposta_view,
    Cadastrocomponente_view,
    Updatempresa_UpdateView,
    Detailempresa_DetailView,
    area_form_view,
    AreasViewSet
    )
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"areas", AreasViewSet)


urlpatterns = [
    path('index/', Index_view.as_view(), name='index'),
    path('cadastroempresa/', Cadastroempresa_view.as_view(), name='cadastroempresa'),
    path('cadastroempresa/<int:pk>detailempresa/', Detailempresa_DetailView.as_view(), name='detailempresa'),
    path('cadastroempresa/<int:pk>updatempresa/', Updatempresa_UpdateView.as_view(), name='updatempresa'),
    # path('cadastroarea/', Cadastroarea_view.as_view(), name='cadastroarea'),
    path('area-form/', area_form_view, name='area-form'),
    path('cadastroequip/', Cadastroequip_view.as_view(), name='cadastroequip'),
    path('cadastrocomponente/', Cadastrocomponente_view.as_view(), name='cadastrocomponente'),
    path('cadastroproposta/', Cadastroproposta_view.as_view(), name='cadastroproposta'),
    path("api/", include(router.urls)),
]
