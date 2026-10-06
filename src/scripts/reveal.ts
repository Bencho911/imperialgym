/**
 * Entradas al hacer scroll, una sola vez por elemento.
 * Progresivo: el estado oculto ("pending") lo pone este script. Si el JS no corre,
 * todo se ve completo y sin animación.
 */
export function initReveal(): void {
  if (!('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute('data-reveal-state', 'in');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
  );

  for (const el of elements) {
    el.setAttribute('data-reveal-state', 'pending');
    observer.observe(el);
  }
}
