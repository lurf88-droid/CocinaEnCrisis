import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  router,
  useLocalSearchParams,
} from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useIngredientes } from '@/context/IngredientesContext';

import { Screen } from '@/components/ui/Screen';
import { AppText } from '@/components/ui/AppText';
import { AppCard } from '@/components/ui/AppCard';
import { AppButton } from '@/components/ui/AppButton';

import { CookingStep } from '@/components/cooking/CookingStep';
import { CookingResumeCard } from '@/components/cooking/CookingResumeCard';

import { RECETAS } from '@/data/recetas';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


// ======================================================
// 👨‍🍳 COOKING SCREEN
// ======================================================

export default function CookingScreen() {

  // 👇 AGREGAMOS EL PARÁMETRO 'costo'
  const {
    id,
    costo,
  } = useLocalSearchParams();


  const {
    prepararReceta,
  } = useIngredientes();


  // ====================================================
  // 🍳 RECETA
  // ====================================================

  const receta =
    RECETAS.find(
      item =>
        item.id === String(id)
    );


  // ====================================================
  // ESTADO
  // ====================================================

  const [
    pasoActual,
    setPasoActual,
  ] = useState(0);


  const [
    terminado,
    setTerminado,
  ] = useState(false);


  const [
    mostrarContinuar,
    setMostrarContinuar,
  ] = useState(false);


  const [
    mostrarRespuesta,
    setMostrarRespuesta,
  ] = useState(false);


  const scrollRef =
    useRef<any>(null);


  // ====================================================
  // 🔝 SUBIR PANTALLA
  // ====================================================

  const subirPantalla = () => {

    setTimeout(
      () => {

        scrollRef
          .current
          ?.scrollTo({
            y: 0,
            animated: true,
          });

      },
      120
    );

  };


  // ====================================================
  // 💾 CARGAR PROGRESO
  // ====================================================

  useEffect(() => {

    const cargarProgreso =
      async () => {

        try {

          const guardado =
            await AsyncStorage.getItem(
              `cocina_${id}`
            );


          if (!guardado) {
            return;
          }


          const datos =
            JSON.parse(
              guardado
            );


          if (
            typeof datos?.paso === 'number' &&
            Number.isInteger(datos.paso) &&
            datos.paso > 0 &&
            receta &&
            datos.paso < receta.pasos.length
          ) {

            setPasoActual(
              datos.paso
            );

            setMostrarContinuar(
              true
            );

          }

        } catch {

          /*
            Si el progreso guardado está
            corrupto, simplemente iniciamos
            desde el principio.
          */

        }

      };


    cargarProgreso();

  }, [
    id,
    receta,
  ]);


  // ====================================================
  // 🔝 CAMBIO DE PASO
  // ====================================================

  useEffect(() => {

    scrollRef
      .current
      ?.scrollTo({
        y: 0,
        animated: true,
      });

  }, [pasoActual]);


  // ====================================================
  // 💾 GUARDAR PROGRESO
  // ====================================================

  const guardarProgreso =
    async (
      paso: number
    ) => {

      await AsyncStorage.setItem(

        `cocina_${id}`,

        JSON.stringify({

          receta:
            id,

          paso,

        })

      );

    };


  // ====================================================
  // ❌ NO ENCONTRADA
  // ====================================================
  const confirmarSalida = () => {

    if (
      pasoActual === 0 &&
      !mostrarContinuar
    ) {
      router.back();
      return;
    }

    Alert.alert(
      '¿Salir de la preparación?',
      'Tu progreso está guardado y podrás continuar después.',
      [
        {
          text: 'Seguir cocinando',
          style: 'cancel',
        },
        {
          text: 'Salir',
          onPress: () =>
            router.back(),
        },
      ]
    );
  };

  if (!receta) {

    return (

      <Screen style={styles.screen}>


        <View style={styles.notFoundCard}>


          <View style={styles.notFoundIcon}>

            <MaterialCommunityIcons
              name="silverware-clean"
              size={38}
              color="#F2B35B"
            />

          </View>


          <AppText style={styles.notFoundEyebrow}>
            CHEF LUNA
          </AppText>


          <AppText style={styles.notFoundTitle}>
            Receta no encontrada
          </AppText>


          <AppText style={styles.notFoundText}>
            No pude abrir esta preparación. Podemos volver al catálogo y elegir otra receta.
          </AppText>


          <TouchableOpacity

            activeOpacity={0.86}

            style={styles.notFoundButton}

            onPress={() =>
              router.replace(
                '/(tabs)/explore'
              )
            }

          >

            <AppText style={styles.notFoundButtonText}>
              Ver recetas
            </AppText>

            <MaterialCommunityIcons
              name="arrow-right"
              size={18}
              color="#24140A"
            />

          </TouchableOpacity>


        </View>


      </Screen>

    );

  }


  // ====================================================
  // 🧠 PASO ACTUAL
  // ====================================================

  const paso =
    receta.pasos[
      pasoActual
    ];


  const pasoActualData =
    typeof paso === 'string'
      ? null
      : paso;


  const porcentaje =
    receta.pasos.length === 0
      ? 0
      : Math.round(
          (
            (
              pasoActual +
              1
            ) /
            receta.pasos.length
          ) *
          100
        );


  const ultimoPaso =
    pasoActual >=
    receta.pasos.length - 1;


  // ====================================================
  // 🎉 TERMINADO
  // ====================================================

  if (terminado) {

    return (

      <Screen style={styles.screen}>


        <View style={styles.finishedHero}>


          <View style={styles.finishedIcon}>

            <MaterialCommunityIcons
              name="check-bold"
              size={34}
              color="#20311F"
            />

          </View>


          <AppText style={styles.finishedEyebrow}>
            MISIÓN CUMPLIDA
          </AppText>


          <AppText style={styles.finishedTitle}>
            ¡Platillo terminado!
          </AppText>


          <AppText style={styles.finishedRecipe}>
            {receta.titulo}
          </AppText>


          <AppText style={styles.finishedText}>

            {
              receta.chefFinal
              ??
              `Preparaste ${receta.titulo}. Ya forma parte de tu historial.`
            }

          </AppText>


        </View>


        {/* =================================================
            RESULTADO ESPERADO
        ================================================= */}


        {receta.señalesExito && (

          <View style={styles.successCard}>


            <View style={styles.successHeader}>


              <View style={styles.successIcon}>

                <MaterialCommunityIcons
                  name="eye-outline"
                  size={22}
                  color="#F2B35B"
                />

              </View>


              <View style={styles.successHeaderText}>

                <AppText style={styles.successEyebrow}>
                  CHEQUEO FINAL
                </AppText>

                <AppText style={styles.successTitle}>
                  Así debe quedar
                </AppText>

              </View>


            </View>


            <SuccessItem
              icon="eye-outline"
              label="Vista"
              value={
                receta
                  .señalesExito
                  .vista
              }
            />


            <SuccessItem
              icon="flower-outline"
              label="Aroma"
              value={
                receta
                  .señalesExito
                  .olor
              }
            />


            <SuccessItem
              icon="silverware-fork-knife"
              label="Textura"
              value={
                receta
                  .señalesExito
                  .textura
              }
            />


          </View>

        )}


        {/* =================================================
            HISTORIAL
        ================================================= */}


        <View style={styles.historyNotice}>


          <MaterialCommunityIcons
            name="history"
            size={22}
            color="#8FB276"
          />


          <View style={styles.historyNoticeContent}>

            <AppText style={styles.historyNoticeTitle}>
              Guardada en tu historial
            </AppText>

            <AppText style={styles.historyNoticeText}>
              Chef Luna recordará que ya preparaste esta receta.
            </AppText>

          </View>


        </View>


        <AppButton

          style={styles.finishedButton}

          onPress={() =>
            router.replace(
              '/(tabs)'
            )
          }

        >
          Volver a Mi Cocina
        </AppButton>


      </Screen>

    );

  }


  // ====================================================
  // 🍳 COOKING UI
  // ====================================================

  return (

    <Screen
      scrollRef={scrollRef}
      style={styles.screen}
    >


      {/* =================================================
          HERO
      ================================================= */}


      <View style={styles.hero}>


        <View style={styles.heroTop}>


          <TouchableOpacity

            activeOpacity={0.82}

            style={styles.backButton}

            onPress={confirmarSalida}

          >

            <MaterialCommunityIcons
              name="arrow-left"
              size={22}
              color="#FFF3DD"
            />

          </TouchableOpacity>


          <View style={styles.heroIdentity}>

            <AppText style={styles.heroEyebrow}>
              COCINANDO CON CHEF LUNA
            </AppText>

            <AppText
              numberOfLines={2}
              style={styles.heroTitle}
            >
              {receta.titulo}
            </AppText>

          </View>


          <View style={styles.stepBadge}>

            <AppText style={styles.stepBadgeValue}>
              {pasoActual + 1}
            </AppText>

            <AppText style={styles.stepBadgeLabel}>
              DE {receta.pasos.length}
            </AppText>

          </View>


        </View>


        <View style={styles.progressHeader}>


          <AppText style={styles.progressLabel}>
            PROGRESO
          </AppText>


          <AppText style={styles.progressPercent}>
            {porcentaje}%
          </AppText>


        </View>


        <View style={styles.progressTrack}>

          <View
            style={[
              styles.progressFill,
              {
                width:
                  `${porcentaje}%`,
              },
            ]}
          />

        </View>


        <AppText style={styles.progressCaption}>

          {
            ultimoPaso
              ? 'Último paso. Ya casi está listo.'
              : `Paso ${pasoActual + 1} de ${receta.pasos.length}`
          }

        </AppText>


      </View>


      {/* =================================================
          RESUME
      ================================================= */}


      {mostrarContinuar && (

        <CookingResumeCard

          receta={
            receta.titulo
          }

          paso={
            pasoActual
          }

          total={
            receta.pasos.length
          }

          tituloPaso={
            typeof paso === 'string'
              ? paso
              : paso.titulo
          }

          onContinuar={() => {

            setMostrarContinuar(
              false
            );

          }}

        />

      )}


      {/* =================================================
          CHEF LUNA
      ================================================= */}


      <View style={styles.chefCard}>


        <View style={styles.chefHeader}>


          <View style={styles.chefIcon}>

            <MaterialCommunityIcons
              name="chef-hat"
              size={25}
              color="#F2B35B"
            />

          </View>


          <View style={styles.chefIdentity}>

            <AppText style={styles.chefEyebrow}>
              CHEF LUNA
            </AppText>

            <AppText style={styles.chefTitle}>
              Pon atención a este paso
            </AppText>

          </View>


          {pasoActualData
            ?.nivelImportancia ===
            'critico' && (

            <View style={styles.criticalBadge}>

              <MaterialCommunityIcons
                name="fire"
                size={13}
                color="#FF9A6A"
              />

              <AppText style={styles.criticalBadgeText}>
                CRÍTICO
              </AppText>

            </View>

          )}


          {pasoActualData
            ?.nivelImportancia ===
            'clave' && (

            <View style={styles.keyBadge}>

              <MaterialCommunityIcons
                name="star-four-points"
                size={12}
                color="#F2B35B"
              />

              <AppText style={styles.keyBadgeText}>
                CLAVE
              </AppText>

            </View>

          )}


        </View>


        <AppText style={styles.chefText}>

          {
            pasoActualData
              ?.mensajeChef
            ??
            'Concéntrate en este paso. La paciencia mejora el sabor.'
          }

        </AppText>


        {/* =================================================
            OBJETIVO
        ================================================= */}


        {pasoActualData
          ?.objetivo && (

          <View style={styles.objectiveCard}>


            <View style={styles.objectiveIcon}>

              <MaterialCommunityIcons
                name="target"
                size={18}
                color="#D7A86E"
              />

            </View>


            <View style={styles.objectiveContent}>

              <AppText style={styles.objectiveLabel}>
                OBJETIVO DEL PASO
              </AppText>

              <AppText style={styles.objectiveText}>
                {pasoActualData.objetivo}
              </AppText>

            </View>


          </View>

        )}


        {/* =================================================
            IMPORTANCIA
        ================================================= */}


        {pasoActualData
          ?.nivelImportancia ===
          'clave' && (

          <View style={styles.importantNotice}>

            <MaterialCommunityIcons
              name="star-outline"
              size={19}
              color="#F2B35B"
            />

            <AppText style={styles.importantText}>
              Este paso influye directamente en el resultado final.
            </AppText>

          </View>

        )}


        {pasoActualData
          ?.nivelImportancia ===
          'critico' && (

          <View style={styles.criticalNotice}>

            <MaterialCommunityIcons
              name="alert-outline"
              size={20}
              color="#FF9A6A"
            />

            <AppText style={styles.criticalText}>
              Paso crítico. Hazlo con calma y verifica el resultado antes de continuar.
            </AppText>

          </View>

        )}


      </View>


      {/* =================================================
          PREGUNTA CHEF LUNA
      ================================================= */}


      {pasoActualData
        ?.chefPregunta && (

        <View style={styles.questionCard}>


          <View style={styles.questionHeader}>


            <View style={styles.questionIcon}>

              <MaterialCommunityIcons
                name="head-question-outline"
                size={22}
                color="#9FD18F"
              />

            </View>


            <View style={styles.questionHeaderText}>

              <AppText style={styles.questionEyebrow}>
                APRENDE MIENTRAS COCINAS
              </AppText>

              <AppText style={styles.questionTitle}>
                Pregunta de Chef Luna
              </AppText>

            </View>


          </View>


          <AppText style={styles.questionText}>
            {pasoActualData.chefPregunta}
          </AppText>


          {!mostrarRespuesta && (

            <TouchableOpacity

              activeOpacity={0.84}

              style={styles.answerButton}

              onPress={() =>
                setMostrarRespuesta(
                  true
                )
              }

            >

              <MaterialCommunityIcons
                name="lightbulb-outline"
                size={17}
                color="#1C291B"
              />

              <AppText style={styles.answerButtonText}>
                Ver respuesta
              </AppText>

            </TouchableOpacity>

          )}


          {mostrarRespuesta &&
            pasoActualData
              .respuestaEsperada && (

            <View style={styles.answerBox}>


              <View style={styles.answerLabelRow}>

                <MaterialCommunityIcons
                  name="lightbulb-on-outline"
                  size={17}
                  color="#F2B35B"
                />

                <AppText style={styles.answerLabel}>
                  RESPUESTA CHEF LUNA
                </AppText>

              </View>


              <AppText style={styles.answerText}>
                {pasoActualData.respuestaEsperada}
              </AppText>


            </View>

          )}


        </View>

      )}


      {/* =================================================
          PASO
      ================================================= */}


      <View style={styles.stepSection}>


        <View style={styles.stepSectionHeader}>

          <AppText style={styles.stepSectionEyebrow}>
            AHORA HAZ ESTO
          </AppText>

          <AppText style={styles.stepSectionTitle}>
            Paso {pasoActual + 1}
          </AppText>

        </View>


        <CookingStep

          titulo={
            receta.titulo
          }

          paso={
            paso
          }

          numero={
            pasoActual + 1
          }

          total={
            receta.pasos.length
          }

          puedeRetroceder={
            pasoActual > 0
          }

          puedeAvanzar={
            pasoActual <
            receta.pasos.length - 1
          }


          onPrev={() => {

            const anterior =
              Math.max(
                0,
                pasoActual - 1
              );

            setMostrarRespuesta(
              false
            );

            setPasoActual(
              anterior
            );

            guardarProgreso(
              anterior
            );

            subirPantalla();

          }}


          onNext={
            async () => {

              if (ultimoPaso) {

                await AsyncStorage
                  .removeItem(
                    `cocina_${id}`
                  );

                // 👇 AQUÍ SE PASA EL COSTO PARA DESCONTAR EL PRESUPUESTO
                prepararReceta(
                  receta.id,
                  Number(costo) || 0
                );


                setTerminado(
                  true
                );


                return;

              }


              const siguiente =
                pasoActual + 1;


              setPasoActual(
                siguiente
              );


              setMostrarRespuesta(
                false
              );


              await guardarProgreso(
                siguiente
              );

            }
          }

        />


      </View>


      {/* =================================================
          MENSAJE FINAL DEL PASO
      ================================================= */}


      {!ultimoPaso && (

        <View style={styles.nextHint}>


          <MaterialCommunityIcons
            name="chef-hat"
            size={21}
            color="#F2B35B"
          />


          <View style={styles.nextHintContent}>

            <AppText style={styles.nextHintTitle}>
              Sin prisas
            </AppText>

            <AppText style={styles.nextHintText}>
              Avanza solo cuando este paso haya quedado como esperas.
            </AppText>

          </View>


        </View>

      )}


    </Screen>

  );

}


