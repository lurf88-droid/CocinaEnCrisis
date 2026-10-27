import {
  CATALOGO_INGREDIENTES,
} from './catalogo-ingredientes';

import type {
  Receta,
} from '@/types/receta';


// ======================================================
// 🇲🇽 NACIONAL
// ======================================================

import {
  HUEVOS_RANCHEROS,
} from './recetas/desayunos_mexicanos/nacional/huevos-rancheros';

import {
  ENFRIJOLADAS_MEXICANAS,
} from './recetas/desayunos_mexicanos/nacional/enfrijoladas-mexicanas';

import {
  MOLLETES_MEXICANOS,
} from './recetas/desayunos_mexicanos/nacional/molletes-mexicanos';

import {
  HUEVOS_MEXICANA,
} from './recetas/desayunos_mexicanos/nacional/huevos-mexicana';


// ======================================================
// 🏙 CIUDAD DE MÉXICO
// ======================================================

import {
  CHILAQUILES_VERDES_POLLO,
} from './recetas/desayunos_mexicanos/ciudad_de_mexico/chilaquiles-verdes-pollo';

import {
  CHILAQUILES_ROJOS_POLLO,
} from './recetas/desayunos_mexicanos/ciudad_de_mexico/chilaquiles-rojos-pollo';

import {
  GUAJOLOTA,
} from './recetas/desayunos_mexicanos/ciudad_de_mexico/guajolota';

import {
  TLACOYOS,
} from './recetas/desayunos_mexicanos/ciudad_de_mexico/tlacoyos';

import {
  TACOS_CANASTA_CHICHARRON,
} from './recetas/desayunos_mexicanos/ciudad_de_mexico/tacos-canasta-chicharron';


// ======================================================
// 🌿 CHIAPAS
// ======================================================

import {
  MACHACA_HUEVO_CHIAPACORCENA,
} from './recetas/desayunos_mexicanos/chiapas/machaca-huevo-chiapacorcena';

import {
  PAN_COMPUESTO_COMITECO,
} from './recetas/desayunos_mexicanos/chiapas/pan-compuesto-comiteco';

import {
  PICTE_ELOTE_CHIAPANECO,
} from './recetas/desayunos_mexicanos/chiapas/picte-elote-chiapaneco';

import {
  TAMAL_BOLA_CHIAPANECO,
} from './recetas/desayunos_mexicanos/chiapas/tamal-bola-chiapaneco';

import {
  TAMAL_CAMBRAY_CHIAPANECO,
} from './recetas/desayunos_mexicanos/chiapas/tamal-cambray-chiapaneco';

import {
  TAMAL_CHIPILIN_QUESO,
} from './recetas/desayunos_mexicanos/chiapas/tamal-chipilin-queso';

import {
  TAMAL_JUACANE_CHIAPANECO,
} from './recetas/desayunos_mexicanos/chiapas/tamal-juacane-chiapaneco';


// ======================================================
// 🌋 PUEBLA
// ======================================================

import {
  CHALUPAS_POBLANAS,
} from './recetas/desayunos_mexicanos/puebla/chalupas-poblanas';

import {
  MOLOTES_POBLANOS,
} from './recetas/desayunos_mexicanos/puebla/molotes-poblanos';

import {
  MEMELAS_POBLANAS,
} from './recetas/desayunos_mexicanos/puebla/memelas-poblanas';

import {
  TLAYOYOS_POBLANOS,
} from './recetas/desayunos_mexicanos/puebla/tlayoyos-poblanos';

import {
  TAMALES_FRIJOL_POBLANOS,
} from './recetas/desayunos_mexicanos/puebla/tamales-frijol-poblanos';

import {
  CEMITA_POBLANA,
} from './recetas/desayunos_mexicanos/puebla/cemita_poblana';


// ======================================================
// 🫔 OAXACA
// ======================================================

import {
  MEMELAS_OAXAQUENAS,
} from './recetas/desayunos_mexicanos/oaxaca/memelas-oaxaquenas';

