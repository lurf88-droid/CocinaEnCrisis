export function generarRazonRecomendacion(
  coincidencias:number,
  totalIngredientes:number,
  costo:number,
  tiempo:number
){

  const razones = [];

  if(coincidencias === totalIngredientes){
    razones.push(
      '🔥 Tienes todos los ingredientes disponibles'
    );
  } else {
    razones.push(
      `🧺 Tienes ${coincidencias} de ${totalIngredientes} ingredientes`
    );
  }


  if(costo <= 25){
    razones.push(
      '💰 Es una receta económica'
    );
  }


  if(tiempo <= 20){
    razones.push(
      '⏱ Se prepara rápido'
    );
  }


  return razones;
}