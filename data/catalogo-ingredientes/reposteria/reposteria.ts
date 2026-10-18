import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const FRUTOS_SECOS: IngredienteCatalogo[] = [




{
id:'cacahuate',

nombre:'Cacahuate',

aliases:[
'mani',
'peanut'
],


precioUnitario:90,


unidad:'kg',


precio:{
minimo:60,
promedio:90,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',


subcategoria:'frutos_secos',


basico:true,


tags:[
'economico',
'energia',
'versatil'
],


cocinas:[
'mexicana',
'asiatica',
'internacional'
],


tecnicas:[
'tostar',
'moler',
'salsa'
],


nivel:'basico',


familias:[
'semillas',
'frutos_secos',
'proteinas_vegetales'
],


usos:[
'salsas',
'botanas',
'postres',
'cremas'
],


roles:[
'grasa_saludable',
'textura',
'energia'
],


combinaCon:[
'chocolate',
'miel',
'chile',
'frutas'
],


sustitutos:[
'almendra',
'nuez'
],


sustitutosEconomicos:[
'semillas'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:2,
amargo:1,
umami:4,
picante:0,

ahumado:2,
graso:8,
fresco:1,
aromatico:5
},


sabores:[
'nuez',
'tostado'
],


texturas:[
'crujiente',
'cremosa_molida'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'salsa de cacahuate',
'mole',
'crema de cacahuate',
'botanas'
]

},
{
id:'nuez',

nombre:'Nuez',

aliases:[
'nuez de castilla',
'walnut'
],

precioUnitario:320,

unidad:'kg',

precio:{
minimo:220,
promedio:320,
maximo:600,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',

subcategoria:'frutos_secos',


basico:false,


tags:[
'reposteria',
'gourmet',
'aromatica'
],


cocinas:[
'mexicana',
'europea',
'internacional'
],


tecnicas:[
'tostar',
'picar',
'moler'
],


nivel:'basico',


familias:[
'frutos_secos',
'proteinas_vegetales'
],


usos:[
'postres',
'ensaladas',
'salsas',
'panaderia'
],


roles:[
'textura',
'grasa_saludable',
'aroma'
],


combinaCon:[
'quesos',
'miel',
'frutas',
'chocolate'
],


sustitutos:[
'pecana',
'almendra'
],


sustitutosEconomicos:[
'cacahuate'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:2,
umami:4,
picante:0,

ahumado:2,
graso:8,
fresco:1,
aromatico:6
},


sabores:[
'nuez',
'tostado',
'terroso'
],


texturas:[
'crujiente'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'pan de nuez',
'ensalada con nuez',
'postres',
'salsas'
]

},
{
id:'nuez_pecana',

nombre:'Nuez pecana',

aliases:[
'pecana',
'pecan'
],

precioUnitario:380,

unidad:'kg',

precio:{
minimo:260,
promedio:380,
maximo:700,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',

subcategoria:'frutos_secos',


basico:false,


tags:[
'dulce',
'reposteria',
'gourmet'
],


cocinas:[
'americana',
'internacional'
],


tecnicas:[
'tostar',
'picar'
],


nivel:'basico',


familias:[
'frutos_secos'
],


usos:[
'tartas',
'panaderia',
'postres',
'granola'
],


roles:[
'textura',
'aroma',
'grasa'
],


combinaCon:[
'caramelo',
'chocolate',
'vainilla',
'miel'
],


sustitutos:[
'nuez',
'almendra'
],


sustitutosEconomicos:[
'cacahuate'
],


perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:0,
amargo:1,
umami:3,
picante:0,

ahumado:1,
graso:9,
fresco:1,
aromatico:6
},


sabores:[
'dulce',
'nuez',
'mantecoso'
],


texturas:[
'crujiente'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'tarta de pecana',
'galletas',
'postres'
]

},
{
id:'coco_rallado',

nombre:'Coco rallado',

aliases:[
'coco seco',
'coco rallado deshidratado'
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

categoria:'despensa',

subcategoria:'frutos_secos',

basico:false,

tags:[
'tropical',
'reposteria',
'aroma'
],

cocinas:[
'latinoamericana',
'asiatica',
'internacional'
],

tecnicas:[
'mezclar',
'tostar',
'hornear'
],

nivel:'basico',

familias:[
'frutas_secas',
'reposteria'
],

usos:[
'postres',
'panaderia',
'bebidas'
],

roles:[
'aroma',
'textura',
'grasa'
],

combinaCon:[
'chocolate',
'piña',
'leche',
'avena'
],

sustitutos:[
'nuez',
'almendra'
],

sustitutosEconomicos:[
'avena tostada'
],

perfilSabor:{
...SABOR_BASE,

dulce:5,
acido:0,
salado:0,
amargo:0,
umami:1,
picante:0,

ahumado:1,
graso:8,
fresco:1,
aromatico:8
},

sabores:[
'coco',
'dulce'
],

texturas:[
'fibrosa',
'crujiente'
],

temporada:[
'todo_el_año'
],

conservacion:
'lugar seco',

recetasCompatibles:[
'cocadas',
'pasteles',
'granola'
]

},
{
id:'arandano',


nombre:'Arándano',


aliases:[
'arandano',
'arandano azul',
'blueberry'
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


categoria:'frutas',


subcategoria:'bayas',


basico:false,


tags:[
'acido',
'gourmet',
'reposteria',
'antioxidante'
],


cocinas:[
'americana',
'francesa',
'internacional'
],


tecnicas:[
'salsa',
'reduccion',
'reposteria'
],


nivel:'intermedio',


familias:[
'frutas',
'bayas'
],


usos:[
'postres',
'muffins',
'salsas',
'desayunos'
],


roles:[
'acidez',
'color',
'aroma'
],


combinaCon:[
'vainilla',
'queso',
'yogurt',
'avena'
],


sustitutos:[
'zarzamora',
'frambuesa'
],


sustitutosEconomicos:[
'fresa'
],


perfilSabor:{
...SABOR_BASE,

dulce:5,
acido:7,
salado:0,
amargo:1,
umami:1,
picante:0,

ahumado:0,
graso:0,
fresco:8,
aromatico:7
},


sabores:[
'acido',
'dulce',
'frutal'
],


texturas:[
'jugosa',
'pequeña'
],


temporada:[
'verano'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'muffins de arándano',
'salsa de frutos rojos',
'postres'
]

},
{
id:'almendra',

nombre:'Almendra',

aliases:[

'almendra entera',

'almendra fileteada',

'almond'

],

precioUnitario:280,

unidad:'kg',

precio:{

minimo:200,

promedio:280,

maximo:450,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'despensa',

subcategoria:'frutos_secos',


basico:false,


tags:[

'semilla',

'reposteria',

'nutritivo'

],


cocinas:[

'europea',

'mexicana',

'internacional'

],


tecnicas:[

'tostar',

'moler',

'rebanar'

],


nivel:'basico',


familias:[

'frutos_secos',

'semillas'

],


usos:[

'postres',

'salsas',

'botanas'

],


roles:[

'textura',

'grasa',

'aroma'

],


combinaCon:[

'chocolate',

'miel',

'canela',

'frutas'

],


sustitutos:[

'nuez',

'cacahuate'

],


sustitutosEconomicos:[

'cacahuate'

],


perfilSabor:{

...SABOR_BASE,

dulce:3,

acido:0,

salado:0,

amargo:2,

umami:2,

picante:0,

ahumado:2,

graso:8,

fresco:1,

aromatico:7

},


sabores:[

'nuez',

'tostado'

],


texturas:[

'crujiente',

'harinosa'

],


temporada:[

'todo_el_año'

],


conservacion:

'lugar seco y cerrado',


recetasCompatibles:[

'rompope',

'pasteles',

'salsas',

'granola'

]

},
{
  id:'pasas',

  nombre:'Pasas',

  aliases:[
    'pasa',
    'pasas',
    'uva pasa',
    'uvas pasas',
    'uva deshidratada',
    'uvas deshidratadas'
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


  categoria:'frutas',


  subcategoria:'frutas_deshidratadas',


  basico:false,


  tags:[

    'uva',

    'fruta_deshidratada',

    'dulce',

    'despensa',

    'reposteria',

    'tradicional'

  ],


  cocinas:[

    'mexicana',

    'chiapaneca',

    'mediterranea',

    'internacional'

  ],


  tecnicas:[

    'hidratar',

    'hornear',

    'guisar',

    'rellenar'

  ],


  nivel:'basico',


  familias:[

    'frutas',

    'frutas_deshidratadas'

  ],


  usos:[

    'tamales',

    'rellenos',

    'postres',

    'panaderia',

    'reposteria',

    'guisos'

  ],


  roles:[

    'dulzor',

    'contraste',

    'textura',

    'relleno'

  ],


  combinaCon:[

    'almendra',

    'canela',

    'platano_macho',

    'masa_maiz',

    'carne_cerdo'

  ],


  sustitutos:[

    'arandano_deshidratado'
  ],


  sustitutosEconomicos:[

    'ciruela_pasa'
  ],


  perfilSabor:{

    ...SABOR_BASE,

    dulce:8,

    acido:2,

    salado:0,

    amargo:0,

    umami:0,

    picante:0,

    ahumado:0,

    graso:0,

    fresco:0,

    aromatico:4

  },


  sabores:[

    'dulce',

    'frutal',

    'concentrado'

  ],


  texturas:[

    'suave',

    'masticable',

    'carnosa'

  ],


  temporada:[

    'todo_el_año'

  ],


  conservacion:

    'seco_en_recipiente_hermetico',


  recetasCompatibles:[

    'tamal-cambray-chiapaneco'

  ]

},
];