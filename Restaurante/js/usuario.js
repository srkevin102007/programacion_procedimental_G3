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
    nombre == "" ||
    apellido == "" ||
    genero == "" ||
    numero_documento == "" ||
    tipo_documento == "" ||
    telefono == "" ||
    correo_electronico == "" ||
    fecha_nacimiento == "" ||
    cargo == "" ||
    contraseña == ""
  ) {
    console.log("Los campos están vacíos");
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Los campos están vacíos",
    });
    return;
  } else {
    if (!/[a-zA-Z]/.test(nombre) || !/[a-zA-Z]/.test(apellido)) {
      console.log("Nombre o Apellido solo puede contener letras");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nombre o Apellido solo puede contener letras",
         showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (!/[0-9]/.test(numero_documento)) {
      console.log("Los datos son incorrectos");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Número de documento solo puede contener números",
         showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (!/[0-9]/.test(telefono)) {
      console.log("Los datos son incorrectos");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Teléfono solo puede contener números",
         showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (!/@/.test(correo_electronico)) {
      console.log("Los datos son incorrectos");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Correo electrónico no es válido",
         showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (!/[a-zA-Z0-9]/.test(contraseña)) {
      console.log("Los datos son incorrectos");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "La contraseña debe tener al menos 8 caracteres",
         showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
      
    }
    if (!/@/.test(correo_electronico)) {
      console.log("Los datos son incorrectos");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Correo electrónico no es válido",
         showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (contraseña.includes(" . ") || contraseña.length < 8) {
      console.log("Los datos son incorrectos");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "La contraseña debe tener al menos 8 caracteres",
         showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
}


document.getElementById("btnguardar").onclick = validarFormulario;
