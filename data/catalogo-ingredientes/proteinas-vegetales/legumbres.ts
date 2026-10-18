import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const LEGUMBRES: IngredienteCatalogo[] = [


{
id:'frijol_negro',

nombre:'Frijol negro',

aliases:[
'frijol',
'frijol negro seco',
'black beans'
],


precioUnitario:45,


unidad:'kg',


precio:{
minimo:30,
promedio:45,
maximo:80,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',


subcategoria:'legumbres',


basico:true,


tags:[
'economico',
'tradicional',
'rendidor',
'proteina vegetal'
],


cocinas:[
'mexicana',
'latinoamericana',
'caribeña'
],


tecnicas:[
'hervir',
'guisar',
'moler',
'refritar'
],


nivel:'basico',


familias:[
'legumbres',
'semillas_leguminosas',
'proteinas_vegetales'
],


usos:[
'frijoles_de_la_olla',
'refritos',
'sopas',
'tacos',
'ensaladas'
],


roles:[
'proteina',
'fibra',
'saciedad',
'volumen'
],


combinaCon:[
'arroz',
'queso',
'chile',
'tortilla',
'huevo'
],


sustitutos:[
'frijol_bayo',
'lenteja',
'garbanzo'
],


sustitutosEconomicos:[
'lenteja',
'soya_texturizada'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:1,
umami:6,
picante:0,

ahumado:2,
graso:2,
fresco:2,
aromatico:3
},


sabores:[
'terroso',
'umami',
'suave'
],


texturas:[
'cremosa',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'frijoles_de_la_olla',
'frijoles_refritos',
'sope_de_frijol',
'arroz_con_frijoles'
]

},
{
id:'frijol_colorado',

nombre:'Frijol colorado',

aliases:[

'frijol colorado',

'frijoles colorados',

'frijol colorado seco'

],


precioUnitario:58,


unidad:'kg',


precio:{

minimo:42,

promedio:58,

maximo:80,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'proteinas_vegetales',


subcategoria:'leguminosas',


basico:false,


tags:[

'frijol',

'leguminosa',

'seco',

'proteina_vegetal',

'mexicano',

'chiapas',

'comitan',

'tradicional'

],


cocinas:[

'mexicana',

'chiapaneca',

'comiteca'

],


tecnicas:[

'remojo',

'coccion',

'hervir',

'machacar',

'refreir'

],


nivel:'basico',


familias:[

'proteinas_vegetales',

'leguminosas',

'frijoles'

],


usos:[

'pan_compuesto',

'frijoles_refritos',

'guisos',

'sopas',

'antojitos',

'rellenos'

],


roles:[

'proteina_vegetal',

'base',

'saciedad',

'cremosidad'

],


combinaCon:[

'pan_frances_comiteco',

'carne_cerdo',

'queso_anejo',

'cebolla_blanca',

'chile_ancho'

],


sustitutos:[

'frijol_bayo',

'frijol_negro'

],


sustitutosEconomicos:[

'frijol_bayo'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:0,

salado:0,

amargo:1,

umami:3,

picante:0,

ahumado:0,

graso:0,

fresco:0,

aromatico:2

},


sabores:[

'terroso',

'vegetal',

'suave',

'leguminoso'

],


texturas:[

'seca',

'harinosa',

'cremosa_cocida'

],


temporada:[

'todo_el_año'

],


conservacion:

'seco_en_recipiente_hermetico',


recetasCompatibles:[

'pan-compuesto-comiteco'

]

},
{
id:'chicharo',

nombre:'Chícharo',

aliases:[
'petit pois',
'green peas',
'peas'
],

precioUnitario:60,

unidad:'kg',

precio:{
minimo:40,
promedio:60,
maximo:90,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'leguminosas_frescas',

basico:true,

tags:[
'economico',
'dulce',
'versatil'
],

cocinas:[
'mexicana',
'europea',
'internacional'
],

tecnicas:[
'hervir',
'saltear',
'sopa'
],

nivel:'basico',

familias:[
'leguminosas'
],

usos:[
'sopas',
'arroz',
'guisos',
'ensaladas'
],

roles:[
'dulzor',
'color',
'volumen'
],

combinaCon:[
'zanahoria',
'papa',
'arroz',
'pollo',
'crema'
],

sustitutos:[
'elote',
'ejote'
],

sustitutosEconomicos:[
'zanahoria'
],

perfilSabor:{
...SABOR_BASE,

dulce:7,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:7,
aromatico:4
},

sabores:[
'dulce',
'verde'
],

texturas:[
'tierna',
'ligeramente cremosa'
],

temporada:[
'primavera'
],

conservacion:
'refrigerado o congelado',

recetasCompatibles:[
'arroz primavera',
'sopa de verduras',
'ensalada rusa',
'chícharos con crema'
]

},


{
id:'frijol_bayo',

nombre:'Frijol bayo',

aliases:[
'frijol claro',
'pinto beans'
],


precioUnitario:42,


unidad:'kg',


precio:{
minimo:30,
promedio:42,
maximo:70,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',


subcategoria:'legumbres',


basico:true,


tags:[
'economico',
'mexicano',
'diario'
],


cocinas:[
'mexicana'
],


tecnicas:[
'hervir',
'guisar',
'refritear'
],


nivel:'basico',


familias:[
'legumbres',
'proteinas_vegetales'
],


usos:[
'frijoles_charros',
'refritos',
'tacos',
'caldos'
],


roles:[
'proteina',
'fibra',
'saciedad'
],


combinaCon:[
'epazote',
'chile',
'queso',
'tocino'
],


sustitutos:[
'frijol_negro',
'frijol_pinto'
],


sustitutosEconomicos:[
'lenteja'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:1,
umami:5,
picante:0,

ahumado:2,
graso:2,
fresco:2,
aromatico:3
},


sabores:[
'suave',
'terroso'
],


texturas:[
'cremosa',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'frijoles charros',
'frijoles refritos',
'caldos mexicanos'
]

},
{
id:'lenteja',

nombre:'Lenteja',

aliases:[
'lentejas',
'lenteja seca',
'lentils'
],


precioUnitario:38,


unidad:'kg',


precio:{
minimo:25,
promedio:38,
maximo:70,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',


subcategoria:'legumbres',


basico:true,


tags:[
'economico',
'rapido',
'nutritivo',
'crisis'
],


cocinas:[
'mexicana',
'india',
'mediterranea'
],


tecnicas:[
'hervir',
'guisar',
'sopa'
],


nivel:'basico',


familias:[
'legumbres',
'proteinas_vegetales'
],


usos:[
'sopas',
'guisos',
'ensaladas',
'curry'
],


roles:[
'proteina',
'fibra',
'saciedad'
],


combinaCon:[
'arroz',
'zanahoria',
'tomate',
'pollo'
],


sustitutos:[
'garbanzo',
'frijol'
],


sustitutosEconomicos:[
'soya_texturizada'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:1,
umami:5,
picante:0,

ahumado:1,
graso:1,
fresco:3,
aromatico:3
},


sabores:[
'terroso',
'suave'
],


texturas:[
'tierna',
'cremosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'sopa de lentejas',
'lentejas con verduras',
'curry de lentejas'
]

},
{
id:'garbanzo',

nombre:'Garbanzo',

aliases:[
'garbanzos',
'garbanzo seco',
'chickpeas'
],

precioUnitario:45,

unidad:'kg',

precio:{
minimo:30,
promedio:45,
maximo:80,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',

subcategoria:'legumbres',


basico:true,


tags:[
'economico',
'nutritivo',
'versatil',
'proteina vegetal'
],


cocinas:[
'mexicana',
'mediterranea',
'india',
'arabe'
],


tecnicas:[
'hervir',
'tostar',
'moler',
'guisar'
],


nivel:'basico',


familias:[
'legumbres',
'proteinas_vegetales'
],


usos:[
'hummus',
'ensaladas',
'caldos',
'guisos',
'curry'
],


roles:[
'proteina',
'fibra',
'saciedad',
'volumen'
],


combinaCon:[
'limon',
'tahini',
'arroz',
'verduras',
'chile'
],


sustitutos:[
'lenteja',
'frijol',
'haba'
],


sustitutosEconomicos:[
'lenteja',
'soya_texturizada'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:1,
umami:6,
picante:0,

ahumado:1,
graso:2,
fresco:3,
aromatico:3
},


sabores:[
'terroso',
'nuez',
'suave'
],


texturas:[
'cremosa',
'compacta'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'hummus',
'ensalada de garbanzo',
'curry de garbanzo',
'caldo de garbanzo'
]

},
{
id:'haba_seca',

nombre:'Haba seca',

aliases:[
'habitas secas',
'habas',
'dried fava beans'
],


precioUnitario:55,


unidad:'kg',


precio:{
minimo:35,
promedio:55,
maximo:90,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',


subcategoria:'legumbres',


basico:true,


tags:[
'economico',
'tradicional',
'mexicano'
],


cocinas:[
'mexicana',
'mediterranea'
],


tecnicas:[
'hervir',
'guisar',
'tostar'
],


nivel:'basico',


familias:[
'legumbres',
'proteinas_vegetales'
],


usos:[
'sopas',
'caldos',
'botanas',
'guisos'
],


roles:[
'proteina',
'fibra',
'saciedad'
],


combinaCon:[
'limon',
'chile',
'epazote',
'verduras'
],


sustitutos:[
'garbanzo',
'lenteja'
],


sustitutosEconomicos:[
'frijol'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:2,
umami:5,
picante:0,

ahumado:1,
graso:1,
fresco:2,
aromatico:3
},


sabores:[
'terroso',
'intenso'
],


texturas:[
'cremosa',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'sopa de haba',
'habas con chile',
'habas guisadas'
]

},
{
id:'chicharo_seco',

nombre:'Chícharo seco',

aliases:[
'pea seco',
'green split peas'
],


precioUnitario:45,


unidad:'kg',


precio:{
minimo:30,
promedio:45,
maximo:80,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas_vegetales',


subcategoria:'legumbres',


basico:false,


tags:[
'economico',
'sopas',
'fibra'
],


cocinas:[
'europea',
'americana',
'internacional'
],


tecnicas:[
'hervir',
'guisar',
'puré'
],


nivel:'basico',


familias:[
'legumbres',
'proteinas_vegetales'
],


usos:[
'sopas',
'cremas',
'purés'
],


roles:[
'fibra',
'volumen',
'saciedad'
],


combinaCon:[
'zanahoria',
'papa',
'cebolla',
'jamon'
],


sustitutos:[
'lenteja',
'haba'
],


sustitutosEconomicos:[
'frijol'
],


perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:0,
umami:4,
picante:0,

ahumado:1,
graso:1,
fresco:4,
aromatico:2
},


sabores:[
'dulce',
'suave'
],


texturas:[
'cremosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'lugar_seco_y_cerrado',


recetasCompatibles:[
'sopa de chícharo',
'crema de chícharo',
'puré de chícharo'
]

},
{

id:'alberjon',

nombre:'Alberjón',

aliases:[

'alberjón seco',



'guisante seco'

],


precioUnitario:70,


unidad:'kg',


precio:{

minimo:45,

promedio:70,

maximo:100,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'proteinas_vegetales',


subcategoria:'leguminosas',


basico:false,


tags:[

'leguminosa',

'seco',

'mexicano',

'puebla',

'sierra_norte',

'tradicional'

],


cocinas:[

'mexicana',

'poblana',

'serrana'

],


tecnicas:[

'remojo',

'coccion',

'moler',

'guisar'

],


nivel:'intermedio',


familias:[

'proteinas_vegetales',

'leguminosas',

'semillas_secas'

],


usos:[

'tlayoyos',

'rellenos',

'guisos',

'sopas'

],


roles:[

'proteina_vegetal',

'relleno',

'base',

'saciedad'

],


combinaCon:[

'masa_maiz',

'cebolla_blanca',

'chile_serrano',

'queso_fresco'

],


sustitutos:[

'frijol_negro',

'frijol_bayo'

],


sustitutosEconomicos:[

'frijol_bayo'

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

fresco:0,

aromatico:1

},


sabores:[

'terroso',

'vegetal',

'suave'

],


texturas:[

'seca',

'harinosa',

'cremosa_cocida'

],


temporada:[

'todo_el_año'

],


conservacion:

'seco_en_recipiente_hermetico',


recetasCompatibles:[

'tlayoyos-poblanos'

]

}

];
