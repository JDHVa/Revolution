/**
 * EQUIPO ORGANIZADOR
 *
 * Aquí va lo que no se traduce: nombre, escuela, correo y foto. El rol y las
 * áreas de cada quien están en `equipo.personas` de src/i18n/es.ts y en.ts,
 * buscados por el `id` de abajo — si agregas a alguien aquí, agrégale su
 * entrada en los dos idiomas.
 *
 * `foto`: nombre del archivo dentro de src/assets/equipo/.
 *   Son retratos de cara, se recortan en círculo. Cuadrados, mínimo 320×320.
 *   No te preocupes por el peso: Astro los reescala y los convierte a webp al
 *   compilar. Mientras el archivo no exista, el sitio muestra las iniciales
 *   sobre cobre — así que puedes dejarlo en `null` sin que se rompa nada.
 *
 * `email`: ponlo en `null` si esa persona prefiere no publicarlo; la tarjeta
 *   simplemente no muestra el contacto.
 */

export type Persona = {
  /** La llave para buscar su rol y sus áreas en los archivos de idioma. */
  id: string;
  nombre: string;
  escuela: string;
  email: string | null;
  foto: string | null;
  /**
   * Ajuste fino del recorte, para fotos donde la cara no quedó al centro.
   *
   *   girar → grados, para fotos que salieron de lado (90, 180, 270).
   *   x, y  → dónde está la cara, en % (50/50 = justo al centro).
   *           Si la cara está arriba a la derecha, algo como x:60, y:35.
   *   zoom  → 1 es la foto completa. 1.8 se acerca casi al doble.
   *
   * Ojo: si usas `girar`, x/y se miden sobre la foto **ya girada**.
   *
   * Si no lo pones, se usa la foto completa centrada. Ajústalo mirando el
   * resultado: primero endereza, luego sube el zoom hasta que la cara llene
   * el círculo, y al final mueve x/y hasta centrarla.
   */
  encuadre?: { x?: number; y?: number; zoom?: number; girar?: number };
};

export const equipo: Persona[] = [
  {
    id: 'jesus',
    nombre: 'Jesús',
    escuela: 'Escuela Industrial Álvaro Obregón',
    email: 'jdhva.dev@gmail.com',
    foto: 'jesus.jpg',
    // La cara queda arriba a la derecha y lejos: acercamos y recentramos.
    encuadre: { x: 59, y: 44, zoom: 1.8 },
  },
  {
    id: 'emilio',
    nombre: 'Emilio',
    escuela: 'Escuela Industrial Álvaro Obregón',
    email: 'pikachumilo52@gmail.com',
    foto: 'emilio.jpg',
    // ⚠️ Foto de cuerpo entero en la playa: la cara ocupa como el 13% del
    // encuadre. Con este acercamiento se centra, pero se ve suave porque
    // estamos ampliando muchísimo. Lo que necesita es otra foto más cerca.
    encuadre: { x: 68, y: 42, zoom: 4.2 },
  },
  {
    id: 'alonso',
    nombre: 'Alonso',
    escuela: 'Escuela Industrial Álvaro Obregón',
    email: 'alonsobandarico@gmail.com',
    foto: 'alonso.jpg',
    // La foto venía de lado; `girar` la endereza. x/y ya están medidos
    // sobre la foto girada.
    encuadre: { girar: 90, x: 55, y: 52, zoom: 1.6 },
  },
  {
    id: 'anna',
    nombre: 'Anna Antúnez',
    escuela: 'Tecnológico de Monterrey',
    email: 'annaastrs@gmail.com',
    foto: 'ana.jpg',
    // ⚠️ Es una foto personal, no un retrato para una página pública.
    // El acercamiento deja sólo la cara, que es lo mejor que se puede hacer
    // sin cambiarla — pero lo que corresponde es que Anna elija otra.
    encuadre: { x: 55, y: 33, zoom: 2.4 },
  },
  {
    id: 'julio',
    nombre: 'Julio "Kayko"',
    escuela: 'Escuela Industrial Álvaro Obregón',
    email: 'alexander16esquivel@gmail.com',
    foto: 'julio.webp',
    encuadre: { x: 48, y: 52, zoom: 1.9 },
  },
  {
    id: 'samanta',
    nombre: 'Samanta',
    escuela: 'Escuela Industrial Álvaro Obregón',
    email: 'samysacuedog@gmail.com',
    foto: 'samanta.jpg',
    // Selfie horizontal con la cara arriba a la izquierda: hay que acercar
    // bastante para que llene el círculo.
    encuadre: { x: 41, y: 29, zoom: 2.3 },
  },
  {
    id: 'edson',
    nombre: 'Edson',
    escuela: 'PrepaTec',
    email: 'edcaslop09@gmail.com',
    foto: 'edson.jpg',
    // Selfie de cuerpo entero frente al espejo: la cara ocupa poco del
    // encuadre, se necesita bastante acercamiento.
    encuadre: { x: 47, y: 23, zoom: 2.9 },
  },
];
