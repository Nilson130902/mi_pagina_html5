const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");

const errores = {
  nombre: document.getElementById("error-nombre"),
  correo: document.getElementById("error-correo"),
  contrasena: document.getElementById("error-contrasena"),
  confirmar: document.getElementById("error-confirmar"),
  edad: document.getElementById("error-edad")
};

function validarNombre() {
  if (nombre.value.trim().length < 3) {
    errores.nombre.textContent = "Debe tener al menos 3 caracteres.";
    return false;
  }
  errores.nombre.textContent = "";
  return true;
}

function validarCorreo() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(correo.value)) {
    errores.correo.textContent = "Correo no válido.";
    return false;
  }
  errores.correo.textContent = "";
  return true;
}

function validarContrasena() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (contrasena.value.length < 8 || !regex.test(contrasena.value)) {
    errores.contrasena.textContent = "Mínimo 8 caracteres, un número y un símbolo.";
    return false;
  }
  errores.contrasena.textContent = "";
  return true;
}

function validarConfirmacion() {
  if (confirmar.value !== contrasena.value || confirmar.value === "") {
    errores.confirmar.textContent = "Las contraseñas no coinciden.";
    return false;
  }
  errores.confirmar.textContent = "";
  return true;
}

function validarEdad() {
  if (parseInt(edad.value) < 18) {
    errores.edad.textContent = "Debes tener al menos 18 años.";
    return false;
  }
  errores.edad.textContent = "";
  return true;
}

function validarFormulario() {
  const validez =
    validarNombre() &&
    validarCorreo() &&
    validarContrasena() &&
    validarConfirmacion() &&
    validarEdad();

  enviar.disabled = !validez;
}

[nombre, correo, contrasena, confirmar, edad].forEach((input) =>
  input.addEventListener("input", validarFormulario)
);

document.getElementById("registro-formulario").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulario enviado con éxito.");
});

document.getElementById("reiniciar").addEventListener("click", () => {
  Object.values(errores).forEach((span) => (span.textContent = ""));
  enviar.disabled = true;
});
