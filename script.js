/* ============================================
   TRAZZOS — Estudio Creativo Digital
   JavaScript principal
   ============================================ */

console.log("🚀 TRAZZOS — JavaScript cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
    console.log("📄 DOM completamente cargado");

    /* ============================================
       1. Verificaciones del DOM (Día 12)
       ============================================ */

    const header = document.querySelector("header");
    if (header) {
        console.log("✅ Header: encontrado");
    }

    const nav = document.querySelector("header nav");
    if (nav) {
        console.log("✅ Nav: encontrado");
    }

    const enlacesNav = document.querySelectorAll("header nav a");
    console.log("🔗 Enlaces en el nav: " + enlacesNav.length);

    const tarjetasServicios = document.querySelectorAll("#servicios > article");
    console.log("🃏 Tarjetas de servicios: " + tarjetasServicios.length);

    const botonWhatsApp = document.querySelector("body > aside a");
    if (botonWhatsApp) {
        console.log("✅ Botón WhatsApp: encontrado");
    }

    const formulario = document.querySelector("#contacto form");
    if (formulario) {
        console.log("✅ Formulario de contacto: encontrado");
    }

    /* ============================================
       2. Scroll suave (Día 12)
       ============================================ */

    document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
        enlace.addEventListener("click", function (e) {
            const destino = document.querySelector(this.getAttribute("href"));
            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
    console.log("✨ Scroll suave activado");

    /* ============================================
       3. Menú móvil hamburguesa (Día 13)
       ============================================ */

    const menuToggle = document.querySelector("#menu-toggle");
    const menuNav = document.querySelector("#menu-principal");

    if (menuToggle && menuNav) {
        menuToggle.addEventListener("click", () => {
            const abierto = menuNav.classList.toggle("abierto");
            menuToggle.setAttribute("aria-expanded", abierto);
            if (abierto) {
                menuToggle.setAttribute("aria-label", "Cerrar menú de navegación");
            } else {
                menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
            }
        });

        menuNav.querySelectorAll("a").forEach((enlace) => {
            enlace.addEventListener("click", () => {
                menuNav.classList.remove("abierto");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
            });
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && menuNav.classList.contains("abierto")) {
                menuNav.classList.remove("abierto");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
                menuToggle.focus();
            }
        });

        console.log("✅ Menú móvil: configurado");
    }

    /* ============================================
       4. Validación del formulario (Día 14 + Día 15)
       ============================================ */

    const mensajeConfirmacion = document.querySelector("#mensaje-confirmacion");

    if (formulario) {
        const campoNombre = formulario.querySelector("#nombre");
        const campoEmail = formulario.querySelector("#email");
        const campoTelefono = formulario.querySelector("#telefono");
        const campoMensaje = formulario.querySelector("#mensaje");

        const mensajesPersonalizados = {
            nombre: {
                valueMissing: "Por favor, escribe tu nombre completo.",
                tooShort: "El nombre debe tener al menos 2 letras.",
                tooLong: "El nombre es demasiado largo (máximo 50 letras)."
            },
            email: {
                valueMissing: "Por favor, escribe tu correo electrónico.",
                typeMismatch: "El correo no es válido. Ejemplo: nombre@dominio.com."
            },
            telefono: {
                patternMismatch: "El celular debe tener 8 dígitos sin guiones. Ejemplo: 12345678."
            },
            mensaje: {
                valueMissing: "Por favor, escribe un mensaje.",
                tooShort: "El mensaje debe tener al menos 10 caracteres.",
                tooLong: "El mensaje es demasiado largo (máximo 500 caracteres)."
            }
        };

        function obtenerMensajeError(campo, mensajes) {
            if (campo.validity.valueMissing) {
                return mensajes.valueMissing || "Este campo es obligatorio.";
            }
            if (campo.validity.typeMismatch) {
                return mensajes.typeMismatch || "El formato no es válido.";
            }
            if (campo.validity.patternMismatch) {
                return mensajes.patternMismatch || "El formato no coincide.";
            }
            if (campo.validity.tooShort) {
                return mensajes.tooShort || "El texto es demasiado corto.";
            }
            if (campo.validity.tooLong) {
                return mensajes.tooLong || "El texto es demasiado largo.";
            }
            return "";
        }

        const campos = [
            { campo: campoNombre, mensajes: mensajesPersonalizados.nombre },
            { campo: campoEmail, mensajes: mensajesPersonalizados.email },
            { campo: campoTelefono, mensajes: mensajesPersonalizados.telefono },
            { campo: campoMensaje, mensajes: mensajesPersonalizados.mensaje }
        ];

        campos.forEach(({ campo, mensajes }) => {
            if (!campo) return;

            campo.addEventListener("input", () => {
                campo.setCustomValidity("");
            });

            campo.addEventListener("invalid", () => {
                const mensaje = obtenerMensajeError(campo, mensajes);
                campo.setCustomValidity(mensaje);
            });
        });

        formulario.addEventListener("submit", async (e) => {
            e.preventDefault();

            let hayErrores = false;

            campos.forEach(({ campo, mensajes }) => {
                if (!campo) return;
                campo.setCustomValidity("");

                if (!campo.checkValidity()) {
                    const mensaje = obtenerMensajeError(campo, mensajes);
                    campo.setCustomValidity(mensaje);
                    hayErrores = true;
                }
            });

            if (hayErrores) {
                if (mensajeConfirmacion) {
                    mensajeConfirmacion.hidden = true;
                    mensajeConfirmacion.textContent = "";
                }

                const primerError = formulario.querySelector(":invalid");
                if (primerError) {
                    primerError.focus();
                    primerError.reportValidity();
                }

                console.warn("⚠️ Formulario con errores. Corrige antes de enviar.");
            } else {
                console.log("✅ Formulario válido. Enviando a Formspree...");

                const datos = new FormData(formulario);

                try {
                    const respuesta = await fetch(formulario.action, {
                        method: "POST",
                        body: datos,
                        headers: { "Accept": "application/json" }
                    });

                    if (respuesta.ok) {
                        console.log("✅ Mensaje enviado correctamente a Formspree");
                        formulario.reset();

                        if (mensajeConfirmacion) {
                            mensajeConfirmacion.textContent = "✅ ¡Gracias! Tu mensaje fue enviado correctamente.";
                            mensajeConfirmacion.hidden = false;
                            mensajeConfirmacion.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                    } else {
                        console.error("❌ Error al enviar. Status: " + respuesta.status);
                        if (mensajeConfirmacion) {
                            mensajeConfirmacion.textContent = "❌ Hubo un error al enviar. Intenta de nuevo.";
                            mensajeConfirmacion.hidden = false;
                        }
                    }
                } catch (error) {
                    console.error("❌ Error de conexión:", error);
                    if (mensajeConfirmacion) {
                        mensajeConfirmacion.textContent = "❌ Error de conexión. Revisa tu internet e intenta de nuevo.";
                        mensajeConfirmacion.hidden = false;
                    }
                }
            }
        });

        console.log("✅ Validación del formulario: configurada");
    }

    if (mensajeConfirmacion) {
        console.log("✅ Mensaje de confirmación: configurado");
    }

    /* ============================================
       5. Mensaje final
       ============================================ */

    console.log("%cTRAZZOS — Estudio Creativo Digital", "color: #D4AF37; font-size: 16px; font-weight: bold;");
});