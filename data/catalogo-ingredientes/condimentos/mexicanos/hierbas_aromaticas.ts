import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const HIERBAS_AROMATICAS: IngredienteCatalogo[] = [


{
id:'hoja_santa',

nombre:'Hoja santa',

aliases:[
  'hoja santa',
  'hierba santa',
  'acuyo',
  'tlanepa',
  'yierba santa',
  'momon',
  'momón'
],



precioUnitario:100,



unidad:'kg',
pesoPorUnidad:15,


precio:{
minimo:60,
promedio:100,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},



categoria:'condimentos',



subcategoria:'mexicanos',



basico:false,



tags:[
'aromatica',
'mexicano',
'tamal',
'tradicional'
],



cocinas:[
'mexicana',
'oaxaqueña',
'veracruzana'
],



tecnicas:[
'envolver',
'cocer',
'infusionar',
'perfumar'
],



nivel:'intermedio',



familias:[
'hierbas',
'condimentos',
'mexicanos'
],



usos:[
'tamales',
'moles',
'guisos',
'quesos',
'pescados'
],



roles:[
'aroma',
'sabor',
'herbal'
],



combinaCon:[
'masa_maiz',
'queso',
'pollo',
'pescado',
'chile',
'frijol'
],



sustitutos:[
'epazote',
'albahaca'
],



sustitutosEconomicos:[
'epazote'
],



perfilSabor:{
...SABOR_BASE,


dulce:1,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:0,


ahumado:0,
graso:0,
fresco:7,
aromatico:10
},



sabores:[
'anisado',
'herbal',
'aromatico'
],



texturas:[
'fibrosa',
'suave'
],



temporada:[
'todo_el_año'
],



conservacion:
'refrigerado',



recetasCompatibles:[
'tamales de hoja santa',
'queso con hoja santa',
'mole con hoja santa',
'pescado envuelto en hoja santa'
]

},
{
id:'hoja_aguacate',


nombre:'Hoja de aguacate',


aliases:[
'hoja aguacate',
'hojas de aguacate'
],



precioUnitario:120,



unidad:'kg',



precio:{
minimo:80,
promedio:120,
maximo:220,
moneda:'MXN',
actualizado:'2026-08'
},



categoria:'condimentos',



subcategoria:'mexicanos',



basico:false,



tags:[
'aromatica',
'mexicano',
'guisos',
'tacos'
],



cocinas:[
'mexicana'
],



tecnicas:[
'tostar',
'infusionar',
'moler'
],



nivel:'intermedio',



familias:[
'hierbas',
'condimentos',
'mexicanos'
],



usos:[
'frijoles',
'guisos',
'salsas',
'carnes'
],



roles:[
'aroma',
'profundidad',
'sabor'
],



combinaCon:[
'frijol',
'carne',
'pollo',
'chile',
'ajo',
'cebolla'
],



sustitutos:[
'epazote',
'hoja_santa'
],



sustitutosEconomicos:[
'epazote'
],



perfilSabor:{
...SABOR_BASE,


dulce:1,
acido:0,
salado:0,
amargo:2,
umami:3,
picante:0,


ahumado:2,
graso:0,
fresco:5,
aromatico:8
},



sabores:[
'herbal',
'ligeramente_ahumado',
'nuez'
],



texturas:[
'suave',
'seca'
],



temporada:[
'todo_el_año'
],



conservacion:
'lugar_seco_y_cerrado',



recetasCompatibles:[
'frijoles con hoja de aguacate',
'salsas tradicionales',
'guisos mexicanos'
]

},
{
id:'epazote',

nombre:'Epazote',

aliases:[

'epazote fresco',

'epazote seco',

'paico',

'wormseed',
'epazotl'

],

precioUnitario:120,

unidad:'kg',

precio:{

minimo:80,

promedio:120,

maximo:200,

moneda:'MXN',

actualizado:'2026-08'

},

categoria:'condimentos',

subcategoria:'hierbas_aromaticas_mexicanas',

basico:true,

tags:[

'mexicano',

'aromatico',

'tradicional',

'economico'

],

cocinas:[

'mexicana',

'latinoamericana'

],

tecnicas:[

'infusionar',

'cocer',

'guisar',

'aromatizar'

],

nivel:'basico',

familias:[

'hierbas',

'aromaticos',

'cocina_mexicana',
'hierbas_frescas'

],

usos:[

'frijoles',

'caldos',

'sopas',

'guisos',

'quesadillas'

],

roles:[

'aroma',

'identidad_mexicana',

'potenciador_sabor',
'equilibrio'

],

combinaCon:[

'frijol',

'maiz',

'chile',

'queso',

'nopal',

'huitlacoche',
'papa',
'caldo_pollo'

],

sustitutos:[

'cilantro',

'oregano_seco',

'yerbabuena'

],

sustitutosEconomicos:[

'oregano_seco'

],

perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:0,

salado:0,

amargo:3,

umami:2,

picante:0,

ahumado:1,

graso:0,

fresco:7,

aromatico:10

},

sabores:[

'herbal',

'terroso',

'intenso'

],

texturas:[

'fibrosa',

'ligera'

],

temporada:[

'todo_el_año'

],

conservacion:

'refrigerado fresco / lugar seco si es seco',

recetasCompatibles:[

'frijoles de olla',

'quesadillas de huitlacoche',

'caldo de hongos',

'sopa de tortilla',

'nopales guisados',
'tlacoyos',
'quesadillas tradicionales'

]

},
{
    id:'papalo',

    nombre:'Pápalo',

    aliases:[
      'pápalo',
      'papaloquelite',
      'pápalo quelite'
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

    categoria:'condimentos',

    subcategoria:'hierbas_aromaticas',

    basico:false,

    tags:[
      'hierba_fresca',
      'quelite',
      'mexicano',
      'puebla',
      'aromatico'
    ],

    cocinas:[
      'mexicana',
      'poblana',
      'antojitos_mexicanos'
    ],

    tecnicas:[
      'crudo',
      'picar',
      'deshojar'
    ],

    nivel:'basico',

    familias:[
      'condimentos',
      'hierbas_aromaticas',
      'quelites'
    ],

    usos:[
      'cemitas',
      'tacos',
      'antojitos',
      'guarniciones'
    ],

    roles:[
      'aromatico',
      'fresco',
      'contraste'
    ],

    combinaCon:[
      'aguacate',
      'cebolla_blanca',
      'quesillo',
      'chile_chipotle'
    ],

    sustitutos:[
      'cilantro'
    ],

    sustitutosEconomicos:[
      'cilantro'
    ],

    perfilSabor:{
      ...SABOR_BASE,

      dulce:0,
      acido:0,
      salado:0,
      amargo:2,
      umami:0,
      picante:0,
      ahumado:0,
      graso:0,
      fresco:5,
      aromatico:5
    },

    sabores:[
      'herbal',
      'intenso',
      'fresco'
    ],

    texturas:[
      'hoja_fresca',
      'tierna'
    ],

    temporada:[
      'primavera',
      'verano',
      'otoño'
    ],

    conservacion:
      'refrigerado_envuelto_en_papel_humedo',

    recetasCompatibles:[
      'cemita-poblana'
    ]
  },
];