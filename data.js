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
          nombre: "CHICAS GARAGES",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "VALKYRIES",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "DROGONAS LUNARYS",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "LAS AMAZONAS",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "BURPEES BABYS",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "ODISEAS TEAM",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
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
          nombre: "SOUTH PARK",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "JAWAR DUMBBELL",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "KINGS DRAGONS",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "ALPHA M&A",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "LINCES",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "BEAUTY&BEST",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "FORCE DRAGON",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "CHALK ADDICTS",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "AFERRUCOS",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "TEAM SANGRE",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
      ],
    },

    /**/

    {
      id: "intermedios-femenil",
      nombre: "Intermedios Femenil",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
      ],
      atletas: [
        {
          nombre: "PACE AND POWER",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "FELINAS",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "LAS JETONAS DEL GARAGE",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
      ],
    },

    /**/

    {
      id: "intermedios-varonil",
      nombre: "Intermedios Varonil",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
      ],
      atletas: [
        {
          nombre: "ARMYS UNBROKEN",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "BLACK DRAGONS",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "LA LEGIÓN N",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
      ],
    },

    /**/

    {
      id: "avanzados",
      nombre: "Avanzados",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
      ],
      atletas: [
        {
          nombre: "ERICK LEZAMA",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "ALDO MARTÍNEZ",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "CÉSAR GUERRA",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "NESTOR OLIVARES",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "RICARDO BENITEZ",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
        {
          nombre: "ARI LECHUGA",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
          },
        },
      ],
    },
  ],
};
