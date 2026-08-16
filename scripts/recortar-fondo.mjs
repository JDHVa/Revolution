/*
 * Recorta el fondo blanco de Orpheus SIN comerse su cuerpo.
 *
 * El truco está en no borrar "todo lo blanco", que es lo que hace un quitador
 * de fondo genérico y por eso deja al personaje como sombra: Orpheus es blanco
 * con contorno negro, así que su cara y su torso son igual de blancos que el
 * fondo. Aquí se rellena por inundación desde los bordes de la imagen: sólo
 * cae el blanco que está CONECTADO con el borde. El de adentro sobrevive
 * porque el contorno negro del dibujo lo encierra.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

/* Rutas relativas a este archivo, no al directorio desde el que se invoque:
   así `node scripts/recortar-fondo.mjs` funciona desde donde sea. */
const aqui = (rel) => fileURLToPath(new URL(rel, import.meta.url));

const ENTRADA = aqui('../src/assets/equipo/orpheus-jpg.jpg');
const SALIDA = aqui('../src/assets/equipo/orpheus-recorte.png');
const UMBRAL = 232; // luminancia a partir de la cual se considera "fondo"

const img = sharp(ENTRADA).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

const lum = (i) => (data[i * C] * 30 + data[i * C + 1] * 59 + data[i * C + 2] * 11) / 100;

const fondo = new Uint8Array(W * H);
// Cola como array plano con puntero de lectura: con 1.5M de pixeles, un
// Array.shift() por vuelta convierte esto en cuadrático.
const cola = new Int32Array(W * H);
let fin = 0;
const empujar = (i) => {
  if (!fondo[i] && lum(i) >= UMBRAL) {
    fondo[i] = 1;
    cola[fin++] = i;
  }
};

for (let x = 0; x < W; x++) {
  empujar(x);
  empujar((H - 1) * W + x);
}
for (let y = 0; y < H; y++) {
  empujar(y * W);
  empujar(y * W + W - 1);
}

for (let ini = 0; ini < fin; ini++) {
  const p = cola[ini];
  const px = p % W;
  const py = (p / W) | 0;
  if (px + 1 < W) empujar(p + 1);
  if (px > 0) empujar(p - 1);
  if (py + 1 < H) empujar(p + W);
  if (py > 0) empujar(p - W);
}

// Los pixeles de fondo que tocan el dibujo se quedan a media opacidad: sin eso
// el contorno sale con escalones duros contra el cielo oscuro.
let quitados = 0;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = y * W + x;
    if (!fondo[i]) continue;
    const vecinos = [
      x + 1 < W ? i + 1 : -1,
      x > 0 ? i - 1 : -1,
      y + 1 < H ? i + W : -1,
      y > 0 ? i - W : -1,
    ];
    const orilla = vecinos.some((n) => n >= 0 && !fondo[n]);
    data[i * C + 3] = orilla ? 110 : 0;
    quitados++;
  }
}

await sharp(data, { raw: { width: W, height: H, channels: C } })
  .png({ compressionLevel: 9 })
  .toFile(SALIDA);

const total = W * H;
console.log(`${W}x${H} — fondo quitado: ${quitados} px (${((quitados / total) * 100).toFixed(1)}%)`);
console.log(`guardado: ${SALIDA}`);
