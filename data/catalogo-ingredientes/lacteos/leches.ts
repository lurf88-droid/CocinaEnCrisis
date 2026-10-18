import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const LECHES: IngredienteCatalogo[] = [



























{
id:'leche_evaporada',

nombre:'Leche evaporada',

aliases:[
'leche evaporada'
],

precioUnitario:45,

unidad:'litro',

precio:{
minimo:30,
promedio:45,
maximo:70,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'despensa',

subcategoria:'lacteos_conserva',

basico:true,

tags:[
'cremoso',
'cocina',
'postres'
],

cocinas:[
'mexicana',
'internacional'
],

tecnicas:[
'cocer',
'ligar'
],

nivel:'basico',

familias:[
'lacteos',
'conservas',
'bases_culinarias'
],

usos:[
'cremas',
'postres',
'bebidas'
],

roles:[
'cremosidad',
'cuerpo'
],

combinaCon:[
'café',
'pasta',
'chocolate',
'frutas'
],

sustitutos:[
'leche entera'
],

sustitutosEconomicos:[
'leche entera'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:1,
amargo:0,
umami:2,
picante:0,

ahumado:0,
graso:5,
fresco:2,
aromatico:3
},

sabores:[
'lácteo',
'cremoso'
],

texturas:[
'liquida',
'cremosa'
],

temporada:[
'todo_el_año'
],

conservacion:
'alacena sin abrir / refrigerado abierto',

recetasCompatibles:[
'cremas',
'pasta cremosa',
'postres'
]

},
{
id:'leche_entera',

nombre:'Leche entera',

aliases:[
'leche',
'leche entera',
'leche de vaca'
],

precioUnitario:25,

unidad:'litro',

precio:{
minimo:18,
promedio:25,
maximo:35,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'lacteos',

subcategoria:'leches',

basico:true,

tags:[
'basico',
'cremoso',
'cocina_diaria'
],

cocinas:[
'mexicana',
'internacional'
],

tecnicas:[
'cocer',
'ligar',
'reducir'
],

nivel:'basico',

familias:[
'lacteos',
'bases_cocina'
],

usos:[
'bebidas',
'salsas',
'postres',
'cremas'
],

roles:[
'cremosidad',
'liquido',
'base'
],

combinaCon:[
'café',
'chocolate',
'harina',
'huevo',
'mantequilla'
],

sustitutos:[
'leche evaporada',
'leche deslactosada'
],

sustitutosEconomicos:[
'leche en polvo'
],

perfilSabor:{

...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:0,
umami:2,
picante:0,

ahumado:0,
graso:4,
fresco:3,
aromatico:2

},

sabores:[
'lácteo',
'ligeramente dulce'
],

texturas:[
'liquida',
'cremosa'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'bechamel',
'pasteles',
'café con leche',
'cremas'
]

},
{
id:'leche_condensada',

nombre:'Leche condensada',

aliases:[
'lechera',
'leche azucarada'
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

categoria:'despensa',

subcategoria:'lacteos_conserva',

basico:true,

tags:[
'postres',
'dulce',
'cremosidad'
],

cocinas:[
'mexicana',
'latinoamericana',
'internacional'
],

tecnicas:[
'mezclar',
'refrigerar'
],

nivel:'basico',

familias:[
'lacteos',
'postres'
],

usos:[
'postres',
'bebidas',
'cafeteria'
],

roles:[
'dulzor',
'textura',
'cremosidad'
],

combinaCon:[
'café',
'chocolate',
'frutas',
'galletas'
],

sustitutos:[
'crema',
'azúcar con leche'
],

sustitutosEconomicos:[
'leche + azúcar'
],

perfilSabor:{
...SABOR_BASE,

dulce:10,
acido:0,
salado:1,
amargo:0,
umami:2,
picante:0,

ahumado:0,
graso:5,
fresco:1,
aromatico:4
},

sabores:[
'dulce',
'lácteo'
],

texturas:[
'espesa',
'cremosa'
],

temporada:[
'todo_el_año'
],

conservacion:
'alacena sin abrir',

recetasCompatibles:[
'flan',
'postres fríos',
'café dulce'
]

},
{
id:'leche_coco',

nombre:'Leche de coco',

aliases:[
'coconut milk',
'leche coco'
],

precioUnitario:100,

unidad:'litro',

precio:{
minimo:70,
promedio:100,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'despensa',

subcategoria:'conservas',

basico:false,

tags:[
'tropical',
'cremoso',
'internacional'
],

cocinas:[
'tailandesa',
'india',
'caribeña'
],

tecnicas:[
'hervir',
'salsas',
'guisar'
],

nivel:'intermedio',

familias:[
'coco',
'conservas'
],

usos:[
'currys',
'postres',
'bebidas'
],

roles:[
'cremosidad',
'grasa',
'cuerpo'
],

combinaCon:[
'curry',
'arroz',
'pollo',
'frutas'
],

sustitutos:[
'crema',
'leche evaporada'
],

sustitutosEconomicos:[
'leche entera'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:0,
umami:1,
picante:0,

ahumado:0,
graso:9,
fresco:2,
aromatico:8
},

sabores:[
'coco',
'cremoso'
],

texturas:[
'liquida',
'cremosa'
],

temporada:[
'todo_el_año'
],

conservacion:
'alacena sin abrir',

recetasCompatibles:[
'curry de verduras',
'arroz con coco',
'postres tropicales'
]

},
{
id:'leche_cabra',

nombre:'Leche de cabra',

aliases:[
'leche caprina',
'goat milk',
'leche de cabra fresca'
],


precioUnitario:80,


unidad:'litro',


precio:{
minimo:60,
promedio:80,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'lacteos',


subcategoria:'leches_especiales',


basico:false,


tags:[
'especial',
'mediterraneo',
'nutritivo',
'tradicional'
],


cocinas:[
'mediterranea',
'europea',
'internacional'
],


tecnicas:[
'beber',
'cocinar',
'reposteria',
'salsas'
],


nivel:'basico',


familias:[
'leches',
'lacteos'
],


usos:[
'bebidas',
'quesos',
'postres',
'salsas'
],


roles:[
'liquido',
'base',
'sabor'
],


combinaCon:[
'frutas',
'cafe',
'miel',
'cereales'
],


sustitutos:[
'leche_entera',
'leche_oveja'
],


sustitutosEconomicos:[
'leche_entera',
'leche_en_polvo'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:0,
umami:3,
picante:0,

ahumado:0,
graso:5,
fresco:5,
aromatico:3
},


sabores:[
'suave',
'lacteo',
'ligeramente_marcado'
],


texturas:[
'liquida'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'queso de cabra casero',
'salsas cremosas',
'licuados',
'postres'
]

},



{
id:'leche_deslactosada',

nombre:'Leche deslactosada',

aliases:[
'leche sin lactosa',
'leche deslactosada'
],


precioUnitario:28,


unidad:'litro',


precio:{
minimo:22,
promedio:28,
maximo:40,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'lacteos',


subcategoria:'leches',


basico:true,


tags:[
'diario',
'supermercado',
'familia'
],


cocinas:[
'mexicana',
'internacional'
],


tecnicas:[
'beber',
'cocinar',
'reposteria'
],


nivel:'basico',


familias:[
'leches',
'lacteos'
],


usos:[
'cafe',
'cereal',
'licuados',
'postres'
],


roles:[
'liquido',
'base'
],


combinaCon:[
'cafe',
'avena',
'frutas',
'cacao'
],


sustitutos:[
'leche_entera',
'leche_semidescremada'
],


sustitutosEconomicos:[
'leche_en_polvo'
],


perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:0,
umami:2,
picante:0,

ahumado:0,
graso:3,
fresco:5,
aromatico:1
},


sabores:[
'suave',
'lacteo'
],


texturas:[
'liquida'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'cafe con leche',
'avena',
'licuados',
'reposteria'
]

},



{
id:'leche_semidescremada',

nombre:'Leche semidescremada',

aliases:[
'leche light',
'leche parcialmente descremada'
],


precioUnitario:25,


unidad:'litro',


precio:{
minimo:20,
promedio:25,
maximo:35,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'lacteos',


subcategoria:'leches',


basico:true,


tags:[
'diario',
'economico',
'familia'
],


cocinas:[
'mexicana',
'internacional'
],


tecnicas:[
'beber',
'cocinar',
'reposteria'
],


nivel:'basico',


familias:[
'leches',
'lacteos'
],


usos:[
'cafe',
'salsas',
'postres',
'desayunos'
],


roles:[
'liquido',
'base'
],


combinaCon:[
'cereal',
'cafe',
'frutas',
'harina'
],


sustitutos:[
'leche_entera',
'leche_deslactosada'
],


sustitutosEconomicos:[
'leche_en_polvo'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:0,
umami:2,
picante:0,

ahumado:0,
graso:4,
fresco:5,
aromatico:1
},


sabores:[
'suave',
'lacteo'
],


texturas:[
'liquida'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'cafe',
'salsas blancas',
'panqueques',
'postres'
]

},

{
id:'leche_oveja',

nombre:'Leche de oveja',

aliases:[
'leche ovina',
'sheep milk'
],

precioUnitario:100,

unidad:'litro',

precio:{
minimo:70,
promedio:100,
maximo:160,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'lacteos',

subcategoria:'leches_especiales',

basico:false,

tags:[
'especial',
'gourmet',
'queseria',
'nutritiva'
],

cocinas:[
'europea',
'mediterranea',
'internacional'
],

tecnicas:[
'beber',
'queseria',
'reposteria'
],

nivel:'intermedio',

familias:[
'leches',
'lacteos'
],

usos:[
'quesos',
'postres',
'bebidas'
],

roles:[
'base',
'sabor',
'grasa'
],

combinaCon:[
'miel',
'frutas',
'cereales',
'pan'
],

sustitutos:[
'leche_cabra',
'leche_entera'
],

sustitutosEconomicos:[
'leche_entera',
'leche_en_polvo'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:0,
umami:3,
picante:0,

ahumado:0,
graso:7,
fresco:4,
aromatico:3
},

sabores:[
'lacteo',
'cremoso',
'intenso'
],

texturas:[
'liquida'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'quesos artesanales',
'postres lacteos',
'bebidas'
]

},
{
id:'leche_almendra',

nombre:'Leche de almendra',

aliases:[
'almond milk',
'bebida de almendra'
],

precioUnitario:55,

unidad:'litro',

precio:{
minimo:35,
promedio:55,
maximo:90,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'lacteos',

subcategoria:'alternativas_lacteas',

basico:false,

tags:[
'ligera',
'vegana',
'bebidas'
],

cocinas:[
'internacional'
],

tecnicas:[
'beber',
'licuados',
'postres'
],

nivel:'basico',

familias:[
'bebidas',
'alternativas'
],

usos:[
'cafe',
'licuados',
'avena',
'postres'
],

roles:[
'liquido',
'base'
],

combinaCon:[
'cafe',
'frutas',
'cacao',
'avena'
],

sustitutos:[
'leche_cabra',
'leche_coco'
],

sustitutosEconomicos:[
'leche_entera'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:1,
umami:1,
picante:0,

ahumado:0,
graso:2,
fresco:5,
aromatico:4
},

sabores:[
'nuez',
'suave'
],

texturas:[
'liquida'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado_abierto',

recetasCompatibles:[
'cafe con almendra',
'licuados',
'avena cremosa'
]

},
];