/**
 * IDIOMAS
 *
 * El sitio se sirve en dos idiomas, con una url para cada uno:
 *
 *   inglés (por defecto)  →  /            /sponsors        /legal
 *   español               →  /es/         /es/sponsors     /es/legal
 *
 * No hay JavaScript de por medio: el botón de idioma del nav es un link a la
 * misma página en el otro idioma, así que funciona con el sitio estático,
 * se puede compartir la url y Google indexa las dos versiones.
 *
 * Los componentes no reciben el idioma por props: lo sacan de la url con
 * `textos(Astro.url)`. Así se puede agregar una sección sin ir encadenando
 * un prop `idioma` por media docena de archivos.
 */
import es from './es';
import en from './en';
import type { Contenido, Idioma } from './tipos';

export type { Contenido, Idioma };

export const idiomas: Idioma[] = ['en', 'es'];

/** El idioma que vive en la raíz, sin prefijo en la url. */
export const idiomaPorDefecto: Idioma = 'en';

const contenidos: Record<Idioma, Contenido> = { en, es };

/** El otro idioma. Con dos, es simplemente el que no es. */
export const otroIdioma = (idioma: Idioma): Idioma => (idioma === 'es' ? 'en' : 'es');

/** Saca el idioma de la url: todo lo que cuelga de /es está en español. */
export function idiomaDe(url: URL): Idioma {
  const p = url.pathname;
  return p === '/es' || p.startsWith('/es/') ? 'es' : 'en';
}

/** Los textos que le tocan a esta página. Es lo que usan los componentes. */
export function textos(url: URL): Contenido {
  return contenidos[idiomaDe(url)];
}

/**
 * Prefija una ruta interna con el idioma:
 *   ruta('/sponsors', 'es') → '/es/sponsors'
 *   ruta('/sponsors', 'en') → '/sponsors'
 */
export function ruta(destino: string, idioma: Idioma): string {
  if (idioma === idiomaPorDefecto) return destino;
  return destino === '/' ? '/es/' : `/es${destino}`;
}

/** Quita el prefijo de idioma: '/es/sponsors' → '/sponsors'. */
export function rutaBase(url: URL): string {
  return url.pathname.replace(/^\/es(?=\/|$)/, '') || '/';
}

/** La página en la que estás, pero en el otro idioma. */
export function rutaEnIdioma(url: URL, idioma: Idioma): string {
  return ruta(rutaBase(url), idioma);
}
