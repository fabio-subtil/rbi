
static/index.js


var tab46 = 
{
"Planilha1":[
 {
  "Column1": "CoTHINp1",
  "E": 0.33,
  "D": 0.4,
  "C": 0.5,
  "B": 0.7,
  "A": 0.9
 },
 {
  "Column1": "CoTHINp2",
  "E": 0.33,
  "D": 0.33,
  "C": 0.3,
  "B": 0.2,
  "A": 0.09
 },
 {
  "Column1": "CoTHINp3",
  "E": 0.33,
  "D": 0.27,
  "C": 0.2,
  "B": 0.1,
  "A": 0.01
 }
]
};

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

function calcular() {
    var num1 = Number(document.getElementById("espemed").value);
    var num2 = Number(document.getElementById("txcormetal").value);
    var num3 = Number(document.getElementById("agetk").value);
    var num4 = Number(document.getElementById("tolscad").value);
    var num5 = Number(document.getElementById("txcorclad").value);
    var num6 = Number(document.getElementById("tensaores").value);
    var num7 = Number(document.getElementById("tensaoesco").value);
    var num8 = Number(document.getElementById("eficjun").value);
    var num9 = Number(document.getElementById("tensaoad").value);
    var num10 = Number(document.getElementById("espereq").value);
    var num11 = Number(document.getElementById("presproj").value);
    var num12 = Number(document.getElementById("diametrocomp").value);
    var num13 = (document.getElementById("pontoinje").value);
    var num14 = (document.getElementById("deadleg").value);
    var num15 = (document.getElementById("tipoconst").value);
    var num16 = (document.getElementById("manutapi653").value);
    var num17 = (document.getElementById("recalqapi653").value);    
    var num18 = (document.getElementById("monitora").value);
    const num19 = document.getElementById("temtrinca");
    const isChecked1 = num19.checked;
    const num20 = document.getElementById("pwht");
    const isChecked2 = num20.checked;
    var num21 = Number(document.getElementById("connaoh").value);
    var num22 = (document.getElementById("areacurva").value);
    const num23 = document.getElementById("contvapor");
    const isChecked3 = num23.checked;
    const num24 = document.getElementById("expamina");
    const isChecked4 = num24.checked;
    var num25 = (document.getElementById("meadipadeca").value);
    const num26 = document.getElementById("existtraco");
    const isChecked5 = num26.checked;
    var num27 = (document.getElementById("tempmax").value);
    
          
    var elemResult = document.getElementById("resultado");
    var elemResult2 = document.getElementById("resultado2");
    var elemResult3 = document.getElementById("resultado3");
    var elemResult4 = document.getElementById("resultado4");
    var elemResult5 = document.getElementById("resultado5");
    var elemResult6 = document.getElementById("resultado6");
    var elemResult7 = document.getElementById("resultado7");
    var elemResult8 = document.getElementById("resultado8");
    var elemResult9 = document.getElementById("resultado9");
    var elemResult10 = document.getElementById("resultado10");
    var elemResult11 = document.getElementById("resultado11");
    var elemResult12 = document.getElementById("resultado12");
    var elemResult13 = document.getElementById("resultado13");
    var elemResult14 = document.getElementById("resultado14");
    var elemResult15 = document.getElementById("resultado15");
    var elemResult16 = document.getElementById("resultado16");
    var elemResult17 = document.getElementById("resultado17");
    var elemResult18 = document.getElementById("resultado18");
    var elemResult19 = document.getElementById("resultado19");
    var elemResult20 = document.getElementById("resultado20");
    var elemResult21 = document.getElementById("resultado21");
    var elemResult22 = document.getElementById("resultado22");
    var elemResult23 = document.getElementById("resultado23");
    var elemResult24 = document.getElementById("resultado24");
    var elemResult25 = document.getElementById("resultado25");
    var elemResult26 = document.getElementById("resultado26");
    var elemResult27 = document.getElementById("resultado27");
    var elemResult28 = document.getElementById("resultado28");
    var elemResult29 = document.getElementById("resultado29");
    var elemResult30 = document.getElementById("resultado30");
    var elemResult31 = document.getElementById("resultado31");
    var elemResult32 = document.getElementById("resultado32");
    var elemResult33 = document.getElementById("resultado33");
    var elemResult34 = document.getElementById("resultado34");
    var elemResult35 = document.getElementById("resultado35");
    var elemResult36 = document.getElementById("resultado36");
    var elemResult37 = document.getElementById("resultado37");
    var elemResult38 = document.getElementById("resultado38");
    var elemResult39 = document.getElementById("resultado39");
    var elemResult40 = document.getElementById("resultado40");
    var elemResult41 = document.getElementById("resultado41");
    var elemResult42 = document.getElementById("resultado42");
    var elemResult43 = document.getElementById("resultado43");
    var elemResult44 = document.getElementById("resultado44");
    var elemResult45 = document.getElementById("resultado45");
    var elemResult46 = document.getElementById("resultado46");
    var elemResult47 = document.getElementById("resultado46");

    
    // Cálculo S4 - Perda de espessura

    if (elemResult.textContent === undefined) {
       elemResult.textContent = "Art = (1-(tmin-C*age)/(tmin+CA) = " + Number(1-(num1-num2*num3)/(num1+num4)).toFixed(4);
       var resultado = (1-(num1-num2*num3)/(num1+num4));
       
    }
    else { // IE
       elemResult.innerText = "Art = (1-(tmin-C*age)/(tmin+CA) =" + Number(1-(num1-num2*num3)/(num1+num4)).toFixed(4);
       var resultado = (1-(num1-num2*num3)/(num1+num4));
    }
    if (elemResult2.textContent === undefined) {
      elemResult2.textContent = "Art = (Cr,bm*agetk)/trdi) = " + Number(1-(num1-num2*num3)/(num1+num4)).toFixed(4);
      var resultado2 = (1-(num1-num2*num3)/(num1+num4));
    }
    else { // IE
      elemResult2.innerText = "Art = (Cr,bm*agetk)/trdi) =" + Number((num2*num3)/num1).toFixed(4);
      var resultado2 = (1-(num1-num2*num3)/(num1+num4));
    }
    if (elemResult3.textContent === undefined) {
      elemResult3.textContent = "Art = (Cr,cm*agetk)/trdi) = " + Number(1-(num1-num2*num3)/(num1+num4)).toFixed(4);
      var resultado3 = (1-(num1-num2*num3)/(num1+num4));
    }
    else { // IE
      elemResult3.innerText = "Art = (Cr,cm*agetk)/trdi) =" + Number((num5*num3)/num1).toFixed(4);
    }
    if (elemResult4.textContent === undefined) {
      elemResult4.textContent = "Art = (Cr,cm*agetk+Crbm*agetk-agerc))/trdi) = " + Number((num5*num3)/num1).toFixed(4);
    }
    else { // IE
      elemResult4.innerText = "Art = (Cr,cm*agetk+Crbm*agetk-agerc))/trdi) =" + Number((num5*num3+num2*num3)/num1).toFixed(4);
    }
    if (elemResult5.textContent === undefined) {
      elemResult5.textContent = "5= " + Number((num5*num3)/num1).toFixed(4);
   }
    else { // IE
      elemResult5.innerText = "5_1 = (Cr,cm*agetk+Crbm*agetk-agerc))/trdi) =" + Number((num5*num3+num2*num3)/num1).toFixed(4);
   }
   if (elemResult6.textContent === undefined) {
      elemResult6.textContent = "((TS+YS)/2*E*1,1)) = " + Number(((num7+num6)*num8*1.1)/2).toFixed(4);
   }
   else { // IE
      elemResult6.innerText = "((TS+YS)/2*E*1,1)) =" + Number(((num7+num6)*num8*1.1)/2).toFixed(2);
   }
   if (elemResult7.textContent === undefined) {
      elemResult7.textContent = "S*E*MAX(tmin,tc)/(FSThin*trdi) " + Number(num9*num8*Math.max(num1,num10)/((((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
   }
   else { // IE
      elemResult7.innerText = "S*E*MAX(tmin,tc)/(FSThin*trdi) =" + Number(num9*num8*Math.max(num1,num10)/((((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
   }
   if (elemResult8.textContent === undefined) { 
      
      elemResult8.textContent = "alpha =" + JSON.parse(tab46);

   }
   else { // IE
      elemResult8.innerText = "alpha =" + Number(2).toFixed(2);
   }
   if (elemResult9.textContent === undefined) {
      elemResult9.textContent = "9 P*D/(alpha*FS*trdi) =" + Number((num11*num12/1000)/(2*(((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
      var resultado9 = ((num11*num12/1000)/(2*(((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
   }
   else { // IE
      elemResult9.innerText = "9.1 P*D/(alpha*FS*trdi) =" + Number((num11*num12/1000)/(2*(((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
      var resultado9 = ((num11*num12/1000)/(2*(((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
   }
   if (elemResult10.textContent === undefined) {
      elemResult10.textContent = + Number((0.5*0.9**0)*(0.7**1)*(0.5**0)*(0.4**0)).toFixed(4);
      var resultado10 = ((0.5*0.9**0)*(0.7**1)*(0.5**0)*(0.4**0));
   }
   else { // IE
      elemResult10.innerText = + Number((0.5*0.9**0)*(0.7**1)*(0.5**0)*(0.4**0)).toFixed(4);
      var resultado10 = ((0.5*0.9**0)*(0.7**1)*(0.5**0)*(0.4**0));
   }
   if (elemResult11.textContent === undefined) {
      elemResult11.textContent = "11 =" + Number((0.3*0.09**0)*(0.2**1)*(0.3**0)*(0.33**0)).toFixed(4);
      var resultado11 = ((0.3*0.09**0)*(0.2**1)*(0.3**0)*(0.33**0));
   }
   else { // IE
      elemResult11.innerText = "11_1 =" + Number((0.3*0.09**0)*(0.2**1)*(0.3**0)*(0.33**0)).toFixed(4);
      var resultado11 = ((0.3*0.09**0)*(0.2**1)*(0.3**0)*(0.33**0));
   }
   if (elemResult12.textContent === undefined) {
      elemResult12.textContent = "12 =" + Number((0.2*0.01**0)*(0.1**1)*(0.2**0)*(0.27**0)).toFixed(4);
      var resultado12 = ((0.2*0.01**0)*(0.1**1)*(0.2**0)*(0.27**0));
   }
   else { // IE
      elemResult12.innerText = "12_1 =" + Number((0.2*0.01**0)*(0.1**1)*(0.2**0)*(0.27**0)).toFixed(4);
      var resultado12 = ((0.2*0.01**0)*(0.1**1)*(0.2**0)*(0.27**0));
   }
   if (elemResult13.textContent === undefined) {
      elemResult13.textContent = "13 =" + Number((resultado10/(resultado10+resultado11+resultado12))).toFixed(4);
      var resultado13 = ((resultado10/(resultado10+resultado11+resultado12)));
   }
   else { // IE
      elemResult13.innerText = "13_1 =" + Number((resultado10/(resultado10+resultado11+resultado12))).toFixed(4);
      var resultado13 = ((resultado10/(resultado10+resultado11+resultado12)));
   }
   if (elemResult14.textContent === undefined) {
      elemResult14.textContent = "14 =" + Number((resultado11/(resultado10+resultado11+resultado12))).toFixed(4);
      var resultado14 = ((resultado11/(resultado10+resultado11+resultado12)));
   }
   else { // IE
      elemResult14.innerText = "14_1 =" + Number((resultado11/(resultado10+resultado11+resultado12))).toFixed(4);
      var resultado14 = ((resultado11/(resultado10+resultado11+resultado12)));
   }
   if (elemResult15.textContent === undefined) {
      elemResult15.textContent = "15 =" + Number((resultado12/(resultado10+resultado11+resultado12))).toFixed(4);
      var resultado15 = ((resultado12/(resultado10+resultado11+resultado12)));
   }
   else { // IE
      elemResult15.innerText = "15_1 =" + Number((resultado12/(resultado10+resultado11+resultado12))).toFixed(4);
      var resultado15 = ((resultado12/(resultado10+resultado11+resultado12)));
   }
   if (elemResult16.textContent === undefined) {
      elemResult16.textContent = "16 =" + Number(((1-1*resultado2)-0.2967)/(((1**2*resultado2**2*0.2**2+(1-1*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
      var resultado16 = (((1-1*resultado2)-0.2967)/(((1**2*resultado2**2*0.2**2+(1-1*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
   }
   else { // IE
      elemResult16.innerText = "16_1 =" + Number(((1-1*resultado2)-0.2967)/(((1**2*resultado2**2*0.2**2+(1-1*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
      var resultado16 = (((1-1*resultado2)-0.2967)/(((1**2*resultado2**2*0.2**2+(1-1*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
   }
   if (elemResult17.textContent === undefined) {
      elemResult17.textContent = "17 =" + Number(((1-2*resultado2)-0.2967)/(((2**2*resultado2**2*0.2**2+(1-2*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
      var resultado17 = (((1-2*resultado2)-0.2967)/(((2**2*resultado2**2*0.2**2+(1-2*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
   }
   else { // IE
      elemResult17.innerText = "17_1=" + Number(((1-2*resultado2)-0.2967)/(((2**2*resultado2**2*0.2**2+(1-2*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
      var resultado17 = (((1-2*resultado2)-0.2967)/(((2**2*resultado2**2*0.2**2+(1-2*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
   }
   if (elemResult18.textContent === undefined) {
      elemResult18.textContent = "18 =" + Number(((1-4*resultado2)-0.2967)/(((4**2*resultado2**2*0.2**2+(1-4*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
      var resultado18 = (((1-4*resultado2)-0.2967)/(((4**2*resultado2**2*0.2**2+(1-4*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
   }
   else { // IE
      elemResult18.innerText = "18_1 =" + Number(((1-4*resultado2)-0.2967)/(((4**2*resultado2**2*0.2**2+(1-4*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
      var resultado18 = (((1-4*resultado2)-0.2967)/(((4**2*resultado2**2*0.2**2+(1-4*resultado2)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
   }

   if (elemResult19.textContent === undefined) {
      elemResult19.textContent = "19 =" + Number(((resultado13*0.004307)+(resultado14*0.246041)+(resultado15*0.979964))/0.000156).toFixed(4);
      var resultado19 = + Number(((resultado13*0.04307)+(resultado14*0.246041)+(resultado15*0.979964))/0.000156).toFixed(4);
   }
   else { // IE
      elemResult19.innerText = "19_1 =" + Number(((resultado13*0.004307)+(resultado14*0.246041)+(resultado15*0.979964))/0.000156).toFixed(4);
      var resultado19 = (((resultado13*0.004307)+(resultado14*0.246041)+(resultado15*0.979964))/0.000156).toFixed(4);
   }  
   if (num13=="Sim"){
      var fip = 3;
   }
   else {
      var fip = 1;
   }
   if (num14=="Sim"){
      var fdl = 3;
   }
   else {
      var fdl = 1;
   }
   if (num15=="Soldado"){
      var fwd = 1;
   }
   else {
      var fwd = 10;
   }
   if (num16=="Sim"){
      var fam = 1;
   }
   else {
      var fam = 5;
   }
   switch (num17) {
      case "Não aplicável":
         fsm = 1;
         break
      case "Fundação concreto":
         fsm = 1;
         break
      case "Nunca foi feito":
         fsm = 1.5;
         break
      case "Sim, valores conforme API 653":
         fsm = 1;
         break
      case "Sim, valores excedentes API 653":
         fsm = 2;
         break
   }
   if (num18=="Nenhum1"){
      var fom = 1;
   }
   else {
      var fom = 10;
   }
   if (elemResult20.textContent === undefined) {
      elemResult20.textContent = "FIP =" + fip;
   }
   else { // IE
      elemResult20.innerText = "FIP =" + fip;
   }
   if (elemResult21.textContent === undefined) {
      elemResult21.textContent = "FDL =" + fdl;
   }
   else { // IE
      elemResult21.innerText = "FDL =" + fdl;
   }
   if (elemResult22.textContent === undefined) {
      elemResult22.textContent = "FWD =" + fwd;
   }
   else { // IE
      elemResult22.innerText = "FWD =" + fwd;
   }
   if (elemResult23.textContent === undefined) {
      elemResult23.textContent = "FAM =" + fam;
   }
   else { // IE
      elemResult23.innerText = "FAM =" + fam;
   }
   if (elemResult24.textContent === undefined) {
      elemResult24.textContent = "FSM =" + fsm;
   }
   else { // IE
      elemResult24.innerText = "FSM ="+ fsm;
   }
   if (elemResult25.textContent === undefined) {
      elemResult25.textContent = "FOM (Tabela 4.8)= Falta calcular" + 1;
   }
   else { // IE
      elemResult25.innerText = "FOM (Tabela 4.8)= Falta calcular =" + 1;
   }
   if (elemResult26.textContent === undefined) {
      elemResult26.textContent = "DANO 26 = (FIP*FDL*FWD*FAM*FSM*FOM*DTHINfb) = " + (resultado19*fip*fdl*fwd*fam*fsm*fom) ;
   }
   else { // IE
      elemResult26.innerText = "DANO 26.1 = (FIP*FDL*FWD*FAM*FSM*FOM*DTHINfb) =" + (resultado19*fip*fdl*fwd*fam*fsm*fom);
   }

   if (elemResult27.textContent === undefined) {
      elemResult27.textContent = "Probabilidade =" + Number(0.0000306*fip*fdl*fwd*fam*fsm*fom*resultado19).toFixed(4);
   }
   else { // IE
      elemResult27.innerText = "Probabilidade =" + Number(0.0000306*fip*fdl*fwd*fam*fsm*fom*resultado19).toFixed(4);
   }

   // Cálculo da distribuição normal
   // myval será o valor a ser calculado
   // Caso 1
   var myval1 =-resultado17;
   var mean1 = 0;
   var SD1 = 1;
   var answer1 = centile(mean1, SD1, myval1);
   console.log(answer1)
   function centile(mean1, SD1, val1)
   {
   z1 = (val1-mean1)/SD1;
   ans1 = NORMSDIST1(z1);
   return ans1;
   }
   function erf(x1)
   {
   //A&S formula 7.1.26
   var ans1 = 0;
   var a11 = 0.254829592;
   var a21 = -0.284496736;
   var a31 = 1.421413741;
   var a41 = -1.453152027;
   var a51 = 1.061405429;
   var p1 = 0.3275911;
   x1 = Math.abs(x1);
   var t1 = 1 / (1 + p1 * x1);
   //Horner's method, takes O(n) operations for nth order polynomial
   ans1 = 1 - ((((((a51 * t1 + a41) * t1) + a31) * t1 + a21) * t1) + a11) * t1 * Math.exp(-1 * x1 * x1);
   return ans1; 
   }
   function NORMSDIST1(z1)
   {
   var ans1 = 0;
   var sign1 = 1;
   if (z1 < 0) sign1 = -1;
   ans1 = 0.5 * (1.0 + sign1 * erf(Math.abs(z1)/Math.sqrt(2)));
      elemResult28.textContent = + Number(ans1);
      elemResult28.innerText = + Number(ans1);
   }


   // Caso 2
   var myval2 =-resultado18;
   var mean2 = 0;
   var SD2 = 1;
   var answer2 = centile(mean2, SD2, myval2);
   console.log(answer2)
   function centile(mean2, SD2, val2)
   {
   z2 = (val2-mean2)/SD2;
   ans2 = NORMSDIST2(z2);
   return ans2;
   }
   function erf(x2)
   {
   //A&S formula 7.1.26
   var ans2 = 0;
   var a12 = 0.254829592;
   var a22 = -0.284496736;
   var a32 = 1.421413741;
   var a42 = -1.453152027;
   var a52 = 1.061405429;
   var p2 = 0.3275911;
   x2 = Math.abs(x2);
   var t2 = 1 / (1 + p2 * x2);
   //Horner's method, takes O(n) operations for nth order polynomial
   ans2 = 1 - ((((((a52 * t2 + a42) * t2) + a32) * t2 + a22) * t2) + a12) * t2 * Math.exp(-1 * x2 * x2);
   return ans2; 
   }
   function NORMSDIST2(z2)
   {
   var ans2 = 0;
   var sign2 = 1;
   if (z2 < 0) sign2 = -1;
   ans2 = 0.5 * (1.0 + sign2 * erf(Math.abs(z2)/Math.sqrt(2)));
      elemResult29.textContent = + Number(ans2);
      elemResult29.innerText = + Number(ans2);
   }



   // Cálculo S6 - SCC Caustic Cracking
   if (isChecked1){
      elemResult31.textContent = "Foi informado que existe trinca";
      elemResult39.textContent = "Foi informado que existe trinca";
   }
   else {
      elemResult31.textContent = "Foi informado que NÃO existe trinca";
      elemResult39.textContent = "Foi informado que NÃO existe trinca";
   }
   if (isChecked2){
      elemResult32.textContent = "O componente tem alívio de tensões (pwht)";
      elemResult40.textContent = "O componente tem alívio de tensões (pwht)";
   }
   else {
      elemResult32.textContent = "O componente não tem alívio de tensões (pwht)";
      elemResult40.textContent = "O componente não tem alívio de tensões (pwht)";
   }
   if (num21>0){
      elemResult33.textContent = "Sendo a Concentração de NaOH (%) =" + num21;
      elemResult34.textContent = "Curva conforme figura 6.1M =" + num22;
   }
   else {
      elemResult33.textContent = "Não foi informado a presença de NaOH";
   }
   if (isChecked3){
      elemResult35.textContent = "Componente com contato de vazamento de vapor";
   }
   else {
      elemResult35.textContent = "Componente não tem contato de vazamento de vapor";
   }

      elemResult36.textContent = "O tempo entre as inspeções (age) =";
      elemResult37.textContent = "O número de inspeções =";
      elemResult38.textContent = "Efetividade das inspeções considerada =";

      
   // Cálculo S7 - SCC Amina
   
   if (isChecked4){
      elemResult41.textContent = "Componente exposto a Amina magra";
      elemResult42.textContent = "Exposição a " + num25;
   }
   else {
      elemResult41.textContent = "Componente não exposto a Amina magra";
      elemResult42.textContent =""
   }
  
   if (isChecked5){
         elemResult43.textContent = "Existe traço de vapor";
   }
   else {
         elemResult43.textContent = "NÃO existe traço de vapor";
   }

      elemResult44.textContent = "Temperatura máxima considerada =" + num27;

      elemResult45.textContent = "O tempo entre as inspeções (age) =";
      elemResult46.textContent = "O número de inspeções =";
      elemResult47.textContent = "Efetividade das inspeções considerada =";

  
}