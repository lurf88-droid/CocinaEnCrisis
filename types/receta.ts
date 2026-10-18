// ======================================================
// 🧺 INGREDIENTE DE RECETA
// ======================================================

export type IngredienteReceta = {
  id: string;
  cantidad: number;
  unidad: string;
};


// ======================================================
// 🍳 PASO DE RECETA
// ======================================================

export type PasoReceta = {
  numero: number;

  titulo: string;

  descripcion: string;

  tiempo?: string;

  consejo?: string;

  porQue?: string;

  mensajeChef?: string;

  señalCorrecta?: string;

  errorEvitar?: string;

  rescate?: {
    problema: string;
    solucion: string;
  };

  objetivo?: string;

  nivelImportancia?:
    | 'normal'
    | 'clave'
    | 'critico';

  chefPregunta?: string;

  respuestaEsperada?: string;
};


// ======================================================
// 🍽 CATEGORÍA DE RECETA
// ======================================================

/*
  La categoría responde principalmente:

  "¿En qué tipo o momento del recetario
  se encuentra esta receta?"

  Ejemplo:

  Café lechero:
  categoria = desayuno

  Pero eso NO significa que sea un plato
  principal.

  Para esa función utilizamos rolCulinario.
*/

export type CategoriaReceta =
  | 'desayuno'
  | 'comida'
  | 'cena'
  | 'snack'
  | 'postre'
  | 'bebida'
  | 'salsa'
  | 'panaderia'
  | 'reposteria'
  | 'base_culinaria';


// ======================================================
// 🍴 ROL CULINARIO
// ======================================================

/*
  El rol culinario responde:

  "¿Qué función cumple esta receta
  dentro de una comida?"

  Esto permite que Chef Luna entienda
  la diferencia entre:

  desayuno + plato_principal
  desayuno + bebida
  comida + salsa
  comida + acompanamiento

  aunque compartan la misma categoría.
*/

export type RolCulinario =
  | 'plato_principal'
  | 'bebida'
  | 'acompanamiento'
  | 'entrada'
  | 'postre'
  | 'snack'
  | 'salsa'
  | 'base';


// ======================================================
// 🎉 OCASIÓN
// ======================================================

export type OcasionReceta =
  | 'diario'
  | 'crisis'
  | 'familia'
  | 'especial'
  | 'cumpleaños'
  | 'romantica';


// ======================================================
// 🕐 MOMENTO
// ======================================================

export type MomentoReceta =
  | 'diario'
  | 'rapido'
  | 'aprender'
  | 'experimentar'
  | 'compartir'
  | 'celebrar'
  | 'especial';


// ======================================================
// 👨‍🍳 DIFICULTAD
// ======================================================

export type DificultadReceta =
  | 'facil'
  | 'media'
  | 'avanzada'
  | 'chef';


// ======================================================
// 🌎 REGIÓN CULINARIA
// ======================================================

export type RegionCulinaria = {
  region: string;

  estadoOrigen: string;

  ciudadOrigen?: string;

  tradicion?: string;
};


// ======================================================
// 📖 RECETA
// ======================================================

