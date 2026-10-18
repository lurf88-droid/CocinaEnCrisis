import type { Receta } from '@/types/receta';
export const PAPAS_HUEVO: Receta = {
  
     
  id: 'papas-huevo',
  titulo: 'Papas con huevo',
  imagen: require('../../assets/images/recetas/papas-huevo.webp'),
  descripcion:
    'Desayuno o comida económica, rendidora y muy fácil. Ideal cuando tienes ingredientes básicos y quieres algo llenador.',

  categoria: 'desayuno',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 20,
  dificultad: 'facil',

  ingredientes: [
    { id: 'papa', cantidad: 0.35, unidad: 'kg' },
    { id: 'huevo', cantidad: 3, unidad: 'pieza' },
    { id:'cebolla_blanca', cantidad: 0.04, unidad: 'kg' },
    { id:'aceite_vegetal', cantidad: 0.025, unidad: 'litro' },
  {
id:'sal',
cantidad:0.005,
unidad:'kg'
}
  ],

pasos: [

{
  numero:1,

  titulo:'Prepara las papas',

  descripcion:
  'Pela las papas y córtalas en cubos pequeños del mismo tamaño para que se cocinen de manera uniforme.',

  tiempo:'5 minutos',

  consejo:
  'No busques velocidad. Un buen corte mejora toda la receta.',

  porQue:
  'Cuando los cubos tienen tamaños similares, todas las papas llegan al punto correcto al mismo tiempo.',

  mensajeChef:
  'Una receta económica también puede tener técnica. Todo empieza con la preparación.',

  objetivo:
  'Crear piezas uniformes para una cocción pareja.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué es importante cortar las papas del mismo tamaño?',

  respuestaEsperada:
  'Porque así se cocinan al mismo tiempo y evitamos tener papas crudas y otras demasiado suaves.',

  señalCorrecta:
  'Las papas tienen tamaños parecidos y están listas para cocinar.',

  errorEvitar:
  'Hacer cubos muy diferentes porque unas papas se cocinarán antes que otras.'
},


{
  numero:2,

  titulo:'Lava las papas',

  descripcion:
  'Enjuaga las papas con agua para retirar parte del exceso de almidón.',

  tiempo:'1 minuto',

  consejo:
  'Después de lavarlas puedes secarlas ligeramente para evitar salpicaduras con el aceite.',

  porQue:
  'Reducir el exceso de almidón ayuda a mejorar la textura durante la cocción.',

  mensajeChef:
  'Los pequeños detalles antes del fuego también cuentan.',

  señalCorrecta:
  'Las papas están limpias y listas para entrar al sartén.',

  errorEvitar:
  'Agregar papas mojadas al aceite caliente.'
},


{
  numero:3,

  titulo:'Cocina las papas',

  descripcion:
  'Calienta el aceite en un sartén grande a fuego medio. Agrega las papas y cocina durante 10 a 12 minutos moviendo ocasionalmente.',

  tiempo:'12 minutos',

  consejo:
  'Mueve las papas de vez en cuando para lograr una cocción uniforme.',

  porQue:
  'La papa necesita tiempo para suavizarse por dentro antes de agregar el huevo.',

  mensajeChef:
  'Aquí la paciencia hace la diferencia entre una papa dura y una papa perfecta.',

  objetivo:
  'Lograr papas suaves por dentro y ligeramente doradas por fuera.',

  nivelImportancia:
  'critico',

  chefPregunta:
  '¿Por qué no debemos usar fuego demasiado alto desde el inicio?',

  respuestaEsperada:
  'Porque las papas pueden dorarse por fuera mientras siguen crudas por dentro.',

  señalCorrecta:
  'Las papas empiezan a suavizarse y tienen un ligero color dorado.',

  errorEvitar:
  'Cocinar con fuego alto intentando acelerar el proceso.'
},


{
  numero:4,

  titulo:'Agrega la cebolla',

  descripcion:
  'Añade la cebolla picada y continúa cocinando hasta que las papas estén suaves y la cebolla aporte aroma.',

  tiempo:'3 minutos',

  consejo:
  'La cebolla no necesita quemarse; solo debe volverse suave y aromática.',

  porQue:
  'La cebolla aporta dulzor y profundidad de sabor al platillo.',

  mensajeChef:
  'Los ingredientes sencillos se complementan cuando respetamos sus tiempos.',

  señalCorrecta:
  'La cebolla está suave y tiene aroma agradable.',

  errorEvitar:
  'Agregar la cebolla demasiado pronto porque puede quemarse antes de que la papa esté lista.'
},


{
  numero:5,

  titulo:'Prepara los huevos',

  descripcion:
  'En un recipiente aparte bate los huevos con una pizca de sal.',

  tiempo:'2 minutos',

  consejo:
  'Solo mezcla clara y yema; no es necesario batir demasiado.',

  porQue:
  'Un batido ligero ayuda a conseguir una textura más uniforme.',

  mensajeChef:
  'Hasta los pasos pequeños tienen una razón.',

  señalCorrecta:
  'El huevo tiene un color uniforme.',

  errorEvitar:
  'Agregar el huevo sin mezclar porque la cocción será menos pareja.'
},


{
  numero:6,

  titulo:'Integra el huevo con las papas',

  descripcion:
  'Baja un poco el fuego y vierte los huevos sobre las papas. Revuelve suavemente hasta integrar.',

  tiempo:'3 minutos',

  consejo:
  'Mueve constantemente pero evita aplastar las papas.',

  porQue:
  'El fuego moderado permite que el huevo quede suave y no seco.',

  mensajeChef:
  'Este es el momento donde todos los ingredientes se convierten en un solo platillo.',

  objetivo:
  'Conseguir un huevo cocido pero con textura suave.',

  nivelImportancia:
  'clave',

  señalCorrecta:
  'El huevo está cocido y todavía conserva humedad.',

  errorEvitar:
  'Cocinar demasiado porque el huevo pierde textura.'
},


{
  numero:7,

  titulo:'Reposo y servicio',

  descripcion:
  'Apaga el fuego y deja reposar un minuto antes de servir.',

  tiempo:'1 minuto',

  consejo:
  'El reposo permite que los sabores terminen de integrarse.',

  porQue:
  'Un pequeño descanso mejora la experiencia final del platillo.',

  mensajeChef:
  'Felicidades. Convertiste ingredientes básicos en una comida completa y económica.',

  señalCorrecta:
  'Las papas están suaves, el huevo cocido y el plato listo para disfrutar.',

  errorEvitar:
  'Servir inmediatamente sin revisar la textura final.'
}

],

  tip:
    'Tapa el sartén mientras cocinas las papas para acelerar la cocción sin usar tanto aceite.',
   

  tags: [
    "barata",
    "llenadora",
    "pocos ingredientes",
  ],

  tipoComida: "familia",

  popularidad: 95,

  ahorro:
    'Las papas son uno de los ingredientes más económicos y rendidores, ideales para estirar el presupuesto semanal.',

  errorComun:
    'Subir demasiado el fuego al final, lo que seca el huevo o quema las papas por fuera sin cocerlas por dentro.',
    
};