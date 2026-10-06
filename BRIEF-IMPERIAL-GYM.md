# Brief: Sitio web de Imperial Gym (Armenia, Quindío)

## 0. Tu rol y cómo trabajar

Actúa como ingeniero frontend senior y diseñador de producto. Vas a construir el sitio web oficial de **Imperial Gym**, un gimnasio con dos sedes en Armenia, Quindío (Colombia). El sitio debe verse hecho a mano para esta marca, no como una plantilla genérica de gimnasio.

Reglas de trabajo:

1. **Antes de escribir código**, lee este brief completo, ejecuta `/skills` para ver qué skills tienes disponibles y presenta un plan corto: estructura de carpetas, componentes, tokens de diseño y orden de construcción. Espera mi aprobación.
2. Trabaja **por fases** (sección 9). Al terminar cada fase, muéstrame qué hiciste, cómo verlo en el navegador y qué sigue. No avances de fase sin confirmación.
3. **No inventes datos del negocio.** Todo lo que no esté en este brief va como marcador visible entre corchetes, por ejemplo `[DIRECCIÓN SEDE CENTRO]`, y se lista en un archivo `PENDIENTES.md`.
4. Si algo de este brief es ambiguo o contradictorio, pregúntame en lugar de suponer.
5. Al final de la primera fase, crea un `CLAUDE.md` con el contexto esencial del proyecto (marca, tokens, convenciones, comandos) para futuras sesiones.

## 1. Skills de diseño que debes usar

Usa las skills de diseño y UX disponibles en esta sesión. Los nombres exactos pueden variar; confírmalos con `/skills` y usa los equivalentes si alguno no está. Cárgalas en el momento indicado, no todas al inicio:

| Momento | Skills |
|---|---|
| Dirección visual y sistema de diseño | `frontend-design`, `ui-ux-pro-max`, `design-skills:design-systems`, `vectorlab-ux-skills:colour-palette`, `vectorlab-ux-skills:typography`, `vectorlab-ux-skills:spacing` |
| Estructura de página y componentes | `vectorlab-ux-skills:page-patterns`, `frontend-ui-engineering`, `ui-consistency:finding-patterns` → `ui-consistency:planning` → `ui-consistency:implementing` |
| Responsive y móvil | `vectorlab-ux-skills:viewports` |
| Textos de la interfaz (botones, CTAs, formularios, errores) | `design:ux-copy` o `design-skills:ux-writing`, `vectorlab-ux-skills:verbs`, `vectorlab-ux-skills:labels`, `vectorlab-ux-skills:forms`, `vectorlab-ux-skills:errors` |
| Animación | `vectorlab-ux-skills:motion`, `vectorlab-ux-skills:transitions`, `vectorlab-ux-skills:reduced-motion`, `12-principles-of-animation` |
| Teclado y accesibilidad | `vectorlab-ux-skills:keyboard`, `design-skills:accessibility-audit` |
| Revisión final | `vectorlab-ux-skills:anti-slop`, `vectorlab-ux-skills:ux-audit`, `ui-consistency:verifying`, `ux-ui-audit` |

## 2. Contexto del negocio

- **Nombre:** Imperial Gym. El logo se lee "IMG" con la palabra "IMPERIAL" debajo.
- **Ubicación:** Armenia, Quindío, Colombia.
- **Sedes:** Sede Centro y Sede Sur. Direcciones: `[DIRECCIÓN SEDE CENTRO]`, `[DIRECCIÓN SEDE SUR]`.
- **Público:** personas de Armenia y alrededores que entrenan pesas, máquinas y clases grupales. La mayoría entra desde el celular, llega desde Instagram y se comunica por WhatsApp.
- **Tono:** directo, motivador, fuerte, sin exagerar. Tuteo. Español de Colombia.
- **Objetivo principal del sitio:** que el visitante escriba por WhatsApp o reserve una visita. Objetivos secundarios: consultar horarios, clases y precios sin tener que preguntar.

## 3. Identidad de marca

