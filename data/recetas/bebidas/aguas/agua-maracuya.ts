import type { Receta } from '@/types/receta';

export const AGUA_MARACUYA: Receta = {
  id: 'agua-maracuya',
  titulo: 'Agua fresca de maracuyá',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-maracuya.webp'),
  descripcion: 'Exótica, ácida y aromática. La maracuyá (fruta de la pasión) es la reina de los sabores tropicales. Aprende a separar la pulpa de las semillas para una textura perfecta.',
  cocina: 'tropical',
  tecnicaPrincipal: 'extracción de pulpa y colado',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 10,
  dificultad: 'facil',
  nivelChef: 2,
  aprendizajes: ['manejo de frutas exóticas', 'extracción de pulpa aromática', 'balance dulzor-acidez'],
  ingredientes: [
    { id: 'maracuya', cantidad: 0.300, unidad: 'kg' }, // Aprox 4-5 frutas
    { id: 'azucar', cantidad: 0.100, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Extrae la pulpa',
      descripcion: 'Corta las maracuyás por la mitad y con una cuchara saca toda la pulpa (semillas incluidas) en un tazón.',
      tiempo: '3 minutos',
      consejo: 'La maracuyá está lista cuando su cáscara se arruga ligeramente; eso indica que está dulce.',
    },
    {
      numero: 2,
      titulo: 'Licúa y cuela',
      descripcion: 'Licúa la pulpa con 1 litro de agua por 15 segundos (solo para separar la pulpa de las semillas). Cuela con un colador fino, presionando suavemente.',
      tiempo: '4 minutos',
      porQue: 'Si licúas demasiado, las semillas se rompen y el agua se pone amarga.',
      mensajeChef: 'La maracuyá tiene un perfume tan fuerte que el agua sabrá a paraíso.',
      nivelImportancia: 'critico',
    },
    {
      numero: 3,
      titulo: 'Endulza y sirve',
      descripcion: 'Agrega el azúcar y el jugo de limón al agua colada. Revuelve bien. Sirve con hielo.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué se le llama fruta de la pasión?',
      respuestaEsperada: 'Por la flor de la planta, que tiene símbolos de la pasión de Cristo (como los clavos y la corona de espinas).',
    }
  ],
  tip: 'Si te gusta el toque crujiente, puedes agregar una cucharadita de las semillas al momento de servir.',
  ahorro: 'La maracuyá es una fruta con un sabor tan concentrado que rinde muchísimo.',
  errorComun: 'Licuar las semillas hasta romperlas y que el agua sepa a medicamento.',
  popularidad: 85,
  tags: ['bebida', 'maracuya', 'exotica', 'tropical', 'premium'],
  tipoComida: 'familia',
  historiaChef: 'La maracuyá es originaria de Brasil y Paraguay, pero se adaptó perfectamente a los climas tropicales de México. Su sabor intenso la hace favorita en jugos y cocteles.',
  chefInicio: 'Hoy vamos a preparar una bebida con uno de los aromas más potentes de la naturaleza.',
  chefFinal: '¡Impresionante! Tienes un agua fresca de nivel internacional.',
  señalesExito: { vista: 'Color amarillo pálido con un toque opaco.', olor: 'Aroma intenso y tropical a maracuyá.', textura: 'Líquida, con un toque de pulpa.' },
  rescates: [{ problema: 'Quedó muy ácida', solucion: 'Agrega más azúcar y un poquito de agua.' }]
};