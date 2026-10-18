import { useMemo, useState } from 'react';

import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { ChefShoppingOpportunityCard } from '@/components/chef/ChefShoppingOpportunityCard';
import { PantrySection } from '@/components/home/PantrySection';

import { AppText } from '@/components/ui/AppText';

import { useCiudad } from '@/hooks/use-ciudad';
import { useIngredientes } from '@/context/IngredientesContext';

import { ChefEngine } from '@/services/chef-engine';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


// ======================================================
// 🧺 DESPENSA
// ======================================================

export default function DespensaScreen() {

const {
  ingredientes,
  agregarIngrediente,
  eliminarIngrediente,
  presupuesto: presupuestoNum,
  setPresupuesto,
} = useIngredientes();

  const {
    buscarRecetas,
  } = useCiudad();


  const [
    ingrediente,
    setIngrediente,
  ] = useState('');


  // ====================================================
  // 🔎 RESULTADOS
  // ====================================================

  const resultados = useMemo(() => {

    if (
      ingredientes.length === 0
    ) {
      return [];
    }


    return buscarRecetas(
      ingredientes,
      presupuestoNum
    );

  }, [
    ingredientes,
    presupuestoNum,
    buscarRecetas,
  ]);


  // ====================================================
  // 🧠 CHEF LUNA
  // ====================================================

  const dashboard =
    ChefEngine.dashboard({

      resultados,

      presupuesto:
        presupuestoNum,

      /*
        Aquí usamos Crisis porque la despensa
        responde a la pregunta:

        "Con esto que tengo, ¿qué puedo hacer?"
      */

      modo:
        'crisis',

    });


  const {
    mejorReceta,
    recetasListas,
    recetasParciales,
    desbloqueo,
    estadisticas,
  } = dashboard;

// ====================================================
// 💰 CONTROL DE PRESUPUESTO
// ====================================================

const bajarPresupuesto = () => {

  setPresupuesto(
    Math.max(
      0,
      presupuestoNum - 50
    )
  );

};


const subirPresupuesto = () => {

  setPresupuesto(
    presupuestoNum + 50
  );

};
  // ====================================================
  // 🔓 OPORTUNIDAD
  // ====================================================

  const recetaOportunidad =
    desbloqueo?.recetasNuevas?.length
      ? (
          resultados.find(
            receta =>
              receta.titulo ===
              desbloqueo.recetasNuevas[0]
          ) ?? null
        )
      : null;


  // ====================================================
  // ⚡ INGREDIENTES RÁPIDOS
  // ====================================================

  const ingredientesRapidos = [

    'huevo',
    'tortilla',
    'jitomate',
    'frijol',
    'queso',
    'arroz',
    'papa',
    'cebolla',

  ];


  // ====================================================
  // 📊 ESTADO VISUAL
  // ====================================================

  const porcentajePotencial =
    ingredientes.length === 0
      ? 0
      : Math.min(
          100,
          Math.round(
            (
              recetasListas.length /
              Math.max(
                1,
                resultados.length
              )
            ) * 100
          )
        );


  const mensajeDespensa =
    ingredientes.length === 0
      ? 'Agrega lo que tienes en casa y Chef Luna empezará a encontrar posibilidades.'
      : recetasListas.length > 0
        ? `Ya puedes cocinar ${recetasListas.length} ${
            recetasListas.length === 1
              ? 'receta'
              : 'recetas'
          } con tu despensa actual.`
        : estadisticas.casiListas > 0
          ? `Estás muy cerca: ${estadisticas.casiListas} ${
              estadisticas.casiListas === 1
                ? 'receta está'
                : 'recetas están'
            } a solo un ingrediente.`
          : 'Chef Luna está buscando la mejor combinación con lo que tienes.';


  // ====================================================
  // 🎨 UI
  // ====================================================

  return (

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >


      {/* =================================================
          HERO
      ================================================= */}


      <View style={styles.hero}>


        <View style={styles.heroTop}>


          <View style={styles.heroIcon}>

            <MaterialCommunityIcons
              name="basket-outline"
              size={28}
              color="#F2B35B"
            />

          </View>


          <View style={styles.heroTitleWrap}>

            <AppText style={styles.eyebrow}>
              TU COCINA
            </AppText>

            <AppText style={styles.heroTitle}>
              Mi despensa
            </AppText>

          </View>


          <View style={styles.budgetControl}>

  <AppText style={styles.budgetLabel}>
    PRESUPUESTO
  </AppText>


  <View style={styles.budgetRow}>


    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.budgetButton}
      onPress={bajarPresupuesto}
    >

      <MaterialCommunityIcons
        name="minus"
        size={17}
        color="#F2B35B"
      />

    </TouchableOpacity>


    <View style={styles.budgetValueWrap}>

      <AppText style={styles.budgetValue}>
        ${Math.round(presupuestoNum)}
      </AppText>

    </View>


    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.budgetButton}
      onPress={subirPresupuesto}
    >

      <MaterialCommunityIcons
        name="plus"
        size={17}
        color="#F2B35B"
      />

    </TouchableOpacity>


  </View>

