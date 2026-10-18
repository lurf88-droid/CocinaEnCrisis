import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const SALSAS_CONDIMENTOS: IngredienteCatalogo[] = [



{
id:'mostaza',

nombre:'Mostaza',

aliases:[
'mostaza amarilla',
'mustard'
],


precioUnitario:80,


unidad:'kg',


precio:{
minimo:50,
promedio:80,
maximo:150,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'salsas_condimentos',


basico:true,


tags:[
'acido',
'picante',
'versatil',
'aderezo'
],


cocinas:[
'francesa',
'americana',
'internacional'
],


tecnicas:[
'emulsionar',
'mariar',
'sazonar'
],


nivel:'basico',


familias:[
'salsas',
'semillas'
],


usos:[
'aderezos',
'marinados',
'sandwiches',
'carnes'
],


roles:[
'acidez',
'equilibrio',
'picante'
],


combinaCon:[
'miel',
'pollo',
'cerdo',
'queso'
],


sustitutos:[
'mayonesa',
'vinagre con especias'
],


sustitutosEconomicos:[
'vinagre',
'chile suave'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:7,
salado:2,
amargo:2,
umami:2,
picante:4,

ahumado:0,
graso:1,
fresco:4,
aromatico:8
},


sabores:[
'acido',
'picante',
'semilla'
],


texturas:[
'cremosa'
],


temporada:[
'todo el año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'pollo mostaza miel',
'aderezos',
'hamburguesas'
]

},
{
id:'mayonesa',

nombre:'Mayonesa',

aliases:[
'mayo',
'mayonnaise'
],


precioUnitario:100,


unidad:'kg',


precio:{
minimo:60,
promedio:100,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'salsas_condimentos',


basico:true,


tags:[
'cremoso',
'base',
'versatil'
],


cocinas:[
'mexicana',
'americana',
'internacional'
],


tecnicas:[
'emulsionar',
'mezclar'
],


nivel:'basico',


familias:[
'salsas',
'grasas'
],


usos:[
'ensaladas',
'sandwiches',
'salsas'
],


roles:[
'grasa',
'cremosidad',
'ligar'
],


combinaCon:[
'atun',
'pollo',
'huevo',
'vegetales'
],


sustitutos:[
'crema',
'yogur natural'
],


sustitutosEconomicos:[
'crema'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:3,
salado:3,
amargo:0,
umami:2,
picante:0,

ahumado:0,
graso:10,
fresco:1,
aromatico:2
},


sabores:[
'cremoso',
'acido suave'
],


texturas:[
'cremosa',
'espesa'
],


temporada:[
'todo el año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'ensalada de atun',
'sandwich',
'aderezos'
]

},
{
id:'ketchup',

nombre:'Ketchup',

aliases:[
'catsup',
'salsa catsup'
],


precioUnitario:70,


unidad:'kg',


precio:{
minimo:40,
promedio:70,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'salsas_condimentos',


basico:true,


tags:[
'tomate',
'dulce',
'popular'
],


cocinas:[
'americana',
'internacional'
],


tecnicas:[
'salsear',
'terminar'
],


nivel:'basico',


familias:[
'salsas'
],


usos:[
'hamburguesas',
'papas',
'botanas'
],


roles:[
'dulzor',
'acidez',
'umami'
],


combinaCon:[
'carne',
'papa',
'huevo'
],


sustitutos:[
'salsa tomate'
],


sustitutosEconomicos:[
'pasta tomate condimentada'
],


perfilSabor:{
...SABOR_BASE,

dulce:8,
acido:5,
salado:3,
amargo:0,
umami:4,
picante:1,

ahumado:1,
graso:0,
fresco:2,
aromatico:4
},


sabores:[
'dulce',
'tomate',
'acido'
],


texturas:[
'espesa'
],


temporada:[
'todo el año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'hamburguesas',
'alitas',
'salsas rápidas'
]

},
{
id:'salsa_inglesa',

nombre:'Salsa inglesa',

aliases:[
'worcestershire',
'salsa worcester'
],


precioUnitario:180,


unidad:'litro',


precio:{
minimo:120,
promedio:180,
maximo:300,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'salsas_condimentos',


basico:false,


tags:[
'umami',
'fermentado',
'profundo'
],


cocinas:[
'inglesa',
'internacional'
],


tecnicas:[
'marinar',
'sazonar'
],


nivel:'intermedio',


familias:[
'salsas',
'fermentados'
],


usos:[
'carnes',
'salsas',
'marinados'
],


roles:[
'umami',
'profundidad',
'acidez'
],


combinaCon:[
'carne',
'tomate',
'limon',
'ajo'
],


sustitutos:[
'salsa soya'
],


sustitutosEconomicos:[
'soya + vinagre'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:4,
salado:7,
amargo:1,
umami:10,
picante:1,

ahumado:2,
graso:0,
fresco:0,
aromatico:8
},


sabores:[
'umami',
'fermentado',
'intenso'
],


texturas:[
'liquida'
],


temporada:[
'todo el año'
],


conservacion:
'lugar fresco',


recetasCompatibles:[
'carne asada',
'marinados',
'salsas para carne'
]

},
{
id:'salsa_teriyaki',

nombre:'Salsa teriyaki',

aliases:[
'teriyaki',
'salsa japonesa dulce'
],


precioUnitario:150,


unidad:'litro',


precio:{
minimo:100,
promedio:150,
maximo:250,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'salsas_condimentos',


basico:false,


tags:[
'asiatico',
'dulce',
'umami'
],


cocinas:[
'japonesa',
'asiatica'
],


tecnicas:[
'macera',
'glasear',
'salsear'
],


nivel:'basico',


familias:[
'salsas'
],


usos:[
'pollo',
'carne',
'vegetales',
'wok'
],


roles:[
'umami',
'dulzor',
'brillo'
],


combinaCon:[
'pollo',
'soya',
'jengibre',
'arroz'
],


sustitutos:[
'salsa soya + miel'
],


sustitutosEconomicos:[
'soya + azúcar'
],


perfilSabor:{
...SABOR_BASE,

dulce:8,
acido:2,
salado:6,
amargo:0,
umami:8,
picante:1,

ahumado:1,
graso:0,
fresco:1,
aromatico:6
},


sabores:[
'dulce',
'umami',
'soya'
],


texturas:[
'liquida',
'espesa'
],


temporada:[
'todo el año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'pollo teriyaki',
'wok de verduras',
'arroz asiatico'
]

},
{
id:'salsa_pescado',

nombre:'Salsa de pescado',

aliases:[
'fish sauce',
'nam pla'
],


precioUnitario:250,


unidad:'litro',


precio:{
minimo:180,
promedio:250,
maximo:450,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'salsas_condimentos',


basico:false,


tags:[
'umami',
'fermentado',
'asiatico'
],


cocinas:[
'tailandesa',
'vietnamita',
'asiatica'
],


tecnicas:[
'sazonar',
'mariar'
],


nivel:'intermedio',


familias:[
'salsas',
'fermentados'
],


usos:[
'sopas',
'wok',
'salsas'
],


roles:[
'umami',
'sal',
'profundidad'
],


combinaCon:[
'limon',
'chile',
'ajo',
'arroz'
],


sustitutos:[
'salsa soya'
],


sustitutosEconomicos:[
'soya'
],


perfilSabor:{
...SABOR_BASE,

dulce:0,
acido:1,
salado:10,
amargo:0,
umami:10,
picante:0,

ahumado:1,
graso:0,
fresco:0,
aromatico:7
},


sabores:[
'umami',
'fermentado',
'salado'
],


texturas:[
'liquida'
],


temporada:[
'todo el año'
],


conservacion:
'lugar fresco',


recetasCompatibles:[
'pad thai',
'sopas asiaticas',
'wok'
]

},
{
id:'adobo',

nombre:'Adobo',

aliases:[
'adobo rojo',
'pasta de adobo',
'salsa adobo'
],


precioUnitario:180,


unidad:'kg',


precio:{
minimo:100,
promedio:180,
maximo:300,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'salsas_condimentos',


basico:true,


tags:[
'mexicano',
'chile',
'profundo',
'marinado'
],


cocinas:[
'mexicana',
'latinoamericana'
],


tecnicas:[
'adobar',
'macerear',
'mariar',
'sazonar'
],


nivel:'basico',


familias:[
'chiles',
'salsas',
'especias'
],


usos:[
'carnes',
'pollo',
'tacos',
'guisos'
],


roles:[
'identidad',
'picante',
'aroma',
'umami'
],


combinaCon:[
'pollo',
'cerdo',
'carne',
'ajo',
'vinagre'
],


sustitutos:[
'chile en polvo',
'sazonador mexicano'
],


sustitutosEconomicos:[
'chile seco',
'paprika'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:3,
salado:3,
amargo:1,
umami:5,
picante:7,

ahumado:5,
graso:1,
fresco:2,
aromatico:9
},


sabores:[
'picante',
'ahumado',
'terroso'
],


texturas:[
'pasta',
'espesa'
],


temporada:[
'todo el año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'tacos al pastor',
'pollo adobado',
'carne enchilada',
'guisos mexicanos'
]

},
{
id:'tahini',

nombre:'Tahini',

aliases:[
'tehini',
'pasta de ajonjoli',
'sesame paste'
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

categoria:'despensa',

subcategoria:'pastas_semillas',

basico:false,

tags:[
'mediterraneo',
'cremoso',
'salsas',
'umami'
],

cocinas:[
'arabe',
'mediterranea',
'internacional'
],

tecnicas:[
'mezclar',
'emulsionar',
'salsa'
],

nivel:'intermedio',

familias:[
'semillas',
'salsas'
],

usos:[
'hummus',
'aderezos',
'salsas',
'untables'
],

roles:[
'grasa',
'aroma',
'cremosidad'
],

combinaCon:[
'garbanzo',
'limon',
'ajo',
'verduras'
],

sustitutos:[
'mantequilla de cacahuate'
],

sustitutosEconomicos:[
'cacahuate molido'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:2,
umami:3,
picante:0,

ahumado:1,
graso:9,
fresco:0,
aromatico:8
},

sabores:[
'nuez',
'ajonjoli',
'tostado'
],

texturas:[
'cremosa',
'espesa'
],

temporada:[
'todo_el_año'
],

conservacion:
'lugar fresco',

recetasCompatibles:[
'hummus',
'salsa tahini',
'bowls mediterraneos'
]

},
{
id:'pasta_curry',

nombre:'Pasta curry',

aliases:[
'curry en pasta',
'curry paste'
],

precioUnitario:250,

unidad:'kg',

precio:{
minimo:180,
promedio:250,
maximo:450,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'despensa',

subcategoria:'salsas_especias',

basico:false,

tags:[
'asiatico',
'especias',
'intenso'
],

cocinas:[
'tailandesa',
'india',
'asiatica'
],

tecnicas:[
'guisar',
'saltear',
'infusionar'
],

nivel:'intermedio',

familias:[
'especias',
'salsas'
],

usos:[
'currys',
'guisos',
'salsas'
],

roles:[
'aroma',
'color',
'profundidad'
],

combinaCon:[
'leche coco',
'pollo',
'vegetales',
'arroz'
],

sustitutos:[
'curry polvo'
],

sustitutosEconomicos:[
'mezcla de especias'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:2,
salado:3,
amargo:2,
umami:5,
picante:7,

ahumado:2,
graso:3,
fresco:2,
aromatico:10
},

sabores:[
'especiado',
'picante',
'herbal'
],

texturas:[
'pasta'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'curry de pollo',
'curry vegetal',
'arroz especiado'
]

},
{
id:'sriracha',

nombre:'Sriracha',

aliases:[
'salsa sriracha',
'salsa picante tailandesa'
],

precioUnitario:180,

unidad:'litro',

precio:{
minimo:120,
promedio:180,
maximo:300,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'despensa',

subcategoria:'salsas',

basico:false,

tags:[
'picante',
'asiatico',
'salsa'
],

cocinas:[
'tailandesa',
'asiatica',
'internacional'
],

tecnicas:[
'terminar',
'sazonar'
],

nivel:'basico',

familias:[
'salsas'
],

usos:[
'tacos',
'wok',
'sandwiches'
],

roles:[
'picante',
'acidez',
'dulzor'
],

combinaCon:[
'pollo',
'mariscos',
'arroz',
'huevo'
],

sustitutos:[
'salsa picante'
],

sustitutosEconomicos:[
'chile fresco'
],

perfilSabor:{
...SABOR_BASE,

dulce:5,
acido:5,
salado:4,
amargo:0,
umami:3,
picante:9,

ahumado:1,
graso:0,
fresco:3,
aromatico:6
},

sabores:[
'picante',
'dulce',
'acido'
],

texturas:[
'espesa'
],

temporada:[
'todo_el_año'
],

conservacion:
'lugar fresco',

recetasCompatibles:[
'wok picante',
'alitas',
'salsas'
]

},
];