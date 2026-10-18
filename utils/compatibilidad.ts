export function obtenerEstadoCompatibilidad(valor:number){

  if(valor >= 80){
    return {
      texto:'PUEDES COCINAR HOY',
      icono:'🔥',
      tipo:'success',

      color:'#7BD88F',
      fondo:'#243526',
    };
  }


  if(valor >= 50){
    return {
      texto:'CASI LISTA',
      icono:'🍳',
      tipo:'warning',

      color:'#F2B35B',
      fondo:'#3A2A18',
    };
  }


  return {
  texto:'CASI LA LOGRAS',
    icono:'🧺',
    tipo:'danger',

    color:'#E89A2E',
    fondo:'#3A2418',
  };
}