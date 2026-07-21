# Snaci Games — sitio web

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build). No necesita
servidor: son solo archivos, así que se puede publicar gratis con
**GitHub Pages****

## Archivos

- `index.html` — página de inicio (ubicación, horario, contacto, categorías)
- `leaderboard.html` — el leaderboard, con pestañas si hay varias categorías
- `styles.css` — todo el diseño
- `data.js` — **el único archivo que necesitas editar** para capturar resultados
- `app.js` — la lógica que calcula lugares y puntos (no hace falta tocarlo)

## Cómo actualizar resultados

Abre `data.js`. Cada atleta tiene un resultado por WOD:

```js
resultados: {
  ragnarok:     { time: "12:34" },   // terminó el For Time en 12:34
  "valhalla-b": { reps: 180 },       // AMRAP: 180 repeticiones
  "valhalla-a": { reps: 160 },       // no terminó el For Time: 160 reps
  excalibur:    { reps: 200 },
}
```

Para agregar un atleta nuevo, copia un bloque `{ nombre: ..., resultados: {...} }`
dentro de `atletas`. Para agregar una categoría completa (ej. "RX Femenil"),
copia el bloque de `principiantes-femenil` completo y cámbiale el `id`,
`nombre`, `wods` y `atletas` — aparece sola como pestaña nueva en el
leaderboard.

El cálculo de lugares y puntos es automático: usa la misma tabla de
puntos (100, 94, 88, 84, 80, 76, 72, 68, y de ahí baja de 4 en 4) y el
mismo criterio de empates que en la hoja de Excel — si dos atletas
empatan comparten el lugar y los puntos, y el que sigue salta el
número correspondiente.

## Publicarlo gratis con Git + GitHub Pages

1. **Crea una cuenta en GitHub** (si no tienes): https://github.com

2. **Crea un repositorio nuevo**, público, sin README (para no chocar
   con el que ya tienes). Le puedes poner de nombre `snaci-games`.

3. **En tu computadora**, dentro de la carpeta con estos archivos,
   abre una terminal y corre:

   ```bash
   git init
   git add .
   git commit -m "Primera versión del sitio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/snaci-games.git
   git push -u origin main
   ```

   (Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub. La
   primera vez te va a pedir iniciar sesión.)

4. **Activa GitHub Pages**: en el repositorio, ve a
   `Settings → Pages`. En "Source" elige la rama `main` y la carpeta
   `/ (root)`. Guarda.

5. Espera uno o dos minutos y tu sitio va a estar disponible en:

   `https://TU-USUARIO.github.io/snaci-games/`

6. **Para publicar cambios después** (por ejemplo, actualizar
   resultados en `data.js`), desde la misma carpeta:

   ```bash
   git add .
   git commit -m "Actualizo resultados"
   git push
   ```

   GitHub Pages se actualiza sola unos segundos después de cada push.

## Notas

- El sitio no tiene imágenes por ahora (usé solo color y tipografía
  para el diseño). Si quieres poner fotos del gym o del logo, ponlas
  en esta misma carpeta (ej. `logo.png`) y agrégalas en el HTML con
  `<img src="logo.png">`.
- Todo es responsivo (se ve bien en celular); la tabla del leaderboard
  se puede deslizar hacia los lados si no cabe en pantalla.
