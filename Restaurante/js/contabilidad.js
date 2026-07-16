function validarFormulario() {
  let ventas = document.getElementById("ventas").value;
  let fecha = document.getElementById("fecha").value;
  let ingresos = document.getElementById("ingresos").value;
  let egresos = document.getElementById("egresos").value;
  let valor_total = document.getElementById("valor_total").value;

  if (
    ventas == "" ||
    fecha == "" ||
    ingresos == "" ||
    egresos == "" ||
    valor_total == ""
  ) {
    console.log("Los campos están vacíos");
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Los campos están vacíos",
    });
    return;
  } else {
    if (!/[0-9]/.test(ventas)) {
      console.log("Ventas solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ventas solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(ingresos)) {
      console.log("Ingresos solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ingresos solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(egresos)) {
      console.log("Egresos solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ingresos solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (!/[0-9]/.test(valor_total)) {
      console.log("Valor Total solo puede contener números");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Valor Total solo puede contener números",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Dats guardados conn éxito",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

document.getElementById("btnGuardar").onclick = validarFormulario;
