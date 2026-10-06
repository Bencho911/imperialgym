# Imperial Gym — sitio web

Sitio oficial de Imperial Gym (Armenia, Quindío, Colombia), dos sedes: Centro y Sur. Brief completo en `BRIEF-IMPERIAL-GYM.md` (léelo antes de cambiar algo grande). Se trabaja por fases (sección 9 del brief) y **no se avanza de fase sin confirmación del usuario**.

## Reglas que no se rompen
- **No inventar datos del negocio.** Lo que falte va como marcador `[ENTRE CORCHETES]` y se lista en `PENDIENTES.md`.
- No usar la imagen ni las letras "IMHC" (historia "Norte", generada con IA).
- No redibujar el logo. Hasta tener el archivo real, `src/components/Logo.astro` muestra un marcador de texto.
- Clase "CROSSFFIT" se muestra como **"Cross training"** (CrossFit es marca registrada).
- Sin fotos de stock: marcadores con proporción fija y etiqueta `[FOTO: ...]`.
- Prohibido: degradados genéricos, glassmorphism, emojis en la interfaz, ilustraciones tipo caricatura, mezclar librerías de íconos (solo Lucide o SVG propios).

## Stack y comandos
- Astro (salida estática), CSS propio con tokens. JS solo para menú móvil y filtro de clases.
- `npm run dev` — servidor local (http://localhost:4321)
- `npm run build` — compila a `dist/` (falla si un contraste permitido baja de AA)
- `npm run preview` — sirve `dist/`
- Guía viva de estilos: `/estilos` (noindex).

## Estructura
- `src/styles/tokens.css` — **única fuente de verdad** de diseño. `fonts.css` (autoalojadas en `public/fonts/`), `base.css` (reset y base).
- `src/data/` — contenido editable: `site.ts` (WhatsApp, Instagram, mensajes prellenados), `plans.ts`, `classes.ts`, `hours.ts`, `locations.ts`, `faq.ts`, `merch.ts`, `gallery.ts`, `navigation.ts`. Los componentes nunca tienen contenido del negocio escrito a mano.
- `src/lib/whatsapp.ts` (`whatsappUrl(mensaje, telefonoSede?)`), `src/lib/format.ts` (precios $120.000, horas 7:00 p.m.).
- `src/pages/index.astro` — one-page: Header, Hero, ClassTicker, Benefits, Plans, Classes, Trainers, Hours, Locations, Gallery, Merch, Faq, FinalCta, Footer, WhatsAppFab.
- `src/components/` — componentes pequeños, nombres en inglés. Contenido en español.
- `src/lib/contrast.ts` — cálculo WCAG usado por `/estilos`.
- `public/textures/worn.svg` y `worn-light.svg` — máscara de textura desgastada (clase `.texture-worn`, solo titulares Anton grandes). Móvil usa la ligera; desde 48rem la normal. El tamaño de la máscara va en em para escalar con el titular. Ojo: la máscara también borra bordes y fondos del mismo elemento.
- `src/components/ColumnMark.astro` — columna griega propia (no es el logo). Solo como separador en la cinta de clases y en el pie.

## Tokens clave
- **Rojo principal de interfaz: `--color-red-600` #B11527** (rojo del merch). Blanco encima 6.99:1.
  - Texto rojo sobre oscuro: `--color-text-accent` (red-400, 6.05:1).
  - Hover `red-500`, presionado `red-700`, rojo de piezas `red-800` (#8B1D14), vino `red-900` (#5E1913).
  - `--color-red-vivid` #F01C18 solo para el logo y gráficos grandes.
  - **Nunca** red-600/700/800/900 como texto sobre negro.
- Base: negro `#0E0F11` (60 %), blanco (30 %), rojo (10 %).
- Tipografía: **Anton** para títulos (siempre mayúsculas), **Montserrat** 400/600/700 para texto. Escala fluida `--step--1` … `--step-7` (360→1440 px).
- `--leading-display: 1.12`: no bajarlo, las tildes en mayúscula (Ñ, Ó) chocan con la línea anterior.
- Espaciado base 4 px: `--space-1` … `--space-24`, más los fluidos `--space-gutter`, `--space-stack` y `--space-section`.
- Radios pequeños: `--radius-sm/md/lg` (2/6/12 px).
- Movimiento: `--duration-fast/base/slow/entrance` y `--ease-out-strong` (expo.out). Seco y rápido, sin rebotes. Solo se animan transform, opacity y clip-path. Con `prefers-reduced-motion` las duraciones bajan a 0.

## Dirección visual (fase 3)
- Único momento fuerte: portada (titular gigante con textura, foto con capa vino en multiplicar + capa oscura) y debajo la franja roja diagonal de clases (clip-path, sin rotar: no genera scroll horizontal).
- Ecos de sus piezas: "PLAN ULTRA" vertical (desde 48rem) y precio en caja roja; clases en cajas vino; horario como caja roja con línea punteada y etiquetas blancas sobre foto.
- Beneficios sobre fondo oscuro con filete rojo, para no sumar franjas rojas.

## Interacción y animación (fase 4)
- Sin GSAP ni librerías: CSS + JS propio pequeño. `src/styles/motion.css` (sello, barrido de fotos) + `src/scripts/reveal.ts` (IntersectionObserver, una vez por elemento).
- Marcar entradas con `data-reveal="stamp"` (títulos) o `data-reveal="photo"` (+ `--i` para escalonar). El estado oculto lo pone el JS: sin JS todo se ve.
- Scripts que deben correr antes del primer pintado van `is:inline` (líneas del titular, menú móvil, botón flotante). El resto, módulos de Astro.
- Filtro de clases: `src/scripts/class-filter.ts`, radios nativos, View Transitions (`view-transition-name` por clase y por día), aviso `aria-live`.
- Cinta: 4 copias (la 1.ª accesible), pausa con hover/foco/botón (WCAG 2.2.2); con reduced-motion queda quieta.
- Reglas auditadas (12 principios): interacciones ≤ 300 ms, salidas con ease-in, :active con scale 0.94–0.97, escalonado 40 ms. Única animación linear: la cinta (movimiento continuo).
- `[hidden]` lleva `display: none !important` en base.css: no quitarlo, el filtro depende de eso.

## SEO, rendimiento y accesibilidad (fase 5)
- `BaseLayout`: canonical, Open Graph, Twitter Card, íconos, manifest. Slot `head` para extras. `LocalBusinessSchema.astro`: JSON-LD (Organization + un ExerciseGym por sede) desde `src/data`.
- `src/pages/sitemap.xml.ts` y `robots.txt.ts` (endpoints, sin dependencias). `/estilos` fuera del sitemap y con noindex.
- Imágenes: `Photo.astro` (Picture AVIF/WebP, sizes; `priority` solo para la portada). Fotos sueltas en `src/data/photos.ts`, galería en `gallery.ts`, archivos en `src/assets/fotos/`.
- CSS en línea (`build.inlineStylesheets: always`). Fuentes de respaldo con métricas ajustadas a Anton (`fonts.css`) para CLS 0: si cambias la fuente de títulos, vuelve a medir `size-adjust`.
- La capa vino en multiplicar de la portada limita el brillo de cualquier foto: texto blanco ≥ 12.9:1 garantizado.
- Resultados (build local): Lighthouse 100/100/100/100 móvil y escritorio, LCP móvil 1.5 s, CLS 0; axe-core 0 violaciones WCAG 2.2 AA.

## Estado (fase 6, revisión final)
- Fases 1–6 completas. Lo que falta son datos del dueño: ver `PENDIENTES.md` (sección "Antes de publicar" primero).
- Verificación: `npm run check` (0 errores) y `npm run build` (falla si un contraste baja de AA). Despliegue: `vercel.json` o `netlify.toml` (Node 22, ver README).
- Lema de portada en `site.tagline`; nota del horario en `hoursNote`.
- Ojo en Bash (Windows): las comillas invertidas dentro de `node -e "..."` se ejecutan como comandos. Para editar código con plantillas de JS usar Edit/Write.

## Convenciones
- Breakpoints (media queries, mobile-first): 30rem, 40rem, 48rem, 64rem. Rejillas auto-fit con `--col-min-sm/md/lg`.
- Clase `.section` para el padding vertical de cada sección; `SectionHeading` para el h2 + entradilla.
- Usa solo tokens semánticos (`--color-bg`, `--color-accent`, `--color-text-muted`…): cero hex, tamaños o espaciados sueltos.
- Cada combinación de color nueva se agrega a la tabla `pairs` de `src/pages/estilos.astro` para verificar su contraste.
- Accesibilidad WCAG 2.2 AA: un solo `h1`, foco visible, objetivos táctiles ≥ 44 px (`--target-min`), enlaces externos con texto oculto "(abre WhatsApp)" o similar.
- Mobile-first, sin scroll horizontal de 360 a 1440 px.
- Enlaces de WhatsApp: `https://wa.me/57XXXXXXXXXX?text=...` con mensaje según el contexto (plan, clase, sede o merch).

## Skills disponibles en esta máquina
Las del brief que existen aquí: `frontend-design`, `ui-ux-pro-max`, `frontend-ui-engineering`, `12-principles-of-animation`, `interaction-design`. Las de `vectorlab-ux-skills`, `design-skills` y `ui-consistency` no están instaladas; se cubren con las anteriores y con revisión manual.
