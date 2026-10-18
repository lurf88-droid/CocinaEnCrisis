import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { AppText } from '@/components/ui/AppText';

import {
  ChefEngine,
} from '@/services/chef-engine';

import type {
  ChefMode,
} from '@/utils/chefMode';

import type {
  ResultadoBusqueda,
} from '@/types/receta';

import {
  Radius,
  Shadows,
  Spacing,
} from '@/constants/theme';

import {
  obtenerIngrediente,
} from '@/data/catalogo-ingredientes';


type CompraSugerida = {
  ingrediente: string;
  cantidad: number;
  recetasNuevas: string[];
  costo: number;
  razon: string;
  mensajeChef?: string;
};


type Props = {
  receta: ResultadoBusqueda;
  confianza: number;
  razones: string[];
  mensajeChef: string;
  modo: ChefMode;
  compraSugerida?: CompraSugerida | null;
  onPreparar: () => void;
  onCompraSugerida?: () => void;
};


// ======================================================
// 👨‍🍳 CHEF RECOMMENDATION CARD
// ======================================================

export function ChefRecommendationCard({
  receta,
  confianza,
  razones,
  mensajeChef,
  modo,
  compraSugerida,
  onPreparar,
  onCompraSugerida,
}: Props) {

  const confianzaSegura =
    Math.max(
      0,
      Math.min(
        confianza,
        100
      )
    );


const razonesChef =
  razones.slice(0, 3);


  const personalidadChef =
    ChefEngine.personalidadChef(
      receta,
      modo
    );


  


  const estadoConfianza =
    confianzaSegura >= 85
      ? {
          label: 'Excelente opción',
          icon: 'check-decagram-outline' as const,
          color: '#9BC78A',
        }
      : confianzaSegura >= 60
        ? {
            label: 'Buena opción',
            icon: 'chef-hat' as const,
            color: '#F2B35B',
          }
        : {
            label: 'Opción posible',
            icon: 'basket-outline' as const,
            color: '#EFA15F',
          };


  const nombreCompra =
    compraSugerida
      ? obtenerIngrediente(
          compraSugerida.ingrediente
        )?.nombre
        ?? compraSugerida.ingrediente
      : '';


  return (

    <View style={styles.card}>


      {/* =================================================
          HERO
      ================================================= */}


      <ImageBackground

        source={
          receta.imagen
        }

        style={
          styles.hero
        }

        imageStyle={
          styles.heroImage
        }

        resizeMode="cover"

      >


        <View
          style={
            styles.overlay
          }
        />


        <View
          style={
            styles.heroContent
          }
        >


          <View
            style={
              styles.kickerBadge
            }
          >

            <MaterialCommunityIcons
              name="chef-hat"
              size={14}
              color="#F2B35B"
            />

            <AppText
              style={
                styles.kicker
              }
            >
              CHEF LUNA ELIGIÓ ESTA
            </AppText>

          </View>


          <View
            style={
              styles.heroBottom
            }
          >


            <AppText
              style={
                styles.title
              }
            >
              {receta.titulo}
            </AppText>


            <AppText
              style={
                styles.heroDescription
              }
            >
              {
                personalidadChef
              }
            </AppText>


          </View>


        </View>


      </ImageBackground>


      {/* =================================================
          CONTENT
      ================================================= */}


      <View style={styles.content}>


        {/* =================================================
            CONFIDENCE
        ================================================= */}


        <View style={styles.confidenceCard}>


          <View style={styles.confidenceTop}>


            <View>


              <AppText style={styles.sectionLabel}>
                COMPATIBILIDAD CON TU COCINA
              </AppText>


              <AppText style={styles.confidenceValue}>
                {Math.round(confianzaSegura)}%
              </AppText>


            </View>


            <View style={styles.confidenceStatus}>


              <MaterialCommunityIcons
                name={estadoConfianza.icon}
                size={17}
                color={estadoConfianza.color}
              />


              <AppText
                style={[
                  styles.confidenceStatusText,
                  {
                    color:
                      estadoConfianza.color,
                  },
                ]}
              >
                {estadoConfianza.label}
              </AppText>


            </View>


          </View>


          <View style={styles.progressTrack}>

            <View
              style={[
                styles.progressFill,
                {
                  width:
                    `${confianzaSegura}%`,
                },
              ]}
            />

          </View>


          <AppText style={styles.confidenceCaption}>
            Chef Luna comparó lo que tienes con lo que necesita esta receta.
          </AppText>


        </View>


        {/* =================================================
            METRICS
        ================================================= */}


        <View style={styles.statsRow}>


        <Stat
  icon="cash"
  value={`$${Math.round(receta.costoTotal)}`}
  label="Valor receta"
  accent="#9BC78A"
/>


          <View style={styles.statDivider} />


          <Stat
            icon="clock-outline"
            value={`${receta.tiempoMinutos} min`}
            label="Tiempo"
          />


          <View style={styles.statDivider} />


          <Stat
            icon="account-group-outline"
            value={`${receta.porciones}`}
            label="Porciones"
          />


        </View>


        {/* =================================================
            CHEF MESSAGE
        ================================================= */}


        {mensajeChef ? (

          <View style={styles.chefMessage}>


            <View style={styles.chefMessageHeader}>


              <View style={styles.chefMessageIcon}>

                <MaterialCommunityIcons
                  name="chef-hat"
                  size={19}
                  color="#F2B35B"
                />

              </View>


              <View style={styles.chefMessageIdentity}>

                <AppText style={styles.chefMessageEyebrow}>
                  CHEF LUNA
                </AppText>

                <AppText style={styles.chefMessageTitle}>
                  Mi lectura de esta receta
                </AppText>

              </View>


            </View>


            <AppText style={styles.chefMessageText}>
              {mensajeChef}
            </AppText>


          </View>

        ) : null}


        {/* =================================================
            REASONS
        ================================================= */}


        {razonesChef.length > 0 && (

          <View style={styles.reasonsCard}>


            <AppText style={styles.reasonsEyebrow}>
              POR QUÉ LA ELEGÍ
            </AppText>


            <AppText style={styles.reasonsTitle}>
              Lo que juega a tu favor
            </AppText>


            <View style={styles.reasonsList}>


              {razonesChef.map(
                (
                  razon,
                  index
                ) => (

                  <View
                    key={`${razon}-${index}`}
                    style={styles.reasonRow}
                  >


                    <View style={styles.checkCircle}>

                      <MaterialCommunityIcons
                        name="check"
                        size={13}
                        color="#1D2B1D"
                      />

                    </View>


                    <AppText style={styles.reasonText}>
                      {razon}
                    </AppText>


                  </View>

                )
              )}


            </View>


          </View>

        )}


        {/* =================================================
            PURCHASE OPPORTUNITY
        ================================================= */}


        {compraSugerida && (

          <View style={styles.purchaseCard}>


            <View style={styles.purchaseHeader}>


              <View style={styles.purchaseHeaderLeft}>


                <View style={styles.purchaseIcon}>

                  <MaterialCommunityIcons
                    name="cart-plus"
                    size={20}
                    color="#EFA15F"
                  />

                </View>


                <View style={styles.purchaseHeaderText}>

                  <AppText style={styles.purchaseKicker}>
                    COMPRA ESTRATÉGICA
                  </AppText>

                  <AppText style={styles.purchaseIngredient}>
                    {nombreCompra}
                  </AppText>

                </View>


              </View>


              <View style={styles.unlockBadge}>


                <AppText style={styles.unlockNumber}>
                  +{compraSugerida.cantidad}
                </AppText>


                <AppText style={styles.unlockLabel}>
                  {
                    compraSugerida.cantidad === 1
                      ? 'RECETA'
                      : 'RECETAS'
                  }
                </AppText>


              </View>


            </View>


            <AppText style={styles.purchaseReason}>

              {
                compraSugerida.mensajeChef
                ??
                compraSugerida.razon
              }

            </AppText>


            {compraSugerida.recetasNuevas.length > 0 && (

              <View style={styles.unlockList}>


                <AppText style={styles.unlockListLabel}>
                  DESBLOQUEAS
                </AppText>


                {compraSugerida.recetasNuevas
                  .slice(0, 3)
                  .map(
                    (
                      item,
                      index
                    ) => (

                      <View
                        key={`${item}-${index}`}
                        style={styles.unlockItem}
                      >

                        <MaterialCommunityIcons
                          name="silverware-fork-knife"
                          size={14}
                          color="#D7A86E"
                        />

                        <AppText
                          numberOfLines={1}
                          style={styles.unlockItemText}
                        >
                          {item}
                        </AppText>

                      </View>

                    )
                  )}


              </View>

            )}


            <View style={styles.purchaseFooter}>


              <View>


                <AppText style={styles.purchaseCostLabel}>
                  COSTO APROXIMADO
                </AppText>

                <AppText style={styles.purchaseCost}>
                  ${Math.round(compraSugerida.costo)}
                </AppText>


              </View>


              {onCompraSugerida && (

                <TouchableOpacity

                  activeOpacity={0.84}

                  style={styles.purchaseButton}

                  onPress={onCompraSugerida}

                >

                  <AppText style={styles.purchaseButtonText}>
                    Ver oportunidad
                  </AppText>

                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={16}
                    color="#24140A"
                  />

                </TouchableOpacity>

              )}


            </View>


          </View>

        )}


        {/* =================================================
            PRIMARY CTA
        ================================================= */}


        <TouchableOpacity

          activeOpacity={0.86}

          style={styles.prepareButton}

          onPress={onPreparar}

        >


          <View style={styles.prepareIcon}>

            <MaterialCommunityIcons
              name="chef-hat"
              size={21}
              color="#24140A"
            />

          </View>


          <View style={styles.prepareContent}>


            <AppText style={styles.prepareEyebrow}>
              COCINA GUIADA
            </AppText>


            <AppText style={styles.prepareTitle}>
              Preparar con Chef Luna
            </AppText>


          </View>


          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color="#24140A"
          />


        </TouchableOpacity>


      </View>


    </View>

  );

}


