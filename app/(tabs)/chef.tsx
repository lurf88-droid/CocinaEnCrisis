import {
  useMemo,
  useState,
} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Screen } from '@/components/ui/Screen';
import { AppText } from '@/components/ui/AppText';

import { ChefDashboard } from '@/components/chef/ChefDashboard';
import { ChefModeSelector } from '@/components/chef/ChefModeSelector';
import { ChefRecommendationCard } from '@/components/chef/ChefRecommendationCard';

import { ChefWelcomeCard } from '@/components/chef/ChefWelcomeCard';

import {
  obtenerMensajeRecetaChef,
} from '@/utils/chefRecipeMessages';

import {
  obtenerMensajeMemoriaChef,
} from '@/utils/chefMemory';

import {
  useIngredientes,
} from '@/context/IngredientesContext';

import {
  ChefEngine,
} from '@/services/chef-engine';

import type {
  ChefMode,
} from '@/utils/chefMode';

import {
  useCiudad,
} from '@/hooks/use-ciudad';



import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


// ======================================================
// 👨‍🍳 CHEF LUNA
// ======================================================

export default function ChefScreen() {

  const {
    ingredientes,
    presupuesto,
    historial,
  } = useIngredientes();


  const {
    buscarRecetas,
  } = useCiudad();


  const [
    modo,
    setModo,
  ] = useState<ChefMode>(
    'crisis'
  );


 




  const [
    bienvenidaChef,
    setBienvenidaChef,
  ] = useState(true);


  // ====================================================
  // 🔎 BUSCAR RECETAS
  // ====================================================

  const resultados =
  useMemo(() => {

    if (
      bienvenidaChef ||
      ingredientes.length === 0
    ) {
      return [];
    }

    return buscarRecetas(
      ingredientes,
      presupuesto
    );

  }, [
    bienvenidaChef,
    ingredientes,
    presupuesto,
    buscarRecetas,
  ]);

  // ====================================================
  // 🧠 DASHBOARD
  // ====================================================

  const dashboard =
    useMemo(() => {

      return ChefEngine.dashboard({

        resultados,

        presupuesto,

        modo,

      });

    }, [
      resultados,
      presupuesto,
      modo,
    ]);


  const recetaRecomendada =
    dashboard.mejorReceta;


  const compraSugerida =
    dashboard.desbloqueo
      ? {

          ingrediente:
            dashboard
              .desbloqueo
              .ingrediente,

          cantidad:
            dashboard
              .desbloqueo
              .cantidad,

          recetasNuevas:
            dashboard
              .desbloqueo
              .recetasNuevas,

          costo:
            dashboard
              .desbloqueo
              .costo,

          razon:
            dashboard
              .desbloqueo
              .razon,

          mensajeChef:
            dashboard
              .desbloqueo
              .mensajeChef,

        }
      : null;


  const mensajeReceta =
    recetaRecomendada
      ? obtenerMensajeRecetaChef(
          recetaRecomendada
        )
      : '';


  const mensajeMemoria =
    obtenerMensajeMemoriaChef(
      historial
    );


  const recetasListas =
    dashboard.recetasListas
      ?.length
    ?? 0;


  const recetasCrisis =
    dashboard.recetasCrisis
      ?.length
    ?? 0;


  const confianza =
    recetaRecomendada
      ?.compatibilidad
    ?? 0;


  // ====================================================
  // 🎨 UI
  // ====================================================

  return (

    <Screen style={styles.screen}>


      <ScrollView

        showsVerticalScrollIndicator={false}

        contentContainerStyle={
          styles.container
        }

      >


        {/* =================================================
            BIENVENIDA
        ================================================= */}


        {bienvenidaChef ? (

          <View style={styles.welcomeCard}>


            <View style={styles.avatarOuter}>


              <View style={styles.avatarGlow} />


              <Image

                source={
                  require(
                    '@/assets/images/chef-avatar.png'
                  )
                }

                style={styles.avatar}

              />


              <View style={styles.avatarBadge}>

                <MaterialCommunityIcons
                  name="chef-hat"
                  size={14}
                  color="#24140A"
                />

              </View>


            </View>


            <AppText style={styles.welcomeEyebrow}>
              TU CHEF PERSONAL
            </AppText>


            <AppText style={styles.title}>
              Chef Luna
            </AppText>


            <AppText style={styles.greeting}>
              ¿Qué cocinamos hoy?
            </AppText>


            <AppText style={styles.text}>
              Voy a revisar tu despensa, tu presupuesto y tus recetas para ayudarte a decidir qué preparar.
            </AppText>


            <View style={styles.welcomeFeatures}>


              <WelcomeFeature
                icon="basket-outline"
                label="Tu despensa"
              />


              <WelcomeFeature
                icon="cash"
                label="Tu presupuesto"
              />


              <WelcomeFeature
                icon="chef-hat"
                label="Una decisión"
              />


            </View>


            <TouchableOpacity

              activeOpacity={0.86}

              style={styles.enterButton}

              onPress={() => {

                setBienvenidaChef(
                  false
                );

              }}

            >

              <MaterialCommunityIcons
                name="fire"
                size={20}
                color="#24140A"
              />

              <AppText style={styles.enterButtonText}>
                Entrar con Chef Luna
              </AppText>

              <MaterialCommunityIcons
                name="arrow-right"
                size={18}
                color="#24140A"
              />

            </TouchableOpacity>


          </View>

        ) : (

          <>


            {/* =================================================
                HERO CHEF
            ================================================= */}


            <View style={styles.hero}>


              <View style={styles.heroTop}>


                <View style={styles.heroAvatarWrap}>

                  <Image

                    source={
                      require(
                        '@/assets/images/chef-avatar.png'
                      )
                    }

                    style={styles.heroAvatar}

                  />

                </View>


                <View style={styles.heroIdentity}>

                  <AppText style={styles.heroEyebrow}>
                    CHEF LUNA
                  </AppText>

                  <AppText style={styles.heroTitle}>
                    Tu cocina, mi decisión
                  </AppText>

                </View>


                <View style={styles.heroStatus}>

                  <View style={styles.statusDot} />

                  <AppText style={styles.statusText}>
                    ACTIVA
                  </AppText>

                </View>


              </View>


              <AppText style={styles.heroDescription}>
                Dime qué tienes. Yo me encargo de encontrar la mejor salida.
              </AppText>


              <View style={styles.heroStats}>


                <HeroStat
                  value={`${ingredientes.length}`}
                  label="INGREDIENTES"
                />


                <View style={styles.heroDivider} />


                <HeroStat
                  value={`${recetasListas}`}
                  label="LISTAS"
                />


                <View style={styles.heroDivider} />


                <HeroStat
                  value={`${Math.round(confianza)}%`}
                  label="CONFIANZA"
                />


              </View>


            </View>


            {/* =================================================
                MEMORIA
            ================================================= */}


            <View style={styles.sectionSpacing}>

              <ChefWelcomeCard
                mensaje={
                  mensajeMemoria
                }
              />

            </View>


            {/* =================================================
                MODE
            ================================================= */}


            <View style={styles.modeSection}>


              <View style={styles.sectionHeader}>


                <View>

                  <AppText style={styles.sectionEyebrow}>
                    CÓMO QUIERES QUE DECIDA
                  </AppText>

                  <AppText style={styles.sectionTitle}>
                    Elige el enfoque
                  </AppText>

                </View>


                <View style={styles.modeBadge}>

                  <MaterialCommunityIcons
                    name={
                      modo === 'crisis'
                        ? 'fire'
                        : modo === 'ahorro'
                          ? 'piggy-bank-outline'
                          : modo === 'rapido'
                            ? 'clock-fast'
                            : 'heart-outline'
                    }
                    size={15}
                    color="#F2B35B"
                  />

                  <AppText style={styles.modeBadgeText}>
                    {modo.toUpperCase()}
                  </AppText>

                </View>


              </View>


              <ChefModeSelector

                modo={
                  modo
                }

                cambiarModo={
                  setModo
                }

              />


            </View>


            {/* =================================================
                ANALIZANDO
            ================================================= */}




            {/* =================================================
                EMPTY PANTRY
            ================================================= */}


         {ingredientes.length === 0 && (

              <View style={styles.emptyPantry}>


                <View style={styles.emptyPantryIcon}>

                  <MaterialCommunityIcons
                    name="basket-outline"
                    size={35}
                    color="#F2B35B"
                  />

                </View>


                <AppText style={styles.emptyEyebrow}>
                  NECESITO CONOCER TU COCINA
                </AppText>


                <AppText style={styles.emptyTitle}>
                  Tu despensa está vacía
                </AppText>


                <AppText style={styles.emptyText}>
                  Agrega algunos ingredientes para que Chef Luna pueda decidir qué puedes cocinar.
                </AppText>


                <TouchableOpacity

                  activeOpacity={0.86}

                  style={styles.emptyButton}

                  onPress={() =>
                    router.push(
                      '/(tabs)/despensa'
                    )
                  }

                >

                  <MaterialCommunityIcons
                    name="basket-plus-outline"
                    size={18}
                    color="#24140A"
                  />

                  <AppText style={styles.emptyButtonText}>
                    Llenar mi despensa
                  </AppText>

                </TouchableOpacity>


              </View>

            )}


            {/* =================================================
                RESULTADOS
            ================================================= */}


          {ingredientes.length > 0 && (
              <>


                {/* DASHBOARD */}


                <View style={styles.dashboardSection}>


                  <View style={styles.sectionHeader}>


                    <View>

                      <AppText style={styles.sectionEyebrow}>
                        ANÁLISIS CHEF LUNA
                      </AppText>

                      <AppText style={styles.sectionTitle}>
                        Lo que veo en tu cocina
                      </AppText>

                    </View>


                    <View style={styles.analysisBadge}>

                      <AppText style={styles.analysisValue}>
                        {resultados.length}
                      </AppText>

                      <AppText style={styles.analysisLabel}>
                        OPCIONES
                      </AppText>

                    </View>


                  </View>


                  <ChefDashboard
                    mensaje={
                      dashboard.consejo
                    }
                  />


                </View>


                {/* RECOMMENDATION */}


                {recetaRecomendada ? (

                  <View style={styles.recommendationSection}>


                    <View style={styles.recommendationHeader}>


                      <View>

                        <AppText style={styles.sectionEyebrow}>
                          MI ELECCIÓN
                        </AppText>

                        <AppText style={styles.recommendationTitle}>

                          {
                            modo === 'crisis'
                              ? 'Chef Luna decidió por ti'
                              : 'Mi mejor recomendación'
                          }

                        </AppText>

                      </View>


                      <View style={styles.confidenceBadge}>

                        <MaterialCommunityIcons
                          name="check-decagram-outline"
                          size={15}
                          color="#9BC78A"
                        />

                        <AppText style={styles.confidenceText}>
                          {Math.round(confianza)}%
                        </AppText>

                      </View>


                    </View>


                    <ChefRecommendationCard

                      receta={
                        recetaRecomendada
                      }

                      confianza={
                        confianza
                      }

                     razones={
  dashboard.razonesChef
}

                      mensajeChef={
                        mensajeReceta
                      }

                      modo={
                        modo
                      }

                      compraSugerida={
                        compraSugerida
                      }
onCompraSugerida={() => {
  if (!dashboard.desbloqueo) {
    return;
  }

  const recetaOportunidad =
    resultados.find(
      receta =>
        receta.titulo ===
        dashboard.desbloqueo?.recetasNuevas?.[0]
    );

  if (!recetaOportunidad) {
    return;
  }

  router.push({
    pathname: '/receta/[id]',
    params: {
      id: recetaOportunidad.id,
      modo: 'oportunidad',
      ingrediente:
        dashboard.desbloqueo.ingrediente,
    },
  });
}}
                      onPreparar={() => {

                        router.push(
                          `/cooking/${recetaRecomendada.id}`
                        );

                      }}

                    />


                    <TouchableOpacity

                      activeOpacity={0.82}

                      style={styles.viewRecipeButton}

                      onPress={() => {

                        router.push(
                          `/receta/${recetaRecomendada.id}`
                        );

                      }}

                    >

                      <MaterialCommunityIcons
                        name="book-open-page-variant-outline"
                        size={18}
                        color="#D7A86E"
                      />

                      <AppText style={styles.viewRecipeText}>
                        Ver receta completa
                      </AppText>

                      <MaterialCommunityIcons
                        name="arrow-right"
                        size={17}
                        color="#D7A86E"
                      />

                    </TouchableOpacity>


                  </View>

                ) : (

                  <View style={styles.noResultsCard}>


                    <View style={styles.noResultsIcon}>

                      <MaterialCommunityIcons
                        name="chef-hat"
                        size={31}
                        color="#F2B35B"
                      />

                    </View>


                    <AppText style={styles.emptyEyebrow}>
                      CHEF LUNA SIGUE BUSCANDO
                    </AppText>


                    <AppText style={styles.noResultsTitle}>
                      Todavía no encuentro una buena opción
                    </AppText>


                    <AppText style={styles.emptyText}>
                      Prueba agregando uno o dos ingredientes más a tu despensa.
                    </AppText>


                    <TouchableOpacity

                      style={styles.secondaryButton}

                      onPress={() =>
                        router.push(
                          '/(tabs)/despensa'
                        )
                      }

                    >

                      <MaterialCommunityIcons
                        name="basket-outline"
                        size={17}
                        color="#F2B35B"
                      />

                      <AppText style={styles.secondaryButtonText}>
                        Revisar despensa
                      </AppText>

                    </TouchableOpacity>


                  </View>

                )}


                {/* =================================================
                    CRISIS POWER
                ================================================= */}


                {modo === 'crisis' &&
                  recetasCrisis > 0 && (

                  <View style={styles.crisisFooter}>


                    <MaterialCommunityIcons
                      name="fire"
                      size={22}
                      color="#F2B35B"
                    />


                    <View style={styles.crisisFooterContent}>

                      <AppText style={styles.crisisFooterTitle}>
                        Crisis culinaria resuelta
                      </AppText>

                      <AppText style={styles.crisisFooterText}>
                        Encontré {recetasCrisis} {
                          recetasCrisis === 1
                            ? 'opción viable'
                            : 'opciones viables'
                        }, pero te mostré la que considero mejor para hoy.
                      </AppText>

                    </View>


                  </View>

                )}


              </>

            )}


          </>

        )}


      </ScrollView>


    </Screen>

  );

}


