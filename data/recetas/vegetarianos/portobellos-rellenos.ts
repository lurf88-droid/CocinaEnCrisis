import type { Receta } from '@/types/receta';

export const PORTOBELLOS_RELLENOS: Receta = {
  id: 'portobellos-rellenos',
  titulo: 'Portobellos rellenos de espinaca',
  imagen: require('../../../assets/images/recetas/vegetarianos/portobellos-rellenos.webp'),
  descripcion: 'Un plato elegante y lleno de umami. Los portobellos actúan como un "filete" vegetal que absorbe todos los sabores del relleno.',
  cocina: 'internacional',
  tecnicaPrincipal: 'horneado de hongos y relleno cremoso',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 25,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['limpieza de portobello', 'relleno de espinaca', 'gratinado individual'],
  ingredientes: [
    { id: 'champinon', cantidad: 0.400, unidad: 'kg' }, // Usamos champinon como sustituto de portobello
    { id: 'espinaca', cantidad: 0.100, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.100, unidad: 'kg' },
    { id: 'crema', cantidad: 0.100, unidad: 'litro' },
    { id: 'ajo', cantidad: 2, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara los hongos',
      descripcion: 'Limpia los champiñones (si son grandes, retira el tallo). Pícalos finamente si no son portobellos. Sofríelos con ajo y cebolla.',
      tiempo: '5 minutos',
    },
    {
      numero: 2,
      titulo: 'El relleno',
      descripcion: 'Agrega la espinaca picada a la sartén y cocina hasta que se reduzca. Vierte la crema, agrega el queso desmoronado y sazona.',
      tiempo: '5 minutos',
      porQue: 'La crema y el queso crean una mezcla cremosa que se adhiere perfectamente al hongo.',
    },
    {
      numero: 3,
      titulo: 'Rellena y hornea',
      descripcion: 'Coloca los hongos en un refractario, rellénalos con la mezcla de espinaca y hornea a 200°C por 10 minutos.',
      tiempo: '10 minutos',
      chefPregunta: '¿Por qué los portobellos son tan valorados en la cocina vegetariana?',
      respuestaEsperada: 'Porque tienen una textura carnosa y un sabor umami que imita la carne.',
      señalCorrecta: 'Hongos dorados con relleno burbujeante.',
    }
  ],
  tip: 'Si encuentras portobellos, retira las láminas oscuras con una cuchara para un sabor más suave.',
  popularidad: 85,
  tags: ['vegetariano', 'hongos', 'premium', 'horno'],
  tipoComida: 'familia',
  historiaChef: 'Los portobellos son champiñones maduros y son muy populares en la cocina internacional por su textura y sabor profundo.',
  trucoChef: 'Un toque de vino blanco en el relleno les da un sabor gourmet.',
  chefInicio: 'Hoy vamos a usar hongos como plato principal. La textura es increíble.',
  chefFinal: '¡Elegante! Tienes un plato que parece de restaurante de lujo.',
  señalesExito: {
    vista: 'Hongos rellenos de una mezcla verde y queso gratinado.',
    olor: 'Aroma a espinaca y queso fundido.',
    textura: 'Carnosa por fuera y cremosa por dentro.',
  },
  rescates: [
    { problema: 'Quedaron muy secos', solucion: 'Agrega una cucharada extra de crema al relleno antes de hornear.' }
  ]
};