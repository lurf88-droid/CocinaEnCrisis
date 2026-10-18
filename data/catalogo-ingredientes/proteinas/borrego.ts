import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const BORREGO: IngredienteCatalogo[] = [


{
id:'carne_borrego',

nombre:'Carne de borrego',

aliases:[

'cordero',
'carne de cordero',
'lamb'

],


precioUnitario:220,

unidad:'kg',


precio:{

minimo:160,

promedio:220,

maximo:400,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'proteinas',

subcategoria:'carnes_rojas',


basico:false,


tags:[

'proteina',

'tradicional',

'intenso'

],


cocinas:[

'mexicana',

'mediterranea',

'medio_oriente'

],


tecnicas:[

'cocer_lento',

'asar',

'hornear'

],


nivel:'intermedio',


familias:[

'cordero',

'carnes_rojas',

'proteinas_animales'

],


usos:[

'barbacoa',

'estofados',

'asados'

],


roles:[

'proteina',

'umami',

'grasa'

],


combinaCon:[

'chile',

'ajo',

'cebolla',

'especias'

],


sustitutos:[

'carne_res',

'carne_cerdo'

],


sustitutosEconomicos:[

'pollo',

'soya_texturizada'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:0,

salado:1,

amargo:1,

umami:9,

picante:0,

ahumado:3,

graso:8,

fresco:1,

aromatico:6

},


sabores:[

'carnoso',

'intenso',

'terroso'

],


texturas:[

'fibrosa',

'jugosa'

],


temporada:[

'todo_el_año'

],


conservacion:

'refrigerado o congelado',


recetasCompatibles:[

'barbacoa',

'consome de borrego',

'estofados'

]

},
];