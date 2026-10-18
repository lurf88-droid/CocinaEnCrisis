import type {
  Receta,
} from '@/types/receta';

import type {
  DimensionChefLunaPro,
  EvaluacionDimensionChefLunaPro,
  NivelChefLunaPro,
  ReporteChefLunaPro,
} from '@/types/chef-luna-pro';

import {
  obtenerIngrediente,
} from '@/data/catalogo-ingredientes';


// ======================================================
// ⚖️ PUNTAJE MÁXIMO POR DIMENSIÓN
// ======================================================

const MAXIMOS: Record<
  DimensionChefLunaPro,
  number
> = {
  identidad: 12,
  cultura: 10,
  ingredientes: 16,
  preparacion: 18,
  tips: 10,
  aprendizaje: 10,
  nutricion: 6,
  'costo-region': 8,
  busqueda: 10,
};


// ======================================================
// 🧠 NIVEL CHEF LUNA PRO
// ======================================================

function obtenerNivel(
  puntuacion: number
): {
  nivel: NivelChefLunaPro;
  etiqueta: string;
} {

  if (puntuacion >= 90) {
    return {
      nivel: 'legendaria',
      etiqueta: '🔥 Receta legendaria',
    };
  }

  if (puntuacion >= 70) {
    return {
      nivel: 'completa',
      etiqueta: '👨‍🍳 Completa',
    };
  }

  if (puntuacion >= 50) {
    return {
      nivel: 'en-desarrollo',
      etiqueta: '🍳 En desarrollo',
    };
  }

  return {
    nivel: 'basica',
    etiqueta: '⚠️ Básica',
  };
}


// ======================================================
// 🧰 CREAR EVALUACIÓN DE DIMENSIÓN
// ======================================================

function crearDimension(
  dimension: DimensionChefLunaPro,
  titulo: string,
  puntos: number,
  fortalezas: string[],
  mejoras: string[]
): EvaluacionDimensionChefLunaPro {

  const maximo =
    MAXIMOS[dimension];

  const puntosSeguros =
    Math.max(
      0,
      Math.min(
        puntos,
        maximo
      )
    );

  return {
    dimension,
    titulo,
    puntos: puntosSeguros,
    maximo,

    porcentaje:
      Math.round(
        (
          puntosSeguros /
          maximo
        ) * 100
      ),

    fortalezas,
    mejoras,
  };
}


// ======================================================
// 🌎 IDENTIDAD CULINARIA
// ======================================================

