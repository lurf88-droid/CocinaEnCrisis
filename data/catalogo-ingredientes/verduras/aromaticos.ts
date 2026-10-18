import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const AROMATICOS: IngredienteCatalogo[] = [




{
id:'cebollin',

nombre:'Cebollín',

aliases:[
'cebolla cambray',
'cebolla verde'
],

precioUnitario:80,

unidad:'kg',

precio:{
minimo:50,
promedio:80,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'bulbos',

basico:true,

tags:[
'aromatico',
'fresco',
'economico'
],

cocinas:[
'mexicana',
'asiatica',
'internacional'
],

tecnicas:[
'crudo',
'salteado',
'decoracion'
],

nivel:'basico',

familias:[
'alliums'
],

usos:[
'salsas',
'tacos',
'terminados'
],

roles:[
'aroma',
'frescura'
],

combinaCon:[
'huevo',
'pollo',
'arroz',
'sopas'
],

sustitutos:[
'cebolla'
],

sustitutosEconomicos:[
'cebolla blanca'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:2,

ahumado:0,
graso:0,
fresco:9,
aromatico:8
},

sabores:[
'verde',
'fresco'
],

texturas:[
'crujiente',
'tierna'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'tacos',
'arroz frito',
'sopas'
]

},
{
id:'hinojo',

nombre:'Hinojo',

aliases:[
'bulbo de hinojo',
'fennel'
],

precioUnitario:120,

unidad:'kg',

precio:{
minimo:80,
promedio:120,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'bulbos',

basico:false,

tags:[
'aromatico',
'gourmet_accesible',
'fresco'
],

cocinas:[
'italiana',
'mediterranea',
'internacional'
],

tecnicas:[
'crudo',
'hornear',
'saltear'
],

nivel:'intermedio',

familias:[
'aromaticos'
],

usos:[
'ensaladas',
'guarniciones',
'sopas'
],

roles:[
'aroma',
'frescura',
'anisado'
],

combinaCon:[
'pescado',
'naranja',
'pollo',
'queso'
],

sustitutos:[
'apio',
'poro'
],

sustitutosEconomicos:[
'apio'
],

perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:0,
amargo:2,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:10
},

sabores:[
'anisado',
'dulce',
'herbal'
],

texturas:[
'crujiente',
'tierna'
],

temporada:[
'invierno'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'hinojo asado',
'ensalada mediterranea',
'sopa de verduras'
]

},
{
id:'chalota',

nombre:'Chalota',

aliases:[
'echalote',
'shallot'
],

precioUnitario:160,

unidad:'kg',

precio:{
minimo:100,
promedio:160,
maximo:250,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'bulbos',

basico:false,

tags:[
'aromatico',
'chef',
'gourmet'
],

cocinas:[
'francesa',
'europea',
'internacional'
],

tecnicas:[
'sofreir',
'caramelizar',
'salsas'
],

nivel:'avanzado',

familias:[
'alliums'
],

usos:[
'salsas',
'vinagretas',
'carnes'
],

roles:[
'aroma',
'profundidad'
],

combinaCon:[
'mantequilla',
'vino',
'carne',
'pescado'
],

sustitutos:[
'cebolla blanca'
],

sustitutosEconomicos:[
'cebolla blanca'
],

perfilSabor:{
...SABOR_BASE,

dulce:5,
acido:0,
salado:0,
amargo:1,
umami:3,
picante:2,

ahumado:1,
graso:2,
fresco:5,
aromatico:10
},

sabores:[
'dulce',
'ajo suave'
],

texturas:[
'fibrosa',
'tierna'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'salsa francesa',
'vinagreta',
'salteados'
]

},
];