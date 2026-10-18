export type NivelChefLunaPro =
  | 'basica'
  | 'en-desarrollo'
  | 'completa'
  | 'legendaria';


export type DimensionChefLunaPro =
  | 'identidad'
  | 'cultura'
  | 'ingredientes'
  | 'preparacion'
  | 'tips'
  | 'aprendizaje'
  | 'nutricion'
  | 'costo-region'
  | 'busqueda';


export type EvaluacionDimensionChefLunaPro = {
  dimension: DimensionChefLunaPro;

  titulo: string;

  puntos: number;

  maximo: number;

  porcentaje: number;

  fortalezas: string[];

  mejoras: string[];
};


export type ReporteChefLunaPro = {
  recetaId: string;

  titulo: string;

  puntuacion: number;

  nivel: NivelChefLunaPro;

  etiqueta: string;

  dimensiones: EvaluacionDimensionChefLunaPro[];

  fortalezas: string[];

  mejorasPrioritarias: string[];

  perfecta: boolean;
};