function evaluarIdentidad(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  if (receta.titulo?.trim()) {
    puntos += 2;
  }

  if (receta.categoria) {
    puntos += 2;
  }

  if (receta.cocina?.trim()) {
    puntos += 2;

    fortalezas.push(
      'La receta identifica su cocina.'
    );
  } else {
    mejoras.push(
      'Definir la cocina a la que pertenece.'
    );
  }

  if (receta.tecnicaPrincipal?.trim()) {
    puntos += 2;

    fortalezas.push(
      'Tiene técnica principal definida.'
    );
  } else {
    mejoras.push(
      'Agregar tecnicaPrincipal.'
    );
  }

  if (
    receta.identidadRegional
      ?.region
      ?.trim()
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar identidad regional.'
    );
  }

  if (receta.nivelChef) {
    puntos += 2;
  } else {
    mejoras.push(
      'Definir nivelChef.'
    );
  }


  return crearDimension(
    'identidad',
    'Identidad culinaria',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 📚 CULTURA
// ======================================================

function evaluarCultura(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  if (receta.historiaChef?.trim()) {
    puntos += 4;

    fortalezas.push(
      'Incluye historia culinaria.'
    );
  } else {
    mejoras.push(
      'Agregar historiaChef.'
    );
  }

  if (
    receta.identidadRegional
      ?.estadoOrigen
      ?.trim()
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Definir estado de origen.'
    );
  }

  if (
    receta.identidadRegional
      ?.tradicion
      ?.trim()
  ) {
    puntos += 2;

    fortalezas.push(
      'Incluye tradición regional.'
    );
  } else {
    mejoras.push(
      'Agregar tradición o contexto cultural.'
    );
  }

  if (
    receta.identidadRegional
      ?.ciudadOrigen
      ?.trim()
  ) {
    puntos += 2;
  }


  return crearDimension(
    'cultura',
    'Información cultural',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 🧺 INGREDIENTES
// ======================================================

function evaluarIngredientes(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  if (
    receta.ingredientes.length > 0
  ) {
    puntos += 3;
  }


  const todosExisten =
    receta.ingredientes.every(
      ingrediente =>
        Boolean(
          obtenerIngrediente(
            ingrediente.id
          )
        )
    );


  if (todosExisten) {
    puntos += 5;

    fortalezas.push(
      'Todos los ingredientes existen en el catálogo.'
    );
  } else {
    mejoras.push(
      'Hay ingredientes que no existen en el catálogo.'
    );
  }


  const cantidadesValidas =
    receta.ingredientes.every(
      ingrediente =>
        Number.isFinite(
          ingrediente.cantidad
        ) &&
        ingrediente.cantidad > 0
    );


  if (cantidadesValidas) {
    puntos += 4;
  } else {
    mejoras.push(
      'Revisar cantidades de ingredientes.'
    );
  }


  const unidadesValidas =
    receta.ingredientes.every(
      ingrediente =>
        Boolean(
          ingrediente.unidad
            ?.trim()
        )
    );


  if (unidadesValidas) {
    puntos += 2;
  } else {
    mejoras.push(
      'Revisar unidades de ingredientes.'
    );
  }


  const ids =
    receta.ingredientes.map(
      ingrediente =>
        ingrediente.id
          .trim()
          .toLowerCase()
    );


  const sinDuplicados =
    new Set(ids).size ===
    ids.length;


  if (sinDuplicados) {
    puntos += 2;
  } else {
    mejoras.push(
      'Eliminar ingredientes duplicados.'
    );
  }


  return crearDimension(
    'ingredientes',
    'Ingredientes',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 🍳 PREPARACIÓN
// ======================================================

function evaluarPreparacion(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  if (
    receta.pasos.length >= 3
  ) {
    puntos += 4;

    fortalezas.push(
      'La preparación está bien dividida en pasos.'
    );
  } else {
    mejoras.push(
      'Desarrollar mejor la secuencia de preparación.'
    );
  }


  const numeracionCorrecta =
    receta.pasos.every(
      (
        paso,
        index: number
      ) =>
        paso.numero ===
        index + 1
    );


  if (numeracionCorrecta) {
    puntos += 2;
  } else {
    mejoras.push(
      'Corregir numeración de pasos.'
    );
  }


  if (receta.tecnicaPrincipal?.trim()) {
    puntos += 2;
  }


  if (
    receta.pasos.some(
      paso =>
        Boolean(
          paso.consejo?.trim()
        )
    )
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar consejos durante la preparación.'
    );
  }


  if (
    receta.pasos.some(
      paso =>
        Boolean(
          paso.señalCorrecta
            ?.trim()
        )
    )
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar señales de cocción o textura.'
    );
  }


  if (
    receta.pasos.some(
      paso =>
        Boolean(
          paso.errorEvitar
            ?.trim()
        )
    ) ||
    Boolean(
      receta.errorComun?.trim()
    ) ||
    Boolean(
      receta.erroresComunes
        ?.length
    )
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar errores comunes.'
    );
  }


  if (
    receta.pasos.some(
      paso =>
        Boolean(
          paso.objetivo?.trim()
        )
    )
  ) {
    puntos += 2;
  }


  if (
    receta.pasos.some(
      paso =>
        Boolean(
          paso.rescate
        )
    ) ||
    Boolean(
      receta.rescates?.length
    )
  ) {
    puntos += 2;

    fortalezas.push(
      'Incluye rescates culinarios.'
    );
  }


  return crearDimension(
    'preparacion',
    'Preparación y técnica',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 🌙 TIPS CHEF LUNA
// ======================================================

function evaluarTips(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  if (receta.tip?.trim()) {
    puntos += 3;
  } else {
    mejoras.push(
      'Agregar un tip principal.'
    );
  }

  if (receta.ahorro?.trim()) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar consejo de ahorro.'
    );
  }

  if (receta.trucoChef?.trim()) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar trucoChef.'
    );
  }

  if (
    receta.sustituciones
      ?.length
  ) {
    puntos += 2;

    fortalezas.push(
      'Incluye sustituciones.'
    );
  } else {
    mejoras.push(
      'Agregar sustituciones útiles.'
    );
  }

  if (
    receta.chefInicio?.trim() ||
    receta.chefFinal?.trim()
  ) {
    puntos += 1;
  }


  return crearDimension(
    'tips',
    'Tips Chef Luna',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 🎓 APRENDIZAJE
// ======================================================

function evaluarAprendizaje(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  if (
    receta.aprendizajes &&
    receta.aprendizajes.length >= 2
  ) {
    puntos += 4;

    fortalezas.push(
      'La receta declara aprendizajes.'
    );
  } else {
    mejoras.push(
      'Agregar al menos dos aprendizajes.'
    );
  }


  const pasosConPorQue =
    receta.pasos.filter(
      paso =>
        Boolean(
          paso.porQue?.trim()
        )
    ).length;


  if (
    pasosConPorQue >= 2
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Explicar por qué se realizan algunos pasos.'
    );
  }


  const tienePregunta =
    receta.pasos.some(
      paso =>
        Boolean(
          paso.chefPregunta
            ?.trim()
        ) &&
        Boolean(
          paso.respuestaEsperada
            ?.trim()
        )
    );


  if (tienePregunta) {
    puntos += 2;
  }


  const tienePasoClave =
    receta.pasos.some(
      paso =>
        paso.nivelImportancia ===
          'clave' ||
        paso.nivelImportancia ===
          'critico'
    );


  if (tienePasoClave) {
    puntos += 2;
  } else {
    mejoras.push(
      'Marcar pasos clave o críticos.'
    );
  }


  return crearDimension(
    'aprendizaje',
    'Formación Chef Luna',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 🥗 NUTRICIÓN
// ======================================================

function evaluarNutricion(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  /*
    El tipo Receta todavía no almacena
    macros o calorías.

    No inventamos información.
  */

  if (
    receta.porciones > 0
  ) {
    puntos += 3;

    fortalezas.push(
      'Define número de porciones.'
    );
  }


  if (receta.tipoComida) {
    puntos += 1;
  }


  mejoras.push(
    'Agregar información nutricional aproximada cuando el modelo de datos la soporte.'
  );


  return crearDimension(
    'nutricion',
    'Nutrición básica',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 💰 COSTO Y REGIÓN
// ======================================================

function evaluarCostoRegion(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  if (
    receta.identidadRegional
      ?.region
      ?.trim()
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar región culinaria.'
    );
  }


  if (
    receta.identidadRegional
      ?.estadoOrigen
      ?.trim()
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar estado de origen.'
    );
  }


  if (receta.ahorro?.trim()) {
    puntos += 2;
  }


  /*
    costoTotal se calcula dinámicamente
    en RecetaConCosto.

    No penalizamos la Receta base por no
    almacenar ese dato.
  */

  puntos += 2;

  fortalezas.push(
    'El costo puede calcularse dinámicamente con el catálogo.'
  );


  return crearDimension(
    'costo-region',
    'Costo y región',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 🔎 ETIQUETAS Y BÚSQUEDA
// ======================================================

function evaluarBusqueda(
  receta: Receta
) {

  let puntos = 0;

  const fortalezas: string[] = [];
  const mejoras: string[] = [];


  if (receta.categoria) {
    puntos += 2;
  }


  if (receta.dificultad) {
    puntos += 2;
  }


  if (
    receta.tags &&
    receta.tags.length >= 2
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Agregar al menos dos tags útiles.'
    );
  }


  if (
    receta.ocasion &&
    receta.ocasion.length > 0
  ) {
    puntos += 2;
  } else {
    mejoras.push(
      'Definir ocasiones de consumo.'
    );
  }


  if (receta.momento) {
    puntos += 1;
  }


  if (receta.tipoComida) {
    puntos += 1;
  }


  return crearDimension(
    'busqueda',
    'Etiquetas y búsqueda',
    puntos,
    fortalezas,
    mejoras
  );
}


// ======================================================
// 🔥 AUDITOR CHEF LUNA PRO
// ======================================================

export function auditarRecetaChefLunaPro(
  receta: Receta
): ReporteChefLunaPro {

  const dimensiones: EvaluacionDimensionChefLunaPro[] = [

    evaluarIdentidad(
      receta
    ),

    evaluarCultura(
      receta
    ),

    evaluarIngredientes(
      receta
    ),

    evaluarPreparacion(
      receta
    ),

    evaluarTips(
      receta
    ),

    evaluarAprendizaje(
      receta
    ),

    evaluarNutricion(
      receta
    ),

    evaluarCostoRegion(
      receta
    ),

    evaluarBusqueda(
      receta
    ),

  ];


  const puntuacion =
    dimensiones.reduce(
      (
        total,
        actual
      ) =>
        total +
        actual.puntos,
      0
    );


  const {
    nivel,
    etiqueta,
  } =
    obtenerNivel(
      puntuacion
    );


  const fortalezas =
    dimensiones
      .flatMap(
        item =>
          item.fortalezas
      )
      .slice(
        0,
        8
      );


  const mejorasPrioritarias =
    [...dimensiones]
      .sort(
        (a, b) =>
          a.porcentaje -
          b.porcentaje
      )
      .flatMap(
        item =>
          item.mejoras
      )
      .slice(
        0,
        6
      );


  return {

    recetaId:
      receta.id,

    titulo:
      receta.titulo,

    puntuacion,

    nivel,

    etiqueta,

    dimensiones,

    fortalezas,

    mejorasPrioritarias,

    perfecta:
      puntuacion === 100,

  };

}