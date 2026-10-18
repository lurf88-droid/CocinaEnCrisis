import React, {
  useMemo,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Screen } from '@/components/ui/Screen';
import { AppText } from '@/components/ui/AppText';

import { useIngredientes } from '@/context/IngredientesContext';
import { RECETAS } from '@/data/recetas';
import { fechaPreparacion } from '@/utils/historialCocina';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


export default function HistorialScreen() {

  const {
    preparaciones,
    favoritos,
  } = useIngredientes();


  const recetas = useMemo(() => {

    return preparaciones
      .map(preparacion => {
        const receta = RECETAS.find(item => item.id === preparacion.recetaId);
        return receta ? { ...receta, preparacion } : undefined;
      })
      .filter(
        (
          receta
        ): receta is NonNullable<typeof receta> =>
          receta !== undefined
      );

  }, [preparaciones]);


  const ultimaReceta =
    recetas.length > 0
      ? recetas[
          recetas.length - 1
        ]
      : null;


  const tiempoTotal =
    recetas.reduce(
      (total, receta) =>
        total +
        receta.tiempoMinutos,
      0
    );


  const porcionesTotales =
    recetas.reduce(
      (total, receta) =>
        total +
        receta.porciones,
      0
    );


  return (

    <Screen style={styles.screen}>


      <ScrollView

        showsVerticalScrollIndicator={false}

        contentContainerStyle={styles.container}

      >


        {/* HERO */}


        <View style={styles.hero}>


          <View style={styles.heroTop}>


            <View style={styles.heroIcon}>

              <MaterialCommunityIcons
                name="history"
                size={29}
                color="#F2B35B"
              />

            </View>


            <View style={styles.heroContent}>

              <AppText style={styles.eyebrow}>
                TU CAMINO EN LA COCINA
              </AppText>

              <AppText style={styles.heroTitle}>
                Historial
              </AppText>

            </View>


            <View style={styles.totalBadge}>

              <AppText style={styles.totalValue}>
                {recetas.length}
              </AppText>

              <AppText style={styles.totalLabel}>
                PREPARADAS
              </AppText>

            </View>


          </View>


          <AppText style={styles.heroDescription}>
            Cada receta preparada cuenta. Aquí puedes volver a lo que ya cocinaste.
          </AppText>


          {recetas.length > 0 && (

            <View style={styles.heroStats}>


              <View style={styles.heroStat}>

                <AppText style={styles.heroStatValue}>
                  {recetas.length}
                </AppText>

                <AppText style={styles.heroStatLabel}>
                  recetas
                </AppText>

              </View>


              <View style={styles.heroDivider} />


              <View style={styles.heroStat}>

                <AppText style={styles.heroStatValue}>
                  {favoritos.length}
                </AppText>

                <AppText style={styles.heroStatLabel}>
                  favoritas
                </AppText>

              </View>


              <View style={styles.heroDivider} />


              <View style={styles.heroStat}>

                <AppText style={styles.heroStatValue}>
                  {porcionesTotales}
                </AppText>

                <AppText style={styles.heroStatLabel}>
                  porciones
                </AppText>

              </View>


            </View>

          )}


        </View>


        {/* ESTADÍSTICAS */}


        {recetas.length > 0 && (

          <View style={styles.statsRow}>


            <View style={styles.statCard}>

              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={20}
                color="#F2B35B"
              />

              <AppText style={styles.statValue}>
                {recetas.length}
              </AppText>

              <AppText style={styles.statLabel}>
                RECETAS
              </AppText>

            </View>


            <View style={styles.statCard}>

              <MaterialCommunityIcons
                name="clock-outline"
                size={20}
                color="#D7A86E"
              />

              <AppText style={styles.statValue}>
                {tiempoTotal}m
              </AppText>

              <AppText style={styles.statLabel}>
                TIEMPO TOTAL
              </AppText>

            </View>


            <View style={styles.statCard}>

              <MaterialCommunityIcons
                name="heart-outline"
                size={20}
                color="#8FB276"
              />

              <AppText style={styles.statValue}>
                {favoritos.length}
              </AppText>

              <AppText style={styles.statLabel}>
                FAVORITAS
              </AppText>

            </View>


          </View>

        )}


        {/* ÚLTIMA RECETA */}


        {ultimaReceta && (

          <View style={styles.section}>


            <AppText style={styles.sectionEyebrow}>
              ÚLTIMA PREPARACIÓN
            </AppText>

            <AppText style={styles.sectionTitle}>
              Lo último que cocinaste
            </AppText>


            <TouchableOpacity

              activeOpacity={0.84}

              style={styles.lastRecipeCard}

              onPress={() => {

                router.push({

                  pathname:
                    '/receta/[id]',

                  params: {
                    id:
                      ultimaReceta.id,
                  },

                });

              }}

            >


              <View style={styles.lastRecipeIcon}>

                <MaterialCommunityIcons
                  name="chef-hat"
                  size={24}
                  color="#F2B35B"
                />

              </View>


              <View style={styles.lastRecipeContent}>

                <AppText style={styles.lastRecipeTitle}>
                  {ultimaReceta.titulo}
                </AppText>


                <View style={styles.lastRecipeMeta}>


                  <View style={styles.metaItem}>

                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={15}
                      color="#B49378"
                    />

                    <AppText style={styles.metaText}>
                      {ultimaReceta.tiempoMinutos} min
                    </AppText>

                  </View>


                  <View style={styles.metaItem}>

                    <MaterialCommunityIcons
                      name="account-group-outline"
                      size={15}
                      color="#B49378"
                    />

                    <AppText style={styles.metaText}>
                      {ultimaReceta.porciones} porciones
                    </AppText>

                  </View>


                </View>


              </View>


              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#A47A5D"
              />


            </TouchableOpacity>


          </View>

        )}


        {/* HISTORIAL */}


        {recetas.length > 0 && (

          <View style={styles.section}>


            <View style={styles.sectionHeader}>


              <View>

                <AppText style={styles.sectionEyebrow}>
                  TU HISTORIAL
                </AppText>

                <AppText style={styles.sectionTitle}>
                  Recetas que ya preparaste
                </AppText>

              </View>


              <View style={styles.countBadge}>

                <AppText style={styles.countBadgeText}>
                  {recetas.length}
                </AppText>

              </View>


            </View>


            <View style={styles.historyList}>


              {[...recetas]
                .reverse()
                .map(
                  (receta, index) => (

                    <TouchableOpacity

                      key={
                        receta.preparacion.id
                      }

                      activeOpacity={0.82}

                      style={styles.historyCard}

                      onPress={() => {

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


                      <View style={styles.timelineWrap}>


                        <View style={styles.timelineDot}>

                          <MaterialCommunityIcons
                            name="check"
                            size={15}
                            color="#20311F"
                          />

                        </View>


                        {index <
                          recetas.length - 1 && (

                          <View style={styles.timelineLine} />

                        )}


                      </View>


                      <View style={styles.historyContent}>


                        <AppText style={styles.historyTitle}>
                          {receta.titulo}
                        </AppText>


                        <AppText style={styles.historySubtitle}>
                          {fechaPreparacion(receta.preparacion.preparadaEn)}
                        </AppText>


                        <View style={styles.historyMeta}>


                          <View style={styles.metaItem}>

                            <MaterialCommunityIcons
                              name="clock-outline"
                              size={14}
                              color="#A98A72"
                            />

                            <AppText style={styles.metaText}>
                              {receta.tiempoMinutos} min
                            </AppText>

                          </View>


                          <View style={styles.metaItem}>

                            <MaterialCommunityIcons
                              name="account-group-outline"
                              size={14}
                              color="#A98A72"
                            />

                            <AppText style={styles.metaText}>
                              {receta.porciones} porciones
                            </AppText>

                          </View>


                        </View>


                      </View>


                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={22}
                        color="#896A56"
                      />


                    </TouchableOpacity>

                  )
                )}


            </View>


          </View>

        )}


        {/* EMPTY */}


        {recetas.length === 0 && (

          <View style={styles.emptyState}>


            <View style={styles.emptyIcon}>

              <MaterialCommunityIcons
                name="pot-steam-outline"
                size={40}
                color="#F2B35B"
              />

            </View>


            <AppText style={styles.emptyEyebrow}>
              TODAVÍA NO HAY HISTORIA
            </AppText>


            <AppText style={styles.emptyTitle}>
              Tu primera receta está esperando
            </AppText>


            <AppText style={styles.emptyText}>
              Cuando prepares una receta, Chef Luna la guardará aquí para que puedas volver a ella.
            </AppText>


            <TouchableOpacity

              activeOpacity={0.86}

              style={styles.emptyButton}

              onPress={() =>
                router.push(
                  '/(tabs)/explore'
                )
              }

            >

              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={18}
                color="#24140A"
              />

              <AppText style={styles.emptyButtonText}>
                Explorar recetas
              </AppText>

              <MaterialCommunityIcons
                name="arrow-right"
                size={18}
                color="#24140A"
              />

            </TouchableOpacity>


          </View>

        )}


        {/* FOOTER */}


        {recetas.length > 0 && (

          <View style={styles.footerCard}>


            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              size={23}
              color="#F2B35B"
            />


            <View style={styles.footerContent}>

              <AppText style={styles.footerTitle}>
                Tu cocina ya tiene historia
              </AppText>

              <AppText style={styles.footerText}>
                Has preparado {recetas.length} {
                  recetas.length === 1
                    ? 'receta'
                    : 'recetas'
                } y servido aproximadamente {porcionesTotales} porciones.
              </AppText>

            </View>


          </View>

        )}


      </ScrollView>


    </Screen>

  );

}


const styles =
  StyleSheet.create({


    screen: {

      backgroundColor:
        KitchenColors.background,

    },


    container: {

      paddingHorizontal:
        Spacing.xl,

      paddingTop:
        28,

      paddingBottom:
        150,

    },


    hero: {

      backgroundColor:
        '#211510',

      borderRadius:
        28,

      borderWidth:
        1,

      borderColor:
        '#65452F',

      padding:
        22,

      shadowColor:
        '#000',

      shadowOpacity:
        0.34,

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
        54,

      height:
        54,

      borderRadius:
        18,

      backgroundColor:
        '#382319',

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


    heroContent: {

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

    },


    heroDescription: {

      color:
        '#D4BCA3',

      fontSize:
        15,

      lineHeight:
        23,

      marginTop:
        18,

    },


    totalBadge: {

      minWidth:
        64,

      height:
        56,

      borderRadius:
        17,

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

    },


    totalValue: {

      color:
        '#F2B35B',

      fontSize:
        20,

      fontWeight:
        '900',

    },


    totalLabel: {

      color:
        '#8E735F',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        1,

    },


    heroStats: {

      flexDirection:
        'row',

      marginTop:
        20,

      paddingVertical:
        14,

      backgroundColor:
        '#19100C',

      borderRadius:
        17,

      borderWidth:
        1,

      borderColor:
        '#3C2920',

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
        16,

      fontWeight:
        '900',

    },


    heroStatLabel: {

      color:
        '#927560',

      fontSize:
        8,

      fontWeight:
        '800',

      marginTop:
        3,

      textTransform:
        'uppercase',

    },


    heroDivider: {

      width:
        1,

      backgroundColor:
        '#3C2920',

    },


    statsRow: {

      flexDirection:
        'row',

      gap:
        9,

      marginTop:
        22,

    },


    statCard: {

      flex:
        1,

      minHeight:
        96,

      backgroundColor:
        '#201610',

      borderRadius:
        17,

      borderWidth:
        1,

      borderColor:
        '#443027',

      padding:
        13,

      justifyContent:
        'space-between',

    },


    statValue: {

      color:
        '#F4DEC7',

      fontSize:
        17,

      fontWeight:
        '900',

    },


    statLabel: {

      color:
        '#8D725E',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1,

    },


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
        22,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    lastRecipeCard: {

      marginTop:
        14,

      minHeight:
        88,

      flexDirection:
        'row',

      alignItems:
        'center',

      backgroundColor:
        '#251A14',

      borderRadius:
        21,

      borderWidth:
        1,

      borderColor:
        '#72503A',

      padding:
        14,

    },


    lastRecipeIcon: {

      width:
        48,

      height:
        48,

      borderRadius:
        16,

      backgroundColor:
        '#382319',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        12,

    },


    lastRecipeContent: {

      flex:
        1,

    },


    lastRecipeTitle: {

      color:
        '#FFF3DD',

      fontSize:
        16,

      fontWeight:
        '900',

    },


    lastRecipeMeta: {

      flexDirection:
        'row',

      flexWrap:
        'wrap',

      gap:
        12,

      marginTop:
        7,

    },


    metaItem: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        4,

    },


    metaText: {

      color:
        '#A98A72',

      fontSize:
        10,

      fontWeight:
        '700',

    },


    countBadge: {

      minWidth:
        36,

      height:
        30,

      borderRadius:
        999,

      backgroundColor:
        '#342219',

      borderWidth:
        1,

      borderColor:
        '#6D4933',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    countBadgeText: {

      color:
        '#F2B35B',

      fontSize:
        11,

      fontWeight:
        '900',

    },


    historyList: {

      gap:
        9,

    },


    historyCard: {

      minHeight:
        82,

      flexDirection:
        'row',

      alignItems:
        'center',

      backgroundColor:
        '#211712',

      borderRadius:
        18,

      borderWidth:
        1,

      borderColor:
        '#473127',

      padding:
        12,

    },


    timelineWrap: {

      width:
        28,

      alignSelf:
        'stretch',

      alignItems:
        'center',

      marginRight:
        9,

    },


    timelineDot: {

      width:
        24,

      height:
        24,

      borderRadius:
        99,

      backgroundColor:
        '#8FB276',

      alignItems:
        'center',

      justifyContent:
        'center',

      zIndex:
        2,

    },


    timelineLine: {

      width:
        2,

      flex:
        1,

      minHeight:
        30,

      backgroundColor:
        '#4C5D49',

      marginTop:
        4,

    },


    historyContent: {

      flex:
        1,

    },


    historyTitle: {

      color:
        '#F8E7D2',

      fontSize:
        14,

      fontWeight:
        '900',

    },


    historySubtitle: {

      color:
        '#967A65',

      fontSize:
        10,

      marginTop:
        3,

    },


    historyMeta: {

      flexDirection:
        'row',

      flexWrap:
        'wrap',

      gap:
        12,

      marginTop:
        7,

    },


    emptyState: {

      marginTop:
        34,

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


    emptyIcon: {

      width:
        78,

      height:
        78,

      borderRadius:
        25,

      backgroundColor:
        '#352319',

      borderWidth:
        1,

      borderColor:
        '#754F38',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    emptyEyebrow: {

      color:
        '#C17D48',

      fontSize:
        8,

      fontWeight:
        '900',

      letterSpacing:
        1.6,

      marginTop:
        18,

    },


    emptyTitle: {

      color:
        '#FFF3DD',

      fontSize:
        22,

      lineHeight:
        28,

      fontWeight:
        '900',

      textAlign:
        'center',

      marginTop:
        7,

    },


    emptyText: {

      color:
        '#A98D76',

      fontSize:
        13,

      lineHeight:
        20,

      textAlign:
        'center',

      marginTop:
        10,

    },


    emptyButton: {

      marginTop:
        22,

      minHeight:
        48,

      borderRadius:
        16,

      paddingHorizontal:
        18,

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        8,

      backgroundColor:
        '#F2B35B',

    },


    emptyButtonText: {

      color:
        '#24140A',

      fontSize:
        12,

      fontWeight:
        '900',

    },


    footerCard: {

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


    footerContent: {

      flex:
        1,

    },


    footerTitle: {

      color:
        '#F3DEC5',

      fontSize:
        14,

      fontWeight:
        '900',

    },


    footerText: {

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
