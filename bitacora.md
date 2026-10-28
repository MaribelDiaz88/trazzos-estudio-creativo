# Bitácora SCRUM — TRAZZOS

**Proyecto:** TRAZZOS — Estudio Creativo Digital
**Responsable:** Maribel Díaz Carmona
**Curso:** CSTI12008 — Desarrollo de Página Web

---

## Día 1 — 10/09/2026

### ¿Qué hice hoy?
- Configuré VS Code + Live Server.
- Definí la actividad económica: Estudio Creativo Digital.
- Definí el nombre de la página: TRAZZOS.
- Construí el `index.html` con HTML5 semántico (sin `<div>`).
- Integré identidad real: nombre, Maribel Díaz, frase, servicios y paquetes.
- Verifiqué navegación por anclas.

### ¿Qué aprendí?
- Estructura semántica HTML5 (header, nav, main, section, article, figure, address, time, footer).
- Cómo funciona Live Server y su URL local (127.0.0.1:5500).
- Jerarquía correcta de títulos (h1 → h2 → h3).

### Estado
✅ Día 1 completado

---

## Día 2 — 11/09/2026

### ¿Qué hice hoy?
- Reforcé el esqueleto semántico de las 4 secciones ancladas.
- Añadí `scroll-behavior: smooth` para navegación fluida.
- Mejoré accesibilidad con `aria-label` en el nav.
- Añadí `meta description` para SEO básico.
- Actualicé datos de contacto reales.
- Agregué foto personal de Maribel Díaz Carmona en la sección Nosotros.
- Organicé estructura: `index.html` en minúscula, logo y foto en `img/`.
- Corregí errores detectados por W3C.
- Validación W3C final: 0 errores.

### ¿Qué aprendí?
- Funcionamiento de anclas con `id` + `href`.
- Uso de `mailto:` y `tel:` para enlaces funcionales.
- Uso de `<figure>` + `<figcaption>` para imágenes.
- Convención de nombres en minúscula.
- Cómo validar HTML con W3C.

### Estado
✅ Día 2 completado — 0 errores W3C

---

## Día 3 — 17/09/2026

### ¿Qué hice hoy?
- Creé el archivo `style.css` completo.
- Definí variables CSS en `:root`.
- Apliqué `box-sizing: border-box` universal.
- Implementé enfoque mobile-first con punto de quiebre en `720px`.
- Añadí `clamp()` para tipografía responsive.
- Aseguré `44x44px` de área táctil.
- Apliqué identidad visual TRAZZOS (azul rey + dorado).

### ¿Qué aprendí?
- Variables CSS en `:root` y su reutilización con `var()`.
- Box model moderno con `box-sizing: border-box`.
- Enfoque mobile-first.
- `clamp()` para evitar múltiples media queries.
- Área táctil mínima (44x44px) para accesibilidad móvil.

### Estado
✅ Día 3 completado

---

## Día 4 — 18/09/2026

### ¿Qué hice hoy?
- Validé el `index.html` con W3C Markup Validation Service.
- Validé el `style.css` con W3C CSS Validator.
- Ambas validaciones sin errores.
- Establecí el hábito semanal de validación.

### Resultado de validaciones:
- HTML5: 0 errors, 0 warnings ✅
- CSS3: 0 errors, 15 warnings informativos ✅

### Estado
✅ Día 4 completado

---

## Día 5 — 23/09/2026

### ¿Qué hice hoy?
- Creé el Hero principal con imagen de fondo responsiva.
- Usé la etiqueta `<picture>` con 3 versiones optimizadas:
  - PC: 1920 × 1080
  - Tablet: 1024 × 768
  - Móvil: 800 × 1200
- Separé el título del texto descriptivo.
- Agregué un `<h2>` a la sección `#intro` para accesibilidad W3C.
- Apliqué anidamiento CSS nativo.
- Estilicé el header con logo en esquina + nav horizontal.
- Implementé favicon con la "T" dorada.
- Validación W3C final: 0 errors, 0 warnings.

### ¿Qué aprendí?
- Uso de `<picture>` para imágenes responsivas.
- Anidamiento CSS nativo.
- Composición de un hero profesional.
- Importancia de las dimensiones exactas de las imágenes.
- Optimización de peso con squoosh.app.

### Estado
✅ Día 5 completado — Semana 1 terminada

---

## Día 6 — 29/09/2026

