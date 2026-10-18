import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';


export const CHILES_SECOS: IngredienteCatalogo[] = [

{
id:'chile_guajillo',

nombre:'Chile guajillo',

aliases:[

'chile guajillo',
'guajillo seco',
'chile seco guajillo'

],

precioUnitario:180,

unidad:'kg',

precio:{

minimo:120,

promedio:180,

maximo:250,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'condimentos',

subcategoria:'chiles_secos',


basico:true,


tags:[

'mexicano',

'salsa',

'adobo',

'economico'

],


cocinas:[

'mexicana',

'latinoamericana'

],


tecnicas:[

'tostar',

'hidratar',

'moler',

'salsa'

],


nivel:'basico',


familias:[

'capsicum',

'chiles_mexicanos'

],


usos:[

'salsas',

'adobos',

'moles',

'guisos'

],


roles:[

'color',

'aroma',

'picante_moderado'

],


combinaCon:[

'ajo',

'cebolla',

'comino',

'vinagre',

'pollo',

'cerdo'

],


sustitutos:[

'chile ancho',

'chile pasilla'

],


sustitutosEconomicos:[

'paprika',

'chile seco generico'

],


perfilSabor:{

...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:1,
umami:3,
picante:5,

ahumado:3,
graso:0,
fresco:1,
aromatico:8

},


sabores:[

'frutal',

'terroso',

'ligeramente ahumado'

],


texturas:[

'seca',

'correosa'

],


temporada:[

'todo el año'

],


conservacion:

'lugar fresco y seco',


recetasCompatibles:[

'adobo de pollo',

'pozole rojo',

'salsa roja',

'mole sencillo'

]

},
{
id:'chile_ancho',

nombre:'Chile ancho',

aliases:[
'chile ancho',
'ancho seco',
'chile poblano seco'
],

precioUnitario:200,

unidad:'kg',

precio:{
minimo:140,
promedio:200,
maximo:300,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'condimentos',

subcategoria:'chiles_secos',

basico:true,

tags:[
'mexicano',
'mole',
'adobo',
'aromatico'
],

cocinas:[
'mexicana'
],

tecnicas:[
'hidratar',
'tostar',
'moler',
'salsa'
],

nivel:'basico',

familias:[
'capsicum',
'chiles_mexicanos'
],

usos:[
'moles',
'adobos',
'salsas',
'guisos'
],

roles:[
'color',
'cuerpo',
'dulzor'
],

combinaCon:[
'ajo',
'cebolla',
'canela',
'comino',
'pollo',
'cerdo'
],

sustitutos:[
'chile mulato',
'chile guajillo'
],

sustitutosEconomicos:[
'chile guajillo'
],

perfilSabor:{
...SABOR_BASE,

dulce:6,
acido:0,
salado:0,
amargo:1,
umami:4,
picante:3,

ahumado:2,
graso:0,
fresco:1,
aromatico:9
},

sabores:[
'dulce',
'frutal',
'terroso'
],

texturas:[
'seca',
'carnosa al hidratar'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'mole poblano',
'adobo rojo',
'chileajo',
'salsas espesas'
]

},
{
id:'chile_pasilla',

nombre:'Chile pasilla',

aliases:[
'chile pasilla',
'pasilla seco',
'chile negro'
],

precioUnitario:220,

unidad:'kg',

precio:{
minimo:150,
promedio:220,
maximo:350,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'condimentos',

subcategoria:'chiles_secos',

basico:true,

tags:[
'mexicano',
'salsa',
'mole'
],

cocinas:[
'mexicana'
],

tecnicas:[
'hidratar',
'tostar',
'moler'
],

nivel:'basico',

familias:[
'capsicum',
'chiles_mexicanos'
],

usos:[
'salsas',
'moles',
'guisos'
],

roles:[
'color_oscuro',
'profundidad',
'aroma'
],

combinaCon:[
'ajo',
'cebolla',
'tomate',
'carne',
'pollo'
],

sustitutos:[
'chile ancho',
'chile guajillo'
],

sustitutosEconomicos:[
'chile guajillo'
],

perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:0,
amargo:2,
umami:5,
picante:4,

ahumado:4,
graso:0,
fresco:1,
aromatico:8
},

sabores:[
'terroso',
'ahumado',
'profundo'
],

texturas:[
'simula_cuerpo'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'salsa pasilla',
'mole negro',
'guisos de carne'
]

},
{
id:'chile_arbol',

nombre:'Chile de árbol',

aliases:[
'chile de arbol',
'chile seco de arbol'
],

precioUnitario:180,

unidad:'kg',

precio:{
minimo:100,
promedio:180,
maximo:280,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'condimentos',

subcategoria:'chiles_secos',

basico:true,

tags:[
'mexicano',
'picoso',
'salsa'
],

cocinas:[
'mexicana'
],

tecnicas:[
'tostar',
'infusionar',
'moler'
],

nivel:'basico',

familias:[
'capsicum',
'chiles_mexicanos'
],

usos:[
'salsas',
'aceites',
'adobos'
],

roles:[
'picante',
'intensidad'
],

combinaCon:[
'ajo',
'vinagre',
'tomate',
'limon'
],

sustitutos:[
'chile serrano seco',
'cayena'
],

sustitutosEconomicos:[
'chile seco generico'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:10,

ahumado:1,
graso:0,
fresco:1,
aromatico:7
},

sabores:[
'picante intenso',
'seco',
'ligeramente ahumado'
],

texturas:[
'similar a hojuelas'
],

temporada:[
'todo el año'
],

conservacion:
'lugar seco',

recetasCompatibles:[
'salsa de chile de árbol',
'aceite picante',
'tacos'
]

},

{
id:'chile_cascabel',

nombre:'Chile cascabel',

aliases:[
'chile cascabel',
'cascabel seco'
],

precioUnitario:260,

unidad:'kg',

precio:{
minimo:180,
promedio:260,
maximo:400,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'condimentos',

subcategoria:'chiles_secos',

basico:true,

tags:[
'mexicano',
'salsa',
'aromatico'
],

cocinas:[
'mexicana'
],

tecnicas:[
'tostar',
'hidratar',
'moler'
],

nivel:'basico',

familias:[
'capsicum',
'chiles_mexicanos'
],

usos:[
'salsas',
'adobos',
'guisos',
'marinados'
],

roles:[
'aroma',
'color',
'profundidad'
],

combinaCon:[
'ajo',
'cebolla',
'tomate',
'vinagre',
'carne'
],

sustitutos:[
'chile guajillo',
'chile pasilla'
],

sustitutosEconomicos:[
'chile guajillo'
],

perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:0,
amargo:1,
umami:4,
picante:5,

ahumado:3,
graso:0,
fresco:1,
aromatico:9
},

sabores:[
'frutal',
'terroso',
'ligeramente ahumado'
],

texturas:[
'simula_cuerpo'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'salsa de cascabel',
'carne en chile rojo',
'guisos tradicionales'
]

},
{
id:'chile_mulato',

nombre:'Chile mulato',

aliases:[
'chile mulato',
'mulato seco'
],

precioUnitario:350,

unidad:'kg',

precio:{
minimo:250,
promedio:350,
maximo:600,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'condimentos',

subcategoria:'chiles_secos',

basico:false,

tags:[
'mexicano',
'mole',
'gourmet'
],

cocinas:[
'mexicana'
],

tecnicas:[
'tostar',
'hidratar',
'moler'
],

nivel:'intermedio',

familias:[
'capsicum',
'chiles_mexicanos'
],

usos:[
'moles',
'salsas oscuras',
'guisos'
],

roles:[
'profundidad',
'color_oscuro',
'cuerpo'
],

combinaCon:[
'chocolate',
'canela',
'ajo',
'cebolla'
],

sustitutos:[
'chile ancho',
'chile pasilla'
],

sustitutosEconomicos:[
'chile ancho'
],

perfilSabor:{
...SABOR_BASE,

dulce:7,
acido:0,
salado:0,
amargo:1,
umami:6,
picante:2,

ahumado:3,
graso:0,
fresco:1,
aromatico:9
},

sabores:[
'dulce',
'cacao',
'terroso'
],

texturas:[
'cuerpo al moler'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'mole poblano',
'mole negro',
'salsas oscuras'
]

},
{
id:'chile_morita',

nombre:'Chile morita',

aliases:[
'chile morita',
'chipotle morita'
],

precioUnitario:280,

unidad:'kg',

precio:{
minimo:180,
promedio:280,
maximo:450,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'condimentos',

subcategoria:'chiles_secos',

basico:true,

tags:[
'mexicano',
'ahumado',
'salsa'
],

cocinas:[
'mexicana'
],

tecnicas:[
'hidratar',
'tatemar',
'moler'
],

nivel:'basico',

familias:[
'capsicum',
'chiles_mexicanos'
],

usos:[
'salsas',
'adobos',
'marinados'
],

roles:[
'ahumado',
'picante',
'aroma'
],

combinaCon:[
'jitomate',
'ajo',
'cebolla',
'vinagre'
],

sustitutos:[
'chile chipotle seco'
],

sustitutosEconomicos:[
'chile de árbol'
],

perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:1,
salado:0,
amargo:1,
umami:4,
picante:5,

ahumado:9,
graso:1,
fresco:1,
aromatico:8
},

sabores:[
'ahumado',
'frutal',
'picante'
],

texturas:[
'suave hidratado'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'salsa morita',
'pollo morita',
'adobos'
]

},
{
id:'chile_piquin',

nombre:'Chile piquín',

aliases:[
'chile piquin',
'piquín seco'
],

precioUnitario:500,

unidad:'kg',

precio:{
minimo:300,
promedio:500,
maximo:800,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'condimentos',

subcategoria:'chiles_secos',

basico:false,

tags:[
'mexicano',
'picoso',
'botana'
],

cocinas:[
'mexicana'
],

tecnicas:[
'moler',
'tostar'
],

nivel:'basico',

familias:[
'capsicum',
'chiles_mexicanos'
],

usos:[
'salsas',
'frutas',
'botanas'
],

roles:[
'picante',
'intensidad'
],

combinaCon:[
'limon',
'sal',
'frutas'
],

sustitutos:[
'chile de árbol'
],

sustitutosEconomicos:[
'chile seco molido'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:10,

ahumado:1,
graso:0,
fresco:2,
aromatico:7
},

sabores:[
'picante intenso'
],

texturas:[
'polvo',
'semilla'
],

temporada:[
'todo el año'
],

conservacion:
'lugar seco',

recetasCompatibles:[
'fruta con chile',
'salsas picantes',
'botanas'
]

},

{
id:'chile_chilhuacle_amarillo',

nombre:'Chile chilhuacle amarillo',

aliases:[
  'chilhuacle amarillo',
  'chile huacle amarillo',
  'huacle amarillo',
  'chile chilhuacle amarillo oaxaqueño'
],


precioUnitario:1750,

unidad:'kg',

pesoPorUnidad:1,


precio:{
  minimo:1400,
  promedio:1750,
  maximo:2100,
  moneda:'MXN',
  actualizado:'2026-08'
},


categoria:'condimentos',

subcategoria:'chiles_secos',

basico:false,


tags:[
  'chile seco',
  'oaxaca',
  'mole amarillo',
  'ingrediente regional'
],


cocinas:[
  'oaxaqueña',
  'mexicana tradicional',
  'cocina de la Cañada de Oaxaca'
],


tecnicas:[
  'tostado en comal',
  'hidratación',
  'molienda'
],


nivel:'avanzado',


familias:[
  'chiles secos',
  'solanáceas',
  'ingredientes oaxaqueños'
],


usos:[
  'mole amarillo oaxaqueño',
  'salsas tradicionales',
  'guisos oaxaqueños',
  'rellenos y adobos'
],


roles:[
  'base de sabor para moles',
  'aporte de notas frutales y ligeramente dulces',
  'aporte aromático regional'
],


combinaCon:[
  'masa de maíz',
  'hoja santa',
  'tomate verde',
  'pollo'
],


sustitutos:[
  'chile chilcostle',
  'chile guajillo'
],


sustitutosEconomicos:[
  'chile guajillo'
],


perfilSabor:{
  ...SABOR_BASE,

  dulce:3,
  acido:2,
  salado:0,
  amargo:2,
  umami:1,
  picante:3,

  ahumado:2,
  graso:0,
  fresco:1,
  aromatico:8
},


sabores:[
  'afrutado',
  'ligeramente dulce',
  'herbal'
],


texturas:[
  'seco',
  'carnoso al hidratarse'
],


temporada:[
  'verano',
  'otoño',
  'disponible seco durante el año'
],


conservacion:
'Conservar seco en recipiente hermético, protegido de la humedad, la luz directa y el calor. Para almacenamiento prolongado puede mantenerse sellado al vacío o congelado para preservar mejor aroma y color.',


recetasCompatibles:[
  'Empanada oaxaqueña de mole amarillo',
  'Mole amarillo oaxaqueño',
  'Pollo en mole amarillo',
  'Chochoyotes en amarillo'
]

}

];