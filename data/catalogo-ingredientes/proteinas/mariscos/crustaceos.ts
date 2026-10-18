import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CRUSTACEOS: IngredienteCatalogo[] = [
 
    
    {
id:'camaron_pequeno',

nombre:'Camarón pequeño',

aliases:[
'camarón chico',
'camarón pequeño',
'small shrimp'
],


precioUnitario:220,


unidad:'kg',


precio:{
minimo:160,
promedio:220,
maximo:350,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:true,


tags:[
'economico',
'marino',
'versatil',
'rapido'
],


cocinas:[
'mexicana',
'asiatica',
'mediterranea',
'internacional'
],


tecnicas:[
'saltear',
'hervir',
'freir',
'sopa',
'arroz'
],


nivel:'basico',


familias:[
'mariscos',
'crustaceos',
'proteinas_animales'
],


usos:[
'arroces',
'sopas',
'tacos',
'rellenos',
'ceviches'
],


roles:[
'proteina',
'umami',
'marino',
'rapido'
],


combinaCon:[
'ajo',
'limon',
'chile',
'arroz',
'pastas',
'verduras'
],


sustitutos:[
'camarón_mediano',
'calamar',
'pulpo'
],


sustitutosEconomicos:[
'sardina',
'atun',
'tilapia'
],


perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:1,
amargo:0,
umami:8,
picante:0,

ahumado:1,
graso:2,
fresco:5,
aromatico:3
},


sabores:[
'dulce_marino',
'umami'
],


texturas:[
'tierna',
'pequeña',
'jugosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'arroz_con_camarón',
'sopa_de_mariscos',
'ceviche',
'tacos_de_camarón'
]

},
{
id:'camaron_mediano',

nombre:'Camarón mediano',

aliases:[

'shrimp',

'shrimp medium',

'medium shrimp',

'camaron mediano'

],

precioUnitario:300,


unidad:'kg',


precio:{
minimo:220,
promedio:300,
maximo:450,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:true,


tags:[
'versatil',
'popular',
'marino',
'alta_demanda'
],


cocinas:[
'mexicana',
'italiana',
'asiatica',
'mediterranea'
],


tecnicas:[
'plancha',
'saltear',
'horno',
'freir',
'parrilla'
],


nivel:'basico',


familias:[
'mariscos',
'crustaceos',
'proteinas_animales'
],


usos:[
'tacos',
'pastas',
'arroces',
'ensaladas',
'ceviches'
],


roles:[
'proteina',
'umami',
'sabor_principal'
],


combinaCon:[
'ajo',
'mantequilla',
'limon',
'chile',
'arroz',
'pasta'
],


sustitutos:[
'camarón_grande',
'langostino'
],


sustitutosEconomicos:[
'tilapia',
'atun'
],


perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:1,
amargo:0,
umami:9,
picante:0,

ahumado:2,
graso:3,
fresco:5,
aromatico:3
},


sabores:[
'dulce',
'umami',
'marino'
],


texturas:[
'firme',
'jugosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'tacos_de_camarón',
'pasta_con_camarón',
'aguachile',
'arroz_marinero',
'camarones_al_ajillo'
]

},
{
id:'camaron_grande',

nombre:'camarón_grande',

aliases:[
'camarón jumbo',
'camarón grande',
'langostino pequeño'
],


precioUnitario:450,


unidad:'kg',


precio:{
minimo:350,
promedio:450,
maximo:700,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'premium',
'gourmet',
'marino',
'plato_principal'
],


cocinas:[
'mexicana',
'japonesa',
'mediterranea',
'internacional'
],


tecnicas:[
'parrilla',
'plancha',
'hornear',
'mantequilla'
],


nivel:'intermedio',


familias:[
'mariscos',
'crustaceos',
'proteinas_animales'
],


usos:[
'platos_principales',
'entradas',
'parrilla',
'ceviches'
],


roles:[
'proteina',
'premium',
'sabor_principal'
],


combinaCon:[
'mantequilla',
'ajo',
'limon',
'romero',
'arroz'
],


sustitutos:[
'langostino',
'camarón_mediano'
],


sustitutosEconomicos:[
'camarón_pequeño',
'tilapia'
],


perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:1,
amargo:0,
umami:10,
picante:0,

ahumado:2,
graso:4,
fresco:6,
aromatico:4
},


sabores:[
'dulce_marino',
'intenso',
'umami'
],


texturas:[
'firme',
'carnosa',
'jugosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'camarones_al_ajillo',
'camarones_a_la_mantequilla',
'brochetas_de_camarón',
'camarón_a_la_parrilla'
]

},
{
id:'langosta',

nombre:'Langosta',

aliases:[
'langosta marina',
'lobster'
],


precioUnitario:900,


unidad:'kg',


precio:{
minimo:650,
promedio:900,
maximo:1500,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'premium',
'gourmet',
'mantequilloso',
'marino'
],


cocinas:[
'francesa',
'mediterranea',
'mexicana',
'internacional'
],


tecnicas:[
'parrilla',
'hervir',
'horno',
'mantequilla'
],


nivel:'avanzado',


familias:[
'mariscos',
'crustaceos',
'proteinas_animales'
],


usos:[
'plato_principal',
'entradas',
'arroces',
'pasta'
],


roles:[
'proteina',
'premium',
'sabor_principal'
],


combinaCon:[
'mantequilla',
'limon',
'ajo',
'romero',
'arroz'
],


sustitutos:[
'langostino',
'camarón_grande'
],


sustitutosEconomicos:[
'camarón_mediano',
'calamar',
'tilapia'
],


perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:2,
amargo:0,
umami:10,
picante:0,

ahumado:2,
graso:7,
fresco:6,
aromatico:4
},


