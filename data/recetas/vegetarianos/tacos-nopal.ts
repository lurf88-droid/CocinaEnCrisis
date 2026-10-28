import type { Receta } from '@/types/receta';

export const TACOS_NOPAL: Receta = {
  id: 'tacos-nopal',
  titulo: 'Tacos de nopal con queso',
  imagen: require('../../../assets/images/recetas/vegetarianos/tacos-nopal.webp'),
  descripcion: 'Un clásico de las fondas mexicanas. Aprende a asar los nopales para quitarles la baba y lograr un sabor ahumado y textura firme.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'asado en comal y desbabado',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 3,
  tiempoMinutos: 20,
  dificultad: 'facil',
  nivelChef: 1,
  aprendizajes: ['asado de nopal', 'control de baba', 'ensamblaje de tacos'],
  ingredientes: [
    { id: 'nopal', cantidad: 0.400, unidad: 'kg' },
    { id: 'tortilla_maiz', cantidad: 0.300, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.150, unidad: 'kg' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'cilantro', cantidad: 0.020, unidad: 'kg' },
  
{ id: 'salsa_verde', cantidad: 0.100, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara el nopal',
      descripcion: 'Limpia los nopales (quita espinas). Córtalos en tiras. Calienta un comal o sartén con un poco de aceite.',
      tiempo: '5 minutos',
      consejo: 'Si tienen mucha baba, enjuágalos rápido con agua caliente antes de asar.',
    },
    {
      numero: 2,
      titulo: 'Asa los nopales',
      descripcion: 'Pon los nopales en el comal caliente. Cocina hasta que suelten la baba y esta se seque, luego se doren un poco.',
      tiempo: '8 minutos',
      porQue: 'El calor intenso desnaturaliza la baba y le da un toque ahumado al nopal.',
      mensajeChef: 'La baba desaparecerá si tienes paciencia en el fuego.',
      nivelImportancia: 'critico',
      señalCorrecta: 'Nopales suaves y ligeramente dorados.',
    },
    {
      numero: 3,
      titulo: 'Calienta las tortillas',
      descripcion: 'Calienta las tortillas de maíz en el comal.',
      tiempo: '2 minutos',
    },
    {
      numero: 4,
      titulo: 'Arma los tacos',
      descripcion: 'Pon los nopales en la tortilla, agrega queso fresco desmoronado, cebolla picada y cilantro. Baña con salsa verde.',
      tiempo: '3 minutos',
      chefPregunta: '¿Por qué el nopal es tan mexicano?',
      respuestaEsperada: 'Porque es una planta endémica de México y fue fundamental en la dieta prehispánica.',
      señalCorrecta: 'Tacos coloridos con salsa verde.',
    }
  ],
  tip: 'Puedes asar los nopales con un poco de sal para que suelten la baba más rápido.',
  ahorro: 'El nopal es uno de los ingredientes más baratos del mercado.',
  errorComun: 'No asar bien los nopales y que los tacos queden babosos.',
  popularidad: 90,
  tags: ['vegetariano', 'mexicano', 'tacos', 'nopal'],
  tipoComida: 'barata',
  historiaChef: 'El nopal ha sido alimento de los mexicanos por miles de años, desde los aztecas hasta los tacos callejeros de hoy.',
  trucoChef: 'Si tienes un comal de barro, el sabor será aún más auténtico.',
  sustituciones: [
    { falta: 'queso_fresco', reemplazo: 'queso panela' }
  ],
  chefInicio: 'Hoy vamos a cocinar un icono de México. El nopal es versátil y delicioso.',
  chefFinal: '¡Excelente! Unos tacos con sabor de fonda, sin baba y llenos de tradición.',
  señalesExito: {
    vista: 'Nopales verdes con queso blanco y tortillas tostadas.',
    olor: 'Aroma a nopal asado y salsa verde.',
    textura: 'Nopales firmes y queso fresco.',
  },
  rescates: [
    { problema: 'Los nopales siguen babeando', solucion: 'Déjalos un rato más en el comal a fuego alto para que la baba se evapore.' }
  ]
};