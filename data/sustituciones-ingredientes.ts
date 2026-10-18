export type SustitucionIngrediente = {

  ingrediente:string;

  reemplazos:{

    id:string;

    motivo:string;

    porcentajeSimilitud:number;

    nivel:
      | 'economico'
      | 'similar'
      | 'premium';

  }[];

};



export const SUSTITUCIONES_INGREDIENTES:SustitucionIngrediente[] = [

];