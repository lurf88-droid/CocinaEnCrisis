import type { Receta } from '@/types/receta';

export const ENSALADA_BETABEL_NUEZ: Receta = {
  id: 'ensalada-betabel-nuez',
  titulo: 'Ensalada de betabel, espinaca y nuez',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-betabel-nuez.webp'), 
  descripcion: 'Una ensalada que parece sacada de un restaurante de alta cocina. El contraste entre el betabel dulce, el queso salado y la nuez crujiente crea una experiencia inolvidable.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'asado de betabel y aderezo con miel',
  categoria: 'cena',
  rolCulinario: 'entrada',
  porciones: 2,
  tiempoMinutos: 40, // Mayormente inactivo
  dificultad: 'media',
  nivelChef: 2,

  aprendizajes: [
    'asado de raíces para caramelizar azúcares',
    'balance de sabores (dulce, salado, ácido)',
    'emplatado estético'
  ],

  ingredientes: [
    { id: 'betabel', cantidad: 0.250, unidad: 'kg' }, // 1 betabel mediano
    { id: 'espinaca', cantidad: 0.150, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.080, unidad: 'kg' }, // O queso de cabra
    { id: 'nuez', cantidad: 0.040, unidad: 'kg' },
    { id: 'miel', cantidad: 0.020, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Asa el betabel',
      descripcion: 'Envuelve el betabel (entero, sin pelar) en papel aluminio y ásalo en el horno a 200°C por 30-40 minutos, hasta que un cuchillo entre sin resistencia.',
      tiempo: '40 minutos',
      consejo: 'Asarlo entero concentra sus azúcares naturales y hace que sea más fácil pelarlo después.',
      porQue: 'El calor del horno carameliza los azúcares del betabel, volviéndolo dulce en lugar de terroso.',
      mensajeChef: 'La paciencia del horno transforma un vegetal rudo en un dulce gourmet.',
      nivelImportancia: 'critico',
      señalCorrecta: 'La piel se desprende fácilmente y el interior está suave.',
    },
    {
      numero: 2,
      titulo: 'Prepara el aderezo',
      descripcion: 'En un tazón, mezcla la miel, el jugo de limón, el aceite, una pizca de sal y pimienta. Bate hasta integrar.',
      tiempo: '3 minutos',
      porQue: 'La miel aporta cuerpo y dulzor, mientras el limón corta la dulzura del betabel.',
    },
    {
      numero: 3,
      titulo: 'Tuesta las nueces',
      descripcion: 'En un sartén seco a fuego medio, tuesta las nueces por 3 minutos, moviéndolas constantemente.',
      tiempo: '3 minutos',
      consejo: 'Tostar las nueces despierta sus aceites naturales y las hace mucho más crujientes.',
      señalCorrecta: 'Las nueces sueltan un aroma profundo y suenan al moverlas.',
    },
    {
      numero: 4,
      titulo: 'Ensambla y sirve',
      descripcion: 'Pela y corta el betabel en cubos o rodajas. En un plato, coloca una cama de espinaca, el betabel, el queso fresco y las nueces. Baña con el aderezo.',
      tiempo: '4 minutos',
      chefPregunta: '¿Por qué no mezclamos todo en un bowl antes de servir?',
      respuestaEsperada: 'Porque el betabel tiñe todo de rojo. En un restaurante se sirve por capas para mantener la estética de los colores.',
      nivelImportancia: 'clave',
      mensajeChef: 'La comida entra por los ojos. Emplatar bien es parte de la cocina.',
    }
  ],

  tip: 'Usa guantes de látex al pelar y cortar el betabel para no mancharte las manos.',
  ahorro: 'El betabel es una raíz muy económica y llena de nutrientes.',
  errorComun: 'Hervir el betabel en lugar de asarlo. Al hervirlo, pierde mucho sabor en el agua.',
  popularidad: 78,
  tags: ['ensalada', 'gourmet', 'saludable', 'vegetariano', 'horno'],
  tipoComida: 'familia',
  historiaChef: 'El betabel ha sido cultivado desde la antigüedad, pero su uso en ensaladas de autor es una tendencia moderna que busca rescatar los sabores dulces de las raíces.',
  trucoChef: 'Un poco de cáscara de naranja rallada en el aderezo le da un aroma cítrico increíble.',
  sustituciones: [
    { falta: 'queso_fresco', reemplazo: 'queso de cabra o feta' },
    { falta: 'nuez', reemplazo: 'almendras o pistaches tostados' }
  ],
  chefInicio: 'Hoy vamos a elevar una simple ensalada a nivel de restaurante. El secreto estará en el asado.',
  chefFinal: 'Has creado un plato visualmente impactante y lleno de matices. Esto es cocina de autor.',
  señalesExito: {
    vista: 'Colores contrastantes: rojo profundo del betabel, verde de la espinaca y blanco del queso.',
    olor: 'Aroma terroso-dulce del betabel asado y notas cítricas.',
    textura: 'Suave del betabel, cremoso del queso y crujiente de la nuez.',
  },
  rescates: [
    { problema: 'El betabel quedó duro', solucion: 'Regrésalo al horno cubierto con aluminio por 10 minutos más. No lo sumerjas en agua.' }
  ]
};