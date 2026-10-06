// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: reemplazar por el dominio real ([DOMINIO], ver PENDIENTES.md) antes de la fase 5.
  site: 'https://imperialgym.example',
  output: 'static',
  build: {
    // Una sola página: el CSS va en línea y no bloquea el primer pintado (mejor LCP).
    inlineStylesheets: 'always',
  },
});
