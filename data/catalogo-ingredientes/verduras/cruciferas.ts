import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CRUCIFERAS: IngredienteCatalogo[] = [






{
id:'coles_bruselas',

nombre:'Coles de Bruselas',

aliases:[
'coles bruselas',
'repollitos'
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

subcategoria:'cruciferas',

basico:false,

tags:[
'nutritivo',
'gourmet_accesible',
'vegetal'
],

cocinas:[
'europea',
'internacional'
],

tecnicas:[
'hornear',
'saltear',
'asar'
],

nivel:'intermedio',

familias:[
'cruciferas'
],

usos:[
'guarniciones',
'ensaladas',
'horneados'
],

roles:[
'nutricion',
'textura'
],

combinaCon:[
'tocino',
'queso',
'ajo',
'mantequilla'
],

sustitutos:[
'brocoli',
'coliflor'
],

sustitutosEconomicos:[
'col'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:3,
umami:3,
picante:0,

ahumado:2,
graso:2,
fresco:7,
aromatico:6
},

sabores:[
'vegetal',
'ligeramente amargo'
],

texturas:[
'tierna',
'compacta'
],

temporada:[
'otoño',
'invierno'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'coles asadas',
'coles gratinadas',
'guarnición al horno'
]

},
];