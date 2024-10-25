from django.shortcuts import render, redirect
from rbi.models import Empresa, AreaModel
from rbi.forms import (
   cadastroempresaForm,
   # cadastroareaForm,
   cadastroequipForm,
   cadastrocomponenteForm,
   cadastropropostaForm,
   cadastroAreaForm
   )
from rbi.serializers import AreaSerializer
from rest_framework import viewsets
from django.views import View
from django.views.generic import UpdateView, DeleteView, DetailView


class AreasViewSet(viewsets.ModelViewSet):
    queryset = AreaModel.objects.all()
    serializer_class = AreaSerializer


class Index_view(View):
    def get(self, request):
        form = cadastroempresaForm()
        empresas = Empresa.objects.all()
        context = {"rbi": empresas, 'form': form, }
        return render(request, "index.html", context=context)


class Cadastroempresa_view(View):
   def get(self, request):
      cadastroempresa_form = cadastroempresaForm()
      return render (request, 'cadastroempresa.html', {'cadastroempresa_form': cadastroempresa_form})
   def post(self, request):
      cadastroempresa_form = cadastroempresaForm(request.POST, request.FILES)
      if cadastroempresa_form.is_valid():
         cadastroempresa_form.save()
         return redirect("index")
      return render(request, 'cadastroempresa.html', {'cadastroempresa_form': cadastroempresa_form})


class Detailempresa_DetailView(DetailView):
   model = Empresa
   form_class = cadastroempresaForm
   template_name = 'detailempresa.html'


class Updatempresa_UpdateView(UpdateView):
   model = Empresa
   form_class = cadastroempresaForm
   template_name = 'updatempresa.html'
   success_url = '/rbi/'


class deletempresa_deleteView(DeleteView):
   model = Empresa
   form_class = cadastroempresaForm
   template_name = 'deletempresa.html'
   success_url = '/rbi/'


class Cadastroarea_view(View):
   def get(self, request):
      cadastroarea_form = cadastroareaForm()
      return render (request, 'cadastroarea.html', {'cadastroarea_form': cadastroarea_form})
   def post(self, request):
      cadastroarea_form = cadastroareaForm(request.POST, request.FILES)
      if cadastroarea_form.is_valid():
         cadastroarea_form.save()
         return redirect("index")
      return render (request, 'cadastroarea.html', {'cadastroarea_form': cadastroarea_form})


class Cadastroequip_view(View):
   def get(self, request):
      cadastroequip_form = cadastroequipForm()
      return render (request, 'cadastroequip.html', {'cadastroequip_form': cadastroequip_form})
   def post(self, request):
      cadastroequip_form = cadastroequipForm(request.POST, request.FILES)
      if cadastroequip_form.is_valid():
        cadastroequip_form.save()
        return redirect("index")
      return render (request, 'cadastroequip.html', {'cadastroequip_form': cadastroequip_form})


class Cadastrocomponente_view(View):
   def get(self, request):
      cadastrocomponente_form = cadastrocomponenteForm()
      return render (request, 'cadastrocomponente.html', {'cadastrocomponente_form': cadastrocomponente_form})
   def post(self, request):
      cadastrocomponente_form = cadastrocomponenteForm(request.POST, request.FILES)
      if cadastrocomponente_form.is_valid():
        cadastrocomponente_form.save()
        return redirect("index")


class Cadastroproposta_view(View):
   def get(self, request):
      cadastroproposta_form = cadastropropostaForm()
      return render (request, 'cadastroproposta.html', {'cadastroproposta_form': cadastroproposta_form})
   def post(self, request):
      cadastroproposta_form = cadastropropostaForm(request.POST, request.FILES)
      if cadastroproposta_form.is_valid():
        cadastroproposta_form.save()
        return redirect("index")


# Não é extremamente necessário fazer uma classe para as views,
# porem pode ser alterado sem problemas a fins de organização
# esse modelo de view pode ser alterado, mas vale a pena pensar
# numa organização padrão

def area_form_view(request):
    form = cadastroAreaForm()
    context = {'form': form}
    if request.method == "POST":
        form = cadastroAreaForm(request.POST)
        if form.is_valid():
            AreaModel.objects.create(**form.cleaned_data)
            return redirect('index')
    return render(request, 'area-form.html', context)