import {
  TAMAL_CHEPIL_OAXAQUENO,
} from './recetas/desayunos_mexicanos/oaxaca/tamal-chepil-oaxaqueno';

import {
  TAMAL_OAXAQUENO_MOLE_NEGRO,
} from './recetas/desayunos_mexicanos/oaxaca/tamal-oaxaqueno-mole-negro';

import {
  EMPANADA_OAXAQUENA_MOLE_AMARILLO,
} from './recetas/desayunos_mexicanos/oaxaca/empanada-oaxaquena-mole-amarillo';

import {
  ENMOLADAS_OAXAQUENAS_MOLE_NEGRO_HUEVO,
} from './recetas/desayunos_mexicanos/oaxaca/enmoladas-oaxaquenas-mole-negro-huevo';

import {
  ENFRIJOLADAS_OAXAQUENAS_TASAJO,
} from './recetas/desayunos_mexicanos/oaxaca/enfrijoladas-oaxaquenas-tasajo';


// ======================================================
// ☕ VERACRUZ
// ======================================================

import {
  PICADAS_VERACRUZANAS,
} from './recetas/desayunos_mexicanos/veracruz/picadas-veracruzanas';

import {
  CAFE_LECHERO_VERACRUZANO,
} from './recetas/desayunos_mexicanos/veracruz/cafe-lechero-veracruzano';

import {
  HUEVOS_TIRADOS,
} from './recetas/desayunos_mexicanos/veracruz/huevos-tirados';

import {
  BOCOLES_VERACRUZANOS,
} from './recetas/desayunos_mexicanos/veracruz/bocoles-veracruzanos';

import {
  GORDITAS_VERACRUZANAS,
} from './recetas/desayunos_mexicanos/veracruz/gorditas-veracruzanas';

import {
  TAMALES_VERACRUZANOS_FRIJOL,
} from './recetas/desayunos_mexicanos/veracruz/tamales-veracruzanos-frijol';


// ======================================================
// 🌴 YUCATÁN
// ======================================================

import {
  HUEVOS_MOTULENOS,
} from './recetas/desayunos_mexicanos/yucatan/huevos-motulenos';


// ======================================================
// 🇲🇽 COCINA MEXICANA
// ======================================================

import {
  TINGA_POLLO,
} from './recetas/mexicana/tinga-pollo';

import {
  CHILE_EN_NOGADA,
} from './recetas/mexicana/chile-en-nogada';

import {
  BIRRIA_JALISCO,
} from './recetas/mexicana/birria-jalisco';

import {
  AGUACHILE_SINALOA,
} from './recetas/mexicana/aguachile-sinaloa';

import {
  TACOS_AL_PASTOR,
} from './recetas/mexicana/tacos-al-pastor';

import {
  CALDO_POLLO,
} from './recetas/mexicana/caldo-pollo';

import {
  SOPA_TORTILLA,
} from './recetas/mexicana/sopa-tortilla';

import {
  TAMALES_MOLE,
} from './recetas/mexicana/tamales-mole';

import {
  QUESADILLAS_HUITLACOCHE,
} from './recetas/mexicana/quesadillas-huitlacoche';

import {
  POZOLE_ROJO,
} from './recetas/mexicana/pozole-rojo';

import {
  COCHINITA_PIBIL,
} from './recetas/mexicana/cochinita-pibil';

import {
  MOLE_POBLANO,
} from './recetas/mexicana/mole-poblano';

import {
  BARBACOA_MEXICANA,
} from './recetas/mexicana/barbacoa-mexicana';

import {
  CARNITAS_TRADICIONALES,
} from './recetas/mexicana/carnitas-tradicionales';


// ======================================================
// 🌶 DESAYUNOS MEXICANOS GENERALES
// ======================================================

import {
  ENCHILADAS_VERDES_POLLO,
} from './recetas/desayunos_mexicanos/enchiladas-verdes-pollo';

import {
  ENCHILADAS_ROJAS_POLLO,
} from './recetas/desayunos_mexicanos/enchiladas-rojas-pollo';


