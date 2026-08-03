/**
 * TALLERES PREVIOS AL EVENTO
 *
 * Los tres talleres del mes anterior. Sirven para que alguien que nunca ha
 * tocado un protoboard llegue en noviembre sabiendo qué hacer.
 *
 * `fecha` y `sede` en `null` → el sitio muestra "Por confirmar".
 * `registro` en `null` → no aparece botón, solo el aviso de que abre pronto.
 */

export type Workshop = {
  numero: number;
  titulo: string;
  descripcion: string;
  imparten: string[];
  /** Texto libre: 'Sábado 24 de octubre'. Déjalo en null si no está cerrado. */
  fecha: string | null;
  /** Referencia relativa al evento, para dar contexto aunque no haya fecha. */
  cuando: string;
  sede: string | null;
  registro: string | null;
};

export const workshops: Workshop[] = [
  {
    numero: 1,
    titulo: 'Introducción a hackathones y robótica',
    descripcion:
      'Qué es un hackathon, cómo funciona uno por dentro y qué esperar de REVOLUTION. Resolvemos todas las dudas y hacemos una primera introducción a robótica.',
    imparten: ['Alonso', 'Anna Antúnez'],
    fecha: null,
    cuando: '3 semanas antes del evento · octubre',
    sede: 'Horno 3 (por confirmar)',
    registro: null,
  },
  {
    numero: 2,
    titulo: 'Introducción a software',
    descripcion:
      'Lo mínimo de programación que necesitas para que tu hardware haga algo. Sin experiencia previa, empezamos desde cero.',
    imparten: ['Emilio', 'Jesús'],
    fecha: null,
    cuando: '4 semanas antes del evento · octubre',
    sede: null,
    registro: null,
  },
  {
    numero: 3,
    titulo: 'Soldadura e introducción a hardware',
    descripcion:
      'Taller práctico de soldadura: cautín, estaño y tus primeras uniones. Además, una primera vuelta por KiCad para que veas cómo se diseña una placa.',
    imparten: ['Alonso', 'Anna Antúnez'],
    fecha: null,
    cuando: '2 semanas antes del evento · noviembre',
    sede: null,
    registro: null,
  },
];
