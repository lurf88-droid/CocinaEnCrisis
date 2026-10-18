
import { PantryStatusCard } from '@/components/chef/PantryStatusCard';

import { useIngredientes } from '@/context/IngredientesContext';
import { router } from 'expo-router';

type Props = {
  mensajeChef: string;
  porcentaje: number;
  recetasDisponibles: number;
  ingredientesDisponibles: number;
  ahorroEstimado: number;
compraClave?: {
  ingrediente: string;
  recetas: number;
  costo: number;
  razon: string;
    score: number;
} | null;
};

export function HomeHeader({
  mensajeChef,
  porcentaje,
  recetasDisponibles,
  ingredientesDisponibles,
  ahorroEstimado,
  compraClave,
}: Props) {
const {
  agregarCompra,
  listaCompra,
} = useIngredientes();
  return (
    <>
    

      <PantryStatusCard
        porcentaje={porcentaje}
        recetasDisponibles={recetasDisponibles}
        ingredientesDisponibles={ingredientesDisponibles}
        ahorroEstimado={ahorroEstimado}
       
      />
    </>
    
  );
  
}