### Logo
- Letras "IMG". La **I es una columna griega** (elemento "imperial"), la **M en rojo** y la **G en negro**, en estilo de letras de bloque deportivo/universitario. Debajo, "IMPERIAL" en una letra con serifa gruesa.
- Archivo: `public/brand/logo.png` (o `.svg` si lo consigo). Si no existe aún, usa un marcador de texto "IMG IMPERIAL" con las mismas proporciones y anótalo en `PENDIENTES.md`. **No redibujes ni inventes el logo.**
- Las referencias visuales (capturas de su Instagram) están en `referencias/`. Revísalas antes de definir la dirección visual.

### Paleta (valores aproximados medidos de capturas de pantalla)

| Token | HEX | Uso en la marca |
|---|---|---|
| `--color-red-vivid` | `#F01C18` | Rojo del logo (M) |
| `--color-red-brand` | `#8B1D14` | Rojo principal de las piezas: banners, franjas, texto sobre blanco |
| `--color-red-wine` | `#5E1913` | Fondos y cajas oscuras |
| `--color-red-merch` | `#B11527` | Rojo del merch |
| `--color-black` | `#0E0F11` | Fondos, G del logo |
| `--color-white` | `#FFFFFF` | Títulos y etiquetas |

Instrucciones sobre color:
- Unifica el rojo: elige **un** rojo principal para interfaz y deriva de él una escala (50–950). Justifica la elección.
- Distribución aproximada 60-30-10: negro/oscuro como base, blanco para texto, rojo como acento y acción.
- **Verifica contraste WCAG AA** en cada combinación real (texto normal 4.5:1, texto grande y elementos gráficos 3:1). El rojo de marca sobre negro probablemente no pasa para texto: en ese caso usa blanco sobre rojo, o un tono de la escala que sí pase.
- Define los colores como tokens CSS en `:root`. Nada de colores sueltos en los componentes.

### Tipografía
- **Títulos:** sans serif ultracondensada y muy pesada, en mayúsculas. En las piezas de la marca lleva textura desgastada. Usa **Anton** o **Bebas Neue** (Google Fonts) y propón cuál encaja mejor.
- **Texto e interfaz:** sans geométrica. Usa **Montserrat** (400, 600, 700).
- La textura desgastada solo va en titulares grandes y decorativos, nunca en texto que haya que leer. Si la implementas, que sea con CSS/SVG ligero o una imagen optimizada, y que el texto siga siendo texto real (seleccionable y legible por lectores de pantalla).
- Define una escala tipográfica fluida con `clamp()`.

### Lenguaje visual
- Fondos oscuros, alto contraste, fotos reales de gente entrenando.
- Capas o tarjetas rojas semitransparentes sobre fotografía, como en sus historias.
- Franjas y líneas diagonales como recurso gráfico, con moderación.
- La columna griega del logo puede usarse como motivo gráfico sutil (separadores, íconos de viñeta), sin saturar.
- **Prohibido:** degradados genéricos de colores, glassmorphism, emojis en la interfaz, ilustraciones de stock tipo caricatura, íconos de librerías mezcladas. Usa una sola librería de íconos de trazo (por ejemplo Lucide) o SVG propios.

## 4. Contenido real del negocio

Guarda todo el contenido editable en archivos de datos (por ejemplo `src/data/*.ts` o `.json`), no escrito dentro de los componentes. El dueño cambia horarios, clases y precios con frecuencia.

### Horario de atención (ambas sedes, jornada continua)

| Día | Horario |
|---|---|
| Lunes a jueves | 5:00 a.m. – 10:00 p.m. |
| Viernes | 5:00 a.m. – 9:00 p.m. |
| Sábado | 8:00 a.m. – 3:00 p.m. |
| Domingo | 8:00 a.m. – 2:00 p.m. |
| Festivos | 8:00 a.m. – 4:00 p.m. |

Pendiente confirmar si ambas sedes tienen el mismo horario.

### Planes

**Plan Ultra – $120.000 COP al mes** (precios 2026). Es el plan destacado.
- Acceso a ambas sedes
- Máquinas y zona de pesas
- Clases grupales sin costo extra
- Horarios amplios
- 4 invitados al mes (2 por sede)
- Apoyo de entrenador y app de rutinas
- Obsequio incluido

