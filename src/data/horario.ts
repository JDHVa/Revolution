/**
 * HORARIO DEL EVENTO
 *
 * Para mover un bloque: cambia la hora y ya. El orden en el arreglo es el
 * orden en que aparecen, así que si mueves algo, muévelo de lugar también.
 *
 * `destacado: true` → el bloque se marca en cobre. Úsalo poco: si todo está
 * destacado, nada lo está. Ahorita son el check-in, la expo y la premiación.
 */

export type Bloque = {
  hora: string;
  titulo: string;
  detalle?: string;
  destacado?: boolean;
};

export type Dia = {
  etiqueta: string;
  fecha: string;
  bloques: Bloque[];
};

export const horario: Dia[] = [
  {
    etiqueta: 'Sábado',
    fecha: '14 de noviembre',
    bloques: [
      {
        hora: '8:30',
        titulo: 'Check-in',
        detalle: 'Registro, gafete y kit de componentes. Trae tu credencial y tu permiso firmado.',
        destacado: true,
      },
      {
        hora: '9:00',
        titulo: 'Apertura',
        detalle: 'Te presentamos el evento, el reto, a los mentores y a nosotros. Dinámicas para formar equipo si llegaste solo.',
      },
      {
        hora: '9:30',
        titulo: 'Arranca el hackathon',
        detalle: 'Seis horas de construir. Los mentores andan dando vueltas todo el tiempo: úsalos.',
      },
      {
        hora: '16:00',
        titulo: 'Comida',
      },
      {
        hora: '18:30',
        titulo: 'Todos de regreso en la sede',
      },
      {
        hora: '20:00',
        titulo: 'Demo abierta',
        detalle: 'Enseña en qué vas, aunque esté a medias. Especialmente si está a medias.',
      },
      {
        hora: '20:40',
        titulo: 'Cena',
      },
      {
        hora: '21:30',
        titulo: 'Actividad de la noche',
        detalle: 'Karaoke, Just Dance o lo que salga. Obligatorio despegarse del protoboard un rato.',
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
    fecha: '15 de noviembre',
    bloques: [
      {
        hora: '8:00',
        titulo: 'Desayuno',
      },
      {
        hora: '9:00',
        titulo: 'Recta final',
        detalle: 'Seis horas para cerrar. A las 15:00 se cierran las manos y no se toca más el proyecto.',
      },
      {
        hora: '15:00',
        titulo: 'Exposición',
        detalle: 'Cada equipo presenta su prototipo frente a todos.',
        destacado: true,
      },
      {
        hora: '16:00',
        titulo: 'Votaciones',
      },
      {
        hora: '17:00',
        titulo: 'Premiación',
        destacado: true,
      },
      {
        hora: '17:30',
        titulo: 'Fotos y despedida',
        detalle: 'Foto grupal en el atardecer. Golden hour, no se negocia.',
      },
    ],
  },
];
