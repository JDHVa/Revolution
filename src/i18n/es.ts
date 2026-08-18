/**
 * TEXTOS DEL SITIO — ESPAÑOL
 *
 * Este archivo y `en.ts` son gemelos: tienen exactamente las mismas llaves,
 * una con el texto en español y otra en inglés. Si agregas algo aquí, TypeScript
 * te va a marcar error en `en.ts` hasta que lo agregues allá también — eso es a
 * propósito, así ninguno de los dos idiomas se queda a medias.
 *
 * Aquí vive TODO lo que se lee en la página. Lo que no cambia entre idiomas
 * (links, correos, fechas ISO, fotos del equipo) vive en src/data/.
 *
 * Este archivo manda la forma: el tipo `Contenido` se saca de aquí.
 */

/**
 * Estas tres formas se anotan a mano porque no todos los elementos traen
 * todos los campos (un bloque sin `detalle`, una pregunta sin `abierta`), y
 * sin la anotación TypeScript infiere una unión y se queja al leerlos.
 */
type Bloque = { hora: string; titulo: string; detalle?: string; destacado?: boolean };
type Dia = { etiqueta: string; fecha: string; bloques: Bloque[] };
type Pregunta = { pregunta: string; respuesta: string; abierta?: boolean };

const es = {
  meta: {
    htmlLang: 'es',
    ogLocale: 'es_MX',
    tagline: 'Hackathon de hardware · Monterrey',
    descripcion:
      'Hackathon de hardware gratuito para estudiantes de preparatoria en Monterrey. 24 horas, 5 y 6 de diciembre. Componentes, comida y mentores incluidos. Sin experiencia previa.',
    tituloInicio: 'Inicio',
    tituloSponsors: 'Patrocinio',
    descripcionSponsors:
      'Patrocina REVOLUTION: hackathon de hardware gratuito para 70 estudiantes de preparatoria en Monterrey. Cuatro niveles de apoyo, desde componentes hasta presencia en el evento.',
    tituloLegal: 'Información legal',
    descripcionLegal:
      'Permisos, cartas responsivas, reglamento y política de menores de REVOLUTION. Información para padres y tutores de los participantes.',
  },

  fechas: {
    etiqueta: '5 y 6 de diciembre',
    etiquetaLarga: 'Sábado 5 y domingo 6 de diciembre de 2026',
  },

  ui: {
    saltar: 'Saltar al contenido',
    abrirMenu: 'Abrir menú',
    cerrarMenu: 'Cerrar menú',
    navPrincipal: 'Navegación principal',
    navMovil: 'Navegación móvil',
    irAlInicio: 'REVOLUTION — ir al inicio',
    registrarme: 'Registrarme',
    registroPronto: 'Registro pronto',
    registroAbrePronto: 'El registro abre pronto',
    registroTitulo: 'Todavía no abre el registro',
    disponiblePronto: 'Disponible pronto',
    porConfirmar: 'Por confirmar',
    /** El botón de idioma: siempre anuncia el idioma al que te lleva. */
    idioma: {
      codigo: 'EN',
      aria: 'Ver esta página en inglés',
    },
  },

  nav: {
    queEs: '¿Qué es?',
    horario: 'Horario',
    talleres: 'Talleres',
    faq: 'FAQ',
    equipo: 'Equipo',
    patrocinio: 'Patrocinio',
    legal: 'Información legal',
  },

  wordmark: {
    bajada: 'Hackathon de hardware · Monterrey',
  },

  hero: {
    ubicacion: 'Monterrey, Nuevo León',
    sr: 'REVOLUTION — hackathon de hardware en Monterrey',
    lema: '24 horas para construir algo que funcione.',
    lemaFuerte: 'Gratis, para prepa, sin experiencia previa.',
    cta2: 'Qué es esto',
    cifras: ['gratis', 'lugares', 'horas', 'años'],
  },

  queEs: {
    etiqueta: 'El evento',
    titulo: '¿Qué es Revolution?',
    entradilla:
      'REVOLUTION es un hackathon de hardware gratuito para estudiantes de preparatoria en Monterrey. Veinticuatro horas para construir un prototipo que funcione, aunque nunca hayas tocado un protoboard.',
    parrafos: [
      'Lo estamos organizando un grupo de adolescentes de Hack Club Monterrey, porque es el evento que nos hubiera gustado tener a nosotros. En esta ciudad el talento sobra, pero casi todos los eventos de tecnología son para universitarios o para quien ya puede pagarse los componentes. Los que quieren aprender electrónica y robótica desde la prepa se quedan fuera.',
      'Así que decidimos hacerlo nosotros. Todo lo que necesitas para construir lo ponemos nosotros: hardware, comida, mentores y un lugar donde trabajar. Tú pones las ganas.',
    ],
    reto: {
      etiqueta: 'El reto',
      pregunta: '¿Qué le hubiera servido a ______ durante la Revolución Mexicana?',
      explicacion:
        'Llenas el espacio con quien quieras —una soldadera, un telegrafista, un maquinista, tu bisabuela— y construyes el aparato que le hubiera cambiado el día. Es lo bastante abierto para que se pongan creativos, y lo bastante específico para que nadie se quede viendo la mesa vacía.',
    },
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
  },

  horario: {
    etiqueta: 'Programa',
    titulo: '24 horas, hora por hora',
    entradilla:
      'Así se ve el sábado 5 y domingo 6 de diciembre de 2026. Los horarios pueden moverse un poco, pero el arranque y el cierre son fijos.',
    dias: ([
      {
        etiqueta: 'Sábado',
        fecha: '5 de diciembre',
        bloques: [
          {
            hora: '8:30',
            titulo: 'Check-in',
            detalle:
              'Registro, gafete y kit de componentes. Trae tu credencial y tu permiso firmado.',
            destacado: true,
          },
          {
            hora: '9:00',
            titulo: 'Apertura',
            detalle:
              'Te presentamos el evento, el reto, a los mentores y a nosotros. Dinámicas para formar equipo si llegaste solo.',
          },
          {
            hora: '9:30',
            titulo: 'Arranca el hackathon',
            detalle:
              'Seis horas de construir. Los mentores andan dando vueltas todo el tiempo: úsalos.',
          },
          { hora: '16:00', titulo: 'Comida' },
          { hora: '18:30', titulo: 'Todos de regreso en la sede' },
          {
            hora: '20:00',
            titulo: 'Demo abierta',
            detalle: 'Enseña en qué vas, aunque esté a medias. Especialmente si está a medias.',
          },
          { hora: '20:40', titulo: 'Cena' },
          {
            hora: '21:30',
            titulo: 'Actividad de la noche',
            detalle:
              'Karaoke, Just Dance o lo que salga. Obligatorio despegarse del protoboard un rato.',
          },
          {
            hora: '23:30',
            titulo: 'Quiet hours',
            detalle: 'Se bajan las luces y el volumen. Puedes seguir trabajando, pero en silencio.',
          },
        ],
      },
      {
        etiqueta: 'Domingo',
        fecha: '6 de diciembre',
        bloques: [
          { hora: '8:00', titulo: 'Desayuno' },
          {
            hora: '9:00',
            titulo: 'Recta final',
            detalle:
              'Seis horas para cerrar. A las 15:00 se cierran las manos y no se toca más el proyecto.',
          },
          {
            hora: '15:00',
            titulo: 'Exposición',
            detalle: 'Cada equipo presenta su prototipo frente a todos.',
            destacado: true,
          },
          { hora: '16:00', titulo: 'Votaciones' },
          { hora: '17:00', titulo: 'Premiación', destacado: true },
          {
            hora: '17:30',
            titulo: 'Fotos y despedida',
            detalle: 'Foto grupal en el atardecer. Golden hour, no se negocia.',
          },
        ],
      },
    ] as Dia[]),
  },

  talleres: {
    etiqueta: 'Antes del evento',
    titulo: 'Tres talleres gratuitos',
    entradilla:
      'El mes anterior damos tres talleres abiertos para que llegues en diciembre sabiendo qué hacer. Son gratis y no necesitas estar registrado en el hackathon para ir.',
    numero: 'Taller',
    cuando: 'Cuándo',
    donde: 'Dónde',
    imparten: 'Imparten',
    /** Une los nombres de quienes imparten: 'Alonso y Anna'. */
    unirNombres: ' y ',
    apartar: 'Apartar lugar',
    lista: [
      {
        titulo: 'Introducción a hackathones y robótica',
        descripcion:
          'Qué es un hackathon, cómo funciona uno por dentro y qué esperar de REVOLUTION. Resolvemos todas las dudas y hacemos una primera introducción a robótica.',
        cuando: '3 semanas antes del evento · noviembre',
        fecha: null as string | null,
        sede: 'Horno 3 (por confirmar)' as string | null,
      },
      {
        titulo: 'Introducción a software',
        descripcion:
          'Lo mínimo de programación que necesitas para que tu hardware haga algo. Sin experiencia previa, empezamos desde cero.',
        cuando: '4 semanas antes del evento · noviembre',
        fecha: null as string | null,
        sede: null as string | null,
      },
      {
        titulo: 'Soldadura e introducción a hardware',
        descripcion:
          'Taller práctico de soldadura: cautín, estaño y tus primeras uniones. Además, una primera vuelta por KiCad para que veas cómo se diseña una placa.',
        cuando: '2 semanas antes del evento · noviembre',
        fecha: null as string | null,
        sede: null as string | null,
      },
    ],
  },

  faq: {
    etiqueta: 'Dudas',
    titulo: 'Preguntas frecuentes',
    preguntas: ([
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
          'El evento es el 5 y 6 de diciembre, con una duración de 24 horas. Puedes ver el desglose completo hora por hora en {horario}.',
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
    ] as Pregunta[]),
  },

  /** Los tokens {registro}, {instagram}… de las respuestas del FAQ. */
  enlaces: {
    registro: 'el formulario de registro',
    instagram: 'Instagram',
    highcoders: 'el Instagram de High Coders',
    whatsapp: 'grupo de WhatsApp',
    horario: 'el horario completo',
    legal: 'la sección legal',
    sponsors: 'la página de patrocinio',
    /** Se le pega al texto cuando el link todavía no existe. */
    pronto: '(pronto)',
    prontoTitulo: 'Disponible pronto',
  },

  equipo: {
    etiqueta: 'Quiénes somos',
    titulo: 'El equipo organizador',
    entradilla:
      'Somos estudiantes de prepa y universidad de Monterrey. Ninguno ha organizado un hackathon antes — lo estamos aprendiendo en el camino, igual que tú vas a aprender a soldar.',
    /** Se completa con el nombre: 'Retrato de Jesús'. */
    retrato: 'Retrato de',
    /** Rol y áreas de cada quien, por `id` de src/data/equipo.ts. */
    personas: {
      jesus: { rol: 'Organizador', areas: ['IA', 'Software', 'Hardware'] },
      emilio: { rol: 'Organizador', areas: ['Visión computacional', 'Software'] },
      alonso: { rol: 'Organizador', areas: ['Hardware', 'Mecatrónica'] },
      anna: { rol: 'Organizadora', areas: ['Hardware', 'Electrónica'] },
      julio: { rol: 'Organizador', areas: ['Marketing', 'Diseño'] },
      samanta: { rol: 'Organizadora', areas: ['Marketing', 'Diseño'] },
      edson: { rol: 'Organizador', areas: ['Relaciones'] },
      monica: { rol: 'Organizadora', areas: ['Marketing', 'Diseño'] },
    } as Record<string, { rol: string; areas: string[] }>,
  },

  sede: {
    etiqueta: 'Dónde',
    titulo: 'La sede',
    ciudad: 'Monterrey, Nuevo León',
    nombre: 'Por confirmar',
    nota: 'Estamos cerrando la sede. En cuanto quede confirmada la publicamos aquí y la anunciamos en Instagram.',
    pendiente: 'Sede por confirmar',
    verMapa: 'Ver en el mapa',
    textos: [
      'Estamos cerrando la sede con las opciones que tenemos en la ciudad. En cuanto quede firmada, la publicamos aquí con dirección y mapa, y la anunciamos en nuestras redes.',
      'Lo que sí está definido: es un espacio cerrado en Monterrey, con área de trabajo, área de descanso separada y staff adulto presente toda la noche.',
    ],
    incluye: [
      {
        titulo: 'Mesa y herramienta',
        texto:
          'Espacio de trabajo por equipo, con corriente, cautines y multímetros compartidos.',
      },
      {
        titulo: 'Comida incluida',
        texto:
          'Comida, cena y desayuno para todos los participantes. Avísanos de tus alergias al registrarte.',
      },
      {
        titulo: 'Dónde dormir',
        texto: 'Área de descanso separada y supervisada. Trae tu saco de dormir si puedes.',
      },
    ],
  },

  /** Los cuatro niveles de patrocinio. El orden va con el de src/data/sponsors.ts. */
  tiers: [
    {
      nombre: 'Aliado',
      resumen: 'Tu logo en el sitio y agradecimiento público en redes.',
      beneficios: ['Logo en la página del evento', 'Agradecimiento en nuestras redes sociales'],
    },
    {
      nombre: 'Impulsor',
      resumen: 'Todo lo de Aliado, más tu logo en las playeras y un banner en la sede.',
      beneficios: [
        'Todo lo del nivel Aliado',
        'Logo en las playeras del evento',
        'Banner de tu marca en la sede',
      ],
    },
    {
      nombre: 'Industry',
      resumen: 'Presencia física: tu mesa en el evento y espacio para dar una plática o taller.',
      beneficios: [
        'Todo lo del nivel Impulsor',
        'Mesa propia durante el evento',
        'Espacio para dar una plática o un taller a los participantes',
      ],
    },
    {
      nombre: 'Revolucionario',
      resumen:
        'Apoyo en especie: componentes, comida o sede. El reconocimiento va según lo aportado.',
      beneficios: [
        'Para quien aporta componentes, comida o la sede',
        'Reconocimiento equivalente al valor de lo aportado',
        'No necesitas cubrir todo: una parte también cuenta',
      ],
    },
  ],

  sponsorsResumen: {
    etiqueta: 'Patrocinio',
    titulo: 'Sé parte de esto',
    entradilla:
      'No estamos pidiendo caridad: estamos ofreciendo el primer contacto con la siguiente generación de ingenieros de Monterrey. Hay cuatro formas de sumarse.',
    pitchInicio: 'Aceptamos dinero, componentes, comida o espacio. ',
    pitchFuerte: 'No necesitas patrocinar todo',
    pitchFin: ' — una ayuda chica también cambia el evento.',
    cta: 'Ver el dossier completo',
    cta2: 'Escríbenos',
    confirmados: 'Ya nos apoyan',
  },

  redes: {
    etiqueta: 'Mantente al tanto',
    titulo: 'Dónde encontrarnos',
    entradilla:
      'Todo lo importante lo publicamos en los tres lados. Si tienes una duda que no está en las preguntas frecuentes, escríbenos directo.',
    canales: [
      {
        titulo: 'Instagram de Revolution',
        texto:
          'Los anuncios oficiales: fechas, sede, apertura de registro y todo lo del evento.',
        etiqueta: 'Seguir',
      },
      {
        titulo: 'Instagram de High Coders',
        texto: 'La comunidad detrás del evento. Ahí vive lo que hacemos el resto del año.',
        etiqueta: 'Seguir',
      },
      {
        titulo: 'Grupo de WhatsApp',
        texto:
          'Para dudas rápidas, avisos del día del evento y organizarte con otros participantes.',
        etiqueta: 'Entrar al grupo',
      },
    ],
    correo: {
      titulo: '¿Otra pregunta?',
      texto: 'Escríbenos por correo. Contesta una persona real, normalmente el mismo día.',
    },
  },

  footer: {
    lema1: 'Hackathon de hardware gratuito para preparatoria.',
    /** Se cierra con ' · Monterrey.' */
    lema2: 'Monterrey.',
    secciones: 'Secciones',
    tituloEvento: 'El evento',
    queEs: '¿Qué es REVOLUTION?',
    horario: 'Horario',
    talleres: 'Talleres previos',
    faq: 'Preguntas frecuentes',
    equipo: 'Equipo',
    redesContacto: 'Redes y contacto',
    tituloSiguenos: 'Síguenos',
    instagram: 'Instagram',
    instagramHighCoders: 'Instagram · High Coders',
    whatsapp: 'Grupo de WhatsApp',
    /** Se le pega al nombre de la red cuando el link todavía no existe. */
    proximo: '· pronto',
    infoAdicional: 'Información adicional',
    tituloMas: 'Más',
    patrocina: 'Patrocina el evento',
    legal: 'Información legal',
    padres: 'Para padres y tutores',
    organizadoPor: 'Organizado por',
    nota: 'Hecho por adolescentes, para adolescentes.',
  },

  paginaSponsors: {
    etiquetaPortada: 'Dossier de patrocinio',
    tituloInicio: 'Ayúdanos a pagar el primer ',
    tituloResalte: 'ESP32',
    tituloFin: ' de un futuro ingeniero',
    /** El lema de la portada: se le mete la fecha larga en medio. */
    lemaInicio:
      'REVOLUTION es un hackathon de hardware gratuito para 70 estudiantes de preparatoria en Monterrey. ',
    lemaFin: '. Esto es todo lo que necesitas saber para decidir si te sumas.',
    cta: 'Quiero patrocinar',
    cta2: 'Ver los niveles',
    etiquetaArgumento: 'El argumento',
    tituloArgumento: '¿Por qué deberían patrocinarnos?',
    argumento: [
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
    ],
    etiquetaOfrecemos: 'La contraparte',
    tituloOfrecemos: 'Qué ofrecemos',
    ofrecemos: [
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
    ],
    etiquetaNiveles: 'Cómo sumarte',
    tituloNiveles: 'Los cuatro niveles',
    entradillaNiveles:
      'No manejamos montos fijos: el nivel depende de lo que puedas aportar, en dinero o en especie. Escríbenos y lo acomodamos contigo.',
    etiquetaDestino: 'Transparencia',
    tituloDestino: 'A dónde se va el apoyo',
    destino: [
      'Kits de ESP32 para los equipos',
      'Protoboards, cables y componentes básicos',
      'Baterías LiPo',
      'Material de soldadura: cautines, estaño, puntas',
      'Comida de los participantes durante las 24 horas',
    ],
    tituloComprobamos: 'Te lo comprobamos',
    textoComprobamos:
      'Publicamos la lista de materiales completa con precios, y después del evento te mandamos un reporte con fotos, número de participantes, proyectos terminados y en qué se gastó cada peso. Si algo sobra, te decimos qué pasó con eso.',
    etiquetaGracias: 'Gracias',
    tituloGracias: 'Ya nos apoyan',
    tituloCierre: '¿Le entramos?',
    textoCierre:
      'Escríbenos y te contestamos con la propuesta concreta, el presupuesto y lo que podemos ofrecerte según lo que puedas aportar. Sin compromiso y sin presentaciones de 40 diapositivas.',
  },

  paginaLegal: {
    etiqueta: 'Información legal',
    titulo: 'Permisos, reglas y responsabilidades',
    entradilla:
      'REVOLUTION es un evento con menores de edad que se quedan a dormir en la sede. Esta página existe para que cualquier padre o tutor pueda revisar exactamente en qué está inscribiendo a su hijo antes de firmar nada.',
    avisoEtiqueta: 'Estado de los documentos',
    avisoInicio: 'Los documentos de esta página están ',
    avisoFuerte: 'en borrador',
    avisoFin:
      '. Antes de que se los pidamos a nadie, los va a revisar un adulto responsable de la sede. Publicamos aquí la estructura completa para que sepas desde ahora qué se te va a pedir y qué cubre cada papel.',
    etiquetaPolitica: 'Para padres y tutores',
    tituloPolitica: 'Cómo cuidamos a los participantes',
    entradillaPolitica:
      'Lo que aplica durante las 24 horas del evento, independientemente de lo que diga cada documento.',
    politica: [
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
    ],
    tituloJunta: 'Junta para padres antes del evento',
    textoJunta:
      'Organizamos una videollamada abierta donde nos conoces, ves la sede y preguntas lo que quieras. La fecha la anunciamos junto con la apertura del registro. Si no puedes entrar, escríbenos y lo resolvemos por correo o por teléfono.',
    ctaJunta: 'Escribirnos',
    etiquetaDocumentos: 'Papeles',
    tituloDocumentos: 'Los documentos',
    entradillaDocumentos:
      'Cada documento lista los puntos que cubre. Si algo que te importa no está en la lista, dínoslo y lo agregamos.',
    para: {
      padres: 'Para padres y tutores',
      participantes: 'Para participantes',
      staff: 'Para staff',
    },
    borrador: 'Borrador',
    pronto: 'Pronto',
    descargar: 'Descargar PDF',
    queCubre: 'Qué cubre este documento',
    documentos: [
      {
        titulo: 'Permiso y carta responsiva para padres',
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
      },
      {
        titulo: 'Reglamento del evento',
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
      },
      {
        titulo: 'Deslinde de responsabilidad',
        descripcion:
          'Alcance de la responsabilidad de la organización: qué cubrimos y qué no, durante y fuera del horario del evento.',
        cubre: [
          'Alcance y límites de la supervisión que ofrecemos',
          'Responsabilidad sobre objetos personales del participante',
          'Qué pasa si el participante abandona la sede sin autorización',
          'Traslados de ida y vuelta (no están cubiertos por la organización)',
          'Seguro del evento, si aplica según la sede',
        ],
      },
      {
        titulo: 'Aviso de privacidad',
        descripcion:
          'Qué datos personales pedimos en el registro, para qué los usamos, cuánto tiempo los guardamos y cómo pedir que los borremos.',
        cubre: [
          'Datos que recabamos en el formulario de registro',
          'Finalidad del tratamiento de esos datos',
          'Con quién se comparten (patrocinadores: solo datos agregados, nunca individuales)',
          'Plazo de conservación y proceso de borrado',
          'Derechos ARCO y correo de contacto para ejercerlos',
        ],
      },
    ],
    tituloContacto: '¿Dudas sobre cualquiera de esto?',
    textoContacto:
      'Escríbenos. Preferimos contestar cien preguntas antes del evento que una sola durante.',
  },
};

export default es;
