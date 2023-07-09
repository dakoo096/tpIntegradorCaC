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

//si se hace click en un div de arriba se selecciona la categoria automaticamente
function seleccionarCategoria(categoria) {
  document.getElementById('categoria').value = categoria;
}

//validar datos del formulario
function validarFormulario() {
  const form = document.querySelector('.needs-validation');
  if (form.checkValidity()) {
    form.classList.add('was-validated');
    mostrarResumen();
    document.getElementById("resumenContainer").style.display = "block";
  } else {
    form.classList.add('was-validated');
  }
}

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
  document.getElementById("total").textContent = total.toFixed( 2);


  //se crea objeto resumen con los datos ingresados
  var resumenHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Apellido: ${apellido}</p>
    <p>Correo: ${correo}</p>
    <p>Cantidad: ${cantidad}</p>
    <p>Categoría: ${categoria}</p>
    <p>Total a Pagar: $${total.toFixed(2)}</p>
  `;

  document.getElementById("resumen").innerHTML = resumenHTML;
}
  //se muestran los datos
  document.getElementById("cantidad").addEventListener("input", mostrarResumen);
  document.getElementById("categoria").addEventListener("input", mostrarResumen);


function enviarDatos() {
  // Obtener los datos del resumen
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var categoria = document.getElementById("categoria").value;
  var total = parseFloat(document.getElementById("total").textContent);

  // Realizar la solicitud AJAX o cualquier otra acción para enviar los datos al servidor
  // Aquí se muestra un mensaje de ejemplo en la consola
  console.log("Datos enviados:");
  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
  console.log("Correo:", correo);
  console.log("Cantidad:", cantidad);
  console.log("Categoría:", categoria);
  console.log("Total:", total);

}
//se crea funcion borrar datos para restablecer todo a 0
function borrarDatos() {
  // Restablecer el display del resumenContainer a "none"
  document.getElementById("resumenContainer").style.display = "none";

  // Restablecer los valores del formulario a sus valores iniciales
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("cantidad").value = 0;
  document.getElementById("categoria").value = "Estudiante";
  document.getElementById("total").textContent = "";

  // Restablecer la validación del formulario
  const form = document.querySelector('.needs-validation');
  form.classList.remove('was-validated');
}