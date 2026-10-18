import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const HOJAS_VERDES: IngredienteCatalogo[] = [




{
id:'quelites',

nombre:'Quelites',

aliases:[
'quelite',
'verduras silvestres mexicanas'
],

precioUnitario:40,

unidad:'kg',

precio:{
minimo:25,
promedio:40,
maximo:70,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas',

basico:true,

tags:[
'mexicano',
'economico',
'tradicional'
],

cocinas:[
'mexicana'
],

tecnicas:[
'guisar',
'hervir',
'saltear'
],

nivel:'basico',

familias:[
'hojas_verdes'
],

usos:[
'guisados',
'sopas',
'rellenos'
],

roles:[
'frescura',
'nutricion',
'identidad_mexicana'
],

combinaCon:[
'queso',
'huevo',
'frijol',
'chile'
],

sustitutos:[
'espinaca',
'acelga'
],

sustitutosEconomicos:[
'verdolaga'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:3,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:6
},

sabores:[
'vegetal',
'terroso'
],

texturas:[
'suave',
'tierna'
],

temporada:[
'temporal'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'quelites con huevo',
'guisado de quelites',
'sopa mexicana'
]

},
{
id:'berros',

nombre:'Berros',

aliases:[
'berro fresco'
],

precioUnitario:70,

unidad:'kg',

precio:{
minimo:40,
promedio:70,
maximo:110,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas',

basico:false,

tags:[
'fresco',
'nutritivo',
'tradicional'
],

cocinas:[
'mexicana',
'europea'
],

tecnicas:[
'crudo',
'sopa'
],

nivel:'basico',

familias:[
'hojas_verdes'
],

usos:[
'ensaladas',
'sopas',
'jugos'
],

roles:[
'frescura',
'aroma'
],

combinaCon:[
'limon',
'queso',
'pepino'
],

sustitutos:[
'arugula',
'espinaca'
],

sustitutosEconomicos:[
'lechuga'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:4,
umami:2,
picante:2,

ahumado:0,
graso:0,
fresco:10,
aromatico:7
},

sabores:[
'verde',
'ligeramente picante'
],

texturas:[
'crujiente',
'suave'
],

temporada:[
'primavera'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada de berros',
'sopa verde',
'jugo verde'
]

},


{
id:'germinados',

nombre:'Germinados',

aliases:[
'brotes',
'brotes vegetales'
],

precioUnitario:150,

unidad:'kg',

precio:{
minimo:100,
promedio:150,
maximo:220,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'brotes',

basico:false,

tags:[
'fresco',
'saludable',
'gourmet_accesible'
],

cocinas:[
'asiatica',
'internacional'
],

tecnicas:[
'crudo',
'ensalada'
],

nivel:'intermedio',

familias:[
'brotes'
],

usos:[
'ensaladas',
'tacos',
'terminados'
],

roles:[
'frescura',
'textura'
],

combinaCon:[
'pepino',
'aguacate',
'limon',
'salsa de soya'
],

sustitutos:[
'lechuga',
'arugula'
],

sustitutosEconomicos:[
'col'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:2,
umami:3,
picante:1,

ahumado:0,
graso:0,
fresco:10,
aromatico:7
},

sabores:[
'fresco',
'verde'
],

texturas:[
'crujiente'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensaladas',
'bowl saludable',
'tacos frescos'
]

},

{
id:'arugula',

nombre:'Arúgula',

aliases:[
'rucula',
'arugula fresca'
],

precioUnitario:100,

unidad:'kg',

precio:{
minimo:70,
promedio:100,
maximo:160,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas',

basico:false,

tags:[
'fresco',
'ensalada',
'gourmet_accesible'
],

cocinas:[
'italiana',
'mediterranea',
'internacional'
],

tecnicas:[
'crudo',
'ensalada'
],

nivel:'intermedio',

familias:[
'hojas_verdes'
],

usos:[
'ensaladas',
'pizzas',
'terminados'
],

roles:[
'frescura',
'amargor',
'aroma'
],

combinaCon:[
'queso',
'nuez',
'tomate',
'limon'
],

sustitutos:[
'espinaca',
'berros'
],

sustitutosEconomicos:[
'lechuga'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:5,
umami:2,
picante:2,

ahumado:0,
graso:0,
fresco:10,
aromatico:8
},

sabores:[
'picante suave',
'herbal',
'amargo'
],

texturas:[
'ligera',
'crujiente'
],

temporada:[
'primavera'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada mediterranea',
'pizza con arugula',
'ensalada fresca'
]

},
{

id:'chipilin',

nombre:'Chipilín',

aliases:[

'chipilín',

'chipilin',

'hoja de chipilín',

'hojas de chipilín',

'chipilín fresco'

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


subcategoria:'hojas_quelites',


basico:false,


tags:[

'quelite',

'hoja_comestible',

'mexicano',

'chiapas',

'chiapaneco',

'tradicional'

],


cocinas:[

'mexicana',

'chiapaneca',

'sureste_mexicano'

],


tecnicas:[

'lavar',

'deshojar',

'mezclar',

'coccion_vapor',

'hervir'

],


nivel:'basico',


familias:[

'verduras',

'quelites',

'hojas_comestibles'

],


usos:[

'tamales',

'sopas',

'caldos',

'masas',

'guisos'

],


roles:[

'aromatico',

'vegetal',

'sabor',

'identidad_regional'

],


combinaCon:[

'masa_maiz',

'queso_fresco',

'manteca_cerdo',

'jitomate',

'frijol_negro'

],


sustitutos:[

'espinaca',

'acelga'

],


sustitutosEconomicos:[

'espinaca'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:0,

salado:0,

amargo:1,

umami:1,

picante:0,

ahumado:0,

graso:0,

fresco:4,

aromatico:4

},


sabores:[

'herbal',

'vegetal',

'suave',

'aromatico'

],


texturas:[

'tierna',

'hoja_fresca',

'suave_cocida'

],


temporada:[

'todo_el_año'

],


conservacion:

'refrigerado_en_recipiente_cerrado',


recetasCompatibles:[

'tamal-chipilin-queso'

]

}

];