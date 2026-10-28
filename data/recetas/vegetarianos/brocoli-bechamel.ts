import type { Receta } from '@/types/receta';

export const BROCOLI_BECHAMEL: Receta = {
  id: 'brocoli-bechamel',
  titulo: 'Brócoli gratinado a la bechamel',
  imagen: require('../../../assets/images/recetas/vegetarianos/brocoli-bechamel.webp'),
  descripcion: 'Un plato de restaurante en casa. Aprende a hacer una salsa bechamel perfecta (sin grumos) y a gratinar para obtener una costra dorada irresistible.',
  cocina: 'francesa',
  tecnicaPrincipal: 'elaboración de roux, bechamel y gratinado',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 35,
  dificultad: 'avanzada',
  nivelChef: 3,
  aprendizajes: ['técnica de roux', 'salsa bechamel', 'gratinado en horno'],
  ingredientes: [
    { id: 'brocoli', cantidad: 0.600, unidad: 'kg' },
    { id: 'leche', cantidad: 0.500, unidad: 'litro' },
    { id: 'harina', cantidad: 0.040, unidad: 'kg' },
    { id: 'mantequilla', cantidad: 0.040, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.100, unidad: 'kg' },
    { id: 'nuez_moscada', cantidad: 0.002, unidad: 'kg' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Blanquea el brócoli',
      descripcion: 'Corta el brócoli en floretes. Hiérvelo en agua con sal por 4 minutos, escúrrelo y pásalo por agua fría para que mantenga su color verde brillante.',
      tiempo: '6 minutos',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Haz el Roux (El secreto de la bechamel)',
      descripcion: 'En una olla, derrite la mantequilla a fuego medio. Agrega la harina y cocina revolviendo constantemente por 2 minutos hasta que forme una pasta y huela ligeramente a galleta.',
      tiempo: '3 minutos',
      porQue: 'Cocinar la harina con la mantequilla elimina el sabor a crudo y espesa la salsa.',
      nivelImportancia: 'critico',
      señalCorrecta: 'Pasta homogénea sin grumos.',
    },
      {
      numero: 3,
      titulo: 'Agrega la leche',
      descripcion: 'Vierte la leche caliente poco a poco sobre el roux, batiendo enérgicamente con un globo para evitar grumos. Cocina hasta que espese.',
      tiempo: '5 minutos',
      porQue: 'La leche caliente se integra mejor y evita que la salsa se corte.',
      chefPregunta: '¿Qué pasa si agregas la leche fría de golpe?',
      respuestaEsperada: 'La salsa se pueden hacer grumos por el cambio brusco de temperatura.',
    },
    {
      numero: 4,
      titulo: 'Sazona y arma',
      descripcion: 'Sazona la bechamel con sal y nuez moscada. Coloca el brócoli en un refractario, cúbrelo con la salsa y espolvorea el queso encima.',
      tiempo: '5 minutos',
    },
    {
      numero: 5,
      titulo: 'Gratina',
      descripcion: 'Mete al horno a 200°C por 10 minutos, hasta que el queso esté dorado y burbujeante.',
      tiempo: '10 minutos',
      señalCorrecta: 'Superficie dorada y salsa burbujeante.',
    }
  ],
  tip: 'Puedes agregar trozos de jamón o pollo si no es para un menú estrictamente vegetariano.',
  popularidad: 90,
  tags: ['vegetariano', 'premium', 'horno', 'brócoli'],
  tipoComida: 'familia',
  historiaChef: 'La bechamel es una de las 5 "salsas madre" de la cocina francesa clásica de Escoffier. Dominarla te abre las puertas a cientos de recetas.',
  trucoChef: 'Si la salsa quedó con grumos, puedes pasarla por un colador fino antes de usarla.',
  chefInicio: 'Hoy vamos a hacer una salsa francesa clásica. El Roux es magia pura.',
  chefFinal: '¡Espectacular! Has logrado una bechamel tersa y un gratinado perfecto.',
  señalesExito: {
    vista: 'Costra de queso dorada con salsa blanca burbujeante.',
    olor: 'Aroma a nuez moscada y queso gratinado.',
    textura: 'Brócoli firme con salsa cremosa.',
  },
  rescates: [
    { problema: 'La salsa quedó muy espesa', solucion: 'Agrega un chorrito más de leche caliente y bate.' }
  ]
};