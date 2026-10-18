import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const PESCADOS: IngredienteCatalogo[] = [


{
id:'tilapia',

nombre:'Tilapia',

aliases:[
'filete de tilapia',
'tilapia fresca',
'pescado tilapia'
],


precioUnitario:120,


unidad:'kg',


precio:{
minimo:90,
promedio:120,
maximo:170,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:true,


tags:[
'economico',
'sabor_suave',
'versatil',
'facil_preparacion'
],


cocinas:[
'mexicana',
'asiatica',
'mediterranea',
'internacional'
],


tecnicas:[
'plancha',
'horno',
'freir',
'vapor',
'ceviche'
],


nivel:'basico',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'tacos',
'filetes',
'ceviches',
'caldos',
'platos_saludables'
],


roles:[
'proteina',
'sabor_suave',
'absorbe_salsas'
],


combinaCon:[
'limon',
'ajo',
'arroz',
'vegetales',
'chile',
'papas'
],


sustitutos:[
'merluza',
'filete blanco',
'mojarra'
],


sustitutosEconomicos:[
'huevo',
'sardina'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:0,
umami:5,
picante:0,

ahumado:0,
graso:2,
fresco:3,
aromatico:1
},


sabores:[
'suave',
'umami ligero'
],


texturas:[
'blanda',
'tierna',
'laminar'
],


temporada:[
'todo el año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'tilapia al ajo',
'tacos de pescado',
'tilapia al limón',
'filete con verduras'
]

},
{
id:'mojarra',

nombre:'Mojarra',

aliases:[
'mojarra fresca',
'pescado mojarra'
],


precioUnitario:110,


unidad:'kg',


precio:{
minimo:80,
promedio:110,
maximo:160,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:true,


tags:[
'economico',
'mexicano',
'tradicional'
],


cocinas:[
'mexicana',
'latinoamericana'
],


tecnicas:[
'freir',
'asar',
'hornear',
'plancha'
],


nivel:'basico',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'comida_casera',
'platillos_mexicanos',
'caldos'
],


roles:[
'proteina',
'tradicion',
'sabor'
],


combinaCon:[
'limon',
'ajo',
'chile',
'tortilla',
'arroz'
],


sustitutos:[
'tilapia',
'filete_blanco'
],


sustitutosEconomicos:[
'sardina'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:0,
umami:6,
picante:0,

ahumado:1,
graso:4,
fresco:3,
aromatico:2
},


sabores:[
'umami',
'marino suave'
],


texturas:[
'firme',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'mojarra_frita',
'mojarra_al_ajo',
'mojarra_al_horno',
'caldo_de_pescado'
]

},
{
id:'filete_blanco',

nombre:'Filete blanco económico',

aliases:[
'filete de pescado',
'pescado blanco',
'filete blanco'
],


precioUnitario:140,


unidad:'kg',


precio:{
minimo:100,
promedio:140,
maximo:200,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:true,


tags:[
'economico',
'suave',
'diario'
],


cocinas:[
'mexicana',
'internacional'
],


tecnicas:[
'plancha',
'hornear',
'empanizar',
'vapor'
],


nivel:'basico',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'tacos',
'filetes',
'comidas_rapidas'
],


roles:[
'proteina',
'base'
],


combinaCon:[
'limon',
'arroz',
'ensalada',
'salsas'
],


sustitutos:[
'tilapia',
'merluza'
],


sustitutosEconomicos:[
'huevo',
'soya'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:0,
umami:5,
picante:0,

ahumado:0,
graso:2,
fresco:3,
aromatico:1
},


sabores:[
'suave',
'neutro'
],


texturas:[
'laminar',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'filete_empanizado',
'tacos_de_pescado',
'pescado_al_horno'
]

},
{
id:'merluza',

nombre:'Merluza',

aliases:[
'filete_de_merluza',
'pescado_merluza',
'hake'
],


precioUnitario:160,


unidad:'kg',


precio:{
minimo:120,
promedio:160,
maximo:240,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:true,


tags:[
'economico',
'sabor_suave',
'bajo_grasa',
'versatil'
],


cocinas:[
'española',
'mexicana',
'mediterranea',
'internacional'
],


tecnicas:[
'hornear',
'plancha',
'vapor',
'empanizar',
'guisar'
],


nivel:'basico',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'filetes',
'tacos',
'caldos',
'comidas_saludables',
'platos_diarios'
],


roles:[
'proteina',
'sabor_suave',
'base'
],


combinaCon:[
'limon',
'ajo',
'perejil',
'arroz',
'verduras',
'papas'
],


sustitutos:[
'tilapia',
'filete_blanco',
'mojarra'
],


sustitutosEconomicos:[
'huevo',
'sardina',
'legumbres'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:0,
umami:5,
picante:0,

ahumado:0,
graso:1,
fresco:4,
aromatico:2
},


sabores:[
'suave',
'marino ligero'
],


texturas:[
'laminar',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'merluza_al_ajo',
'filete_de_pescado',
'merluza_al_horno',
'pescado_con_verduras',
'tacos_de_pescado'
]

},
{
id:'salmon',

nombre:'Salmón',

aliases:[
'salmon fresco',
'filete de salmon',
'salmon ahumado'
],


precioUnitario:350,


unidad:'kg',


precio:{
minimo:280,
promedio:350,
maximo:550,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:false,


tags:[
'grasa_saludable',
'premium',
'intenso',
'omega_3'
],


cocinas:[
'japonesa',
'nordica',
'francesa',
'internacional'
],


tecnicas:[
'plancha',
'hornear',
'ahumar',
'sushi'
],


nivel:'intermedio',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'filetes',
'sushi',
'pastas',
'ensaladas',
'platos_gourmet'
],


roles:[
'proteina',
'grasa_saludable',
'sabor_principal'
],


combinaCon:[
'limon',
'romero',
'mostaza',
'queso_crema',
'arroz',
'aguacate'
],


sustitutos:[
'trucha',
'atun_fresco'
],


sustitutosEconomicos:[
'tilapia',
'sardina'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:0,
umami:8,
picante:0,

ahumado:3,
graso:10,
fresco:3,
aromatico:4
},


sabores:[
'intenso',
'mantequilloso',
'umami'
],


texturas:[
'grasa',
'jugosa',
'laminar'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'salmon_al_horno',
'salmon_teriyaki',
'pasta_con_salmon',
'sushi'
]

},
{
id:'trucha',

nombre:'Trucha',

aliases:[
'trucha fresca',
'filete de trucha'
],


precioUnitario:280,


unidad:'kg',


precio:{
minimo:220,
promedio:280,
maximo:420,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:false,


tags:[
'delicado',
'graso',
'regional'
],


cocinas:[
'mediterranea',
'europea',
'internacional'
],


tecnicas:[
'hornear',
'plancha',
'asar'
],


nivel:'intermedio',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'filetes',
'pescado_entero',
'comidas_especiales'
],


roles:[
'proteina',
'sabor',
'grasa_saludable'
],


combinaCon:[
'limon',
'ajo',
'romero',
'verduras'
],


sustitutos:[
'salmon',
'tilapia'
],


sustitutosEconomicos:[
'mojarra',
'filete_blanco'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:1,
amargo:0,
umami:7,
picante:0,

ahumado:2,
graso:7,
fresco:4,
aromatico:3
},


sabores:[
'suave',
'marino',
'umami'
],


texturas:[
'tierna',
'jugosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'trucha_al_horno',
'trucha_al_ajo',
'trucha_con_verduras'
]

},
{
id:'huachinango',

nombre:'Huachinango',

aliases:[
'pargo rojo',
'huachinango fresco'
],


precioUnitario:320,


unidad:'kg',


precio:{
minimo:250,
promedio:320,
maximo:500,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:false,


tags:[
'mexicano',
'tradicional',
'pescado_entero'
],


cocinas:[
'mexicana',
'costeña'
],


tecnicas:[
'hornear',
'asar',
'freir'
],


nivel:'intermedio',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'pescado_entero',
'ceviche',
'platos_costeños'
],


roles:[
'proteina',
'identidad',
'sabor'
],


combinaCon:[
'limon',
'ajo',
'chile',
'cilantro'
],


sustitutos:[
'robalo',
'mojarra'
],


sustitutosEconomicos:[
'tilapia'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:0,
umami:7,
picante:0,

ahumado:1,
graso:4,
fresco:5,
aromatico:3
},


sabores:[
'suave',
'marino',
'fresco'
],


texturas:[
'firme',
'laminar'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'huachinango_a_la_talla',
'ceviche',
'huachinango_al_horno'
]

},
{
id:'robalo',

nombre:'Robalo',

aliases:[
'robalo fresco',
'filete de robalo',
'sea bass'
],


precioUnitario:380,


unidad:'kg',


precio:{
minimo:280,
promedio:380,
maximo:600,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:false,


tags:[
'premium',
'sabor_fino',
'marino',
'versatil'
],


cocinas:[
'mexicana',
'mediterranea',
'internacional'
],


tecnicas:[
'plancha',
'hornear',
'vapor',
'ceviche'
],


nivel:'intermedio',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'filetes',
'ceviches',
'platos_especiales',
'pescado_entero'
],


roles:[
'proteina',
'sabor_principal',
'textura'
],


combinaCon:[
'limon',
'ajo',
'cilantro',
'verduras',
'arroz'
],


sustitutos:[
'huachinango',
'mero',
'bacalao'
],


sustitutosEconomicos:[
'tilapia',
'filete_blanco'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:0,
umami:7,
picante:0,

ahumado:1,
graso:5,
fresco:5,
aromatico:3
},


sabores:[
'suave',
'marino',
'limpio'
],


texturas:[
'firme',
'laminar',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'robalo_al_limón',
'robalo_a_la_plancha',
'ceviche_de_pescado',
'robalo_con_verduras'
]

},
{
id:'bacalao',

nombre:'Bacalao',

aliases:[
'bacalao seco',
'bacalao fresco',
'cod'
],

precioUnitario:420,


unidad:'kg',


precio:{
minimo:300,
promedio:420,
maximo:700,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'pescados',


basico:false,


tags:[
'tradicional',
'intenso',
'salado',
'festivo'
],


cocinas:[
'española',
'portuguesa',
'mexicana',
'europea'
],


tecnicas:[
'guisar',
'hervir',
'hornear',
'desalar'
],


nivel:'intermedio',


familias:[
'pescados',
'proteinas_animales'
],


usos:[
'guisos',
'croquetas',
'estofados',
'platillos_tradicionales'
],


roles:[
'proteina',
'umami',
'identidad'
],


combinaCon:[
'tomate',
'ajo',
'papas',
'aceitunas',
'chile'
],


sustitutos:[
'merluza',
'filete_blanco'
],


sustitutosEconomicos:[
'sardina',
'atun'
],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:1,
salado:8,
amargo:0,
umami:8,
picante:0,

ahumado:2,
graso:3,
fresco:2,
aromatico:4
},


sabores:[
'intenso',
'umami',
'marino'
],


texturas:[
'fibrosa',
'firme'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado o seco según presentación',


recetasCompatibles:[
'bacalao_a_la_vizcaína',
'croquetas_de_bacalao',
'guisos_de_pescado',
'estofados'
]

},

];