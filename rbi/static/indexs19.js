static/indexs19.js



var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

function calcular() {
    var num1 = Number(document.getElementById("preparh2").value);
    var num2 = Number(document.getElementById("hisththa").value);
    var num3 = Number(document.getElementById("matsubst").value);


}