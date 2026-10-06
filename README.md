# Imperial Gym — sitio web

Sitio estático de Imperial Gym (Armenia, Quindío), hecho con [Astro](https://astro.build).

## Instalar y correr en local

Requiere Node.js 22.12 o superior (ver `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera el sitio en dist/
npm run preview   # sirve dist/ para revisarlo
```

La guía de estilos (colores, tipografía y contraste verificado) está en `/estilos`.

## Cómo editar el contenido

Todo el contenido está en `src/data/`. No hace falta tocar los componentes.

| Quiero cambiar… | Archivo |
|---|---|
| Número de WhatsApp, Instagram, mensajes prellenados | `src/data/site.ts` |
| Planes y precios | `src/data/plans.ts` |
| Clases grupales (día, hora, sede) | `src/data/classes.ts` |
| Horario de atención | `src/data/hours.ts` |
| Direcciones, mapas y WhatsApp de cada sede | `src/data/locations.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Merch | `src/data/merch.ts` |
| Fotos de portada, horario y merch | `src/data/photos.ts` |
| Fotos de instalaciones | `src/data/gallery.ts` |
| Entrenadores (nombre, especialidad, sede, foto) | `src/data/trainers.ts` |

Ejemplos:

- **Agregar una clase:** en `classes.ts`, agrega una línea como
  `{ name: 'Boxeo', day: 'sabado', location: 'sur', time: '09:00' },`
  Las horas van en formato 24 h. El sitio las ordena y las muestra como "9:00 a.m.".
- **Cambiar un precio:** en `plans.ts`, cambia `price: 120000` (sin puntos ni signo `$`).
- **Poner el WhatsApp:** en `site.ts`, cambia `whatsapp: null` por `whatsapp: '573001234567'` (con 57, sin espacios ni `+`).

### Fotos

1. Guarda la foto en `src/assets/fotos/` (JPG grande, idealmente de 2000 px de ancho).
2. Impórtala en el archivo de datos y reemplaza `image: null`:
   - Portada, horario y merch: `src/data/photos.ts`
   - Instalaciones: `src/data/gallery.ts`

   ```ts
   import portada from '../assets/fotos/portada.jpg';
   // …
   hero: { image: portada, alt: 'Personas entrenando en Imperial Gym', label: '…' },
   ```
3. Astro la convierte sola a AVIF y WebP en varios tamaños. La de portada carga primero; las demás, al bajar.

Escribe un `alt` que diga qué se ve en la foto ("Zona de pesas de la sede Centro"), no "foto" ni "imagen".

### Mapas

En Google Maps, busca la sede → Compartir → "Insertar un mapa" → copia solo la URL del `src="…"` y pégala en `mapEmbedUrl` de `src/data/locations.ts`. El enlace de "Cómo llegar" va en `mapsUrl`.

Lo que está entre `[CORCHETES]` es un dato pendiente. La lista completa está en `PENDIENTES.md`.

## Verificar antes de publicar

```bash
npm run check    # tipos (0 errores esperados)
npm run build    # falla si algún contraste de color baja de WCAG AA
```

Revisa `PENDIENTES.md`, sección **Antes de publicar**: el dominio, los datos de Google (JSON-LD) y la imagen para compartir.

## Desplegar

El sitio es estático: cualquier hosting sirve. El proyecto trae configuración lista para dos.

### Vercel (`vercel.json`)

1. Sube el proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repositorio.
3. Vercel detecta Astro. Deja los valores: compilación `npm run build`, carpeta `dist`.
4. **Deploy.** Cada cambio que subas a la rama principal se publica solo.

### Netlify (`netlify.toml`)

1. Sube el proyecto a un repositorio de GitHub.
2. En [netlify.com](https://netlify.com) → **Add new site → Import an existing project** → elige el repositorio.
3. Netlify lee `netlify.toml` (compilación, carpeta y Node 22). **Deploy.**

También puedes compilar en local y arrastrar la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop) para una publicación manual.

Las dos configuraciones agregan caché de un año a `/_astro/*` y `/fonts/*` (archivos que no cambian). Usa solo la del hosting que elijas; la otra se puede borrar.

### Después de publicar

1. Conecta el dominio propio en el panel del hosting y ponlo en `site` de `astro.config.mjs` (vuelve a publicar).
2. Registra el sitio en [Google Search Console](https://search.google.com/search-console) y envía `https://TU-DOMINIO/sitemap.xml`.
3. Crea o actualiza el **Perfil de Empresa de Google** de cada sede con la misma dirección, teléfono y horario del sitio.
4. Prueba los datos estructurados en [Rich Results Test](https://search.google.com/test/rich-results) y la vista previa al compartir el enlace por WhatsApp.
5. Pon el enlace del sitio en la biografía de Instagram.
