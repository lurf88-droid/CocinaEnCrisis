import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';


export const VERDURAS: IngredienteCatalogo[] = [
{
id:'chayote',

nombre:'Chayote',

aliases:[

'chayote verde',
'chayote fresco',
'prickly pear squash'

],


precioUnitario:25,

unidad:'kg',


precio:{

minimo:15,

promedio:25,

maximo:45,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'verduras',

subcategoria:'verduras_de_fruto',


basico:true,


tags:[

'economico',

'ligero',

'versatil'

],


cocinas:[

'mexicana',

'latinoamericana'

],


tecnicas:[

'hervir',

'guisar',

'saltear'

],


nivel:'basico',


familias:[

'verduras',

'calabazas'

],


usos:[

'caldos',

'guisos',

'ensaladas'

],


roles:[

'volumen',

'textura',

'equilibrio'

],


combinaCon:[

'pollo',

'carne',

'jitomate',

'cebolla',

'queso'

],


sustitutos:[

'calabaza',

'papa'

],


sustitutosEconomicos:[

'papa'

],


perfilSabor:{

...SABOR_BASE,

dulce:2,

acido:0,

salado:0,

amargo:0,

umami:1,

picante:0,

ahumado:0,

graso:0,

fresco:7,

aromatico:2

},


sabores:[

'suave',

'fresco'

],


texturas:[

'crujiente',

'tierna'

],


temporada:[

'todo_el_año'

],


conservacion:

'lugar fresco o refrigerado',


recetasCompatibles:[

'caldo de verduras',

'chayotes rellenos',

'guisos mexicanos'

]

},
{
id:'papa',

nombre:'Papa',

aliases:[
'papa',
'papa blanca',
'patata'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:60,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'tuberculos',

basico:true,

tags:[
'economico',
'base',
'crisis',
'versatil'
],

cocinas:[
'mexicana',
'española',
'francesa',
'internacional'
],

tecnicas:[
'hervir',
'freir',
'hornear',
'pure',
'asar'
],

nivel:'basico',

familias:[
'tuberculos',
'ingrediente_base'
],

usos:[
'sopas',
'guisos',
'guarniciones',
'botanas'
],

roles:[
'volumen',
'energia',
'sustituto_arroz'
],

combinaCon:[
'huevo',
'queso',
'pollo',
'carne',
'crema'
],

sustitutos:[
'yuca',
'camote'
],

sustitutosEconomicos:[
'chayote',
'calabaza'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:0,
umami:2,
picante:0,

ahumado:1,
graso:2,
fresco:2,
aromatico:2
},

sabores:[
'neutro',
'ligeramente dulce'
],

texturas:[
'cremosa',
'harinosa'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y oscuro',

recetasCompatibles:[
'pure de papa',
'tacos dorados',
'sopa de papa',
'papas al horno'
]
},
{
id:'zanahoria',

nombre:'Zanahoria',

aliases:[
'zanahoria',
'zanahorias'
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

categoria:'verduras',

subcategoria:'raices',

basico:true,

tags:[
'economico',
'base',
'dulce',
'crisis'
],

cocinas:[
'mexicana',
'francesa',
'asiatica',
'internacional'
],

tecnicas:[
'hervir',
'saltear',
'hornear',
'crudo',
'pure'
],

nivel:'basico',

familias:[
'raices',
'vegetales_base'
],

usos:[
'sopas',
'guisos',
'ensaladas',
'caldos'
],

roles:[
'dulzor',
'color',
'volumen'
],

combinaCon:[
'papa',
'pollo',
'carne',
'crema',
'jengibre'
],

sustitutos:[
'camote',
'betabel'
],

sustitutosEconomicos:[
'chayote'
],

perfilSabor:{
...SABOR_BASE,

dulce:6,
acido:0,
salado:0,
amargo:0,
umami:1,
picante:0,

ahumado:0,
graso:1,
fresco:5,
aromatico:4
},

sabores:[
'dulce',
'terroso'
],

texturas:[
'crujiente',
'tierna'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado hasta 3 semanas',

recetasCompatibles:[
'sopa de verduras',
'caldo de pollo',
'arroz primavera',
'zanahoria glaseada'
]

},
{
id:'cebolla_blanca',

nombre:'Cebolla blanca',

aliases:[
'cebolla',
'cebolla blanca',
'cebolla de bola',
'white onion',
'cebolla comun'
],

precioUnitario:30,

unidad:'kg',

precio:{
minimo:20,
promedio:30,
maximo:50,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'bulbos',

basico:true,

tags:[
'economico',
'aromatico',
'base_cocina'
],

cocinas:[
'mexicana',
'francesa',
'italiana',
'internacional'
],

tecnicas:[
'sofreir',
'caramelizar',
'crudo',
'asar'
],

nivel:'basico',

familias:[
'alliums',
'bases_de_sabor',
'aromaticos'
],

usos:[
'salsas',
'guisos',
'caldos',
'sofritos'
],

roles:[
'aroma',
'base',
'sabor',
'umami',

'dulzor_cocinado'
],

combinaCon:[
'ajo',
'tomate',
'carne',
'papa',
'chile',
'huevo',
'pollo',
'frijol',
'pescado',
'queso'
],

sustitutos:[
'cebolla morada',
'poro'
],

sustitutosEconomicos:[
'cebolla deshidratada',

'poro'
],

perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:0,
amargo:1,
umami:3,
picante:3,

ahumado:1,
graso:2,
fresco:5,
aromatico:10
},

sabores:[
'dulce al cocinar',
'picante fresco'
],

texturas:[
'crujiente',
'jugosa'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'salsa mexicana',
'sofrito',
'guisados',
'sopa de cebolla',
'frijoles de olla',
'tacos',
'caldos'
]

},
{
id:'cebolla_morada',

nombre:'Cebolla morada',

aliases:[
'cebolla morada',
'cebolla roja'
],

precioUnitario:40,

unidad:'kg',

precio:{
minimo:25,
promedio:40,
maximo:70,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'bulbos',

basico:true,

tags:[
'economico',
'aromatico',
'fresco',
'salsas'
],

cocinas:[
'mexicana',
'mediterranea',
'peruana',
'internacional'
],

tecnicas:[
'crudo',
'encurtir',
'caramelizar',
'saltear'
],

nivel:'basico',

familias:[
'alliums',
'bases_de_sabor'
],

usos:[
'salsas',
'ensaladas',
'tacos',
'ceviches'
],

roles:[
'aroma',
'acidez',
'color'
],

combinaCon:[
'limon',
'chile',
'tomate',
'aguacate',
'pescado'
],

sustitutos:[
'cebolla blanca'
],

sustitutosEconomicos:[
'cebolla blanca'
],

perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:1,
salado:0,
amargo:1,
umami:3,
picante:4,

ahumado:0,
graso:0,
fresco:8,
aromatico:9
},

sabores:[
'picante',
'dulce',
'fresco'
],

texturas:[
'crujiente',
'jugosa'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'cebolla encurtida',
'ceviche',
'tacos',
'salsa mexicana'
]

},
{
id:'ajo',

nombre:'Ajo',

aliases:[
'ajo fresco',
'diente de ajo',
'ajo blanco',
'garlic'
],

precioUnitario:120,

unidad:'kg',
pesoPorUnidad:8,
precio:{
minimo:80,
promedio:120,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'bulbos',

basico:true,

tags:[
'aromatico',
'base_cocina',
'potenciador'
],

cocinas:[
'mexicana',
'italiana',
'francesa',
'asiatica'
],

tecnicas:[
'sofreir',
'asar',
'machacar',
'freir'
],

nivel:'basico',

familias:[
'alliums',
'aromaticos',
'base_culinaria'
],

usos:[
'salsas',
'guisos',
'marinados',
'caldos'
],

roles:[
'aroma',
'potenciador_sabor',
'umami',
'estructura_sabor'
],

combinaCon:[
'cebolla',
'tomate',
'pollo',
'carne',
'pasta',
'limon',
'chile',
'pescado',
'queso',
'champiñon'
],

sustitutos:[
'ajo en polvo'
],

sustitutosEconomicos:[
'cebolla',
'ajo en polvo'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:2,
umami:5,
picante:5,

ahumado:1,
graso:2,
fresco:5,
aromatico:10
},

sabores:[
'intenso',
'picante',
'aromatico'
],

texturas:[
'fibrosa',
'cremosa al cocinar'
],

temporada:[
'todo el año'
],

conservacion:
'lugar seco y ventilado',

recetasCompatibles:[
'salsa de ajo',
'pasta al ajo',
'marinados',
'guisos',
'salsa roja',
'frijoles',
'pollo al ajillo',
'camarones al ajo'
]

},
{
id:'jitomate',

nombre:'Jitomate',

aliases:[
'tomate rojo',
'tomate',
'jitomate saladet'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:60,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'frutos',

basico:true,

tags:[
'economico',
'base',
'fresco',
'crisis'
],

cocinas:[
'mexicana',
'italiana',
'mundial'
],

tecnicas:[
'crudo',
'salsa',
'asar',
'guisar'
],

nivel:'basico',

familias:[
'solanaceas'
],

usos:[
'salsas',
'sopas',
'guisos',
'ensaladas'
],

roles:[
'acidez',
'umami',
'color'
],

combinaCon:[
'cebolla',
'ajo',
'chile',
'queso',
'pasta'
],

sustitutos:[
'tomate en lata'
],

sustitutosEconomicos:[
'pasta de tomate'
],

perfilSabor:{
...SABOR_BASE,

dulce:5,
acido:6,
salado:0,
amargo:0,
umami:6,
picante:0,

ahumado:2,
graso:0,
fresco:9,
aromatico:7
},

sabores:[
'acido',
'dulce',
'umami'
],

texturas:[
'jugosa',
'carnosa'
],

temporada:[
'verano'
],

conservacion:
'refrigerado o temperatura ambiente según madurez',

recetasCompatibles:[
'salsa roja',
'pico de gallo',
'sopa de tomate',
'pasta italiana'
]

},

{
id:'tomate_verde',

nombre:'Tomate verde',

aliases:[
'tomate verde',
'tomatillo',
'tomate de cascara'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:60,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'frutos',

basico:true,

tags:[
'economico',
'mexicano',
'salsas',
'crisis'
],

cocinas:[
'mexicana'
],

tecnicas:[
'hervir',
'asar',
'moler',
'salsa'
],

nivel:'basico',

familias:[
'solanaceas'
],

usos:[
'salsas',
'guisos',
'moles',
'caldos'
],

roles:[
'acidez',
'frescura',
'base_mexicana'
],

combinaCon:[
'chile',
'cebolla',
'ajo',
'cilantro',
'pollo'
],

sustitutos:[
'jitomate verde enlatado'
],

sustitutosEconomicos:[
'jitomate rojo'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:8,
salado:0,
amargo:1,
umami:4,
picante:0,

ahumado:3,
graso:0,
fresco:9,
aromatico:6
},

sabores:[
'acido',
'fresco',
'herbal'
],

texturas:[
'jugosa',
'ligera'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'salsa verde',
'chilaquiles verdes',
'pollo en salsa verde',
'caldo verde'
]

},
{
id:'pepino',

nombre:'Pepino',

aliases:[
'pepino fresco',
'pepino verde'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:55,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'frutos',

basico:true,

tags:[
'economico',
'fresco',
'ensalada'
],

cocinas:[
'mexicana',
'asiatica',
'mediterranea'
],

tecnicas:[
'crudo',
'encurtir',
'ensalada'
],

nivel:'basico',

familias:[
'cucurbitaceas'
],

usos:[
'ensaladas',
'aguas',
'botanas'
],

roles:[
'frescura',
'hidratacion'
],

combinaCon:[
'limon',
'chile',
'queso',
'jitomate'
],

sustitutos:[
'calabacita'
],

sustitutosEconomicos:[
'jicama'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:1,
umami:0,
picante:0,

ahumado:0,
graso:0,
fresco:10,
aromatico:4
},

sabores:[
'fresco',
'ligero'
],

texturas:[
'crujiente',
'acuosa'
],

temporada:[
'verano'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada de pepino',
'pepinos con chile',
'tzatziki'
]

},
{
id:'lechuga',

nombre:'Lechuga',

aliases:[
'lechuga romana',
'lechuga verde',
'lechuga fresca'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:60,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas',

basico:true,

tags:[
'economico',
'fresco',
'ensalada',
'crisis'
],

cocinas:[
'mexicana',
'americana',
'mediterranea',
'internacional'
],

tecnicas:[
'crudo',
'ensalada'
],

nivel:'basico',

familias:[
'hojas_verdes'
],

usos:[
'ensaladas',
'tacos',
'guarniciones'
],

roles:[
'frescura',
'volumen',
'textura'
],

combinaCon:[
'tomate',
'pepino',
'queso',
'pollo',
'atun'
],

sustitutos:[
'espinaca',
'acelga'
],

sustitutosEconomicos:[
'col'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:2,
umami:1,
picante:0,

ahumado:0,
graso:0,
fresco:10,
aromatico:4
},

sabores:[
'fresco',
'ligeramente vegetal'
],

texturas:[
'crujiente',
'ligera'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada verde',
'tacos de lechuga',
'ensalada con pollo'
]

},
{
id:'brocoli',

nombre:'Brócoli',

aliases:[
'brocoli',
'brócoli fresco'
],

precioUnitario:70,

unidad:'kg',

precio:{
minimo:50,
promedio:70,
maximo:100,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'cruciferas',

basico:true,

tags:[
'nutritivo',
'economico',
'verde'
],

cocinas:[
'mexicana',
'italiana',
'asiatica',
'internacional'
],

tecnicas:[
'vapor',
'saltear',
'hornear',
'gratinado'
],

nivel:'basico',

familias:[
'cruciferas'
],

usos:[
'sopas',
'guarniciones',
'pasta',
'ensaladas'
],

roles:[
'nutricion',
'volumen'
],

combinaCon:[
'queso',
'crema',
'pollo',
'ajo'
],

sustitutos:[
'coliflor'
],

sustitutosEconomicos:[
'calabaza'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:3,
umami:3,
picante:0,

ahumado:2,
graso:1,
fresco:8,
aromatico:5
},

sabores:[
'verde',
'ligeramente amargo'
],

texturas:[
'crujiente',
'tierna'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'brocoli gratinado',
'sopa de verduras',
'brocoli salteado'
]

},
{
id:'espinaca',

nombre:'Espinaca',

aliases:[
'espinaca fresca',
'hoja de espinaca'
],

precioUnitario:80,

unidad:'kg',

precio:{
minimo:50,
promedio:80,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas',

basico:true,

tags:[
'saludable',
'verde',
'nutritivo'
],

cocinas:[
'mexicana',
'italiana',
'internacional'
],

tecnicas:[
'saltear',
'vapor',
'sopa'
],

nivel:'basico',

familias:[
'hojas_verdes'
],

usos:[
'sopas',
'rellenos',
'ensaladas',
'salsas'
],

roles:[
'nutricion',
'color'
],

combinaCon:[
'huevo',
'queso',
'crema',
'pasta'
],

sustitutos:[
'acelga',
'kale'
],

sustitutosEconomicos:[
'quelites'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:3,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:9,
aromatico:5
},

sabores:[
'vegetal',
'ligeramente terroso'
],

texturas:[
'suave',
'tierna'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'crema de espinaca',
'espinaca con huevo',
'pasta con espinaca'
]

},
{
id:'acelga',

nombre:'Acelga',

aliases:[
'acelga fresca',
'hoja de acelga'
],

precioUnitario:50,

unidad:'kg',

precio:{
minimo:30,
promedio:50,
maximo:80,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas',

basico:true,

tags:[
'economico',
'nutritivo',
'verde'
],

cocinas:[
'mexicana',
'italiana',
'internacional'
],

tecnicas:[
'saltear',
'hervir',
'sopa',
'relleno'
],

nivel:'basico',

familias:[
'hojas_verdes'
],

usos:[
'sopas',
'guisos',
'rellenos',
'ensaladas'
],

roles:[
'nutricion',
'volumen',
'color'
],

combinaCon:[
'huevo',
'queso',
'ajo',
'papa'
],

sustitutos:[
'espinaca',
'quelites'
],

sustitutosEconomicos:[
'col'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:3,
umami:2,
picante:0,

ahumado:0,
graso:1,
fresco:8,
aromatico:5
},

sabores:[
'vegetal',
'terroso'
],

texturas:[
'suave',
'fibrosa'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'acelgas con huevo',
'sopa de verduras',
'acelgas gratinadas'
]

},
{
id:'col_verde',

nombre:'Col verde',

aliases:[
'col',
'repollo',
'col blanca'
],

precioUnitario:25,

unidad:'kg',

precio:{
minimo:15,
promedio:25,
maximo:45,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'cruciferas',

basico:true,

tags:[
'economico',
'crisis',
'volumen'
],

cocinas:[
'mexicana',
'asiatica',
'europea',
'internacional'
],

tecnicas:[
'crudo',
'salteado',
'guisado',
'fermentado'
],

nivel:'basico',

familias:[
'cruciferas'
],

usos:[
'ensaladas',
'sopas',
'tacos',
'guisos'
],

roles:[
'volumen',
'textura',
'economia'
],

combinaCon:[
'zanahoria',
'pollo',
'carne',
'vinagre'
],

sustitutos:[
'col morada',
'lechuga'
],

sustitutosEconomicos:[
'acelga'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:2,
umami:2,
picante:0,

ahumado:1,
graso:0,
fresco:7,
aromatico:5
},

sabores:[
'ligeramente dulce',
'vegetal'
],

texturas:[
'crujiente',
'fibrosa'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada de col',
'coleslaw',
'sopa de verduras',
'tacos de col'
]

},
{
id:'col_morada',

nombre:'Col morada',

aliases:[
'repollo morado',
'col roja'
],

precioUnitario:40,

unidad:'kg',

precio:{
minimo:25,
promedio:40,
maximo:70,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'cruciferas',

basico:false,

tags:[
'fresco',
'color',
'ensalada'
],

cocinas:[
'mexicana',
'europea',
'asiatica'
],

tecnicas:[
'crudo',
'encurtir',
'salteado'
],

nivel:'basico',

familias:[
'cruciferas'
],

usos:[
'ensaladas',
'tacos',
'guarniciones'
],

roles:[
'color',
'textura',
'frescura'
],

combinaCon:[
'limon',
'zanahoria',
'pepino',
'pollo'
],

sustitutos:[
'col verde'
],

sustitutosEconomicos:[
'col verde'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:2,
umami:1,
picante:0,

ahumado:0,
graso:0,
fresco:9,
aromatico:6
},

sabores:[
'fresco',
'ligeramente dulce'
],

texturas:[
'crujiente'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada de col morada',
'tacos saludables',
'encurtido'
]

},
{
id:'apio',

nombre:'Apio',

aliases:[
'apio fresco',
'tallo de apio'
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

subcategoria:'tallos',

basico:true,

tags:[
'aromatico',
'caldos',
'fresco'
],

cocinas:[
'mexicana',
'francesa',
'internacional'
],

tecnicas:[
'caldo',
'crudo',
'salteado'
],

nivel:'basico',

familias:[
'aromaticos'
],

usos:[
'caldos',
'sopas',
'ensaladas',
'salsas'
],

roles:[
'aroma',
'frescura',
'base'
],

combinaCon:[
'zanahoria',
'cebolla',
'pollo',
'carne'
],

sustitutos:[
'poro'
],

sustitutosEconomicos:[
'cilantro'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:2,
umami:1,
picante:0,

ahumado:0,
graso:0,
fresco:9,
aromatico:9
},

sabores:[
'fresco',
'herbal'
],

texturas:[
'crujiente',
'fibrosa'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'caldo de pollo',
'sopa de verduras',
'ensalada fresca'
]

},
{
id:'coliflor',

nombre:'Coliflor',

aliases:[
'coliflor fresca',
'coliflor blanca'
],

precioUnitario:60,

unidad:'kg',

precio:{
minimo:40,
promedio:60,
maximo:90,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'cruciferas',

basico:true,

tags:[
'economico',
'vegetal',
'sustituto'
],

cocinas:[
'mexicana',
'europea',
'internacional'
],

tecnicas:[
'hervir',
'hornear',
'gratinado',
'pure'
],

nivel:'basico',

familias:[
'cruciferas'
],

usos:[
'sopas',
'guarniciones',
'sustituto_arroz',
'rellenos'
],

roles:[
'volumen',
'textura',
'sustituto'
],

combinaCon:[
'queso',
'crema',
'ajo',
'pollo'
],

sustitutos:[
'brocoli'
],

sustitutosEconomicos:[
'calabaza'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:2,
umami:2,
picante:0,

ahumado:2,
graso:1,
fresco:7,
aromatico:5
},

sabores:[
'vegetal',
'ligero'
],

texturas:[
'tierna',
'cremosa'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'coliflor gratinada',
'arroz de coliflor',
'sopa cremosa'
]

},
{
id:'calabaza_italiana',

nombre:'Calabacita italiana',

aliases:[
'calabacita',
'calabacita verde',
'calabaza italiana mexicana'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:60,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'cucurbitaceas',

basico:true,

tags:[
'economico',
'ligero',
'crisis'
],

cocinas:[
'mexicana',
'italiana',
'mediterranea'
],

tecnicas:[
'saltear',
'rellenar',
'asar',
'sopa'
],

nivel:'basico',

familias:[
'cucurbitaceas'
],

usos:[
'guisos',
'sopas',
'guarniciones'
],

roles:[
'volumen',
'ligereza'
],

combinaCon:[
'jitomate',
'cebolla',
'queso',
'pollo'
],

sustitutos:[
'berenjena'
],

sustitutosEconomicos:[
'chayote'
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
graso:1,
fresco:8,
aromatico:4
},

sabores:[
'suave',
'ligeramente dulce'
],

texturas:[
'tierna',
'jugosa'
],

temporada:[
'primavera',
'verano'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'calabacitas con queso',
'sopa de verduras',
'guisado mexicano'
]

},

{
id:'pimiento_morron',

nombre:'Pimiento morrón',

aliases:[
'pimiento',
'morron',
'chile morron',
'pimiento dulce'
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

subcategoria:'frutos',

basico:false,

tags:[
'gourmet_accesible',
'color',
'dulce',
'versatil'
],

cocinas:[
'mexicana',
'italiana',
'mediterranea',
'internacional'
],

tecnicas:[
'asar',
'saltear',
'relleno',
'crudo'
],

nivel:'intermedio',

familias:[
'solanaceas'
],

usos:[
'salteados',
'pizzas',
'salsas',
'rellenos',
'ensaladas'
],

roles:[
'color',
'dulzor',
'aroma'
],

combinaCon:[
'cebolla',
'ajo',
'pollo',
'queso',
'arroz'
],

sustitutos:[
'chile poblano',
'chile dulce'
],

sustitutosEconomicos:[
'zanahoria',
'calabacita'
],

perfilSabor:{
...SABOR_BASE,

dulce:6,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:0,

ahumado:4,
graso:1,
fresco:8,
aromatico:6
},

sabores:[
'dulce',
'ligeramente vegetal'
],

texturas:[
'crujiente',
'jugosa'
],

temporada:[
'verano'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'pollo con pimientos',
'arroz con verduras',
'pimientos rellenos',
'salteado oriental'
]

},
{
id:'chile_jalapeno',

nombre:'Chile jalapeño',

aliases:[
'jalapeño',
'chile verde',
'jalapeno fresco'
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

categoria:'verduras',

subcategoria:'chiles',

basico:true,

tags:[
'mexicano',
'economico',
'picoso',
'sabor'
],

cocinas:[
'mexicana',
'tex_mex'
],

tecnicas:[
'asar',
'encurtir',
'salsa',
'relleno'
],

nivel:'basico',

familias:[
'capsicum'
],

usos:[
'salsas',
'tacos',
'guisos',
'escabeches'
],

roles:[
'picante',
'aroma',
'identidad_mexicana'
],

combinaCon:[
'cebolla',
'tomate',
'limon',
'queso',
'pollo'
],

sustitutos:[
'serrano',
'chipotle'
],

sustitutosEconomicos:[
'chile serrano'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:1,
salado:0,
amargo:1,
umami:2,
picante:7,

ahumado:2,
graso:1,
fresco:8,
aromatico:8
},

sabores:[
'picante',
'verde',
'herbal'
],

texturas:[
'crujiente',
'carnosa'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'jalapeños rellenos',
'salsa verde',
'escabeche',
'tacos'
]

},
{
id:'chile_serrano',

nombre:'Chile serrano',

aliases:[
'serrano',
'chile verde serrano'
],

precioUnitario:70,

unidad:'kg',
pesoPorUnidad:12,
precio:{
minimo:50,
promedio:70,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'chiles',

basico:true,

tags:[
'mexicano',
'picante',
'economico'
],

cocinas:[
'mexicana'
],

tecnicas:[
'salsa',
'asar',
'crudo'
],

nivel:'basico',

familias:[
'capsicum'
],

usos:[
'salsas',
'caldos',
'guisos'
],

roles:[
'picante',
'aroma',
'potencia'
],

combinaCon:[
'tomate verde',
'cebolla',
'cilantro',
'limon'
],

sustitutos:[
'jalapeño'
],

sustitutosEconomicos:[
'chile seco'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:1,
salado:0,
amargo:1,
umami:2,
picante:9,

ahumado:1,
graso:0,
fresco:9,
aromatico:8
},

sabores:[
'picante intenso',
'verde'
],

texturas:[
'crujiente'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'salsa verde',
'guacamole',
'guisados mexicanos',
'caldos'
]

},
{
id:'camote',

nombre:'Camote',

aliases:[
'camote amarillo',
'batata'
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

basico:false,

tags:[
'economico',
'dulce',
'energia',
'sustituto'
],

cocinas:[
'mexicana',
'latinoamericana',
'asiatica',
'internacional'
],

tecnicas:[
'hornear',
'hervir',
'pure',
'asar'
],

nivel:'basico',

familias:[
'tuberculos'
],

usos:[
'guarniciones',
'postres',
'sopas',
'pure'
],

roles:[
'dulzor',
'volumen',
'sustituto_papa'
],

combinaCon:[
'canela',
'mantequilla',
'pollo',
'cerdo'
],

sustitutos:[
'papa',
'yuca'
],

sustitutosEconomicos:[
'papa'
],

perfilSabor:{
...SABOR_BASE,

dulce:8,
acido:0,
salado:0,
amargo:0,
umami:2,
picante:0,

ahumado:2,
graso:2,
fresco:2,
aromatico:5
},

sabores:[
'dulce',
'terroso'
],

texturas:[
'cremosa',
'harinosa'
],

temporada:[
'otoño',
'invierno'
],

conservacion:
'lugar fresco y seco',

recetasCompatibles:[
'camote al horno',
'pure de camote',
'sopa de camote'
]

},
{
id:'betabel',

nombre:'Betabel',

aliases:[
'remolacha',
'betabel rojo'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:60,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'raices',

basico:false,

tags:[
'economico',
'color',
'nutritivo'
],

cocinas:[
'mexicana',
'europea',
'mediterranea'
],

tecnicas:[
'hervir',
'hornear',
'ensalada'
],

nivel:'basico',

familias:[
'raices'
],

usos:[
'ensaladas',
'jugos',
'sopas'
],

roles:[
'color',
'dulzor',
'tierra'
],

combinaCon:[
'queso',
'nuez',
'limon',
'zanahoria'
],

sustitutos:[
'zanahoria',
'camote'
],

sustitutosEconomicos:[
'zanahoria'
],

perfilSabor:{
...SABOR_BASE,

dulce:7,
acido:1,
salado:0,
amargo:1,
umami:2,
picante:0,

ahumado:1,
graso:1,
fresco:5,
aromatico:5
},

sabores:[
'dulce',
'terroso'
],

texturas:[
'fibrosa',
'tierna'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada de betabel',
'crema de betabel',
'betabel asado'
]

},
{
id:'rabano',

nombre:'Rábano',

aliases:[
'rabano fresco',
'rabanito'
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

categoria:'verduras',

subcategoria:'raices',

basico:true,

tags:[
'economico',
'fresco',
'picante'
],

cocinas:[
'mexicana',
'asiatica',
'internacional'
],

tecnicas:[
'crudo',
'encurtir',
'ensalada'
],

nivel:'basico',

familias:[
'raices'
],

usos:[
'ensaladas',
'tacos',
'guarniciones'
],

roles:[
'contraste',
'picante',
'frescura'
],

combinaCon:[
'limon',
'chile',
'pepino',
'aguacate'
],

sustitutos:[
'jicama'
],

sustitutosEconomicos:[
'zanahoria'
],

perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:0,
salado:0,
amargo:2,
umami:1,
picante:6,

ahumado:0,
graso:0,
fresco:9,
aromatico:6
},

sabores:[
'picante',
'fresco'
],

texturas:[
'crujiente'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'tacos',
'ensalada mexicana',
'encurtidos'
]

},
{
id:'nabo',

nombre:'Nabo',

aliases:[
'nabo blanco'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:60,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'raices',

basico:false,

tags:[
'economico',
'caldos',
'tradicional'
],

cocinas:[
'francesa',
'mexicana',
'europea'
],

tecnicas:[
'hervir',
'guisar',
'asar'
],

nivel:'basico',

familias:[
'raices'
],

usos:[
'caldos',
'sopas',
'guisos'
],

roles:[
'volumen',
'aroma'
],

combinaCon:[
'zanahoria',
'papa',
'pollo'
],

sustitutos:[
'chayote'
],

sustitutosEconomicos:[
'papa'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:2,
umami:2,
picante:1,

ahumado:1,
graso:1,
fresco:5,
aromatico:5
},

sabores:[
'terroso',
'ligeramente picante'
],

texturas:[
'crujiente',
'tierna'
],

temporada:[
'otoño'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'caldo de verduras',
'sopa campesina'
]

},
{
id:'ejote',

nombre:'Ejote',

aliases:[
'ejotes',
'judia verde',
'vainita'
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

categoria:'verduras',

subcategoria:'vainas',

basico:true,

tags:[
'economico',
'verde',
'crisis'
],

cocinas:[
'mexicana',
'europea',
'internacional'
],

tecnicas:[
'hervir',
'saltear',
'guisar'
],

nivel:'basico',

familias:[
'leguminosas'
],

usos:[
'guisos',
'sopas',
'ensaladas'
],

roles:[
'textura',
'volumen',
'frescura'
],

combinaCon:[
'papa',
'zanahoria',
'tomate',
'huevo'
],

sustitutos:[
'guisante',
'calabacita'
],

sustitutosEconomicos:[
'chayote'
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
aromatico:5
},

sabores:[
'vegetal',
'suave'
],

texturas:[
'crujiente',
'tierna'
],

temporada:[
'primavera',
'verano'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada rusa',
'ejotes con huevo',
'guisado de verduras'
]

},

{
id:'calabaza_castilla',

nombre:'Calabaza de castilla',

aliases:[
'calabaza amarilla',
'calabaza dulce'
],

precioUnitario:30,

unidad:'kg',

precio:{
minimo:20,
promedio:30,
maximo:50,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'cucurbitaceas',

basico:false,

tags:[
'economico',
'dulce',
'temporada'
],

cocinas:[
'mexicana',
'internacional'
],

tecnicas:[
'hornear',
'hervir',
'pure'
],

nivel:'basico',

familias:[
'cucurbitaceas'
],

usos:[
'sopas',
'cremas',
'postres',
'guarniciones'
],

roles:[
'dulzor',
'cremosidad'
],

combinaCon:[
'canela',
'crema',
'mantequilla',
'jengibre'
],

sustitutos:[
'camote'
],

sustitutosEconomicos:[
'zanahoria'
],

perfilSabor:{
...SABOR_BASE,

dulce:8,
acido:0,
salado:0,
amargo:0,
umami:2,
picante:0,

ahumado:1,
graso:2,
fresco:3,
aromatico:5
},

sabores:[
'dulce',
'terroso'
],

texturas:[
'cremosa',
'suave'
],

temporada:[
'otoño'
],

conservacion:
'lugar fresco',

recetasCompatibles:[
'crema de calabaza',
'calabaza al horno',
'postre de calabaza'
]

},
{
id:'nopal',

nombre:'Nopal',

aliases:[
'nopal fresco',
' penca de nopal'
],

precioUnitario:35,

unidad:'kg',

precio:{
minimo:20,
promedio:35,
maximo:60,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'hojas_tallos',

basico:true,

tags:[
'mexicano',
'economico',
'fibra'
],

cocinas:[
'mexicana'
],

tecnicas:[
'asar',
'hervir',
'guisar'
],

nivel:'basico',

familias:[
'cactaceas'
],

usos:[
'ensaladas',
'tacos',
'guisos'
],

roles:[
'volumen',
'frescura'
],

combinaCon:[
'tomate',
'cebolla',
'queso',
'chile'
],

sustitutos:[
'calabacita'
],

sustitutosEconomicos:[
'chayote'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:3,
salado:0,
amargo:2,
umami:2,
picante:0,

ahumado:3,
graso:0,
fresco:8,
aromatico:4
},

sabores:[
'verde',
'ligeramente ácido'
],

texturas:[
'crujiente',
'gelatinosa'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'ensalada de nopales',
'nopales con huevo',
'tacos de nopal'
]

},
{
id:'poro',

nombre:'Poro',

aliases:[
'puerro',
'leek'
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

subcategoria:'bulbos',

basico:false,

tags:[
'aromatico',
'sopas',
'europeo'
],

cocinas:[
'francesa',
'europea',
'internacional'
],

tecnicas:[
'sofreir',
'sopa',
'asar'
],

nivel:'intermedio',

familias:[
'alliums'
],

usos:[
'caldos',
'sopas',
'salsas'
],

roles:[
'aroma',
'base'
],

combinaCon:[
'papa',
'crema',
'pollo',
'queso'
],

sustitutos:[
'cebolla'
],

sustitutosEconomicos:[
'cebolla blanca'
],

perfilSabor:{
...SABOR_BASE,

dulce:4,
acido:0,
salado:0,
amargo:1,
umami:3,
picante:1,

ahumado:1,
graso:1,
fresco:7,
aromatico:8
},

sabores:[
'dulce',
'aromatico'
],

texturas:[
'tierna',
'fibrosa'
],

temporada:[
'otoño',
'invierno'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'sopa de poro y papa',
'caldos',
'salsas'
]

},
{
id:'berenjena',

nombre:'Berenjena',

aliases:[
'berenjena morada',
'eggplant'
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

subcategoria:'frutos',

basico:false,

tags:[
'economico',
'versatil',
'sustituto_carne'
],

cocinas:[
'mexicana',
'italiana',
'mediterranea'
],

tecnicas:[
'asar',
'hornear',
'saltear'
],

nivel:'intermedio',

familias:[
'solanaceas'
],

usos:[
'guisos',
'pastas',
'rellenos'
],

roles:[
'volumen',
'textura'
],

combinaCon:[
'tomate',
'ajo',
'queso',
'aceite de oliva'
],

sustitutos:[
'calabacita'
],

sustitutosEconomicos:[
'chayote'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:2,
umami:3,
picante:0,

ahumado:4,
graso:3,
fresco:4,
aromatico:5
},

sabores:[
'terroso',
'suave'
],

texturas:[
'cremosa',
'carnosa'
],

temporada:[
'verano'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'berenjena rellena',
'parmigiana',
'guisos'
]

},
{
id:'chile_poblano',

nombre:'Chile poblano',

aliases:[
'chile poblano',
'poblano',
'chile_poblano'
],

precioUnitario:70,

unidad:'kg',

precio:{
minimo:40,
promedio:70,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'chiles',

basico:true,

tags:[
'mexicano',
'versatil',
'identidad'
],

cocinas:[
'mexicana'
],

tecnicas:[
'asar',
'rellenar',
'tatemar'
],

nivel:'basico',

familias:[
'capsicum'
],

usos:[
'chiles rellenos',
'salsas',
'guisos'
],

roles:[
'aroma',
'ahumado',
'identidad_mexicana'
],

combinaCon:[
'queso',
'crema',
'jitomate',
'cebolla'
],

sustitutos:[
'pimiento morron',
'jalapeño'
],

sustitutosEconomicos:[
'calabacita'
],

perfilSabor:{
...SABOR_BASE,

dulce:3,
acido:0,
salado:0,
amargo:1,
umami:2,
picante:4,

ahumado:8,
graso:1,
fresco:7,
aromatico:8
},

sabores:[
'ahumado',
'verde',
'ligeramente picante'
],

texturas:[
'carnosa',
'suave'
],

temporada:[
'verano'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'chiles rellenos',
'rajas con crema',
'salsas'
]

},
{
id:'papa_cambray',

nombre:'Papa cambray',

aliases:[
'papa pequeña',
'papa cambray'
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

categoria:'verduras',

subcategoria:'tuberculos',

basico:true,

tags:[
'economico',
'guarnicion',
'crisis'
],

cocinas:[
'mexicana',
'europea',
'internacional'
],

tecnicas:[
'hervir',
'asar',
'saltear',
'hornear'
],

nivel:'basico',

familias:[
'tuberculos'
],

usos:[
'guarniciones',
'botanas',
'guisos'
],

roles:[
'volumen',
'energia'
],

combinaCon:[
'ajo',
'romero',
'pollo',
'carne'
],

sustitutos:[
'papa blanca'
],

sustitutosEconomicos:[
'papa blanca'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:0,
umami:2,
picante:0,

ahumado:2,
graso:2,
fresco:2,
aromatico:3
},

sabores:[
'neutro',
'ligeramente dulce'
],

texturas:[
'cremosa',
'compacta'
],

temporada:[
'todo el año'
],

conservacion:
'lugar fresco y oscuro',

recetasCompatibles:[
'papa cambray al ajo',
'guarnición para carnes',
'papa rostizada'
]

},
{
id:'pepinillo',

nombre:'Pepinillo',

aliases:[
'pepino encurtido',
'gherkin'
],

precioUnitario:70,

unidad:'kg',

precio:{
minimo:40,
promedio:70,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'verduras',

subcategoria:'encurtidos',

basico:false,

tags:[
'acido',
'fresco',
'conserva'
],

cocinas:[
'europea',
'americana',
'internacional'
],

tecnicas:[
'encurtir',
'crudo'
],

nivel:'basico',

familias:[
'cucurbitaceas'
],

usos:[
'botanas',
'hamburguesas',
'ensaladas'
],

roles:[
'acidez',
'contraste'
],

combinaCon:[
'carne',
'queso',
'mostaza'
],

sustitutos:[
'pepino'
],

sustitutosEconomicos:[
'pepino'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:8,
salado:2,
amargo:1,
umami:1,
picante:0,

ahumado:0,
graso:0,
fresco:8,
aromatico:4
},

sabores:[
'acido',
'fresco'
],

texturas:[
'crujiente'
],

temporada:[
'todo el año'
],

conservacion:
'refrigerado',

recetasCompatibles:[
'hamburguesas',
'ensaladas',
'botanas'
]

},
{
id:'cilantro',

nombre:'Cilantro',

aliases:[

'cilantro fresco',

'cilantro',

'cilantro verde',

'coriander',

'coriandro'

],


precioUnitario:80,


unidad:'kg',


precio:{

minimo:50,

promedio:80,

maximo:120,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'condimentos',


subcategoria:'hierbas_aromaticas',


basico:true,


tags:[

'mexicano',

'aromatico',

'fresco',

'economico',

'hierba_fresca'

],


cocinas:[

'mexicana',

'asiatica',

'latinoamericana',

'internacional'

],


tecnicas:[

'crudo',

'picar',

'terminar',

'salsa'

],


nivel:'basico',


familias:[

'hierbas',

'aromaticos',

'condimentos',

'hierbas_frescas'

],


usos:[

'salsas',

'tacos',

'caldos',

'ceviches',

'guisos',

'guacamole'

],


roles:[

'aroma',

'frescura',

'identidad_mexicana',

'color'

],


combinaCon:[

'limon',

'cebolla',

'chile',

'jitomate',

'aguacate',

'pescado',

'pollo',

'frijol',

'tacos'

],


sustitutos:[

'perejil',

'epazote'

],


sustitutosEconomicos:[

'perejil'

],


perfilSabor:{

...SABOR_BASE,

dulce:1,

acido:0,

salado:0,

amargo:2,

umami:1,

picante:0,

ahumado:0,

graso:0,

fresco:10,

aromatico:10

},


sabores:[

'herbal',

'fresco',

'verde'

],


texturas:[

'ligera',

'fibrosa'

],


temporada:[

'todo_el_año'

],


conservacion:

'refrigerado envuelto en papel o recipiente cerrado',


recetasCompatibles:[

'salsa verde',

'pico de gallo',

'guacamole',

'tacos',

'caldo de pollo',

'ceviche',

'pozole',

'quesadillas',

'frijoles'

]

},
{
id:'chepil',

nombre:'Chepil',

aliases:[

'chepil fresco',

'chipilín oaxaqueño',

'hierba de chepil'

],


precioUnitario:80,


unidad:'kg',


precio:{
minimo:50,
promedio:80,
maximo:120,
moneda:'MXN',
actualizado:'2026-08'
},


categoria:'verduras',


subcategoria:'hierbas_aromaticas',


basico:false,


tags:[

'oaxaca',

'tradicional',

'hierba_mesoamericana',

'mexicano'

],


cocinas:[

'mexicana',

'oaxaqueña'

],


tecnicas:[

'mezclar_con_masa',

'cocer_al_vapor',

'cocinar'

],


nivel:'intermedio',


familias:[

'hierbas',

'verduras',

'ingredientes_regionales'

],


usos:[

'tamal_chepil',

'sopas',

'guisos'

],


roles:[

'aroma',

'sabor',

'color',

'frescura'

],


combinaCon:[

'masa_maiz',

'manteca_cerdo',

'caldo_pollo',

'salsa_roja'

],


sustitutos:[

'chipilin'

],


sustitutosEconomicos:[

'espinaca',

'acelga'

],


perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:1,
salado:0,
amargo:1,
umami:2,
picante:0,

ahumado:0,
graso:0,
fresco:5,
aromatico:5
},


sabores:[

'herbal',

'fresco',

'ligeramente_terroso'

],


texturas:[

'suave',

'fibrosa'

],


temporada:[

'primavera',

'verano'

],


conservacion:

'refrigerado_envuelto_o_en_recipiente_cerrado',


recetasCompatibles:[

'tamal_chepil_oaxaqueno',

'sopas_tradicionales'

]

},
{
id:'platano_macho',

nombre:'Plátano macho',

aliases:[
'plátano macho',
'platano macho',
'plátano para freír',
'platano para freir',
'plátano verde macho',
'plátano maduro macho'
],


precioUnitario:32,


unidad:'kg',


precio:{

minimo:22,

promedio:32,

maximo:45,

moneda:'MXN',

actualizado:'2026-08'

},


categoria:'frutas',


subcategoria:'platanos',


basico:false,


tags:[

'platano',

'fruta',

'tropical',

'mexicano',

'chiapas',

'dulce',

'almidon'

],


cocinas:[

'mexicana',

'chiapaneca',

'tropical',

'latinoamericana'

],


tecnicas:[

'freir',

'asar',

'hervir',

'hornear',

'guisar'

],


nivel:'basico',


familias:[

'frutas',

'platanos',

'frutas_tropicales'

],


usos:[

'tamales',

'guarniciones',

'rellenos',

'frituras',

'postres',

'guisos'

],


roles:[

'dulzor',

'almidon',

'relleno',

'guarnicion',

'textura'

],


combinaCon:[

'carne_cerdo',

'masa_maiz',

'canela',

'almendra',

'pasas',

'queso_fresco'

],


sustitutos:[

'platano'
],


sustitutosEconomicos:[

'platano'
],


perfilSabor:{

...SABOR_BASE,

dulce:6,

acido:0,

salado:0,

amargo:0,

umami:1,

picante:0,

ahumado:0,

graso:0,

fresco:2,

aromatico:4

},


sabores:[

'dulce',

'frutal',

'almidonado',

'tropical'

],


texturas:[

'firme_verde',

'suave_maduro',

'cremosa_cocida'

],


temporada:[

'todo_el_año'

],


conservacion:

'temperatura_ambiente_hasta_madurar',


recetasCompatibles:[

'tamal-cambray-chiapaneco'

]

},
];