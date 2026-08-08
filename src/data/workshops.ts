/**
 * TALLERES PREVIOS AL EVENTO
 *
 * Aquí sólo lo que no se traduce: el número, quiénes lo imparten y el link de
 * registro. El título, la descripción, la fecha y la sede de cada taller están
 * en `talleres.lista` de src/i18n/es.ts y src/i18n/en.ts, en este mismo orden.
 *
 * `registro` en `null` → no aparece botón, solo el aviso de que abre pronto.
 */

export type Workshop = {
  numero: number;
  imparten: string[];
  registro: string | null;
};

export const workshops: Workshop[] = [
  { numero: 1, imparten: ['Alonso', 'Anna Antúnez'], registro: null },
  { numero: 2, imparten: ['Emilio', 'Jesús'], registro: null },
  { numero: 3, imparten: ['Alonso', 'Anna Antúnez'], registro: null },
];