</View>


        </View>


        <AppText style={styles.heroDescription}>
          {mensajeDespensa}
        </AppText>


        <View style={styles.statsRow}>


          <View style={styles.statItem}>

            <AppText style={styles.statValue}>
              {ingredientes.length}
            </AppText>

            <AppText style={styles.statLabel}>
              ingredientes
            </AppText>

          </View>


          <View style={styles.statDivider} />


          <View style={styles.statItem}>

            <AppText style={styles.statValue}>
              {recetasListas.length}
            </AppText>

            <AppText style={styles.statLabel}>
              listas
            </AppText>

          </View>


          <View style={styles.statDivider} />


          <View style={styles.statItem}>

            <AppText style={styles.statValue}>
              {estadisticas.casiListas}
            </AppText>

            <AppText style={styles.statLabel}>
              casi listas
            </AppText>

          </View>


        </View>


      </View>


      {/* =================================================
          POTENCIAL
      ================================================= */}


      {ingredientes.length > 0 && (

        <View style={styles.potentialCard}>


          <View style={styles.potentialHeader}>


            <View>

              <AppText style={styles.sectionEyebrow}>
                POTENCIAL DE TU DESPENSA
              </AppText>

              <AppText style={styles.potentialTitle}>
                {recetasListas.length > 0
                  ? 'Ya tienes opciones reales'
                  : 'Todavía podemos desbloquear más'}
              </AppText>

            </View>


            <View style={styles.potentialPercentWrap}>

              <AppText style={styles.potentialPercent}>
                {porcentajePotencial}%
              </AppText>

            </View>


          </View>


          <View style={styles.progressTrack}>

            <View
              style={[
                styles.progressFill,
                {
                  width:
                    `${porcentajePotencial}%`,
                },
              ]}
            />

          </View>


          <View style={styles.potentialFooter}>


            <View style={styles.potentialMiniItem}>

              <MaterialCommunityIcons
                name="check-circle-outline"
                size={17}
                color="#8FB276"
              />

              <AppText style={styles.potentialMiniText}>
                {recetasListas.length} para cocinar
              </AppText>

            </View>


            <View style={styles.potentialMiniItem}>

              <MaterialCommunityIcons
                name="lock-open-variant-outline"
                size={17}
                color="#F2B35B"
              />

              <AppText style={styles.potentialMiniText}>
                {estadisticas.casiListas} a 1 ingrediente
              </AppText>

            </View>


          </View>


        </View>

      )}


      {/* =================================================
          CONTROL DE DESPENSA
      ================================================= */}


      <View style={styles.section}>


        <View style={styles.sectionHeader}>


          <View>

            <AppText style={styles.sectionEyebrow}>
              LO QUE TIENES
            </AppText>

            <AppText style={styles.sectionTitle}>
              Ingredientes
            </AppText>

          </View>


          <View style={styles.countBadge}>

            <AppText style={styles.countBadgeText}>
              {ingredientes.length}
            </AppText>

          </View>


        </View>


        <View style={styles.pantryPanel}>

          <PantrySection

            ingredientesRapidos={
              ingredientesRapidos
            }

            ingredientes={
              ingredientes
            }

            ingrediente={
              ingrediente
            }

            setIngrediente={
              setIngrediente
            }

            agregarIngrediente={
              agregarIngrediente
            }

            eliminarIngrediente={
              eliminarIngrediente
            }

          />

        </View>


      </View>


      {/* =================================================
          SALVAME LA COMIDA
      ================================================= */}


      {ingredientes.length > 0 && (

        <TouchableOpacity

          activeOpacity={0.88}

          style={styles.crisisButton}

          onPress={() => {

            const receta =
              ChefEngine.salvameLaComida(
                resultados
              );


            if (!receta) {
  Alert.alert(
    'Chef Luna necesita un poco más',
    'Todavía no encuentro una receta suficientemente buena con tu despensa y presupuesto. Agrega uno o dos ingredientes más o ajusta tu presupuesto.'
  );

  return;
}


            router.push({

              pathname:
                '/receta/[id]',

              params: {
                id:
                  receta.id,
              },

            });

          }}

        >


          <View style={styles.crisisIconWrap}>

            <MaterialCommunityIcons
              name="chef-hat"
              size={29}
              color="#FFF6E9"
            />

          </View>


          <View style={styles.crisisContent}>

            <AppText style={styles.crisisEyebrow}>
              CRISIS CULINARIA
            </AppText>

            <AppText style={styles.crisisTitle}>
              Chef Luna, decide por mí
            </AppText>

            <AppText style={styles.crisisSubtitle}>
              Usa mi despensa y elige una receta
            </AppText>

          </View>


          <MaterialCommunityIcons
            name="arrow-right"
            size={26}
            color="#FFF6E9"
          />


        </TouchableOpacity>

      )}


      {/* =================================================
          MEJOR OPCIÓN ACTUAL
      ================================================= */}


      {mejorReceta && (

        <View style={styles.quickDecisionCard}>


          <View style={styles.quickDecisionTop}>


            <View style={styles.quickBadge}>

              <MaterialCommunityIcons
                name="star-four-points"
                size={14}
                color="#F2B35B"
              />

              <AppText style={styles.quickBadgeText}>
                MEJOR OPCIÓN AHORA
              </AppText>

            </View>


          </View>


          <AppText style={styles.quickTitle}>
            {mejorReceta.titulo}
          </AppText>


          <View style={styles.quickMetaRow}>


            <View style={styles.quickMeta}>

              <MaterialCommunityIcons
                name="check-decagram-outline"
                size={17}
                color="#8FB276"
              />

              <AppText style={styles.quickMetaText}>
                {mejorReceta.compatibilidad}% compatible
              </AppText>

            </View>


     

            <View style={styles.quickMeta}>

              <MaterialCommunityIcons
                name="cash"
                size={17}
                color="#F2B35B"
              />

              <AppText style={styles.quickMetaText}>
                ${Math.round(mejorReceta.costoTotal)}
              </AppText>

            </View>


          </View>


          <TouchableOpacity

            activeOpacity={0.84}

            style={styles.quickButton}

            onPress={() => {

              router.push({

                pathname:
                  '/receta/[id]',

                params: {
                  id:
                    mejorReceta.id,
                },

              });

            }}

          >

            <AppText style={styles.quickButtonText}>
              Ver receta
            </AppText>

            <MaterialCommunityIcons
              name="arrow-right"
              size={19}
              color="#20120A"
            />

          </TouchableOpacity>


        </View>

      )}


      


      {/* =================================================
          COMPRA ESTRATÉGICA
      ================================================= */}


      {desbloqueo && (

        <View style={styles.section}>


          <View style={styles.sectionHeader}>


            <View>

              <AppText style={styles.sectionEyebrow}>
                CHEF LUNA SUGIERE
              </AppText>

              <AppText style={styles.sectionTitle}>
                Compra estratégica
              </AppText>

            </View>


          </View>


          <ChefShoppingOpportunityCard

            compra={{
              ingrediente:
                desbloqueo.ingrediente,

              cantidad:
                desbloqueo.cantidad,

              costo:
                desbloqueo.costo,

              razon:
                desbloqueo.razon,
            }}

            onPress={() => {

              if (!recetaOportunidad) {
                return;
              }


              router.push({

                pathname:
                  '/receta/[id]',

                params: {

                  id:
                    recetaOportunidad.id,

                  modo:
                    'oportunidad',

                  ingrediente:
                    desbloqueo.ingrediente,

                },

              });

            }}

          />


        </View>

      )}


      {/* =================================================
          ESTADO VACÍO
      ================================================= */}


      {ingredientes.length === 0 && (

        <View style={styles.emptyState}>


          <View style={styles.emptyIcon}>

            <MaterialCommunityIcons
              name="fridge-outline"
              size={34}
              color="#F2B35B"
            />

          </View>


          <AppText style={styles.emptyTitle}>
            Tu despensa empieza aquí
          </AppText>


          <AppText style={styles.emptyText}>
            Agrega ingredientes comunes de tu cocina. Chef Luna usará esa información para descubrir qué puedes cocinar hoy.
          </AppText>


        </View>

      )}


      {/* =================================================
          RESUMEN FINAL
      ================================================= */}


      {ingredientes.length > 0 && (

        <View style={styles.footerInsight}>


          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            size={22}
            color="#F2B35B"
          />


          <View style={styles.footerInsightContent}>

            <AppText style={styles.footerInsightTitle}>
              Tu despensa está trabajando
            </AppText>

            <AppText style={styles.footerInsightText}>
              Chef Luna encontró {resultados.length} coincidencias, {recetasListas.length} listas y {recetasParciales.length} oportunidades por completar.
            </AppText>

          </View>


        </View>

      )}


    </ScrollView>

  );

}