// ======================================================
// 🍳 RECETAS GENERALES
// ======================================================

import {
  ARROZ_HUEVO,
} from './recetas/arroz-huevo';

import {
  BURRITO_FRIJOL,
} from './recetas/burrito-frijol';



import {
  PAPAS_HUEVO,
} from './recetas/papas-huevo';

import {
  QUESADILLAS_OAXACA,
} from './recetas/quesadillas-oaxaca';

import {
  SINCRONIZADAS,
} from './recetas/sincronizadas';

import {
  SOPA_PASTA_JITOMATE,
} from './recetas/sopa-pasta-jitomate';

import {
  TACOS_DORADOS_PAPA,
} from './recetas/tacos-dorados-papa';

import {
  TOSTADAS_ATUN,
} from './recetas/tostadas-atun';

import {
  LASAGNA_CASERA,
} from './recetas/lasagna-casera';

import {
  CREMA_CHAMPINONES,
} from './recetas/crema-champinones';

import {
  QUICHE_LORRAINE,
} from './recetas/quiche-lorraine';

//AGUAS//
import { AGUA_LIMON_CHIA } from './recetas/bebidas/aguas/agua-limon-chia';
import { AGUA_HORCHATA } from './recetas/bebidas/aguas/agua-horchata';
import { AGUA_JAMAICA } from './recetas/bebidas/aguas/agua-jamaica';
import { AGUA_TAMARINDO } from './recetas/bebidas/aguas/agua-tamarindo';
import { AGUA_SANDIA } from './recetas/bebidas/aguas/agua-sandia';
import { AGUA_MELON } from './recetas/bebidas/aguas/agua-melon';
import { AGUA_PEPINO_LIMON } from './recetas/bebidas/aguas/agua-pepino-limon';
import { AGUA_FRESA } from './recetas/bebidas/aguas/agua-fresa';
import { AGUA_PINA } from './recetas/bebidas/aguas/agua-pina';
import { AGUA_GUAYABA_LIMON } from './recetas/bebidas/aguas/agua-guayaba-limon';
import { AGUA_MANGO_CHILE } from './recetas/bebidas/aguas/agua-mango-chile';
import { AGUA_JENGIBRE_MENTA } from './recetas/bebidas/aguas/agua-jengibre-menta';
import { AGUA_COCO_LIMON } from './recetas/bebidas/aguas/agua-coco-limon';
import { AGUA_JAMAICA_JENGIBRE } from './recetas/bebidas/aguas/agua-jamaica-jengibre';
import { AGUA_MARACUYA } from './recetas/bebidas/aguas/agua-maracuya';
import { LIMONADA_COCO } from './recetas/bebidas/aguas/limonada-coco';
import { AGUA_TUNA_ROJA } from './recetas/bebidas/aguas/agua-tuna-roja';
import { LIMONADA_LAVANDA } from './recetas/bebidas/aguas/limonada-lavanda';
import { TE_HELADO_FRUTOS_ROJOS } from './recetas/bebidas/aguas/te-helado-frutos-rojos';
import { AGUA_CHIA_MANGO_COCO } from './recetas/bebidas/aguas/agua-chia-mango-coco';
import { AGUA_TAMARINDO_CHIPOTLE } from './recetas/bebidas/aguas/agua-tamarindo-chipotle';
import { AGUA_CAJETA } from './recetas/bebidas/aguas/agua-cajeta';
import { HORCHATA_FRESA } from './recetas/bebidas/aguas/horchata-fresa';
import { AGUA_FRUTAS } from './recetas/bebidas/aguas/agua-frutas';
import { AGUA_LIMON_PEPINO_CHIA } from './recetas/bebidas/aguas/agua-limon-pepino-chia';
import { AGUA_MANGO_MARACUYA } from './recetas/bebidas/aguas/agua-mango-maracuya';
//LICUADOS//
import {
  LICUADO_PLATANO,
} from './recetas/bebidas/licuados/licuado-platano';
import { LICUADO_AVENA_PLATANO } from './recetas/bebidas/licuados/licuado-avena-platano';


