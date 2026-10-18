import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import type { PasoReceta } from '@/types/receta';

import { AppText } from '@/components/ui/AppText';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


type Props = {
  titulo: string;
  paso: PasoReceta | string;
  numero: number;
  total: number;
  puedeAvanzar: boolean;
  puedeRetroceder: boolean;
  onNext: () => void;
  onPrev: () => void;
};


// ======================================================
// 🍳 COOKING STEP
// ======================================================

export function CookingStep({
  titulo,
  paso,
  numero,
  total,
  puedeAvanzar,
  puedeRetroceder,
  onNext,
  onPrev,
}: Props) {

  const progreso =
    total === 0
      ? 0
      : Math.round(
          (numero / total) * 100
        );


  const esPasoCompleto =
    typeof paso !== 'string';


  const tituloPaso =
    esPasoCompleto
      ? paso.titulo
      : `Paso ${numero}`;


  const descripcionPaso =
    esPasoCompleto
      ? paso.descripcion
      : paso;


  const esUltimoPaso =
    numero >= total;

const [
  procesando,
  setProcesando,
] = useState(false);
  // ====================================================
  // UI
  // ====================================================

  return (

    <View style={styles.card}>


      {/* =================================================
          HEADER
      ================================================= */}


      <View style={styles.header}>


        <View style={styles.headerIcon}>

          <MaterialCommunityIcons
            name="silverware-fork-knife"
            size={23}
            color="#F2B35B"
          />

        </View>


        <View style={styles.headerContent}>

          <AppText style={styles.kicker}>
            MODO COCINA
          </AppText>

          <AppText
            numberOfLines={1}
            style={styles.recipeTitle}
          >
            {titulo}
          </AppText>

        </View>


        <View style={styles.stepBadge}>

          <AppText style={styles.stepBadgeValue}>
            {numero}
          </AppText>

          <AppText style={styles.stepBadgeLabel}>
            DE {total}
          </AppText>

        </View>


      </View>


      {/* =================================================
          PROGRESO
      ================================================= */}


      <View style={styles.progressSection}>


        <View style={styles.progressTop}>

          <AppText style={styles.progressLabel}>
            PROGRESO DE PREPARACIÓN
          </AppText>

          <AppText style={styles.progressPercent}>
            {progreso}%
          </AppText>

        </View>


        <View style={styles.progressBackground}>

          <View
            style={[
              styles.progressFill,
              {
                width:
                  `${progreso}%`,
              },
            ]}
          />

        </View>


      </View>


      {/* =================================================
          INSTRUCCIÓN PRINCIPAL
      ================================================= */}


      <View style={styles.stepBox}>


        <AppText style={styles.stepEyebrow}>
          PASO {numero}
        </AppText>


        <AppText style={styles.stepTitle}>
          {tituloPaso}
        </AppText>


        <AppText style={styles.stepDescription}>
          {descripcionPaso}
        </AppText>


        {/* =================================================
            TIEMPO
        ================================================= */}


        {esPasoCompleto &&
          paso.tiempo && (

          <View style={styles.timeCard}>


            <View style={styles.timeIcon}>

              <MaterialCommunityIcons
                name="clock-outline"
                size={19}
                color="#9BC78A"
              />

            </View>


            <View style={styles.timeContent}>

              <AppText style={styles.timeLabel}>
                TIEMPO APROXIMADO
              </AppText>

              <AppText style={styles.timeValue}>
                {paso.tiempo}
              </AppText>

            </View>


          </View>

        )}


      </View>


      {/* =================================================
          SEÑAL CORRECTA
      ================================================= */}


      {esPasoCompleto &&
        paso.señalCorrecta && (

        <View style={styles.signalBox}>


          <View style={styles.boxHeader}>


            <View style={styles.signalIcon}>

              <MaterialCommunityIcons
                name="check-circle-outline"
                size={21}
                color="#9BC78A"
              />

            </View>


            <View style={styles.boxHeaderContent}>

              <AppText style={styles.signalEyebrow}>
                SEÑAL DE ÉXITO
              </AppText>

              <AppText style={styles.boxTitle}>
                Así sabes que vas bien
              </AppText>

            </View>


          </View>


          <AppText style={styles.boxText}>
            {paso.señalCorrecta}
          </AppText>


        </View>

      )}


      {/* =================================================
          CONSEJO
      ================================================= */}


      {esPasoCompleto &&
        paso.consejo && (

        <View style={styles.tipBox}>


          <View style={styles.boxHeader}>


            <View style={styles.tipIcon}>

              <MaterialCommunityIcons
                name="lightbulb-outline"
                size={21}
                color="#F2B35B"
              />

            </View>


            <View style={styles.boxHeaderContent}>

              <AppText style={styles.tipEyebrow}>
                CONSEJO CHEF LUNA
              </AppText>

              <AppText style={styles.boxTitle}>
                Un detalle que ayuda
              </AppText>

            </View>


          </View>


          <AppText style={styles.boxText}>
            {paso.consejo}
          </AppText>


        </View>

      )}


      {/* =================================================
          POR QUÉ
      ================================================= */}


      {esPasoCompleto &&
        paso.porQue && (

        <View style={styles.whyBox}>


          <View style={styles.boxHeader}>


            <View style={styles.whyIcon}>

              <MaterialCommunityIcons
                name="information-outline"
                size={21}
                color="#B2C9E8"
              />

            </View>


            <View style={styles.boxHeaderContent}>

              <AppText style={styles.whyEyebrow}>
                APRENDE LA TÉCNICA
              </AppText>

              <AppText style={styles.boxTitle}>
                ¿Por qué hacemos esto?
              </AppText>

            </View>


          </View>


          <AppText style={styles.boxText}>
            {paso.porQue}
          </AppText>


        </View>

      )}


      {/* =================================================
          ERROR A EVITAR
      ================================================= */}


      {esPasoCompleto &&
        paso.errorEvitar && (

        <View style={styles.errorBox}>


          <View style={styles.boxHeader}>


            <View style={styles.errorIcon}>

              <MaterialCommunityIcons
                name="alert-outline"
                size={22}
                color="#FF9A6A"
              />

            </View>


            <View style={styles.boxHeaderContent}>

              <AppText style={styles.errorEyebrow}>
                EVITA ESTE ERROR
              </AppText>

              <AppText style={styles.boxTitle}>
                Antes de continuar
              </AppText>

            </View>


          </View>


          <AppText style={styles.errorText}>
            {paso.errorEvitar}
          </AppText>


        </View>

      )}


      {/* =================================================
          NAVEGACIÓN
      ================================================= */}


      <View style={styles.navigation}>


        <TouchableOpacity

          activeOpacity={
            puedeRetroceder
              ? 0.82
              : 1
          }

          disabled={
            !puedeRetroceder
          }

          onPress={
            onPrev
          }

          style={[
            styles.prevButton,
            !puedeRetroceder &&
              styles.prevButtonDisabled,
          ]}

        >

          <MaterialCommunityIcons
            name="arrow-left"
            size={19}
            color={
              puedeRetroceder
                ? '#D9BEA5'
                : '#675549'
            }
          />


          <AppText
            style={[
              styles.prevButtonText,
              !puedeRetroceder &&
                styles.prevButtonTextDisabled,
            ]}
          >
            Anterior
          </AppText>


        </TouchableOpacity>


       <TouchableOpacity
  activeOpacity={
    procesando
      ? 1
      : 0.85
  }
  disabled={procesando}
  onPress={async () => {

    if (procesando) {
      return;
    }

    setProcesando(true);

    try {
      await Promise.resolve(
        onNext()
      );
    } finally {
      setProcesando(false);
    }

  }}
  style={[
    styles.nextButton,
    esUltimoPaso &&
      styles.finishButton,
    procesando && {
      opacity: 0.7,
    },
  ]}
>


          <MaterialCommunityIcons
            name={
              esUltimoPaso
                ? 'flag-checkered'
                : 'arrow-right'
            }
            size={20}
            color="#24140A"
          />


          <AppText style={styles.nextButtonText}>

           {
  procesando
    ? 'Procesando...'
    : esUltimoPaso
      ? 'Terminé mi receta'
      : 'Siguiente paso'
}
          </AppText>


        </TouchableOpacity>


      </View>


      {/* =================================================
          FOOTER
      ================================================= */}


      <View style={styles.footerHint}>


        <MaterialCommunityIcons
          name={
            esUltimoPaso
              ? 'chef-hat'
              : 'check-circle-outline'
          }
          size={16}
          color="#8D725E"
        />


        <AppText style={styles.footerHintText}>

          {
            esUltimoPaso
              ? 'Confirma cuando tu platillo esté terminado.'
              : 'Avanza cuando hayas completado esta instrucción.'
          }

        </AppText>


      </View>


    </View>

  );

}


