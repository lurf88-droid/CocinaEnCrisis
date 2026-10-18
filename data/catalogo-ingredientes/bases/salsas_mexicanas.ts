import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';


import { SABOR_BASE } from '@/types/saborBase';

export const SALSAS_MEXICANAS: IngredienteCatalogo[] = [
{
id:'salsa_roja',


nombre:'Salsa roja mexicana',


aliases:[
'salsa roja',
'salsa mexicana',
'salsa de jitomate',
'salsa roja casera'
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


categoria:'salsas',


subcategoria:'salsas_mexicanas',


basico:true,


tags:[
'mexicano',
'economico',
'tacos',
'casera',
'acompañamiento'
],


cocinas:[
'mexicana'
],


tecnicas:[
'asar',
'licuar',
'sazonar',
'cocer'
],


nivel:'basico',


familias:[
'salsas',
'salsas_mexicanas',
'acompañamientos'
],


usos:[
'tacos',
'huevos',
'quesadillas',
'enchiladas',
'chilaquiles',
'antojitos'
],


roles:[
'sabor',
'humectacion',
'acompañamiento'
],


combinaCon:[
'tortilla_maiz',
'queso_oaxaca',
'pollo',
'huevo',
'carne_cerdo'
],


sustitutos:[
'salsa_chipotle',
'salsa_verde'
],


sustitutosEconomicos:[
'jitomate_asado',
'chile_molido'
],


perfilSabor:{
...SABOR_BASE,


dulce:3,
acido:4,
salado:2,
amargo:1,
umami:4,
picante:4,


ahumado:2,
graso:1,
fresco:5,
aromatico:5
},


sabores:[
'jitomate',
'picante',
'fresco'
],


texturas:[
'liquida',
'ligera'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'huevos_mexicana',
'quesadillas_oaxaca',
'tacos',
'enchiladas',
'chilaquiles'
]

},
{
id:'salsa_verde',


nombre:'Salsa verde mexicana',


aliases:[
'salsa verde',
'salsa de tomate verde',
'salsa tomatillo'
],


precioUnitario:50,


unidad:'kg',


precio:{
minimo:35,
promedio:50,
maximo:90,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'salsas',


subcategoria:'salsas_mexicanas',


basico:true,


tags:[
'mexicano',
'fresca',
'tacos',
'acida'
],


cocinas:[
'mexicana'
],


tecnicas:[
'hervir',
'asar',
'licuar'
],


nivel:'basico',


familias:[
'salsas',
'salsas_mexicanas'
],


usos:[
'tacos',
'enchiladas',
'chilaquiles',
'quesadillas',
'guisos'
],


roles:[
'acidez',
'frescura',
'sabor'
],


combinaCon:[
'pollo',
'cerdo',
'tortilla_maiz',
'queso'
],


sustitutos:[
'salsa_roja',
'salsa_chipotle'
],


sustitutosEconomicos:[
'limon',
'chile_serrano'
],


perfilSabor:{
...SABOR_BASE,


dulce:2,
acido:6,
salado:2,
amargo:1,
umami:3,
picante:5,


ahumado:1,
graso:0,
fresco:8,
aromatico:6
},


sabores:[
'acido',
'fresco',
'picante'
],


texturas:[
'liquida',
'suave'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'chilaquiles',
'enchiladas',
'tacos',
'pollo_en_salsa_verde'
]

},
{
id:'salsa_chipotle',


nombre:'Salsa de chipotle mexicana',


aliases:[
'salsa chipotle',
'salsa de chile chipotle'
],


precioUnitario:80,


unidad:'kg',


precio:{
minimo:50,
promedio:80,
maximo:140,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'salsas',


subcategoria:'salsas_mexicanas',


basico:true,


tags:[
'mexicano',
'ahumado',
'picante',
'tacos',
'guisos'
],


cocinas:[
'mexicana'
],


tecnicas:[
'licuar',
'reducir',
'sazonar'
],


nivel:'basico',


familias:[
'salsas',
'salsas_mexicanas',
'chiles'
],


usos:[
'tinga',
'tacos',
'pollo',
'carnes',
'tortas',
'guisos'
],


roles:[
'picante',
'ahumado',
'profundidad'
],


combinaCon:[
'pollo',
'cerdo',
'carne_res',
'queso',
'tortilla_maiz'
],


sustitutos:[
'salsa_roja',
'chile_chipotle_adobado'
],


sustitutosEconomicos:[
'chile_seco',
'chile_morita'
],


perfilSabor:{
...SABOR_BASE,


dulce:3,
acido:3,
salado:3,
amargo:1,
umami:5,
picante:7,


ahumado:9,
graso:2,
fresco:2,
aromatico:7
},


sabores:[
'ahumado',
'picante',
'profundo'
],


texturas:[
'liquida',
'espesa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'tinga_pollo',
'tacos',
'pollo_chipotle',
'tortas_mexicanas'
]

},
{
id:'pico_gallo',


nombre:'Pico de gallo mexicano',


aliases:[
'pico de gallo',
'salsa fresca',
'salsa mexicana fresca'
],


precioUnitario:60,


unidad:'kg',


precio:{
minimo:40,
promedio:60,
maximo:100,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'salsas',


subcategoria:'salsas_frescas',


basico:true,


tags:[
'mexicano',
'fresco',
'economico',
'acompañamiento'
],


cocinas:[
'mexicana'
],


tecnicas:[
'picar',
'mezclar',
'sazonar'
],


nivel:'basico',


familias:[
'salsas',
'salsas_mexicanas',
'acompañamientos'
],


usos:[
'tacos',
'quesadillas',
'botanas',
'carnes',
'ensaladas'
],


roles:[
'frescura',
'acidez',
'contraste'
],


combinaCon:[
'tortilla_maiz',
'aguacate',
'queso',
'pollo',
'carne'
],


sustitutos:[
'salsa_roja',
'salsa_verde'
],


sustitutosEconomicos:[
'jitomate_con_limón',
'cebolla_con_chile'
],


perfilSabor:{
...SABOR_BASE,


dulce:3,
acido:6,
salado:2,
amargo:1,
umami:2,
picante:4,


ahumado:0,
graso:0,
fresco:10,
aromatico:7
},


sabores:[
'fresco',
'acido',
'herbal'
],


texturas:[
'crujiente',
'jugosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'tacos',
'quesadillas',
'carne_asada',
'botanas'
]

},
{
id:'guacamole',


nombre:'Guacamole mexicano',


aliases:[
'guacamole',
'aguacate preparado'
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


categoria:'salsas',


subcategoria:'salsas_mexicanas',


basico:true,


tags:[
'mexicano',
'cremoso',
'gourmet',
'acompañamiento'
],


cocinas:[
'mexicana'
],


tecnicas:[
'machacar',
'mezclar',
'sazonar'
],


nivel:'basico',


familias:[
'salsas',
'acompañamientos',
'aguacate'
],


usos:[
'tacos',
'antojitos',
'botanas',
'carnes'
],


roles:[
'grasa',
'cremosidad',
'equilibrio'
],


combinaCon:[
'tortilla_maiz',
'carne_asada',
'pollo',
'pico_gallo'
],


sustitutos:[
'pico_gallo',
'salsa_verde'
],


sustitutosEconomicos:[
'crema',
'frijoles'
],


perfilSabor:{
...SABOR_BASE,


dulce:1,
acido:5,
salado:2,
amargo:1,
umami:3,
picante:3,


ahumado:0,
graso:9,
fresco:8,
aromatico:6
},


sabores:[
'cremoso',
'fresco',
'acido'
],


texturas:[
'cremosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'tacos',
'burritos',
'antojitos_mexicanos'
]

},
{

id:'mole_poblano',

nombre:'Mole poblano',

aliases:[

'mole',

'mole poblano',

'salsa mole'

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


categoria:'salsas',

subcategoria:'salsas_mexicanas',


basico:false,


tags:[

'mexicano',

'tradicional',

'complejo'

],


cocinas:[

'mexicana'

],


tecnicas:[

'reducir',

'moler',

'cocer_lento'

],


nivel:'intermedio',


familias:[

'salsas_mexicanas',

'moles'

],


usos:[

'pollo',

'carnes',

'platillos festivos'

],


roles:[

'sabor',

'identidad',

'salsa'

],


combinaCon:[

'pollo',

'pavo',

'arroz',

'tortilla'

],


sustitutos:[

'adobo',

'salsa_chocolate'

],


sustitutosEconomicos:[

'adobo'

],


perfilSabor:{

...SABOR_BASE,

dulce:5,

acido:1,

salado:3,

amargo:2,

umami:5,

picante:4,

ahumado:3,

graso:5,

fresco:0,

aromatico:10

},


sabores:[

'dulce',

'ahumado',

'especiado'

],


texturas:[

'cremosa'

],


temporada:[

'todo_el_año'

],


conservacion:

'refrigerado después de abrir',


recetasCompatibles:[

'pollo con mole',

'enchiladas de mole'

]

},
{
id:'salsa_roja_veracruzana',

nombre:'Salsa roja veracruzana',

aliases:[

'salsa roja veracruzana',

'salsa costeña veracruzana',

'salsa de jitomate veracruzana'

],


precioUnitario:45,


unidad:'kg',


precio:{

minimo:30,

promedio:45,

maximo:70,

moneda:'MXN',

actualizado:'2026-08'

},



categoria:'salsas',


subcategoria:'salsas_mexicanas',


basico:true,


tags:[

'veracruz',

'mexicano',

'tradicional',

'picante'

],



cocinas:[

'mexicana',

'veracruzana'

],



tecnicas:[

'tatemar',

'asar',

'licuar',

'cocer'

],


nivel:'basico',




familias:[

'salsas',

'chiles',

'preparaciones_base'

],



usos:[

'picadas_veracruzanas',

'huevos',

'tacos',

'antojitos',

'guisados'

],



roles:[

'sabor',

'umami',

'humectante',

'picante',

'aroma'

],



combinaCon:[

'masa_maiz',

'queso_fresco',

'cebolla_blanca',

'huevo',

'frijol_negro'

],



sustitutos:[

'salsa_roja_mexicana'

],



sustitutosEconomicos:[

'jitomate_con_chile',

'salsa_de_jitomate_casera'

],



perfilSabor:{

...SABOR_BASE,

dulce:2,

acido:2,

salado:1,

amargo:1,

umami:3,

picante:3,

ahumado:2,

graso:0,

fresco:3,

aromatico:4

},



sabores:[

'tomate',

'ligeramente_picante',

'herbal',

'tostado'

],



texturas:[

'liquida',

'suave',

'ligera'

],



temporada:[

'todo_el_año'

],



conservacion:

'refrigerada_en_recipiente_cerrado',



recetasCompatibles:[

'picadas_veracruzanas',

'huevos_tirados',

'tacos_mexicanos',

'antojitos_mexicanos'

]

},

// ====================================================
// 🌶️ SALSA MACHA
// ====================================================

{
id:'salsa_macha',

nombre:'Salsa macha',

aliases:[
'salsa macha',
'salsa de chile seco con aceite',
'macha mexicana'
],

precioUnitario:220,

unidad:'kg',

precio:{
minimo:140,
promedio:220,
maximo:350,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'salsas_mexicanas',

basico:false,

tags:[
'mexicano',
'veracruz',
'picante',
'aceite',
'chiles_secos'
],

cocinas:[
'mexicana',
'veracruzana'
],

tecnicas:[
'freir',
'tostar',
'moler',
'mezclar'
],

nivel:'intermedio',

familias:[
'salsas',
'salsas_mexicanas',
'chiles'
],

usos:[
'tacos',
'antojitos',
'huevos',
'carnes',
'mariscos'
],

roles:[
'picante',
'grasa',
'aroma',
'profundidad'
],

combinaCon:[
'chile_arbol',
'cacahuate',
'ajonjoli',
'ajo',
'tortilla_maiz'
],

sustitutos:[
'salsa_chile_arbol',
'salsa_chipotle'
],

sustitutosEconomicos:[
'chile_seco_triturado',
'salsa_roja'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:1,
salado:3,
amargo:2,
umami:5,
picante:9,

ahumado:5,
graso:8,
fresco:1,
aromatico:9
},

sabores:[
'picante',
'tostado',
'ahumado',
'nuez'
],

texturas:[
'aceitosa',
'crujiente',
'espesa'
],

temporada:[
'todo_el_año'
],

conservacion:
'recipiente cerrado en lugar fresco o refrigerado',

recetasCompatibles:[
'tacos con salsa macha',
'huevos con salsa macha',
'mariscos con salsa macha',
'antojitos mexicanos'
]

},

// ====================================================
// 🍅 SALSA RANCHERA
// ====================================================

{
id:'salsa_ranchera',

nombre:'Salsa ranchera',

aliases:[
'salsa ranchera',
'salsa para huevos rancheros',
'salsa ranchera mexicana'
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

categoria:'salsas',

subcategoria:'salsas_mexicanas',

basico:true,

tags:[
'mexicano',
'jitomate',
'casera',
'desayuno'
],

cocinas:[
'mexicana'
],

tecnicas:[
'asar',
'sofreir',
'licuar',
'cocer'
],

nivel:'basico',

familias:[
'salsas',
'salsas_mexicanas',
'acompañamientos'
],

usos:[
'huevos',
'tacos',
'antojitos',
'carnes',
'frijoles'
],

roles:[
'sabor',
'acidez',
'picante',
'humectacion'
],

combinaCon:[
'huevo',
'jitomate',
'chile_serrano',
'cebolla_blanca',
'tortilla_maiz'
],

sustitutos:[
'salsa_roja',
'salsa_verde'
],

sustitutosEconomicos:[
'jitomate_asado',
'salsa_roja'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:4,
salado:2,
amargo:1,
umami:4,
picante:5,

ahumado:2,
graso:1,
fresco:5,
aromatico:6
},

sabores:[
'jitomate',
'picante',
'tostado',
'casero'
],

texturas:[
'liquida',
'ligeramente_espesa'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'huevos rancheros',
'tacos',
'frijoles con salsa',
'antojitos mexicanos'
]

},

// ====================================================
// 🔥 SALSA DE CHILE DE ÁRBOL
// ====================================================

{
id:'salsa_chile_arbol',

nombre:'Salsa de chile de árbol',

aliases:[
'salsa de chile de arbol',
'salsa chile de árbol',
'salsa roja de chile de arbol'
],

precioUnitario:75,

unidad:'kg',

precio:{
minimo:45,
promedio:75,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'salsas_mexicanas',

basico:true,

tags:[
'mexicano',
'picante',
'chile_seco',
'tacos'
],

cocinas:[
'mexicana'
],

tecnicas:[
'tostar',
'freir',
'licuar',
'moler'
],

nivel:'basico',

familias:[
'salsas',
'salsas_mexicanas',
'chiles'
],

usos:[
'tacos',
'tortas',
'antojitos',
'huevos',
'carnes'
],

roles:[
'picante',
'aroma',
'contraste'
],

combinaCon:[
'chile_arbol',
'ajo',
'jitomate',
'tomate_verde',
'tortilla_maiz'
],

sustitutos:[
'salsa_roja',
'salsa_macha'
],

sustitutosEconomicos:[
'chile_seco_triturado',
'salsa_roja'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:3,
salado:2,
amargo:2,
umami:3,
picante:10,

ahumado:5,
graso:2,
fresco:2,
aromatico:8
},

sabores:[
'picante_intenso',
'tostado',
'chile_seco'
],

texturas:[
'liquida',
'espesa'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'tacos con salsa de chile de arbol',
'tortas mexicanas',
'huevos con salsa',
'antojitos mexicanos'
]

},

// ====================================================
// 🍺 SALSA BORRACHA
// ====================================================

{
id:'salsa_borracha',

nombre:'Salsa borracha',

aliases:[
'salsa borracha',
'salsa borracha mexicana',
'salsa de chile pasilla'
],

precioUnitario:90,

unidad:'kg',

precio:{
minimo:55,
promedio:90,
maximo:150,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas',

subcategoria:'salsas_mexicanas',

basico:false,

tags:[
'mexicano',
'tradicional',
'chile_pasilla',
'ahumado'
],

cocinas:[
'mexicana'
],

tecnicas:[
'asar',
'tostar',
'moler',
'mezclar'
],

nivel:'intermedio',

familias:[
'salsas',
'salsas_mexicanas',
'chiles'
],

usos:[
'barbacoa',
'carnes',
'tacos',
'antojitos'
],

roles:[
'picante',
'acidez',
'ahumado',
'acompañamiento'
],

combinaCon:[
'chile_pasilla',
'cebolla',
'queso',
'carne',
'tortilla_maiz'
],

sustitutos:[
'salsa_roja',
'salsa_chipotle'
],

sustitutosEconomicos:[
'salsa_roja',
'chile_pasilla'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:4,
salado:3,
amargo:2,
umami:4,
picante:6,

ahumado:6,
graso:1,
fresco:3,
aromatico:8
},

sabores:[
'ahumado',
'picante',
'acido',
'chile_seco'
],

texturas:[
'liquida',
'ligeramente_espesa'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'barbacoa con salsa borracha',
'tacos de carne',
'antojitos mexicanos',
'carne asada'
]

}

];