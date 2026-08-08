# REVOLUTION

Sitio del hackathon de hardware de [Hack Club Monterrey](https://hackclub.com).
5 y 6 de diciembre de 2026 · gratis · para preparatoria.

Astro + Tailwind. Estático, sin backend, sin base de datos.

---

## Correrlo

```bash
npm install
npm run dev      # http://localhost:4321
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local con recarga automática |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve el `dist/` ya generado — pruébalo aquí antes de subir |
| `npm run check` | Revisa errores de tipos |

---

## Cambiar el contenido

**Casi nunca necesitas tocar un componente.** El contenido está partido en dos:

**El texto** — todo lo que se lee en la página — vive en `src/i18n/`:

| Archivo | Qué contiene |
|---|---|
| `es.ts` | **Todos los textos en español.** Manda la forma de los dos idiomas |
| `en.ts` | Los mismos textos en inglés, con exactamente las mismas llaves |

**Los datos que no se traducen** (links, correos, fechas, fotos) viven en
`src/data/`:

| Archivo | Qué contiene |
|---|---|
| `site.ts` | **Empieza aquí.** Fechas, links de registro/redes, correos |
| `workshops.ts` | Quién imparte cada taller y su link de registro |
| `equipo.ts` | Los organizadores: nombre, escuela, correo, foto |
| `sponsors.ts` | El color de cada nivel y los patrocinadores confirmados |
| `legal.ts` | Estado y PDF de cada documento legal |

Cada archivo trae comentarios explicando qué hace cada campo.

### Los dos idiomas

El sitio se publica en inglés y en español, con una url para cada uno:

```
inglés (por defecto)   /            /sponsors        /legal
español                /es/         /es/sponsors     /es/legal
```

El botón 🌐 del nav es un link a la misma página del otro lado — no hay
JavaScript de por medio, así que la url se puede compartir y Google indexa las
dos versiones.

**Regla de oro: `es.ts` y `en.ts` se editan juntos.** El tipo de `en.ts` sale
de `es.ts`, así que si agregas algo en uno y se te olvida el otro,
`npm run check` truena y te dice qué falta.

Las listas que se reparten entre `src/data/` y `src/i18n/` (talleres, niveles
de patrocinio, documentos legales) se emparejan **por orden**: el primer taller
de `workshops.ts` es el primero de `talleres.lista`. Si mueves uno, muévelo en
los tres archivos. El equipo es la excepción: se empareja por el `id` de cada
persona.

### Cosas que están pendientes

El sitio muestra un estado honesto ("Sede por confirmar", "El registro abre
pronto") en vez de links muertos. Para activarlos, en `src/data/site.ts`:

```ts
registro: { url: '#', pendiente: true }
//        ↓ cuando tengas el formulario
registro: { url: 'https://forms.gle/...' }   // quita `pendiente`
```

Igual con la sede: la dirección y el mapa van en `site.ts`, el nombre del lugar
en `es.ts` / `en.ts` (`sede.nombre`), y luego cambias `confirmado: false` a
`true`.

**Falta por llenar:** sede, link del formulario, grupo de WhatsApp, correo de
Emilio, fotos del equipo, fechas y sedes de los talleres, logos de
patrocinadores, y la imagen de Open Graph (`public/media/og.png`).

### Links dentro de las respuestas del FAQ

En las respuestas del FAQ (dentro de `es.ts` y `en.ts`) escribes un token y el
sitio lo convierte en el link correcto:

```
{registro}  {instagram}  {highcoders}  {whatsapp}  {email}  {horario}
```

Así nunca se desincronizan de `site.ts`. Si el link todavía no existe, sale
como texto marcado "(pronto)" en vez de un link roto.

### Imágenes

- **Equipo** → `src/assets/equipo/` (ojo: en `src/`, no en `public/`).
  Cuadradas, mínimo 320×320. Astro las reescala y las convierte a webp sola,
  así que no importa que el archivo original pese. El nombre va en
  `equipo.ts`; si lo dejas en `null`, sale un círculo con las iniciales.

  Se muestran en un círculo chico, así que la cara tiene que **llenar el
  encuadre**. Si la foto es de lejos o la cara quedó de lado, ajústalo:

  ```ts
  encuadre: { x: 59, y: 44, zoom: 1.8 }
  //          └ dónde está la cara en %   └ qué tanto acercar
  ```

  Con una foto bien tomada no hace falta: bórralo y ya.
- **Patrocinadores** → `public/media/sponsors/`, y el objeto en `sponsors.ts`.
- **PDFs legales** → `public/legal/`, y la ruta en `legal.ts`.

---

## Diseño

La paleta y la tipografía viven en `src/styles/global.css`. Tres reglas que
conviene respetar:

1. **Un solo acento por sección.** El rosa es sólo para el botón de registro.
2. **Los tres cobres no son intercambiables.** `--color-cobre` sobre fondo
   claro sólo aguanta texto grande; para texto chico va `--color-cobre-2`, y
   sobre fondo oscuro va `--color-cobre-claro`. Están calibrados para pasar
   contraste AA — si los mezclas, se rompe la accesibilidad.
3. **Nada de degradados, glow ni animaciones de adorno.** La identidad es de
   cartel impreso; el movimiento se reserva para la concha de la carga.

Los adornos (`src/components/deco/`) son decorativos y van ocultos a lectores
de pantalla. Todos son CSS o SVG en línea, sin librerías ni fuentes de iconos.

---

## Publicar

Conecta el repo en [Vercel](https://vercel.com). Detecta Astro solo: build
`npm run build`, salida `dist/`. No hay variables de entorno ni configuración
extra. Cada push a la rama principal republica el sitio.

---

## Antes de dar por bueno un cambio

- Navega con **Tab** de arriba a abajo: el foco siempre tiene que verse.
- Revísalo en el celular, no sólo en la compu.
- Míralo en los **dos idiomas**: `/` y `/es/`. Un texto nuevo sin traducir se
  nota luego luego.
- `npm run build` tiene que terminar sin advertencias.

---

## `legacy/`

Ahí está el sitio anterior (`index.html`), guardado sólo por referencia.
No se publica y no forma parte del build.
