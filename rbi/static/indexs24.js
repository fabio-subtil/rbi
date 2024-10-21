static/indexs24.js



var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

function calcular() {
    var num1 = Number(document.getElementById("numfalha").value);
    var num2 = Number(document.getElementById("sevibra").value);
    var num3 = Number(document.getElementById("numsemana").value);
    var num4 = Number(document.getElementById("altengsup").value);
    var num5 = Number(document.getElementById("complex").value);
    var num6 = Number(document.getElementById("tipojuntatub").value);
    var num7 = Number(document.getElementById("qualsup").value);
    
}