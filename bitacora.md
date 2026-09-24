# Bitácora SCRUM — Semana 1

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

### ¿Qué me costó?
- Recordar conceptos al inicio.

### ¿Qué necesito repasar?
- Más práctica.

### Estado
✅ Día 1 completado

---

## Día 2 — 11/09/2026

### ¿Qué hice hoy?
- Reforcé el esqueleto semántico de las 4 secciones ancladas.
- Añadí `scroll-behavior: smooth` para navegación fluida.
- Mejoré accesibilidad con `aria-label` en el nav.
- Añadí `meta description` para SEO básico.
- Actualicé datos de contacto reales:
  - Correo: trazzoscr02@gmail.com
  - Celular: 6270-2678
- Agregué foto personal de Maribel Díaz Carmona en la sección Nosotros.
- Organicé estructura: `index.html` en minúscula, logo y foto en `img/`.
- Corregí errores detectados por W3C (etiquetas `</address>` huérfanas).
- Validación W3C final: 0 errores.

### ¿Qué aprendí?
- Funcionamiento de anclas con `id` + `href`.
- Uso de `mailto:` y `tel:` para enlaces funcionales.
- Uso de `<figure>` + `<figcaption>` para imágenes.
- Convención de nombres en minúscula.
- Atributos `width` y `height` en imágenes (rendimiento).
- Cómo validar HTML con W3C y corregir errores comunes.

### ¿Qué me costó?
- Renombrar `Index.html` a `index.html` (truco del nombre temporal).
- Corregir `</address>` duplicados detectados por W3C.

### ¿Qué necesito repasar?
- Estructura semántica de subsecciones.
- Box model (para el Día 3).

### Estado
✅ Día 2 completado — 0 errores W3C

### Evidencias
- `img/Evidencia_pag_live_service.png` — Sitio funcionando en Live Server
- `img/Evidencia_Valitor.png` — Validación W3C sin errores
- `img/Evidencia_VSC.png` — Código en VS Code

---

## Día 3 — 17/09/2026

### ¿Qué hice hoy?
- Creé el archivo `styles.css` completo.
- Definí variables CSS en `:root`:
  - `--color-fondo`, `--color-texto`, `--color-acento`
  - `--fuente-titulo`, `--fuente-texto`
- Apliqué `box-sizing: border-box` universal.
- Moví `scroll-behavior: smooth` al CSS externo.
- Implementé enfoque mobile-first con punto de quiebre en `720px`.
- Añadí `clamp()` para tipografía responsive.
- Aseguré `44x44px` de área táctil en botones y nav.
- Apliqué identidad visual TRAZZOS (azul rey + dorado).
- Corregí el `index.html`: tilde de "quien" y diferenciación de celulares.

### ¿Qué aprendí?
- Variables CSS en `:root` y su reutilización con `var()`.
- Box model moderno con `box-sizing: border-box`.
- Enfoque mobile-first (base = móvil, `@media` agrega).
- `clamp()` para evitar múltiples media queries.
- Área táctil mínima (44x44px) para accesibilidad móvil.

### ¿Qué me costó?
- Comprender la diferencia entre mobile-first y desktop-first.
- Recordar que los `@media` con `min-width` agregan, no arreglan.

### ¿Qué necesito repasar?
- Uso de `clamp()` en más elementos.
- Pruebas de accesibilidad con teclado (Tab).

### Estado
✅ Día 3 completado


---

## Día 4 — 18/09/2026

### ¿Qué hice hoy?
- Validé el `index.html` con W3C Markup Validation Service.
- Validé el `styles.css` con W3C CSS Validator.
- Ambas validaciones sin errores.
- Establecí el hábito semanal de validación.

### Resultado:
- HTML5: 0 errors, 0 warnings ✅
- CSS3: 0 errors, 15 warnings informativos ✅

### Estado
✅ Día 4 completado

---

## Día 5 — 23/09/2026

### ¿Qué hice hoy?
- Creé el Hero principal con imagen de fondo responsiva.
- Usé `<picture>` con 3 versiones (PC, Tablet, Móvil).
- Separé el título del texto descriptivo.
- Agregué un `<h2>` a `#intro` para accesibilidad.
- Apliqué anidamiento CSS nativo.
- Validación W3C final: 0 errors, 0 warnings.

### Estado
✅ Día 5 completado — Semana 1 terminada
