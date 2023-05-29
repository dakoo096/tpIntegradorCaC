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
//se establecen las variables
function mostrarResumen() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var categoria = document.getElementById("categoria").value;
  var precio = 200;
  var descuento;

  //se establecen los descuentos por categoria
  if (categoria === "Estudiante") {
    descuento = 0.8;
  } else if (categoria === "Trainee") {
    descuento = 0.5;
  } else if (categoria === "Junior") {
    descuento = 0.15;
  }

  var total = cantidad * precio * (1 - descuento);
  document.getElementById("total").textContent = total.toFixed(2);

  //se crea objeto resumen con los datos ingresados
  var resumenHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Apellido: ${apellido}</p>
    <p>Correo: ${correo}</p>
    <p>Cantidad: ${cantidad}</p>
    <p>Categoría: ${categoria}</p>
    <p>Total a Pagar: $${total.toFixed(2)}</p>
  `;

  //se muestran los datos
  document.getElementById("resumen").innerHTML = resumenHTML;
  document.getElementById("resumenContainer").style.display = "block";
}

//se crea funcion borrar datos para restablecer todo a 0
function borrarDatos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("cantidad").value = "1";
  document.getElementById("categoria").selectedIndex = 0;
  document.getElementById("total").textContent = "";
  document.getElementById("resumenContainer").style.display = "none";
}
