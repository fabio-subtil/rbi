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

var obj = JSON.parse(tab46);


var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

// Cálculo S4 - Perda de espessura
// Lendo os valores dos input´s

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
    
   
// Cálculo S4 - Perda de espessura
//Devolvendo os resultados para o HTML

    var s41 = document.getElementById("s41");
    var s42 = document.getElementById("s42");
    var s43 = document.getElementById("s43");
    var s44 = document.getElementById("s44");
    var s45 = document.getElementById("s45");
    var s46 = document.getElementById("s46");
    var s47 = document.getElementById("s47");
    var s48 = document.getElementById("s48");
    var s49 = document.getElementById("s49");
    var s410 = document.getElementById("s410");
    var s411 = document.getElementById("s411");
    var s412 = document.getElementById("s412");
    var s413 = document.getElementById("s413");
    var s414 = document.getElementById("s414");
    var s415 = document.getElementById("s415");
    var s416 = document.getElementById("s416");
    var s417 = document.getElementById("s417");
    var s418 = document.getElementById("s418");
    var s419 = document.getElementById("s419");
    var s420 = document.getElementById("s420");
    var s421 = document.getElementById("s421");
    var s422 = document.getElementById("s422");
    var s423 = document.getElementById("s423");
    var s424 = document.getElementById("s424");
    var s425 = document.getElementById("s425");
    var s426 = document.getElementById("s426");
    var s427 = document.getElementById("s427");
    var s428 = document.getElementById("s428");
    var s429 = document.getElementById("s429");
    var s430 = document.getElementById("s430");
   

      if (s41.textContent === undefined) {
         s41.textContent = "Art = (1-(tmin-C*age)/(tmin+CA) = " + Number(1-(num1-num2*num3)/(num1+num4)).toFixed(4);
         var s41 = (1-(num1-num2*num3)/(num1+num4));
         
      }
      else { // IE
         s41.innerText = "Art = (1-(tmin-C*age)/(tmin+CA) =" + Number(1-(num1-num2*num3)/(num1+num4)).toFixed(4);
         var s41 = (1-(num1-num2*num3)/(num1+num4));
      }
      if (s42.textContent === undefined) {
         s42.textContent = "Art = (Cr,bm*agetk)/trdi) = " + Number(1-(num1-num2*num3)/(num1+num4)).toFixed(4);
         var s42 = (1-(num1-num2*num3)/(num1+num4));
      }
      else { // IE
         s42.innerText = "Art = (Cr,bm*agetk)/trdi) =" + Number((num2*num3)/num1).toFixed(4);
         var s42 = (1-(num1-num2*num3)/(num1+num4));
      }
      if (s43.textContent === undefined) {
         s43.textContent = "Art = (Cr,cm*agetk)/trdi) = " + Number(1-(num1-num2*num3)/(num1+num4)).toFixed(4);
         var s43 = (1-(num1-num2*num3)/(num1+num4));
      }
      else { // IE
         s43.innerText = "Art = (Cr,cm*agetk)/trdi) =" + Number((num5*num3)/num1).toFixed(4);
      }
      if (s44.textContent === undefined) {
         s44.textContent = "Art = (Cr,cm*agetk+Crbm*agetk-agerc))/trdi) = " + Number((num5*num3)/num1).toFixed(4);
      }
      else { // IE
         s44.innerText = "Art = (Cr,cm*agetk+Crbm*agetk-agerc))/trdi) =" + Number((num5*num3+num2*num3)/num1).toFixed(4);
      }
      if (s45.textContent === undefined) {
         s45.textContent = "5= " + Number((num5*num3)/num1).toFixed(4);
      }
      else { // IE
         s45.innerText = "5_1 = (Cr,cm*agetk+Crbm*agetk-agerc))/trdi) =" + Number((num5*num3+num2*num3)/num1).toFixed(4);
      }
      if (s46.textContent === undefined) {
         s46.textContent = "((TS+YS)/2*E*1,1)) = " + Number(((num7+num6)*num8*1.1)/2).toFixed(4);
      }
      else { // IE
         s46.innerText = "((TS+YS)/2*E*1,1)) =" + Number(((num7+num6)*num8*1.1)/2).toFixed(2);
      }
      if (s47.textContent === undefined) {
         s47.textContent = "S*E*MAX(tmin,tc)/(FSThin*trdi) " + Number(num9*num8*Math.max(num1,num10)/((((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
      }
      else { // IE
         s47.innerText = "S*E*MAX(tmin,tc)/(FSThin*trdi) =" + Number(num9*num8*Math.max(num1,num10)/((((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
      }
      if (s48.textContent === undefined) { 
         
         s48.textContent = "alpha =" + JSON.parse(tab46);

      }
      else { // IE
         s48.innerText = "alpha =" + Number(2).toFixed(2);
      }
      if (s49.textContent === undefined) {
         s49.textContent = "9 P*D/(alpha*FS*trdi) =" + Number((num11*num12/1000)/(2*(((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
         var s49 = ((num11*num12/1000)/(2*(((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
      }
      else { // IE
         s49.innerText = "9.1 P*D/(alpha*FS*trdi) =" + Number((num11*num12/1000)/(2*(((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
         var s49 = ((num11*num12/1000)/(2*(((num7+num6)*num8*1.1)/2)*num1)).toFixed(4);
      }
      if (s410.textContent === undefined) {
         s410.textContent = + Number((0.5*0.9**0)*(0.7**1)*(0.5**0)*(0.4**0)).toFixed(4);
         var s410 = ((0.5*0.9**0)*(0.7**1)*(0.5**0)*(0.4**0));
      }
      else { // IE
         s410.innerText = + Number((0.5*0.9**0)*(0.7**1)*(0.5**0)*(0.4**0)).toFixed(4);
         var s410 = ((0.5*0.9**0)*(0.7**1)*(0.5**0)*(0.4**0));
      }
      if (s411.textContent === undefined) {
         s411.textContent = "11 =" + Number((0.3*0.09**0)*(0.2**1)*(0.3**0)*(0.33**0)).toFixed(4);
         var s411 = ((0.3*0.09**0)*(0.2**1)*(0.3**0)*(0.33**0));
      }
      else { // IE
         s411.innerText = "11_1 =" + Number((0.3*0.09**0)*(0.2**1)*(0.3**0)*(0.33**0)).toFixed(4);
         var s411 = ((0.3*0.09**0)*(0.2**1)*(0.3**0)*(0.33**0));
      }
      if (s412.textContent === undefined) {
         s412.textContent = "12 =" + Number((0.2*0.01**0)*(0.1**1)*(0.2**0)*(0.27**0)).toFixed(4);
         var s412 = ((0.2*0.01**0)*(0.1**1)*(0.2**0)*(0.27**0));
      }
      else { // IE
         s412.innerText = "12_1 =" + Number((0.2*0.01**0)*(0.1**1)*(0.2**0)*(0.27**0)).toFixed(4);
         var s412 = ((0.2*0.01**0)*(0.1**1)*(0.2**0)*(0.27**0));
      }
      if (s413.textContent === undefined) {
         s413.textContent = "13 =" + Number((s410/(s410+s411+s412))).toFixed(4);
         var resultado13 = ((s410/(s410+s411+s412)));
      }
      else { // IE
         s413.innerText = "13_1 =" + Number((s410/(s410+s411+s412))).toFixed(4);
         var s413 = ((s410/(s410+s411+s412)));
      }
      if (s414.textContent === undefined) {
         s414.textContent = "14 =" + Number((s411/(s410+s411+s412))).toFixed(4);
         var s414 = ((resultado11/(s410+s411+s412)));
      }
      else { // IE
         s414.innerText = "14_1 =" + Number((s411/(s410+s411+s412))).toFixed(4);
         var s414 = ((s411/(s410+s411+s412)));
      }
      if (s415.textContent === undefined) {
         s415.textContent = "15 =" + Number((s412/(s410+s411+s412))).toFixed(4);
         var s415 = ((s412/(s410+s411+s412)));
      }
      else { // IE
         s415.innerText = "15_1 =" + Number((s412/(s410+s411+s412))).toFixed(4);
         var s415 = ((s412/(s410+s411+s412)));
      }
      if (s416.textContent === undefined) {
         s416.textContent = "16 =" + Number(((1-1*s42)-0.2967)/(((1**2*s42**2*0.2**2+(1-1*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
         var s416 = (((1-1*s42)-0.2967)/(((1**2*s42**2*0.2**2+(1-1*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
      }
      else { // IE
         s416.innerText = "16_1 =" + Number(((1-1*s42)-0.2967)/(((1**2*s42**2*0.2**2+(1-1*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
         var s416 = (((1-1*s42)-0.2967)/(((1**2*s42**2*0.2**2+(1-1*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
      }
      if (s417.textContent === undefined) {
         s417.textContent = "17 =" + Number(((1-2*s42)-0.2967)/(((2**2*s42**2*0.2**2+(1-2*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
         var s417 = (((1-2*s42)-0.2967)/(((2**2*s42**2*0.2**2+(1-2*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
      }
      else { // IE
         s417.innerText = "17_1=" + Number(((1-2*s42)-0.2967)/(((2**2*s42**2*0.2**2+(1-2*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
         var s417 = (((1-2*s42)-0.2967)/(((2**2*s42**2*0.2**2+(1-2*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
      }
      if (s418.textContent === undefined) {
         s418.textContent = "18 =" + Number(((1-4*s42)-0.2967)/(((4**2*s42**2*0.2**2+(1-4*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
         var s418 = (((1-4*s42)-0.2967)/(((4**2*s42**2*0.2**2+(1-4*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
      }
      else { // IE
         s418.innerText = "18_1 =" + Number(((1-4*s42)-0.2967)/(((4**2*s42**2*0.2**2+(1-4*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2))).toFixed(4);
         var s418 = (((1-4*s42)-0.2967)/(((4**2*s42**2*0.2**2+(1-4*s42)**2*0.2**2+0.2967**2*0.05**2))**(1/2)));
      }

      if (s419.textContent === undefined) {
         s419.textContent = "19 =" + Number(((s413*0.004307)+(s414*0.246041)+(s415*0.979964))/0.000156).toFixed(4);
         var s419 = + Number(((s413*0.04307)+(s414*0.246041)+(s415*0.979964))/0.000156).toFixed(4);
      }
      else { // IE
         s419.innerText = "19_1 =" + Number(((s413*0.004307)+(s414*0.246041)+(s415*0.979964))/0.000156).toFixed(4);
         var s419 = (((s413*0.004307)+(s414*0.246041)+(s415*0.979964))/0.000156).toFixed(4);
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
      if (s420.textContent === undefined) {
         s420.textContent = "FIP =" + fip;
      }
      else { // IE
         s420.innerText = "FIP =" + fip;
      }
      if (s421.textContent === undefined) {
         s421.textContent = "FDL =" + fdl;
      }
      else { // IE
         s421.innerText = "FDL =" + fdl;
      }
      if (s422.textContent === undefined) {
         s422.textContent = "FWD =" + fwd;
      }
      else { // IE
         s422.innerText = "FWD =" + fwd;
      }
      if (s423.textContent === undefined) {
         s423.textContent = "FAM =" + fam;
      }
      else { // IE
         s423.innerText = "FAM =" + fam;
      }
      if (s424.textContent === undefined) {
         s424.textContent = "FSM =" + fsm;
      }
      else { // IE
         s424.innerText = "FSM ="+ fsm;
      }
      if (s425.textContent === undefined) {
         s425.textContent = "FOM (Tabela 4.8)= Falta calcular" + 1;
      }
      else { // IE
         s425.innerText = "FOM (Tabela 4.8)= Falta calcular =" + 1;
      }
      if (s426.textContent === undefined) {
         s426.textContent = "DANO 26 = (FIP*FDL*FWD*FAM*FSM*FOM*DTHINfb) = " + (resultado19*fip*fdl*fwd*fam*fsm*fom) ;
      }
      else { // IE
         s426.innerText = "DANO 26.1 = (FIP*FDL*FWD*FAM*FSM*FOM*DTHINfb) =" + (resultado19*fip*fdl*fwd*fam*fsm*fom);
      }

      if (s427.textContent === undefined) {
         s427.textContent = "Probabilidade =" + Number(0.0000306*fip*fdl*fwd*fam*fsm*fom*resultado19).toFixed(4);
      }
      else { // IE
         s427.innerText = "Probabilidade =" + Number(0.0000306*fip*fdl*fwd*fam*fsm*fom*resultado19).toFixed(4);
      }

      // Cálculo da distribuição normal
      // myval será o valor a ser calculado
      // Caso 1
      var myval1 =-s417;
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


 // Cálculo S5 - SCC Caustic Cracking
 //Devolvendo os resultados para o HTML


      var elemResult31 = document.getElementById("resultado31");
      var elemResult32 = document.getElementById("resultado32");
      var elemResult33 = document.getElementById("resultado33");
      var elemResult34 = document.getElementById("resultado34");
      var elemResult35 = document.getElementById("resultado35");
      var elemResult36 = document.getElementById("resultado36");
      var elemResult37 = document.getElementById("resultado37");
      var elemResult38 = document.getElementById("resultado38");
      


// Cálculo S6 - SCC Caustic Cracking
 //Devolvendo os resultados para o HTML
      var elemResult39 = document.getElementById("resultado39");
      var elemResult40 = document.getElementById("resultado40");
      var elemResult41 = document.getElementById("resultado41");
      var elemResult42 = document.getElementById("resultado42");
      var elemResult43 = document.getElementById("resultado43");
      var elemResult44 = document.getElementById("resultado44");
      var elemResult45 = document.getElementById("resultado45");
      var elemResult46 = document.getElementById("resultado46");


     

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

      elemResult36.textContent = "O tempo entre as inspeções (age) =" +num3;
      elemResult37.textContent = "O número de inspeções =";
      elemResult38.textContent = "Efetividade das inspeções considerada =";


      
   // Cálculo S7 - SCC Amina
   
   if (isChecked4){
      elemResult41.textContent = "Componente exposto a Amina magra";
      elemResult42.textContent = "Exposição a " + num25;
   }
   else {
      elemResult41.textContent = "Componente não exposto a Amina magra";
      elemResult42.textContent =" ";
   }
  
   if (isChecked5){
      elemResult43.textContent = "Existe traço de vapor";
   }
   else {
      elemResult43.textContent = "NÃO existe traço de vapor";
   }

      elemResult44.textContent = "Temperatura máxima considerada =";
      elemResult45.textContent = "O tempo entre as inspeções (age) =";
      elemResult46.textContent = "O número de inspeções =";
      elemResult47.textContent = "Efetividade das inspeções considerada =";

  
}