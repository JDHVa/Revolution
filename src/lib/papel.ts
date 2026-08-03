/**
 * PAPEL PICADO — geometría compartida.
 *
 * Dos patrones que se usan en distintos lugares del sitio:
 *
 *   banderines()  → los banderines que enmarcan la sección de FAQ
 *   divisor()     → la tira delgada que separa una pregunta de otra
 *
 * Ambos son data-URI de SVG para usarse como `background-image`: cero
 * peticiones, cero JavaScript, y se repiten solos a cualquier ancho.
 *
 * Todo es de líneas rectas a propósito — el papel picado se corta con
 * cincel, así que angular es lo fiel. `fill-rule='evenodd'` hace que los
 * calados sean huecos de verdad y no manchas de color.
 *
 * Los colores van escritos aquí porque un SVG embebido no puede leer
 * variables CSS. Si cambias la paleta en global.css, cámbialos también.
 */

const COBRE = '%23C4622D';
const AGAVE = '%232F7D62';
const TALAVERA = '%232B5FA8';
const CORDEL = '%232A211C';

const svg = (ancho: number, alto: number, cuerpo: string) =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${ancho}' height='${alto}' viewBox='0 0 ${ancho} ${alto}'%3E${cuerpo}%3C/svg%3E`;

/** Un banderín colgando del cordel, en coordenadas locales de 80 × 76. */
const banderin = (x: number, color: string) => {
  const p = (n: number) => n + x;
  return (
    `%3Cpath fill-rule='evenodd' d='` +
    // cuerpo, del cordel hasta el fleco
    `M${p(3)} 5 H${p(77)} V52 ` +
    // fleco de picos, de derecha a izquierda
    `L${p(68)} 66 L${p(59)} 52 L${p(50)} 66 L${p(41)} 52 ` +
    `L${p(32)} 66 L${p(23)} 52 L${p(14)} 66 L${p(3)} 52 Z ` +
    // calado central: rombo grande
    `M${p(40)} 14 L${p(52)} 26 L${p(40)} 38 L${p(28)} 26 Z ` +
    // calados laterales
    `M${p(16)} 20 L${p(22)} 26 L${p(16)} 32 L${p(10)} 26 Z ` +
    `M${p(64)} 20 L${p(70)} 26 L${p(64)} 32 L${p(58)} 26 Z ` +
    // hilera de picados bajo el rombo
    `M${p(26)} 42 L${p(30)} 46 L${p(26)} 50 L${p(22)} 46 Z ` +
    `M${p(40)} 42 L${p(44)} 46 L${p(40)} 50 L${p(36)} 46 Z ` +
    `M${p(54)} 42 L${p(58)} 46 L${p(54)} 50 L${p(50)} 46 Z` +
    `' fill='${color}'/%3E`
  );
};

/**
 * Tres banderines de distinto color colgando de un cordel.
 * Un solo color se lee como cenefa; el papel picado de verdad es multicolor.
 */
export const banderines = () =>
  svg(
    240,
    76,
    `%3Cpath d='M0 3 H240' stroke='${CORDEL}' stroke-width='2.5'/%3E` +
      banderin(0, COBRE) +
      banderin(80, AGAVE) +
      banderin(160, TALAVERA)
  );

/**
 * Divisor: lo que separa una pregunta de otra en el FAQ.
 *
 * Son los mismos banderines pero en miniatura, colgando de un hilo: papelitos
 * triangulares con un rombo calado, separados entre sí.
 *
 * La clave es que pese poco. Se repite ocho veces en la sección, así que una
 * tira sólida de color convierte el FAQ en una bandera de rayas y las
 * preguntas se pierden. De ahí el aire entre papelito y papelito, la altura
 * chica y el `fill-opacity` — tiene que leerse como papel cortado sin
 * competir con el texto.
 */
export const divisor = () => {
  /**
   * Un papelito triangular colgando del hilo.
   * A menos de ~20 de ancho dejan de leerse como papelitos y la tira parece
   * un zigzag serrado, así que este es más o menos el mínimo.
   */
  const papelito = (x: number, color: string) => {
    const p = (n: number) => n + x;
    return (
      `%3Cpath fill-rule='evenodd' fill-opacity='0.72' d='` +
      // triángulo colgando
      `M${p(2)} 4 L${p(24)} 4 L${p(13)} 18 Z ` +
      // rombo calado
      `M${p(13)} 7 L${p(16)} 10 L${p(13)} 13 L${p(10)} 10 Z` +
      `' fill='${color}'/%3E`
    );
  };

  return svg(
    84,
    20,
    // el hilo del que cuelgan
    `%3Cpath d='M0 3 H84' stroke='${CORDEL}' stroke-opacity='0.3' stroke-width='1.5'/%3E` +
      papelito(0, COBRE) +
      papelito(28, AGAVE) +
      papelito(56, TALAVERA)
  );
};
