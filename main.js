// Get the button:
let mybutton = document.getElementById("myBtn");

// cuando se scrollea para abajo aparece el boton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// cuando se hace clic va a la parte superior
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // chrome, Firefox,
}

/*----------------
COMPRAR TICKETS
----------------*/

function calcularTotal() {
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var categoria = document.getElementById("categoria").value;
  var precio = 200;
  var descuento;

  if (categoria === "categoriaEstudiante") {
    descuento = 0.8;
  } else if (categoria === "categoriaTrainee") {
    descuento = 0.5;
  } else if (categoria === "categoriaJunior") {
    descuento = 0.15;
  }

  var total = cantidad * precio * (1 - descuento);
  total = Math.round(total);
  document.getElementById("total").innerText = total;
}

function borrarTotal() {
  document.getElementById("total").innerText = "";
}
