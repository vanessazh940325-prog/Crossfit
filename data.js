/* ===================================================================
   SNACI GAMES — datos de la competencia
   Edita este archivo para actualizar atletas y resultados.
   No necesitas tocar app.js ni el html para capturar resultados.
   =================================================================== */

/*
  Cómo capturar un resultado según el tipo de WOD:

  - WOD tipo "time" (For Time):
      * Si el atleta TERMINÓ dentro del time cap:  { time: "12:34" }
      * Si NO terminó (quedó en el time cap):       { reps: 145 }

  - WOD tipo "reps" (AMRAP):
      * Siempre se anota el total de repeticiones:  { reps: 180 }

  Si un atleta no tiene resultado todavía, usa {} (vacío) y esa
  celda se mostrará en blanco sin afectar el cálculo de los demás.
*/

const SNACI_DATA = {
  categorias: [
    {
      id: "principiantes-femenil",
      nombre: "Principiantes Femenil",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
      ],
      atletas: [
        {
          nombre: "RICHIE",
          resultados: {
            ragnarok: { time: "11:20" },
            "valhalla-b": { reps: 58 },
            "valhalla-a": { time: "8:10" },
            excalibur: { reps: 90 },
          },
        },
        {
          nombre: "ALDO",
          resultados: {
            ragnarok: { time: "12:20" },
            "valhalla-b": { reps: 55 },
            "valhalla-a": { time: "9:10" },
            excalibur: { reps: 110 },
          },
        },
        {
          nombre: "ERIK LEZAMA",
          resultados: {
            ragnarok: { time: "12:00" },
            "valhalla-b": { reps: 55 },
            "valhalla-a": { time: "9:00"  },
            excalibur: { reps: 100 },
          },
        },
      ],
    },

    /* Para agregar otra categoría (ej. "RX Femenil"), copia el bloque
       de arriba, cambia el id/nombre/wods/atletas y agrégalo a este
       arreglo. Aparecerá solo como una pestaña más en el leaderboard. */
{
      id: "principiantes-varonil",
      nombre: "Principiantes Varonil",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
      ],
      atletas: [
        {
          nombre: "Ejemplo: Juan Pérez",
          resultados: {
            ragnarok: { time: "12:34" },
            "valhalla-b": { reps: 180 },
            "valhalla-a": { time: "09:50" },
            excalibur: { reps: 200 },
          },
        },
        {
          nombre: "Ejemplo: Ana Gómez",
          resultados: {
            ragnarok: { reps: 145 },
            "valhalla-b": { reps: 210 },
            "valhalla-a": { reps: 160 },
            excalibur: { reps: 190 },
          },
        },
      ],
    },

/**/
  ],
};