sabores:[
'dulce_marino',
'mantequilloso',
'umami'
],


texturas:[
'carnosa',
'firme',
'jugosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'langosta_a_la_mantequilla',
'langosta_a_la_parrilla',
'arroz_con_langosta',
'pasta_con_langosta'
]

},
{
id:'langostino',

nombre:'Langostino',

aliases:[
'langostino jumbo',
'langostino grande',
'langostino'
],


precioUnitario:550,


unidad:'kg',


precio:{
minimo:400,
promedio:550,
maximo:900,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'premium',
'marino',
'carnoso'
],


cocinas:[
'mediterranea',
'española',
'internacional'
],


tecnicas:[
'plancha',
'parrilla',
'arroz',
'horno'
],


nivel:'intermedio',


familias:[
'mariscos',
'crustaceos',
'proteinas_animales'
],


usos:[
'paella',
'entradas',
'platos_principales'
],


roles:[
'proteina',
'sabor_principal',
'umami'
],


combinaCon:[
'ajo',
'limon',
'perejil',
'arroz'
],


sustitutos:[
'camarón_grande',
'cigala'
],


sustitutosEconomicos:[
'camarón_mediano'
],


perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:2,
amargo:0,
umami:9,
picante:0,

ahumado:1,
graso:4,
fresco:6,
aromatico:3
},


sabores:[
'dulce',
'umami',
'marino'
],


texturas:[
'firme',
'carnosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'paella',
'langostinos_al_ajillo',
'mariscada'
]

},
{
id:'cangrejo',

nombre:'Cangrejo',

aliases:[
'carne de cangrejo',
'crab'
],


precioUnitario:450,


unidad:'kg',


precio:{
minimo:300,
promedio:450,
maximo:800,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'dulce',
'marino',
'rellenos'
],


cocinas:[
'asiatica',
'americana',
'internacional'
],


tecnicas:[
'hervir',
'mezclar',
'rellenar'
],


nivel:'intermedio',


familias:[
'mariscos',
'crustaceos',
'proteinas_animales'
],


usos:[
'rellenos',
'ensaladas',
'sopas',
'pastas'
],


roles:[
'proteina',
'umami',
'relleno',
'sabor_marino'
],


combinaCon:[
'mayonesa',
'limon',
'aguacate',
'queso'
],


sustitutos:[
'jaiba',
'camarón'
],


sustitutosEconomicos:[
'atun',
'sardina'
],


perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:1,
salado:2,
amargo:0,
umami:8,
picante:0,

ahumado:1,
graso:3,
fresco:6,
aromatico:3
},


sabores:[
'dulce_marino',
'suave'
],


texturas:[
'fibrosa',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'ensalada_de_cangrejo',
'pasteles_de_cangrejo',
'sopas_marinas'
]

},

{
id:'jaiba',

nombre:'Jaiba',

aliases:[
'jaiba azul',
'cangrejo azul',
'carne de jaiba'
],


precioUnitario:350,


unidad:'kg',


precio:{
minimo:250,
promedio:350,
maximo:600,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'marino',
'mexicano',
'dulce',
'tradicional'
],


cocinas:[
'mexicana',
'costeña',
'internacional'
],

tecnicas:[
'hervir',
'limpiar',
'sacar_carne',
'rellenar'
],


nivel:'intermedio',


familias:[
'mariscos',
'crustaceos',
'proteinas_animales'
],


usos:[
'tacos',
'sopas',
'caldos',
'rellenos',
'ensaladas'
],


roles:[
'proteina',
'umami',
'relleno',
'identidad'
],


combinaCon:[
'limon',
'chile',
'tomate',
'aguacate',
'cilantro'
],


sustitutos:[
'cangrejo',
'camarón'
],


sustitutosEconomicos:[
'atun',
'sardina'
],


perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:1,
salado:2,
amargo:0,
umami:8,
picante:0,

ahumado:1,
graso:3,
fresco:6,
aromatico:3
},