//CAFES//
import { CAFE_DE_OLLA } from './recetas/bebidas/cafes/cafe-de-olla';


//SNACKS//
import { GUACAMOLE_TRADICIONAL } from './recetas/snacks/guacamole-tradicional';


//VEGETARIANOS//
import { TORTITAS_BROCOLI } from './recetas/vegetarianos/tortitas-brocoli';


//ENSALADAS//
import { ENSALADA_HUERTA } from './recetas/ensaladas/ensalada-huerta';
import { ENSALADA_CESAR } from './recetas/ensaladas/ensalada-cesar';
import { ENSALADA_ATUN_ELOTE } from './recetas/ensaladas/ensalada-atun-elote';
import { ENSALADA_BETABEL_NUEZ } from './recetas/ensaladas/ensalada-betabel-nuez';
import { ENSALADA_POLLO_AGUACATE } from './recetas/ensaladas/ensalada-pollo-aguacate';
import { ENSALADA_RUSA } from './recetas/ensaladas/ensalada-rusa';
import { ENSALADA_ESPINACA_FRESA } from './recetas/ensaladas/ensalada-espinaca-fresa';
import { ENSALADA_CODITOS } from './recetas/ensaladas/ensalada-coditos';
import { ENSALADA_GARBANZOS } from './recetas/ensaladas/ensalada-garbanzos';
import { ENSALADA_MANZANA } from './recetas/ensaladas/ensalada-manzana';
import { ENSALADA_NOPALES } from './recetas/ensaladas/ensalada-nopales';
import { ENSALADA_ELOTE_CALABACITA } from './recetas/ensaladas/ensalada-elote-calabacita';
import { ENSALADA_LENTEJAS } from './recetas/ensaladas/ensalada-lentejas';
import { ENSALADA_CAMARON } from './recetas/ensaladas/ensalada-camaron';
import { ENSALADA_PERA_NUEZ } from './recetas/ensaladas/ensalada-pera-nuez';
import { ENSALADA_BISTEC } from './recetas/ensaladas/ensalada-bistec';
import { ENSALADA_POLLO_PARRILLA } from './recetas/ensaladas/ensalada-pollo-parrilla';
import { ENSALADA_PAPA_HUEVO } from './recetas/ensaladas/ensalada-papa-huevo';
import { AGUACATE_RELLENO_ATUN } from './recetas/ensaladas/aguacate-relleno-atun';
//POSTRES//
import { PLATANOS_FRITOS_CREMA } from './recetas/postres/platanos-fritos-crema';
// ======================================================
// 📚 RECETARIO CENTRAL
// ======================================================

/**
 * Cantidades expresadas usando las unidades
 * soportadas por el catálogo.
 */
