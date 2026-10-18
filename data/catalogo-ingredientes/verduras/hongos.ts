import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const HONGOS: IngredienteCatalogo[] = [



{
id:'champiñon',

nombre:'Champiñón blanco',

aliases:[
'champiñones',
'hongo blanco',
'champiñon fresco'
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

subcategoria:'hongos',

basico:false,

tags:[
'umami',
'versatil',
'crisis'
],

cocinas:[
'mexicana',
'italiana',
'francesa',
'internacional'
],

tecnicas:[
'saltear',
'crema',
'gratinado',
'relleno'
],

nivel:'intermedio',

familias:[
'hongos'
],

usos:[
'sopas',
'pasta',
'guisos',
'guarniciones'
],

roles:[
'umami',
'profundidad',
'sabor'
],

combinaCon:[
'ajo',
'cebolla',
'crema',
'pollo'
],

sustitutos:[
'portobello'
],

sustitutosEconomicos:[
'calabacita'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:1,
umami:8,
picante:0,

ahumado:2,
graso:3,
fresco:3,
aromatico:6
},

sabores:[
'umami',
'terroso'
],

texturas:[
'carnosa',
'tierna'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'crema de champiñones',
'pasta con hongos',
'champiñones al ajillo'
]

},
{
id:'portobello',

nombre:'Portobello',

aliases:[
'portobello',
'hongo portobello',
'champiñon portobello'
],


precioUnitario:180,

unidad:'kg',

precio:{
minimo:140,
promedio:180,
maximo:230,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'verduras',

subcategoria:'hongos',


tags:[
'gourmet',
'umami',
'carne vegetal',
'versatil'
],


basico:false,


cocinas:[
'italiana',
'francesa',
'americana',
'mexicana'
],


tecnicas:[
'parrilla',
'relleno',
'salteado',
'horno'
],


nivel:'intermedio',



familias:[
'hongos',
'umami',
'vegetales especiales'
],


usos:[
'relleno',
'guarnicion',
'plato principal',
'salsa'
],


roles:[
'proteina vegetal',
'base de plato',
'aporte umami'
],



combinaCon:[
'ajo',
'cebolla',
'queso',
'crema',
'pasta',
'arroz',
'vino tinto',
'hierbas aromaticas'
],


sustitutos:[
'champiñon blanco',
'setas'
],


sustitutosEconomicos:[
'champiñon blanco',
'calabaza',
'berenjena'
],



sabores:[
'umami',
'tierra',
'nuez'
],


texturas:[
'carnosa',
'fibrosa'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:1,
umami:9,
picante:0,

ahumado:2,
graso:5,
fresco:2,
aromatico:7
},


temporada:[
'todo el año'
],


conservacion:
'refrigerado 5 a 7 dias',


recetasCompatibles:[
'hamburguesa vegetal',
'pasta cremosa',
'portobello relleno',
'salteado oriental'
]

},



{
id:'shiitake',


nombre:'Hongo shiitake',


aliases:[

'hongo shiitake',

'shiitake',

'shiitake mushroom'

],

precioUnitario:350,


unidad:'kg',


precio:{
minimo:280,
promedio:350,
maximo:500,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'verduras',

subcategoria:'hongos',


tags:[
'umami',
'asiatico',
'caldo',
'aromatico'
],


cocinas:[
'japonesa',
'china',
'coreana'
],


tecnicas:[
'hidratar',
'saltear',
'caldo',
'sopa'
],


nivel:'intermedio',


familias:[
'hongos',
'umami'
],


usos:[
'sopas',
'caldos',
'ramen',
'salteados'
],


roles:[
'potenciador de sabor',
'umami natural'
],


combinaCon:[
'soya',
'jengibre',
'ajo',
'cebollin',
'arroz'
],


sustitutos:[
'portobello',
'hongo ostra'
],


sustitutosEconomicos:[
'champiñon blanco'
],


sabores:[
'umami',
'tierra',
'ahumado suave'
],


texturas:[
'carnosa',
'fibrosa'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:1,
umami:10,
picante:0,

ahumado:1,
graso:4,
fresco:2,
aromatico:8
},


temporada:[
'todo el año'
],


conservacion:
'refrigerado 5 dias / seco hasta meses',


recetasCompatibles:[
'ramen',
'sopa miso',
'arroz oriental',
'salteado asiatico'
]

},

{
id:'hongo_ostra',

nombre:'Hongo ostra',

aliases:[
'hongo ostra',
'pleurotus',
'seta ostra'
],

precioUnitario:250,

unidad:'kg',

precio:{
minimo:180,
promedio:250,
maximo:350,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hongos',

tags:[
'umami',
'textura',
'vegetal',
'gourmet'
],

cocinas:[
'mexicana',
'asiatica',
'europea'
],

tecnicas:[
'salteado',
'plancha',
'parrilla',
'guisado'
],

nivel:'intermedio',

familias:[
'hongos',
'umami',
'vegetales especiales'
],

usos:[
'tacos gourmet',
'salteados',
'guarniciones',
'platos vegetarianos'
],

roles:[
'proteina vegetal',
'aporte umami',
'textura principal'
],

combinaCon:[
'ajo',
'cebolla',
'soya',
'arroz',
'pasta',
'chile'
],

sustitutos:[
'portobello',
'setas'
],

sustitutosEconomicos:[
'champiñon blanco',
'calabaza'
],

sabores:[
'umami',
'tierra',
'ligero dulce'
],

texturas:[
'carnosa',
'suave'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:1,
umami:9,
picante:0,

ahumado:2,
graso:4,
fresco:2,
aromatico:7
},

temporada:[
'todo el año'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'tacos de hongos',
'risotto vegetal',
'salteado oriental',
'pasta con hongos'
]

},

{
id:'hongo_enoki',

nombre:'Hongo enoki',

aliases:[

'hongo enoki',

'enoki',

'enoki mushroom'

],

precioUnitario:300,

unidad:'kg',

precio:{
minimo:250,
promedio:300,
maximo:450,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hongos',

tags:[
'japones',
'textura',
'gourmet'
],

cocinas:[
'japonesa',
'coreana',
'china'
],

tecnicas:[
'sopa',
'salteado',
'vapor'
],

nivel:'intermedio',

familias:[
'hongos',
'cocina asiatica'
],

usos:[
'ramen',
'sopas',
'ensaladas'
],

roles:[
'textura',
'acabado'
],

combinaCon:[
'soya',
'miso',
'cebollin',
'tofu'
],

sustitutos:[
'hongo ostra'
],

sustitutosEconomicos:[
'champiñon'
],

sabores:[
'umami',
'suave'
],

texturas:[
'fibrosa',
'crujiente'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:0,
umami:7,
picante:0,

ahumado:0,
graso:1,
fresco:5,
aromatico:6
},

temporada:[
'todo el año'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'ramen',
'sopa miso',
'ensalada asiatica'
]

},
{
id:'champiñon_cremini',

nombre:'Champiñón cremini',

aliases:[
'champiñon cremini',
'cremini',
'baby bella'
],

precioUnitario:160,

unidad:'kg',

precio:{
minimo:120,
promedio:160,
maximo:220,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hongos',

tags:[
'umami',
'versatil',
'gourmet'
],

cocinas:[
'italiana',
'francesa',
'internacional'
],

tecnicas:[
'salteado',
'crema',
'horno',
'gratinado'
],

nivel:'intermedio',

familias:[
'hongos',
'umami'
],

usos:[
'salsas',
'pasta',
'guarnicion',
'sopas'
],

roles:[
'base de sabor',
'umami',
'textura'
],

combinaCon:[
'ajo',
'cebolla',
'crema',
'queso',
'pasta',
'arroz'
],

sustitutos:[
'champiñon blanco',
'portobello'
],

sustitutosEconomicos:[
'champiñon blanco',
'setas'
],

sabores:[
'umami',
'tierra',
'nuez'
],

texturas:[
'carnosa',
'suave'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:1,
umami:8,
picante:0,

ahumado:1,
graso:4,
fresco:3,
aromatico:6
},

temporada:[
'todo el año'
],

conservacion:
'refrigerado 5 a 7 dias',

recetasCompatibles:[
'pasta cremosa de hongos',
'sopa de champiñones',
'arroz meloso',
'pollo con salsa de hongos'
]

},



{
id:'maitake',

nombre:'Hongo maitake',

aliases:[
'maitake',
'hongo bailarin'
],

precioUnitario:600,

unidad:'kg',

precio:{
minimo:450,
promedio:600,
maximo:900,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hongos',

tags:[
'gourmet',
'umami intenso',
'japones'
],

cocinas:[
'japonesa',
'china',
'alta cocina'
],

tecnicas:[
'salteado',
'parrilla',
'sopa'
],

nivel:'chef',

familias:[
'hongos',
'alta cocina'
],

usos:[
'acompañamiento',
'plato principal',
'caldos'
],

roles:[
'umami profundo',
'ingrediente especial'
],

combinaCon:[
'soya',
'miso',
'arroz',
'caldo dashi',
'ajo'
],

sustitutos:[
'shiitake',
'hongo ostra'
],

sustitutosEconomicos:[
'champiñon',
'setas'
],

sabores:[
'umami',
'tierra',
'profundo'
],

texturas:[
'fibrosa',
'carnosa'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:1,
umami:10,
picante:0,

ahumado:3,
graso:4,
fresco:2,
aromatico:9
},

temporada:[
'otoño'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'arroz japonés con hongos',
'salteado oriental',
'caldo umami'
]

},



{
id:'porcini_seco',

nombre:'Hongo porcini seco',

aliases:[
'porcini',
'boletus seco',
'hongo italiano seco'
],

precioUnitario:1500,

unidad:'kg',

precio:{
minimo:1000,
promedio:1500,
maximo:2200,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hongos_secos',

tags:[
'gourmet',
'italiano',
'umami intenso'
],

cocinas:[
'italiana',
'francesa'
],

tecnicas:[
'hidratar',
'risotto',
'salsa'
],

nivel:'chef',

familias:[
'hongos',
'ingrediente premium'
],

usos:[
'risotto',
'salsas',
'pastas'
],

roles:[
'concentrador de sabor',
'umami premium'
],

combinaCon:[
'arroz arborio',
'pasta',
'queso parmesano',
'vino blanco'
],

sustitutos:[
'shiitake seco'
],

sustitutosEconomicos:[
'champiñon fresco',
'hongo ostra'
],

sabores:[
'umami',
'tierra',
'bosque'
],

texturas:[
'carnosa al hidratar'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:1,
umami:10,
picante:0,

ahumado:3,
graso:5,
fresco:1,
aromatico:10
},

temporada:[
'todo el año'
],

conservacion:
'lugar seco hasta 12 meses',

recetasCompatibles:[
'risotto porcini',
'pasta italiana',
'salsa cremosa'
]

},



{
id:'trufa_negra',

nombre:'Trufa negra',

aliases:[
'trufa',
'tartufo',
'trufa negra fresca'
],

precioUnitario:12000,

unidad:'kg',

precio:{
minimo:8000,
promedio:12000,
maximo:18000,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hongos_gourmet',

tags:[
'alta cocina',
'aroma',
'gourmet'
],

cocinas:[
'francesa',
'italiana'
],

tecnicas:[
'laminar',
'terminar',
'aromatizar'
],

nivel:'chef',

familias:[
'hongos',
'lujo culinario'
],

usos:[
'acabado',
'pasta',
'huevo',
'risotto'
],

roles:[
'aroma final',
'ingrediente premium'
],

combinaCon:[
'huevo',
'pasta',
'queso',
'mantequilla',
'papas'
],

sustitutos:[
'aceite de trufa',
'sal de trufa'
],

sustitutosEconomicos:[
'hongo porcini',
'shiitake'
],

sabores:[
'terroso',
'umami',
'aromatico'
],

texturas:[
'firme',
'delicada'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:0,
umami:8,
picante:0,

ahumado:1,
graso:6,
fresco:1,
aromatico:10
},

temporada:[
'otoño',
'invierno'
],

conservacion:
'refrigerado pocos dias',

recetasCompatibles:[
'pasta con trufa',
'huevo gourmet',
'risotto de lujo'
]

},
];