/* ============================================================
   1. MENÚ MÓVIL
   ============================================================ */
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("menu-principal");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    toggle.setAttribute("aria-expanded", abierto);
    toggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });

  nav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("abierto");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("abierto")) {
      nav.classList.remove("abierto");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      toggle.focus();
    }
  });
}

/* ============================================================
   2. VALIDACIÓN DEL FORMULARIO DE CONTACTO — DÍA 14
   ============================================================ */
const formulario = document.querySelector("#formulario-contacto");

if (formulario) {
  const nombre  = document.querySelector("#nombre");
  const correo  = document.querySelector("#correo");
  const mensaje = document.querySelector("#mensaje");
  const estado  = document.querySelector("#estado-formulario");

  const campos = [
    { elemento: nombre,  error: document.querySelector("#error-nombre")  },
    { elemento: correo,  error: document.querySelector("#error-correo")  },
    { elemento: mensaje, error: document.querySelector("#error-mensaje") }
  ];

  function establecerError(campo, elementoError, texto) {
    campo.setCustomValidity(texto);
    campo.setAttribute("aria-invalid", texto ? "true" : "false");
    elementoError.textContent = texto;
  }

  function validarNombre() {
    const valor = nombre.value.trim();
    let error = "";

    if (valor.length === 0) {
      error = "Escriba su nombre.";
    } else if (valor.length < 3) {
      error = "El nombre debe tener al menos 3 caracteres.";
    } else if (valor.length > 80) {
      error = "El nombre no puede superar 80 caracteres.";
    } else if (/[\u0000-\u001F\u007F]/u.test(valor)) {
      error = "El nombre contiene caracteres de control no permitidos.";
    }

    establecerError(nombre, document.querySelector("#error-nombre"), error);
    return error === "";
  }

  function validarMensaje() {
    const valor = mensaje.value.trim();
    let error = "";

    if (valor.length === 0) {
      error = "Escriba su mensaje.";
    } else if (valor.length < 10) {
      error = "El mensaje debe tener al menos 10 caracteres.";
    } else if (valor.length > 1000) {
      error = "El mensaje no puede superar 1000 caracteres.";
    } else if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(valor)) {
      error = "El mensaje contiene caracteres de control no permitidos.";
    }

    establecerError(mensaje, document.querySelector("#error-mensaje"), error);
    return error === "";
  }

  function validarCorreo() {
    const valor = correo.value.trim();
    let error = "";

    if (valor.length === 0) {
      error = "Escriba su correo electrónico.";
    } else if (valor.length > 254) {
      error = "El correo no puede superar 254 caracteres.";
    } else if (/[\s\u0000-\u001F\u007F]/u.test(valor)) {
      error = "El correo no puede contener espacios ni caracteres de control.";
    } else if (!correo.validity.valid) {
      error = "Revise el formato del correo electrónico.";
    } else {
      const partes = valor.split("@");

      if (partes.length !== 2) {
        error = "Introduzca una sola dirección de correo.";
      } else {
        const [usuario, dominio] = partes;
        const etiquetas = dominio.split(".");

        if (
          usuario.length > 64 ||
          usuario.startsWith(".") ||
          usuario.endsWith(".") ||
          usuario.includes("..")
        ) {
          error = "Revise la parte del correo anterior a la arroba.";
        } else if (
          etiquetas.length < 2 ||
          etiquetas.some(
            (etiqueta) =>
              etiqueta.length === 0 ||
              etiqueta.length > 63 ||
              !/^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(etiqueta)
          )
        ) {
          error = "Introduzca un dominio de correo válido.";
        }
      }
    }

    establecerError(correo, document.querySelector("#error-correo"), error);
    return error === "";
  }

  nombre.addEventListener("input", validarNombre);
  correo.addEventListener("input", validarCorreo);
  mensaje.addEventListener("input", validarMensaje);

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombreValido  = validarNombre();
    const correoValido  = validarCorreo();
    const mensajeValido = validarMensaje();

    if (!nombreValido || !correoValido || !mensajeValido) {
      estado.textContent = "Revise los campos indicados antes de continuar.";
      formulario.reportValidity();

      const primerInvalido = campos.find(
        (item) => !item.elemento.validity.valid
      );
      if (primerInvalido) {
        primerInvalido.elemento.focus();
      }
      return;
    }

    estado.textContent =
      "Validación correcta. Los datos están listos para la siguiente etapa.";

    formulario.reset();

    campos.forEach(({ elemento, error }) => {
      establecerError(elemento, error, "");
    });
  });
}