### ¿Qué hice hoy?
- Revisé que la navegación esté dentro de `<nav>` con `aria-label`.
- Verifiqué que los enlaces apunten a ids existentes.
- Confirmé el contenedor flexible con Flexbox y `gap`.
- Agregué `:focus-visible` para mejorar la accesibilidad del foco.
- Probé la navegación con teclado (Tab): el foco es visible.
- Probé el nav en móvil: no se desborda.

### ¿Qué aprendí?
- Cómo funciona `:focus-visible` y su importancia para WCAG 2.2.
- Cómo `flex-wrap: wrap` evita desbordes en pantallas estrechas.
- La diferencia entre `:focus` y `:focus-visible`.

### Estado
✅ Día 6 completado — Navegación funcional, accesible y responsive

---

## Día 7 — 29/09/2026

### ¿Qué hice hoy?
- Reorganicé la sección Servicios con CSS Grid.
- Usé `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`.
- El título `<h2>` ocupa toda la fila con `grid-column: 1 / -1`.
- La subsección Paquetes también usa Grid.
- Apliqué `gap` para separación consistente.
- Usé `align-items: start` para alturas naturales.
- Ajusté el hero en móvil con `calc(100vh - 90px)`.
- Validación W3C: 0 errors, 0 warnings.

### ¿Qué aprendí?
- Cómo funciona `auto-fit` + `minmax()` para grids adaptables.
- Uso de `grid-column: 1 / -1` para ocupar toda la fila.
- Cómo `calc()` permite restar la altura del header.
- Grid elimina la necesidad de media queries para reorganizar.

### Estado
✅ Día 7 completado — Grid adaptable en Servicios y Paquetes

### Evidencias
- `evidencia_dia_07_servicios_escritorio.png` — Header roto en Galaxy Z Fold 6

---

## Día 8 — 30/09/2026

### ¿Qué hice hoy?
- Reorganicé el CSS por componentes y bloques lógicos.
- Identifiqué componentes repetidos:
  - Tarjetas con sombra (en Nosotros, Servicios, Contacto)
  - Botones principales (en Intro y CTA)
- Extraje esos componentes a un bloque nuevo "Componentes reutilizables".
- Eliminé reglas duplicadas (background-color, border-radius, box-shadow).
- Mantuve el nesting nativo en todas las secciones.
- Revisé la especificidad después de reorganizar.
- Comprobé que los estilos no se rompieran.
- Agregué dos secciones nuevas:
  - **Proceso**: "¿Cómo trabajamos?" con 4 pasos en Grid.
  - **CTA**: Llamada final a la acción con botón de WhatsApp.
- Vinculé el botón del CTA con WhatsApp (`wa.me/50662702678`).
- Agregué el enlace "Proceso" en el nav.

### ¿Qué aprendí?
- Cómo identificar componentes repetidos en el CSS.
- Cómo extraer estilos comunes a un bloque de componentes.
- La importancia de la especificidad al reorganizar.
- Cómo el nesting nativo mejora la legibilidad.
- Cómo vincular un botón con WhatsApp usando `wa.me/`.
- Cómo crear una sección de proceso con Grid adaptable.

### Nota sobre la validación W3C
El validador W3C CSS marca 14 "errores" por el nesting nativo. Son
falsos positivos porque el validador aún no reconoce la especificación
CSS Nesting (2023). El CSS funciona perfectamente en navegadores modernos.

### Estado
✅ Día 8 completado — CSS reorganizado + secciones Proceso y CTA con WhatsApp

---

## Día 9 — 01/10/2026

### ¿Qué hice hoy?
- Probé el sitio en múltiples tamaños de pantalla:
  - iPhone SE (375px)
  - Galaxy Z Fold 6 (412px)
  - iPhone 14 Pro Max (430px)
  - iPad Mini (768px)
  - iPad Pro (1024px)
  - Surface Pro 10 (960px)
  - Desktop (1440px)
- Detecté un problema grave de responsividad: el header con logo + título +
  5 enlaces no cabía en móviles estrechos (375-430px).
- El "TRAZZOS" del header se cortaba y el texto del hero se salía de la pantalla.
- Reorganicé el header: en móvil se divide en 2 filas (logo + título arriba,
  nav abajo); en tablet y desktop queda en 1 fila.
- Apliqué `clamp()` para tamaños de fuente fluidos.
- Definí 5 breakpoints responsive:
  - Móvil chico: < 480px
  - Móvil grande: 480px - 719px
  - Tablet: 720px - 1023px
  - Desktop: 1024px - 1439px
  - Desktop grande: ≥ 1440px
