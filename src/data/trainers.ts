import type { ImageMetadata } from 'astro';
import type { LocationId } from './locations';

/**
 * Entrenadores. Todo es marcador hasta que el dueño confirme el equipo (ver PENDIENTES.md).
 * Agrega, quita o reordena entradas libremente: la sección se ajusta sola.
 *
 * - locations: sedes donde entrena ('centro', 'sur' o ambas).
 * - image: foto real (src/assets/fotos/), o null para el marcador.
 * - instagram: URL del perfil, opcional.
 */
export interface Trainer {
  name: string;
  specialty: string;
  locations: LocationId[];
  image: ImageMetadata | null;
  instagram?: string;
}

export const trainers: Trainer[] = [
  { name: '[NOMBRE ENTRENADOR]', specialty: '[ESPECIALIDAD]', locations: ['centro'], image: null },
  { name: '[NOMBRE ENTRENADOR]', specialty: '[ESPECIALIDAD]', locations: ['centro'], image: null },
  { name: '[NOMBRE ENTRENADOR]', specialty: '[ESPECIALIDAD]', locations: ['sur'], image: null },
];
