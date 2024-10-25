from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from rbi.models import Empresa, AreaModel, Tag, Proposta, Componente


class cadastroempresaForm(forms.Form):
    nome = forms.CharField(max_length=50)

    def save(self):
        Empresac = Empresa(
            nome=self.cleaned_data['nome'],
        )
        Empresac.save()
        return Empresac


# Aqui está o modelo a ser seguido na criação de um modelo de form
# Nesse modelo, não é necessário criar um método save em toda classe
# a criação de um novo item nas tabelas será feito na view, com o método
# create que já é herdado de ModelForm
class cadastroAreaForm(forms.ModelForm):
    class Meta:
        model = AreaModel
        # Nesse caso foi usado uma lista com os campos do formulário, porém
        # existe a possibilidade de usar "__all__" para já usar todos os
        # campos para poupar tempo
        fields = ["nome", "empresa"]
        labels = {
            'name': 'Nome',
            'empresa': 'Empresa'
        }
        # Aqui está um exemplo de widgets, que são mais propriedades que ajudam
        # na criação do formulário

        # widgets = {
        #     "Areas": forms.CheckboxSelectMultiple(), quando existe um campo onde múltiplos
        #                                              valores serão selecionados
        #
        #     "content": forms.Textarea(attrs={"rows": 10}), para um bloco de texto, onde rows
        #                                                    é o número de linhas
        #
        #     "created_at": forms.DateInput(attrs={"type": 'date'}) usado para inputs de data
        # }


# class cadastroareaForm(forms.Form):
#     empresa = forms.ModelChoiceField(Empresa.objects.all())
#     nome = forms.CharField(max_length=30)

#     def save(self):
#         area = Area(
#             empresa = self.cleaned_data['empresa'],
#             nome = self.cleaned_data['nome'],
#         )
#         area.save()
#         return area


class cadastroequipForm(forms.Form):
    area = forms.ModelChoiceField(AreaModel.objects.all())
    tag = forms.CharField(max_length=30)
    # O método save não será necessário na implementação da nova model para Forms,
    # visto que ao utilizar o create herdado de ModelForms utilizando **form.cleaned_data
    # a funcionalidade permanece a mesma mantendo as boas práticas e facilitando a leitura do código
    def save(self):
        TAG = Tag(
            area = self.cleaned_data['area'],
            tag = self.cleaned_data['tag'],
        )
        TAG.save()
        return TAG  

class cadastrocomponenteForm(forms.Form):
    tag = forms.ModelChoiceField(Tag.objects.all())
    componente = forms.CharField(max_length=30)    

    def save(self): 
        Comp = Componente(
            tag = self.cleaned_data['tag'],            
            componente = self.cleaned_data['componente'],
        )
        Comp.save()
        return Comp  

class cadastropropostaForm(forms.Form):
    componente = forms.ModelChoiceField(Componente.objects.all())
    numeroproposta = forms.CharField(max_length=8)

    def save(self):
        TAGP = Proposta(            
            componente = self.cleaned_data['componente'],
            numeroproposta = self.cleaned_data['numeroproposta'], 
        )
        TAGP.save()
        return TAGP
    
    
        