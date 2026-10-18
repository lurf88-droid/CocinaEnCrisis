import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const MOLUSCOS: IngredienteCatalogo[] = [



{
id:'pulpo',

nombre:'Pulpo',

aliases:[
'pulpo fresco',
'octopus'
],


precioUnitario:450,


unidad:'kg',


precio:{
minimo:300,
promedio:450,
maximo:700,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'marino',
'textura',
'mediterraneo',
'premium'
],


cocinas:[
'española',
'mexicana',
'japonesa',
'mediterranea'
],


tecnicas:[
'cocer',
'asar',
'parrilla',
'marinar'
],


nivel:'avanzado',


familias:[
'moluscos',
'cefalopodos',
'mariscos',
'proteinas_animales'
],


usos:[
'tacos',
'ensaladas',
'ceviches',
'platos_principales'
],


roles:[
'proteina',
'textura',
'sabor_principal'
],


combinaCon:[
'limon',
'papas',
'pimenton',
'ajo',
'aceite_oliva'
],


sustitutos:[
'calamar',
'camarón'
],


sustitutosEconomicos:[
'tilapia',
'pescado_blanco'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:2,
amargo:0,
umami:9,
picante:0,

ahumado:2,
graso:3,
fresco:5,
aromatico:3
},


sabores:[
'umami',
'marino',
'suave'
],


texturas:[
'firme',
'elastica',
'carnosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'pulpo a la gallega',
'pulpo al ajillo',
'tacos_de_pulpo',
'ensalada_de_pulpo'
]

},
{
id:'calamar',

nombre:'Calamar',

aliases:[
'calamares',
'squid'
],


precioUnitario:250,


unidad:'kg',


precio:{
minimo:180,
promedio:250,
maximo:400,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'marino',
'versatil',
'rapido'
],


cocinas:[
'española',
'italiana',
'asiatica',
'mediterranea'
],


tecnicas:[
'freir',
'saltear',
'plancha',
'arroz'
],


nivel:'intermedio',


familias:[
'moluscos',
'cefalopodos',
'mariscos',
'proteinas_animales'
],


usos:[
'frituras',
'pastas',
'arroces',
'sopas'
],


roles:[
'proteina',
'textura',
'umami'
],


combinaCon:[
'ajo',
'limon',
'tomate',
'arroz',
'pasta'
],


sustitutos:[
'pulpo',
'camarón'
],


sustitutosEconomicos:[
'tilapia',
'sardina'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:2,
amargo:0,
umami:8,
picante:0,

ahumado:1,
graso:2,
fresco:5,
aromatico:2
},


sabores:[
'suave',
'marino',
'umami'
],


texturas:[
'firme',
'elastica'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'calamares_fritos',
'paella',
'pasta_marinera',
'arroz_con_calamar'
]

},
{
id:'mejillon',

nombre:'Mejillón',

aliases:[
'mejillones',
'mussel'
],


precioUnitario:180,


unidad:'kg',


precio:{
minimo:120,
promedio:180,
maximo:300,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'economico_marino',
'umami',
'caldos'
],


cocinas:[
'española',
'francesa',
'italiana'
],


tecnicas:[
'vapor',
'caldo',
'salsa'
],


nivel:'intermedio',


familias:[
'moluscos',
'mariscos',
'proteinas_animales'
],


usos:[
'sopas',
'pastas',
'arroces',
'entradas'
],


roles:[
'proteina',
'umami',
'caldo'
],


combinaCon:[
'ajo',
'vino_blanco',
'tomate',
'perejil'
],


sustitutos:[
'almeja',
'calamar'
],


sustitutosEconomicos:[
'sardina',
'atun'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:3,
amargo:0,
umami:9,
picante:0,

ahumado:1,
graso:2,
fresco:5,
aromatico:3
},


sabores:[
'marino',
'umami',
'salino'
],


texturas:[
'tierna',
'carnosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'mejillones_al_vapor',
'pasta_marinera',
'sopa_de_mariscos'
]

},
{
id:'almeja',

nombre:'Almeja',

aliases:[
'almejas frescas',
'clam'
],


precioUnitario:220,


unidad:'kg',


precio:{
minimo:150,
promedio:220,
maximo:400,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'marino',
'umami',
'caldos',
'tradicional'
],


cocinas:[
'española',
'italiana',
'francesa',
'mexicana'
],


tecnicas:[
'vapor',
'caldo',
'salsa',
'arroz'
],


nivel:'intermedio',


familias:[
'moluscos',
'mariscos',
'proteinas_animales'
],


usos:[
'sopas',
'pastas',
'arroces',
'caldos',
'entradas'
],


roles:[
'proteina',
'umami',
'caldo',
'sabor_marino'
],


combinaCon:[
'ajo',
'vino_blanco',
'tomate',
'perejil',
'arroz'
],


sustitutos:[
'mejillon',
'ostion'
],


sustitutosEconomicos:[
'sardina',
'atun'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:4,
amargo:0,
umami:10,
picante:0,

ahumado:1,
graso:2,
fresco:6,
aromatico:3
},


sabores:[
'marino',
'salino',
'umami'
],


texturas:[
'tierna',
'carnosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'almejas_al_vapor',
'paella_de_mariscos',
'sopa_de_mariscos',
'pasta_con_almejas'
]

},
{
id:'ostion',

nombre:'Ostión',

aliases:[
'ostra',
'oyster'
],


precioUnitario:350,


unidad:'kg',


precio:{
minimo:250,
promedio:350,
maximo:700,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'premium',
'fresco',
'marino',
'intenso'
],


cocinas:[
'francesa',
'japonesa',
'mexicana',
'internacional'
],


tecnicas:[
'crudo',
'gratinado',
'hornear'
],


nivel:'avanzado',


familias:[
'moluscos',
'mariscos',
'proteinas_animales'
],


usos:[
'entradas',
'ceviches',
'platos_gourmet'
],


roles:[
'proteina',
'premium',
'sabor_marino'
],


combinaCon:[
'limon',
'salsa_picante',
'vinagre',
'cebolla'
],


sustitutos:[
'almeja',
'vieira'
],


sustitutosEconomicos:[
'sardina',
'atun'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:5,
amargo:0,
umami:10,
picante:0,

ahumado:0,
graso:3,
fresco:8,
aromatico:3
},


sabores:[
'marino_intenso',
'salino',
'umami'
],


texturas:[
'gelatinosa',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'ostiones_gratinados',
'ostiones_con_limón',
'mariscadas'
]

},
{
id:'vieira',

nombre:'Vieira',

aliases:[
'callo de hacha',
'scallop'
],


precioUnitario:650,


unidad:'kg',


precio:{
minimo:450,
promedio:650,
maximo:1200,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'premium',
'dulce',
'delicado'
],


cocinas:[
'francesa',
'japonesa',
'mediterranea'
],


tecnicas:[
'plancha',
'marcar',
'crudo'
],


nivel:'avanzado',


familias:[
'moluscos',
'mariscos',
'proteinas_animales'
],


usos:[
'entradas',
'platos_gourmet',
'ceviches'
],


roles:[
'proteina',
'premium',
'sabor_principal'
],


combinaCon:[
'limon',
'mantequilla',
'ajo',
'verduras'
],


sustitutos:[
'ostion',
'langostino'
],


sustitutosEconomicos:[
'calamar',
'camarón'
],


perfilSabor:{
...SABOR_BASE,

dulce:5,
acido:0,
salado:2,
amargo:0,
umami:9,
picante:0,

ahumado:0,
graso:4,
fresco:7,
aromatico:4
},


sabores:[
'dulce_marino',
'delicado',
'umami'
],


texturas:[
'firme',
'tierna',
'mantequillosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'vieiras_la_plancha',
'ceviche_de_vieira',
'vieiras_con_mantequilla'
]

},

];