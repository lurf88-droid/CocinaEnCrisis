import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';

import { SABOR_BASE } from '@/types/saborBase';

export const MOLES: IngredienteCatalogo[] = [

{
id:'mole_negro',

nombre:'Mole negro oaxaqueño',

aliases:[
  'mole negro',
  'mole negro de Oaxaca',
  'mole negro oaxaqueño',
  'pasta de mole negro'
],


precioUnitario:280,

unidad:'kg',

pesoPorUnidad:1,


precio:{
  minimo:160,
  promedio:280,
  maximo:350,
  moneda:'MXN',
  actualizado:'2026-08'
},


categoria:'salsas',

subcategoria:'moles',


basico:false,


tags:[
  'mole',
  'oaxaca',
  'salsa mexicana',
  'mole negro'
],


cocinas:[
  'oaxaqueña',
  'mexicana tradicional',
  'valles centrales de oaxaca'
],


tecnicas:[
  'dilución',
  'cocción lenta',
  'salseado'
],


nivel:'avanzado',


familias:[
  'moles',
  'salsas mexicanas',
  'preparaciones de chile'
],


usos:[
  'enmoladas',
  'tamales oaxaqueños',
  'pollo con mole negro',
  'enchiladas'
],


roles:[
  'salsa principal',
  'aporte de sabor profundo y especiado',
  'aporte aromático y tostado'
],


combinaCon:[
  'tortilla de maíz',
  'pollo',
  'huevo',
  'ajonjolí'
],


sustitutos:[
  'mole coloradito',
  'mole rojo'
],


sustitutosEconomicos:[
  'pasta de mole comercial'
],


perfilSabor:{
  ...SABOR_BASE,

  dulce:4,
  acido:1,
  salado:3,
  amargo:3,
  umami:5,
  picante:4,

  ahumado:5,
  graso:5,
  fresco:0,
  aromatico:9
},


sabores:[
  'tostado',
  'especiado',
  'complejo'
],


texturas:[
  'espesa',
  'cremosa al diluirse'
],


temporada:[
  'todo el año'
],


conservacion:
'Conservar la pasta de mole en recipiente hermético y refrigerada después de abrir. Utilizar utensilios limpios y secos para evitar contaminación. Puede dividirse en porciones y congelarse para almacenamiento prolongado.',


recetasCompatibles:[
  'Enmoladas oaxaqueñas de mole negro con huevo',
  'Tamal oaxaqueño de mole negro',
  'Pollo con mole negro',
  'Enchiladas de mole negro'
]

},


// ====================================================
// 🟤 MOLE COLORADITO
// ====================================================

{
id:'mole_coloradito',

nombre:'Mole coloradito oaxaqueño',

aliases:[
  'mole coloradito',
  'coloradito',
  'coloradito oaxaqueño',
  'pasta de mole coloradito'
],

precioUnitario:240,

unidad:'kg',

pesoPorUnidad:1,

precio:{
  minimo:150,
  promedio:240,
  maximo:340,
  moneda:'MXN',
  actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'moles',

basico:false,

tags:[
  'mole',
  'oaxaca',
  'salsa mexicana',
  'coloradito'
],

cocinas:[
  'oaxaqueña',
  'mexicana tradicional',
  'valles centrales de oaxaca'
],

tecnicas:[
  'dilución',
  'cocción lenta',
  'salseado'
],

nivel:'avanzado',

familias:[
  'moles',
  'salsas mexicanas',
  'preparaciones de chile'
],

usos:[
  'enchiladas',
  'pollo',
  'cerdo',
  'tamales'
],

roles:[
  'salsa principal',
  'aporte dulce y especiado',
  'aporte de color'
],

combinaCon:[
  'pollo',
  'cerdo',
  'tortilla de maíz',
  'ajonjolí'
],

sustitutos:[
  'mole rojo',
  'mole negro'
],

sustitutosEconomicos:[
  'pasta de mole comercial'
],

perfilSabor:{
  ...SABOR_BASE,

  dulce:5,
  acido:1,
  salado:3,
  amargo:2,
  umami:5,
  picante:3,

  ahumado:4,
  graso:4,
  fresco:0,
  aromatico:8
},

sabores:[
  'dulce',
  'tostado',
  'especiado'
],

texturas:[
  'espesa',
  'cremosa'
],

temporada:[
  'todo el año'
],

conservacion:
'Conservar refrigerado después de abrir. Mantener en recipiente hermético y utilizar utensilios limpios y secos.',

recetasCompatibles:[
  'enchiladas de coloradito',
  'pollo con coloradito',
  'tamales de coloradito',
  'cerdo en coloradito'
]

},


// ====================================================
// 🔴 MOLE ROJO
// ====================================================

{
id:'mole_rojo',

nombre:'Mole rojo oaxaqueño',

aliases:[
  'mole rojo',
  'mole rojo de Oaxaca',
  'mole rojo oaxaqueño',
  'pasta de mole rojo'
],

precioUnitario:230,

unidad:'kg',

pesoPorUnidad:1,

precio:{
  minimo:140,
  promedio:230,
  maximo:330,
  moneda:'MXN',
  actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'moles',

basico:false,

tags:[
  'mole',
  'oaxaca',
  'salsa mexicana',
  'mole rojo'
],

cocinas:[
  'oaxaqueña',
  'mexicana tradicional'
],

tecnicas:[
  'dilución',
  'cocción lenta',
  'salseado'
],

nivel:'avanzado',

familias:[
  'moles',
  'salsas mexicanas',
  'preparaciones de chile'
],

usos:[
  'pollo',
  'cerdo',
  'enchiladas',
  'tamales'
],

roles:[
  'salsa principal',
  'aporte de chile',
  'aporte especiado'
],

combinaCon:[
  'pollo',
  'cerdo',
  'tortilla de maíz',
  'arroz'
],

sustitutos:[
  'mole coloradito',
  'mole negro'
],

sustitutosEconomicos:[
  'pasta de mole comercial'
],

perfilSabor:{
  ...SABOR_BASE,

  dulce:3,
  acido:2,
  salado:3,
  amargo:2,
  umami:5,
  picante:5,

  ahumado:4,
  graso:4,
  fresco:0,
  aromatico:8
},

sabores:[
  'chile',
  'tostado',
  'especiado'
],

texturas:[
  'espesa',
  'cremosa'
],

temporada:[
  'todo el año'
],

conservacion:
'Conservar refrigerado después de abrir y mantener en recipiente hermético.',

recetasCompatibles:[
  'pollo con mole rojo',
  'enchiladas de mole rojo',
  'tamales de mole rojo',
  'cerdo en mole rojo'
]

},


// ====================================================
// 🟡 MOLE AMARILLO
// ====================================================

{
id:'mole_amarillo',

nombre:'Mole amarillo oaxaqueño',

aliases:[
  'mole amarillo',
  'amarillo oaxaqueño',
  'mole amarillo de Oaxaca',
  'pasta de mole amarillo'
],

precioUnitario:220,

unidad:'kg',

pesoPorUnidad:1,

precio:{
  minimo:140,
  promedio:220,
  maximo:320,
  moneda:'MXN',
  actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'moles',

basico:false,

tags:[
  'mole',
  'oaxaca',
  'salsa mexicana',
  'mole amarillo'
],

cocinas:[
  'oaxaqueña',
  'mexicana tradicional'
],

tecnicas:[
  'dilución',
  'cocción lenta',
  'espesar',
  'salseado'
],

nivel:'avanzado',

familias:[
  'moles',
  'salsas mexicanas',
  'preparaciones de chile'
],

usos:[
  'empanadas',
  'pollo',
  'cerdo',
  'verduras',
  'tamales'
],

roles:[
  'salsa principal',
  'aporte especiado',
  'aporte de cuerpo'
],

combinaCon:[
  'pollo',
  'cerdo',
  'masa de maíz',
  'verduras'
],

sustitutos:[
  'mole rojo',
  'mole coloradito'
],

sustitutosEconomicos:[
  'salsa de chile espesa'
],

perfilSabor:{
  ...SABOR_BASE,

  dulce:2,
  acido:2,
  salado:3,
  amargo:1,
  umami:5,
  picante:4,

  ahumado:3,
  graso:3,
  fresco:1,
  aromatico:8
},

sabores:[
  'especiado',
  'herbal',
  'chile'
],

texturas:[
  'espesa',
  'aterciopelada'
],

temporada:[
  'todo el año'
],

conservacion:
'Conservar refrigerado en recipiente hermético después de abrir.',

recetasCompatibles:[
  'Empanada de mole amarillo',
  'pollo en mole amarillo',
  'cerdo en mole amarillo',
  'tamales de amarillo'
]

},


// ====================================================
// 🟢 MOLE VERDE
// ====================================================

{
id:'mole_verde',

nombre:'Mole verde oaxaqueño',

aliases:[
  'mole verde',
  'verde oaxaqueño',
  'mole verde de Oaxaca',
  'pasta de mole verde'
],

precioUnitario:210,

unidad:'kg',

pesoPorUnidad:1,

precio:{
  minimo:130,
  promedio:210,
  maximo:300,
  moneda:'MXN',
  actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'moles',

basico:false,

tags:[
  'mole',
  'oaxaca',
  'salsa mexicana',
  'mole verde'
],

cocinas:[
  'oaxaqueña',
  'mexicana tradicional'
],

tecnicas:[
  'moler',
  'cocción lenta',
  'salseado'
],

nivel:'intermedio',

familias:[
  'moles',
  'salsas mexicanas',
  'preparaciones herbales'
],

usos:[
  'pollo',
  'cerdo',
  'verduras',
  'tamales'
],

roles:[
  'salsa principal',
  'aporte herbal',
  'frescura aromática'
],

combinaCon:[
  'pollo',
  'cerdo',
  'verduras',
  'masa de maíz'
],

sustitutos:[
  'mole amarillo'
],

sustitutosEconomicos:[
  'salsa verde espesa'
],

perfilSabor:{
  ...SABOR_BASE,

  dulce:2,
  acido:4,
  salado:3,
  amargo:1,
  umami:4,
  picante:3,

  ahumado:1,
  graso:2,
  fresco:6,
  aromatico:9
},

sabores:[
  'herbal',
  'fresco',
  'ligeramente picante'
],

texturas:[
  'espesa',
  'cremosa'
],

temporada:[
  'todo el año'
],

conservacion:
'Conservar refrigerado y utilizar en pocos días después de abrir o congelar en porciones.',

recetasCompatibles:[
  'pollo en mole verde',
  'cerdo en mole verde',
  'verduras con mole verde',
  'tamales de mole verde'
]

},


// ====================================================
// ⚫ CHICHILO
// ====================================================

{
id:'mole_chichilo',

nombre:'Chichilo oaxaqueño',

aliases:[
  'chichilo',
  'mole chichilo',
  'chichilo negro',
  'chichilo oaxaqueño'
],

precioUnitario:300,

unidad:'kg',

pesoPorUnidad:1,

precio:{
  minimo:190,
  promedio:300,
  maximo:420,
  moneda:'MXN',
  actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'moles',

basico:false,

tags:[
  'mole',
  'oaxaca',
  'ancestral',
  'chichilo'
],

cocinas:[
  'oaxaqueña',
  'mexicana tradicional'
],

tecnicas:[
  'tostar',
  'cocción lenta',
  'salseado'
],

nivel:'chef',

familias:[
  'moles',
  'salsas mexicanas',
  'preparaciones de chile'
],

usos:[
  'res',
  'cerdo',
  'guisos',
  'platos festivos'
],

roles:[
  'salsa principal',
  'aporte tostado',
  'sabor profundo'
],

combinaCon:[
  'carne de res',
  'cerdo',
  'verduras',
  'tortilla de maíz'
],

sustitutos:[
  'mole negro'
],

sustitutosEconomicos:[
  'mole negro comercial'
],

perfilSabor:{
  ...SABOR_BASE,

  dulce:1,
  acido:2,
  salado:3,
  amargo:5,
  umami:7,
  picante:4,

  ahumado:7,
  graso:4,
  fresco:0,
  aromatico:9
},

sabores:[
  'tostado',
  'ahumado',
  'profundo',
  'terroso'
],

texturas:[
  'espesa',
  'aterciopelada'
],

temporada:[
  'todo el año'
],

conservacion:
'Conservar refrigerado después de abrir. Puede congelarse en porciones para almacenamiento prolongado.',

recetasCompatibles:[
  'chichilo con res',
  'chichilo con cerdo',
  'guiso oaxaqueño de chichilo'
]

},


// ====================================================
// 🍍 MANCHAMANTELES
// ====================================================

{
id:'mole_manchamanteles',

nombre:'Manchamanteles oaxaqueño',

aliases:[
  'manchamanteles',
  'mole manchamanteles',
  'manchamanteles oaxaqueño'
],

precioUnitario:250,

unidad:'kg',

pesoPorUnidad:1,

precio:{
  minimo:160,
  promedio:250,
  maximo:360,
  moneda:'MXN',
  actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'moles',

basico:false,

tags:[
  'mole',
  'oaxaca',
  'frutal',
  'tradicional'
],

cocinas:[
  'oaxaqueña',
  'mexicana tradicional'
],

tecnicas:[
  'cocción lenta',
  'guisar',
  'salseado'
],

nivel:'avanzado',

familias:[
  'moles',
  'salsas mexicanas',
  'preparaciones frutales'
],

usos:[
  'cerdo',
  'pollo',
  'guisos',
  'platos festivos'
],

roles:[
  'salsa principal',
  'aporte frutal',
  'contraste dulce y picante'
],

combinaCon:[
  'cerdo',
  'pollo',
  'piña',
  'plátano macho'
],

sustitutos:[
  'mole coloradito'
],

sustitutosEconomicos:[
  'mole rojo'
],

perfilSabor:{
  ...SABOR_BASE,

  dulce:7,
  acido:3,
  salado:3,
  amargo:1,
  umami:5,
  picante:4,

  ahumado:3,
  graso:4,
  fresco:2,
  aromatico:9
},

sabores:[
  'frutal',
  'dulce',
  'picante',
  'especiado'
],

texturas:[
  'espesa',
  'cremosa'
],

temporada:[
  'todo el año'
],

conservacion:
'Conservar refrigerado después de abrir y utilizar utensilios limpios y secos.',

recetasCompatibles:[
  'cerdo en manchamanteles',
  'pollo en manchamanteles',
  'manchamanteles con fruta'
]

}

];