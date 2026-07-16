function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let tipo_documento = document.getElementById("tipo_documento").value;
  let numero_documento = document.getElementById("numero_documento").value;
  let telefono = document.getElementById("telefono").value;
  let correo_electronico = document.getElementById("correo_electronico").value;
  let genero = document.getElementById("genero").value;
  let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  let cargo = document.getElementById("cargo").value;
  let contraseña = document.getElementById("contraseña").value;

  if (
    !nombre === "" ||
    !apellido === "" ||
    !genero === "" ||
    !numero_documento === "" ||
    !tipo_documento === "" ||
    !telefono === "" ||
    !correo_electronico === "" ||
    !fecha_nacimiento === "" ||
    !cargo === "" ||
    !contraseña === ""
  ) {
    console.log("Los campos están vacíos");
  } else {
    if (nombre != /[a-zA-Z]/ || apellido != /[a-zA-Z]/) {
      console.log("Los datos son incorrectos");
    }
    if (numero_documento != /[0-9]/) {
      console.log("Los datos son incorrectos");
    }
    if (telefono.length >= 10 || telefono != /[0-9]/) {
      console.log("Los datos son incorrectos");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (correo_electronico != /[@]/) {
      console.log("Los datos son incorrectos");
    }
    if (contraseña.includes(" . ") || contraseña.length < 8) {
      console.log("Los datos son incorrectos");
    }
  }
}
let btnGuardar = document.getElementById("btnGuardar").value;
document.getElementById("btnGuardar").onclick = validarFormulario;
