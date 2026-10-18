import { ImageSourcePropType } from 'react-native';

export const INGREDIENT_IMAGES: Record<string, ImageSourcePropType> = {};
export type IngredienteId = string;

export type IngredienteUsuario = {
  id: IngredienteId;
};