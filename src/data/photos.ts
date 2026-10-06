import type { ImageMetadata } from 'astro';

/**
 * Fotos sueltas del sitio (las de instalaciones están en gallery.ts).
 *
 * Para poner una foto real:
 *   1. Guárdala en src/assets/fotos/ (JPG o PNG grande, idealmente 2000 px de ancho).
 *   2. Impórtala aquí:   import portada from '../assets/fotos/portada.jpg';
 *   3. Reemplaza null:   hero: portada,
 * Astro la optimiza sola (AVIF/WebP, varios tamaños).
 */
export const photos: Record<'hero' | 'hours' | 'merch', { image: ImageMetadata | null; alt: string; label: string }> = {
  hero: {
    image: null,
    alt: 'Personas entrenando en Imperial Gym',
    label: '[FOTO: portada, gente entrenando en Imperial Gym]',
  },
  hours: {
    image: null,
    alt: 'Persona entrenando con barra en Imperial Gym',
    label: '[FOTO: persona entrenando con barra]',
  },
  merch: {
    image: null,
    alt: 'Bolso deportivo rojo y negro con el logo de Imperial Gym',
    label: '[FOTO: bolso deportivo rojo y negro con el logo]',
  },
};