La marca habla de "nuevos planes", así que existen otros. Deja la estructura lista para 2 o 3 planes más con marcadores `[NOMBRE PLAN]`, `[PRECIO]`, `[BENEFICIOS]`.

### Clases grupales (programación de referencia)

| Día | Clase | Sede | Hora |
|---|---|---|---|
| Lunes | Rumbaterapia | Centro | 7:00 p.m. |
| Martes | Abdomen | Centro | 6:30 p.m. |
| Martes | Spinning | Centro | 8:00 a.m. |
| Martes | Spinning | Sur | 7:00 p.m. |
| Miércoles | Boxeo | Centro | 7:00 p.m. |
| Jueves | Cross training | Centro | 7:30 a.m. |
| Jueves | Spinning | Centro | 7:00 p.m. |
| Viernes | Cross training | Centro | 12:15 p.m. |
| Viernes | Rumbaterapia | Sur | 7:00 p.m. |

Notas:
- En sus piezas aparece "CROSSFFIT" (con error). Muéstralo como **"Cross training"** y anota en `PENDIENTES.md` que hay que confirmar con el dueño el nombre definitivo (CrossFit es una marca registrada y solo pueden usarla los boxes afiliados).
- La programación cambia; debe poder editarse desde el archivo de datos sin tocar componentes.

### Merch
Bolsos deportivos rojo y negro con el logo bordado. Sección pequeña o mención, con `[PRECIO]` y botón para pedir por WhatsApp.

### Contacto
- WhatsApp: `[NÚMERO WHATSAPP]` (puede haber uno por sede).
- Instagram: `[@USUARIO]`.
- Los enlaces de WhatsApp deben abrir `https://wa.me/57XXXXXXXXXX?text=...` con un mensaje prellenado según el contexto (plan, clase, sede o merch).

### Lo que NO va
- No uses la imagen ni las letras "IMHC" de la historia "Norte": es contenido generado con IA y no está confirmado.
- No uses fotos de stock como si fueran del gimnasio. Usa marcadores con proporción fija y una etiqueta, por ejemplo `[FOTO: zona de pesas, sede centro]`.
- No inventes testimonios, cifras, años de experiencia ni número de miembros.

## 5. Mapa del sitio

Página principal de una sola página (one-page) con anclas, más páginas internas solo si el plan lo justifica.

1. **Encabezado fijo:** logo, navegación (Planes, Clases, Horarios, Sedes, Contacto), botón principal "Escríbenos por WhatsApp". En móvil, menú colapsable accesible.
2. **Portada (hero):** titular fuerte en la tipografía de títulos, subtítulo corto, botón principal (WhatsApp) y secundario (Ver planes). Foto real de fondo con capa oscura/roja.
3. **Franja de beneficios:** 3 o 4 puntos (dos sedes, clases incluidas, horario amplio, acompañamiento de entrenador).
4. **Planes:** Plan Ultra destacado + espacio para los demás. Cada plan con botón a WhatsApp con mensaje prellenado.
5. **Clases grupales:** programación semanal con **filtro por sede** (Todas / Centro / Sur). En escritorio, tabla o cuadrícula semanal; en móvil, lista agrupada por día. Nada de tablas con scroll horizontal incómodo en móvil.
6. **Horarios de atención.**
7. **Sedes:** una tarjeta por sede con dirección, mapa (embed de Google Maps con carga diferida o enlace "Cómo llegar") y botón de WhatsApp.
8. **Instalaciones:** galería de fotos reales (marcadores por ahora).
9. **Merch.**
10. **Preguntas frecuentes:** marcadores para inscripción, congelamiento, invitados, edad mínima, métodos de pago.
11. **Contacto / CTA final.**
12. **Pie de página:** logo, redes, horarios resumidos, sedes, aviso de tratamiento de datos (Ley 1581 de 2012) si hay formularios.
13. **Botón flotante de WhatsApp** visible en todo el sitio, que no tape contenido importante en móvil.

