import type { Receta } from '@/types/receta';

export const RISOTTO_CHAMPINONES: Receta = {
  id: 'risotto-champinones',
  titulo: 'Risotto de champiñones y parmesano',
  imagen: require('../../../assets/images/recetas/vegetarianos/risotto-champinones.webp'),
  descripcion: 'La joya de la cocina italiana. Aprende la técnica de agregar el caldo poco a poco para crear un arroz cremoso, sin necesidad de crema.',
  cocina: 'italiana',
  tecnicaPrincipal: 'nacarado de arroz y adición gradual de caldo',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 35,
  dificultad: 'avanzada',
  nivelChef: 3,
  aprendizajes: ['nacarado de arroz', 'técnica de adición de líquido', 'mantecatura'],
  ingredientes: [
    { id: 'arroz_blanco', cantidad: 0.300, unidad: 'kg' },
    { id: 'champinon', cantidad: 0.300, unidad: 'kg' },
    { id: 'caldo_pollo', cantidad: 1.000, unidad: 'litro' }, // O caldo de verduras
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'mantequilla', cantidad: 0.030, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.080, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Sofríe los champiñones',
      descripcion: 'Saltea los champiñones en un poco de aceite y mantequilla hasta que estén dorados. Resérvalos.',
      tiempo: '5 minutos',
    },
    {
      numero: 2,
      titulo: 'Nacara el arroz',
      descripcion: 'En la misma olla, sofríe la cebolla picada finamente. Agrega el arroz y revuelve hasta que los granos estén brillantes (nacarados).',
      tiempo: '3 minutos',
      porQue: 'El nacarado sella el almidón del arroz, lo que evita que se deshaga y garantiza que quede al dente.',
      nivelImportancia: 'critico',
    },
    {
      numero: 3,
      titulo: 'Añade el caldo poco a poco',
      descripcion: 'Vierte el caldo caliente cucharón por cucharón, revolviendo constantemente. No agregues el siguiente hasta que el anterior se haya absorbido.',
      tiempo: '18 minutos',
      chefPregunta: '¿Por qué el risotto debe revolverse tanto?',
      respuestaEsperada: 'Porque el roce constante de los granos de arroz libera el almidón y crea la textura cremosa característica.',
      señalCorrecta: 'Arroz cremoso y suave al masticar.',
    },
    {
      numero: 4,
      titulo: 'Mantecatura',
      descripcion: 'Apaga el fuego, agrega la mantequilla restante, el queso y los champiñones. Mezcla enérgicamente para darle brillo y cremosidad.',
      tiempo: '2 minutos',
    }
  ],
  tip: 'El risotto debe quedar "ondulado" (al punto). Si pasa de espeso, agrega un poco más de caldo caliente al servir.',
  popularidad: 92,
  tags: ['vegetariano', 'italiano', 'risotto', 'premium', 'gourmet'],
  tipoComida: 'familia',
  historiaChef: 'El risotto es un plato del norte de Italia, famoso por su cremosidad sin usar crema. La técnica de agregar caldo poco a poco se llama "mantecatura".',
  trucoChef: 'El caldo debe estar caliente todo el tiempo, si agregas caldo frío, el arroz se cocerá irregularmente.',
  chefInicio: 'Hoy vamos a cocinar un clásico italiano de alta cocina. La paciencia es el ingrediente secreto.',
  chefFinal: '¡Espectacular! Lograste un arroz cremoso y lleno de sabor a champiñones.',
  señalesExito: {
    vista: 'Arroz cremoso de color marrón claro.',
    olor: 'Aroma a champiñones y mantequilla.',
    textura: 'Cremosa y al dente.',
  },
  rescates: [
    { problema: 'Quedó muy seco', solucion: 'Agrega un cucharón más de caldo caliente y revuelve.' }
  ]
};