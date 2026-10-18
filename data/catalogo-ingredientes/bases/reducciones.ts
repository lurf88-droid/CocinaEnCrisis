import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const REDUCCIONES: IngredienteCatalogo[] = [

{
id:'demi_glace',

nombre:'Demi glace',


aliases:[
'demi glace',
'demi-glace',
'salsa demi glace'
],


precioUnitario:500,


unidad:'litro',


precio:{
minimo:300,
promedio:500,
maximo:900,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'salsas_base',


subcategoria:'reducciones',


basico:false,


tags:[
'chef',
'alta_cocina',
'frances',
'umami'
],


cocinas:[
'francesa',
'europea'
],


tecnicas:[
'reduccion',
'concentracion',
'coccion_lenta'
],


nivel:'chef',


familias:[
'salsas_base',
'bases_culinarias',
'alta_cocina'
],


usos:[
'carnes',
'salsas',
'reducciones',
'platos_gourmet'
],


roles:[
'umami',
'salsa_final',
'profundidad'
],


combinaCon:[
'carne_res',
'filete',
'vino_tinto',
'papas'
],


sustitutos:[
'fondo_oscuro_res',
'salsa_carne'
],


sustitutosEconomicos:[
'caldo_res_reducido',
'salsa_casera'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:4,
amargo:1,
umami:9,
picante:0,

ahumado:2,
graso:5,
fresco:1,
aromatico:7
},


sabores:[
'carne',
'tostado',
'intenso'
],


texturas:[
'espesa',
'brillante'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'filete_res',
'carnes_gourmet',
'salsas_francesas'
]

},

// ====================================================
// 🍷 REDUCCIÓN DE VINO TINTO
// ====================================================

{
id:'reduccion_vino_tinto',

nombre:'Reducción de vino tinto',

aliases:[
'reduccion de vino tinto',
'salsa de vino tinto',
'reducción de vino rojo',
'red wine reduction'
],

precioUnitario:300,

unidad:'litro',

precio:{
minimo:200,
promedio:300,
maximo:500,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'reducciones',

basico:false,

tags:[
'chef',
'vino',
'frances',
'carnes',
'aromatico'
],

cocinas:[
'francesa',
'italiana',
'europea'
],

tecnicas:[
'reduccion',
'desglasar',
'concentracion'
],

nivel:'avanzado',

familias:[
'salsas_base',
'reducciones',
'bases_culinarias'
],

usos:[
'carnes',
'salsas',
'filetes',
'estofados'
],

roles:[
'acidez',
'profundidad',
'salsa_final',
'aroma'
],

combinaCon:[
'vino_tinto',
'carne_res',
'filete',
'mantequilla',
'fondo_oscuro_res'
],

sustitutos:[
'demi_glace',
'reduccion_balsamica'
],

sustitutosEconomicos:[
'caldo_res_reducido'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:5,
salado:2,
amargo:2,
umami:5,
picante:0,

ahumado:2,
graso:2,
fresco:1,
aromatico:8
},

sabores:[
'vino',
'frutal',
'intenso',
'acido'
],

texturas:[
'espesa',
'brillante'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'filete con reducción de vino tinto',
'carne en salsa de vino',
'costillas con reducción'
]

},

// ====================================================
// 🥂 REDUCCIÓN DE VINO BLANCO
// ====================================================

{
id:'reduccion_vino_blanco',

nombre:'Reducción de vino blanco',

aliases:[
'reduccion de vino blanco',
'salsa de vino blanco',
'white wine reduction'
],

precioUnitario:280,

unidad:'litro',

precio:{
minimo:180,
promedio:280,
maximo:450,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'reducciones',

basico:false,

tags:[
'chef',
'vino',
'frances',
'mariscos',
'pescado'
],

cocinas:[
'francesa',
'italiana',
'mediterranea'
],

tecnicas:[
'reduccion',
'desglasar',
'emulsionar'
],

nivel:'avanzado',

familias:[
'salsas_base',
'reducciones',
'bases_culinarias'
],

usos:[
'pescados',
'mariscos',
'pollo',
'pastas',
'salsas'
],

roles:[
'acidez',
'aroma',
'salsa_final',
'profundidad'
],

combinaCon:[
'vino_blanco',
'pescado',
'mariscos',
'mantequilla',
'crema'
],

sustitutos:[
'fumet_pescado'
],

sustitutosEconomicos:[
'caldo_de_pollo'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:6,
salado:2,
amargo:1,
umami:3,
picante:0,

ahumado:0,
graso:2,
fresco:3,
aromatico:8
},

sabores:[
'vino',
'acido',
'frutal',
'aromatico'
],

texturas:[
'ligera',
'brillante'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'pescado con vino blanco',
'pollo al vino blanco',
'mariscos en salsa de vino blanco'
]

},

// ====================================================
// 🍇 REDUCCIÓN BALSÁMICA
// ====================================================

{
id:'reduccion_balsamica',

nombre:'Reducción balsámica',

aliases:[
'reduccion de balsamico',
'reducción de vinagre balsámico',
'glaseado balsamico',
'balsamic reduction'
],

precioUnitario:260,

unidad:'litro',

precio:{
minimo:160,
promedio:260,
maximo:450,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'reducciones',

basico:false,

tags:[
'italiano',
'acido',
'dulce',
'gourmet'
],

cocinas:[
'italiana',
'mediterranea',
'internacional'
],

tecnicas:[
'reduccion',
'concentracion',
'glasear'
],

nivel:'intermedio',

familias:[
'salsas_base',
'reducciones',
'aderezos'
],

usos:[
'ensaladas',
'carnes',
'verduras',
'quesos',
'presentaciones'
],

roles:[
'acidez',
'dulzor',
'contraste',
'acabado'
],

combinaCon:[
'vinagre_balsamico',
'queso',
'tomate',
'carne',
'fresa'
],

sustitutos:[
'vinagre_balsamico',
'reduccion_vino_tinto'
],

sustitutosEconomicos:[
'vinagre_balsamico'
],

perfilSabor:{
...SABOR_BASE,

dulce:7,
acido:8,
salado:1,
amargo:1,
umami:3,
picante:0,

ahumado:0,
graso:0,
fresco:2,
aromatico:7
},

sabores:[
'acido',
'dulce',
'frutal',
'concentrado'
],

texturas:[
'espesa',
'viscosa',
'brillante'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada caprese',
'verduras con balsamico',
'carne con reducción balsámica',
'queso con reducción balsámica'
]

},

// ====================================================
// 🍯 GASTRIQUE
// ====================================================

{
id:'gastrique',

nombre:'Gastrique',

aliases:[
'gastrique',
'salsa gastrique',
'reduccion agridulce',
'salsa agridulce francesa'
],

precioUnitario:300,

unidad:'litro',

precio:{
minimo:180,
promedio:300,
maximo:500,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'reducciones',

basico:false,

tags:[
'chef',
'frances',
'agridulce',
'alta_cocina'
],

cocinas:[
'francesa',
'europea',
'internacional'
],

tecnicas:[
'caramelizar',
'reduccion',
'desglasar',
'concentracion'
],

nivel:'chef',

familias:[
'salsas_base',
'reducciones',
'alta_cocina'
],

usos:[
'carnes',
'aves',
'pato',
'cerdo',
'salsas_frutales'
],

roles:[
'acidez',
'dulzor',
'contraste',
'salsa_final'
],

combinaCon:[
'azucar_blanca',
'vinagre',
'naranja',
'pato',
'cerdo'
],

sustitutos:[
'reduccion_balsamica'
],

sustitutosEconomicos:[
'salsa_agridulce'
],

perfilSabor:{
...SABOR_BASE,

dulce:8,
acido:8,
salado:1,
amargo:2,
umami:2,
picante:0,

ahumado:1,
graso:0,
fresco:2,
aromatico:8
},

sabores:[
'agridulce',
'caramelo',
'acido',
'frutal'
],

texturas:[
'espesa',
'brillante'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'pato con gastrique',
'cerdo agridulce',
'pollo con salsa de naranja',
'carnes con salsa frutal'
]

}

];