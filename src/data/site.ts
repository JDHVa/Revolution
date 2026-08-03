/**
 * CONFIGURACIÓN GLOBAL DEL SITIO
 *
 * Este es el archivo que más vas a editar. Todo lo que cambie de aquí a
 * noviembre (sede, link del formulario, redes, correos) vive aquí.
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
  tagline: 'Hackathon de hardware · Monterrey',
  descripcion:
    'Hackathon de hardware gratuito para estudiantes de preparatoria en Monterrey. 24 horas, 14 y 15 de noviembre. Componentes, comida y mentores incluidos. Sin experiencia previa.',

  fechas: {
    inicio: '2026-11-14T08:30:00-06:00',
    fin: '2026-11-15T17:30:00-06:00',
    etiqueta: '14 y 15 de noviembre',
    etiquetaLarga: 'Sábado 14 y domingo 15 de noviembre de 2026',
    anio: 2026,
  },

  duracion: '24 horas',

  /** Datos duros del hero. Cámbialos cuando cambien los números. */
  cifras: [
    { valor: '100%', etiqueta: 'gratis' },
    { valor: '70', etiqueta: 'lugares' },
    { valor: '24', etiqueta: 'horas' },
    { valor: '15–18', etiqueta: 'años' },
  ],

  venue: {
    nombre: 'Por confirmar',
    ciudad: 'Monterrey, Nuevo León',
    direccion: null as string | null,
    mapa: null as string | null,
    confirmado: false,
    nota: 'Estamos cerrando la sede. En cuanto quede confirmada la publicamos aquí y la anunciamos en Instagram.',
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
