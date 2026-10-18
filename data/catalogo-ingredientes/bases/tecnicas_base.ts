import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';

/**
 * 🍳 COCINA EN CRISIS
 *
 * Catálogo: Técnicas base
 *
 * Propósito:
 * Preparaciones que representan una técnica
 * culinaria más que un ingrediente común.
 *
 * Incluye:
 * - Roux
 * - Bases de transformación
 * - Preparaciones técnicas
 *
 * Estado:
 * 🔄 En proceso de migración y limpieza
 */
import { SABOR_BASE } from '@/types/saborBase';
export const TECNICAS_BASE: IngredienteCatalogo[] = [
    {
    id:'roux',
    
    
    nombre:'Roux',
    
    
    aliases:[
    'roux',
    'mezcla harina mantequilla',
    'espesante mantequilla harina'
    ],
    
    
    precioUnitario:70,
    
    
    unidad:'kg',
    
    
    precio:{
    minimo:50,
    promedio:70,
    maximo:120,
    moneda:'MXN',
    actualizado:'2026-08'
    },
    
    
    categoria:'bases_culinarias',
    
    
    subcategoria:'tecnicas_base',
    
    
    basico:false,
    
    
    tags:[
    'chef',
    'frances',
    'espesante',
    'tecnica'
    ],
    
    
    cocinas:[
    'francesa',
    'internacional'
    ],
    
    
    tecnicas:[
    'tostar_harina',
    'espesar',
    'control_calor'
    ],
    
    
    nivel:'intermedio',
    
    
    familias:[
    'bases_culinarias',
    'espesantes',
    'tecnicas_chef'
    ],
    
    
    usos:[
    'bechamel',
    'veloute',
    'salsas',
    'cremas'
    ],
    
    
    roles:[
    'espesante',
    'textura',
    'base_salsa'
    ],
    
    
    combinaCon:[
    'harina',
    'mantequilla',
    'leche',
   'fondo_oscuro_res'
    ],
    
    
    sustitutos:[
    'fecula_maiz',
    'harina_tostada'
    ],
    
    
    sustitutosEconomicos:[
    'harina_simple',
    'maicena'
    ],
    
    
    perfilSabor:{
    ...SABOR_BASE,
    
    dulce:1,
    acido:0,
    salado:1,
    amargo:1,
    umami:1,
    picante:0,
    
    ahumado:1,
    graso:5,
    fresco:0,
    aromatico:2
    },
    
    
    sabores:[
    'mantequilla',
    'tostado'
    ],
    
    
    texturas:[
    'pastosa',
    'espesa'
    ],
    
    
    temporada:[
    'todo_el_año'
    ],
    
    
    conservacion:
    
'recipiente_hermetico',
    
    
    recetasCompatibles:[
    'bechamel',
    'veloute',
    'salsas_cremosas'
    ]
    
    },
     ];