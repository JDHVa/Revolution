import { site, disponible } from '../data/site';
import { idiomaDe, ruta, textos } from '../i18n';

/**
 * Convierte los tokens de las respuestas del FAQ en links reales.
 *
 * En los archivos de idioma escribes  'Aplica en {registro}.'  y aquí se
 * convierte en el <a> con la url de site.ts. Así los links nunca se
 * desincronizan del resto del sitio, y si algo todavía no existe se muestra el
 * aviso en vez de un link muerto.
 *
 * Los links internos (/legal, /sponsors) salen ya con el prefijo del idioma
 * de la página, así que desde el FAQ en español nadie termina en /legal
 * en inglés.
 */

type Reemplazo = { texto: string; url: string | null; externo?: boolean };

const armarMapa = (paginaUrl: URL): Record<string, () => Reemplazo> => {
  const t = textos(paginaUrl).enlaces;
  const idioma = idiomaDe(paginaUrl);

  return {
    registro: () => ({
      texto: t.registro,
      url: disponible(site.links.registro) ? site.links.registro.url : null,
      externo: true,
    }),
    instagram: () => ({
      texto: t.instagram,
      url: disponible(site.links.instagram) ? site.links.instagram.url : null,
      externo: true,
    }),
    highcoders: () => ({
      texto: t.highcoders,
      url: disponible(site.links.instagramHighCoders)
        ? site.links.instagramHighCoders.url
        : null,
      externo: true,
    }),
    whatsapp: () => ({
      texto: t.whatsapp,
      url: disponible(site.links.whatsapp) ? site.links.whatsapp.url : null,
      externo: true,
    }),
    email: () => ({
      texto: site.contacto.email,
      url: `mailto:${site.contacto.email}`,
    }),
    horario: () => ({ texto: t.horario, url: '#horario' }),
    legal: () => ({ texto: t.legal, url: ruta('/legal', idioma) }),
    sponsors: () => ({ texto: t.sponsors, url: ruta('/sponsors', idioma) }),
  };
};

/** Escapa sólo lo que podría romper el HTML. Las respuestas ya traen <strong>. */
const escapar = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export function expandirEnlaces(texto: string, paginaUrl: URL): string {
  const mapa = armarMapa(paginaUrl);
  const t = textos(paginaUrl).enlaces;

  return texto.replace(/\{(\w+)\}/g, (completo, clave: string) => {
    const fn = mapa[clave];
    if (!fn) return completo; // token desconocido: se deja tal cual, así se nota

    const { texto: etiqueta, url, externo } = fn();

    // Todavía no hay url: se muestra el texto marcado como pendiente,
    // no un link que no lleva a ningún lado.
    if (!url) {
      return `<span class="enlace-pendiente" title="${escapar(t.prontoTitulo)}">${escapar(
        etiqueta
      )} ${escapar(t.pronto)}</span>`;
    }

    const attrs = externo ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${url}"${attrs}>${escapar(etiqueta)}</a>`;
  });
}
