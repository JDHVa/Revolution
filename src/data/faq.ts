/**
 * PREGUNTAS FRECUENTES
 *
 * Para agregar una pregunta: copia un bloque y cámbialo. Nada más.
 *
 * En `respuesta` puedes usar estas etiquetas y el sitio las convierte en
 * links con la url correcta de site.ts — así nunca se quedan desactualizadas:
 *
 *   {registro}   {instagram}   {highcoders}   {whatsapp}   {email}   {horario}
 *
 * Ejemplo:  'Aplica en {registro} antes del 1 de noviembre.'
 */

export type Pregunta = {
  pregunta: string;
  respuesta: string;
  /** Márcala si quieres que aparezca abierta al cargar la página. */
  abierta?: boolean;
};

export const faq: Pregunta[] = [
  {
    pregunta: '¿Qué es un hackathon?',
    respuesta:
      'Un evento donde equipos trabajan contrarreloj para construir un prototipo funcional. En REVOLUTION el prototipo es de hardware: circuitos, sensores, cosas que se prenden y se mueven. Llegas con una idea, sales con algo que existe.',
    abierta: true,
  },
  {
    pregunta: '¿Necesito equipo?',
    respuesta:
      'Los equipos son de 3 a 4 integrantes. Puedes llegar con tu equipo ya armado, o formarlo en el evento: la primera actividad del sábado son dinámicas para que se conozcan y se junten. Nadie se queda solo.',
  },
  {
    pregunta: '¿Cuesta dinero?',
    respuesta:
      '<strong>No. Es 100% gratuito, 100% no fake.</strong> Incluye los componentes, la comida, los mentores y el lugar para quedarte durante el evento. Solo tienes que venir y dar lo mejor de ti.',
  },
  {
    pregunta: '¿Cuánto dura?',
    respuesta:
      'El evento es el 14 y 15 de noviembre, con una duración de 24 horas. Puedes ver el desglose completo hora por hora en {horario}.',
  },
  {
    pregunta: '¿Cómo puedo aplicar?',
    respuesta:
      'Llenas el formulario de registro en {registro}. Es corto y no necesitas experiencia previa ni portafolio: solo queremos saber quién eres y por qué te late.',
  },
  {
    pregunta: '¿Qué debo llevar?',
    respuesta:
      '<strong>Indispensable:</strong> tu credencial de la escuela y tu permiso firmado. <strong>Muy recomendable:</strong> saco de dormir, y tu kit de higiene — desodorante, cepillo de dientes y, si quieres, perfume. Son 24 horas con 90 personas en el mismo cuarto; tus compañeros te lo van a agradecer. Si tienes laptop, tráela. Los componentes los ponemos nosotros.',
  },
  {
    pregunta: '¿Dónde veo actualizaciones antes y durante el evento?',
    respuesta:
      'Síguenos en {instagram} para los anuncios, y métete al {whatsapp} para las dudas del día a día. Todo lo importante lo publicamos en los dos lados.',
  },
  {
    pregunta: '¿Quién puede asistir?',
    respuesta:
      'Estudiantes inscritos en <strong>preparatoria</strong>, de 15 a 18 años. Si ya cumpliste 18 necesitas traer un comprobante de que sigues inscrito en prepa: Kardex, SIASE, IRIS o cualquier constancia de tu escuela.',
  },
  {
    pregunta: '¿Tengo otra pregunta?',
    respuesta:
      'Escríbenos a {email} o mándanos DM en {instagram}. Contestamos rápido, de verdad.',
  },
];
