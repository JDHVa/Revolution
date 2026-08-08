/**
 * La forma del contenido la manda `es.ts`. `en.ts` se anota con este tipo,
 * así que si los dos archivos se desincronizan, `npm run check` truena.
 *
 * Se saca con `typeof import(...)` en vez de importar el módulo para que no
 * quede un ciclo entre es.ts / en.ts / index.ts.
 */
export type Contenido = typeof import('./es').default;

export type Idioma = 'en' | 'es';
