/** Formatos para Colombia: precios "$120.000" y horas "7:00 p.m.". */

export function formatPrice(value: number | null): string {
  if (value === null) return '[PRECIO]';
  return `$${value.toLocaleString('es-CO')}`;
}

export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h < 12 ? 'a.m.' : 'p.m.';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, '0')} ${suffix}`;
}

export function formatRange(opens: string, closes: string): string {
  return `${formatTime(opens)} a ${formatTime(closes)}`;
}
