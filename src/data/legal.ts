/**
 * SECCIÓN LEGAL
 *
 * ⚠️ IMPORTANTE — LÉELO ANTES DE PUBLICAR
 *
 * Los textos de esta sección son una PLANTILLA con la estructura y los campos
 * listos, no un documento legal válido. Antes de mandarle cualquiera de estos
 * textos a un padre o madre de familia, necesitan que lo revise un adulto
 * responsable (idealmente alguien de la escuela sede, o un abogado). Están
 * organizando un evento con menores de edad quedándose a dormir: el papeleo
 * tiene que estar bien hecho, no improvisado.
 *
 * Aquí sólo vive lo que no se traduce. El título, la descripción y la lista de
 * lo que cubre cada documento están en `paginaLegal.documentos` de
 * src/i18n/es.ts y en.ts, en este mismo orden.
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
  para: 'padres' | 'participantes' | 'staff';
  archivo: string | null;
  estado: 'borrador' | 'listo';
};

export const documentos: Documento[] = [
  { slug: 'permiso-padres', para: 'padres', archivo: null, estado: 'borrador' },
  { slug: 'reglamento', para: 'participantes', archivo: null, estado: 'borrador' },
  { slug: 'deslinde', para: 'padres', archivo: null, estado: 'borrador' },
  { slug: 'privacidad', para: 'participantes', archivo: null, estado: 'borrador' },
];