// ======================================================
// 📊 STAT
// ======================================================

function Stat({
  icon,
  value,
  label,
  accent = '#D7A86E',
}: {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >['name'];
  value: string;
  label: string;
  accent?: string;
}) {

  return (

    <View style={styles.stat}>


      <MaterialCommunityIcons
        name={icon}
        size={18}
        color={accent}
      />


      <AppText style={styles.statValue}>
        {value}
      </AppText>


      <AppText style={styles.statLabel}>
        {label}
      </AppText>


    </View>

  );

}


// ======================================================
// 🎨 STYLES
// ======================================================

const styles =
  StyleSheet.create({


    card: {

      marginTop:
        Spacing.sm,

      backgroundColor:
        '#17100C',

      borderRadius:
        27,

      borderWidth:
        1,

      borderColor:
        '#5B3C2D',

      overflow:
        'hidden',

      ...Shadows.card,

    },


    // ==================================================
    // HERO
    // ==================================================


    hero: {

      height:
        300,

      justifyContent:
        'flex-end',

    },


    heroImage: {

      borderTopLeftRadius:
        26,

      borderTopRightRadius:
        26,

    },


    overlay: {

      ...StyleSheet.absoluteFill,
      backgroundColor:
        'rgba(15, 8, 5, 0.38)',

    },


    heroContent: {

      flex:
        1,

      justifyContent:
        'space-between',

      padding:
        18,

    },


    kickerBadge: {

      alignSelf:
        'flex-start',

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        6,

      paddingHorizontal:
        10,

      paddingVertical:
        7,

      borderRadius:
        Radius.pill,

      backgroundColor:
        'rgba(25,15,10,0.88)',

      borderWidth:
        1,

      borderColor:
        '#805438',

    },


    kicker: {

      color:
        '#F2B35B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    heroBottom: {

      marginTop:
        'auto',

    },


    title: {

      color:
        '#FFF3DD',

      fontSize:
        28,

      fontWeight:
        '900',

      lineHeight:
        34,

    },


    heroDescription: {

      marginTop:
        8,

      color:
        '#F2D9C2',

      fontSize:
        13,

      lineHeight:
        20,

      fontWeight:
        '700',

    },


    // ==================================================
    // CONTENT
    // ==================================================


    content: {

      padding:
        17,

      gap:
        13,

    },


    // ==================================================
    // CONFIDENCE
    // ==================================================


    confidenceCard: {

      backgroundColor:
        '#201610',

      borderRadius:
        18,

      borderWidth:
        1,

      borderColor:
        '#483126',

      padding:
        14,

    },


    confidenceTop: {

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'space-between',

    },


    sectionLabel: {

      color:
        '#A97E5D',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    confidenceValue: {

      color:
        '#FFF3DD',

      fontSize:
        30,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    confidenceStatus: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        5,

      backgroundColor:
        '#19110D',

      paddingHorizontal:
        9,

      paddingVertical:
        7,

      borderRadius:
        999,

    },


    confidenceStatusText: {

      fontSize:
        8,

      fontWeight:
        '900',

    },


    progressTrack: {

      marginTop:
        11,

      height:
        7,

      borderRadius:
        999,

      overflow:
        'hidden',

      backgroundColor:
        '#3B2A21',

    },


    progressFill: {

      height:
        '100%',

      backgroundColor:
        '#8FB276',

      borderRadius:
        999,

    },


    confidenceCaption: {

      color:
        '#7F6958',

      fontSize:
        9,

      lineHeight:
        14,

      marginTop:
        8,

    },


    // ==================================================
    // STATS
    // ==================================================


    statsRow: {

      flexDirection:
        'row',

      alignItems:
        'center',

      backgroundColor:
        '#201610',

      minHeight:
        79,

      borderRadius:
        17,

      borderWidth:
        1,

      borderColor:
        '#433026',

    },


    stat: {

      flex:
        1,

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    statValue: {

      color:
        '#F2DFCB',

      fontSize:
        12,

      fontWeight:
        '900',

      marginTop:
        4,

    },


    statLabel: {

      color:
        '#806A59',

      fontSize:
        7,

      fontWeight:
        '900',

      textTransform:
        'uppercase',

      marginTop:
        2,

    },


    statDivider: {

      width:
        1,

      height:
        40,

      backgroundColor:
        '#3E2C23',

    },


    // ==================================================
    // MESSAGE
    // ==================================================


    chefMessage: {

      backgroundColor:
        '#2B1D15',

      borderRadius:
        18,

      borderWidth:
        1,

      borderColor:
        '#64442F',

      padding:
        14,

    },


    chefMessageHeader: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    chefMessageIcon: {

      width:
        38,

      height:
        38,

      borderRadius:
        13,

      backgroundColor:
        '#42291B',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        9,

    },


    chefMessageIdentity: {

      flex:
        1,

    },


    chefMessageEyebrow: {

      color:
        '#C17D48',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    chefMessageTitle: {

      color:
        '#F4DDC6',

      fontSize:
        12,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    chefMessageText: {

      color:
        '#CBB19A',

      fontSize:
        12,

      lineHeight:
        19,

      marginTop:
        11,

    },


    // ==================================================
    // REASONS
    // ==================================================


    reasonsCard: {

      padding:
        15,

      borderRadius:
        18,

      backgroundColor:
        '#1E2A1E',

      borderWidth:
        1,

      borderColor:
        '#486047',

    },


    reasonsEyebrow: {

      color:
        '#7FA477',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    reasonsTitle: {

      color:
        '#E5EEDD',

      fontSize:
        15,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    reasonsList: {

      marginTop:
        12,

      gap:
        9,

    },


    reasonRow: {

      flexDirection:
        'row',

      alignItems:
        'flex-start',

    },


    checkCircle: {

      width:
        25,

      height:
        25,

      borderRadius:
        9,

      alignItems:
        'center',

      justifyContent:
        'center',

      backgroundColor:
        '#9BC78A',

      marginRight:
        8,

    },


    reasonText: {

      flex:
        1,

      color:
        '#D5E1D0',

      fontSize:
        11,

      lineHeight:
        17,

      fontWeight:
        '700',

      paddingTop:
        4,

    },


    // ==================================================
    // PURCHASE
    // ==================================================


    purchaseCard: {

      padding:
        15,

      borderRadius:
        19,

      backgroundColor:
        '#302017',

      borderWidth:
        1,

      borderColor:
        '#7A4D32',

    },


    purchaseHeader: {

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'space-between',

      gap:
        10,

    },


    purchaseHeaderLeft: {

      flex:
        1,

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    purchaseIcon: {

      width:
        42,

      height:
        42,

      borderRadius:
        14,

      backgroundColor:
        '#442A1B',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        9,

    },


    purchaseHeaderText: {

      flex:
        1,

    },


    purchaseKicker: {

      color:
        '#C77D4B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.1,

    },


    purchaseIngredient: {

      color:
        '#FFF3DD',

      fontSize:
        16,

      fontWeight:
        '900',

      marginTop:
        2,

      textTransform:
        'capitalize',

    },


    unlockBadge: {

      minWidth:
        53,

      paddingHorizontal:
        8,

      paddingVertical:
        6,

      borderRadius:
        13,

      alignItems:
        'center',

      backgroundColor:
        '#20301E',

      borderWidth:
        1,

      borderColor:
        '#587355',

    },


    unlockNumber: {

      color:
        '#9BC78A',

      fontSize:
        16,

      fontWeight:
        '900',

    },


    unlockLabel: {

      color:
        '#71916B',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        0.7,

    },


    purchaseReason: {

      marginTop:
        12,

      color:
        '#D2B9A2',

      fontSize:
        11,

      lineHeight:
        18,

    },


    unlockList: {

      marginTop:
        13,

      paddingTop:
        12,

      borderTopWidth:
        1,

      borderTopColor:
        '#4C3326',

      gap:
        8,

    },


    unlockListLabel: {

      color:
        '#9B7356',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.1,

    },


    unlockItem: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        7,

    },


    unlockItemText: {

      flex:
        1,

      color:
        '#DEC8B2',

      fontSize:
        10,

      fontWeight:
        '700',

    },


    purchaseFooter: {

      marginTop:
        14,

      paddingTop:
        13,

      borderTopWidth:
        1,

      borderTopColor:
        '#4C3326',

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'space-between',

      gap:
        10,

    },


    purchaseCostLabel: {

      color:
        '#8D6B55',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        1,

    },


    purchaseCost: {

      color:
        '#9BC78A',

      fontSize:
        17,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    purchaseButton: {

      minHeight:
        40,

      paddingHorizontal:
        12,

      borderRadius:
        13,

      backgroundColor:
        '#EFA15F',

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        5,

    },


    purchaseButtonText: {

      color:
        '#24140A',

      fontSize:
        9,

      fontWeight:
        '900',

    },


    // ==================================================
    // PRIMARY CTA
    // ==================================================


    prepareButton: {

      minHeight:
        58,

      borderRadius:
        17,

      backgroundColor:
        '#F2B35B',

      flexDirection:
        'row',

      alignItems:
        'center',

      paddingHorizontal:
        13,

      marginTop:
        2,

    },


    prepareIcon: {

      width:
        39,

      height:
        39,

      borderRadius:
        13,

      backgroundColor:
        'rgba(36,20,10,0.10)',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    prepareContent: {

      flex:
        1,

    },


    prepareEyebrow: {

      color:
        '#6C451F',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        1,

    },


    prepareTitle: {

      color:
        '#24140A',

      fontSize:
        13,

      fontWeight:
        '900',

      marginTop:
        2,

    },

  });