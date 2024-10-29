from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from rbi.models import Empresa, Area, Tag, Proposta, Componente, Abaequipamento

class cadastroempresaForm(forms.Form):
    nome = forms.CharField(max_length=50)
    
    def save(self):
        Empresac = Empresa(
        nome = self.cleaned_data['nome'],   
        )
        Empresac.save()
        return Empresac

class cadastroareaForm(forms.ModelForm):
    class Meta:
        model = Area
        # Nesse caso foi usado uma lista com os campos do formulário, porém
        # existe a possibilidade de usar "__all__" para já usar todos os
        # campos para poupar tempo

        fields = ["nome", "empresa"]
        labels = {
            'nome': 'Nome da área',
            'empresa': 'Nome da Empresa'
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

        #empresa = forms.ModelChoiceField(Empresa.objects.all())
        #nome = forms.CharField(max_length=30)

        #def save(self):
            #area = Area(
            #    empresa = self.cleaned_data['empresa'],
            #    nome = self.cleaned_data['nome'],
            #)
            #area.save()
            #return area
  
class cadastroequipForm(forms.Form):
    area = forms.ModelChoiceField(Area.objects.all())
    tag = forms.CharField(max_length=30)

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





class abaequipamento(forms.ModelForm):
    class Meta:
        model = Abaequipamento
        
        fields = ["numeroproposta", "tipoequipamento" ,"nomequipamento","volumeequip","descricaoprocesso"]
        
        
    

    
    
        