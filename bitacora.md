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
