import type { Receta } from '@/types/receta';

export const LASANA_CALABACITA: Receta = {
  id: 'lasana-calabacita',
  titulo: 'Lasaña de calabacita y ricotta',
  imagen: require('../../../assets/images/recetas/vegetarianos/lasana-calabacita.webp'),
  descripcion: 'Una lasaña baja en carbohidratos, pero llena de sabor. Aprende a usar la calabacita en lugar de la pasta y a evitar que la lasaña quede aguada.',
  cocina: 'italiana',
  tecnicaPrincipal: 'corte longitudinal y horneado en capas',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 6,
  tiempoMinutos: 50,
  dificultad: 'avanzada',
  nivelChef: 3,
  aprendizajes: ['corte de calabacita en láminas', 'manejo de humedad', 'ensamblaje en capas'],
  ingredientes: [
    { id: 'calabacita', cantidad: 4, unidad: 'pieza' },
    { id: 'queso_fresco', cantidad: 0.300, unidad: 'kg' },
    { id: 'jitomate', cantidad: 0.500, unidad: 'kg' },
    { id: 'cebolla_blanca', cantidad: 0.100, unidad: 'kg' },
    { id: 'ajo', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara las láminas',
      descripcion: 'Corta las calabacitas a lo largo en láminas muy finas (de 0.5 cm). Colócalas en un colador y sálalas ligeramente. Déjalas reposar 10 minutos.',
      tiempo: '15 minutos',
      porQue: 'La sal hará que la calabacita suelte agua y la lasaña no quedará aguada.',
      mensajeChef: 'Aplanar la calabacita es la clave para una lasaña firme.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Haz la salsa de jitomate',
      descripcion: 'Licúa el jitomate con la cebolla y el ajo. Fríe en una olla con un poco de aceite hasta que espese.',
      tiempo: '10 minutos',
    },
    {
      numero: 3,
      titulo: 'Ensambla',
      descripcion: 'En un refractario, pon una capa de salsa, una capa de calabacita, y una capa de queso. Repite hasta terminar con una capa de queso.',
      tiempo: '5 minutos',
    },
    {
      numero: 4,
      titulo: 'Hornea',
      descripcion: 'Cubre con papel aluminio y hornea a 180°C por 20 minutos. Destapa y hornea 10 minutos más.',
      tiempo: '30 minutos',
      señalCorrecta: 'Queso gratinado y capas de calabacita suaves.',
    }
  ],
  tip: 'Puedes usar una mezcla de quesos para que se derritan mejor.',
  popularidad: 85,
  tags: ['vegetariano', 'lasaña', 'italiana', 'bajo_carbohidratos'],
  tipoComida: 'familia',
  historiaChef: 'Las lasañas vegetarianas modernas sustituyen la pasta por láminas de vegetales para reducir los carbohidratos, siguiendo la tradición italiana de usar ingredientes frescos.',
  trucoChef: 'Puedes asar previamente las láminas de calabacita para que la lasaña tenga un toque ahumado.',
  chefInicio: 'Hoy haremos una lasaña sin pasta. El secreto está en sacarle el agua a la calabacita.',
  chefFinal: '¡Espectacular! Tienes una lasaña firme y deliciosa.',
  señalesExito: {
    vista: 'Capas de calabacita con salsa y queso gratinado.',
    olor: 'Aroma a albahaca y queso horneado.',
    textura: 'Suave y firme al corte.',
  },
  rescates: [
    { problema: 'Quedó aguada', solucion: 'Déjala reposar 10 minutos fuera del horno antes de servir para que los líquidos se asienten.' }
  ]
};