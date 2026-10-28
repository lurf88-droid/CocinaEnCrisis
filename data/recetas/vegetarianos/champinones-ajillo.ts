import type { Receta } from '@/types/receta';

export const CHAMPINONES_AJILLO: Receta = {
  id: 'champinones-ajillo',
  titulo: 'Champiñones al ajillo',
  imagen: require('../../../assets/images/recetas/vegetarianos/champinones-ajillo.webp'),
  descripcion: 'Una tapa clásica española que se hace en minutos. Aprende a limpiar los champiñones sin que absorban agua y a sellarlos para que queden dorados.',
  cocina: 'española',
  tecnicaPrincipal: 'salteado a fuego alto y aromatización con ajo',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 1,
  aprendizajes: ['limpieza de hongos', 'salteado a fuego alto', 'infusión de ajo'],
  ingredientes: [
    { id: 'champinon', cantidad: 0.400, unidad: 'kg' },
    { id: 'ajo', cantidad: 4, unidad: 'pieza' },
    { id: 'mantequilla', cantidad: 0.030, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'perejil', cantidad: 0.010, unidad: 'kg' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Limpia los hongos',
      descripcion: 'Limpia los champiñones con un paño húmedo o papel. Corta el tallo y rebánalos por la mitad o en cuartos.',
      tiempo: '4 minutos',
      consejo: 'NUNCA los laves bajo el chorro de agua; son esponjas y absorberán todo el líquido, arruinando el salteado.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Dora el ajo',
      descripcion: 'En un sartén, calienta el aceite y la mantequilla. Agrega el ajo fileteado y cocina a fuego medio hasta que esté doradito (sin quemarse).',
      tiempo: '3 minutos',
      porQue: 'La mantequilla da sabor y el aceite evita que la mantequilla se queme.',
    },
    {
      numero: 3,
      titulo: 'Saltea los champiñones',
      descripcion: 'Sube el fuego al máximo, agrega los champiñones y saltea por 5 minutos. No los muevas demasiado al principio para que se doren.',
      tiempo: '6 minutos',
      chefPregunta: '¿Por qué los champiñones sueltan mucha agua al cocinarse?',
      respuestaEsperada: 'Porque contienen un 90% de agua, que se libera al romperse las células por el calor.',
      señalCorrecta: 'Champiñones dorados y sin charco de agua en el sartén.',
    },
    {
      numero: 4,
      titulo: 'Termina',
      descripcion: 'Agrega el perejil picado, un chorrito de limón y sal. Sirve inmediatamente.',
      tiempo: '2 minutos',
    }
  ],
  tip: 'Acompaña con pan tostado para remojar el aceite de ajo.',
  ahorro: 'Una cena rápida y elegante por menos de $50.',
  errorComun: 'Lavar los champiñones o cocinarlos a fuego bajo (se cuecen en su agua en vez de dorarse).',
  popularidad: 85,
  tags: ['vegetariano', 'rapido', 'tapa', 'español'],
  tipoComida: 'barata',
  historiaChef: 'Los champiñones al ajillo son un clásico de los bares de tapas en España. En México se volvieron un plato de entrada muy popular.',
  trucoChef: 'Un toque de vino blanco al final desglasa el sartén y le da un sabor increíble.',
  sustituciones: [
    { falta: 'champinon', reemplazo: 'setas o portobello picado' }
  ],
  chefInicio: 'Hoy vamos a cocinar hongos. La técnica es simple: fuego alto y no mojarlos.',
  chefFinal: '¡Delicioso! Lograste un dorado perfecto y un aroma a ajo espectacular.',
  señalesExito: {
    vista: 'Champiñones dorados brillantes por la mantequilla.',
    olor: 'Aroma intenso a ajo y perejil.',
    textura: 'Firmes por fuera y suaves por dentro.',
  },
  rescates: [
    { problema: 'Se quemó el ajo', solucion: 'Retira el ajo quemado, limpia el sartén y repite el proceso con ajo nuevo.' }
  ]
};