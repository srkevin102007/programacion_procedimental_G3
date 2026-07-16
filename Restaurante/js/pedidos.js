function validarFormulario() {
  let cantidad = document.getElementById("cantidad").value;
  let nombre_usuario = document.getElementById("nombre_usuario").value;
  let producto = document.getElementById("producto").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let metodoPago = document.getElementById("metodoPago").value;

  if (
    cantidad === "" ||
    nombre_usuario === "" ||
    producto === "" ||
    telefono === "" ||
    direccion === "" ||
    metodoPago === ""
  ) {
    console.log("Los campos están vacíos");
  }
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
}
let btnGuardar = document.getElementById("btnGuardar").value;
document.getElementById("btnGuardar").onclick = validarFormulario;
