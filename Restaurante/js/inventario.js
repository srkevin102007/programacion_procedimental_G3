function validarFormulario() {
  let codigo_producto = document.getElementById("codigo_producto").value;
  let nombre_producto = document.getElementById("nombre_producto").value;
  let cantidad_producto = document.getElementById("cantidad_producto").value;
  let marca_producto = document.getElementById("marca_producto").value;
  if (
    codigo_producto == "" ||
    nombre_producto == "" ||
    cantidad_producto == "" ||
    marca_producto == ""
  ) {
    console.log("Los campos están vacíos");
     Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Los campos están vacíos",
        
      });
      return;
  } else {
    if (!/[0-9]/.test(codigo_producto)) {
      console.log("Solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Código solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[a-zA-Z]/.test(nombre_producto)) {
      console.log("Solo puede contener letras");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nombre solo puede contener letras",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(cantidad_producto)) {
      console.log("Solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Cantidad solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[a-zA-Z]/.test(marca_producto)) {
      console.log("Solo puede contener letras");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Marca solo puede contener letras",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

document.getElementById("btnGuardar").onclick = validarFormulario;
