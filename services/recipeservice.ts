export const generateRecipe = async (ingredients: string[]) => {
  try {
    console.warn(
      'La generación remota de recetas requiere un backend seguro. No incluyas una clave API dentro de la app móvil.',
      ingredients.length,
    );
    return null;
  } catch (error) {
    console.log("Error generando receta:", error);
    return null;
  }
};
