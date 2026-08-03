/**
 * EQUIPO ORGANIZADOR
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
  nombre: string;
  rol: string;
  escuela: string;
  /** Máximo 3. Se muestran como etiquetas. */
  areas: string[];
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
    nombre: 'Jesús',
    rol: 'Organizador',
    escuela: 'Escuela Industrial Álvaro Obregón',
    areas: ['IA', 'Software', 'Hardware'],
    email: 'jdhva.dev@gmail.com',
    foto: 'jesus.jpg',
    // La cara queda arriba a la derecha y lejos: acercamos y recentramos.
    encuadre: { x: 59, y: 44, zoom: 1.8 },
  },
  {
    nombre: 'Emilio',
    rol: 'Organizador',
    escuela: 'Escuela Industrial Álvaro Obregón',
    areas: ['Visión computacional', 'Software'],
    email: null,
    foto: 'emilio.jpg',
    // ⚠️ Foto de cuerpo entero en la playa: la cara ocupa como el 13% del
    // encuadre. Con este acercamiento se centra, pero se ve suave porque
    // estamos ampliando muchísimo. Lo que necesita es otra foto más cerca.
    encuadre: { x: 68, y: 42, zoom: 4.2 },
  },
  {
    nombre: 'Alonso',
    rol: 'Organizador',
    escuela: 'Escuela Industrial Álvaro Obregón',
    areas: ['Hardware', 'Mecatrónica'],
    email: 'alonsobandarico@gmail.com',
    foto: 'alonso.jpg',
    // La foto venía de lado; `girar` la endereza. x/y ya están medidos
    // sobre la foto girada.
    encuadre: { girar: 90, x: 55, y: 52, zoom: 1.6 },
  },
  {
    nombre: 'Anna Antúnez',
    rol: 'Organizadora',
    escuela: 'Tecnológico de Monterrey',
    areas: ['Hardware', 'Electrónica'],
    email: 'annaastrs@gmail.com',
    foto: 'ana.jpg',
    // ⚠️ Es una foto personal, no un retrato para una página pública.
    // El acercamiento deja sólo la cara, que es lo mejor que se puede hacer
    // sin cambiarla — pero lo que corresponde es que Anna elija otra.
    encuadre: { x: 55, y: 33, zoom: 2.4 },
  },
];
