# REVOLUTION

Sitio del hackathon de hardware de [Hack Club Monterrey](https://hackclub.com).
14 y 15 de noviembre de 2026 · gratis · para preparatoria.

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

**Casi nunca necesitas tocar un componente.** Todo el texto y los datos viven
en `src/data/`:

| Archivo | Qué contiene |
|---|---|
| `site.ts` | **Empieza aquí.** Fechas, sede, links de registro/redes, correos |
| `evento.ts` | El texto de "¿Qué es REVOLUTION?" y el reto |
| `faq.ts` | Las preguntas frecuentes |
| `horario.ts` | El programa del sábado y el domingo |
| `workshops.ts` | Los tres talleres previos |
| `equipo.ts` | Los organizadores |
| `sponsors.ts` | Niveles de patrocinio y el argumento de venta |
| `legal.ts` | Documentos legales y política de menores |

Cada archivo trae comentarios explicando qué hace cada campo.

### Cosas que están pendientes

El sitio muestra un estado honesto ("Sede por confirmar", "El registro abre
pronto") en vez de links muertos. Para activarlos, en `src/data/site.ts`:

```ts
registro: { url: '#', pendiente: true }
//        ↓ cuando tengas el formulario
registro: { url: 'https://forms.gle/...' }   // quita `pendiente`
```

Igual con la sede: pon los datos y cambia `confirmado: false` a `true`.

**Falta por llenar:** sede, link del formulario, grupo de WhatsApp, correo de
Emilio, fotos del equipo, fechas y sedes de los talleres, logos de
patrocinadores, y la imagen de Open Graph (`public/media/og.png`).

### Links dentro de las respuestas del FAQ

En `faq.ts` escribes un token y el sitio lo convierte en el link correcto:

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
- `npm run build` tiene que terminar sin advertencias.

---

## `legacy/`

Ahí está el sitio anterior (`index.html`), guardado sólo por referencia.
No se publica y no forma parte del build.
