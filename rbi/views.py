from django.shortcuts import render, redirect
from rbi.models import Empresa, Area, Abaequipamento, Tag
from rbi.forms import cadastroempresaForm, cadastroareaForm, cadastroequipForm, cadastrocomponenteForm, cadastropropostaForm, abaequipamento
from rbi.serializers import AreaSerializer
from rest_framework import viewsets
from django.views import View
from django.views.generic import UpdateView, DeleteView, DetailView


class AreasViewSet(viewsets.ModelViewSet):
    queryset = Area.objects.all()
    serializer_class = AreaSerializer


class Index_view(View):
    def get(self, request, name=None):
        form = cadastroareaForm()
        equipamento_form = abaequipamento()
        empresas = Empresa.objects.all()
        context = {"rbi": empresas, 'form': form, "equip_form": equipamento_form}
        return render(request, "index.html", context=context)

    def post(self, request):
        form = cadastroareaForm(request.POST)
        equipamento_form = abaequipamento(request.POST)
        empresas = Empresa.objects.all()
        context = {"rbi": empresas, 'form': form, "equip_form": equipamento_form}
        if equipamento_form.is_valid():
            equipamento_form.save()
            return redirect('index')
        return render(request, "index.html", context=context)


class Cadastroempresa_view(View):
    def get(self, request):
        cadastroempresa_form = cadastroempresaForm()
        return render(request, 'cadastroempresa.html', {
         'cadastroempresa_form': cadastroempresa_form
         })

    def post(self, request):
        cadastroempresa_form = cadastroempresaForm(request.POST, request.FILES)
        if cadastroempresa_form.is_valid():
            cadastroempresa_form.save()
            return redirect("index")
        return render(request, 'cadastroempresa.html', {
         'cadastroempresa_form': cadastroempresa_form
         })


class Detailempresa_DetailView(DetailView):
    model = Empresa
    form_class = cadastroempresaForm
    template_name = 'detailempresa.html'


def empresa_details(request, nome):
    context = {"empresa": Empresa.objects.get(nome=nome)}
    return render(request, 'detalhes-empresa.html', context)


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
      context = {'form': cadastroarea_form}
      return render (request, 'cadastroarea.html', context)
   def post(self, request):
      cadastroarea_form = cadastroareaForm(request.POST, request.FILES)
      if cadastroarea_form.is_valid():
         Area.objects.create(**cadastroarea_form.cleaned_data)
         context = {'form': cadastroarea_form}
         cadastroarea_form.save()
         return redirect("index")
      return render (request, 'cadastroarea.html', context)


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


def update_equipamento(form):
    """Atualiza um equipamento existente com os dados do formulário."""
    equipamento = form.instance  # Pega a instância atual do formulário
    for field, value in form.cleaned_data.items():
        setattr(equipamento, field, value)  # Atualiza cada campo com o valor do formulário
    equipamento.save()  # Salva a instância atualizada


def all_forms_view(request, empresa_id, area_id, tag_id):
    empresas = Empresa.objects.all()
    equipamento_form = abaequipamento()
    form = cadastroareaForm()
    tag = Tag.objects.get(id=tag_id)
    equipamento = None
    try:
        equipamento = Abaequipamento.objects.get(tag_id=tag_id)
        equipamento_form = abaequipamento(instance=equipamento)
    except Abaequipamento.DoesNotExist:
        pass
    if request.method == "POST":
        if equipamento:
            # Se o equipamento existe, passamos a instância para o formulário
            equipamento_form = abaequipamento(request.POST, instance=equipamento)
            if equipamento_form.is_valid():
                update_equipamento(equipamento_form)  # Chama a função para atualizar o equipamento
                return redirect('index')
        else:
            equipamento_form = abaequipamento(request.POST)
            form = cadastroareaForm(request.POST)
            if equipamento_form.is_valid():
                equipamento = equipamento_form.save(commit=False)  # Não salva ainda
                equipamento.tag_id = tag_id  # Define a tag usando o ID da URL
                equipamento.save()  # Agora salva o equipamento
                equipamento_form.save()
                return redirect('index')
    context = {
            "rbi": empresas,
            "form": form,
            "equip_form": equipamento_form,
            "empresa_id": empresa_id,
            "area_id": area_id,
            "tag_id": tag_id
        }
    return render(request, "todos-forms.html", context=context)
   