// ======================================================
// 🎨 ESTILOS
// ======================================================

const styles =
  StyleSheet.create({


    container: {

      paddingHorizontal:
        Spacing.xl,

      paddingTop:
        28,

      paddingBottom:
        150,

      backgroundColor:
        KitchenColors.background,

    },


    // ==================================================
    // HERO
    // ==================================================


    hero: {

      padding:
        22,

      backgroundColor:
        '#211510',

      borderRadius:
        28,

      borderWidth:
        1,

      borderColor:
        '#65452F',

      shadowColor:
        '#000',

      shadowOpacity:
        0.35,

      shadowRadius:
        18,

      shadowOffset: {
        width: 0,
        height: 10,
      },

      elevation:
        9,

    },


    heroTop: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    heroIcon: {

      width:
        52,

      height:
        52,

      borderRadius:
        17,

      backgroundColor:
        '#382419',

      borderWidth:
        1,

      borderColor:
        '#8A5A35',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        13,

    },


    heroTitleWrap: {

      flex:
        1,

    },


    eyebrow: {

      color:
        '#D68A45',

      fontSize:
        10,

      fontWeight:
        '900',

      letterSpacing:
        1.8,

    },


    heroTitle: {

      color:
        '#FFF3DD',

      fontSize:
        28,

      fontWeight:
        '900',

      marginTop:
        3,

      letterSpacing:
        -0.5,

    },


    budgetControl: {

  backgroundColor:
    '#19100C',

  borderWidth:
    1,

  borderColor:
    '#493126',

  borderRadius:
    15,

  paddingHorizontal:
    9,

  paddingVertical:
    8,

  alignItems:
    'center',

},


budgetLabel: {

  color:
    '#92755F',

  fontSize:
    7,

  fontWeight:
    '900',

  letterSpacing:
    1.2,

},


budgetRow: {

  flexDirection:
    'row',

  alignItems:
    'center',

  marginTop:
    5,

  gap:
    6,

},


budgetButton: {

  width:
    28,

  height:
    28,

  borderRadius:
    9,

  backgroundColor:
    '#2C1D16',

  borderWidth:
    1,

  borderColor:
    '#5A3D2C',

  alignItems:
    'center',

  justifyContent:
    'center',

},


budgetValueWrap: {

  minWidth:
    52,

  alignItems:
    'center',

},


budgetValue: {

  color:
    '#F2B35B',

  fontSize:
    15,

  fontWeight:
    '900',

},

    heroDescription: {

      color:
        '#D8C0A6',

      fontSize:
        15,

      lineHeight:
        23,

      marginTop:
        18,

    },


    statsRow: {

      flexDirection:
        'row',

      marginTop:
        20,

      paddingVertical:
        14,

      backgroundColor:
        '#19100C',

      borderWidth:
        1,

      borderColor:
        '#3B2920',

      borderRadius:
        17,

    },


    statItem: {

      flex:
        1,

      alignItems:
        'center',

    },


    statValue: {

      color:
        '#F2B35B',

      fontSize:
        18,

      fontWeight:
        '900',

    },


    statLabel: {

      color:
        '#987B65',

      fontSize:
        9,

      fontWeight:
        '800',

      marginTop:
        3,

      textTransform:
        'uppercase',

    },


    statDivider: {

      width:
        1,

      backgroundColor:
        '#3D2B22',

    },


    // ==================================================
    // POTENCIAL
    // ==================================================


    potentialCard: {

      marginTop:
        22,

      backgroundColor:
        '#1B1712',

      borderRadius:
        22,

      borderWidth:
        1,

      borderColor:
        '#3E3727',

      padding:
        18,

    },


    potentialHeader: {

      flexDirection:
        'row',

      justifyContent:
        'space-between',

      alignItems:
        'center',

    },


    potentialTitle: {

      color:
        '#F6E8D4',

      fontSize:
        17,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    potentialPercentWrap: {

      minWidth:
        54,

      height:
        40,

      borderRadius:
        14,

      backgroundColor:
        '#30241A',

      borderWidth:
        1,

      borderColor:
        '#705039',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    potentialPercent: {

      color:
        '#F2B35B',

      fontWeight:
        '900',

      fontSize:
        15,

    },


    progressTrack: {

      height:
        8,

      borderRadius:
        999,

      backgroundColor:
        '#35281E',

      marginTop:
        18,

      overflow:
        'hidden',

    },


    progressFill: {

      height:
        '100%',

      backgroundColor:
        '#E89A2E',

      borderRadius:
        999,

    },


    potentialFooter: {

      flexDirection:
        'row',

      flexWrap:
        'wrap',

      gap:
        12,

      marginTop:
        14,

    },


    potentialMiniItem: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        6,

    },


    potentialMiniText: {

      color:
        '#A98C74',

      fontSize:
        11,

      fontWeight:
        '700',

    },


    // ==================================================
    // SECCIONES
    // ==================================================


    section: {

      marginTop:
        30,

    },


    sectionHeader: {

      flexDirection:
        'row',

      justifyContent:
        'space-between',

      alignItems:
        'flex-end',

      marginBottom:
        14,

    },


    sectionEyebrow: {

      color:
        '#C17D48',

      fontSize:
        9,

      fontWeight:
        '900',

      letterSpacing:
        1.6,

    },


    sectionTitle: {

      color:
        '#FFF3DD',

      fontSize:
        23,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    countBadge: {

      minWidth:
        36,

      height:
        30,

      paddingHorizontal:
        10,

      borderRadius:
        999,

      backgroundColor:
        '#3A2418',

      borderWidth:
        1,

      borderColor:
        '#8A5A35',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    countBadgeText: {

      color:
        '#F2B35B',

      fontWeight:
        '900',

      fontSize:
        13,

    },


    pantryPanel: {

      backgroundColor:
        '#1C1410',

      borderRadius:
        24,

      borderWidth:
        1,

      borderColor:
        '#473127',

      padding:
        14,

    },


    // ==================================================
    // CRISIS CTA
    // ==================================================


    crisisButton: {

      marginTop:
        24,

      minHeight:
        92,

      backgroundColor:
        '#E77924',

      borderRadius:
        23,

      padding:
        16,

      flexDirection:
        'row',

      alignItems:
        'center',

      shadowColor:
        '#E77924',

      shadowOpacity:
        0.25,

      shadowRadius:
        18,

      shadowOffset: {
        width: 0,
        height: 8,
      },

      elevation:
        8,

    },


    crisisIconWrap: {

      width:
        54,

      height:
        54,

      borderRadius:
        17,

      backgroundColor:
        'rgba(0,0,0,0.16)',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        13,

    },


    crisisContent: {

      flex:
        1,

    },


    crisisEyebrow: {

      color:
        '#482006',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.5,

    },


    crisisTitle: {

      color:
        '#FFF8EE',

      fontSize:
        18,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    crisisSubtitle: {

      color:
        '#5B2A0D',

      fontSize:
        11,

      fontWeight:
        '800',

      marginTop:
        4,

    },


    // ==================================================
    // MEJOR OPCIÓN
    // ==================================================


    quickDecisionCard: {

      marginTop:
        24,

      backgroundColor:
        '#251A14',

      borderRadius:
        24,

      borderWidth:
        1,

      borderColor:
        '#7B5439',

      padding:
        20,

    },


    quickDecisionTop: {

      flexDirection:
        'row',

      justifyContent:
        'space-between',

    },


    quickBadge: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        6,

      alignSelf:
        'flex-start',

      paddingHorizontal:
        10,

      paddingVertical:
        6,

      borderRadius:
        999,

      backgroundColor:
        '#3A2418',

    },


    quickBadgeText: {

      color:
        '#F2B35B',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.3,

    },


    quickTitle: {

      color:
        '#FFF3DD',

      fontSize:
        22,

      fontWeight:
        '900',

      lineHeight:
        27,

      marginTop:
        14,

    },


    quickMetaRow: {

      flexDirection:
        'row',

      flexWrap:
        'wrap',

      gap:
        12,

      marginTop:
        14,

    },


    quickMeta: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        5,

    },


    quickMetaText: {

      color:
        '#BCA18A',

      fontSize:
        11,

      fontWeight:
        '700',

    },


    quickButton: {

      marginTop:
        18,

      height:
        46,

      borderRadius:
        15,

      backgroundColor:
        '#F2B35B',

      flexDirection:
        'row',

      justifyContent:
        'center',

      alignItems:
        'center',

      gap:
        8,

    },


    quickButtonText: {

      color:
        '#20120A',

      fontSize:
        13,

      fontWeight:
        '900',

    },


    // ==================================================
    // EMPTY
    // ==================================================


    emptyState: {

      marginTop:
        26,

      padding:
        26,

      backgroundColor:
        '#211712',

      borderRadius:
        24,

      borderWidth:
        1,

      borderColor:
        '#493226',

      alignItems:
        'center',

    },


    emptyIcon: {

      width:
        66,

      height:
        66,

      borderRadius:
        21,

      backgroundColor:
        '#342319',

      borderWidth:
        1,

      borderColor:
        '#735039',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    emptyTitle: {

      color:
        '#FFF3DD',

      fontSize:
        20,

      fontWeight:
        '900',

      marginTop:
        16,

      textAlign:
        'center',

    },


    emptyText: {

      color:
        '#AE927A',

      fontSize:
        14,

      lineHeight:
        21,

      textAlign:
        'center',

      marginTop:
        8,

    },


    // ==================================================
    // FOOTER
    // ==================================================


    footerInsight: {

      marginTop:
        30,

      flexDirection:
        'row',

      alignItems:
        'flex-start',

      gap:
        12,

      backgroundColor:
        '#1D1511',

      borderRadius:
        Radius.xl,

      borderWidth:
        1,

      borderColor:
        '#3F2D24',

      padding:
        17,

    },


    footerInsightContent: {

      flex:
        1,

    },


    footerInsightTitle: {

      color:
        '#F3DEC5',

      fontSize:
        14,

      fontWeight:
        '900',

    },


    footerInsightText: {

      color:
        '#A88B74',

      fontSize:
        12,

      lineHeight:
        18,

      marginTop:
        4,

    },

  });