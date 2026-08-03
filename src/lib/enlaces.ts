import { site, disponible } from '../data/site';

/**
 * Convierte los tokens de las respuestas del FAQ en links reales.
 *
 * En faq.ts escribes  'Aplica en {registro}.'  y aquí se convierte en el
 * <a> con la url de site.ts. Así los links nunca se desincronizan del resto
 * del sitio, y si algo todavía no existe se muestra el aviso en vez de un
 * link muerto.
 */

type Reemplazo = { texto: string; url: string | null; externo?: boolean };

const mapa: Record<string, () => Reemplazo> = {
  registro: () => ({
    texto: 'el formulario de registro',
    url: disponible(site.links.registro) ? site.links.registro.url : null,
    externo: true,
  }),
  instagram: () => ({
    texto: 'Instagram',
    url: disponible(site.links.instagram) ? site.links.instagram.url : null,
    externo: true,
  }),
  highcoders: () => ({
    texto: 'el Instagram de High Coders',
    url: disponible(site.links.instagramHighCoders)
      ? site.links.instagramHighCoders.url
      : null,
    externo: true,
  }),
  whatsapp: () => ({
    texto: 'grupo de WhatsApp',
    url: disponible(site.links.whatsapp) ? site.links.whatsapp.url : null,
    externo: true,
  }),
  email: () => ({
    texto: site.contacto.email,
    url: `mailto:${site.contacto.email}`,
  }),
  horario: () => ({ texto: 'el horario completo', url: '#horario' }),
  legal: () => ({ texto: 'la sección legal', url: '/legal' }),
  sponsors: () => ({ texto: 'la página de patrocinio', url: '/sponsors' }),
};

/** Escapa sólo lo que podría romper el HTML. Las respuestas ya traen <strong>. */
const escapar = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export function expandirEnlaces(texto: string): string {
  return texto.replace(/\{(\w+)\}/g, (completo, clave: string) => {
    const fn = mapa[clave];
    if (!fn) return completo; // token desconocido: se deja tal cual, así se nota

    const { texto: etiqueta, url, externo } = fn();

    // Todavía no hay url: se muestra el texto marcado como pendiente,
    // no un link que no lleva a ningún lado.
    if (!url) {
      return `<span class="enlace-pendiente" title="Disponible pronto">${escapar(
        etiqueta
      )} (pronto)</span>`;
    }

    const attrs = externo ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${url}"${attrs}>${escapar(etiqueta)}</a>`;
  });
}
