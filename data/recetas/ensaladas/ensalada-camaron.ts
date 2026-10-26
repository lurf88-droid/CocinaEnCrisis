import type { Receta } from '@/types/receta';

export const ENSALADA_CAMARON: Receta = {
  id: 'ensalada-camaron',
  titulo: 'Ensalada Premium de camarón al ajillo',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-camaron'), 
  descripcion: 'Elegancia en un plato. El camarón sellado en mantequilla y ajo se combina con la frescura de las hojas verdes. Una ensalada que te enseña el control exacto de la temperatura para no sobrecocer el marisco.',
  
  cocina: 'mediterranea',
  tecnicaPrincipal: 'sellado de mariscos y aderezo cítrico',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 20,
  dificultad: 'media',
  nivelChef: 3,

  aprendizajes: [
    'limpieza de camarón',
    'sellado rápido a fuego alto',
    'equilibrio de sabores con ajo y limón'
  ],

  ingredientes: [
    { id: 'camaron', cantidad: 0.250, unidad: 'kg' },
    { id: 'lechuga', cantidad: 0.200, unidad: 'kg' },
    { id: 'jitomate', cantidad: 1, unidad: 'pieza' },
    { id: 'aguacate', cantidad: 1, unidad: 'pieza' },
    { id: 'ajo', cantidad: 2, unidad: 'pieza' },
    { id: 'mantequilla', cantidad: 0.030, unidad: 'kg' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Prepara el camarón',
      descripcion: 'Limpia los camarones (retira la vena y la cáscara si la tienen). Sécalos muy bien con papel absorbente y sazona con sal.',
      tiempo: '5 minutos',
      consejo: 'El camarón debe estar completamente seco para que se selle y no se cueza al vapor.',
      porQue: 'La humedad baja la temperatura del sartén y evita que se dore.',
      mensajeChef: 'El secreto de un buen camarón es el sellado rápido.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'El salteado mágico',
      descripcion: 'Calienta el aceite y la mantequilla en un sartén a fuego alto. Agrega el ajo picado y luego los camarones. Cocina 2 minutos por lado hasta que estén rosados.',
      tiempo: '4 minutos',
      porQue: 'La mantequilla da sabor y el fuego alto crea una costra dorada en el camarón.',
      chefPregunta: '¿Por qué el camarón se pone duro y chicloso?',
      respuestaEsperada: 'Porque se sobrecuece. Las proteínas se contraen demasiado y expulsan toda el agua.',
      señalCorrecta: 'Camarones en forma de "C" y color rosado opaco.',
    },
    {
      numero: 3,
      titulo: 'Arma la base',
      descripcion: 'Lava y desinfecta la lechuga. Corta el jitomate y el aguacate en láminas. Colócalos en un plato.',
      tiempo: '4 minutos',
    },
    {
      numero: 4,
      titulo: 'Adereza y sirve',
      descripcion: 'Coloca los camarones calientes sobre la cama de lechuga. Baña con el jugo de limón y un chorrito del aceite del sartén (con cuidado de no bañar el aguacate con aceite hirviendo).',
      tiempo: '2 minutos',
      mensajeChef: 'El contraste de temperatura entre el camarón caliente y la lechuga fría es de restaurante.',
    }
  ],

  tip: 'Si tienes un toque de chile en polvo o pimienta, espolvorea sobre los camarones al final.',
  ahorro: 'El camarón congelado es más barato que el fresco y, bien sellado, sabe igual de rico.',
  errorComun: 'Cocer demasiado el camarón. En cuanto se vea rosado, sácalo del fuego.',
  popularidad: 92,
  tags: ['ensalada', 'premium', 'camaron', 'gourmet', 'cena'],
  tipoComida: 'familia',
  historiaChef: 'Esta ensalada es una mezcla de la cocina mediterránea y la mexicana, donde el camarón al ajillo (al mojo de ajo) es un clásico indiscutible.',
  trucoChef: 'Exprimir el limón sobre los camarones justo cuando salen del fuego hace que el aroma cítrico se impregne perfectamente.',
  sustituciones: [
    { falta: 'camaron', reemplazo: 'pulpo cocido o pechuga de pollo en tiras' }
  ],
  chefInicio: 'Hoy vamos a cocinar con mariscos. El truco está en no tenerles miedo al fuego alto.',
  chefFinal: '¡Wow! Has logrado un sellado perfecto. Esta es una ensalada de nivel restaurante.',
  señalesExito: {
    vista: 'Camarones rosados y brillantes sobre hojas verdes con aguacate.',
    olor: 'Aroma potente a ajo, mantequilla y limón.',
    textura: 'Camarón firme y jugoso, aguacate cremoso.',
  },
  rescates: [
    { problema: 'El camarón sabe a mar', solucion: 'Lávalo con agua y limón antes de secarlo y sellarlo.' }
  ]
};