- Ajusté la altura del hero según el dispositivo:
  - Móvil chico: 55vh
  - Móvil grande: 60vh
  - Tablet: 70vh
  - Desktop: 100vh
- Verifiqué que no hubiera scroll horizontal en ningún tamaño.
- Probé la navegación con teclado (Tab): el foco sigue visible.
- Usé DevTools para emular diferentes tamaños de dispositivo.
- Validé el HTML en W3C (Nu Html Checker): 0 errores, 0 warnings.
- Validé el CSS en W3C (CSS Validator): 0 errores.

### ¿Qué aprendí?
- Cómo identificar problemas responsive reales (no solo teóricos).
- Cómo reorganizar un header con Flexbox para que quepa en cualquier pantalla.
- Cómo usar `clamp()` para tipografía que se adapta automáticamente.
- Cómo definir breakpoints basados en las necesidades del contenido y no en
  nombres de dispositivos.
- Cómo verificar scroll horizontal accidental en DevTools.
- La importancia de probar en múltiples tamaños ANTES de dar por cerrado el diseño.

### Problema encontrado
El header con 5 enlaces no cabía en móviles de 375-430px. El "TRAZZOS" se
cortaba y el texto del hero se salía. El sitio se veía bien en desktop pero
roto en móvil.

### Cómo lo resolví
1. Reorganicé el header en 2 filas en móvil (Flexbox con `flex-direction: column`).
2. Ajusté tamaños de fuente con `clamp()`.
3. Definí 5 breakpoints con `@media`.
4. Ajusté la altura del hero según el dispositivo.
5. Verifiqué visualmente cada tamaño en DevTools.
6. Confirmé que no hubiera scroll horizontal.

### Estado
✅ Día 9 completado — Sitio responsive verificado y corregido en todos los tamaños

### Evidencias
- `evidencia_dia_09_responsive_movil.png` — Header roto en Galaxy Z Fold 6
- `evidencia_dia_09_responsive_actualizado.png` — Header corregido en Galaxy Z Fold 6
- `evidencia_dia_09_validacion_w3c_html.png` — Nu Html Checker (0 errores)
- `evidencia_dia_09_validacion_w3c_css.png` — W3C CSS Validator (0 errores)

---

## Resumen del proyecto

| Día | Tema | Estado |
|---|---|---|
| 1 | HTML5 semántico | ✅ |
| 2 | 4 secciones ancladas | ✅ |
| 3 | Variables CSS + Mobile-first | ✅ |
| 4 | Validación W3C | ✅ |
| 5 | Hero + Anidamiento CSS | ✅ |
| 6 | Navegación con Flexbox | ✅ |
| 7 | CSS Grid | ✅ |
| 8 | Reorganización CSS por componentes | ✅ |
| 9 | Diseño Responsive y Adaptable | ✅ |

**Total: 9 días completados** 

---

## Día 10 — 02/10/2026

### ¿Qué hice hoy?
- Consolidé el proyecto mediante un proceso completo de QA.
- Validé el HTML en W3C: 0 errores, 0 warnings.
- Validé el CSS en W3C: 0 errores.
- Probé la navegación interna: 5 enlaces funcionan.
- Probé las 7 secciones del sitio.
- Probé las tarjetas (Servicios, Paquetes, Proceso).
- Probé 3 anchos: 375px, 768px, 1440px.
- Comprobé que no hubiera scroll horizontal.
- Verifiqué el foco visible con Tab.
- Revisé imágenes y textos.
- Corregí el hero moviéndolo fuera del `<main>` para que ocupe pantalla completa en todos los dispositivos.

### Resultado del QA
- ✅ HTML: 0 errores
- ✅ CSS: 0 errores
- ✅ Navegación: 5/5 enlaces funcionando
- ✅ Secciones: 7/7 funcionando
- ✅ Tarjetas: todas responsive
- ✅ Hero: pantalla completa
- ✅ Sin scroll horizontal
- ✅ Foco visible con Tab
- ✅ Sin pendientes

### Estado
✅ Día 10 completado — PROYECTO FINAL COMPLETO


---

## Día 11 — 08/10/2026

### ¿Qué hice hoy?
- Creé el repositorio del proyecto en GitHub.
- Definí un nombre claro: `trazzos-estudio-creativo`.
- Creé el README inicial con la descripción del proyecto.
- Agregué todos los archivos del proyecto:
  - `index.html`
  - `style.css`
  - `script.js`
  - `bitacora.md`
  - `README.md`
  - `img/` (carpeta con todas las imágenes)
  - `Levantamiento_Requerimientos_Trazzos.docx`
