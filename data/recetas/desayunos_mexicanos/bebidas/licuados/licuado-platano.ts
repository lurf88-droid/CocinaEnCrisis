import type { Receta } from '@/types/receta';
export const LICUADO_PLATANO : Receta = {
     
  id: 'licuado-platano',
  titulo: 'Licuado de plátano con leche',
imagen: require(
'../../../../../assets/images/recetas/desayunos_mexicanos/bebidas/licuados/licuado-platano.webp'
),
  descripcion:
    'Desayuno dulce, rápido y económico. Ideal cuando no quieres cocinar y necesitas algo nutritivo en minutos.',

  categoria: 'desayuno',
  rolCulinario: 'bebida',
  porciones: 1,
  tiempoMinutos: 5,
  dificultad: 'facil',

  ingredientes: [
    { id: 'platano', cantidad: 0.15, unidad: 'kg' },
    { id:'leche_entera', cantidad: 0.25, unidad: 'litro' },
  ],

 pasos: [

{
numero:1,

titulo:'Prepara el plátano',

descripcion:
'Pela el plátano y córtalo en 2 o 3 trozos para facilitar el licuado.',

tiempo:'1 minuto',

consejo:
'Usar plátano maduro dará más dulzor y mejor textura.',

porQue:
'Cortar el ingrediente ayuda a que la licuadora trabaje mejor.',

mensajeChef:
'Incluso una receta rápida tiene pequeños detalles que mejoran el resultado.',

señalCorrecta:
'El plátano está listo y sin cáscara.',

errorEvitar:
'Licuar el plátano completo porque puede dificultar el proceso.'
},


{
numero:2,

titulo:'Agrega los ingredientes',

descripcion:
'Coloca el plátano dentro de la licuadora y agrega la leche fría.',

tiempo:'1 minuto',

consejo:
'La cantidad de leche puede ajustarse según la textura que prefieras.',

porQue:
'La proporción entre fruta y líquido define la consistencia final.',

mensajeChef:
'La cocina también es aprender a ajustar.',

objetivo:
'Crear una mezcla equilibrada entre sabor y textura.',

nivelImportancia:
'clave',

chefPregunta:
'¿Qué pasa si agregamos demasiada leche?',

respuestaEsperada:
'El licuado tendrá menos sabor a plátano y quedará más líquido.',

señalCorrecta:
'La mezcla tiene una proporción equilibrada.',

errorEvitar:
'Agregar toda la leche sin considerar la textura deseada.'
},


{
numero:3,

titulo:'Licúa hasta obtener textura suave',

descripcion:
'Licúa durante 20 a 40 segundos hasta obtener una mezcla cremosa y sin grumos.',

tiempo:'40 segundos',

consejo:
'Detén la licuadora y revisa la textura antes de continuar.',

porQue:
'El tiempo correcto de licuado permite una bebida más agradable.',

mensajeChef:
'La textura también es parte del sabor.',

señalCorrecta:
'El licuado se ve uniforme y cremoso.',

errorEvitar:
'Licuar demasiado tiempo sin necesidad.'
},


{
numero:4,

titulo:'Ajusta la consistencia',

descripcion:
'Si quieres un licuado más ligero agrega un poco más de leche y vuelve a licuar unos segundos.',

tiempo:'1 minuto',

consejo:
'Los mejores cocineros adaptan las recetas a sus gustos.',

porQue:
'No todos disfrutan la misma textura.',

mensajeChef:
'Una receta es una guía, no una regla imposible de cambiar.',

señalCorrecta:
'Tiene la consistencia que deseas antes de servir.',

errorEvitar:
'Agregar demasiado líquido de golpe.'
},


{
numero:5,

titulo:'Sirve y disfruta',

descripcion:
'Sirve inmediatamente para aprovechar la textura fresca y cremosa.',

tiempo:'1 minuto',

consejo:
'Puedes agregar avena o miel para cambiar la receta.',

porQue:
'Servir recién preparado conserva mejor sabor y textura.',

mensajeChef:
'Excelente trabajo. Una receta sencilla también puede alimentar buenos momentos.',

señalCorrecta:
'El licuado está frío, cremoso y listo para disfrutar.',

errorEvitar:
'Dejarlo mucho tiempo preparado porque puede cambiar su textura.'
}

],
  tip:
    'Si quieres más energía, puedes agregar avena o una cucharadita de miel.',
};