sabores:[
'dulce_marino',
'suave',
'umami'
],


texturas:[
'fibrosa',
'tierna'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'tacos_de_jaiba',
'caldo_de_mariscos',
'ensalada_de_jaiba',
'relleno_de_jaiba'
]

},
{
id:'cigala',

nombre:'Cigala',

aliases:[
'cigala marina',
'norway lobster'
],


precioUnitario:700,


unidad:'kg',


precio:{
minimo:500,
promedio:700,
maximo:1200,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'proteinas',


subcategoria:'mariscos',


basico:false,


tags:[
'premium',
'mediterraneo',
'delicado'
],


cocinas:[
'española',
'italiana',
'mediterranea'
],


tecnicas:[
'plancha',
'parrilla',
'arroz',
'horno'
],


nivel:'avanzado',


familias:[
'mariscos',
'crustaceos',
'proteinas_animales'
],


usos:[
'paellas',
'pasta',
'platos_gourmet',
'entradas'
],


roles:[
'proteina',
'premium',
'sabor_principal'
],


combinaCon:[
'ajo',
'aceite_oliva',
'limon',
'arroz',
'vino_blanco'
],


sustitutos:[
'langostino',
'camarón_grande'
],


sustitutosEconomicos:[
'camarón_mediano'
],


perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:2,
amargo:0,
umami:10,
picante:0,

ahumado:1,
graso:5,
fresco:6,
aromatico:4
},


sabores:[
'dulce_marino',
'intenso',
'umami'
],


texturas:[
'firme',
'carnosa',
'jugosa'
],


temporada:[
'todo_el_año'
],


conservacion:
'refrigerado',


recetasCompatibles:[
'cigalas_a_la_plancha',
'arroz_marinero',
'paella_de_mariscos',
'pasta_con_mariscos'
]

},
{
  id:'cabeza_camaron_seco',

  nombre:'Cabeza de camarón seco',

  aliases:[
    'cabeza de camarón seco',
    'cabezas de camarón seco',
    'cabeza de camaron seco',
    'cabezas de camaron seco'
  ],


  precioUnitario:90,


  unidad:'kg',


  precio:{

    minimo:70,

    promedio:90,

    maximo:112,

    moneda:'MXN',

    actualizado:'2026-08'

  },


  categoria:'proteinas',


  subcategoria:'mariscos_secos',


  basico:false,


  tags:[

    'camaron',

    'crustaceo',

    'marisco_seco',

    'deshidratado',

    'umami',

    'chiapas',

    'zoque',

    'tradicional'

  ],


  cocinas:[

    'mexicana',

    'chiapaneca',

    'zoque'

  ],


  tecnicas:[

    'tostar',

    'moler',

    'hidratar',

    'cocer',

    'guisar'

  ],


  nivel:'intermedio',


  familias:[

    'proteinas',

    'mariscos',

    'crustaceos',

    'mariscos_secos'

  ],


  usos:[

    'tamales',

    'rellenos',

    'caldos',

    'sopas',

    'salsas',

    'fondos',

    'guisos'

  ],


  roles:[

    'umami',

    'sazonador',

    'aromatizante',

    'proteina',

    'intensificador_sabor'

  ],


  combinaCon:[

    'frijol_negro',

    'pepita_calabaza',

    'hierba_santa',

    'masa_maiz',

    'cebolla_blanca'

  ],


  sustitutos:[

    'camaron_seco'
  ],


  sustitutosEconomicos:[

    'camaron_seco'
  ],


  perfilSabor:{

    ...SABOR_BASE,

    dulce:1,

    acido:0,

    salado:7,

    amargo:1,

    umami:9,

    picante:0,

    ahumado:1,

    graso:2,

    fresco:0,

    aromatico:7

  },


  sabores:[

    'marino',

    'salado',

    'umami',

    'intenso',

    'concentrado'

  ],


  texturas:[

    'seca',

    'quebradiza',

    'crujiente_tostada',

    'polvo_molido'

  ],


  temporada:[

    'todo_el_año'

  ],


  conservacion:

    'seco_en_recipiente_hermetico_en_lugar_fresco_y_sin_humedad',


  recetasCompatibles:[

    'tamal-juacane-chiapaneco'

  ]

},
];