- Realicé el primer commit con mensaje descriptivo.
- Mantuve 32 commits con mensajes descriptivos durante todo el proyecto.
- Comprobé que los archivos correctos llegaron al repositorio.
- Verifiqué que no se subieron contraseñas ni archivos innecesarios.
- Guardé la URL del repositorio como fuente de evidencia.
- Definí el repositorio como fuente principal de evidencia del avance.

### ¿Qué aprendí?
- Qué es un repositorio y para qué sirve.
- Qué es un commit y cómo usarlo correctamente.
- La diferencia entre repositorio local y remoto.
- Cómo mantener una trazabilidad clara del proyecto.
- La importancia de usar mensajes de commit descriptivos.

### Conceptos clave del Día 11
- **repository:** carpeta donde se guardan los archivos del proyecto en la nube.
- **commit:** punto de guardado con un mensaje descriptivo.
- **main:** rama principal del repositorio.
- **remote:** conexión entre el repositorio local y GitHub.
- **README:** archivo de presentación del proyecto.

### Estado
✅ Día 11 completado — Repositorio creado y trazabilidad establecida

### Evidencias
- Repositorio: https://github.com/MaribelDiaz88/trazzos-estudio-creativo
- 32 commits con mensajes descriptivos
- README inicial completado
- Todos los archivos del proyecto subidos

---

## Día 12 — JavaScript y DOM

**Fecha:** 08/10/2026

**Objetivo del día:**
Conectar JavaScript con el DOM e inspeccionar elementos antes de crear interacciones.

### ✅ Lo que se hizo

1. **Correcciones al HTML (`index.html`)**
   - Agregado `<script src="script.js"></script>` antes de `</body>`
   - Cerrado correctamente el `<footer>`
   - Movido el `<aside>` (botón WhatsApp) fuera del footer
   - Añadidos enlaces legales (Política, Términos, Cookies)

2. **Completado del CSS (`style.css`)**
   - Archivo estaba cortado en `@media (max-width: 479px)`
   - Añadidos los 5 media queries completos (móvil chico, móvil grande, tablet, desktop, desktop XL)
   - Añadido bloque 19 de foco visible (WCAG 2.2)

3. **JavaScript (`script.js`)**
   - Archivo estaba vacío
   - Añadido código de verificación del DOM:
     - Detección de header, nav, botón WhatsApp, formulario
     - Conteo de enlaces del nav (5) y tarjetas de servicios (4)
     - Scroll suave para enlaces internos
   - Mensajes en consola verifican que todo carga correctamente

4. **Formulario con Formspree**
   - Configurado endpoint: `https://formspree.io/f/xdeagdzp`
   - Prueba exitosa: mensaje llegó a trazzoscr02@gmail.com
   - Añadidos campos ocultos: `_subject`, `_next`, `_gotcha` (anti-spam)

###  Problemas encontrados y soluciones

| Problema | Solución |
|----------|----------|
| `<script>` faltante en HTML | Agregado antes de `</body>` |
| `<footer>` sin cerrar | Cerrado correctamente |
| `<aside>` dentro del `<footer>` | Movido fuera como hermano |
| CSS cortado en `@media` | Completado con 5 media queries |
| `script.js` vacío | Llenado con código funcional |
| Formspree con placeholder | Configurado con código real |

###  Auditorías realizadas

**WAVE (Accesibilidad):**
- AIM Score: 9.4/10
- 0 errores graves
- 33 elementos de estructura
- 10 elementos ARIA
- 2 contrast errors (resueltos con contorno azul oscuro en el hero)

**Lighthouse (Rendimiento, Accesibilidad, SEO):**
- Performance: 86
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Aprendizajes

- Uso de DevTools (Elements, Console, Network, Lighthouse)
- Cómo interpretar el panel Styles
- CSS Nesting (`&::after`)
- Conexión HTML + CSS + JS correctamente
- `document.addEventListener("DOMContentLoaded")`
- Configuración de Formspree paso a paso
- Cálculo del contraste WCAG
- Auditorías con WAVE y Lighthouse

###  Enlaces

- Sitio local: `http://127.0.0.1:5500/`
- Repositorio GitHub: https://github.com/MaribelDiaz88/trazzos-estudio-creativo
- Formspree: https://formspree.io
- WAVE: https://wave.webaim.org



###  Estado del Día 12

