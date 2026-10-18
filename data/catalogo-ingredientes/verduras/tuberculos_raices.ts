import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const TUBERCULOS_RAICES: IngredienteCatalogo[] = [





{
id:'malanga',

nombre:'Malanga',

aliases:[
'yautia',
'taro tropical'
],

precioUnitario:60,

unidad:'kg',

precio:{
minimo:40,
promedio:60,
maximo:100,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'tuberculos',

basico:false,

tags:[
'energia',
'sustituto',
'tropical'
],

cocinas:[
'caribeña',
'latinoamericana'
],

tecnicas:[
'hervir',
'freir',
'pure'
],

nivel:'intermedio',

familias:[
'tuberculos'
],

usos:[
'sopas',
'pure',
'frituras'
],

roles:[
'volumen',
'cremosidad'
],

combinaCon:[
'ajo',
'queso',
'pollo'
],

sustitutos:[
'yuca',
'papa'
],

sustitutosEconomicos:[
'papa'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:0,
umami:2,
picante:0,

ahumado:1,
graso:2,
fresco:2,
aromatico:3
},

sabores:[
'suave',
'terroso'
],

texturas:[
'cremosa',
'harinosa'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco',

recetasCompatibles:[
'pure de malanga',
'sopa tropical',
'malanga frita'
]

},
{
id:'chirivia',

nombre:'Chirivía',

aliases:[
'parsnip'
],

precioUnitario:90,

unidad:'kg',

precio:{
minimo:60,
promedio:90,
maximo:140,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'raices',

basico:false,

tags:[
'europeo',
'dulce',
'raiz'
],

cocinas:[
'europea',
'internacional'
],

tecnicas:[
'hornear',
'pure',
'sopa'
],

nivel:'intermedio',

familias:[
'raices'
],

usos:[
'cremas',
'sopas',
'guarniciones'
],

roles:[
'dulzor',
'cuerpo'
],

combinaCon:[
'papa',
'zanahoria',
'crema'
],

sustitutos:[
'zanahoria',
'camote'
],

sustitutosEconomicos:[
'zanahoria'
],

perfilSabor:{
...SABOR_BASE,

dulce:6,
acido:0,
salado:0,
amargo:1,
umami:1,
picante:0,

ahumado:0,
graso:1,
fresco:4,
aromatico:6
},

sabores:[
'dulce',
'terroso'
],

texturas:[
'cremosa',
'fibrosa'
],

temporada:[
'invierno'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'crema de chirivia',
'pure de verduras',
'verduras asadas'
]

},
{
id:'apionabo',

nombre:'Apionabo',

aliases:[
'raiz de apio',
'celeriac'
],

precioUnitario:140,

unidad:'kg',

precio:{
minimo:90,
promedio:140,
maximo:220,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'raices',

basico:false,

tags:[
'chef',
'aromatico',
'europeo'
],

cocinas:[
'francesa',
'europea'
],

tecnicas:[
'pure',
'hornear',
'sopa'
],

nivel:'avanzado',

familias:[
'raices'
],

usos:[
'cremas',
'pure',
'guarniciones'
],

roles:[
'aroma',
'cuerpo'
],

combinaCon:[
'papa',
'crema',
'mantequilla'
],

sustitutos:[
'apio',
'papa'
],

sustitutosEconomicos:[
'papa'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:2,
umami:2,
picante:0,

ahumado:0,
graso:2,
fresco:5,
aromatico:9
},

sabores:[
'apio',
'terroso'
],

texturas:[
'cremosa',
'fibrosa'
],

temporada:[
'invierno'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'pure de apionabo',
'sopa francesa',
'vegetales asados'
]

},

];