// ======================================================
// ✅ SUCCESS ITEM
// ======================================================

function SuccessItem({
  icon,
  label,
  value,
}: {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >['name'];
  label: string;
  value: string;
}) {

  return (

    <View style={styles.successItem}>


      <View style={styles.successItemIcon}>

        <MaterialCommunityIcons
          name={icon}
          size={18}
          color="#D7A86E"
        />

      </View>


      <View style={styles.successItemContent}>

        <AppText style={styles.successItemLabel}>
          {label}
        </AppText>

        <AppText style={styles.successItemText}>
          {value}
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


    screen: {

      backgroundColor:
        KitchenColors.background,

      paddingBottom:
        140,

    },


    // ==================================================
    // HERO
    // ==================================================


    hero: {

      backgroundColor:
        '#211510',

      borderRadius:
        26,

      borderWidth:
        1,

      borderColor:
        '#65452F',

      padding:
        19,

      marginBottom:
        16,

    },


    heroTop: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    backButton: {

      width:
        44,

      height:
        44,

      borderRadius:
        15,

      backgroundColor:
        '#372319',

      borderWidth:
        1,

      borderColor:
        '#765039',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        11,

    },


    heroIdentity: {

      flex:
        1,

    },


    heroEyebrow: {

      color:
        '#C17D48',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.5,

    },


    heroTitle: {

      color:
        '#FFF3DD',

      fontSize:
        20,

      lineHeight:
        25,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    stepBadge: {

      minWidth:
        51,

      height:
        51,

      borderRadius:
        16,

      backgroundColor:
        '#19100C',

      borderWidth:
        1,

      borderColor:
        '#4A3326',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginLeft:
        9,

    },


    stepBadgeValue: {

      color:
        '#F2B35B',

      fontSize:
        18,

      fontWeight:
        '900',

    },


    stepBadgeLabel: {

      color:
        '#8E735F',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        0.8,

    },


    progressHeader: {

      flexDirection:
        'row',

      justifyContent:
        'space-between',

      alignItems:
        'center',

      marginTop:
        19,

    },


    progressLabel: {

      color:
        '#8E735F',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.3,

    },


    progressPercent: {

      color:
        '#F2B35B',

      fontSize:
        14,

      fontWeight:
        '900',

    },


    progressTrack: {

      height:
        8,

      backgroundColor:
        '#3A2A20',

      borderRadius:
        999,

      overflow:
        'hidden',

      marginTop:
        9,

    },


    progressFill: {

      height:
        '100%',

      backgroundColor:
        '#F2B35B',

      borderRadius:
        999,

    },


    progressCaption: {

      color:
        '#9D8069',

      fontSize:
        10,

      fontWeight:
        '700',

      marginTop:
        7,

    },


    // ==================================================
    // CHEF
    // ==================================================


    chefCard: {

      marginTop:
        Spacing.md,

      backgroundColor:
        '#251A14',

      borderRadius:
        23,

      borderWidth:
        1,

      borderColor:
        '#805437',

      padding:
        18,

    },


    chefHeader: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    chefIcon: {

      width:
        48,

      height:
        48,

      borderRadius:
        16,

      backgroundColor:
        '#3A2418',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        11,

    },


    chefIdentity: {

      flex:
        1,

    },


    chefEyebrow: {

      color:
        '#C17D48',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.4,

    },


    chefTitle: {

      color:
        '#FFF3DD',

      fontSize:
        16,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    chefText: {

      marginTop:
        15,

      color:
        '#E2CAB2',

      fontSize:
        14,

      lineHeight:
        22,

    },


    keyBadge: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        4,

      paddingHorizontal:
        8,

      paddingVertical:
        6,

      borderRadius:
        999,

      backgroundColor:
        '#3B2719',

    },


    keyBadgeText: {

      color:
        '#F2B35B',

      fontSize:
        7,

      fontWeight:
        '900',

    },


    criticalBadge: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        4,

      paddingHorizontal:
        8,

      paddingVertical:
        6,

      borderRadius:
        999,

      backgroundColor:
        '#40231A',

    },


    criticalBadgeText: {

      color:
        '#FF9A6A',

      fontSize:
        7,

      fontWeight:
        '900',

    },


    objectiveCard: {

      marginTop:
        15,

      flexDirection:
        'row',

      backgroundColor:
        '#1D1511',

      borderRadius:
        16,

      borderWidth:
        1,

      borderColor:
        '#473126',

      padding:
        12,

    },


    objectiveIcon: {

      width:
        36,

      height:
        36,

      borderRadius:
        12,

      backgroundColor:
        '#342219',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    objectiveContent: {

      flex:
        1,

    },


    objectiveLabel: {

      color:
        '#A57B5C',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.1,

    },


    objectiveText: {

      color:
        '#E8D3BE',

      fontSize:
        12,

      lineHeight:
        18,

      fontWeight:
        '700',

      marginTop:
        3,

    },


    importantNotice: {

      marginTop:
        12,

      flexDirection:
        'row',

      alignItems:
        'flex-start',

      gap:
        8,

      backgroundColor:
        '#382719',

      borderRadius:
        14,

      padding:
        11,

    },


    importantText: {

      flex:
        1,

      color:
        '#E8C487',

      fontSize:
        11,

      lineHeight:
        17,

      fontWeight:
        '800',

    },


    criticalNotice: {

      marginTop:
        12,

      flexDirection:
        'row',

      alignItems:
        'flex-start',

      gap:
        8,

      backgroundColor:
        '#3B211A',

      borderRadius:
        14,

      borderWidth:
        1,

      borderColor:
        '#78422E',

      padding:
        11,

    },


    criticalText: {

      flex:
        1,

      color:
        '#FFB096',

      fontSize:
        11,

      lineHeight:
        17,

      fontWeight:
        '800',

    },


    // ==================================================
    // QUESTION
    // ==================================================


    questionCard: {

      marginTop:
        16,

      backgroundColor:
        '#1E2B1E',

      borderRadius:
        22,

      borderWidth:
        1,

      borderColor:
        '#587357',

      padding:
        17,

    },


    questionHeader: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    questionIcon: {

      width:
        44,

      height:
        44,

      borderRadius:
        14,

      backgroundColor:
        '#2B3D29',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    questionHeaderText: {

      flex:
        1,

    },


    questionEyebrow: {

      color:
        '#8FB276',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    questionTitle: {

      color:
        '#EEF4E9',

      fontSize:
        16,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    questionText: {

      marginTop:
        14,

      color:
        '#D8E4D2',

      fontSize:
        14,

      lineHeight:
        21,

      fontWeight:
        '700',

    },


    answerButton: {

      marginTop:
        15,

      minHeight:
        44,

      borderRadius:
        14,

      backgroundColor:
        '#9BC78A',

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        7,

    },


    answerButtonText: {

      color:
        '#1C291B',

      fontSize:
        11,

      fontWeight:
        '900',

    },


    answerBox: {

      marginTop:
        15,

      backgroundColor:
        '#172017',

      borderRadius:
        15,

      borderWidth:
        1,

      borderColor:
        '#425940',

      padding:
        13,

    },


    answerLabelRow: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        6,

    },


    answerLabel: {

      color:
        '#F2B35B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    answerText: {

      color:
        '#E3EDD9',

      fontSize:
        13,

      lineHeight:
        20,

      fontWeight:
        '700',

      marginTop:
        8,

    },


    // ==================================================
    // STEP
    // ==================================================


    stepSection: {

      marginTop:
        25,

    },


    stepSectionHeader: {

      marginBottom:
        12,

    },


    stepSectionEyebrow: {

      color:
        '#C17D48',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.5,

    },


    stepSectionTitle: {

      color:
        '#FFF3DD',

      fontSize:
        23,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    nextHint: {

      marginTop:
        18,

      flexDirection:
        'row',

      alignItems:
        'flex-start',

      gap:
        10,

      backgroundColor:
        '#1D1511',

      borderRadius:
        17,

      borderWidth:
        1,

      borderColor:
        '#3F2D24',

      padding:
        14,

    },


    nextHintContent: {

      flex:
        1,

    },


    nextHintTitle: {

      color:
        '#F1DCC7',

      fontSize:
        12,

      fontWeight:
        '900',

    },


    nextHintText: {

      color:
        '#987C67',

      fontSize:
        11,

      lineHeight:
        17,

      marginTop:
        2,

    },


    // ==================================================
    // FINISHED
    // ==================================================


    finishedHero: {

      marginTop:
        Spacing.xl,

      backgroundColor:
        '#202B20',

      borderRadius:
        27,

      borderWidth:
        1,

      borderColor:
        '#587357',

      padding:
        26,

      alignItems:
        'center',

    },


    finishedIcon: {

      width:
        72,

      height:
        72,

      borderRadius:
        24,

      backgroundColor:
        '#9BC78A',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    finishedEyebrow: {

      color:
        '#8FB276',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.6,

      marginTop:
        16,

    },


    finishedTitle: {

      color:
        '#F2F4ED',

      textAlign:
        'center',

      fontSize:
        27,

      fontWeight:
        '900',

      marginTop:
        5,

    },


    finishedRecipe: {

      color:
        '#D2E5C9',

      textAlign:
        'center',

      fontSize:
        16,

      fontWeight:
        '900',

      marginTop:
        7,

    },


    finishedText: {

      color:
        '#B8C7B1',

      textAlign:
        'center',

      marginTop:
        12,

      lineHeight:
        21,

      fontSize:
        13,

    },


    finishedButton: {

      marginTop:
        Spacing.xl,

      width:
        '100%',

    },


    // ==================================================
    // SUCCESS
    // ==================================================


    successCard: {

      marginTop:
        Spacing.lg,

      backgroundColor:
        '#251A14',

      borderRadius:
        23,

      borderWidth:
        1,

      borderColor:
        '#795139',

      padding:
        18,

    },


    successHeader: {

      flexDirection:
        'row',

      alignItems:
        'center',

      marginBottom:
        15,

    },


    successIcon: {

      width:
        45,

      height:
        45,

      borderRadius:
        15,

      backgroundColor:
        '#392319',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    successHeaderText: {

      flex:
        1,

    },


    successEyebrow: {

      color:
        '#C17D48',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    successTitle: {

      color:
        '#FFF3DD',

      fontWeight:
        '900',

      fontSize:
        17,

      marginTop:
        2,

    },


    successItem: {

      flexDirection:
        'row',

      alignItems:
        'flex-start',

      paddingVertical:
        11,

      borderTopWidth:
        1,

      borderTopColor:
        '#3F2B22',

    },


    successItemIcon: {

      width:
        34,

      height:
        34,

      borderRadius:
        11,

      backgroundColor:
        '#342219',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        10,

    },


    successItemContent: {

      flex:
        1,

    },


    successItemLabel: {

      color:
        '#C39D7C',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1,

      textTransform:
        'uppercase',

    },


    successItemText: {

      color:
        '#F2DFCB',

      fontSize:
        12,

      lineHeight:
        18,

      marginTop:
        3,

    },


    historyNotice: {

      marginTop:
        16,

      flexDirection:
        'row',

      alignItems:
        'center',

      backgroundColor:
        '#1D251C',

      borderRadius:
        17,

      padding:
        14,

      borderWidth:
        1,

      borderColor:
        '#435342',

    },


    historyNoticeContent: {

      flex:
        1,

      marginLeft:
        10,

    },


    historyNoticeTitle: {

      color:
        '#DCE8D5',

      fontSize:
        12,

      fontWeight:
        '900',

    },


    historyNoticeText: {

      color:
        '#96A491',

      fontSize:
        10,

      lineHeight:
        16,

      marginTop:
        2,

    },


    // ==================================================
    // NOT FOUND
    // ==================================================


    notFoundCard: {

      marginTop:
        60,

      backgroundColor:
        '#211712',

      borderRadius:
        27,

      borderWidth:
        1,

      borderColor:
        '#51372B',

      padding:
        28,

      alignItems:
        'center',

    },


    notFoundIcon: {

      width:
        76,

      height:
        76,

      borderRadius:
        24,

      backgroundColor:
        '#352319',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    notFoundEyebrow: {

      color:
        '#C17D48',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.5,

      marginTop:
        17,

    },


    notFoundTitle: {

      color:
        '#FFF3DD',

      fontSize:
        22,

      fontWeight:
        '900',

      marginTop:
        5,

    },


    notFoundText: {

      color:
        '#A98D76',

      fontSize:
        13,

      lineHeight:
        20,

      textAlign:
        'center',

      marginTop:
        8,

    },


    notFoundButton: {

      marginTop:
        20,

      minHeight:
        48,

      paddingHorizontal:
        18,

      borderRadius:
        16,

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

    },


    notFoundButtonText: {

      color:
        '#24140A',

      fontSize:
        12,

      fontWeight:
        '900',

    },

  });