- [x] script.js conectado
- [x] Prueba de consola
- [x] Commit en GitHub
- [x] Auditorías completadas


**Fin del Día 12.**
---

## Día 13 — Menú móvil accesible

**Fecha:** 12/10/2026

**Objetivo del día:**
Implementar la apertura y cierre del menú en pantallas estrechas con JavaScript y accesibilidad básica.

### Lo que se hizo

**1. HTML — Botón hamburguesa**

Se añadió un botón real (`<button>`) en el header, antes del `<nav>`, con los siguientes atributos ARIA:

- `id="menu-toggle"` — identificador único del botón.
- `type="button"` — evita que el botón envíe formularios.
- `aria-label="Abrir menú de navegación"` — nombre accesible para lectores de pantalla.
- `aria-expanded="false"` — estado inicial: cerrado.
- `aria-controls="menu-principal"` — indica qué elemento controla.
- El ícono `☰` va dentro de un `<span>` con `aria-hidden="true"` (decorativo).

También se añadió `id="menu-principal"` al `<nav>` para que `aria-controls` apunte correctamente.

**2. CSS — Estilos del menú**

- El botón `.menu-toggle` está **oculto por defecto en desktop** (`display: none`).
- En móvil (dentro de `@media max-width: 479px` y `480px-719px`), el botón se muestra con `display: block`.
- El menú usa `max-height: 0` + `overflow: hidden` cuando está cerrado, y `max-height: 500px` cuando tiene la clase `.abierto`.
- Se añadió una **transición suave** de `0.3s` al abrir/cerrar.
- El botón tiene **foco visible** (WCAG 2.2): outline dorado + fondo dorado + texto azul.

**3. JavaScript — Lógica del menú**

- Al hacer clic en el botón, se alterna la clase `.abierto` en el `<nav>`.
- Se actualiza `aria-expanded` a `"true"` o `"false"` según corresponda.
- Se actualiza `aria-label` del botón ("Abrir menú" / "Cerrar menú").
- Al hacer clic en un **enlace del menú**, el menú se cierra automáticamente.
- Al presionar **Escape**, el menú se cierra y el foco vuelve al botón.

**4. Pruebas realizadas**

- **Con mouse:** clic en el botón abre, clic de nuevo cierra.
- **Con teclado:** Tab llega al botón, Enter lo abre, Escape lo cierra.
- **Con enlaces:** al hacer clic en un enlace, el menú se cierra.
- **En viewport de iPhone 12 (393px)** y **iPad Mini (768px)**.
- **Verificado en consola** con el mensaje ` Menú móvil: configurado`.

### Problemas encontrados y soluciones

**Problema 1:** El código del menú estaba fuera del `DOMContentLoaded`, por lo que se ejecutaba antes de que el HTML estuviera listo.

**Solución:** Se movió todo el código dentro de `document.addEventListener("DOMContentLoaded", ...)`. Se verificó en consola que el mensaje de éxito apareciera.

**Problema 2:** Faltaban los atributos ARIA en el botón (`aria-expanded`, `aria-label`, `aria-controls`).

**Solución:** Se añadieron los atributos al `<button>` en el HTML. Se verificó en DevTools que cambiaran correctamente al abrir/cerrar.

**Problema 3:** No había forma de cerrar el menú con Escape.

**Solución:** Se añadió un listener de `keydown` que verifica si la tecla presionada es Escape y, si el menú está abierto, lo cierra y devuelve el foco al botón.

### Auditorías

| Herramienta | Puntaje |
|-------------|---------|
| Lighthouse Performance | **100** |
| Lighthouse Accessibility | **100** |
| Lighthouse Best Practices | **100** |
| Lighthouse SEO | **100** |

**Todas las métricas en verde.** Lighthouse: 100/100/100/100.

### Aprendizajes

- Uso de `<button>` real en lugar de `<div>` para accesibilidad.
- Manejo de eventos con `addEventListener`.
- Uso de `classList.toggle` para alternar clases CSS.
- Actualización dinámica de atributos ARIA (`aria-expanded`, `aria-label`).
- Cierre de menús con la tecla **Escape** y retorno de foco al botón.
- Importancia del `DOMContentLoaded` para que el JavaScript se ejecute después del HTML.
- El atributo `aria-controls` conecta el botón con el elemento que controla.
- Los atributos ARIA comunican el estado a lectores de pantalla.



**Fin del Día 13.**
---

## Día 14 — Validación del formulario de contacto

