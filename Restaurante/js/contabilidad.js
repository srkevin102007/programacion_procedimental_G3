function validarFormulario() {
  let ventas = document.getElementById("ventas").value;
  let fecha = document.getElementById("fecha").value;
  let ingresos = document.getElementById("ingresos").value;
  let egresos = document.getElementById("egresos").value;
  let valor_total = document.getElementById("valor_total").value;

  if (
    ventas === "" ||
    fecha === "" ||
    ingresos === "" ||
    egresos === "" ||
    valor_total === ""
  ) {
    console.log("Los campos están vacíos");
  } else {
    if (ventas != /[0-9]/) {
      console.log("Solo puede contener números");
    }

    if (ingresos != /[0-9]/) {
      console.log("Solo puede contener números");
    }

    if (egresos != /[0-9]/) {
      console.log("Solo puede contener números");
    }

    if (valor_total != /[0-9]/) {
      console.log("Solo puede contener números");
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

let btnGuardar = document.getElementById("btnGuardar").value;
document.getElementById("btnGuardar").onclick = validarFormulario;
