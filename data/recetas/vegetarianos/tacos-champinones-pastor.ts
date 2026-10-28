import type { Receta } from '@/types/receta';

export const TACOS_CHAMPINONES_PASTOR: Receta = {
  id: 'tacos-champinones-pastor',
  titulo: 'Tacos de Champiñones al Pastor',
  imagen: require('../../../assets/images/recetas/vegetarianos/tacos-champinones-pastor.webp'),
  descripcion: 'La magia de la cocina mexicana adaptada a lo vegetariano. Aprende a hacer un adobo de achiote y chile guajillo para darle un sabor ahumado a los champiñones.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'adobo de chiles y salteado de hongos',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 3,
  tiempoMinutos: 30,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['adobo mexicano', 'salteado de hongos', 'ensamblaje de tacos'],
  ingredientes: [
    { id: 'champinon', cantidad: 0.500, unidad: 'kg' },
    { id: 'tortilla_maiz', cantidad: 0.300, unidad: 'kg' },
    { id: 'chile_guajillo', cantidad: 3, unidad: 'pieza' },
    { id: 'ajo', cantidad: 2, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.100, unidad: 'kg' },
    { id: 'pina', cantidad: 0.100, unidad: 'kg' }, // Piña para el toque pastor
    { id: 'cilantro', cantidad: 0.020, unidad: 'kg' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Haz el adobo',
      descripcion: 'Remoja los chiles guajillos en agua caliente por 10 minutos. Licúalos con el ajo, un trozo de cebolla y un poco de agua.',
      tiempo: '12 minutos',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Marina los champiñones',
      descripcion: 'Corta los champiñones en láminas gruesas. Mézclalos con el adobo y déjalos reposar 5 minutos.',
      tiempo: '5 minutos',
    },
    {
      numero: 3,
      titulo: 'Saltea',
      descripcion: 'Calienta aceite en un sartén a fuego alto. Agrega los champiñones con el adobo y saltea hasta que estén dorados. Agrega trocitos de piña.',
      tiempo: '5 minutos',
      chefPregunta: '¿Por qué el adobo de chiles es tan importante en la cocina mexicana?',
      respuestaEsperada: 'Porque los chiles secos aportan un sabor profundo, ahumado y complejo que es la base de muchos platillos.',
      señalCorrecta: 'Champiñones cubiertos de una salsa roja espesa y brillante.',
    },
    {
      numero: 4,
      titulo: 'Arma los tacos',
      descripcion: 'Sirve los champiñones sobre tortillas calientes. Agrega cebolla picada, cilantro y un toque de limón.',
      tiempo: '3 minutos',
    }
  ],
  tip: 'Agrega un poco de chile chipotle al adobo si te gusta el toque picante.',
  popularidad: 92,
  tags: ['vegetariano', 'tacos', 'mexicano', 'pastor', 'callejero'],
  tipoComida: 'barata',
  historiaChef: 'Los tacos al pastor nacieron en Puebla con la llegada de la carne de cerdo. Esta versión vegetariana reinventa el adobo para que los hongos brillen.',
  trucoChef: 'Dora los champiñones en un sartén muy caliente para que no suelten agua y queden crujientes.',
  chefInicio: 'Hoy vamos a hacer tacos al pastor, pero sin pastor. La magia está en el adobo.',
  chefFinal: '¡Espectacular! El sabor ahumado de los champiñones engaña a cualquiera.',
  señalesExito: {
    vista: 'Tacos con champiñones rojos y brillantes, piña y cilantro.',
    olor: 'Aroma a chile asado y hongos.',
    textura: 'Champiñones firmes con tortilla suave.',
  },
  rescates: [
    { problema: 'Quedó muy salado', solucion: 'Agrega más piña o un poco de agua al adobo.' }
  ]
};