export const RECETAS: Receta[] = [

  // ====================================================
  // 🇲🇽 MEXICANA
  // ====================================================

  TINGA_POLLO,
  CHILE_EN_NOGADA,
  BIRRIA_JALISCO,
  AGUACHILE_SINALOA,
  TACOS_AL_PASTOR,
  CALDO_POLLO,
  POZOLE_ROJO,
  TAMALES_MOLE,
  SOPA_TORTILLA,
  QUESADILLAS_HUITLACOCHE,
  MOLE_POBLANO,
  COCHINITA_PIBIL,
  CARNITAS_TRADICIONALES,
  BARBACOA_MEXICANA,


  // ====================================================
  // 🇲🇽 NACIONAL
  // ====================================================

  HUEVOS_MEXICANA,
  HUEVOS_RANCHEROS,
  MOLLETES_MEXICANOS,
  ENFRIJOLADAS_MEXICANAS,
  ENCHILADAS_VERDES_POLLO,
  ENCHILADAS_ROJAS_POLLO,


  // ====================================================
  // 🏙 CIUDAD DE MÉXICO
  // ====================================================

  CHILAQUILES_VERDES_POLLO,
  CHILAQUILES_ROJOS_POLLO,
  GUAJOLOTA,
  TLACOYOS,
  TACOS_CANASTA_CHICHARRON,


  // ====================================================
  // 🌴 YUCATÁN
  // ====================================================

  HUEVOS_MOTULENOS,


  // ====================================================
  // 🫔 OAXACA
  // ====================================================

  MEMELAS_OAXAQUENAS,
  TAMAL_CHEPIL_OAXAQUENO,
  TAMAL_OAXAQUENO_MOLE_NEGRO,
  EMPANADA_OAXAQUENA_MOLE_AMARILLO,
  ENMOLADAS_OAXAQUENAS_MOLE_NEGRO_HUEVO,
  ENFRIJOLADAS_OAXAQUENAS_TASAJO,


  // ====================================================
  // ☕ VERACRUZ
  // ====================================================

  PICADAS_VERACRUZANAS,
  CAFE_LECHERO_VERACRUZANO,
  HUEVOS_TIRADOS,
  BOCOLES_VERACRUZANOS,
  GORDITAS_VERACRUZANAS,
  TAMALES_VERACRUZANOS_FRIJOL,


  // ====================================================
  // 🌋 PUEBLA
  // ====================================================

  CHALUPAS_POBLANAS,
  MOLOTES_POBLANOS,
  MEMELAS_POBLANAS,
  TLAYOYOS_POBLANOS,
  TAMALES_FRIJOL_POBLANOS,
  CEMITA_POBLANA,


  // ====================================================
  // 🌿 CHIAPAS
  // ====================================================

  MACHACA_HUEVO_CHIAPACORCENA,
  PAN_COMPUESTO_COMITECO,
  PICTE_ELOTE_CHIAPANECO,
  TAMAL_BOLA_CHIAPANECO,
  TAMAL_CAMBRAY_CHIAPANECO,
  TAMAL_CHIPILIN_QUESO,
  TAMAL_JUACANE_CHIAPANECO,


  // ====================================================
  // 🍳 GENERALES
  // ====================================================

  ARROZ_HUEVO,
  QUESADILLAS_OAXACA,
  BURRITO_FRIJOL,
  PAPAS_HUEVO,

  TOSTADAS_ATUN,
  LICUADO_PLATANO,
  SINCRONIZADAS,
  SOPA_PASTA_JITOMATE,
  TACOS_DORADOS_PAPA,

  LASAGNA_CASERA,
  CREMA_CHAMPINONES,
  QUICHE_LORRAINE,
//AGUAS//
AGUA_LIMON_CHIA,
AGUA_HORCHATA,
  AGUA_JAMAICA,
   AGUA_TAMARINDO,
  AGUA_SANDIA,
  AGUA_MELON,
  AGUA_PEPINO_LIMON,
  AGUA_FRESA,
  AGUA_PINA,
 AGUA_GUAYABA_LIMON,
  AGUA_MANGO_CHILE,
  AGUA_JENGIBRE_MENTA,
  AGUA_COCO_LIMON,
  AGUA_JAMAICA_JENGIBRE,
  AGUA_MARACUYA,
   LIMONADA_COCO,
  AGUA_TUNA_ROJA,
  LIMONADA_LAVANDA,
  TE_HELADO_FRUTOS_ROJOS,
  AGUA_CHIA_MANGO_COCO,
  AGUA_TAMARINDO_CHIPOTLE,
    AGUA_CAJETA,
  HORCHATA_FRESA,
  AGUA_FRUTAS,
  AGUA_LIMON_PEPINO_CHIA,
  AGUA_MANGO_MARACUYA,


//LICUADOS//
  LICUADO_AVENA_PLATANO,
LICUADO_PLATANO,
  //CAFES//
   CAFE_DE_OLLA,
//snacks//
GUACAMOLE_TRADICIONAL,
//VEGETARIANO//
TORTITAS_BROCOLI,

//ENSALADAS//
ENSALADA_HUERTA,
ENSALADA_ATUN_ELOTE,
ENSALADA_BETABEL_NUEZ,
ENSALADA_CESAR,
 ENSALADA_POLLO_AGUACATE,
  ENSALADA_RUSA,
  ENSALADA_ESPINACA_FRESA,
 ENSALADA_CODITOS,
  ENSALADA_GARBANZOS,
  ENSALADA_MANZANA,
   ENSALADA_NOPALES,
  ENSALADA_ELOTE_CALABACITA,
  ENSALADA_LENTEJAS,
 ENSALADA_CAMARON,
  ENSALADA_PERA_NUEZ,
  ENSALADA_BISTEC,
  ENSALADA_POLLO_PARRILLA,
  ENSALADA_PAPA_HUEVO,
  AGUACATE_RELLENO_ATUN,


//POSTRES//

PLATANOS_FRITOS_CREMA,
];



