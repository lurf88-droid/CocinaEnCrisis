import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ENVOLTURAS_NATURALES: IngredienteCatalogo[] = [



{
id:'hoja_maiz',


nombre:'Hoja de maíz para tamal',


aliases:[
'hoja maiz',
'hojas de tamal',
'hoja_tamal',
'corn husk'
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



categoria:'despensa',



subcategoria:'mexicanos',



basico:true,



tags:[
'mexicano',
'tamal',
'tradicional',
'envoltura'
],



cocinas:[
'mexicana'
],



tecnicas:[
'hidratar',
'envolver',
'cocer'
],



nivel:'basico',



familias:[
'mexicanos',
'maiz',
'tecnicas_coccion'
],



usos:[
'tamales',
'envoltura_de_alimentos'
],



roles:[
'proteccion',
'aroma',
'coccion'
],



combinaCon:[
'masa_maiz',
'pollo',
'cerdo',
'queso',
'chile'
],



sustitutos:[
'hoja_platano',
'papel_para_hornear'
],



sustitutosEconomicos:[
'papel_encerado'
],



perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:1,
umami:1,
picante:0,

ahumado:1,
graso:0,
fresco:2,
aromatico:3
},



sabores:[
'maiz',
'herbal'
],



texturas:[
'fibrosa',
'seca'
],



temporada:[
'todo_el_año'
],



conservacion:
'lugar_seco_y_cerrado',



recetasCompatibles:[
'tamales de pollo',
'tamales de dulce',
'tamales de rajas',
'tamales de mole'
]

},
{
id:'hoja_platano',


nombre:'Hoja de plátano',


aliases:[
'hoja platano',
'hojas platano',
'banana leaf'
],



precioUnitario:15,



unidad:'pieza',



precio:{
minimo:10,
promedio:15,
maximo:30,
moneda:'MXN',
actualizado:'2026-08'
},



categoria:'despensa',



subcategoria:'mexicanos',



basico:true,



tags:[
'mexicano',
'tamal',
'aromatica',
'tropical'
],



cocinas:[
'mexicana',
'centroamericana',
'caribeña'
],



tecnicas:[
'asar',
'calentar',
'envolver'
],



nivel:'basico',



familias:[
'hojas',
'mexicanos'
],



usos:[
'tamales',
'barbacoa',
'pescados',
'guisos'
],



roles:[
'envoltura',
'aroma',
'humedad'
],



combinaCon:[
'masa_maiz',
'pollo',
'cerdo',
'pescado',
'chile'
],



sustitutos:[
'hoja_maiz',
'papel_para_hornear'
],



sustitutosEconomicos:[
'papel_encerado'
],



perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:1,
umami:1,
picante:0,

ahumado:2,
graso:0,
fresco:4,
aromatico:6
},



sabores:[
'herbal',
'ligeramente_dulce'
],



texturas:[
'fibrosa',
'flexible'
],



temporada:[
'todo_el_año'
],



conservacion:
'refrigerado',



recetasCompatibles:[
'tamal oaxaqueño',
'pescado en hoja de plátano',
'barbacoa envuelta',
'guisos tradicionales'
]

},
{
id:'hoja_maguey',

nombre:'Hoja de maguey',

aliases:[

'quiote hoja',
' penca de maguey',
'hoja para barbacoa'

],


precioUnitario:40,

unidad:'kg',


precio:{

minimo:25,

promedio:40,

maximo:80,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'bases_culinarias',

subcategoria:'envolturas_naturales',


basico:false,


tags:[

'mexicano',

'tradicional',

'aromatico'

],


cocinas:[

'mexicana'

],


tecnicas:[

'cocer_vapor',

'hornear',

'envolver'

],


nivel:'intermedio',


familias:[

'envolturas',

'cocina_mexicana'

],


usos:[

'barbacoa',

'cocciones_lentas'

],


roles:[

'aroma',

'proteccion',

'identidad'

],


combinaCon:[

'borrego',

'carne',

'chile',

'especias'

],


sustitutos:[

'hoja_platano',

'papel_encerado'

],


sustitutosEconomicos:[

'hoja_platano'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:0,

salado:0,

amargo:3,

umami:2,

picante:0,

ahumado:4,

graso:0,

fresco:4,

aromatico:9

},


sabores:[

'herbal',

'terroso',

'ahumado'

],


texturas:[

'fibrosa'

],


temporada:[

'todo_el_año'

],


conservacion:

'refrigerado fresco',


recetasCompatibles:[

'barbacoa de borrego',

'cocciones tradicionales'

]

},
];