## 6. Requisitos técnicos

- **Stack:** Astro (salida estática) con CSS propio basado en tokens (custom properties). Si propones otro stack, justifícalo antes de empezar.
- **JavaScript mínimo:** solo donde aporte (menú móvil, filtro de clases). Todo lo demás es HTML estático.
- **Estructura sugerida:** `src/components/`, `src/data/` (planes, clases, horarios, sedes, faq), `src/styles/tokens.css`, `public/brand/`, `public/img/`.
- **Imágenes:** usa el componente de imágenes de Astro, formatos modernos (AVIF/WebP), tamaños responsivos y carga diferida debajo del primer pantallazo.
- **Fuentes:** autoalojadas o con `display=swap` y precarga de la principal.
- **Rendimiento:** objetivo Lighthouse ≥ 95 en móvil en Rendimiento, Accesibilidad, Buenas prácticas y SEO. LCP < 2.5 s.
- **Responsive:** diseño mobile-first, probado de 360 px a 1440 px, sin scroll horizontal en ninguna medida.
- **Accesibilidad (WCAG 2.2 AA):**
  - HTML semántico y un solo `h1`.
  - Navegación completa con teclado y foco siempre visible.
  - Objetivos táctiles de al menos 44 × 44 px.
  - Textos alternativos descriptivos.
  - Respeta `prefers-reduced-motion`.
  - Los enlaces que abren WhatsApp o mapas indican que salen del sitio.
- **Animación:** sutil y con propósito (aparición de secciones, estados hover/focus). Duraciones cortas, solo `transform` y `opacity`.

## 6.1 Dirección de animación

Antes de animar, carga `12-principles-of-animation`, `design-skills:interaction-design`, `vectorlab-ux-skills:motion`, `vectorlab-ux-skills:transitions` y `vectorlab-ux-skills:reduced-motion`. Revisa también los presets de GSAP que trae `ui-ux-pro-max`. Al terminar, audita las animaciones con `12-principles-of-animation`.

**Carácter:** fuerte, seco y rápido, como un golpe o una repetición en el gym. Nada de flotar ni rebotar de forma blanda. Curvas de salida marcadas (tipo `expo.out` o `power3.out`), duraciones cortas (150–300 ms para interfaz, máximo 600–800 ms para entradas de sección).

**Herramientas:**
- Primero CSS: transiciones, `@keyframes` y, donde el navegador lo soporte, animaciones ligadas al scroll (`animation-timeline: view()`) con alternativa sin animación.
- **GSAP + ScrollTrigger** solo para lo que CSS no resuelva bien. Cárgalo solo en las secciones que lo usen.
- **View Transitions de Astro** para cambios entre páginas, si hay más de una.
- No uses librerías de scroll suave que secuestren el desplazamiento nativo.

**Momentos de animación propuestos** (propón ajustes si ves algo mejor):
1. **Hero:** el titular entra por líneas con un recorte (mask) de abajo hacia arriba; una franja roja diagonal barre la pantalla una sola vez al cargar. La foto de fondo hace un zoom lento muy leve.
2. **Títulos de sección:** entrada tipo "sello": aparición rápida con un pequeño ajuste de escala (de 1.04 a 1), como si se estampara.
3. **Fotos de instalaciones:** se revelan con una capa roja que se desliza y descubre la imagen.
4. **Franja de clases:** una cinta horizontal en movimiento continuo con los nombres de las clases (Spinning · Boxeo · Rumbaterapia · Abdomen · Cross training). Se pausa al pasar el mouse o al enfocarla, y se detiene con `reduced-motion`.
5. **Filtro de clases por sede:** las tarjetas que salen y entran se reorganizan suavemente (FLIP o View Transitions), sin saltos de diseño.
6. **Plan Ultra:** borde o brillo rojo sutil al pasar el mouse; el precio puede entrar con un conteo rápido una sola vez.
7. **Botones:** al pasar el mouse o enfocar, relleno rojo que entra en diagonal; al presionar, una leve reducción de escala.
8. **Botón flotante de WhatsApp:** aparece después del hero con una entrada rápida; un pulso sutil una sola vez, no en bucle.

