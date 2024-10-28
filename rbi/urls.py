
from django.contrib import admin
from django.urls import path, include
from rbi.views import (
    Index_view,
    Cadastroempresa_view,
    Cadastroarea_view,
    Cadastroequip_view,
    Cadastroproposta_view,
    Cadastrocomponente_view,
    Updatempresa_UpdateView,
    Detailempresa_DetailView,
    AreasViewSet,
)
from accounts.views import register_view, login_view

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"areas", AreasViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', register_view, name='register'),
    path('login/', login_view, name='login'),
    path('index/', Index_view.as_view(), name='index'),
    path('cadastroempresa/', Cadastroempresa_view.as_view(), name='cadastroempresa'),
    path('cadastroempresa/<int:pk>detailempresa/', Detailempresa_DetailView.as_view(), name='detailempresa'),
    path('cadastroempresa/<int:pk>updatempresa/', Updatempresa_UpdateView.as_view(), name='updatempresa'),
    path('cadastroarea/', Cadastroarea_view.as_view(), name='cadastroarea'),
    path('cadastroequip/', Cadastroequip_view.as_view(), name='cadastroequip'),
    path('cadastrocomponente/', Cadastrocomponente_view.as_view(), name='cadastrocomponente'),
    path('cadastroproposta/', Cadastroproposta_view.as_view(), name='cadastroproposta'),
    path("api/", include(router.urls)),
]
