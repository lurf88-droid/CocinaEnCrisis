/**
 * 🍽️ EMOJIS DE INGREDIENTES
 */

export const EMOJI_INGREDIENTE: Record<string, string> = {
  // ─── PROTEÍNAS ───
  pollo: "🍗",
  pollo_deshebrado: "🍗",
  pechuga_pollo: "🍗",
  pechuga: "🍗",
  alas: "🍗",
  alas_pollo: "🍗",
  muslo: "🍗",
  muslo_pollo: "🍗",
  pierna_pollo: "🍗",
  higado: "🍗",
  higado_pollo: "🍗",
  caldo: "🍲",
  caldo_de_pollo: "🍲",
  caldo_pollo: "🍲",
  carne: "🥩",
  carne_res: "🥩",
  carne_molida: "🥩",
  bistec: "🥩",
  cerdo: "🥓",
  jamon: "🥓",
  tocino: "🥓",
  pescado: "🐟",
  atun: "🐟",
  camaron: "🦐",
  huevo: "🥚",

  // ─── VERDURAS Y HORTALIZAS ───
  jitomate: "🍅",
  tomate: "🍅",
  cebolla: "🧅",
  ajo: "🧄",
  papa: "🥔",
  zanahoria: "🥕",
  calabacita: "🥒",
  calabacin: "🥒",
  calabaza: "🎃",
  chile: "🌶️",
  pimiento: "🫑",
  lechuga: "🥬",
  espinaca: "🥬",
  acelga: "🥬",
  arÚgula: "🥬",
  arugula: "🥬",
  berros: "🌿",
  bok_choy: "🥬",
  berenjena: "🍆",
  betabel: "🍠",
  alcachofa: "🥦",
  apio: "🌿",
  apionabo: "🥔",
  cilantro: "🌿",
  perejil: "🌿",
  epazote: "🌿",
  brocoli: "🥦",
  coliflor: "🥦",
  champinon: "🍄",
  elote: "🌽",
  maiz: "🌽",
  nopal: "🌵",
  pepino: "🥒",

  // ─── FRUTAS ───
  platano: "🍌",
  manzana: "🍎",
  naranja: "🍊",
  limon: "🍋",
  lima: "🍋",
  aguacate: "🥑",
  fresa: "🍓",
  uva: "🍇",

  // ─── LÁCTEOS ───
  leche: "🥛",
  crema: "🥛",
  queso: "🧀",
  queso_fresco: "🧀",
  queso_oaxaca: "🧀",
  queso_manchego: "🧀",
  queso_crema: "🧀",
  queso_panela: "🧀",
  mantequilla: "🧈",
  manteca: "🧈",
  yogurt: "🥛",

  // ─── DESPENSA ───
  arroz: "🍚",
  arroz_blanco: "🍚",
  frijoles: "🫘",
  frijol: "🫘",
  pasta: "🍝",
  espagueti: "🍝",
  pasta_curry: "🍛",
  tortilla: "🫓",
  tortilla_maiz: "🫓",
  tostada_maiz: "🌮",
  maiz_pozolero: "🌽",
  fecula_maiz: "🌽",
  pan: "🍞",
  bolillo: "🥖",
  harina: "🌾",
  masa: "🌾",
  masa_maiz: "🌾",
  avena: "🌾",
  cereal: "🥣",
  azucar: "🍬",
  sal: "🧂",
  pimienta: "🌶️",
  comino: "🌶️",
  canela: "🌿",
  oregano: "🌿",
  tomillo: "🌿",
  romero: "🌿",
  laurel: "🌿",
  hoja_maiz: "🌿",
  hoja_platano: "🍃",
  tapioca: "🥣",
  tahini: "🥣",

  // ─── ACEITES / SALSAS ───
  aceite: "🫒",
  vinagre: "🍶",
  salsa: "🥫",
  mole: "🥫",
  mayonesa: "🥫",
  mostaza: "🥫",
  ketchup: "🥫",
  sriracha: "🌶️",
  miel: "🍯",

  // ─── BEBIDAS ───
  agua: "💧",
  cafe: "☕",
  te: "🍵",
  jugo: "🧃",
  chocolate: "🍫",
};

/**
 * Obtiene el emoji de un ingrediente.
 * Ahora acepta la categoría para usar un fallback inteligente.
 */
export function getEmojiIngrediente(texto: string, categoria?: string): string {
  if (!texto) return "🍽️";

  const normalizar = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");

  const clave = normalizar(texto);

  // 1. Match exacto
  if (EMOJI_INGREDIENTE[clave]) {
    return EMOJI_INGREDIENTE[clave];
  }

  const partes = clave.split("_").filter(Boolean);

  // 2. Quitar palabras desde el final
  for (let i = partes.length - 1; i > 0; i--) {
    const abreviado = partes.slice(0, i).join("_");
    if (EMOJI_INGREDIENTE[abreviado]) {
      return EMOJI_INGREDIENTE[abreviado];
    }
  }

  // 3. Probar CADA palabra individual
  for (const parte of partes) {
    if (EMOJI_INGREDIENTE[parte]) {
      return EMOJI_INGREDIENTE[parte];
    }
  }

  // 4. Fallback inteligente por categoría
  if (categoria) {
    const cat = normalizar(categoria);
    if (cat.includes("verdura")) return "🥬";
    if (cat.includes("fruta")) return "🍎";
    if (cat.includes("carne") || cat.includes("proteina")) return "🥩";
    if (cat.includes("lacteo")) return "🧀";
    if (cat.includes("despensa")) return "🥫";
    if (cat.includes("especia") || cat.includes("condimento")) return "🌿";
    if (cat.includes("bebida")) return "🥤";
    if (cat.includes("panaderia")) return "🍞";
    if (cat.includes("chile")) return "🌶️";
    if (cat.includes("salsa") || cat.includes("base")) return "🥣";
  }

  // 5. Fallback final
  return "🍽️";
}