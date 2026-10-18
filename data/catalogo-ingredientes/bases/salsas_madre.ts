import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';

/**
 * 🍳 COCINA EN CRISIS
 *
 * Catálogo: Salsas madre
 *
 * Propósito:
 * Contiene preparaciones clásicas que sirven
 * como base para múltiples recetas.
 *
 * Incluye:
 * - Salsas madre clásicas
 * - Salsas base derivadas
 * - Preparaciones de alta cocina relacionadas
 *
 * Cocina:
 * Internacional / Francesa
 *
 * Estado:
 * 🔄 En proceso de migración y limpieza
 */

import { SABOR_BASE } from '@/types/saborBase';

export const SALSAS_MADRE: IngredienteCatalogo[] = [

{
id:'bechamel',

nombre:'Salsa bechamel',

aliases:[
'bechamel',
'salsa blanca'
],

precioUnitario:90,

unidad:'litro',

precio:{
minimo:60,
promedio:90,
maximo:150,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'salsas_madre',

basico:false,

tags:[
'frances',
'cremosa',
'chef'
],

cocinas:[
'francesa',
'italiana'
],

tecnicas:[
'roux',
'espesar',
'coccion_suave'
],

nivel:'intermedio',

familias:[
'salsas_madre',
'salsas_cremosas'
],

usos:[
'lasaña',
'pasta',
'gratinados',
'rellenos'
],

roles:[
'salsa_base',
'cremosidad',
'union'
],

combinaCon:[
'queso',
'pasta',
'verduras',
'pollo'
],

sustitutos:[
'crema',
'salsa_veloute'
],

sustitutosEconomicos:[
'leche_espesada',
'crema_casera'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:2,
amargo:0,
umami:2,
picante:0,

ahumado:0,
graso:5,
fresco:1,
aromatico:3
},

sabores:[
'cremoso',
'leche',
'mantequilla'
],

texturas:[
'cremosa',
'espesa'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'lasaña',
'pasta_cremosa',
'gratinados'
]

},

{
id:'veloute',

nombre:'Salsa velouté',

aliases:[
'veloute',
'salsa veloute',
'salsa clara'
],

precioUnitario:150,

unidad:'litro',

precio:{
minimo:100,
promedio:150,
maximo:250,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'salsas_madre',

basico:false,

tags:[
'chef',
'frances',
'salsa_madre',
'elegante'
],

cocinas:[
'francesa',
'internacional'
],

tecnicas:[
'roux',
'espesar',
'coccion_suave'
],

nivel:'chef',

familias:[
'salsas_madre',
'salsas_base',
'alta_cocina'
],

usos:[
'pollo',
'pescados',
'vegetales',
'rellenos',
'salsas_derivadas'
],

roles:[
'salsa_base',
'textura',
'ligar_sabores'
],

combinaCon:[
'pollo',
'pescado',
'verduras',
'crema',
'hierbas'
],

sustitutos:[
'bechamel',
'fondo_blanco_pollo'
],

sustitutosEconomicos:[
'crema_ligera',
'leche_espesada'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:2,
amargo:0,
umami:4,
picante:0,

ahumado:0,
graso:4,
fresco:2,
aromatico:4
},

sabores:[
'cremoso',
'suave',
'umami'
],

texturas:[
'cremosa',
'ligera'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'pollo_en_salsa',
'pescado_veloute',
'vegetales_gratinados'
]

},

// ====================================================
// 🟤 SALSA ESPAÑOLA
// ====================================================

{
id:'salsa_espanola',

nombre:'Salsa española',

aliases:[
'salsa española',
'espagnole',
'salsa espagnole',
'brown sauce'
],

precioUnitario:180,

unidad:'litro',

precio:{
minimo:120,
promedio:180,
maximo:300,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'salsas_madre',

basico:false,

tags:[
'chef',
'frances',
'salsa_madre',
'umami',
'alta_cocina'
],

cocinas:[
'francesa',
'europea',
'internacional'
],

tecnicas:[
'roux_oscuro',
'reduccion',
'coccion_lenta',
'espesar'
],

nivel:'chef',

familias:[
'salsas_madre',
'salsas_base',
'alta_cocina'
],

usos:[
'carnes',
'estofados',
'salsas_derivadas',
'reducciones'
],

roles:[
'salsa_base',
'umami',
'profundidad',
'ligar_sabores'
],

combinaCon:[
'fondo_oscuro_res',
'carne_res',
'vino_tinto',
'verduras',
'mantequilla'
],

sustitutos:[
'demi_glace',
'fondo_oscuro_res'
],

sustitutosEconomicos:[
'caldo_res_reducido',
'salsa_casera'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:3,
amargo:1,
umami:8,
picante:0,

ahumado:3,
graso:4,
fresco:1,
aromatico:7
},

sabores:[
'tostado',
'carne',
'umami',
'profundo'
],

texturas:[
'espesa',
'aterciopelada'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'salsas_para_carne',
'estofados',
'demi_glace',
'carnes_braseadas'
]

},

// ====================================================
// 🍅 SALSA DE TOMATE
// ====================================================

{
id:'salsa_tomate',

nombre:'Salsa de tomate',

aliases:[
'salsa de tomate',
'salsa tomate',
'tomato sauce',
'sauce tomate'
],

precioUnitario:80,

unidad:'litro',

precio:{
minimo:50,
promedio:80,
maximo:140,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'salsas_madre',

basico:false,

tags:[
'tomate',
'salsa_madre',
'frances',
'italiana',
'versatil'
],

cocinas:[
'francesa',
'italiana',
'mediterranea',
'internacional'
],

tecnicas:[
'sofreir',
'reducir',
'coccion_lenta',
'triturar'
],

nivel:'intermedio',

familias:[
'salsas_madre',
'salsas_base',
'salsas_tomate'
],

usos:[
'pasta',
'carnes',
'verduras',
'horneados',
'salsas_derivadas'
],

roles:[
'salsa_base',
'acidez',
'umami',
'color'
],

combinaCon:[
'jitomate',
'ajo',
'cebolla',
'albahaca',
'pasta',
'carne'
],

sustitutos:[
'pasta_tomate',
'salsa_roja'
],

sustitutosEconomicos:[
'jitomate',
'pasta_tomate'
],

perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:6,
salado:2,
amargo:1,
umami:6,
picante:0,

ahumado:1,
graso:2,
fresco:5,
aromatico:7
},

sabores:[
'tomate',
'acido',
'dulce',
'umami'
],

texturas:[
'espesa',
'suave'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'pasta_con_salsa_tomate',
'pollo_en_salsa_tomate',
'berenjena_con_tomate',
'salsas_derivadas'
]

},

// ====================================================
// 🥚 SALSA HOLANDESA
// ====================================================

{
id:'salsa_holandesa',

nombre:'Salsa holandesa',

aliases:[
'holandesa',
'salsa holandesa',
'hollandaise',
'hollandaise sauce'
],

precioUnitario:220,

unidad:'litro',

precio:{
minimo:150,
promedio:220,
maximo:380,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'salsas_base',

subcategoria:'salsas_madre',

basico:false,

tags:[
'chef',
'frances',
'salsa_madre',
'emulsion',
'mantequilla'
],

cocinas:[
'francesa',
'europea',
'internacional'
],

tecnicas:[
'emulsionar',
'baño_maria',
'batir',
'control_temperatura'
],

nivel:'chef',

familias:[
'salsas_madre',
'salsas_emulsionadas',
'alta_cocina'
],

usos:[
'huevo',
'pescado',
'esparragos',
'vegetales',
'desayunos'
],

roles:[
'salsa_base',
'cremosidad',
'acidez',
'grasa'
],

combinaCon:[
'huevo',
'mantequilla',
'limon',
'esparrago',
'pescado'
],

sustitutos:[
'mantequilla_emulsionada',
'bechamel'
],

sustitutosEconomicos:[
'mantequilla_con_limon',
'crema'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:5,
salado:3,
amargo:0,
umami:3,
picante:0,

ahumado:0,
graso:9,
fresco:3,
aromatico:6
},

sabores:[
'mantequilla',
'acido',
'cremoso',
'lacteo'
],

texturas:[
'cremosa',
'untuosa',
'emulsionada'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'huevos_benedictinos',
'esparragos_con_holandesa',
'pescado_con_holandesa',
'vegetales_con_holandesa'
]

}

];