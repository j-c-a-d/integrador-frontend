//Funciones principales.
function resum() {
  let cant = "",
    categ = "";
  const precio = 200;
  let descuento = 0;

  cant = document.getElementById("cantidad").value;
  categ = document.getElementById("categorias").value;
  cant = Number(cant);
  categ = categ.toLowerCase();
  console.log(precio, cant, categ);

  if (categ === "estudiante") {
    descuento = 0.2;
  } else {
    if (categ === "trainee") {
      descuento = 0.5;
    } else {
      descuento = 0.95;
    }
  }
  console.log(precioDescuento(precio, cant, descuento));
  mostrarTotal(precioDescuento(precio, cant, descuento));
}

//Validar campos.

function validar() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let correo = document.getElementById("mail").value;
  let cantidad = document.getElementById("cantidad").value;

  let estado = validarMail(correo);

  if (estado==true) {
    document.getElementById("mailAviso").innerHTML = "Correcto";
    document.getElementById("mailAviso").style.color = "green";
  } else {
    document.getElementById("mailAviso").innerHTML =
    "Formato de correo incorrecto";
  document.getElementById("mailAviso").style.color = "red";
  }

  if (
    estado != true ||
    nombre == "" ||
    apellido == "" ||
    cantidad <= 0 
  ) {
    document.getElementById("resumen").disabled = true;
  } else {
    document.getElementById("resumen").disabled = false;
  }
}

function limpiar() {
  document.getElementById("total").innerHTML = "";
  document.getElementById("formulario").reset();
  document.getElementById("resumen").disabled = true;
}

/* Funciones secundarias */

//Calcular total.
function precioDescuento(precio, cantidad, descuento) {
  return precio * cantidad * descuento;
}

mostrarTotal = (total) => (document.getElementById("total").innerHTML = total);

//Validar email
function validarMail(correo) {
  let correoMin = correo.toLowerCase();
  //Variables para posicion del @ y el ".".
  var arrobaPosicion = 0;
  var puntoPosicion = 0;
  arrobaPosicion = correoMin.indexOf("@");
  arrobaRep = correoMin.indexOf("@", arrobaPosicion + 1);
  puntoPosicion = correoMin.indexOf(".com", arrobaPosicion);
  espacios = correoMin.indexOf(" ");

  console.log(arrobaPosicion, arrobaRep);

  //Devuelve true si el correo es correcto o false si el correo es incorrecto
  if (
    correoMin != "" &&
    espacios == -1 &&
    correoMin.indexOf("@") != -1 &&
    puntoPosicion > arrobaPosicion + 1 &&
    arrobaRep == -1
  ) {
    return true;
  } else {
    return false;
  }
}
