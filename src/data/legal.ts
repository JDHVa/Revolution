/**
 * SECCIÓN LEGAL
 *
 * ⚠️ IMPORTANTE — LÉELO ANTES DE PUBLICAR
 *
 * Esto es una PLANTILLA con la estructura y los campos listos, no un
 * documento legal válido. Antes de mandarle cualquiera de estos textos a un
 * padre o madre de familia, necesitan que lo revise un adulto responsable
 * (idealmente alguien de la escuela sede, o un abogado). Están organizando un
 * evento con menores de edad quedándose a dormir: el papeleo tiene que estar
 * bien hecho, no improvisado.
 *
 * Cada documento tiene `estado`:
 *   'borrador'  → aparece marcado como no definitivo (así están todos ahora)
 *   'listo'     → aparece normal, con su link de descarga
 *
 * `archivo` es la ruta del PDF dentro de /public/legal/. Mientras sea null,
 * se muestra el aviso de que todavía no está disponible.
 */

export type Documento = {
  slug: string;
  titulo: string;
  para: 'padres' | 'participantes' | 'staff';
  descripcion: string;
  /** Los puntos que el documento debe cubrir. Sirve de checklist mientras lo redactan. */
  cubre: string[];
  archivo: string | null;
  estado: 'borrador' | 'listo';
};

export const documentos: Documento[] = [
  {
    slug: 'permiso-padres',
    titulo: 'Permiso y carta responsiva para padres',
    para: 'padres',
    descripcion:
      'El documento que firma el padre, madre o tutor para autorizar la participación del menor. Es obligatorio: sin él, el participante no puede entrar al evento.',
    cubre: [
      'Autorización expresa para participar y para pernoctar en la sede',
      'Datos de contacto de emergencia (dos números)',
      'Alergias, condiciones médicas y medicamentos del participante',
      'Autorización de atención médica de urgencia',
      'Autorización de uso de imagen (fotos y video del evento)',
      'Reconocimiento de la política de entradas y salidas',
    ],
    archivo: null,
    estado: 'borrador',
  },
  {
    slug: 'reglamento',
    titulo: 'Reglamento del evento',
    para: 'participantes',
    descripcion:
      'Las reglas de convivencia durante las 24 horas. Se lee en la apertura del sábado y se acepta al registrarse.',
    cubre: [
      'Código de conducta y tolerancia cero al acoso',
      'Horario de quiet hours y descanso',
      'Uso responsable de herramientas: cautines, fuentes de poder, baterías LiPo',
      'Prohibición de alcohol, sustancias y salidas no autorizadas',
      'Reglas del reto: qué se vale usar y qué no',
      'Consecuencias del incumplimiento',
    ],
    archivo: null,
    estado: 'borrador',
  },
  {
    slug: 'deslinde',
    titulo: 'Deslinde de responsabilidad',
    para: 'padres',
    descripcion:
      'Alcance de la responsabilidad de la organización: qué cubrimos y qué no, durante y fuera del horario del evento.',
    cubre: [
      'Alcance y límites de la supervisión que ofrecemos',
      'Responsabilidad sobre objetos personales del participante',
      'Qué pasa si el participante abandona la sede sin autorización',
      'Traslados de ida y vuelta (no están cubiertos por la organización)',
      'Seguro del evento, si aplica según la sede',
    ],
    archivo: null,
    estado: 'borrador',
  },
  {
    slug: 'privacidad',
    titulo: 'Aviso de privacidad',
    para: 'participantes',
    descripcion:
      'Qué datos personales pedimos en el registro, para qué los usamos, cuánto tiempo los guardamos y cómo pedir que los borremos.',
    cubre: [
      'Datos que recabamos en el formulario de registro',
      'Finalidad del tratamiento de esos datos',
      'Con quién se comparten (patrocinadores: solo datos agregados, nunca individuales)',
      'Plazo de conservación y proceso de borrado',
      'Derechos ARCO y correo de contacto para ejercerlos',
    ],
    archivo: null,
    estado: 'borrador',
  },
];

/** Los puntos de la política de menores que van visibles en la página, sin PDF de por medio. */
export const politicaMenores: { titulo: string; texto: string }[] = [
  {
    titulo: 'Nadie entra sin permiso firmado',
    texto:
      'El check-in del sábado incluye la revisión del permiso firmado por el padre, madre o tutor, junto con la credencial escolar del participante. Sin los dos documentos no podemos dejarlo entrar, aunque se haya registrado.',
  },
  {
    titulo: 'Entradas y salidas controladas',
    texto:
      'Una vez dentro, el participante no puede salir de la sede sin autorización de su tutor. Si necesita retirarse antes del cierre, el tutor tiene que avisarnos y recogerlo en persona.',
  },
  {
    titulo: 'Staff despierto toda la noche',
    texto:
      'Durante las quiet hours siempre hay personal adulto y staff despierto en la sede. Las áreas de descanso están separadas y supervisadas.',
  },
  {
    titulo: 'Contacto abierto con los padres',
    texto:
      'Antes del evento organizamos una junta por videollamada para que los padres nos conozcan, vean la sede y pregunten lo que quieran. Durante el evento hay un número de contacto directo disponible las 24 horas.',
  },
];
