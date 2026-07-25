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
            ragnarok: { reps: 1040 }, //time o reps
            "valhalla-b": { reps: 271 }, //reps
            "valhalla-a": { time: "04:15" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "LAS AMAZONAS",
          box: "Snaci",
          resultados: {
            ragnarok: { reps: 1040 }, //time o reps
            "valhalla-b": { reps: 279 }, //reps
            "valhalla-a": { time: "04:14" }, //time o reps
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
            ragnarok: { reps: 1244 }, //time o reps
            "valhalla-b": { reps: 301 }, //reps
            "valhalla-a": { time: "04:40" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "VALKYRIES",
          box: "Coach Erick",
          resultados: {
            ragnarok: { reps: 1202 }, //time o reps
            "valhalla-b": { reps: 295 }, //reps
            "valhalla-a": { time: "04:17" }, //time o reps
            //excalibur: { reps: 100 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "DROGONAS LUNARYS",
          box: "Dragons Crossfit",
          resultados: {
            ragnarok: { reps: 1037 }, //time o reps
            "valhalla-b": { reps: 280 }, //reps
            "valhalla-a": { time: "05:28" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },                     
        {
          nombre: "PEAK PAIR",
          box: "Snaci",
          resultados: {
            ragnarok: { time: 1038 }, //time o reps
            "valhalla-b": { reps: 275 }, //reps
            "valhalla-a": { time: "04:48" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },     
        {
          nombre: "ODISEAS TEAM",
          box: "Snaci",
          resultados: {
            ragnarok: { time: "12:03" }, //time o reps
            "valhalla-b": { reps: 301 }, //reps
            "valhalla-a": { time: "04:07" }, //time o reps
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
            ragnarok: { time: "11:42" }, //time o reps
            "valhalla-b": { reps: 301 }, //reps
            "valhalla-a": { time: "04:13" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "JAWAR DUMBBELL",
          box: "Jawar Crossfit",
          resultados: {
            ragnarok: { time: "12:01" }, //time o reps
            "valhalla-b": { reps: 307 }, //reps
            "valhalla-a": { time: "04:10" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "KINGS DRAGONS",
          box: "Dragons Crossfit",
          resultados: {
            ragnarok: { time: "12:50" }, //time o reps
            "valhalla-b": { reps: 301 }, //reps
            "valhalla-a": { time: "04:12" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "ALPHA M&A",
          box: "Snaci",
          resultados: {
            ragnarok: { time: "11:52" }, //time o reps
            "valhalla-b": { reps: 294 }, //reps
            "valhalla-a": { time: "03:56" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "LINCES",
          box: "Beauty and Beast",
          resultados: {
            ragnarok: { reps: 1225 }, //time o reps
            "valhalla-b": { reps: 276 }, //reps
            "valhalla-a": { time: "04:00" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "BEAUTY&BEST",
          box: "Beauty and Beast",
          resultados: {
            ragnarok: { reps: 1253 }, //time o reps
            "valhalla-b": { reps: 108 }, //reps
            "valhalla-a": { time: "03:20" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "FORCE DRAGON",
          box: "Dragons Crossfit",
          resultados: {
            ragnarok: { reps: 1042 }, //time o reps
            "valhalla-b": { reps: 273 }, //reps
            "valhalla-a": { time: "04:14" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "CHALK ADDICTS",
          box: "Snaci",
          resultados: {
            ragnarok: { time: "11:53" }, //time o reps
            "valhalla-b": { reps: 280 }, //reps
            "valhalla-a": { time: "03:43" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "AFERRUCOS",
          box: "Beauty and Beast",
          resultados: {
            ragnarok: { reps: 1251 }, //time o reps
            "valhalla-b": { reps: 279 }, //reps
            "valhalla-a": { time: "04:53" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "TEAM SANGRE",
          box: "Snaci",
          resultados: {
            ragnarok: { reps: 1244 }, //time o reps
            "valhalla-b": { reps: 293 }, //reps
            "valhalla-a": { time: "03:41" }, //time o reps
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
            ragnarok: { reps: 1243 }, //time o reps
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
            ragnarok: { reps: 1039 }, //time o reps
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
            ragnarok: { reps: 1139 }, //time o reps
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
            ragnarok: { reps: 1252 }, //time o reps
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
            "valhalla-b": { reps: 181 }, //reps
            "valhalla-a": { time: "04:49" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "BLACK DRAGONS",
          box: "Dragons Crossfit",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            "valhalla-b": { reps: 145 }, //reps
            "valhalla-a": { time: "07:18" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "LA LEGIÓN N",
          box: "Concepto N",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            "valhalla-b": { reps: 190 }, //reps
            "valhalla-a": { time: "04:42" }, //time o reps
            //excalibur: { reps: 200 }, // reps
            //sorpresa: { time: "05:30" },//time o reps
          },
        },
        {
          nombre: "INDECISOS",
          box: "Snaci",
          resultados: {
            //ragnarok: { time: "12:34" }, //time o reps
            "valhalla-b": { reps: 146 }, //reps
            "valhalla-a": { time: "05:40" }, //time o reps
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
            ragnarok: { reps: 967 }, //time o reps
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
            ragnarok: { reps: 963 }, //time o reps
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
            ragnarok: { reps: 965 }, //time o reps
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
            ragnarok: { reps: 968 }, //time o reps
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
            ragnarok: { reps: 956 }, //time o reps
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
            ragnarok: { reps: 966 }, //time o reps
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
