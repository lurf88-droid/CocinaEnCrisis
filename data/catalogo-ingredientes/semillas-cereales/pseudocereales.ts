import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const PSEUDOCEREALES: IngredienteCatalogo[] = [




{
id:'quinoa',

nombre:'Quinoa',

aliases:[
'quinua',
'quinoa blanca',
'quinoa roja'
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

categoria:'proteinas_vegetales',

subcategoria:'pseudocereales',

basico:false,

tags:[
'alta_proteina',
'saludable',
'sin_gluten',
'versatil'
],

cocinas:[
'andina',
'internacional',
'moderna'
],

tecnicas:[
'hervir',
'cocer',
'ensalada'
],

nivel:'basico',

familias:[
'pseudocereales',
'semillas',
'proteinas_vegetales'
],

usos:[
'ensaladas',
'bowls',
'guarniciones',
'desayunos'
],

roles:[
'energia',
'proteina',
'fibra',
'volumen'
],

combinaCon:[
'vegetales',
'pollo',
'garbanzo',
'frutas',
'nueces'
],

sustitutos:[
'arroz',
'amaranto',
'cuscus'
],

sustitutosEconomicos:[
'arroz',
'lenteja'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:1,
umami:4,
picante:0,

ahumado:0,
graso:2,
fresco:4,
aromatico:2
},

sabores:[
'nuez',
'suave',
'terroso'
],

texturas:[
'suelta',
'ligera'
],

temporada:[
'todo_el_año'
],

conservacion:
'lugar_seco_y_cerrado',

recetasCompatibles:[
'bowl de quinoa',
'ensalada de quinoa',
'quinoa con verduras'
]

},
{
id:'amaranto',

nombre:'Amaranto',

aliases:[
'amaranto en grano',
'alegria'
],

precioUnitario:100,

unidad:'kg',

precio:{
minimo:70,
promedio:100,
maximo:180,
moneda:'MXN',
actualizado:'2026-08'
},

categoria:'proteinas_vegetales',

subcategoria:'pseudocereales',

basico:true,

tags:[
'mexicano',
'economico',
'nutritivo'
],

cocinas:[
'mexicana',
'internacional'
],

tecnicas:[
'tostar',
'cocer'
],

nivel:'basico',

familias:[
'pseudocereales',
'semillas'
],

usos:[
'barritas',
'atoles',
'desayunos',
'panaderia'
],

roles:[
'energia',
'fibra',
'textura'
],

combinaCon:[
'miel',
'frutas',
'chocolate',
'avena'
],

sustitutos:[
'quinoa',
'avena'
],

sustitutosEconomicos:[
'arroz'
],

perfilSabor:{
...SABOR_BASE,

dulce:2,
acido:0,
salado:0,
amargo:0,
umami:3,
picante:0,

ahumado:1,
graso:2,
fresco:3,
aromatico:3
},

sabores:[
'nuez',
'ligero'
],

texturas:[
'crujiente',
'ligera'
],

temporada:[
'todo_el_año'
],

conservacion:
'lugar_seco_y_cerrado',

recetasCompatibles:[
'alegrias de amaranto',
'granola',
'atoles'
]

},
];