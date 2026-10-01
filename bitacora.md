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
- Creé el archivo `style.css` completo.
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
- Validé el `style.css` con W3C CSS Validator.
- Ambas validaciones sin errores.
- Establecí el hábito semanal de validación.

### Resultado de validaciones:
- HTML5: 0 errors, 0 warnings ✅
- CSS3: 0 errors, 15 warnings informativos (variables CSS dinámicas + vendor extension) ✅

### ¿Qué aprendí?
- Cómo usar los validadores oficiales de W3C.
- La diferencia entre errores y warnings.
- Que los warnings de variables CSS son normales.
- La importancia de validar antes de subir.

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
- Separé el título (dentro del hero) del texto descriptivo (fuera).
- Agregué un `<h2>` a la sección `#intro` para accesibilidad W3C.
- Apliqué anidamiento CSS nativo en todos los bloques.
- Estilicé el header con logo en esquina + nav horizontal.
- Implementé favicon con la "T" dorada.
- Validación W3C final: 0 errors, 0 warnings.

### ¿Qué aprendí?
- Uso de `<picture>` para imágenes responsivas.
- Anidamiento CSS nativo (sintaxis moderna con `&`).
- Composición de un hero profesional.
- Importancia de las dimensiones exactas de las imágenes.
- Optimización de peso con squoosh.app.

### Estado
✅ Día 5 completado — Semana 1 terminada

### Evidencias
- Hero en PC
- Hero en móvil
- Validación W3C (HTML + CSS)

---

## Día 6 — 29/09/2026

### ¿Qué hice hoy?
- Revisé que la navegación esté dentro de `<nav>` con `aria-label`.
- Verifiqué que los 4 enlaces apunten a ids existentes.
- Confirmé el contenedor flexible con Flexbox y `gap`.
- Agregué `:focus-visible` para mejorar la accesibilidad del foco.
- Probé la navegación con teclado (Tab): el foco es visible.
- Probé el nav en móvil (400px): no se desborda, se reorganiza en 2 líneas.

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
- La subsección Paquetes también usa Grid: `repeat(auto-fit, minmax(200px, 1fr))`.
- Apliqué `gap` para separación consistente.
- Usé `align-items: start` para alturas naturales.
- Ajusté el hero en móvil con `calc(100vh - 90px)`.
- Validación W3C: 0 errors, 0 warnings.

### ¿Qué aprendí?
- Cómo funciona `auto-fit` + `minmax()` para grids adaptables.
- Uso de `grid-column: 1 / -1` para que un elemento ocupe toda la fila.
- Cómo `calc()` permite restar la altura del header.
- Grid elimina la necesidad de media queries para reorganizar.

### Estado
✅ Día 7 completado — Grid adaptable en Servicios y Paquetes

### Evidencias
- Servicios en PC (Grid 2x2)
- Servicios en móvil (1 columna)
- Validación W3C sin errores

---

## Día 8 — 30/09/2026

### ¿Qué hice hoy?
- Reorganicé el CSS por componentes y bloques lógicos.
- Identifiqué componentes repetidos:
  - Tarjetas con sombra (en Nosotros, Servicios, Contacto)
  - Botones principales (en Intro)
- Extraje esos componentes a un bloque nuevo "Componentes reutilizables".
- Eliminé reglas duplicadas (background-color, border-radius, box-shadow).
- Mantuve el nesting nativo en todas las secciones.
- Revisé la especificidad después de reorganizar.
- Comprobé que los estilos no se rompieran (todo se ve igual).
- Confirmé el nombre correcto del archivo CSS (`style.css`) para que coincida con el `<link>` del HTML.

### ¿Qué aprendí?
- Cómo identificar componentes repetidos en el CSS.
- Cómo extraer estilos comunes a un bloque de componentes.
- La importancia de la especificidad al reorganizar.
- Cómo el nesting nativo mejora la legibilidad.
- La importancia de que el nombre del archivo coincida con el `<link>` del HTML.

### Nota sobre la validación W3C
El validador W3C CSS marca 14 "errores" relacionados con el nesting
nativo (& y selectores anidados). Son falsos positivos porque el
validador aún no reconoce la especificación CSS Nesting (2023). El CSS
funciona perfectamente en navegadores modernos (Chrome 112+,
Safari 16.5+, Firefox 117+).

### Estado
✅ Día 8 completado — CSS reorganizado por componentes, más mantenible

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

**Total: 8 días completados** 
