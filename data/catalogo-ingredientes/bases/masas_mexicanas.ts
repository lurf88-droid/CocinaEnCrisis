import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const MASAS_MEXICANAS: IngredienteCatalogo[] = [



{
id:'masa_maiz',

nombre:'Masa de maíz',

aliases:[

'maseca',
'masa de maiz',
'masa nixtamalizada',
'masa para tortillas',
'corn dough'

],

precioUnitario:25,

unidad:'kg',

precio:{

minimo:15,

promedio:25,

maximo:40,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'bases_culinarias',

subcategoria:'bases_mexicanas',


basico:true,


tags:[

'maiz',

'mexicano',

'base',

'tradicional',

'economico'

],


cocinas:[

'mexicana',

'latinoamericana'

],


tecnicas:[

'amasar',

'formar',

'cocer_comal',

'cocer_vapor'

],


nivel:'basico',


familias:[

'maiz',

'masas',

'cocina_mexicana'

],


usos:[

'tortillas',

'tamales',

'gorditas',

'sopes',

'tlacoyos'

],


roles:[

'base',

'estructura',

'volumen'

],


combinaCon:[

'frijol',

'queso',

'chile',

'pollo',

'carne'

],


sustitutos:[

'tortilla_maiz',

'harina_maiz'

],


sustitutosEconomicos:[

'harina_maiz'

],


perfilSabor:{

...SABOR_BASE,

dulce:2,

acido:0,

salado:0,

amargo:0,

umami:1,

picante:0,

ahumado:1,

graso:0,

fresco:2,

aromatico:1

},


sabores:[

'maiz',

'neutro'

],


texturas:[

' suave',

'masa'

],


temporada:[

'todo_el_año'

],


conservacion:

'refrigerado',


recetasCompatibles:[

'tortillas',

'tamales',

'gorditas',

'sopes',

'tlacoyos'

]

},
{
id:'tamal_verde_pollo',

nombre:'Tamal verde de pollo',

aliases:[

'tamal verde',

'tamal de pollo',

'tamal verde mexicano'

],


precioUnitario:25,


unidad:'pieza',


precio:{

minimo:15,

promedio:25,

maximo:40,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'preparaciones',
subcategoria:'antojitos_mexicanos',


basico:false,


tags:[

'mexicano',

'ciudad_de_mexico',

'desayuno',

'tamal',

'tradicional'

],



cocinas:[

'mexicana',

'capitalina'

],



tecnicas:[

'nixtamalizacion',

'batido_de_masa',

'coccion_al_vapor'

],



nivel:'intermedio',



familias:[

'maiz',

'preparaciones',

'antojitos'

],



usos:[

'guajolota',

'desayuno',

'comida_rapida'

],



roles:[

'base',

'energia',

'saciedad'

],



combinaCon:[

'bolillo',

'atole',

'salsa_verde',

'cafe_de_olla'

],



sustitutos:[

'tamal_rojo_pollo',

'tamal_de_frijol'

],



sustitutosEconomicos:[

'tortilla_maiz',

'frijol'

],



perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:1,

salado:3,

amargo:0,

umami:3,

picante:2,

ahumado:0,

graso:3,

fresco:1,

aromatico:3

},



sabores:[

'maiz',

'pollo',

'verde',

'herbal'

],



texturas:[

'suave',

'esponjosa',

'humeda'

],



temporada:[

'todo_el_año'

],



conservacion:

'refrigerado_hasta_3_dias_o_congelado',



recetasCompatibles:[

'guajolota_cdmx',

'tamal_con_atole'

]

}
];