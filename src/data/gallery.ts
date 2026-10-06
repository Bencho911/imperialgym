import type { ImageMetadata } from 'astro';

/**
 * Fotos de instalaciones. Por ahora son marcadores (ver PENDIENTES.md).
 * Para poner una foto: guárdala en src/assets/fotos/, impórtala aquí y reemplaza image: null.
 *   import pesasCentro from '../assets/fotos/pesas-centro.jpg';
 */
export const gallery: { label: string; alt: string; image: ImageMetadata | null }[] = [
  { label: '[FOTO: zona de pesas, sede centro]', alt: 'Zona de pesas de la sede Centro', image: null },
  { label: '[FOTO: máquinas, sede centro]', alt: 'Máquinas de la sede Centro', image: null },
  { label: '[FOTO: zona de pesas, sede sur]', alt: 'Zona de pesas de la sede Sur', image: null },
  { label: '[FOTO: clase de spinning]', alt: 'Clase de spinning', image: null },
  { label: '[FOTO: clase de boxeo]', alt: 'Clase de boxeo', image: null },
  { label: '[FOTO: clase de rumbaterapia]', alt: 'Clase de rumbaterapia', image: null },
];
