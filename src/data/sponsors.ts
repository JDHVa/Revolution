/**
 * PATROCINIO
 *
 * Aquí sólo el acento visual de cada nivel y los patrocinadores confirmados.
 * El nombre, el resumen y los beneficios de cada nivel están en `tiers` de
 * src/i18n/es.ts y en.ts, en este mismo orden.
 *
 * Para agregar un patrocinador confirmado: métele un objeto a `confirmados`
 * con el nombre del archivo de su logo dentro de /public/media/sponsors/.
 * Mientras el arreglo esté vacío, esa sección no se renderiza.
 */

export type Tier = {
  slug: string;
  /** El acento visual del nivel. */
  color: 'cobre' | 'agave' | 'talavera' | 'rosa';
};

export const tiers: Tier[] = [
  { slug: 'aliado', color: 'agave' },
  { slug: 'impulsor', color: 'cobre' },
  { slug: 'industry', color: 'talavera' },
  { slug: 'revolucionario', color: 'rosa' },
];

export type Confirmado = {
  nombre: string;
  logo: string;
  url: string;
  tier: Tier['slug'];
};

/** Vacío por ahora. En cuanto cierres el primero, métele el objeto aquí. */
export const confirmados: Confirmado[] = [];