**Reglas:**
- Anima solo `transform`, `opacity` y `clip-path`. Nunca `width`, `height`, `top` o `left`.
- Ninguna animación puede retrasar el LCP ni ocultar contenido si el JavaScript falla: el contenido debe verse completo sin animaciones.
- Cada animación de entrada se ejecuta una sola vez.
- Con `prefers-reduced-motion: reduce`: sin movimientos, sin cinta en movimiento ni zooms; como mucho, cambios de opacidad instantáneos o muy cortos.
- Define las duraciones y curvas como tokens (`--duration-fast`, `--ease-out-strong`, etc.).
- Verifica en un celular de gama media que no haya tirones: objetivo 60 fps.

## 7. SEO local

- Idioma `es-CO`.
- Títulos y meta descripciones únicos orientados a búsquedas locales: "gimnasio en Armenia", "gimnasio Armenia Quindío", "spinning Armenia", "clases de boxeo Armenia".
- **Datos estructurados JSON-LD:** `ExerciseGym` (subtipo de `LocalBusiness`) con una entrada por sede, incluyendo dirección, teléfono, `openingHoursSpecification` y `priceRange`. Usa marcadores donde falten datos.
- Open Graph y Twitter Cards con imagen para compartir (importante porque el tráfico viene de Instagram y WhatsApp).
- `sitemap.xml`, `robots.txt`, favicon e íconos a partir del logo.

## 8. Calidad del código

- Componentes pequeños y reutilizables, nombres claros en inglés para código y español para contenido.
- Cero colores, tamaños o espaciados sueltos: todo sale de los tokens.
- Escala de espaciado de 4/8 px.
- Sin dependencias innecesarias.
- `README.md` con: cómo instalar, cómo correr en local, cómo editar horarios/clases/planes y cómo desplegar.

## 9. Fases

1. **Plan y dirección visual.** Lee referencias, define tokens (color, tipografía, espaciado, radios, sombras) y muéstramelos en una página `/estilos` o similar con muestras y contraste verificado. Crea `CLAUDE.md` y `PENDIENTES.md`.
2. **Estructura y contenido.** Proyecto Astro, archivos de datos, encabezado, pie y todas las secciones con contenido real y marcadores.
3. **Diseño visual y responsive.** Aplica la identidad completa, revisa móvil y escritorio.
4. **Interacción y animación.** Menú móvil, filtro de clases por sede, botón flotante, animaciones con `reduced-motion`.
5. **SEO, rendimiento y accesibilidad.** JSON-LD, metadatos, optimización de imágenes, auditoría de accesibilidad.
6. **Revisión final.** Pasa las skills de revisión (anti-slop, ux-audit, verifying, auditoría de accesibilidad), corrige lo que encuentren y entrégame un resumen con: qué quedó, qué falta (`PENDIENTES.md`) y cómo desplegar en Vercel o Netlify.

## 10. Criterios de aceptación

- [ ] Se reconoce como Imperial Gym a primera vista (rojo, negro, blanco, tipografía condensada, logo real).
- [ ] Todo el contenido real de la sección 4 aparece correctamente; nada inventado.
- [ ] El visitante puede llegar a WhatsApp en un toque desde cualquier punto del sitio, con mensaje prellenado según contexto.
- [ ] El filtro de clases por sede funciona con teclado y en móvil.
- [ ] Horarios, clases, planes y sedes se editan solo desde `src/data/`.
- [ ] Contraste AA verificado en todas las combinaciones de color usadas.
- [ ] Sin scroll horizontal de 360 px a 1440 px.
- [ ] Lighthouse móvil ≥ 95 en las cuatro categorías.
- [ ] Las animaciones siguen la sección 6.1, se ven fluidas en móvil y se desactivan con `prefers-reduced-motion`.
- [ ] `PENDIENTES.md` lista todos los datos que faltan confirmar con el dueño.

Empieza por la fase 1: lee este brief y las referencias, revisa `/skills` y preséntame el plan.