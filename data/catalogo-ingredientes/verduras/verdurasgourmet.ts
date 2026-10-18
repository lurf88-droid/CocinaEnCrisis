import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';


export const VERDURAS_GOURMET: IngredienteCatalogo[] = [



{
id:'huitlacoche',

nombre:'Huitlacoche',

aliases:[
'huitlacoche',
'cuitlacoche',
'maiz con hongo'
],

precioUnitario:250,

unidad:'kg',

precio:{
minimo:180,
promedio:250,
maximo:400,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hongos_mexicanos',

tags:[
'mexicano',
'ancestral',
'umami',
'gourmet'
],

cocinas:[
'mexicana'
],

tecnicas:[
'saltear',
'guisar',
'rellenar'
],

nivel:'intermedio',

familias:[
'hongos',
'cocina mexicana'
],

usos:[
'quesadillas',
'tamales',
'salsas',
'rellenos'
],

roles:[
'ingrediente principal',
'aporte umami'
],

combinaCon:[
'epazote',
'queso',
'maiz',
'cebolla',
'chile poblano'
],

sustitutos:[
'portobello',
'hongo ostra'
],

sustitutosEconomicos:[
'champiñon',
'calabaza'
],

sabores:[
'umami',
'tierra',
'maiz'
],

texturas:[
'cremosa',
'suave'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:1,
umami:9,
picante:0,

ahumado:2,
graso:4,
fresco:1,
aromatico:8
},

temporada:[
'lluvias',
'verano'
],

conservacion:
'refrigerado 3 a 5 dias',

recetasCompatibles:[
'quesadillas de huitlacoche',
'tlacoyos gourmet',
'crema de huitlacoche',
'tamales'
]

},



{
id:'esparrago',

nombre:'Espárrago',

aliases:[
'esparrago',
'esparragos',
'espárragos verdes'
],

precioUnitario:180,

unidad:'kg',

precio:{
minimo:120,
promedio:180,
maximo:280,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'tallos_gourmet',

tags:[
'gourmet',
'temporada',
'verde',
'mediterraneo'
],

cocinas:[
'francesa',
'italiana',
'espanyola',
'mediterranea'
],

tecnicas:[
'blanquear',
'asar',
'plancha',
'vapor'
],

nivel:'intermedio',

familias:[
'vegetales gourmet',
'tallos'
],

usos:[
'guarnicion',
'ensalada',
'pasta',
'risotto'
],

roles:[
'aporte vegetal',
'textura',
'color'
],

combinaCon:[
'huevo',
'queso parmesano',
'limon',
'aceite de oliva',
'arroz',
'pasta'
],

sustitutos:[
'ejote',
'brocoli'
],

sustitutosEconomicos:[
'calabaza',
'brocoli'
],

sabores:[
'verde',
'ligeramente dulce',
'herbal'
],

texturas:[
'firme',
'crujiente'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:2,
umami:3,
picante:0,

ahumado:1,
graso:2,
fresco:8,
aromatico:6
},

temporada:[
'primavera'
],

conservacion:
'refrigerado 4 a 7 dias',

recetasCompatibles:[
'espárragos con huevo',
'pasta primavera',
'risotto verde',
'guarnicion mediterranea'
]

},



{
id:'alcachofa',

nombre:'Alcachofa',

aliases:[
'alcachofa',
'corazon de alcachofa'
],

precioUnitario:140,

unidad:'kg',

precio:{
minimo:100,
promedio:140,
maximo:220,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'flores_comestibles',

tags:[
'gourmet',
'mediterraneo',
'italiano'
],

cocinas:[
'italiana',
'francesa',
'española'
],

tecnicas:[
'cocer',
'asar',
'rellenar',
'gratinado'
],

nivel:'intermedio',

familias:[
'vegetales gourmet',
'flores comestibles'
],

usos:[
'entradas',
'pasta',
'ensalada',
'relleno'
],

roles:[
'ingrediente principal',
'textura especial'
],

combinaCon:[
'ajo',
'limon',
'queso',
'aceite oliva',
'pan'
],

sustitutos:[
'calabaza',
'berenjena'
],

sustitutosEconomicos:[
'champiñon',
'calabaza'
],

sabores:[
'herbal',
'ligeramente amargo',
'tierra'
],

texturas:[
'carnosa',
'fibrosa'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:4,
umami:3,
picante:0,

ahumado:0,
graso:2,
fresco:7,
aromatico:7
},

temporada:[
'primavera',
'invierno'
],

conservacion:
'refrigerado 3 a 5 dias',

recetasCompatibles:[
'alcachofas gratinadas',
'pasta italiana',
'ensalada mediterranea'
]

},






{
id:'endivia',

nombre:'Endivia',

aliases:[
'endivia',
'endibia'
],

precioUnitario:180,

unidad:'kg',

precio:{
minimo:140,
promedio:180,
maximo:260,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas_gourmet',

tags:[
'gourmet',
'amargo',
'frances'
],

cocinas:[
'francesa',
'belga',
'europea'
],

tecnicas:[
'crudo',
'gratinado',
'horno'
],

nivel:'chef',

familias:[
'hojas especiales'
],

usos:[
'ensaladas',
'entradas',
'guarnicion'
],

roles:[
'contraste de sabor',
'textura'
],

combinaCon:[
'queso azul',
'nuez',
'miel',
'pera'
],

sustitutos:[
'radicchio',
'lechuga romana'
],

sustitutosEconomicos:[
'lechuga',
'col'
],

sabores:[
'amargo',
'fresco',
'herbal'
],

texturas:[
'crujiente',
'firme'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:7,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:6
},

temporada:[
'invierno'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'ensalada francesa',
'endivias gratinadas',
'ensalada gourmet'
]

},
{
id:'radicchio',

nombre:'Radicchio',

aliases:[
'radicchio',
'achicoria roja'
],

precioUnitario:180,

unidad:'kg',

precio:{
minimo:140,
promedio:180,
maximo:280,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas_gourmet',

tags:[
'gourmet',
'amargo',
'italiano',
'ensalada'
],

cocinas:[
'italiana',
'francesa',
'europea'
],

tecnicas:[
'crudo',
'asar',
'gratinado'
],

nivel:'chef',

familias:[
'hojas especiales',
'vegetales gourmet'
],

usos:[
'ensaladas',
'guarniciones',
'entradas'
],

roles:[
'contraste de sabor',
'color',
'textura'
],

combinaCon:[
'pera',
'nuez',
'queso azul',
'vinagre balsamico',
'manzana'
],

sustitutos:[
'endivia',
'col morada'
],

sustitutosEconomicos:[
'lechuga morada',
'col'
],

sabores:[
'amargo',
'herbal',
'ligero picante'
],

texturas:[
'crujiente',
'firme'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:8,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:7
},

temporada:[
'otoño',
'invierno'
],

conservacion:
'refrigerado 5 a 7 dias',

recetasCompatibles:[
'ensalada italiana',
'radicchio a la parrilla',
'ensalada con queso y nuez'
]

},



{
id:'kale',

nombre:'Kale',

aliases:[
'kale',
'col rizada'
],

precioUnitario:120,

unidad:'kg',

precio:{
minimo:90,
promedio:120,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas_verdes',

tags:[
'nutritivo',
'gourmet',
'saludable'
],

cocinas:[
'americana',
'europea',
'internacional'
],

tecnicas:[
'salteado',
'ensalada',
'sopa',
'horno'
],

nivel:'intermedio',

familias:[
'hojas verdes',
'super alimentos'
],

usos:[
'ensaladas',
'sopas',
'smoothies',
'guarniciones'
],

roles:[
'aporte nutricional',
'volumen vegetal'
],

combinaCon:[
'limon',
'ajo',
'queso',
'semillas',
'huevo'
],

sustitutos:[
'espinaca',
'acelga'
],

sustitutosEconomicos:[
'espinaca',
'lechuga'
],

sabores:[
'verde',
'ligeramente amargo'
],

texturas:[
'fibrosa',
'crujiente'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:5,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:9,
aromatico:5
},
temporada:[
'todo el año'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'ensalada kale',
'kale salteado con ajo',
'sopa verde'
]

},



{
id:'zucchini_italiano',

nombre:'Calabacín italiano',

aliases:[
'calabacin',
'zucchini',
'calabacin italiano'
],

precioUnitario:70,

unidad:'kg',

precio:{
minimo:50,
promedio:70,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'calabazas_gourmet',

tags:[
'italiano',
'ligero',
'versatil'
],

cocinas:[
'italiana',
'francesa',
'mediterranea'
],

tecnicas:[
'plancha',
'salteado',
'horno',
'crudo'
],

nivel:'basico',

familias:[
'calabazas',
'vegetales gourmet'
],

usos:[
'pasta vegetal',
'guarnicion',
'ensalada',
'relleno'
],

roles:[
'volumen',
'textura',
'base vegetal'
],

combinaCon:[
'ajo',
'jitomate',
'queso',
'albahaca',
'aceite oliva'
],

sustitutos:[
'calabaza mexicana'
],

sustitutosEconomicos:[
'calabaza criolla',
'chayote'
],

sabores:[
'suave',
'dulce',
'verde'
],

texturas:[
'jugosa',
'firme'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:0,

ahumado:1,
graso:2,
fresco:8,
aromatico:5
},

temporada:[
'verano'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'pasta de zucchini',
'zucchini relleno',
'verduras al grill'
]

},
{
id:'berenjena_japonesa',

nombre:'Berenjena japonesa',

aliases:[
'berenjena japonesa',
'eggplant japonesa',
'berenjena delgada'
],

precioUnitario:120,

unidad:'kg',

precio:{
minimo:90,
promedio:120,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'berenjenas_gourmet',

tags:[
'gourmet',
'asiatico',
'suave',
'versatil'
],

cocinas:[
'japonesa',
'china',
'mediterranea'
],

tecnicas:[
'asar',
'saltear',
'glasear',
'parrilla'
],

nivel:'intermedio',

familias:[
'berenjenas',
'vegetales especiales'
],

usos:[
'guarnicion',
'plato principal',
'salteados'
],

roles:[
'base vegetal',
'absorbe sabores'
],

combinaCon:[
'soya',
'miso',
'ajo',
'jengibre',
'sesamo'
],

sustitutos:[
'berenjena tradicional'
],

sustitutosEconomicos:[
'calabaza',
'chayote'
],

sabores:[
'suave',
'dulce',
'terroso'
],

texturas:[
'cremosa',
'suave'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:1,
umami:9,
picante:0,

ahumado:2,
graso:4,
fresco:1,
aromatico:8
},
temporada:[
'verano'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'berenjena glaseada japonesa',
'berenjena al miso',
'salteado oriental'
]

},



{
id:'tomate_heirloom',

nombre:'Tomate heirloom',

aliases:[
'tomate antiguo',
'tomate de variedades antiguas',
'tomate artesanal'
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

categoria:'verduras',

subcategoria:'tomates_especiales',

tags:[
'gourmet',
'temporada',
'aromatico',
'fresco'
],

cocinas:[
'italiana',
'francesa',
'mediterranea'
],

tecnicas:[
'crudo',
'ensalada',
'salsa',
'horno'
],

nivel:'intermedio',

familias:[
'tomates',
'vegetales premium'
],

usos:[
'ensaladas',
'salsas',
'entradas'
],

roles:[
'acidez',
'frescura',
'color'
],

combinaCon:[
'queso mozzarella',
'albahaca',
'aceite oliva',
'ajo'
],

sustitutos:[
'tomate bola',
'tomate saladet'
],

sustitutosEconomicos:[
'tomate saladet'
],

sabores:[
'dulce',
'acido',
'aromatico'
],

texturas:[
'jugosa',
'carnosa'
],

perfilSabor:{
...SABOR_BASE,

dulce:6,
acido:6,
salado:0,
amargo:0,
umami:6,
picante:0,

ahumado:0,
graso:0,
fresco:9,
aromatico:8
},

temporada:[
'verano'
],

conservacion:
'refrigerado o temperatura ambiente según madurez',

recetasCompatibles:[
'ensalada caprese',
'salsa fresca',
'tomate al horno'
]

},



{
id:'microgreens',

nombre:'Microgreens',

aliases:[
'brotes tiernos',
'microbrotes'
],

precioUnitario:600,

unidad:'kg',

precio:{
minimo:400,
promedio:600,
maximo:900,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'brotes',

tags:[
'gourmet',
'decoracion',
'nutritivo'
],

cocinas:[
'alta cocina',
'internacional'
],

tecnicas:[
'crudo',
'acabado'
],

nivel:'chef',

familias:[
'brotes',
'acabados'
],

usos:[
'decoracion',
'ensaladas',
'platos gourmet'
],

roles:[
'acabado visual',
'frescura'
],

combinaCon:[
'ensaladas',
'pescado',
'quesos',
'huevo'
],

sustitutos:[
'brotes de alfalfa',
'cilantro fresco'
],

sustitutosEconomicos:[
'cilantro',
'perejil'
],

sabores:[
'fresco',
'herbal'
],

texturas:[
'delicada',
'crujiente'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:2,
umami:1,
picante:1,

ahumado:0,
graso:0,
fresco:10,
aromatico:7
},

temporada:[
'todo el año'
],

conservacion:
'refrigerado 3 a 5 dias',

recetasCompatibles:[
'bowl saludable',
'ensalada gourmet',
'acabado de platos'
]

},
{
id:'flor_calabaza',

nombre:'Flor de calabaza',

aliases:[
'flor calabaza',
'flores de calabaza'
],

precioUnitario:180,

unidad:'kg',

precio:{
minimo:120,
promedio:180,
maximo:280,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'flores_comestibles_mexicanas',

tags:[
'mexicano',
'tradicional',
'temporada',
'gourmet'
],

cocinas:[
'mexicana'
],

tecnicas:[
'saltear',
'rellenar',
'guisar'
],

nivel:'intermedio',

familias:[
'vegetales mexicanos',
'flores comestibles'
],

usos:[
'quesadillas',
'sopas',
'rellenos',
'tamales'
],

roles:[
'ingrediente principal',
'aroma',
'textura'
],

combinaCon:[
'queso',
'epazote',
'elote',
'chile poblano',
'masa de maiz'
],

sustitutos:[
'calabaza tierna',
'verduras mixtas'
],

sustitutosEconomicos:[
'espinaca',
'acelga'
],

sabores:[
'suave',
'floral',
'ligeramente dulce'
],

texturas:[
'delicada',
'suave'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:7
},

temporada:[
'primavera',
'verano'
],

conservacion:
'refrigerado 2 a 3 dias',

recetasCompatibles:[
'quesadillas de flor de calabaza',
'sopa de flor de calabaza',
'tacos vegetarianos'
]

},






{
id:'nopal_baby',

nombre:'Nopal baby',

aliases:[

'nopales tiernos',
'nopal pequeño'
],

precioUnitario:70,

unidad:'kg',

precio:{
minimo:50,
promedio:70,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'cactaceas_mexicanas',

tags:[
'mexicano',
'ancestral',
'economico',
'nutritivo'
],

cocinas:[
'mexicana'
],

tecnicas:[
'asar',
'hervir',
'grillar',
'ensalada'
],

nivel:'basico',

familias:[
'verduras mexicanas',
'cactaceas'
],

usos:[
'ensalada',
'tacos',
'guarnicion',
'guisos'
],

roles:[
'fibra',
'volumen vegetal',
'base de plato'
],

combinaCon:[
'jitomate',
'cebolla',
'queso panela',
'chile',
'frijol'
],

sustitutos:[
'ejote',
'calabaza'
],

sustitutosEconomicos:[
'calabaza',
'chayote'
],

sabores:[
'verde',
'ligeramente acido'
],

texturas:[
'crujiente',
'jugosa'
],

perfilSabor:{
...SABOR_BASE,

umami:2,
dulce:2,
acido:3,
amargo:1,
salado:0,
picante:0,

ahumado:0,
graso:0,
fresco:8,
aromatico:3
},

temporada:[
'primavera',
'verano'
],

conservacion:
'refrigerado 5 a 7 dias',

recetasCompatibles:[
'ensalada de nopales',
'tacos de nopal',
'nopales con huevo',
'nopales con queso'
]

},



{
id:'huauzontle',

nombre:'Huauzontle',

aliases:[
'huauzontle',
'huazontle'
],

precioUnitario:120,

unidad:'kg',

precio:{
minimo:80,
promedio:120,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'plantas_mexicanas',

tags:[
'mexicano',
'ancestral',
'gourmet'
],

cocinas:[
'mexicana'
],

tecnicas:[
'rebozar',
'hervir',
'guisar'
],

nivel:'intermedio',

familias:[
'vegetales mexicanos',
'cocina ancestral'
],

usos:[
'rellenos',
'tortitas',
'guisos'
],

roles:[
'ingrediente principal',
'tradición mexicana'
],

combinaCon:[
'queso',
'huevo',
'chile pasilla',
'salsa roja'
],

sustitutos:[
'quelites',
'verdolagas'
],

sustitutosEconomicos:[
'espinaca',
'acelga'
],

sabores:[
'verde',
'herbal',
'ligeramente amargo'
],

texturas:[
'ramificada',
'suave cocida'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:3,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:7,
aromatico:6
},

temporada:[
'cuaresma',
'primavera'
],

conservacion:
'refrigerado 3 dias',

recetasCompatibles:[
'tortitas de huauzontle',
'huauzontle en salsa',
'guisado mexicano'
]

},





{
id:'ejote_frances',

nombre:'Ejote francés',

aliases:[
'ejote frances',
'haricot vert',
'ejote delgado'
],

precioUnitario:140,

unidad:'kg',

precio:{
minimo:100,
promedio:140,
maximo:220,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'vegetales_gourmet',

tags:[
'gourmet',
'frances',
'verde'
],

cocinas:[
'francesa',
'italiana',
'mexicana'
],

tecnicas:[
'blanquear',
'saltear',
'vapor'
],

nivel:'intermedio',

familias:[
'ejotes',
'vegetales finos'
],

usos:[
'guarniciones',
'ensaladas',
'platos principales'
],

roles:[
'textura',
'color'
],

combinaCon:[
'almendra',
'ajo',
'mantequilla',
'limon'
],

sustitutos:[
'ejote tradicional'
],

sustitutosEconomicos:[
'ejote normal',
'calabacita'
],

sabores:[
'verde',
'fresco'
],

texturas:[
'crujiente',
'firme'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:1,
umami:2,
picante:0,

ahumado:0,
graso:2,
fresco:8,
aromatico:5
},

temporada:[
'verano'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'ejotes con almendra',
'guarnicion francesa',
'ensalada tibia'
]

},
{
id:'bok_choy',

nombre:'Bok choy',

aliases:[
'bok choy',
'pak choi',
'col china'
],

precioUnitario:120,

unidad:'kg',

precio:{
minimo:80,
promedio:120,
maximo:200,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'vegetales_asiaticos',

tags:[
'asiatico',
'gourmet',
'verde',
'umami'
],

cocinas:[
'china',
'japonesa',
'coreana'
],

tecnicas:[
'saltear',
'vapor',
'sopa',
'caldo'
],

nivel:'intermedio',

familias:[
'col asiática',
'vegetales internacionales'
],

usos:[
'wok',
'sopas',
'bowls',
'guarniciones'
],

roles:[
'volumen vegetal',
'textura',
'umami'
],

combinaCon:[
'salsa soya',
'jengibre',
'ajo',
'arroz',
'pollo'
],

sustitutos:[
'acelga',
'col',
'brócoli'
],

sustitutosEconomicos:[
'acelga',
'col verde'
],

sabores:[
'verde',
'suave',
'ligeramente dulce'
],

texturas:[
'crujiente',
'jugosa'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:1,
umami:3,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:5
},
temporada:[
'otoño',
'invierno'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'wok asiático',
'sopa ramen vegetal',
'bowl oriental'
]

},



{
id:'pak_choi_baby',

nombre:'Pak choi baby',

aliases:[
'pak choi baby',
'bok choy baby'
],

precioUnitario:180,

unidad:'kg',

precio:{
minimo:140,
promedio:180,
maximo:280,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'vegetales_asiaticos_premium',

tags:[
'gourmet',
'asiatico',
'chef'
],

cocinas:[
'japonesa',
'china',
'alta cocina'
],

tecnicas:[
'plancha',
'salteado',
'vapor'
],

nivel:'chef',

familias:[
'vegetales premium'
],

usos:[
'plato principal',
'guarnición'
],

roles:[
'presentación',
'textura'
],

combinaCon:[
'miso',
'sesamo',
'soya',
'salmon'
],

sustitutos:[
'bok choy normal'
],

sustitutosEconomicos:[
'acelga'
],

sabores:[
'suave',
'verde'
],

texturas:[
'crujiente',
'tierna'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:1,
umami:3,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:5
},

temporada:[
'invierno'
],

conservacion:
'refrigerado 4 dias',

recetasCompatibles:[
'pak choi al grill',
'guarnición japonesa'
]

},



{
id:'daikon',

nombre:'Daikon',

aliases:[
'rábano japonés',
'daikon'
],

precioUnitario:90,

unidad:'kg',

precio:{
minimo:60,
promedio:90,
maximo:140,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'raices_asiaticas',

tags:[
'asiatico',
'fresco',
'crujiente'
],

cocinas:[
'japonesa',
'china',
'coreana'
],

tecnicas:[
'crudo',
'encurtir',
'sopa'
],

nivel:'intermedio',

familias:[
'raíces',
'vegetales asiáticos'
],

usos:[
'ensaladas',
'caldos',
'encurtidos'
],

roles:[
'acidez',
'textura'
],

combinaCon:[
'soya',
'vinagre',
'pepino',
'pollo'
],

sustitutos:[
'rabano',
'nabo'
],

sustitutosEconomicos:[
'rabano mexicano'
],

sabores:[
'fresco',
'ligeramente picante'
],

texturas:[
'crujiente',
'acuosa'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:2,
umami:1,
picante:4,

ahumado:0,
graso:0,
fresco:9,
aromatico:5
},

temporada:[
'invierno'
],

conservacion:
'refrigerado 2 semanas',

recetasCompatibles:[
'ensalada japonesa',
'daikon encurtido',
'sopas asiáticas'
]

},
{
id:'taro',

nombre:'Taro',

aliases:[
'taro',

'raiz de taro'
],

precioUnitario:90,

unidad:'kg',

precio:{
minimo:60,
promedio:90,
maximo:140,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'tuberculos_exoticos',

tags:[
'asiatico',
'cremoso',
'gourmet'
],

cocinas:[
'asiatica',
'polinesia',
'internacional'
],

tecnicas:[
'hervir',
'freir',
'pure',
'vapor'
],

nivel:'intermedio',

familias:[
'tuberculos',
'raices internacionales'
],

usos:[
'pure',
'sopas',
'guarniciones',
'postres asiaticos'
],

roles:[
'base energetica',
'textura cremosa'
],

combinaCon:[
'coco',
'jengibre',
'ajo',
'pollo',
'pescado'
],

sustitutos:[
'papa',
'camote'
],

sustitutosEconomicos:[
'papa blanca'
],

sabores:[
'neutro',
'ligeramente dulce'
],

texturas:[
'cremosa',
'harinosa'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:0,
umami:1,
picante:0,

ahumado:0,
graso:2,
fresco:2,
aromatico:3
},

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'pure de taro',
'sopa cremosa',
'taro frito'
]

},



{
id:'yuca_premium',

nombre:'Yuca',

aliases:[
'yuca',
'madioca',
'mandioca'
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

categoria:'verduras',

subcategoria:'tuberculos',

tags:[
'economico',
'latinoamericano',
'versatil'
],

cocinas:[
'mexicana',
'caribeña',
'sudamericana'
],

tecnicas:[
'hervir',
'freir',
'hornear'
],

nivel:'basico',

familias:[
'tuberculos',
'cocina economica'
],

usos:[
'guarnicion',
'botana',
'plato principal'
],

roles:[
'sustituto de papa',
'energia'
],

combinaCon:[
'ajo',
'limon',
'queso',
'carne',
'pescado'
],

sustitutos:[
'papa',
'taro'
],

sustitutosEconomicos:[
'papa'
],

sabores:[
'neutro',
'ligeramente dulce'
],

texturas:[
'harinosa',
'firme'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:0,
umami:1,
picante:0,

ahumado:1,
graso:2,
fresco:3,
aromatico:2
},

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'yuca frita',
'yuca con ajo',
'pure de yuca'
]

},












{
id:'poro_baby',

nombre:'Poro baby',

aliases:[
'poro pequeño',
'puerro baby',
'leek baby'
],

precioUnitario:160,

unidad:'kg',

precio:{
minimo:100,
promedio:160,
maximo:240,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'vegetales_finós',

tags:[
'gourmet',
'frances',
'aromatico'
],

cocinas:[
'francesa',
'italiana'
],

tecnicas:[
'brasear',
'saltear',
'asar'
],

nivel:'chef',

familias:[
'alliums',
'vegetales premium'
],

usos:[
'guarniciones',
'sopas',
'entradas'
],

roles:[
'aroma',
'base culinaria'
],

combinaCon:[
'mantequilla',
'queso',
'pollo',
'papa'
],

sustitutos:[
'poro normal',
'cebolla'
],

sustitutosEconomicos:[
'cebolla blanca'
],

sabores:[
'dulce',
'cebolla suave'
],

texturas:[
'tierna',
'fibrosa'
],

perfilSabor:{
...SABOR_BASE,

dulce:5,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:1,

ahumado:1,
graso:2,
fresco:7,
aromatico:8
},

temporada:[
'primavera'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'poro braseado',
'sopa francesa',
'guarnicion con mantequilla'
]

},
{
id:'zanahoria_baby',

nombre:'Zanahoria baby',

aliases:[
'zanahoria baby',
'zanahoria bebe',
'baby carrot'
],

precioUnitario:120,

unidad:'kg',

precio:{
minimo:80,
promedio:120,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'vegetales_gourmet',

tags:[
'gourmet',
'dulce',
'guarnicion',
'presentacion'
],

cocinas:[
'francesa',
'italiana',
'internacional'
],

tecnicas:[
'glasear',
'asar',
'vapor',
'saltear'
],

nivel:'intermedio',

familias:[
'raices',
'vegetales premium'
],

usos:[
'guarniciones',
'bowls',
'ensaladas'
],

roles:[
'color',
'dulzor',
'presentacion'
],

combinaCon:[
'miel',
'mantequilla',
'romero',
'naranja',
'pollo'
],

sustitutos:[
'zanahoria tradicional'
],

sustitutosEconomicos:[
'zanahoria normal'
],

sabores:[
'dulce',
'terroso',
'herbal'
],

texturas:[
'crujiente',
'tierna'
],

perfilSabor:{
...SABOR_BASE,

dulce:7,
acido:0,
salado:0,
amargo:0,
umami:1,
picante:0,

ahumado:0,
graso:2,
fresco:5,
aromatico:4
},

temporada:[
'todo el año'
],

conservacion:
'refrigerado 1 semana',

recetasCompatibles:[
'zanahorias glaseadas',
'guarnicion francesa',
'bowl vegetal'
]

},



{
id:'guisante_frances',

nombre:'Guisante francés',

aliases:[
'guisante frances',
'french pea'
],

precioUnitario:180,

unidad:'kg',

precio:{
minimo:120,
promedio:180,
maximo:280,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'vegetales_finós',

tags:[
'gourmet',
'frances',
'dulce'
],

cocinas:[
'francesa',
'europea'
],

tecnicas:[
'vapor',
'saltear',
'blanquear'
],

nivel:'intermedio',

familias:[
'legumbres verdes',
'vegetales premium'
],

usos:[
'guarniciones',
'risottos',
'ensaladas'
],

roles:[
'dulzor',
'color',
'textura'
],

combinaCon:[
'mantequilla',
'mint',
'arroz',
'huevo',
'pollo'
],

sustitutos:[
'guisante congelado',
'ejote'
],

sustitutosEconomicos:[
'ejote',
'chicharo común'
],

sabores:[
'dulce',
'fresco',
'verde'
],

texturas:[
'tierno',
'ligeramente crujiente'
],

perfilSabor:{
...SABOR_BASE,

dulce:6,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:5
},

temporada:[
'primavera'
],

conservacion:
'refrigerado 3 a 5 dias',

recetasCompatibles:[
'rissoto primavera',
'guisantes con mantequilla',
'ensalada francesa'
]

},



{
id:'romanesco',

nombre:'Romanesco',

aliases:[
'romanesco',
'brocoli romanesco',
'coliflor romanesco'
],

precioUnitario:160,

unidad:'kg',

precio:{
minimo:100,
promedio:160,
maximo:240,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'cruciferas_gourmet',

tags:[
'gourmet',
'italiano',
'visual',
'nutritivo'
],

cocinas:[
'italiana',
'francesa',
'europea'
],

tecnicas:[
'vapor',
'horno',
'gratinado'
],

nivel:'intermedio',

familias:[
'cruciferas',
'vegetales especiales'
],

usos:[
'guarniciones',
'cremas',
'ensaladas'
],

roles:[
'presentacion',
'textura',
'nutricion'
],

combinaCon:[
'queso',
'ajo',
'limon',
'almendra',
'aceite oliva'
],

sustitutos:[
'brocoli',
'coliflor'
],

sustitutosEconomicos:[
'brocoli',
'coliflor'
],

sabores:[
'verde',
'suave',
'ligeramente dulce'
],

texturas:[
'firme',
'crujiente'
],

perfilSabor:{
...SABOR_BASE,

umami:2,
dulce:3,
acido:0,
amargo:2,
salado:0,
picante:0,

ahumado:0,
graso:0,
fresco:7,
aromatico:3
},

temporada:[
'otoño',
'invierno'
],

conservacion:
'refrigerado 5 dias',

recetasCompatibles:[
'romanesco gratinado',
'vegetales al horno',
'crema de romanesco'
]

},
];