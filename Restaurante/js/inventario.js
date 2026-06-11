let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;
let marca_producto = document.getElementById("marca_producto").value;

function validarFormulario() {
  if (
    codigo_producto === "" ||
    nombre_producto === "" ||
    cantidad_producto === "" ||
    marca_producto === ""
  ) {
    console.log("Los campos están vacíos");
  } else {
    if (codigo_producto != /[0-9]/) {
      console.log("Solo puede contener números");
    }

    if (nombre_producto != /[a-zA-Z]/) {
      console.log("Solo puede contener letras");
    }

    if (cantidad_producto != /[0-9]/) {
      console.log("Solo puede contener números");
    }

    if (marca_producto != /[a-zA-Z]/) {
      console.log("Solo puede contener letras");
    }


  }
}
