/**
 * Horario de atención (jornada continua). Por ahora es el mismo para ambas sedes
 * (pendiente confirmar). Horas en formato 24 h "HH:MM".
 */
export interface HoursRow {
  label: string;
  /** Días en formato schema.org, para los datos estructurados. */
  days: string[];
  opens: string;
  closes: string;
}

export const hours: HoursRow[] = [
  { label: 'Lunes a jueves', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '05:00', closes: '22:00' },
  { label: 'Viernes', days: ['Friday'], opens: '05:00', closes: '21:00' },
  { label: 'Sábado', days: ['Saturday'], opens: '08:00', closes: '15:00' },
  { label: 'Domingo', days: ['Sunday'], opens: '08:00', closes: '14:00' },
  { label: 'Festivos', days: ['PublicHolidays'], opens: '08:00', closes: '16:00' },
];

/** Nota bajo el horario. "Ambas sedes" está pendiente de confirmar (ver PENDIENTES.md). */
export const hoursNote = 'Ambas sedes. Jornada continua, sin cerrar al mediodía.';
