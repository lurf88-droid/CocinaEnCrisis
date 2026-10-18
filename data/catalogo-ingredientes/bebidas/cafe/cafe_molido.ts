import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CAFE_MOLIDO: IngredienteCatalogo[] = [



{
id:'cafe_molido',

nombre:'Café molido',

aliases:[

'cafe',

'café de grano molido',

'café tostado molido',

'cafe veracruzano'

],


precioUnitario:240,


unidad:'kg',


precio:{

minimo:160,

promedio:240,

maximo:400,

moneda:'MXN',

actualizado:'2026-08'

},



categoria:'bebidas',


subcategoria:'cafe',


basico:true,


tags:[

'veracruz',

'mexicano',

'tradicional',

'cafeteria'

],



cocinas:[

'mexicana',

'veracruzana'

],



tecnicas:[

'tostar',

'moler',

'infusionar',

'extraer'

],


nivel:'basico',



familias:[

'bebidas',

'granos',

'ingredientes_aromaticos'

],



usos:[

'cafe_lechero',

'cafe_de_olla',

'bebidas_calientes',

'postres'

],



roles:[

'aroma',

'sabor',

'bebida',

'energizante'

],



combinaCon:[

'leche_entera',

'canela',

'piloncillo',

'chocolate'

],



sustitutos:[

'cafe_soluble'

],



sustitutosEconomicos:[

'cafe_instantaneo'

],



perfilSabor:{

...SABOR_BASE,

dulce:0,

acido:3,

salado:0,

amargo:4,

umami:1,

picante:0,

ahumado:2,

graso:0,

fresco:2,

aromatico:5

},



sabores:[

'aromatico',

'amargo',

'tostado',

'frutal',

'terroso'

],



texturas:[

'liquida'

],



temporada:[

'todo_el_año'

],



conservacion:

'guardar_en_recipiente_hermetico_en_lugar_fresco_y_seco',



recetasCompatibles:[

'cafe-lechero-veracruzano',

'cafe_de_olla',

'capuchino_casero'

]

},


// ====================================================
// ☕ CAFÉ SOLUBLE
// ====================================================

{
id:'cafe_soluble',

nombre:'Café soluble',

aliases:[

'cafe soluble',

'café soluble',

'cafe instantaneo',

'café instantáneo',

'instant coffee'

],


precioUnitario:420,


unidad:'kg',


precio:{

minimo:280,

promedio:420,

maximo:650,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'bebidas',


subcategoria:'cafe',


basico:false,


tags:[

'rapido',

'practico',

'despensa',

'cafeteria'

],


cocinas:[

'mexicana',

'internacional'

],


tecnicas:[

'disolver',

'mezclar',

'infusionar'

],


nivel:'basico',


familias:[

'bebidas',

'cafe',

'ingredientes_aromaticos'

],


usos:[

'bebidas_calientes',

'cafe_con_leche',

'postres',

'batidos'

],


roles:[

'aroma',

'sabor',

'bebida',

'energizante'

],


combinaCon:[

'leche_entera',

'azucar_blanca',

'canela',

'chocolate'

],


sustitutos:[

'cafe_molido'

],


sustitutosEconomicos:[

'cafe_molido'

],


perfilSabor:{

...SABOR_BASE,

dulce:0,

acido:2,

salado:0,

amargo:5,

umami:1,

picante:0,

ahumado:2,

graso:0,

fresco:1,

aromatico:5

},


sabores:[

'amargo',

'tostado',

'aromatico'

],


texturas:[

'polvo',

'granulada'

],


temporada:[

'todo_el_año'

],


conservacion:

'guardar_en_recipiente_hermetico_en_lugar_fresco_y_seco',


recetasCompatibles:[

'cafe con leche',

'cafe frio',

'frappe de cafe',

'postres de cafe'

]

},


// ====================================================
// ☕ CAFÉ DESCAFEINADO MOLIDO
// ====================================================

{
id:'cafe_descafeinado_molido',

nombre:'Café descafeinado molido',

aliases:[

'cafe descafeinado',

'café descafeinado',

'descafeinado molido',

'decaf coffee'

],


precioUnitario:300,


unidad:'kg',


precio:{

minimo:220,

promedio:300,

maximo:480,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'bebidas',


subcategoria:'cafe',


basico:false,


tags:[

'descafeinado',

'cafeteria',

'aromatico',

'bebida_caliente'

],


cocinas:[

'mexicana',

'internacional'

],


tecnicas:[

'infusionar',

'extraer',

'filtrar'

],


nivel:'basico',


familias:[

'bebidas',

'granos',

'cafe'

],


usos:[

'cafe_descafeinado',

'cafe_con_leche',

'bebidas_calientes',

'postres'

],


roles:[

'aroma',

'sabor',

'bebida'

],


combinaCon:[

'leche_entera',

'canela',

'chocolate',

'azucar_blanca'

],


sustitutos:[

'cafe_molido'

],


sustitutosEconomicos:[

'cafe_molido'

],


perfilSabor:{

...SABOR_BASE,

dulce:0,

acido:3,

salado:0,

amargo:4,

umami:1,

picante:0,

ahumado:2,

graso:0,

fresco:2,

aromatico:5

},


sabores:[

'amargo',

'tostado',

'aromatico',

'terroso'

],


texturas:[

'molida'

],


temporada:[

'todo_el_año'

],


conservacion:

'guardar_en_recipiente_hermetico_en_lugar_fresco_y_seco',


recetasCompatibles:[

'cafe descafeinado',

'cafe con leche',

'capuchino descafeinado'

]

},


// ====================================================
// ☕ CAFÉ EN GRANO
// ====================================================

{
id:'cafe_grano',

nombre:'Café en grano',

aliases:[

'cafe en grano',

'café en grano',

'granos de cafe',

'granos de café',

'coffee beans'

],


precioUnitario:280,


unidad:'kg',


precio:{

minimo:180,

promedio:280,

maximo:500,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'bebidas',


subcategoria:'cafe',


basico:false,


tags:[

'grano',

'cafeteria',

'aromatico',

'premium'

],


cocinas:[

'mexicana',

'internacional'

],


tecnicas:[

'moler',

'infusionar',

'extraer'

],


nivel:'intermedio',


familias:[

'bebidas',

'granos',

'cafe'

],


usos:[

'cafe_filtrado',

'espresso',

'prensa_francesa',

'bebidas_calientes'

],


roles:[

'aroma',

'sabor',

'bebida',

'energizante'

],


combinaCon:[

'leche_entera',

'canela',

'piloncillo',

'chocolate'

],


sustitutos:[

'cafe_molido'

],


sustitutosEconomicos:[

'cafe_molido'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:4,

salado:0,

amargo:4,

umami:1,

picante:0,

ahumado:2,

graso:1,

fresco:3,

aromatico:8

},


sabores:[

'aromatico',

'tostado',

'frutal',

'terroso'

],


texturas:[

'grano'

],


temporada:[

'todo_el_año'

],


conservacion:

'guardar_en_recipiente_hermetico_en_lugar_fresco_y_seco',


recetasCompatibles:[

'cafe filtrado',

'espresso',

'cafe de prensa francesa',

'cafe con leche'

]

},


// ====================================================
// ☕ CAFÉ ESPRESSO MOLIDO
// ====================================================

{
id:'cafe_espresso_molido',

nombre:'Café espresso molido',

aliases:[

'cafe espresso',

'café espresso',

'espresso molido',

'cafe para espresso',

'espresso coffee'

],


precioUnitario:320,


unidad:'kg',


precio:{

minimo:220,

promedio:320,

maximo:550,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'bebidas',


subcategoria:'cafe',


basico:false,


tags:[

'espresso',

'cafeteria',

'intenso',

'aromatico'

],


cocinas:[

'italiana',

'internacional'

],


tecnicas:[

'extraer',

'presion',

'infusionar'

],


nivel:'intermedio',


familias:[

'bebidas',

'cafe',

'ingredientes_aromaticos'

],


usos:[

'espresso',

'capuchino',

'latte',

'americano',

'postres'

],


roles:[

'aroma',

'sabor',

'bebida',

'base_cafeteria'

],


combinaCon:[

'leche_entera',

'chocolate',

'azucar_blanca',

'canela'

],


sustitutos:[

'cafe_molido'

],


sustitutosEconomicos:[

'cafe_molido'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:3,

salado:0,

amargo:6,

umami:2,

picante:0,

ahumado:4,

graso:1,

fresco:1,

aromatico:8

},


sabores:[

'intenso',

'amargo',

'tostado',

'aromatico'

],


texturas:[

'molida_fina'

],


temporada:[

'todo_el_año'

],


conservacion:

'guardar_en_recipiente_hermetico_en_lugar_fresco_y_seco',


recetasCompatibles:[

'espresso',

'capuchino',

'cafe latte',

'americano',

'tiramisu'

]

},


// ====================================================
// ☕ CAFÉ TOSTADO OSCURO
// ====================================================

{
id:'cafe_tostado_oscuro',

nombre:'Café tostado oscuro',

aliases:[

'cafe tostado oscuro',

'café tostado oscuro',

'cafe de tueste oscuro',

'dark roast coffee'

],


precioUnitario:290,


unidad:'kg',


precio:{

minimo:190,

promedio:290,

maximo:480,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'bebidas',


subcategoria:'cafe',


basico:false,


tags:[

'tostado',

'intenso',

'aromatico',

'cafeteria'

],


cocinas:[

'mexicana',

'italiana',

'internacional'

],


tecnicas:[

'moler',

'infusionar',

'extraer'

],


nivel:'intermedio',


familias:[

'bebidas',

'granos',

'cafe'

],


usos:[

'cafe_fuerte',

'cafe_con_leche',

'espresso',

'postres'

],


roles:[

'aroma',

'sabor',

'bebida',

'intensidad'

],


combinaCon:[

'leche_entera',

'chocolate',

'canela',

'piloncillo'

],


sustitutos:[

'cafe_molido',

'cafe_espresso_molido'

],


sustitutosEconomicos:[

'cafe_molido'

],


perfilSabor:{

...SABOR_BASE,

dulce:0,

acido:2,

salado:0,

amargo:7,

umami:2,

picante:0,

ahumado:6,

graso:1,

fresco:1,

aromatico:8

},


sabores:[

'tostado',

'amargo',

'ahumado',

'aromatico'

],


texturas:[

'molida'

],


temporada:[

'todo_el_año'

],


conservacion:

'guardar_en_recipiente_hermetico_en_lugar_fresco_y_seco',


recetasCompatibles:[

'cafe fuerte',

'cafe con leche',

'espresso',

'postres de cafe'

]

}

];