**Fecha:** 15/10/2026

**Objetivo del día:**
Crear validación del formulario de contacto antes de integrar WordPress.

### Lo que se hizo

**1. HTML — Atributos de validación**

Cada campo del formulario tiene atributos HTML que permiten la validación nativa:
- **Nombre:** `required`, `minlength="2"`, `maxlength="50"`, `title` personalizado.
- **Email:** `type="email"`, `required`, `title` personalizado.
- **Teléfono:** `type="tel"`, `pattern="[0-9]{8}"`, `title` personalizado.
- **Mensaje:** `required`, `minlength="10"`, `maxlength="500"`, `title` personalizado.

Se añadió `novalidate` al `<form>` para desactivar los mensajes por defecto del navegador y usar los personalizados con JavaScript.

**2. JavaScript — Validación personalizada**

En `script.js` se añadió la sección 4 que:
- Escucha el evento `submit` del formulario.
- Verifica cada campo con `checkValidity()`.
- Aplica mensajes personalizados con `setCustomValidity()`.
- Bloquea el envío si hay errores y enfoca el primer campo inválido.
- Si todo está bien, envía a Formspree.

**Mensajes personalizados en español:**

| Campo | Tipo de error | Mensaje |
|-------|---------------|---------|
| Nombre | Vacío | "Por favor, escribe tu nombre completo." |
| Nombre | Muy corto | "El nombre debe tener al menos 2 letras." |
| Email | Vacío | "Por favor, escribe tu correo electrónico." |
| Email | Inválido | "El correo no es válido. Ejemplo: nombre@dominio.com." |
| Teléfono | Formato | "El celular debe tener 8 dígitos sin guiones." |
| Mensaje | Vacío | "Por favor, escribe un mensaje." |
| Mensaje | Muy corto | "El mensaje debe tener al menos 10 caracteres." |

**3. Pruebas realizadas**

- **Campos vacíos:** mensaje "Por favor, escribe tu nombre completo." ✅
- **Email inválido** (`wweee`): mensaje "El correo no es válido." ✅
- **Nombre corto** (`a`): mensaje "El nombre debe tener al menos 2 letras." ✅
- **Mensaje corto** (`Prueba 3`): mensaje "El mensaje debe tener al menos 10 caracteres." ✅
- **Todo correcto:** el formulario se envía a Formspree y llega el correo. ✅

En todos los casos, el formulario **bloquea el envío** si hay errores.

### Problemas encontrados y soluciones

**Problema:** El JavaScript de validación no estaba en el `script.js`. La consola no mostraba `✅ Validación del formulario: configurada` y el formulario se enviaba con datos inválidos.

**Solución:** Reemplacé el `script.js` completo con la versión que incluye la sección de validación. Añadí `e.preventDefault()` al inicio del listener `submit` para bloquear el envío, y `formulario.submit()` solo cuando todo es válido.

### Aprendizajes

- Uso de `required`, `minlength`, `maxlength`, `pattern` y `type="email"`.
- Uso de `checkValidity()` para verificar cada campo.
- Uso de `setCustomValidity()` para mensajes personalizados.
- Uso de `novalidate` para desactivar la validación del navegador.
- Uso de `e.preventDefault()` para bloquear envío con errores.
- Uso de `formulario.submit()` para enviar solo cuando todo es válido.
- Uso de `focus()` y `reportValidity()` para enfocar el primer error.

### Estado

- [x] Mensajes de validación personalizados
- [x] Validación con JavaScript
- [x] Bloqueo de envío con datos inválidos
- [x] Pruebas realizadas (vacíos, inválidos, válidos)
- [x] Capturas de evidencia

**Fin del Día 14.**
---

## Día 15 — Completar flujo de validación con mensaje de confirmación

**Fecha:** 15/10/2026

**Objetivo del día:**
Completar el flujo de validación y dejar una versión estable del proyecto.

### Lo que se hizo

1. **HTML** — Añadido `<p id="mensaje-confirmacion" role="status" aria-live="polite" hidden>` después del formulario.

2. **CSS** — Añadidos estilos verdes para el mensaje de confirmación.

3. **JavaScript** — Cambio de estrategia: en lugar de redirigir a Formspree, se usa `fetch()` para enviar los datos sin salir de la página. Si la respuesta es OK, se limpia el formulario y se muestra el mensaje verde.

4. **Pruebas** — Formulario probado con datos válidos e inválidos, en escritorio y móvil.

### Aprendizajes

