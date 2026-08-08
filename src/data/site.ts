/**
 * CONFIGURACIÓN GLOBAL DEL SITIO
 *
 * Aquí vive lo que NO cambia entre español e inglés: links, correos, fechas
 * en formato máquina, números. Todo el texto que se lee en la página está en
 * src/i18n/es.ts y src/i18n/en.ts.
 *
 * Los campos con `pendiente: true` hacen que el sitio muestre un estado
 * honesto ("Registro abre pronto", "Sede por confirmar") en vez de un link
 * muerto. Cuando tengas el dato real: pon la url y cambia `pendiente` a
 * `false`. El aviso desaparece solo, no hay que tocar ningún componente.
 */

export type Link = {
  url: string;
  pendiente?: boolean;
};

export const site = {
  nombre: 'REVOLUTION',

  fechas: {
    inicio: '2026-12-05T08:30:00-06:00',
    fin: '2026-12-06T17:30:00-06:00',
    anio: 2026,
  },

  /**
   * Los números del hero. Las etiquetas de abajo ("gratis", "lugares"…) están
   * traducidas en `hero.cifras` de cada idioma, en el mismo orden.
   */
  cifras: ['100%', '70', '24', '15–18'],

  venue: {
    direccion: null as string | null,
    mapa: null as string | null,
    confirmado: false,
  },

  links: {
    registro: { url: '#', pendiente: true } as Link,
    instagram: { url: 'https://www.instagram.com/hackclub_revolution/' } as Link,
    instagramHighCoders: { url: 'https://www.instagram.com/highcoders.mty/' } as Link,
    whatsapp: { url: '#', pendiente: true } as Link,
    hackClub: { url: 'https://hackclub.com' } as Link,
  },

  /**
   * Los tres apuntan al mismo buzón por ahora. Están separados a propósito:
   * el día que quieran que patrocinio o los papás lleguen a otro lado, se
   * cambia sólo ese campo y el resto del sitio no se entera.
   */
  contacto: {
    /** Footer, FAQ y sección de contacto. Es el que más correo recibe. */
    email: 'revolution.hackclub@gmail.com',
    /** Botón "Quiero patrocinar" y cierre de /sponsors. */
    emailSponsors: 'revolution.hackclub@gmail.com',
    /** /legal y la junta por videollamada con padres. */
    emailPadres: 'revolution.hackclub@gmail.com',
  },

  organizacion: 'Hack Club Monterrey',
} as const;

/** Helper: ¿este link ya se puede usar? */
export const disponible = (l: Link) => !l.pendiente && l.url !== '#';
