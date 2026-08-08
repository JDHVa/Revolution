/**
 * TEXTOS DEL SITIO — INGLÉS
 *
 * Gemelo de `es.ts`. Mismas llaves, mismo orden. El tipo `Contenido` sale de
 * es.ts, así que si aquí falta algo o sobra, `npm run check` lo marca.
 */
import type { Contenido } from './tipos';

const en: Contenido = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    tagline: 'Hardware hackathon · Monterrey',
    descripcion:
      'A free hardware hackathon for high school students in Monterrey. 24 hours, December 5–6. Components, food and mentors included. No experience needed.',
    tituloInicio: 'Home',
    tituloSponsors: 'Sponsorship',
    descripcionSponsors:
      'Sponsor REVOLUTION: a free hardware hackathon for 70 high school students in Monterrey. Four levels of support, from components to a presence at the event.',
    tituloLegal: 'Legal information',
    descripcionLegal:
      'Permission slips, liability waivers, event rules and minors policy for REVOLUTION. Information for participants’ parents and guardians.',
  },

  fechas: {
    etiqueta: 'December 5–6',
    etiquetaLarga: 'Saturday, December 5 and Sunday, December 6, 2026',
  },

  ui: {
    saltar: 'Skip to content',
    abrirMenu: 'Open menu',
    cerrarMenu: 'Close menu',
    navPrincipal: 'Main navigation',
    navMovil: 'Mobile navigation',
    irAlInicio: 'REVOLUTION — go to home',
    registrarme: 'Sign me up',
    registroPronto: 'Registration soon',
    registroAbrePronto: 'Registration opens soon',
    registroTitulo: 'Registration is not open yet',
    disponiblePronto: 'Available soon',
    porConfirmar: 'To be confirmed',
    idioma: {
      codigo: 'ES',
      aria: 'Ver esta página en español',
    },
  },

  nav: {
    queEs: 'What is it?',
    horario: 'Schedule',
    talleres: 'Workshops',
    faq: 'FAQ',
    equipo: 'Team',
    patrocinio: 'Sponsorship',
    legal: 'Legal information',
  },

  wordmark: {
    bajada: 'Hardware hackathon · Monterrey',
  },

  hero: {
    ubicacion: 'Monterrey, Nuevo León',
    sr: 'REVOLUTION — hardware hackathon in Monterrey',
    lema: '24 hours to build something that actually works.',
    lemaFuerte: 'Free, for high schoolers, no experience needed.',
    cta2: 'What is this',
    cifras: ['free', 'spots', 'hours', 'years old'],
  },

  queEs: {
    etiqueta: 'The event',
    titulo: 'What is Revolution?',
    entradilla:
      'REVOLUTION is a free hardware hackathon for high school students in Monterrey. Twenty-four hours to build a working prototype, even if you have never touched a breadboard.',
    parrafos: [
      'It is being put together by a group of teenagers from Hack Club Monterrey, because it is the event we wish we had. This city has talent to spare, but almost every tech event here is for university students or for whoever can already afford the components. Anyone who wants to learn electronics and robotics while still in high school gets left out.',
      'So we decided to do it ourselves. Everything you need to build, we bring: hardware, food, mentors and a place to work. You bring the drive.',
    ],
    reto: {
      etiqueta: 'The challenge',
      pregunta: 'What would have helped ______ during the Mexican Revolution?',
      explicacion:
        'You fill in the blank with whoever you want — a soldadera, a telegraph operator, a train engineer, your great-grandmother — and build the device that would have changed their day. It is open enough to get creative with, and specific enough that nobody ends up staring at an empty table.',
    },
    puntos: [
      {
        titulo: 'No experience needed',
        texto:
          'Seriously. We run three free workshops the month before, so you show up already knowing the basics of soldering, electronics and programming.',
      },
      {
        titulo: 'Actually free',
        texto:
          'Components, food and a place to stay, all included. No fine print, no "recovery fee".',
      },
      {
        titulo: 'You keep what you build',
        texto:
          'The prototype is yours. Win or not, you leave with something you made with your own hands, and it works.',
      },
    ],
  },

  horario: {
    etiqueta: 'Program',
    titulo: '24 hours, hour by hour',
    entradilla:
      'This is how Saturday, December 5 and Sunday, December 6, 2026 look. Times may shift a little, but the start and the finish are fixed.',
    dias: [
      {
        etiqueta: 'Saturday',
        fecha: 'December 5',
        bloques: [
          {
            hora: '8:30',
            titulo: 'Check-in',
            detalle:
              'Registration, badge and component kit. Bring your school ID and your signed permission slip.',
            destacado: true,
          },
          {
            hora: '9:00',
            titulo: 'Opening',
            detalle:
              'We introduce the event, the challenge, the mentors and ourselves. Icebreakers to form teams if you came alone.',
          },
          {
            hora: '9:30',
            titulo: 'The hackathon starts',
            detalle:
              'Six hours of building. Mentors are walking around the whole time: use them.',
          },
          { hora: '16:00', titulo: 'Lunch' },
          { hora: '18:30', titulo: 'Everyone back at the venue' },
          {
            hora: '20:00',
            titulo: 'Open demo',
            detalle:
              'Show what you have, even if it is half finished. Especially if it is half finished.',
          },
          { hora: '20:40', titulo: 'Dinner' },
          {
            hora: '21:30',
            titulo: 'Night activity',
            detalle:
              'Karaoke, Just Dance or whatever comes up. Stepping away from the breadboard for a while is mandatory.',
          },
          {
            hora: '23:30',
            titulo: 'Quiet hours',
            detalle: 'Lights and volume go down. You can keep working, but quietly.',
          },
        ],
      },
      {
        etiqueta: 'Sunday',
        fecha: 'December 6',
        bloques: [
          { hora: '8:00', titulo: 'Breakfast' },
          {
            hora: '9:00',
            titulo: 'Final stretch',
            detalle:
              'Six hours to wrap up. At 15:00 hands off — nobody touches their project after that.',
          },
          {
            hora: '15:00',
            titulo: 'Showcase',
            detalle: 'Every team presents its prototype in front of everyone.',
            destacado: true,
          },
          { hora: '16:00', titulo: 'Voting' },
          { hora: '17:00', titulo: 'Awards', destacado: true },
          {
            hora: '17:30',
            titulo: 'Photos and goodbyes',
            detalle: 'Group photo at sunset. Golden hour, non-negotiable.',
          },
        ],
      },
    ],
  },

  talleres: {
    etiqueta: 'Before the event',
    titulo: 'Three free workshops',
    entradilla:
      'The month before, we run three open workshops so you arrive in December knowing what to do. They are free, and you do not need to be registered for the hackathon to attend.',
    numero: 'Workshop',
    cuando: 'When',
    donde: 'Where',
    imparten: 'Taught by',
    unirNombres: ' and ',
    apartar: 'Save my spot',
    lista: [
      {
        titulo: 'Intro to hackathons and robotics',
        descripcion:
          'What a hackathon is, how one works from the inside, and what to expect from REVOLUTION. We answer every question and do a first intro to robotics.',
        cuando: '3 weeks before the event · November',
        fecha: null,
        sede: 'Horno 3 (to be confirmed)',
      },
      {
        titulo: 'Intro to software',
        descripcion:
          'The minimum programming you need to make your hardware do something. No experience required, we start from zero.',
        cuando: '4 weeks before the event · November',
        fecha: null,
        sede: null,
      },
      {
        titulo: 'Soldering and intro to hardware',
        descripcion:
          'A hands-on soldering workshop: iron, solder and your first joints. Plus a first look at KiCad so you see how a board is designed.',
        cuando: '2 weeks before the event · November',
        fecha: null,
        sede: null,
      },
    ],
  },

  faq: {
    etiqueta: 'Questions',
    titulo: 'Frequently asked questions',
    preguntas: [
      {
        pregunta: 'What is a hackathon?',
        respuesta:
          'An event where teams race the clock to build a working prototype. At REVOLUTION the prototype is hardware: circuits, sensors, things that light up and move. You arrive with an idea, you leave with something that exists.',
        abierta: true,
      },
      {
        pregunta: 'Do I need a team?',
        respuesta:
          'Teams are 3 to 4 people. You can show up with your team already formed, or put one together at the event: the first activity on Saturday is icebreakers so people meet and pair up. Nobody is left on their own.',
      },
      {
        pregunta: 'Does it cost anything?',
        respuesta:
          '<strong>No. It is 100% free, 100% not fake.</strong> That includes the components, the food, the mentors and a place to stay during the event. All you have to do is show up and give it your best.',
      },
      {
        pregunta: 'How long is it?',
        respuesta:
          'The event runs December 5 and 6, for 24 hours. You can see the full hour-by-hour breakdown in {horario}.',
      },
      {
        pregunta: 'How do I apply?',
        respuesta:
          'You fill out the registration form at {registro}. It is short, and you need no previous experience and no portfolio: we just want to know who you are and why you are into this.',
      },
      {
        pregunta: 'What should I bring?',
        respuesta:
          '<strong>Required:</strong> your school ID and your signed permission slip. <strong>Strongly recommended:</strong> a sleeping bag, and your hygiene kit — deodorant, toothbrush and, if you want, perfume. It is 24 hours with 90 people in the same room; your teammates will thank you. If you have a laptop, bring it. We provide the components.',
      },
      {
        pregunta: 'Where do I get updates before and during the event?',
        respuesta:
          'Follow us on {instagram} for announcements, and join the {whatsapp} for day-to-day questions. Everything important gets posted in both places.',
      },
      {
        pregunta: 'Who can attend?',
        respuesta:
          'Students currently enrolled in <strong>high school</strong>, ages 15 to 18. If you have already turned 18, you need proof that you are still enrolled: Kardex, SIASE, IRIS or any certificate from your school.',
      },
      {
        pregunta: 'I have another question',
        respuesta:
          'Write to us at {email} or DM us on {instagram}. We answer fast, honestly.',
      },
    ],
  },

  enlaces: {
    registro: 'the registration form',
    instagram: 'Instagram',
    highcoders: 'the High Coders Instagram',
    whatsapp: 'WhatsApp group',
    horario: 'the full schedule',
    legal: 'the legal section',
    sponsors: 'the sponsorship page',
    pronto: '(soon)',
    prontoTitulo: 'Available soon',
  },

  equipo: {
    etiqueta: 'Who we are',
    titulo: 'The organizing team',
    entradilla:
      'We are high school and university students from Monterrey. None of us has organized a hackathon before — we are learning as we go, the same way you are going to learn to solder.',
    retrato: 'Portrait of',
    personas: {
      jesus: { rol: 'Organizer', areas: ['AI', 'Software', 'Hardware'] },
      emilio: { rol: 'Organizer', areas: ['Computer vision', 'Software'] },
      alonso: { rol: 'Organizer', areas: ['Hardware', 'Mechatronics'] },
      anna: { rol: 'Organizer', areas: ['Hardware', 'Electronics'] },
    },
  },

  sede: {
    etiqueta: 'Where',
    titulo: 'The venue',
    ciudad: 'Monterrey, Nuevo León',
    nombre: 'To be confirmed',
    nota: 'We are still locking down the venue. As soon as it is confirmed we will post it here and announce it on Instagram.',
    pendiente: 'Venue to be confirmed',
    verMapa: 'Open in maps',
    textos: [
      'We are closing the venue with the options we have in the city. As soon as it is signed, we will post it here with the address and a map, and announce it on our socials.',
      'What is already settled: it is an indoor space in Monterrey, with a work area, a separate rest area, and adult staff present all night.',
    ],
    incluye: [
      {
        titulo: 'Bench and tools',
        texto:
          'A workspace per team, with power, plus shared soldering irons and multimeters.',
      },
      {
        titulo: 'Food included',
        texto:
          'Lunch, dinner and breakfast for every participant. Tell us about your allergies when you register.',
      },
      {
        titulo: 'Somewhere to sleep',
        texto: 'A separate, supervised rest area. Bring your sleeping bag if you can.',
      },
    ],
  },

  tiers: [
    {
      nombre: 'Ally',
      resumen: 'Your logo on the site and a public thank-you on our socials.',
      beneficios: ['Logo on the event page', 'Thank-you post on our social media'],
    },
    {
      nombre: 'Booster',
      resumen: 'Everything in Ally, plus your logo on the shirts and a banner at the venue.',
      beneficios: [
        'Everything in the Ally level',
        'Logo on the event shirts',
        'Your brand’s banner at the venue',
      ],
    },
    {
      nombre: 'Industry',
      resumen: 'Physical presence: your own table at the event and a slot for a talk or workshop.',
      beneficios: [
        'Everything in the Booster level',
        'Your own table during the event',
        'A slot to give a talk or a workshop to participants',
      ],
    },
    {
      nombre: 'Revolutionary',
      resumen:
        'In-kind support: components, food or the venue. Recognition scales with what you contribute.',
      beneficios: [
        'For anyone contributing components, food or the venue',
        'Recognition equivalent to the value contributed',
        'You do not have to cover it all: a part counts too',
      ],
    },
  ],

  sponsorsResumen: {
    etiqueta: 'Sponsorship',
    titulo: 'Be part of this',
    entradilla:
      'We are not asking for charity: we are offering first contact with Monterrey’s next generation of engineers. There are four ways to join in.',
    pitchInicio: 'We accept money, components, food or space. ',
    pitchFuerte: 'You do not have to sponsor everything',
    pitchFin: ' — a small hand changes the event too.',
    cta: 'See the full dossier',
    cta2: 'Write to us',
    confirmados: 'Already supporting us',
  },

  redes: {
    etiqueta: 'Stay in the loop',
    titulo: 'Where to find us',
    entradilla:
      'Everything that matters gets posted in all three places. If you have a question that is not in the FAQ, write to us directly.',
    canales: [
      {
        titulo: 'Revolution on Instagram',
        texto:
          'The official announcements: dates, venue, registration opening and everything about the event.',
        etiqueta: 'Follow',
      },
      {
        titulo: 'High Coders on Instagram',
        texto: 'The community behind the event. That is where what we do the rest of the year lives.',
        etiqueta: 'Follow',
      },
      {
        titulo: 'WhatsApp group',
        texto:
          'For quick questions, day-of announcements and coordinating with other participants.',
        etiqueta: 'Join the group',
      },
    ],
    correo: {
      titulo: 'Another question?',
      texto: 'Send us an email. A real person answers, usually the same day.',
    },
  },

  footer: {
    lema1: 'A free hardware hackathon for high schoolers.',
    lema2: 'Monterrey.',
    secciones: 'Sections',
    tituloEvento: 'The event',
    queEs: 'What is REVOLUTION?',
    horario: 'Schedule',
    talleres: 'Pre-event workshops',
    faq: 'Frequently asked questions',
    equipo: 'Team',
    redesContacto: 'Socials and contact',
    tituloSiguenos: 'Follow us',
    instagram: 'Instagram',
    instagramHighCoders: 'Instagram · High Coders',
    whatsapp: 'WhatsApp group',
    proximo: '· soon',
    infoAdicional: 'Additional information',
    tituloMas: 'More',
    patrocina: 'Sponsor the event',
    legal: 'Legal information',
    padres: 'For parents and guardians',
    organizadoPor: 'Organized by',
    nota: 'Made by teenagers, for teenagers.',
  },

  paginaSponsors: {
    etiquetaPortada: 'Sponsorship dossier',
    tituloInicio: 'Help us pay for a future engineer’s first ',
    tituloResalte: 'ESP32',
    tituloFin: '',
    lemaInicio:
      'REVOLUTION is a free hardware hackathon for 70 high school students in Monterrey. ',
    lemaFin: '. This is everything you need to know to decide whether you are in.',
    cta: 'I want to sponsor',
    cta2: 'See the levels',
    etiquetaArgumento: 'The case',
    tituloArgumento: 'Why should you sponsor us?',
    argumento: [
      {
        titulo: 'We are teenagers building the event we wish we had',
        texto:
          'Monterrey has talent to spare, but almost every hackathon here is for university students. Do you really have to wait until college — or until you can afford the components — to learn how to build? We decided you do not, and we are putting this together on our own.',
      },
      {
        titulo: 'We are not promising to turn out engineers in two days',
        texto:
          'We are promising to plant a seed: the urge to learn, and the certainty that they can build something real. It is for high schoolers with no previous experience, and we provide hardware, food, mentors and space so nobody is left out for not being able to pay.',
      },
      {
        titulo: 'Your brand would not just be a banner',
        texto:
          'You would be paying for a future engineer’s first ESP32. That is literally the impact: a 16-year-old who had never soldered, walking out of the event with something that works and the idea that this is for them.',
      },
    ],
    etiquetaOfrecemos: 'What you get',
    tituloOfrecemos: 'What we offer',
    ofrecemos: [
      {
        titulo: 'Real visibility',
        texto:
          'Logo, banners, socials and shirts in front of 70 participants, 20 staff and all of their families.',
      },
      {
        titulo: 'Early talent',
        texto:
          'Meet Monterrey’s next generation of engineers before anyone else, right as they are starting out.',
      },
      {
        titulo: 'Measurable impact',
        texto:
          'We tell you exactly what your support paid for: a public bill of materials and a post-event report with photos and numbers.',
      },
      {
        titulo: 'Flexibility',
        texto:
          'We accept money, components, food or space. You do not have to sponsor everything — a small hand goes a long way.',
      },
    ],
    etiquetaNiveles: 'How to join',
    tituloNiveles: 'The four levels',
    entradillaNiveles:
      'We do not work with fixed amounts: the level depends on what you can contribute, in money or in kind. Write to us and we will work it out with you.',
    etiquetaDestino: 'Transparency',
    tituloDestino: 'Where the support goes',
    destino: [
      'ESP32 kits for the teams',
      'Breadboards, wires and basic components',
      'LiPo batteries',
      'Soldering supplies: irons, solder, tips',
      'Participants’ food during the 24 hours',
    ],
    tituloComprobamos: 'We show you the receipts',
    textoComprobamos:
      'We publish the full bill of materials with prices, and after the event we send you a report with photos, participant count, finished projects and where every peso went. If anything is left over, we tell you what happened to it.',
    etiquetaGracias: 'Thank you',
    tituloGracias: 'Already supporting us',
    tituloCierre: 'Are we doing this?',
    textoCierre:
      'Write to us and we will come back with a concrete proposal, the budget and what we can offer based on what you can contribute. No strings, and no 40-slide decks.',
  },

  paginaLegal: {
    etiqueta: 'Legal information',
    titulo: 'Permissions, rules and responsibilities',
    entradilla:
      'REVOLUTION is an event where minors sleep over at the venue. This page exists so any parent or guardian can review exactly what they are signing their kid up for before signing anything.',
    avisoEtiqueta: 'Status of the documents',
    avisoInicio: 'The documents on this page are ',
    avisoFuerte: 'drafts',
    avisoFin:
      '. Before we ask anyone to sign them, a responsible adult from the venue will review them. We are publishing the full structure here so you know from now what will be asked of you and what each paper covers.',
    etiquetaPolitica: 'For parents and guardians',
    tituloPolitica: 'How we look after participants',
    entradillaPolitica:
      'What applies during the 24 hours of the event, regardless of what each document says.',
    politica: [
      {
        titulo: 'Nobody gets in without a signed permission slip',
        texto:
          'Saturday check-in includes reviewing the permission slip signed by the parent or guardian, together with the participant’s school ID. Without both documents we cannot let them in, even if they registered.',
      },
      {
        titulo: 'Controlled entry and exit',
        texto:
          'Once inside, a participant cannot leave the venue without their guardian’s authorization. If they need to leave before the end, the guardian has to let us know and pick them up in person.',
      },
      {
        titulo: 'Staff awake all night',
        texto:
          'During quiet hours there are always adults and staff awake at the venue. Rest areas are separate and supervised.',
      },
      {
        titulo: 'Open line to parents',
        texto:
          'Before the event we hold a video call so parents can meet us, see the venue and ask whatever they want. During the event there is a direct contact number available 24 hours.',
      },
    ],
    tituloJunta: 'Parents’ meeting before the event',
    textoJunta:
      'We hold an open video call where you meet us, see the venue and ask whatever you want. We announce the date along with the opening of registration. If you cannot make it, write to us and we will sort it out by email or phone.',
    ctaJunta: 'Write to us',
    etiquetaDocumentos: 'Paperwork',
    tituloDocumentos: 'The documents',
    entradillaDocumentos:
      'Each document lists the points it covers. If something you care about is not on the list, tell us and we will add it.',
    para: {
      padres: 'For parents and guardians',
      participantes: 'For participants',
      staff: 'For staff',
    },
    borrador: 'Draft',
    pronto: 'Soon',
    descargar: 'Download PDF',
    queCubre: 'What this document covers',
    documentos: [
      {
        titulo: 'Permission slip and liability release for parents',
        descripcion:
          'The document a parent or guardian signs to authorize a minor’s participation. It is mandatory: without it, the participant cannot enter the event.',
        cubre: [
          'Explicit authorization to participate and to stay overnight at the venue',
          'Emergency contact details (two numbers)',
          'Participant’s allergies, medical conditions and medication',
          'Authorization for emergency medical care',
          'Image release (event photos and video)',
          'Acknowledgement of the entry and exit policy',
        ],
      },
      {
        titulo: 'Event rules',
        descripcion:
          'The rules for living together during the 24 hours. They are read out at Saturday’s opening and accepted at registration.',
        cubre: [
          'Code of conduct and zero tolerance for harassment',
          'Quiet hours and rest schedule',
          'Responsible use of tools: soldering irons, power supplies, LiPo batteries',
          'Ban on alcohol, substances and unauthorized departures',
          'Challenge rules: what you may and may not use',
          'Consequences of breaking the rules',
        ],
      },
      {
        titulo: 'Liability waiver',
        descripcion:
          'The scope of the organization’s responsibility: what we cover and what we do not, during and outside event hours.',
        cubre: [
          'Scope and limits of the supervision we provide',
          'Responsibility for the participant’s personal belongings',
          'What happens if a participant leaves the venue without authorization',
          'Travel to and from the venue (not covered by the organization)',
          'Event insurance, if applicable depending on the venue',
        ],
      },
      {
        titulo: 'Privacy notice',
        descripcion:
          'What personal data we ask for at registration, what we use it for, how long we keep it and how to ask us to delete it.',
        cubre: [
          'Data we collect in the registration form',
          'Purpose of processing that data',
          'Who it is shared with (sponsors: aggregate data only, never individual)',
          'Retention period and deletion process',
          'ARCO rights and the contact email to exercise them',
        ],
      },
    ],
    tituloContacto: 'Questions about any of this?',
    textoContacto:
      'Write to us. We would rather answer a hundred questions before the event than one during it.',
  },
};

export default en;