// ======================================================
// 🎨 STYLES
// ======================================================

const styles =
  StyleSheet.create({


    card: {

      backgroundColor:
        '#1A120E',

      borderRadius:
        26,

      borderWidth:
        1,

      borderColor:
        '#5A3D2E',

      padding:
        18,

      shadowColor:
        '#000',

      shadowOpacity:
        0.28,

      shadowRadius:
        16,

      shadowOffset: {
        width: 0,
        height: 8,
      },

      elevation:
        7,

    },


    // ==================================================
    // HEADER
    // ==================================================


    header: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    headerIcon: {

      width:
        46,

      height:
        46,

      borderRadius:
        15,

      backgroundColor:
        '#362218',

      borderWidth:
        1,

      borderColor:
        '#704B35',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        11,

    },


    headerContent: {

      flex:
        1,

    },


    kicker: {

      color:
        '#C17D48',

      fontWeight:
        '900',

      fontSize:
        8,

      letterSpacing:
        1.5,

    },


    recipeTitle: {

      color:
        '#D7BCA3',

      fontSize:
        13,

      fontWeight:
        '800',

      marginTop:
        3,

    },


    stepBadge: {

      minWidth:
        48,

      height:
        48,

      borderRadius:
        15,

      backgroundColor:
        '#211610',

      borderWidth:
        1,

      borderColor:
        '#493226',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    stepBadgeValue: {

      color:
        '#F2B35B',

      fontSize:
        17,

      fontWeight:
        '900',

    },


    stepBadgeLabel: {

      color:
        '#826B59',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        0.7,

    },


    // ==================================================
    // PROGRESS
    // ==================================================


    progressSection: {

      marginTop:
        18,

    },


    progressTop: {

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'space-between',

    },


    progressLabel: {

      color:
        '#866E5B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    progressPercent: {

      color:
        '#F2B35B',

      fontSize:
        12,

      fontWeight:
        '900',

    },


    progressBackground: {

      marginTop:
        8,

      height:
        7,

      backgroundColor:
        '#34261E',

      borderRadius:
        Radius.pill,

      overflow:
        'hidden',

    },


    progressFill: {

      height:
        '100%',

      backgroundColor:
        '#F2B35B',

      borderRadius:
        Radius.pill,

    },


    // ==================================================
    // MAIN STEP
    // ==================================================


    stepBox: {

      marginTop:
        20,

      backgroundColor:
        '#251A14',

      borderWidth:
        1,

      borderColor:
        '#704B35',

      borderRadius:
        22,

      padding:
        18,

    },


    stepEyebrow: {

      color:
        '#C17D48',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.5,

    },


    stepTitle: {

      color:
        '#FFF3DD',

      fontSize:
        23,

      lineHeight:
        29,

      fontWeight:
        '900',

      marginTop:
        5,

    },


    stepDescription: {

      color:
        '#F1DDC8',

      lineHeight:
        30,

      fontSize:
        19,

      fontWeight:
        '700',

      marginTop:
        16,

    },


    // ==================================================
    // TIME
    // ==================================================


    timeCard: {

      marginTop:
        18,

      flexDirection:
        'row',

      alignItems:
        'center',

      backgroundColor:
        '#1E2A1E',

      borderRadius:
        15,

      borderWidth:
        1,

      borderColor:
        '#4A6548',

      padding:
        11,

    },


    timeIcon: {

      width:
        38,

      height:
        38,

      borderRadius:
        12,

      backgroundColor:
        '#2B3D29',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    timeContent: {

      flex:
        1,

    },


    timeLabel: {

      color:
        '#779372',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    timeValue: {

      color:
        '#DDEAD7',

      fontSize:
        14,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    // ==================================================
    // COMMON BOX
    // ==================================================


    boxHeader: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    boxHeaderContent: {

      flex:
        1,

    },


    boxTitle: {

      color:
        '#FFF3DD',

      fontSize:
        15,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    boxText: {

      color:
        '#DCC6AF',

      fontSize:
        13,

      lineHeight:
        20,

      marginTop:
        12,

    },


    // ==================================================
    // SIGNAL
    // ==================================================


    signalBox: {

      marginTop:
        13,

      backgroundColor:
        '#1E2B1E',

      borderRadius:
        19,

      padding:
        15,

      borderWidth:
        1,

      borderColor:
        '#547252',

    },


    signalIcon: {

      width:
        40,

      height:
        40,

      borderRadius:
        13,

      backgroundColor:
        '#2B3D29',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    signalEyebrow: {

      color:
        '#8FB276',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    // ==================================================
    // TIP
    // ==================================================


    tipBox: {

      marginTop:
        13,

      backgroundColor:
        '#342219',

      borderRadius:
        19,

      padding:
        15,

      borderWidth:
        1,

      borderColor:
        '#805438',

    },


    tipIcon: {

      width:
        40,

      height:
        40,

      borderRadius:
        13,

      backgroundColor:
        '#482F1E',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    tipEyebrow: {

      color:
        '#F2B35B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    // ==================================================
    // WHY
    // ==================================================


    whyBox: {

      marginTop:
        13,

      backgroundColor:
        '#1D252D',

      borderRadius:
        19,

      padding:
        15,

      borderWidth:
        1,

      borderColor:
        '#45596C',

    },


    whyIcon: {

      width:
        40,

      height:
        40,

      borderRadius:
        13,

      backgroundColor:
        '#293744',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    whyEyebrow: {

      color:
        '#9BB8D8',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    // ==================================================
    // ERROR
    // ==================================================


    errorBox: {

      marginTop:
        13,

      backgroundColor:
        '#382019',

      borderRadius:
        19,

      padding:
        15,

      borderWidth:
        1,

      borderColor:
        '#7D432F',

    },


    errorIcon: {

      width:
        40,

      height:
        40,

      borderRadius:
        13,

      backgroundColor:
        '#4A2A1F',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    errorEyebrow: {

      color:
        '#FF9A6A',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    errorText: {

      color:
        '#FFD2C2',

      fontSize:
        13,

      lineHeight:
        20,

      fontWeight:
        '700',

      marginTop:
        12,

    },


    // ==================================================
    // NAVIGATION
    // ==================================================


    navigation: {

      flexDirection:
        'row',

      gap:
        10,

      marginTop:
        20,

    },


    prevButton: {

      minHeight:
        52,

      paddingHorizontal:
        16,

      borderRadius:
        17,

      borderWidth:
        1,

      borderColor:
        '#624433',

      backgroundColor:
        '#2A1D17',

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        7,

    },


    prevButtonDisabled: {

      backgroundColor:
        '#201813',

      borderColor:
        '#352A23',

    },


    prevButtonText: {

      color:
        '#D9BEA5',

      fontSize:
        11,

      fontWeight:
        '900',

    },


    prevButtonTextDisabled: {

      color:
        '#675549',

    },


    nextButton: {

      flex:
        1,

      minHeight:
        52,

      borderRadius:
        17,

      backgroundColor:
        '#F2B35B',

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        8,

      paddingHorizontal:
        14,

    },


    finishButton: {

      backgroundColor:
        '#9BC78A',

    },


    nextButtonText: {

      color:
        '#24140A',

      fontSize:
        12,

      fontWeight:
        '900',

    },


    // ==================================================
    // FOOTER
    // ==================================================


    footerHint: {

      marginTop:
        13,

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        6,

    },


    footerHintText: {

      color:
        '#806A59',

      fontSize:
        9,

      fontWeight:
        '700',

      textAlign:
        'center',

    },

  });