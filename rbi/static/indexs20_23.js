static/indexs20_23.js



var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

function calcular() {
    var num1 = Number(document.getElementById("curvamat").value);
    var num2 = Number(document.getElementById("cet").value);
    var num3 = Number(document.getElementById("tref").value);
    var num4 = Number(document.getElementById("acoliga").value);
    var num5 = Number(document.getElementById("triagem").value);
    var num6 = Number(document.getElementById("tempref").value);
    var num7 = Number(document.getElementById("tempimpacto3").value);
    var num8 = Number(document.getElementById("deltafatt").value);
    var num9 = Number(document.getElementById("sce").value);
    var num10 = Number(document.getElementById("percsn").value);
    var num11 = Number(document.getElementById("percsb").value);
    var num12 = Number(document.getElementById("percas").value);
    var num13 = Number(document.getElementById("quantsigma").value);
    
}