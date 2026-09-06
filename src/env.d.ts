/// <reference path="../.astro/types.d.ts" />

// Astro no trae tipos para video: importar un .mov devuelve su URL (string).
declare module '*.mov' {
  const src: string;
  export default src;
}
