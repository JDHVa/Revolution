/**
 * TEXTOS DE LA SECCIÓN "¿QUÉ ES REVOLUTION?"
 *
 * El pitch principal del evento. Si cambia la narrativa, se cambia aquí.
 */

export const queEs = {
  entradilla:
    'REVOLUTION es un hackathon de hardware gratuito para estudiantes de preparatoria en Monterrey. Veinticuatro horas para construir un prototipo que funcione, aunque nunca hayas tocado un protoboard.',

  parrafos: [
    'Lo estamos organizando un grupo de adolescentes de Hack Club Monterrey, porque es el evento que nos hubiera gustado tener a nosotros. En esta ciudad el talento sobra, pero casi todos los eventos de tecnología son para universitarios o para quien ya puede pagarse los componentes. Los que quieren aprender electrónica y robótica desde la prepa se quedan fuera.',
    'Así que decidimos hacerlo nosotros. Todo lo que necesitas para construir lo ponemos nosotros: hardware, comida, mentores y un lugar donde trabajar. Tú pones las ganas.',
  ],

  /** El reto del evento. Es el corazón del tema, va destacado. */
  reto: {
    etiqueta: 'El reto',
    pregunta: '¿Qué le hubiera servido a ______ durante la Revolución Mexicana?',
    explicacion:
      'Llenas el espacio con quien quieras —una soldadera, un telegrafista, un maquinista, tu bisabuela— y construyes el aparato que le hubiera cambiado el día. Es lo bastante abierto para que se pongan creativos, y lo bastante específico para que nadie se quede viendo la mesa vacía.',
  },

  /** Los tres puntos que responden "¿esto es para mí?". */
  puntos: [
    {
      titulo: 'Sin experiencia previa',
      texto:
        'En serio. Damos tres talleres gratuitos el mes anterior para que llegues sabiendo lo básico de soldadura, electrónica y programación.',
    },
    {
      titulo: 'Gratis de verdad',
      texto:
        'Componentes, comida y lugar para quedarte, incluidos. No hay letra chiquita ni cuota de recuperación.',
    },
    {
      titulo: 'Te llevas lo que construyas',
      texto:
        'El prototipo es tuyo. Ganes o no, sales del evento con algo que hiciste con tus manos y que funciona.',
    },
  ],
} as const;
