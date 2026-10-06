/** Utilidades WCAG 2.x para verificar contraste en el build (página /estilos). */

export function parseColorTokens(css: string): Record<string, string> {
  const tokens: Record<string, string> = {};
  for (const m of css.matchAll(/--(color-[\w-]+):\s*(#[0-9a-fA-F]{6})\b/g)) {
    tokens[m[1]] = m[2].toUpperCase();
  }
  // Resuelve alias semánticos de un nivel: --color-x: var(--color-y)
  for (const m of css.matchAll(/--(color-[\w-]+):\s*var\(--(color-[\w-]+)\)/g)) {
    if (tokens[m[2]]) tokens[m[1]] = tokens[m[2]];
  }
  return tokens;
}

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
