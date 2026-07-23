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
      /*----PRINCIPIANTES FEMENIL------*/
      id: "principiantes-femenil",
      nombre: "Principiantes Femenil",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
        { id: "sorpresa", label: "FINAL", tipo: "time", oculto: true},
      ],
      atletas: [
        {
          nombre: "CHICAS GARAGES",
          box: "Army's Garage",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "LAS AMAZONAS",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { reps: 140 },//time o reps
          },
        },
        {
          nombre: "BARBELL BEAUTIES",
          box: "Beauty and Beast",
          resultados: {
            //ragnarok: { time: "12:35" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:50" },//time o reps
          },
        },
        {
          nombre: "BURPEES BABYS",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "VALKYRIES",
          box: "Coach Erick",
          resultados: {
            //ragnarok: { time: "11:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 100 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "DROGONAS LUNARYS",
          box: "Dragons Crossfit",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },                     
        {
          nombre: "PEAK PAIR",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },     
        {
          nombre: "ODISEAS TEAM",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
      ],
    },

    /*----PRINCIPIANTES VARONIL------*/
    {
      id: "principiantes-varonil",
      nombre: "Principiantes Varonil",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
        { id: "sorpresa", label: "FINAL", tipo: "time", oculto: true },
      ],
      atletas: [
        {
          nombre: "SOUTH PARK",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "JAWAR DUMBBELL",
          box: "Jawar Crossfit",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "KINGS DRAGONS",
          box: "Dragons Crossfit",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "ALPHA M&A",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "LINCES",
          box: "Beauty and Beast",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "BEAUTY&BEST",
          box: "Beauty and Beast",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "FORCE DRAGON",
          box: "Dragons Crossfit",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "CHALK ADDICTS",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "AFERRUCOS",
          box: "Beauty and Beast",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "TEAM SANGRE",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
      ],
    },

    /*----INTERMEDIOS FEMENIL------*/

    {
      id: "intermedios-femenil",
      nombre: "Intermedios Femenil",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
        { id: "sorpresa", label: "FINAL", tipo: "time", oculto: true },
      ],
      atletas: [
        {
          nombre: "PACE AND POWER",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "FELINAS",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "LAS JETONAS DEL GARAGE",
          box: "Army's Garage",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "ATP-ERRITAS",
          box: "Templo Crossfitnes",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        }, 
      ],
    },

    /*----INTERMEDIOS VARONIL------*/

    {
      id: "intermedios-varonil",
      nombre: "Intermedios Varonil",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
        { id: "sorpresa", label: "FINAL", tipo: "time", oculto: true },
      ],
      atletas: [
        {
          nombre: "ARMYS UNBROKEN",
          box: "Army's Garage",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "BLACK DRAGONS",
          box: "Dragons Crossfit",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "LA LEGIÓN N",
          box: "Concepto N",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "INDECISOS",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
      ],
    },

    /*----AVANZADOS------*/

    {
      id: "avanzados",
      nombre: "Avanzados",
      wods: [
        { id: "ragnarok", label: "RAGNAROK", tipo: "time" },
        { id: "valhalla-b", label: "VALHALLA · PARTE B", tipo: "reps" },
        { id: "valhalla-a", label: "VALHALLA · PARTE A", tipo: "time" },
        { id: "excalibur", label: "EXCALIBUR", tipo: "reps" },
        { id: "sorpresa", label: "FINAL", tipo: "time", oculto: true },
      ],
      atletas: [
        {
          nombre: "RICARDO BENITEZ",
          box: "Beauty and Beast",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "ERICK LEZAMA",
          box: "Snaci/Crossbones",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "CÉSAR GUERRA",
          box: "Beauty and Beast",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "ALDO MARTÍNEZ",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },      
        {
          nombre: "NESTOR OLIVARES",
          box: "Beauty and Beast",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },       
        {
          nombre: "ARI LECHUGA",
          box: "Templo Crossfitnes",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            //"valhalla-b": { reps: 180 }, //reps
            //"valhalla-a": { time: "09:50" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
      ],
    },
  ],
};
