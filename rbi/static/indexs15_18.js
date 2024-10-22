static/indexs15_18.js

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

function calcular() {
    var num1 = Number(document.getElementById("compsemcostura").value);
    var num2 = Number(document.getElementById("monitora").value);
    var num3 = Number(document.getElementById("tipoisol").value);
    var num4 = Number(document.getElementById("qualipint").value);
    var num5 = Number(document.getElementById("projetocont").value);
    var num6 = Number(document.getElementById("interface").value);
    var num7 = Number(document.getElementById("datapint").value);
    var num8 = Number(document.getElementById("driver").value);
    
}