import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';

/**
 * 🍳 COCINA EN CRISIS
 *
 * Catálogo: Fondos culinarios
 *
 * Propósito:
 * Preparaciones líquidas base utilizadas para
 * desarrollar sabor, humedad y profundidad
 * en diferentes recetas.
 *
 * Incluye:
 * - Fondos profesionales
 * - Caldos base
 * - Preparaciones de extracción de sabor
 *
 * Estado:
 * 🔄 En proceso de migración y limpieza
 */
import { SABOR_BASE } from '@/types/saborBase';

export const FONDOS_COCINA: IngredienteCatalogo[] = [

{
id:'fondo_blanco_pollo',

nombre:'Fondo blanco de pollo',

aliases:[
'fondo pollo',
'fondo claro de pollo',
'caldo profesional pollo',
'stock de pollo'
],

precioUnitario:80,

unidad:'litro',

precio:{
minimo:50,
promedio:80,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'bases_culinarias',

subcategoria:'fondos',

basico:false,

tags:[
'chef',
'umami',
'base',
'sabor_profundo',
'cocina_profesional'
],

cocinas:[
'francesa',
'internacional'
],

tecnicas:[
'coccion_lenta',
'reduccion',
'infusion'
],

nivel:'intermedio',

familias:[
'bases_culinarias',
'fondos',
'caldos'
],

usos:[
'sopas',
'salsas',
'arroces',
'guisos',
'reducciones'
],

roles:[
'base_liquida',
'umami',
'profundidad'
],

combinaCon:[
'pollo',
'verduras',
'arroz',
'pasta',
'crema',
'mantequilla'
],

sustitutos:[
'caldo_de_pollo',
'caldo_verduras'
],

sustitutosEconomicos:[
'agua_con_especias',
'consome'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:2,
amargo:0,
umami:5,
picante:0,

ahumado:0,
graso:2,
fresco:1,
aromatico:4
},

sabores:[
'pollo',
'umami',
'profundo'
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
'sopas',
'salsas',
'arroz_cremoso',
'guisos',
'cremas'
]

},

{
id:'caldo_de_pollo',

nombre:'Caldo de pollo',

aliases:[
'caldo pollo',
'consome de pollo',
'consomé de pollo',
'chicken broth'
],

precioUnitario:35,

unidad:'litro',

precio:{
minimo:20,
promedio:35,
maximo:70,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'bases_culinarias',

subcategoria:'fondos_y_caldos',

basico:true,

tags:[
'base',
'umami',
'casero',
'cocina_mexicana'
],

cocinas:[
'mexicana',
'internacional',
'francesa'
],

tecnicas:[
'hervir',
'reducir',
'cocer_lento'
],

nivel:'basico',

familias:[
'fondos',
'caldos',
'bases_de_sabor'
],

usos:[
'sopas',
'arroces',
'salsas',
'guisos'
],

roles:[
'umami',
'liquido',
'profundidad'
],

combinaCon:[
'arroz',
'pollo',
'vegetales',
'pasta'
],

sustitutos:[
'caldo_verduras',
'agua_con_especias'
],

sustitutosEconomicos:[
'agua',
'consome_en_polvo'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:3,
amargo:0,
umami:8,
picante:0,

ahumado:1,
graso:3,
fresco:3,
aromatico:5
},

sabores:[
'umami',
'pollo',
'casero'
],

texturas:[
'liquida'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado o congelado',

recetasCompatibles:[
'sopa de pollo',
'arroz rojo',
'arroz blanco',
'salsas',
'guisos'
]

},

{
id:'fondo_oscuro_res',

nombre:'Fondo oscuro de res',

aliases:[
'fondo res',
'fondo oscuro',
'fondo de carne',
'stock de res'
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

categoria:'bases_culinarias',

subcategoria:'fondos',

basico:false,

tags:[
'chef',
'umami',
'intenso',
'alta_cocina',
'carne'
],

cocinas:[
'francesa',
'europea',
'internacional'
],

tecnicas:[
'tostar',
'coccion_lenta',
'reducir',
'concentrar'
],

nivel:'chef',

familias:[
'bases_culinarias',
'fondos',
'alta_cocina'
],

usos:[
'salsas oscuras',
'carnes',
'braseados',
'estofados',
'reducciones'
],

roles:[
'umami',
'base_salsa',
'profundidad'
],

combinaCon:[
'carne_res',
'vino_tinto',
'verduras',
'demi_glace'
],

sustitutos:[
'caldo_de_res',
'fondo_blanco_pollo'
],

sustitutosEconomicos:[
'caldo_comercial_res',
'agua_con_especias'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:3,
amargo:1,
umami:7,
picante:0,

ahumado:3,
graso:4,
fresco:1,
aromatico:6
},

sabores:[
'carne',
'tostado',
'umami intenso'
],

texturas:[
'liquida',
'concentrada'
],

temporada:[
'todo_el_año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'estofado_res',
'salsas_carnes',
'braseados',
'demi_glace'
]

},

{
id:'fumet_pescado',

nombre:'Fumet de pescado',

aliases:[
'fumet',
'fondo pescado',
'caldo pescado'
],

precioUnitario:120,

unidad:'litro',

precio:{
minimo:80,
promedio:120,
maximo:200,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'bases_culinarias',

subcategoria:'fondos_marinos',

basico:false,

tags:[
'chef',
'marino',
'umami',
'mediterraneo'
],

cocinas:[
'francesa',
'mediterranea',
'española'
],

tecnicas:[
'infusionar',
'reducir',
'coccion_suave'
],

nivel:'chef',

familias:[
'bases_culinarias',
'fondos',
'mariscos'
],

usos:[
'arroces_marinos',
'sopas',
'salsas_pescado',
'risottos'
],

roles:[
'umami',
'base_liquida',
'sabor_marino'
],

combinaCon:[
'pescado',
'mariscos',
'arroz',
'vino_blanco'
],

sustitutos:[
'caldo_pescado',
'fondo_blanco_pollo'
],

sustitutosEconomicos:[
'agua_con_especias',
'caldo_comercial'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:1,
salado:3,
amargo:0,
umami:6,
picante:0,

ahumado:0,
graso:1,
fresco:3,
aromatico:5
},

sabores:[
'marino',
'umami',
'ligero'
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
'paella',
'arroz_mariscos',
'sopas_marinas',
'salsas_pescado'
]

},

{
id:'caldo_dashi',

nombre:'Caldo dashi japonés',

aliases:[
'dashi',
'caldo japones',
'fondo japones'
],

precioUnitario:200,

unidad:'litro',

precio:{
minimo:150,
promedio:200,
maximo:350,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'bases_culinarias',

subcategoria:'fondos_asiaticos',

basico:false,

tags:[
'japon',
'umami',
'chef',
'oriental'
],

cocinas:[
'japonesa',
'asiatica'
],

tecnicas:[
'infusionar',
'control_temperatura'
],

nivel:'chef',

familias:[
'bases_culinarias',
'fondos',
'umami'
],

usos:[
'ramen',
'sopas',
'salsas',
'arroces'
],

roles:[
'umami',
'base_liquida',
'aroma'
],

combinaCon:[
'tofu',
'algas',
'pescado',
'soya'
],

sustitutos:[
'caldo_verduras',
'fumet_pescado'
],

sustitutosEconomicos:[
'agua_con_setas',
'caldo_simple'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:3,
amargo:0,
umami:8,
picante:0,

ahumado:1,
graso:0,
fresco:2,
aromatico:5
},

sabores:[
'umami',
'marino',
'suave'
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
'ramen',
'sopas_japonesas',
'salsas_asian'
]

},

{
id:'consome',

nombre:'Consomé clarificado',

aliases:[
'consome',
'consomé',
'caldo clarificado'
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

categoria:'bases_culinarias',

subcategoria:'fondos_clasicos',

basico:false,

tags:[
'chef',
'frances',
'elegante',
'tecnica'
],

cocinas:[
'francesa',
'internacional'
],

tecnicas:[
'clarificar',
'filtrar',
'coccion_lenta'
],

nivel:'chef',

familias:[
'bases_culinarias',
'fondos',
'alta_cocina'
],

usos:[
'sopas_elegantes',
'entradas',
'cocina_gourmet',
'presentaciones'
],

roles:[
'base_liquida',
'claridad',
'presentacion'
],

combinaCon:[
'carne_res',
'pollo',
'verduras',
'hierbas'
],

sustitutos:[
'fondo_blanco_pollo',
'caldo_de_res'
],

sustitutosEconomicos:[
'caldo_casero',
'caldo_comercial'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:3,
amargo:0,
umami:6,
picante:0,

ahumado:1,
graso:2,
fresco:2,
aromatico:5
},

sabores:[
'umami',
'limpio',
'profundo'
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
'sopas_gourmet',
'consome_tradicional',
'entradas_francesas'
]

},

];