/* ===================================================================
   SNACI GAMES — cálculo y renderizado del leaderboard
   Misma lógica que la hoja de cálculo: empates comparten lugar y
   puntos, el siguiente atleta salta el número correspondiente.
   =================================================================== */

// Tabla de puntos por lugar. 1-8 son los valores fijos que definiste;
// de ahí en adelante baja de 4 en 4 con un mínimo de 1 punto.
function pointsForPlace(place) {
  const fixed = { 1: 100, 2: 94, 3: 88, 4: 84, 5: 80, 6: 76, 7: 72, 8: 68 };
  if (place in fixed) return fixed[place];
  return Math.max(1, 68 - 4 * (place - 8));
}

// Convierte "MM:SS" a segundos.
function timeToSeconds(str) {
  const [m, s] = String(str).split(":").map(Number);
  return m * 60 + (s || 0);
}

// Puntaje interno donde SIEMPRE "menor es mejor" (para poder rankear
// tiempos y reps con la misma función). Un WOD sin terminar (solo reps
// en un "time") siempre queda peor que cualquier tiempo real.
function scoreFor(wod, resultado) {
  if (!resultado) return null;
  if (wod.tipo === "time") {
    if (resultado.time != null) return timeToSeconds(resultado.time);
    if (resultado.reps != null) return 1000000 + (100000 - resultado.reps);
    return null;
  }
  // AMRAP: más reps = mejor, así que invertimos el signo.
  if (resultado.reps != null) return -resultado.reps;
  return null;
}

function resultLabel(wod, resultado) {
  if (!resultado) return "";
  if (wod.tipo === "time" && resultado.time != null) return resultado.time;
  if (resultado.reps != null) return `${resultado.reps} reps`;
  return "";
}

// Ranking estilo competencia: empates comparten lugar, el siguiente
// salta el número (1,1,3,4...). scores: array de number|null, menor=mejor.
function competitionRanks(scores) {
  const valid = scores.filter((s) => s !== null);
  return scores.map((s) => (s === null ? null : 1 + valid.filter((v) => v < s).length));
}

function placeLabel(place) {
  return place == null ? "—" : `${place}°`;
}

function rankBadgeClass(place) {
  if (place === 1) return "rank-badge rank-1";
  if (place === 2) return "rank-badge rank-2";
  if (place === 3) return "rank-badge rank-3";
  return "rank-badge";
}

function computeCategoria(categoria) {
  const { wods, atletas } = categoria;

  // Por cada WOD, calculamos score y lugar de todos los atletas.
  const porWod = wods.map((wod) => {
    const scores = atletas.map((a) => scoreFor(wod, a.resultados[wod.id]));
    const places = competitionRanks(scores);
    return { wod, scores, places };
  });

  const filas = atletas.map((atleta, i) => {
    const wodsCalc = porWod.map(({ wod, places }) => {
      const resultado = atleta.resultados[wod.id];
      const place = places[i];
      const points = place == null ? 0 : pointsForPlace(place);
      return {
        wod,
        label: resultLabel(wod, resultado),
        place,
        points,
      };
    });
    const total = wodsCalc.reduce((sum, w) => sum + w.points, 0);
    return { nombre: atleta.nombre, wods: wodsCalc, total };
  });

  const totalScores = filas.map((f) => -f.total); // menor es mejor -> invertimos
  const overallPlaces = competitionRanks(totalScores);
  filas.forEach((f, i) => (f.puestoGeneral = overallPlaces[i]));

  // Orden visual: por puesto general, empates en el orden en que
  // aparecen en data.js.
  const orden = filas
    .map((f, i) => ({ f, i }))
    .sort((a, b) => a.f.puestoGeneral - b.f.puestoGeneral || a.i - b.i)
    .map((x) => x.f);

  return orden;
}

function renderTabs(categorias, activeId) {
  const tabs = document.getElementById("tabs");
  if (!tabs) return;
  if (categorias.length <= 1) {
    tabs.style.display = "none";
    return;
  }
  tabs.innerHTML = `
    <select id="cat-select" class="cat-select">
      ${categorias
      .map(
        (c) =>
          `<option value="${c.id}"${c.id === activeId ? " selected" : ""}>${c.nombre}</option>`
      )
      .join("")}
    </select>`;
  document
    .getElementById("cat-select")
    .addEventListener("change", (e) => renderCategoria(e.target.value));
}

function renderCategoria(catId) {
  const categoria = SNACI_DATA.categorias.find((c) => c.id === catId);
  if (!categoria) return;

  document.getElementById("cat-title").textContent = categoria.nombre;
  renderTabs(SNACI_DATA.categorias, catId);

  const filas = computeCategoria(categoria);
  const wods = categoria.wods;

  const thead = `
    <tr>
      <th class="col-rank">Puesto</th>
      <th class="col-athlete">Atleta</th>
      ${wods
        .map(
          (w) => `
        <th><span class="wod-name">${w.label}</span>Resultado</th>
        <th>Lugar</th>
        <th>Puntos</th>`
        )
        .join("")}
      <th>Total</th>
    </tr>`;

  const tbody = filas
    .map((f) => {
      const wodCells = f.wods
        .map(
          (w) => `
        <td class="result-cell">${w.label || "—"}</td>
        <td><span class="place-badge">${placeLabel(w.place)}</span></td>
        <td class="points-cell">${w.place == null ? "—" : `${w.points} pts`}</td>`
        )
        .join("");
      return `
      <tr>
        <td class="col-rank"><span class="${rankBadgeClass(f.puestoGeneral)}">${f.puestoGeneral}°</span></td>
        <td class="col-athlete athlete-name">${f.nombre}</td>
        ${wodCells}
        <td class="total-cell">${f.total} pts</td>
      </tr>`;
    })
    .join("");

  document.getElementById("board-head").innerHTML = thead;
  document.getElementById("board-body").innerHTML = tbody;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("cat");
  const exists = SNACI_DATA.categorias.some((c) => c.id === requested);
  const first = exists ? requested : SNACI_DATA.categorias[0]?.id;
  if (first) renderCategoria(first);
});
