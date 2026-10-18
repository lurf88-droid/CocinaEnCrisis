import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ESPECIAS_MEXICANAS: IngredienteCatalogo[] = [



{
id:'achiote',


nombre:'Achiote',


aliases:[
'pasta de achiote',
'achiote mexicano',
'condimento achiote'
],



precioUnitario:150,



unidad:'kg',



precio:{
minimo:90,
promedio:150,
maximo:260,
moneda:'MXN',
actualizado:'2026-08'
},



categoria:'condimentos',



subcategoria:'mexicanos',



basico:true,



tags:[
'yucateco',
'adobo',
'especia',
'aromatico'
],



cocinas:[
'mexicana',
'yucateca'
],



tecnicas:[
'macerar',
'adobar',
'moler',
'mezclar'
],



nivel:'basico',



familias:[
'condimentos',
'especias',
'mexicanos'
],



usos:[
'cochinita_pibil',
'adobos',
'marinados',
'salsas'
],



roles:[
'sabor',
'color',
'aroma'
],



combinaCon:[
'cerdo',
'pollo',
'naranja',
'ajo',
'vinagre',
'chile'
],



sustitutos:[
'paprika',
'colorante_achiote'
],



sustitutosEconomicos:[
'chile_guajillo',
'paprika'
],



perfilSabor:{
...SABOR_BASE,

dulce:1,
acido:1,
salado:0,
amargo:1,
umami:3,
picante:1,

ahumado:1,
graso:0,
fresco:1,
aromatico:8
},



sabores:[
'tierra',
'aromatico',
'ligeramente_amargo'
],



texturas:[
'pasta',
'polvo'
],



temporada:[
'todo_el_año'
],



conservacion:
'lugar_seco_y_cerrado',



recetasCompatibles:[
'cochinita pibil',
'pollo al achiote',
'adobo yucateco',
'marinados'
]

},
];