- Uso de `fetch()` con `async/await`
- Uso de `FormData` para capturar datos
- Uso de `try/catch` para manejar errores
- Uso de `role="status"` y `aria-live="polite"`

**Fin del Día 15.**

---

## Día 16 — Revisar la navegación completa con teclado

**Fecha:** 15/10/2026

**Objetivo del día:**
Revisar la navegación completa mediante teclado y corregir barreras evidentes.

### Lo que se hizo

**1. Auditoría con teclado**

Se recorrió todo el sitio usando solo Tab, Shift+Tab, Enter, Space y Escape.

**2. Hallazgos encontrados**

- **Hallazgo 1:** El orden del foco es lógico y correcto en todo el sitio.
- **Hallazgo 2:** El correo (`mailto:`) tenía un foco débil (solo borde negro fino) mientras el teléfono (`tel:`) tenía foco con fondo dorado. **Inconsistencia visual.**
- **Hallazgo 3:** El campo "Nombre" del formulario mostraba **doble borde dorado** (outline + border). Se veía excesivo.

**3. Correcciones aplicadas**

- **CSS:** Se añadió un bloque nuevo para unificar el foco visible en todos los enlaces del contenido (`mailto:`, `tel:`, enlaces internos, enlaces del footer).
- **CSS:** Se modificó el foco de los inputs del formulario con `border-color: transparent` para eliminar el doble borde.
- **CSS:** Se añadió foco visible al botón flotante de WhatsApp.

**4. Pruebas después de las correcciones**

- Tab por los enlaces del contenido → todos tienen fondo dorado ✅
- Tab por los campos del formulario → un solo borde dorado ✅
- Tab por el botón WhatsApp → outline dorado ✅
- El foco pasa bien por todo el sitio ✅

### Aprendizajes

- Cómo auditar la navegación con teclado
- Cómo identificar problemas de foco visible
- Uso de `:focus-visible` para indicadores de foco
- Importancia de la consistencia visual en el foco
- Cómo unificar estilos con selectores agrupados

### Estado

- [x] Recorrer todo el sitio con teclado
- [x] Comprobar orden lógico del foco
- [x] Comprobar que el foco sea visible
- [x] Comprobar que ningún elemento quede inaccesible
- [x] Revisar botones y enlaces
- [x] Revisar el menú móvil
- [x] Usar ARIA solo cuando corresponde
- [x] Registrar al menos 3 hallazgos
- [x] Corregir y volver a probar

**Fin del Día 16.**

---

## Día 17 — Mejorar accesibilidad visual y alternativas textuales

**Fecha:** 21/10/2026

**Objetivo del día:**
Mejorar accesibilidad visual y revisar alternativas textuales de imágenes.

### Lo que se hizo

**1. Auditoría de contraste con WebAIM**

Se verificaron 5 combinaciones de colores del sitio:

| Combinación | Ratio | WCAG AA | Estado |
|-------------|-------|---------|--------|
| Azul `#0A1F44` sobre Dorado `#D4AF37` | 7.72:1 | ✅ PASS | Correcto |
| Texto gris `#4A4A4A` sobre Fondo `#F8F9FB` | ~7:1 | ✅ PASS | Correcto |
| Blanco `#FFFFFF` sobre Azul `#0A1F44` | ~15:1 | ✅ PASS | Correcto |
| Azul `#0A1F44` sobre Blanco `#FFFFFF` | ~15:1 | ✅ PASS | Correcto |
| **Dorado `#D4AF37` sobre Blanco `#FFFFFF`** | **2.1:1** | ❌ **FAIL** | **Corregido** |

**2. Corrección del contraste**

Se identificó que el dorado `#D4AF37` sobre blanco falla WCAG AA (2.1:1). Se añadió una nueva variable CSS `--color-acento-oscuro: #8B6914` que tiene un ratio de **5.08:1** sobre blanco, cumpliendo WCAG AA.

Se aplicó este color nuevo a:
- `a:hover` (hover de enlaces sobre fondo blanco)
- `em` (texto en énfasis sobre fondo blanco)

**3. Auditoría de `alt` en imágenes**

Todas las imágenes del sitio tienen `alt` apropiado:

| Imagen | `alt` | Tipo |
|--------|-------|------|
| `img_logo_trazzoscr02.avif` | "Logotipo oficial de TRAZZOS — T dorada sobre fondo azul rey" | Informativa |
| `hero_pc.avif` | "Estudio creativo digital TRAZZOS — Soluciones digitales..." | Informativa |
| `disenadora_rosa.avif` | "Retrato profesional de Maribel Díaz Carmona..." | Informativa |
| `favicon_T.avif` | (sin alt, es favicon) | Decorativa |