// ======================================================
// 🔤 NORMALIZAR INGREDIENTE
// ======================================================

export function normalizarIngrediente(
  texto: string
): string {

  return texto
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .replace(
      /[^a-z0-9_\s]/g,
      ''
    )
    .replace(
      /\s+/g,
      ' '
    );

}


// ======================================================
// 🔎 RESOLVER ID DE INGREDIENTE
// ======================================================

export function resolverIdIngrediente(
  texto: string
): string | null {

  const normalizado =
    normalizarIngrediente(
      texto
    );


  if (!normalizado) {
    return null;
  }


  // ====================================================
  // 1. ID EXACTO
  // ====================================================

  const porId =
    CATALOGO_INGREDIENTES.find(
      item =>
        normalizarIngrediente(
          item.id
        ) === normalizado
    );


  if (porId) {
    return porId.id;
  }


  // ====================================================
  // 2. NOMBRE EXACTO
  // ====================================================

  const porNombre =
    CATALOGO_INGREDIENTES.find(
      item =>
        normalizarIngrediente(
          item.nombre
        ) === normalizado
    );


  if (porNombre) {
    return porNombre.id;
  }


  // ====================================================
  // 3. ALIAS EXACTO
  // ====================================================

  const porAlias =
    CATALOGO_INGREDIENTES.find(
      item =>
        item.aliases.some(
          alias =>
            normalizarIngrediente(
              alias
            ) === normalizado
        )
    );


  if (porAlias) {
    return porAlias.id;
  }


  // ====================================================
  // 4. COINCIDENCIA COMPUESTA
  // ====================================================

  /*
    Casos como:

    "pechuga de pollo fresca"
    "queso oaxaca rallado"

    pueden resolverse usando la coincidencia
    válida más específica.

    Evitamos frases menores a 4 caracteres
    para reducir falsos positivos.
  */

  const candidatos =
    CATALOGO_INGREDIENTES
      .map(
        item => {

          const opciones = [
            item.nombre,
            ...item.aliases,
          ]
            .map(
              opcion =>
                normalizarIngrediente(
                  opcion
                )
            )
            .filter(
              opcion =>
                opcion.length >= 4
            );


          const coincidencia =
            opciones
              .filter(
                opcion =>
                  normalizado.includes(
                    opcion
                  )
              )
              .sort(
                (a, b) =>
                  b.length -
                  a.length
              )[0];


          return {
            item,
            coincidencia,
          };

        }
      )
      .filter(
        candidato =>
          Boolean(
            candidato.coincidencia
          )
      )
      .sort(
        (a, b) =>
          (
            b.coincidencia
              ?.length ??
            0
          ) -
          (
            a.coincidencia
              ?.length ??
            0
          )
      );


  return (
    candidatos[0]
      ?.item
      .id ??
    null
  );

}


// ======================================================
// 💰 FORMATEAR PRECIO
// ======================================================

export function formatearPrecio(
  monto: number
): string {

  const montoSeguro =
    Number.isFinite(
      monto
    )
      ? Math.max(
          0,
          monto
        )
      : 0;


  return (
    `$${montoSeguro.toFixed(
      montoSeguro % 1 === 0
        ? 0
        : 2
    )} MXN`
  );

}