import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ESPECIAS_INDIVIDUALES: IngredienteCatalogo[] = [




  {
    id: 'flor_jamaica',
    nombre: 'Flor de Jamaica',
    aliases: ['jamaica', 'hibiscus', 'flor de jamaica seca'],
    precioUnitario: 150, unidad: 'kg',
    categoria: 'despensa', subcategoria: 'infusiones', basico: false,
    tags: ['acida', 'seca', 'mexicana'],
    cocinas: ['mexicana', 'latinoamericana'],
    tecnicas: ['infusionar', 'hervir'],
    nivel: 'basico',
    familias: ['despensa', 'infusiones'],
    usos: ['bebidas', 'salsas'],
    roles: ['sabor_principal', 'colorante'],
    combinaCon: ['jengibre', 'canela'],
    perfilSabor: { ...SABOR_BASE, dulce: 1, acido: 9, salado: 0, amargo: 3, umami: 0, picante: 0, ahumado: 0, graso: 0, fresco: 4, aromatico: 6 },
  },
    {
    id: 'te_negro',
    nombre: 'Té negro',
    aliases: ['hojas de te negro', 'english breakfast'],
    precioUnitario: 400, unidad: 'kg',
    categoria: 'despensa', subcategoria: 'infusiones', basico: false,
    tags: ['amargo', 'cafeina'],
    cocinas: ['internacional', 'britanica'],
    tecnicas: ['infusionar', 'hervir'],
    nivel: 'basico',
    familias: ['despensa', 'infusiones'],
    usos: ['bebidas'],
    roles: ['base'],
    combinaCon: ['limon', 'miel'],
    perfilSabor: { ...SABOR_BASE, dulce: 0, acido: 1, salado: 0, amargo: 8, umami: 2, picante: 0, ahumado: 2, graso: 0, fresco: 2, aromatico: 8 },
  },
{
id:'oregano_seco',

nombre:'Orégano seco',

aliases:[

'orégano',
'oregano',
'orégano seco',
'oregano seco',
'orégano mexicano',
'oregano mexicano',
'orégano de monte'

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


categoria:'condimentos',


subcategoria:'hierbas_secas',


basico:true,


tags:[
'aromatico',
'mexicano',
'italiano'
],


cocinas:[
'mexicana',
'italiana',
'mediterranea'
],


tecnicas:[
'infusionar',
'sazonar'
],


nivel:'basico',


familias:[
'hierbas',
'aromaticos',
'condimentos_mexicanos'
],


usos:[
'salsas',
'pizza',
'frijoles',
'caldos'
],


roles:[
'aroma',
'profundidad',
'identidad_mexicana'
],


combinaCon:[
'tomate',
'queso',
'frijoles',
'carne',
'chile',
'ajo',
'cebolla',
'limon',
'pasta'
],


sustitutos:[

'tomillo'
],


sustitutosEconomicos:[
'albahaca seca'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:2,
umami:1,
picante:0,

ahumado:1,
graso:0,
fresco:3,
aromatico:10
},


sabores:[
'herbal',
'terroso'
],


texturas:[
'hoja seca'
],


temporada:[
'todo el año'
],


conservacion:
'lugar seco y cerrado',


recetasCompatibles:[
'pizza',
'frijoles de olla',
'salsas de tomate',
'adobos'
]

},

{
id:'paprika',

nombre:'Paprika',

aliases:[
'pimentón dulce',
'pimenton',
'paprika dulce',
'smoked paprika'
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


subcategoria:'especias_individuales',


basico:false,


tags:[
'color',
'aromatico',
'ahumado',
'especiado'
],


cocinas:[
'española',
'hungara',
'internacional'
],


tecnicas:[
'sazonar',
'tostar'
],


nivel:'basico',


familias:[
'especias',
'chiles'
],


usos:[
'carnes',
'papas',
'salsas',
'arroces'
],


roles:[
'color',
'aroma',
'profundidad'
],


combinaCon:[
'pollo',
'papa',
'huevo',
'carne',
'tomate'
],


sustitutos:[
'chile dulce',
'chile seco molido'
],


sustitutosEconomicos:[
'chile seco'
],


perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:0,
amargo:1,
umami:1,
picante:2,

ahumado:6,
graso:0,
fresco:1,
aromatico:8
},


sabores:[
'dulce',
'ahumado',
'pimiento'
],


texturas:[
'polvo fino'
],


temporada:[
'todo el año'
],


conservacion:
'lugar seco y cerrado',


recetasCompatibles:[
'pollo paprika',
'papas sazonadas',
'guisos',
'arroces'
]

},
{
id:'comino',

nombre:'Comino',

aliases:[

'comino',

'comino molido',

'comino entero',

'cumin'

],

precioUnitario:300,


unidad:'kg',


precio:{
minimo:220,
promedio:300,
maximo:500,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'especias',


subcategoria:'especias_individuales',


basico:true,


tags:[
'aromatico',
'calido',
'intenso',
'terroso'
],


cocinas:[
'mexicana',
'india',
'arabe',
'latinoamericana'
],


tecnicas:[
'tostar',
'sazonar',
'moler'
],


nivel:'basico',


familias:[
'especias'
],


usos:[
'carnes',
'frijoles',
'guisos',
'currys',
'adobos'
],


roles:[
'aroma',
'profundidad',
'identidad'
],


combinaCon:[
'chile',
'ajo',
'cebolla',
'carne',
'frijoles',
'jitomate',
'pollo',
'papa',
'lenteja'
],



sustitutos:[
'cilantro seco',
'semilla de cilantro'
],


sustitutosEconomicos:[
'orégano',
'pimienta_negra',
'laurel',
'tomillo'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:2,
umami:2,
picante:1,

ahumado:2,
graso:0,
fresco:0,
aromatico:10
},


sabores:[
'terroso',
'calido',
'nuez'
],


texturas:[
'polvo fino'
],


temporada:[
'todo el año'
],


conservacion:
'lugar seco y cerrado',


recetasCompatibles:[
'tacos',
'chili',
'frijoles',
'adobos mexicanos',
'currys',
'carne al pastor',
'picadillo mexicano',

'pozole rojo',
'tostadas',
'sopa de tortilla'
]

},

{
id:'tomillo',

nombre:'Tomillo',

aliases:[

'tomillo',

'tomillo seco',

'thyme',

'thyme herb'

],


precioUnitario:300,


unidad:'kg',


precio:{

minimo:180,

promedio:300,

maximo:500,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'especias',


subcategoria:'hierbas_aromaticas',


basico:true,


tags:[

'aromatico',

'herbal',

'europeo',

'cocina_base'

],


cocinas:[

'francesa',

'mediterranea',

'italiana',

'internacional'

],


tecnicas:[

'infusionar',

'sazonar',

'cocer_lento',

'hornear'

],


nivel:'basico',


familias:[

'hierbas',

'aromaticos',

'especias'

],


usos:[

'pollo',

'carnes',

'sopas',

'salsas',

'hongos',

'papa'

],


roles:[

'aroma',

'profundidad',

'equilibrio'

],


combinaCon:[

'mantequilla',

'pollo',

'ajo',

'cebolla',

'papa',

'champiñon',

'crema',

'limon'

],


sustitutos:[

'orégano_seco',

'romero',

'albahaca_seca'

],


sustitutosEconomicos:[

'orégano_seco',

'laurel'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:0,

salado:0,

amargo:2,

umami:2,

picante:0,

ahumado:1,

graso:0,

fresco:5,

aromatico:10

},


sabores:[

'herbal',

'terroso',

'ligeramente_maderoso'

],


texturas:[

'hoja_seca'

],


temporada:[

'todo_el_año'

],


conservacion:

'lugar seco y cerrado',


recetasCompatibles:[

'pollo al tomillo',

'salsa cremosa',

'champiñones salteados',

'papas al horno',

'estofados',

'sopas'

]

},
{
id:'laurel',

nombre:'Laurel',

aliases:[

'hoja de laurel',

'laurel seco',

'bay leaf',
'laurel hoja',
'laurel mexicano'

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

categoria:'especias',

subcategoria:'hierbas_aromaticas',

basico:true,


tags:[

'aromatico',

'caldos',

'mexicano'

],


cocinas:[

'mexicana',

'francesa',

'mediterranea'

],


tecnicas:[

'infusionar',

'hervir',

'cocer lento'

],


nivel:'basico',


familias:[

'hierbas',

'aromaticos',
'cocina_mexicana'

],


usos:[

'caldos',

'frijoles',

'guisos',

'salsas'

],


roles:[

'aroma',

'profundidad'

],


combinaCon:[

'frijol',

'carne',

'pollo',

'tomate',

'cebolla',
'ajo',
'papa',
'pescado',
'zanahoria'

],


sustitutos:[

'tomillo',

'oregano_seco'

],


sustitutosEconomicos:[

'oregano_seco'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:0,

salado:0,

amargo:2,

umami:2,

picante:1,

ahumado:1,

graso:0,

fresco:3,

aromatico:10

},


sabores:[

'herbal',

'terroso',

'aromatico'

],


texturas:[

'seca',

'fibrosa'

],


temporada:[

'todo_el_año'

],


conservacion:

'lugar seco y oscuro',


recetasCompatibles:[

'frijoles de olla',

'caldos',

'guisados',

'salsas',
'escabeches'

]

},
{
id:'curcuma',

nombre:'Cúrcuma',

aliases:[
'curcuma molida',
'turmeric'
],


precioUnitario:250,


unidad:'kg',


precio:{
minimo:150,
promedio:250,
maximo:450,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'especias_individuales',


basico:false,


tags:[
'color',
'aromatico',
'indio',
'especiado'
],


cocinas:[
'india',
'asiatica',
'internacional'
],


tecnicas:[
'tostar',
'infusionar',
'sazonar'
],


nivel:'basico',


familias:[
'especias'
],


usos:[
'arroces',
'currys',
'sopas',
'guisos'
],


roles:[
'color',
'aroma',
'profundidad'
],


combinaCon:[
'comino',
'jengibre',
'arroz',
'leche de coco'
],


sustitutos:[
'paprika',
'azafran para color'
],


sustitutosEconomicos:[
'paprika'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:3,
umami:1,
picante:1,

ahumado:1,
graso:0,
fresco:2,
aromatico:8
},


sabores:[
'terroso',
'ligeramente amargo',
'especiado'
],


texturas:[
'polvo fino'
],


temporada:[
'todo el año'
],


conservacion:
'lugar seco y cerrado',


recetasCompatibles:[
'arroz amarillo',
'curry',
'sopas especiadas',
'verduras al curry'
]

},
{
id:'jengibre_seco',

nombre:'Jengibre seco',

aliases:[
'jengibre molido',
'ginger powder'
],


precioUnitario:300,


unidad:'kg',


precio:{
minimo:200,
promedio:300,
maximo:500,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'condimentos',


subcategoria:'especias_individuales',


basico:false,


tags:[
'asiatico',
'aromatico',
'picante'
],


cocinas:[
'asiatica',
'india',
'internacional'
],


tecnicas:[
'infusionar',
'sazonar'
],


nivel:'basico',


familias:[
'especias'
],


usos:[
'bebidas',
'currys',
'postres',
'salsas'
],


roles:[
'aroma',
'picor',
'frescura'
],


combinaCon:[
'ajo',
'soya',
'miel',
'canela'
],


sustitutos:[
'jengibre fresco'
],


sustitutosEconomicos:[
'limon',
'chile suave'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:2,
umami:1,
picante:5,

ahumado:1,
graso:0,
fresco:3,
aromatico:9
},


sabores:[
'picante',
'cítrico',
'calido'
],


texturas:[
'polvo fino'
],


temporada:[
'todo el año'
],


conservacion:
'lugar seco y cerrado',


recetasCompatibles:[
'té de jengibre',
'currys',
'galletas especiadas',
'salsas asiaticas'
]

},
{
id:'canela',

nombre:'Canela',

aliases:[

"canela",

"canela en rama",

"rama de canela",

"canela molida"

],


precioUnitario:400,


unidad:'kg',


precio:{
minimo:250,
promedio:400,
maximo:700,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'especias',


subcategoria:'especias_individuales',


basico:true,


tags:[
'dulce',
'aromatico',
'tradicional',
'reposteria'
],


cocinas:[
'mexicana',
'asiatica',
'internacional'
],


tecnicas:[
'infusionar',
'hornear',
'moler'
],


nivel:'basico',


familias:[
'especias'
],


usos:[
'postres',
'bebidas',
'guisos'

],


roles:[
'aroma',
'dulzor',
'identidad'
],


combinaCon:[
'chocolate',
'cafe',
'miel',
'manzana',
'arroz',
'vainilla',
'leche'
],


sustitutos:[
'nuez moscada',
'clavo'
],


sustitutosEconomicos:[
'clavo'
],


perfilSabor:{
...SABOR_BASE,

dulce:5,
acido:0,
salado:0,
amargo:1,
umami:0,
picante:1,

ahumado:1,
graso:0,
fresco:1,
aromatico:10
},


sabores:[
'dulce',
'calido',
'especiado'
],


texturas:[
'polvo',
'ramita'
],


temporada:[
'todo el año'
],


conservacion:
'lugar seco y cerrado',


recetasCompatibles:[
'arroz con leche',
'cafe de olla',
'pan dulce',
'postres'
]

},
{
id:'clavo',

nombre:'Clavo de olor',

aliases:[

'clavo',

'clavo de olor',

'clavo molido',

'clove'

],


precioUnitario:700,


unidad:'kg',
pesoPorUnidad: 0.2,

precio:{

minimo:450,

promedio:700,

maximo:1000,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'especias',


subcategoria:'especias_individuales',


basico:true,


tags:[

'aromatico',

'intenso',

'dulce',

'reposteria',

'mexicano'

],


cocinas:[

'mexicana',

'india',

'europea',

'internacional'

],


tecnicas:[

'infusionar',

'moler',

'tostar',

'sazonar'

],


nivel:'basico',


familias:[

'especias',

'aromaticos',

'especias_calidas'

],


usos:[

'postres',

'bebidas',

'adobos',

'moles',

'guisos'

],


roles:[

'aroma',

'profundidad',

'especiado',

'identidad'

],


combinaCon:[

'canela',

'chocolate',

'cafe',

'carne',

'jitomate',

'chile',

'vainilla'

],


sustitutos:[

'nuez_moscada',

'canela',

'pimienta_de_jamaica'

],


sustitutosEconomicos:[

'canela',

'nuez_moscada'

],


perfilSabor:{

...SABOR_BASE,

dulce:5,

acido:0,

salado:0,

amargo:3,

umami:1,

picante:3,

ahumado:1,

graso:0,

fresco:1,

aromatico:10

},


sabores:[

'dulce',

'calido',

'especiado',

'ligeramente_picante'

],


texturas:[

'duro',

'polvo'

],


temporada:[

'todo_el_año'

],


conservacion:

'lugar seco y cerrado',


recetasCompatibles:[

'cafe de olla',

'mole poblano',

'adobos mexicanos',

'ponche',

'postres',

'carne especiada'

]

},
{
id:'pimienta_negra',

nombre:'Pimienta negra',

aliases:[

'pimienta',
'pimienta negra',
'pimienta molida',
'pimienta entera',
'black pepper'

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

categoria:'especias',

subcategoria:'especias_individuales',

basico:true,

tags:[
'aromatico',
'base_cocina'
],

cocinas:[
'mundial',
'mexicana',
'europea'
],

tecnicas:[
'sazonar',
'moler'
],

nivel:'basico',

familias:[
'especias',
'aromaticos'
],

usos:[
'sopas',
'carnes',
'salsas',
'guisos'
],

roles:[
'aroma',
'picor',
'profundidad'
],

combinaCon:[
'sal',
'carne',
'pollo',
'crema',
'huevo',
'papa',
'champiñon',
'queso',
'salsas'
],

sustitutos:[
'pimienta_blanca'
],

sustitutosEconomicos:[
'chile seco',
'oregano_seco'
],

perfilSabor:{

...SABOR_BASE,

dulce:0,
acido:0,
salado:0,
amargo:2,
umami:1,
picante:7,

ahumado:1,
graso:0,
fresco:2,
aromatico:9

},

sabores:[
'picante',
'aromatico'
],

texturas:[
'polvo'
],

temporada:[
'todo_el_año'
],

conservacion:
'lugar seco y cerrado',

recetasCompatibles:[
'salsas',
'carnes',
'guisos',
'sopas',
'pasta',
'pure de papa'
]

},
{
id:'nuez_moscada',

nombre:'Nuez moscada',

aliases:[

'nuez moscada',
'nuez_moscada',
'nuez moscada entera',
'nutmeg'

],


// 💰 COSTO

precioUnitario:420,

unidad:'kg',

unidadCompra:'pieza',

pesoPorUnidad:15,

precio:{

minimo:300,

promedio:420,

maximo:550,

moneda:'MXN',

actualizado:'2026-08'

},


// 📦 CLASIFICACIÓN

categoria:'especias',

subcategoria:'especias aromáticas',


// 🧾 INFORMACIÓN GENERAL

basico:false,


tags:[

'especia',
'aromatica',
'calida',
'profundidad'

],


// 🌎 COCINA

cocinas:[

'mexicana',
'europea',
'asiatica'

],


tecnicas:[

'rallar',
'infusionar',
'tostar'

],


// ⭐ NIVEL

nivel:

'intermedio',


// 🧩 CHEF LUNA

familias:[

'especias',
'aromaticos'

],


usos:[

'moles',

'salsas',

'postres',

'bebidas calientes',

'cremas'

],


roles:[

'aroma',

'profundidad',

'equilibrio'

],


// 🧠 MOTOR

combinaCon:[

'canela',

'clavo',

'chocolate',

'crema',

'leche',

'almendra'

],


sustitutos:[

'macis',

'canela'

],


sustitutosEconomicos:[

'canela'

],


// 👅 SENSORIAL

perfilSabor:{

dulce:2,

acido:0,

salado:0,

amargo:1,

umami:0,

picante:0,

ahumado:0,

graso:0,

fresco:0,

aromatico:5,

},
sabores:[

'calido',

'terroso',

'dulce especiado'

],


texturas:[

'polvo fino'

],


// 🌱 PRODUCTO

temporada:[

'todo_el_año'

],


conservacion:

'Guardar en recipiente hermético, lugar seco y protegido de luz y humedad',


// 🍳 RECETAS

recetasCompatibles:[

'mole-poblano',

'salsas',

'postres',

'bebidas'

]

},


];