**4. Prueba de zoom al 200%**

Se probó el sitio con zoom al 200% en Chrome. Inicialmente, el texto del hero ("construye identidad") se cortaba por abajo.

**Solución aplicada:**
- Se cambió el `#inicio` a Flexbox (`display: flex`, `align-items: center`, `justify-content: center`).
- Se cambió `#inicio h2` a `position: relative` con `max-height: calc(100vh - var(--altura-header) - 2rem)` y `overflow-y: auto`.
- Se aseguró que `#inicio picture` sea `position: absolute; inset: 0; z-index: 0`.

**Resultado:** El texto ya no se corta al 200% de zoom. Se ve completo y centrado.

**5. Verificación en navegadores**

Se verificó el sitio en **Chrome** y **Microsoft Edge**. Ambos muestran el sitio correctamente sin diferencias visuales ni de funcionalidad. No se probó en Firefox ni Brave porque no estaban instalados.

### Problemas encontrados y soluciones

**Problema 1:** El dorado `#D4AF37` sobre blanco tenía un ratio de 2.1:1 (falla WCAG AA).

**Solución:** Se añadió `--color-acento-oscuro: #8B6914` con ratio 5.08:1 y se aplicó a `a:hover` y `em`.

**Problema 2:** Al hacer zoom al 200%, el texto del hero se cortaba.

**Solución:** Se cambió el diseño del hero a Flexbox y se ajustó el `h2` para que no se salga del contenedor.

### Aprendizajes

- Uso de WebAIM Contrast Checker para verificar contraste.
- Importancia de mantener ratios de contraste ≥ 4.5:1 (WCAG AA).
- Uso de variables CSS para tener un dorado accesible sobre blanco.
- Cómo verificar `alt` apropiado en imágenes.
- Cómo usar Flexbox para centrar contenido sin `position: absolute`.
- Cómo probar zoom y verificar que no se pierda contenido.

### Estado

- [x] Revisar contraste de texto normal.
- [x] Revisar contraste de controles y elementos relevantes.
- [x] Revisar `alt` de imágenes informativas.
- [x] Usar `alt` vacío en imágenes decorativas cuando corresponda.
- [x] Evitar repetir en `alt` texto que ya está visible.
- [x] Comprobar foco visible.
- [x] Probar zoom del navegador.
- [x] Revisar que el contenido no se pierda al ampliar.
- [x] Corregir problemas y repetir pruebas.
- [x] Documentar decisiones de accesibilidad.

**Fin del Día 17.**
---

## Día 18 — Migración de HTML5/CSS/JS a WordPress Local

### Estado
- [x] Crear el sitio local en LocalWP (trazzos.local).
- [x] Configurar el tema `trazzos-tema` en `wp-content/themes`.
- [x] Crear los archivos base: `style.css`, `functions.php`, `header.php`, `footer.php`, `index.php`, `front-page.php`.
- [x] Organizar los recursos (CSS, JS, imágenes) en la carpeta `assets`.
- [x] Activar el tema en WordPress.
- [x] Corregir las rutas de las imágenes usando `get_template_directory_uri()`.
- [x] Solucionar la carga del JavaScript (script.js).
- [x] Verificar el funcionamiento del menú hamburguesa en móvil.

### Problemas Solucionados
1. **Rutas de imágenes rotas:** WordPress no reconocía `img/...`. Se solucionó usando las funciones de PHP de WordPress.
2. **Menú móvil inactivo:** El `script.js` no se cargaba desde `functions.php` en el entorno local. Se solucionó inyectando el `<script>` directamente en el `header.php` y agregando la regla CSS `.abierto` en `styles.css`.

### Pruebas Realizadas
- Se revisó la consola del navegador (F12) y ya no hay errores. El `script.js` carga con estado 200 (OK).
- El menú hamburguesa se despliega correctamente en vista móvil.
- El diseño es idéntico al proyecto original.

### Entregables
- Tema comprimido en ZIP (`diaz-maribel-tema.zip`).
- Código subido a GitHub (commit realizado).
- Capturas de pantalla guardadas en la carpeta de evidencias.

### Ideas para el próximo día
- Implementar un efecto visual de "papel rasgado" (torn paper edge) en el header, inspirado en la página de Café Britt.

**Fin del Día 18.**