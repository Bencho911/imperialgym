# Pendientes por confirmar con el dueño

Todo lo que aparece en el sitio entre corchetes `[ASÍ]` es un marcador. Esta lista es la fuente de verdad: cuando llegue un dato, se reemplaza en `src/data/` y se tacha aquí.

## Marca
- [ ] **Logo original** en SVG (ideal) o PNG de al menos 1000 px de ancho, con fondo transparente. Hoy se muestra un marcador de texto "IMG IMPERIAL". Va en `public/brand/`. También se necesita para el favicon y la imagen para compartir en redes.
- [ ] Versión del logo para fondo oscuro (la G negra no se ve sobre negro): ¿existe una versión con G blanca, como en el bolso?

## Antes de publicar (SEO)
- [ ] **Datos estructurados (JSON-LD):** hoy llevan `[DIRECCIÓN …]`, `[TELÉFONO SEDE …]` y `[RANGO DE PRECIOS]`. Google los mostraría tal cual: completarlos en `src/data/` antes de publicar (el rango de precios va en `src/components/LocalBusinessSchema.astro`).
- [ ] **Dominio:** cambiar `site` en `astro.config.mjs`. De él salen la URL canónica, el sitemap, el robots.txt y las URLs de Open Graph.
- [ ] **Imagen para compartir** (`public/og-image.png`, 1200×630): es PROVISIONAL (nombre en Anton + franja roja). Reemplazar por una con el logo real y una foto del gimnasio.
- [ ] **Favicon e íconos** (`public/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`): PROVISIONALES (columna griega sobre rojo). Regenerar a partir del logo real.
- [ ] Mapas: cuando haya dirección, pegar en `src/data/locations.ts` el enlace "Cómo llegar" (`mapsUrl`) y el de "Insertar un mapa" de Google Maps (`mapEmbedUrl`).

## Contacto
- [ ] `[NÚMERO WHATSAPP]`: ¿un número general o uno por sede?
- [ ] `[@USUARIO]` de Instagram.
- [ ] `[DOMINIO]` del sitio (hoy está `imperialgym.example` en `astro.config.mjs`).

## Sedes
- [ ] `[DIRECCIÓN SEDE CENTRO]` y enlace de Google Maps. Mientras tanto, "Cómo llegar" hace una búsqueda de "Imperial Gym Sede Centro Armenia" en Google Maps: verificar que encuentre el lugar correcto o poner el enlace exacto en `src/data/locations.ts`.
- [ ] `[DIRECCIÓN SEDE SUR]` y enlace de Google Maps.
- [ ] ¿Ambas sedes tienen el mismo horario de atención?
- [ ] Teléfono de cada sede (para los datos estructurados de Google).

## Textos para confirmar
- [ ] Titular de portada: "Entrena donde quieras, cuando quieras" (tomado de su pieza del Plan Ultra). ¿Lo aprueban como lema del sitio?
- [ ] Horario: el sitio dice "Ambas sedes" y "jornada continua, sin cerrar al mediodía". Confirmar.

## Planes
- [ ] Los demás planes (la marca habla de "nuevos planes"): `[NOMBRE PLAN]`, `[PRECIO]`, `[BENEFICIOS]` de cada uno.
- [ ] Plan Ultra: ¿qué es el "obsequio incluido"? ¿Cómo funciona la "app de rutinas" (nombre de la app)?
- [ ] Rango de precios para Google (`priceRange`).

## Entrenadores
- [ ] Lista del equipo: nombre, especialidad, sede(s) y, si quieren, su Instagram. Hoy hay 3 marcadores en `src/data/trainers.ts` (agregar o quitar según el equipo real).
- [ ] Foto de cada entrenador (vertical, fondo limpio) y autorización para publicarla.

## Clases
- [ ] Nombre definitivo de "Cross training". En las piezas aparece "CROSSFFIT" (con error). **CrossFit es marca registrada** y solo la pueden usar los boxes afiliados; si el gimnasio no está afiliado, se recomienda "Cross training" o "Entrenamiento funcional".
- [ ] Confirmar que la programación de clases de enero sigue vigente.

## Merch
- [ ] `[PRECIO]` de los bolsos y si hay otros productos (camisetas, termos, etc.).

## Fotos
- [ ] Fotos reales de: zona de pesas y máquinas (cada sede), clases (spinning, boxeo, rumbaterapia), fachada de cada sede, merch. Sin fotos de stock.
- [ ] Foto principal para la portada (horizontal, buena luz, gente entrenando).
- [ ] Autorización de las personas que aparecen en las fotos.

## Preguntas frecuentes
- [ ] Cómo inscribirse y qué se necesita.
- [ ] Congelamiento del plan: ¿se puede? ¿Cuánto tiempo?
- [ ] Invitados: reglas (días, horarios, documento).
- [ ] Edad mínima para entrenar.
- [ ] Métodos de pago (efectivo, Nequi, Daviplata, tarjeta, transferencia).

## Legal
- [ ] Si se agrega un formulario: responsable del tratamiento de datos, correo de contacto para la política de datos (Ley 1581 de 2012).
