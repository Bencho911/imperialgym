/**
 * Filtro de clases por sede (Todas / Centro / Sur).
 * - Sin JS el filtro no aparece y se ven todas las clases.
 * - Radios nativos: se usan con flechas del teclado y en móvil sin código extra.
 * - Las tarjetas se reacomodan con View Transitions donde el navegador las soporta;
 *   con reduced-motion o sin soporte, el cambio es inmediato.
 * - Anuncia el resultado a lectores de pantalla.
 */
export function initClassFilter(): void {
  const filter = document.querySelector<HTMLFieldSetElement>('[data-class-filter]');
  const status = document.querySelector<HTMLElement>('[data-class-status]');
  if (!filter || !status) return;

  const items = [...document.querySelectorAll<HTMLElement>('.class-item[data-location]')];
  const days = [...document.querySelectorAll<HTMLElement>('[data-day]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  const apply = (value: string, label: string) => {
    let visible = 0;
    for (const item of items) {
      const show = value === 'todas' || item.dataset.location === value;
      item.hidden = !show;
      if (show) visible += 1;
    }
    for (const day of days) {
      day.hidden = day.querySelectorAll('.class-item:not([hidden])').length === 0;
    }
    const noun = visible === 1 ? 'clase' : 'clases';
    status.textContent = value === 'todas' ? `${visible} ${noun} en todas las sedes.` : `${visible} ${noun} en la ${label}.`;
  };

  filter.addEventListener('change', (event) => {
    const input = event.target as HTMLInputElement;
    const label = input.nextElementSibling?.textContent?.trim() ?? '';
    const update = () => apply(input.value, label);

    if ('startViewTransition' in document && !reduced.matches) {
      const transition = document.startViewTransition(update);
      // Cambiar de sede muy rápido cancela la transición anterior: no es un error.
      transition.ready.catch(() => {});
      transition.finished.catch(() => {});
    } else {
      update();
    }
  });

  filter.hidden = false;
}