export type Receta = {
  id: string;

  titulo: string;

  imagen: any;

  descripcion: string;

  // ====================================================
  // 🍽 CLASIFICACIÓN CULINARIA PRINCIPAL
  // ====================================================

  categoria: CategoriaReceta;

  /**
   * Función que cumple la receta dentro de una comida.
   *
   * Es opcional durante la migración para no romper
   * recetas existentes.
   *
   * Ejemplos:
   *
   * Café lechero:
   * categoria: 'desayuno'
   * rolCulinario: 'bebida'
   *
   * Enfrijoladas:
   * categoria: 'desayuno'
   * rolCulinario: 'plato_principal'
   */
  rolCulinario?: RolCulinario;

  porciones: number;

  tiempoMinutos: number;

  dificultad: DificultadReceta;


  // ====================================================
  // 🧺 INGREDIENTES
  // ====================================================

  ingredientes: IngredienteReceta[];


  // ====================================================
  // 🍳 PASOS
  // ====================================================

  pasos: PasoReceta[];


  // ====================================================
  // 🌎 IDENTIDAD CULINARIA
  // ====================================================

  cocina?: string;

  tecnicaPrincipal?: string;


  // ====================================================
  // 🗺 IDENTIDAD REGIONAL
  // ====================================================

  identidadRegional?: RegionCulinaria;


  // ====================================================
  // 🎓 FORMACIÓN CHEF LUNA
  // ====================================================

  aprendizajes?: string[];

  tip?: string;

  ahorro?: string;

  errorComun?: string;

  nivelChef?:
    | 1
    | 2
    | 3
    | 4
    | 5;


  // ====================================================
  // 🔎 CLASIFICACIÓN COMPLEMENTARIA
  // ====================================================

  tags?: string[];

  erroresComunes?: string[];

  tipoComida?:
    | 'barata'
    | 'llenadora'
    | 'rapida'
    | 'familia';

  popularidad?: number;

  momento?: MomentoReceta;

  ocasion?: OcasionReceta[];


  // ====================================================
  // 📚 HISTORIA / PERSONALIDAD
  // ====================================================

  historiaChef?: string;

  trucoChef?: string;


  // ====================================================
  // 🔄 SUSTITUCIONES
  // ====================================================

  sustituciones?: {
    falta: string;
    reemplazo: string;
  }[];


  // ====================================================
  // 🌙 CHEF LUNA
  // ====================================================

  chefInicio?: string;

  chefFinal?: string;


  // ====================================================
  // ✅ SEÑALES DE ÉXITO
  // ====================================================

  señalesExito?: {
    vista: string;
    olor: string;
    textura: string;
  };


  // ====================================================
  // 🛟 RESCATES
  // ====================================================

  rescates?: {
    problema: string;
    solucion: string;
  }[];
};


// ======================================================
// 🧺 INGREDIENTE EN DESPENSA
// ======================================================

export type IngredienteDespensa = {
  id: string;

  cantidad: number;

  unidad: string;
};


// ======================================================
// 💰 RECETA CON COSTO
// ======================================================

export type RecetaConCosto =
  Receta & {

    /**
     * Valor completo estimado de todos
     * los ingredientes utilizados.
     */
    costoTotal: number;


    /**
     * Valor completo estimado dividido
     * entre las porciones.
     */
    costoPorPorcion: number;


    /**
     * IDs canónicos de ingredientes utilizados
     * para analizar compatibilidad con la despensa.
     */
    ingredientesClave: string[];


    desglose: {
      nombre: string;
      costo: number;
    }[];
  };


// ======================================================
// 🔎 RESULTADO DE BÚSQUEDA
// ======================================================

export type ResultadoBusqueda =
  RecetaConCosto & {

    /**
     * Cantidad de ingredientes necesarios
     * encontrados en la despensa.
     */
    coincidencias: number;


    /**
     * Cantidad total de ingredientes evaluados
     * para determinar compatibilidad.
     *
     * No incluye ingredientes explícitamente
     * asumibles por la lógica de despensa.
     */
    totalIngredientes: number;


    /**
     * Porcentaje de coincidencia entre
     * despensa y requisitos reales.
     */
    compatibilidad: number;


    /**
     * IDs canónicos que el usuario
     * todavía necesita.
     */
    faltantes: string[];


    /**
     * Costo estimado únicamente de los
     * ingredientes que realmente faltan
     * para completar la receta.
     *
     * NO depende de `basico`.
     *
     * Este es el valor importante para:
     *
     * - presupuesto
     * - modo ahorro
     * - modo crisis
     * - compras inteligentes
     */
    costoFaltantes: number;


    /**
     * true únicamente cuando no queda
     * ningún ingrediente requerido pendiente.
     */
    puedeCocinar: boolean;


    /**
     * Indica si el costo de los ingredientes
     * faltantes entra en el presupuesto
     * seleccionado por el usuario.
     */
    dentroPresupuesto: boolean;


    estadoReceta:
      | 'lista'
      | 'casi'
      | 'faltante';


    razones: string[];
  };