/**
 * PATROCINIO
 *
 * Este archivo alimenta el resumen del landing Y la página completa
 * de /sponsors. Cambia algo aquí y se actualiza en los dos lados.
 *
 * Para agregar un patrocinador confirmado: métele un objeto a `confirmados`
 * con el nombre del archivo de su logo dentro de /public/media/sponsors/.
 * Mientras el arreglo esté vacío, esa sección no se renderiza.
 */

export type Tier = {
  slug: string;
  nombre: string;
  /** Una línea que resuma el nivel. Se usa en las tarjetas del landing. */
  resumen: string;
  beneficios: string[];
  /** El acento visual del nivel. */
  color: 'cobre' | 'agave' | 'talavera' | 'rosa';
};

export const tiers: Tier[] = [
  {
    slug: 'aliado',
    nombre: 'Aliado',
    resumen: 'Tu logo en el sitio y agradecimiento público en redes.',
    beneficios: ['Logo en la página del evento', 'Agradecimiento en nuestras redes sociales'],
    color: 'agave',
  },
  {
    slug: 'impulsor',
    nombre: 'Impulsor',
    resumen: 'Todo lo de Aliado, más tu logo en las playeras y un banner en la sede.',
    beneficios: [
      'Todo lo del nivel Aliado',
      'Logo en las playeras del evento',
      'Banner de tu marca en la sede',
    ],
    color: 'cobre',
  },
  {
    slug: 'industry',
    nombre: 'Industry',
    resumen: 'Presencia física: tu mesa en el evento y espacio para dar una plática o taller.',
    beneficios: [
      'Todo lo del nivel Impulsor',
      'Mesa propia durante el evento',
      'Espacio para dar una plática o un taller a los participantes',
    ],
    color: 'talavera',
  },
  {
    slug: 'revolucionario',
    nombre: 'Revolucionario',
    resumen: 'Apoyo en especie: componentes, comida o sede. El reconocimiento va según lo aportado.',
    beneficios: [
      'Para quien aporta componentes, comida o la sede',
      'Reconocimiento equivalente al valor de lo aportado',
      'No necesitas cubrir todo: una parte también cuenta',
    ],
    color: 'rosa',
  },
];

/** El argumento largo. Vive en /sponsors; el landing usa solo los primeros dos. */
export const argumento: { titulo: string; texto: string }[] = [
  {
    titulo: 'Somos adolescentes construyendo el evento que nos hubiera gustado tener',
    texto:
      'En Monterrey el talento sobra, pero casi todos los hackathones son para universitarios. ¿En serio hay que esperar a la carrera —o a tener el dinero para comprar los componentes— para aprender a crear? Nosotros decidimos que no, y lo estamos armando por nuestra cuenta.',
  },
  {
    titulo: 'No prometemos formar ingenieros en dos días',
    texto:
      'Prometemos dejarles una semilla: las ganas de aprender y la certeza de que sí pueden construir algo real. Es para gente de preparatoria, sin experiencia previa, y ponemos hardware, comida, mentores y espacio para que nadie se quede fuera por no poder pagarlo.',
  },
  {
    titulo: 'Tu marca no sería solo un banner',
    texto:
      'Estarías pagando el primer ESP32 de un futuro ingeniero. Ese es literalmente el impacto: un chavo de 16 años que nunca había soldado, saliendo del evento con algo que funciona y con la idea de que esto es para él.',
  },
];

export const ofrecemos: { titulo: string; texto: string }[] = [
  {
    titulo: 'Visibilidad real',
    texto:
      'Logo, banners, redes y playeras frente a 70 participantes, 20 staff y las familias de todos ellos.',
  },
  {
    titulo: 'Talento temprano',
    texto:
      'Conoce a la siguiente generación de ingenieros de Monterrey antes que nadie, cuando apenas están empezando.',
  },
  {
    titulo: 'Impacto medible',
    texto:
      'Te decimos exactamente en qué se usó tu apoyo: lista de materiales pública y reporte post-evento con fotos y números.',
  },
  {
    titulo: 'Flexibilidad',
    texto:
      'Aceptamos apoyo económico, componentes, comida o espacio. No necesitas patrocinar todo — una ayuda chica cambia mucho.',
  },
];

/** A dónde se va el dinero. Se muestra tal cual en /sponsors. */
export const destino: string[] = [
  'Kits de ESP32 para los equipos',
  'Protoboards, cables y componentes básicos',
  'Baterías LiPo',
  'Material de soldadura: cautines, estaño, puntas',
  'Comida de los participantes durante las 24 horas',
];

export type Confirmado = {
  nombre: string;
  logo: string;
  url: string;
  tier: Tier['slug'];
};

/** Vacío por ahora. En cuanto cierres el primero, métele el objeto aquí. */
export const confirmados: Confirmado[] = [];
