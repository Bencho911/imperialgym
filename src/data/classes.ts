import type { LocationId } from './locations';

/**
 * Programación semanal de clases grupales. Cambia con frecuencia: edita solo este archivo.
 * time en formato 24 h "HH:MM". El orden dentro de cada día se calcula solo.
 */
export type Day = 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'sabado' | 'domingo';

export interface GroupClass {
  name: string;
  day: Day;
  location: LocationId;
  time: string;
}

export const days: { id: Day; label: string }[] = [
  { id: 'lunes', label: 'Lunes' },
  { id: 'martes', label: 'Martes' },
  { id: 'miercoles', label: 'Miércoles' },
  { id: 'jueves', label: 'Jueves' },
  { id: 'viernes', label: 'Viernes' },
  { id: 'sabado', label: 'Sábado' },
  { id: 'domingo', label: 'Domingo' },
];

// "Cross training": en las piezas aparece "CROSSFFIT". Nombre pendiente de confirmar (ver PENDIENTES.md).
export const classes: GroupClass[] = [
  { name: 'Rumbaterapia', day: 'lunes', location: 'centro', time: '19:00' },
  { name: 'Abdomen', day: 'martes', location: 'centro', time: '18:30' },
  { name: 'Spinning', day: 'martes', location: 'centro', time: '08:00' },
  { name: 'Spinning', day: 'martes', location: 'sur', time: '19:00' },
  { name: 'Boxeo', day: 'miercoles', location: 'centro', time: '19:00' },
  { name: 'Cross training', day: 'jueves', location: 'centro', time: '07:30' },
  { name: 'Spinning', day: 'jueves', location: 'centro', time: '19:00' },
  { name: 'Cross training', day: 'viernes', location: 'centro', time: '12:15' },
  { name: 'Rumbaterapia', day: 'viernes', location: 'sur', time: '19:00' },
];

/** Nombres únicos de clase, en orden de aparición (para la cinta de clases). */
export const classNames = [...new Set(classes.map((c) => c.name))];
