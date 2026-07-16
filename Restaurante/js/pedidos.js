function validarFormulario() {
  let cantidad = document.getElementById("cantidad").value;
  let nombre_usuario = document.getElementById("nombre_usuario").value;
  let producto = document.getElementById("producto").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let metodoPago = document.getElementById("metodoPago").value;

  if (
    cantidad == "" ||
    nombre_usuario == "" ||
    producto == "" ||
    telefono == "" ||
    direccion == "" ||
    metodoPago == ""
  ) {
    console.log("Los campos están vacíos");
     Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Los campos están vacíos",
        
      });
      return;
  }else {
    if (!/[0-9]/.test(cantidad)) {
      console.log("Cantidad solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Cantidad solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
   
    if (!/[a-zA-Z]/.test(nombre_usuario)) {
      console.log("Nombre de usuario solo puede contener letras");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nombre de usuario solo puede contener letras",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[a-zA-Z]/.test(producto)) {
      console.log("Producto solo puede contener letras");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Producto solo puede contener letras",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(telefono)) {
      console.log("Teléfono solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Teléfono solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[a-zA-Z]/.test(direccion)) {
      console.log("Dirección solo puede contener letras");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Dirección solo puede contener letras",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Pedido realizado con éxito",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

document.getElementById("btnguardar").onclick = validarFormulario;
