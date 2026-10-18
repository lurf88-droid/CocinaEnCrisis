import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const VINOS: IngredienteCatalogo[] = [

    {
    id: 'agua',
    nombre: 'Agua',
    aliases: ['agua potable', 'agua natural', 'agua purificada', 'agua de la llave', 'agua simple'],
    precioUnitario: 0.01, // 👈 Le ponemos un valor mínimo para que pase la validación
    unidad: 'litro',
    categoria: 'bebidas',
    subcategoria: 'agua',
    basico: true,
    tags: ['bebida', 'asumible', 'gratis'],
    cocinas: ['mexicana', 'internacional'],
    tecnicas: ['hervir', 'infusionar', 'mezclar'],
    nivel: 'basico',
    familias: ['bebidas'],
    usos: ['cocinar', 'beber', 'infusiones'],
    roles: ['base', 'hidratacion'],
    perfilSabor: {
      ...SABOR_BASE,
      dulce: 0,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,
      ahumado: 0,
      graso: 0,
      fresco: 10,
      aromatico: 0,
    },
    conservacion: 'ambiente',
  },
{
 id:'vino_tinto',

 nombre:'Vino tinto',

 aliases:[
  'vino tinto',
  'vino rojo'
 ],

 precioUnitario:220,

 unidad:'botella',

 categoria:'bebidas',

 subcategoria:'cocina',

 tags:[
  'carnes',
  'salsas'
 ],

 cocinas:[
  'francesa',
  'italiana'
 ],

 tecnicas:[
  'reduccion',
  'marinado'
 ],

 nivel:'chef',

 perfilSabor:{
  ...SABOR_BASE,

  dulce:3,
  acido:6,
  salado:0,
  amargo:4,
  umami:2,
  picante:0,

  ahumado:2,
  graso:0,
  fresco:3,
  aromatico:8
 }

},

{
 id:'vino_blanco',

 nombre:'Vino blanco',

 aliases:[
  'vino blanco',
 ],

 precioUnitario:180,

 unidad:'botella',

 categoria:'bebidas',

 subcategoria:'cocina',

 tags:[
  'chef',
  'francesa',
  'italiana'
 ],

 cocinas:[
  'francesa',
  'italiana',
  'mediterranea'
 ],

 tecnicas:[
  'reduccion',
  'salsa'
 ],

 nivel:'chef',

 perfilSabor:{
  ...SABOR_BASE,

  dulce:3,
  acido:7,
  salado:0,
  amargo:2,
  umami:1,
  picante:0,

  ahumado:0,
  graso:0,
  fresco:6,
  aromatico:8
 }

},

// ====================================================
// 🍷 VINO ROSADO
// ====================================================

{
 id:'vino_rosado',

 nombre:'Vino rosado',

 aliases:[
  'vino rosado',
  'rose',
  'rosé'
 ],

 precioUnitario:190,

 unidad:'botella',

 categoria:'bebidas',

 subcategoria:'cocina',

 tags:[
  'salsas',
  'mariscos',
  'ligero'
 ],

 cocinas:[
  'francesa',
  'mediterranea',
  'internacional'
 ],

 tecnicas:[
  'reduccion',
  'marinado',
  'salsa'
 ],

 nivel:'intermedio',

 perfilSabor:{
  ...SABOR_BASE,

  dulce:4,
  acido:6,
  salado:0,
  amargo:1,
  umami:1,
  picante:0,

  ahumado:0,
  graso:0,
  fresco:7,
  aromatico:7
 }

},

// ====================================================
// 🥂 VINO ESPUMOSO SECO
// ====================================================

{
 id:'vino_espumoso_seco',

 nombre:'Vino espumoso seco',

 aliases:[
  'vino espumoso',
  'espumoso seco',
  'vino blanco espumoso'
 ],

 precioUnitario:250,

 unidad:'botella',

 categoria:'bebidas',

 subcategoria:'cocina',

 tags:[
  'gourmet',
  'salsas',
  'mariscos'
 ],

 cocinas:[
  'francesa',
  'italiana',
  'internacional'
 ],

 tecnicas:[
  'reduccion',
  'salsa',
  'desglasar'
 ],

 nivel:'chef',

 perfilSabor:{
  ...SABOR_BASE,

  dulce:2,
  acido:8,
  salado:0,
  amargo:1,
  umami:1,
  picante:0,

  ahumado:0,
  graso:0,
  fresco:9,
  aromatico:7
 }

},

// ====================================================
// 🍷 JEREZ SECO
// ====================================================

{
 id:'jerez_seco',

 nombre:'Jerez seco',

 aliases:[
  'jerez',
  'sherry',
  'dry sherry'
 ],

 precioUnitario:280,

 unidad:'botella',

 categoria:'bebidas',

 subcategoria:'cocina',

 tags:[
  'salsas',
  'gourmet',
  'aromatico'
 ],

 cocinas:[
  'española',
  'francesa',
  'internacional'
 ],

 tecnicas:[
  'reduccion',
  'desglasar',
  'salsa'
 ],

 nivel:'chef',

 perfilSabor:{
  ...SABOR_BASE,

  dulce:2,
  acido:5,
  salado:1,
  amargo:3,
  umami:3,
  picante:0,

  ahumado:2,
  graso:0,
  fresco:2,
  aromatico:9
 }

},

// ====================================================
// 🍷 MARSALA
// ====================================================

{
 id:'marsala',

 nombre:'Vino Marsala',

 aliases:[
  'marsala',
  'vino marsala'
 ],

 precioUnitario:320,

 unidad:'botella',

 categoria:'bebidas',

 subcategoria:'cocina',

 tags:[
  'italiano',
  'salsas',
  'gourmet'
 ],

 cocinas:[
  'italiana',
  'internacional'
 ],

 tecnicas:[
  'reduccion',
  'salsa',
  'desglasar'
 ],

 nivel:'chef',

 perfilSabor:{
  ...SABOR_BASE,

  dulce:7,
  acido:4,
  salado:0,
  amargo:2,
  umami:2,
  picante:0,

  ahumado:2,
  graso:0,
  fresco:2,
  aromatico:9
 }

},

// ====================================================
// 🍸 VERMUT SECO
// ====================================================

{
 id:'vermut_seco',

 nombre:'Vermut seco',

 aliases:[
  'vermut seco',
  'vermuth seco',
  'dry vermouth'
 ],

 precioUnitario:260,

 unidad:'botella',

 categoria:'bebidas',

 subcategoria:'cocina',

 tags:[
  'aromatico',
  'salsas',
  'gourmet'
 ],

 cocinas:[
  'francesa',
  'italiana',
  'internacional'
 ],

 tecnicas:[
  'reduccion',
  'desglasar',
  'salsa'
 ],

 nivel:'chef',

 perfilSabor:{
  ...SABOR_BASE,

  dulce:2,
  acido:5,
  salado:0,
  amargo:5,
  umami:1,
  picante:0,

  ahumado:0,
  graso:0,
  fresco:5,
  aromatico:10
 }

},

];