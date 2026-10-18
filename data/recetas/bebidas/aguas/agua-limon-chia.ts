import type { Receta } from '@/types/receta';

export const AGUA_LIMON_CHIA: Receta = {
  id: 'agua-limon-chia',
  titulo: 'Agua de limón con chía',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-limon-chia.webp'),
  descripcion: 'Una bebida refrescante, rápida y llena de fibra. Perfecta para acompañar tus comidas o hidratarte en un día caluroso.',
  
  categoria: 'bebida',
  rolCulinario: 'bebida',
  
  porciones: 4,
  tiempoMinutos: 5, // ⚡ Súper rápida para el modo Rápido
  dificultad: 'facil',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'infusión e hidratación',
  aprendizajes: ['hidratación de semillas', 'balance ácido-dulce'],

  ingredientes: [
    { id: 'limon', cantidad: 4, unidad: 'pieza' },
    { id: 'chia', cantidad: 0.02, unidad: 'kg' }, // Aprox 2 cucharadas
    { id: 'azucar', cantidad: 0.05, unidad: 'kg' }, // Al gusto
    { id: 'agua', cantidad: 1, unidad: 'litro' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Hidrata la chía',
      descripcion: 'En un vaso pequeño, mezcla la chía con un poco de agua y déjala reposar durante 5 minutos hasta que forme un gel.',
      tiempo: '5 minutos',
      consejo: 'Mueve un poco con una cuchara para evitar que se hagan grumos.',
    },
    {
      numero: 2,
      titulo: 'Prepara el agua fresca',
      descripcion: 'En una jarra grande, exprime los limones, agrega el azúcar y el litro de agua. Mezcla muy bien hasta disolver el azúcar.',
      tiempo: '2 minutos',
    },
    {
      numero: 3,
      titulo: 'Mezcla y sirve',
      descripcion: 'Agrega el gel de chía al agua de limón. Sirve con hielo al gusto.',
      tiempo: '1 minuto',
    }
  ],

  tip: 'Puedes agregar unas hojas de menta o pepino para darle un toque más fresco.',
  nivelChef: 1,
  tags: ['bebida', 'refrescante', 'rapida', 'saludable', 'economica'],
  tipoComida: 'barata',
  popularidad: 85,
};