// ======================================================
// 🍳 WELCOME FEATURE
// ======================================================

function WelcomeFeature({
  icon,
  label,
}: {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >['name'];
  label: string;
}) {

  return (

    <View style={styles.welcomeFeature}>

      <MaterialCommunityIcons
        name={icon}
        size={19}
        color="#D7A86E"
      />

      <AppText style={styles.welcomeFeatureText}>
        {label}
      </AppText>

    </View>

  );

}


// ======================================================
// 📊 HERO STAT
// ======================================================

function HeroStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {

  return (

    <View style={styles.heroStat}>

      <AppText style={styles.heroStatValue}>
        {value}
      </AppText>

      <AppText style={styles.heroStatLabel}>
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


    screen: {

      backgroundColor:
        KitchenColors.background,

    },


    container: {

      padding:
        20,

      paddingBottom:
        140,

    },


    // ==================================================
    // WELCOME
    // ==================================================


    welcomeCard: {

      marginTop:
        24,

      backgroundColor:
        '#211510',

      borderRadius:
        30,

      borderWidth:
        1,

      borderColor:
        '#704B34',

      padding:
        27,

      alignItems:
        'center',

      shadowColor:
        '#000',

      shadowOpacity:
        0.38,

      shadowRadius:
        22,

      shadowOffset: {
        width: 0,
        height: 12,
      },

      elevation:
        10,

    },

avatarOuter: {
  width: 170,
  height: 170,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginBottom: 4,
},

avatarGlow: {
  position: 'absolute',
  width: 156,
  height: 156,
  borderRadius: 78,
  backgroundColor: 'rgba(242,179,91,0.10)',
  borderWidth: 1,
  borderColor: 'rgba(242,179,91,0.28)',
},

avatar: {
  width: 140,
  height: 140,
  borderRadius: 70,
  borderWidth: 3,
  borderColor: '#F2B35B',
  resizeMode: 'cover',
},

    avatarBadge: {

      position:
        'absolute',

      right:
        4,

      bottom:
        12,

      width:
        38,

      height:
        38,

      borderRadius:
        13,

      backgroundColor:
        '#F2B35B',

      borderWidth:
        4,

      borderColor:
        '#211510',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    welcomeEyebrow: {

      color:
        '#C17D48',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.7,

      marginTop:
        20,

    },


    title: {

      fontSize:
        35,

      fontWeight:
        '900',

      color:
        '#FFF3DD',

      marginTop:
        4,

    },


    greeting: {

      marginTop:
        20,

      fontSize:
        22,

      fontWeight:
        '900',

      color:
        '#F2B35B',

      textAlign:
        'center',

    },


    text: {

      marginTop:
        16,

      textAlign:
        'center',

      fontSize:
        14,

      lineHeight:
        24,
paddingHorizontal: 8,
      color:
        '#D5BBA3',

    },


    welcomeFeatures: {

      width:
        '100%',

      flexDirection:
        'row',

      gap:
        8,

      marginTop:
        22,

    },


    welcomeFeature: {

      flex:
        1,

      minHeight:
        66,

      backgroundColor:
        '#1A110D',

      borderRadius:
        15,

      borderWidth:
        1,

      borderColor:
        '#3F2B22',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        5,

    },


    welcomeFeatureText: {

      color:
        '#A98A72',

      fontSize:
        8,

      fontWeight:
        '900',

      textAlign:
        'center',

    },


    enterButton: {

      width:
        '100%',

      minHeight:
        53,

      marginTop:
        22,

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

    },


    enterButtonText: {

      color:
        '#24140A',

      fontSize:
        12,

      fontWeight:
        '900',

    },


    // ==================================================
    // HERO
    // ==================================================


    hero: {

      backgroundColor:
        '#211510',

      borderRadius:
        27,

      borderWidth:
        1,

      borderColor:
        '#65452F',

      padding:
        19,

    },


    heroTop: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    heroAvatarWrap: {

      width:
        54,

      height:
        54,

      borderRadius:
        18,

      borderWidth:
        1,

      borderColor:
        '#8A5A35',

      padding:
        3,

      marginRight:
        11,

    },


    heroAvatar: {

      width:
        '100%',

      height:
        '100%',

      borderRadius:
        14,

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
        19,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    heroStatus: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        5,

      backgroundColor:
        '#1E2A1E',

      borderRadius:
        999,

      paddingHorizontal:
        8,

      paddingVertical:
        6,

    },


    statusDot: {

      width:
        6,

      height:
        6,

      borderRadius:
        99,

      backgroundColor:
        '#8FB276',

    },


    statusText: {

      color:
        '#9BC78A',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        1,

    },


    heroDescription: {

      color:
        '#CDB49D',

      fontSize:
        13,

      lineHeight:
        20,

      marginTop:
        15,

    },


    heroStats: {

      flexDirection:
        'row',

      marginTop:
        17,

      backgroundColor:
        '#19100C',

      borderRadius:
        16,

      borderWidth:
        1,

      borderColor:
        '#3B2920',

      paddingVertical:
        12,

    },


    heroStat: {

      flex:
        1,

      alignItems:
        'center',

    },


    heroStatValue: {

      color:
        '#F2B35B',

      fontSize:
        15,

      fontWeight:
        '900',

    },


    heroStatLabel: {

      color:
        '#806A59',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        0.8,

      marginTop:
        2,

    },


    heroDivider: {

      width:
        1,

      backgroundColor:
        '#3D2B22',

    },


    // ==================================================
    // SECTIONS
    // ==================================================


    sectionSpacing: {

      marginTop:
        16,

    },


    modeSection: {

      marginTop:
        25,

    },


    sectionHeader: {

      flexDirection:
        'row',

      alignItems:
        'flex-end',

      justifyContent:
        'space-between',

      marginBottom:
        13,

    },


    sectionEyebrow: {

      color:
        '#C17D48',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.5,

    },


    sectionTitle: {

      color:
        '#FFF3DD',

      fontSize:
        21,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    modeBadge: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        5,

      backgroundColor:
        '#342219',

      borderWidth:
        1,

      borderColor:
        '#64432F',

      borderRadius:
        999,

      paddingHorizontal:
        9,

      paddingVertical:
        6,

    },


    modeBadgeText: {

      color:
        '#F2B35B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        0.8,

    },


    thinkingWrap: {

      marginTop:
        20,

    },


    dashboardSection: {

      marginTop:
        26,

    },


    analysisBadge: {

      minWidth:
        48,

      height:
        42,

      borderRadius:
        13,

      backgroundColor:
        '#2B1E16',

      borderWidth:
        1,

      borderColor:
        '#60422F',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    analysisValue: {

      color:
        '#F2B35B',

      fontSize:
        14,

      fontWeight:
        '900',

    },


    analysisLabel: {

      color:
        '#806A59',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        0.8,

    },


    // ==================================================
    // RECOMMENDATION
    // ==================================================


    recommendationSection: {

      marginTop:
        27,

    },


    recommendationHeader: {

      flexDirection:
        'row',

      alignItems:
        'flex-end',

      justifyContent:
        'space-between',

      marginBottom:
        13,

    },


    recommendationTitle: {

      color:
        '#FFF3DD',

      fontSize:
        22,

      lineHeight:
        27,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    confidenceBadge: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        5,

      backgroundColor:
        '#1F2B1E',

      borderRadius:
        999,

      paddingHorizontal:
        9,

      paddingVertical:
        7,

    },


    confidenceText: {

      color:
        '#9BC78A',

      fontSize:
        10,

      fontWeight:
        '900',

    },


    viewRecipeButton: {

      marginTop:
        10,

      minHeight:
        46,

      borderRadius:
        15,

      borderWidth:
        1,

      borderColor:
        '#67452F',

      backgroundColor:
        '#251A14',

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        7,

    },


    viewRecipeText: {

      color:
        '#D7A86E',

      fontSize:
        10,

      fontWeight:
        '900',

    },


    // ==================================================
    // EMPTY
    // ==================================================


    emptyPantry: {

      marginTop:
        25,

      backgroundColor:
        '#211712',

      borderRadius:
        25,

      borderWidth:
        1,

      borderColor:
        '#51372B',

      padding:
        25,

      alignItems:
        'center',

    },


    emptyPantryIcon: {

      width:
        70,

      height:
        70,

      borderRadius:
        23,

      backgroundColor:
        '#352319',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    emptyEyebrow: {

      color:
        '#C17D48',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.4,

      marginTop:
        16,

    },


    emptyTitle: {

      color:
        '#FFF3DD',

      fontSize:
        21,

      fontWeight:
        '900',

      textAlign:
        'center',

      marginTop:
        5,

    },


    emptyText: {

      color:
        '#A98D76',

      fontSize:
        12,

      lineHeight:
        19,

      textAlign:
        'center',

      marginTop:
        8,

    },


    emptyButton: {

      marginTop:
        18,

      minHeight:
        47,

      paddingHorizontal:
        17,

      borderRadius:
        15,

      backgroundColor:
        '#F2B35B',

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        7,

    },


    emptyButtonText: {

      color:
        '#24140A',

      fontSize:
        10,

      fontWeight:
        '900',

    },


    noResultsCard: {

      marginTop:
        25,

      backgroundColor:
        '#211712',

      borderRadius:
        25,

      borderWidth:
        1,

      borderColor:
        '#51372B',

      padding:
        25,

      alignItems:
        'center',

    },


    noResultsIcon: {

      width:
        62,

      height:
        62,

      borderRadius:
        20,

      backgroundColor:
        '#352319',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    noResultsTitle: {

      color:
        '#FFF3DD',

      fontSize:
        19,

      lineHeight:
        24,

      fontWeight:
        '900',

      textAlign:
        'center',

      marginTop:
        5,

    },


    secondaryButton: {

      marginTop:
        17,

      minHeight:
        44,

      paddingHorizontal:
        15,

      borderRadius:
        14,

      borderWidth:
        1,

      borderColor:
        '#704B34',

      backgroundColor:
        '#302017',

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        7,

    },


    secondaryButtonText: {

      color:
        '#F2B35B',

      fontSize:
        10,

      fontWeight:
        '900',

    },


    // ==================================================
    // CRISIS FOOTER
    // ==================================================


    crisisFooter: {

      marginTop:
        20,

      flexDirection:
        'row',

      alignItems:
        'flex-start',

      gap:
        10,

      backgroundColor:
        '#261A13',

      borderRadius:
        18,

      borderWidth:
        1,

      borderColor:
        '#62422F',

      padding:
        15,

    },


    crisisFooterContent: {

      flex:
        1,

    },


    crisisFooterTitle: {

      color:
        '#F1DCC7',

      fontSize:
        12,

      fontWeight:
        '900',

    },


    crisisFooterText: {

      color:
        '#9D806B',

      fontSize:
        10,

      lineHeight:
        16,

      marginTop:
        3,

    },

  });