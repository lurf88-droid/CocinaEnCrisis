import React, {
  useMemo,
  useState,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useIngredientes } from '@/context/IngredientesContext';
import { useCiudad } from '@/hooks/use-ciudad';
import { CiudadSelector } from '@/components/ciudad-selector';
import { RecetaCard } from '@/components/receta-card';
import { AppText } from '@/components/ui/AppText';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


// ======================================================
// ❤️ FAVORITOS
// ======================================================

export default function FavoritosScreen() {

  const {
    favoritos,
  } = useIngredientes();


  const {
    recetasConCosto,
    region,
  } = useCiudad();


  const [
    busqueda,
    setBusqueda,
  ] = useState('');


  // ====================================================
  // ❤️ RECETAS FAVORITAS
  // ====================================================

  const recetasFavoritas =
    useMemo(() => {

      return recetasConCosto
        .filter(
          receta =>
            favoritos.includes(
              receta.id
            )
        );

    }, [
      favoritos,
      recetasConCosto,
    ]);


  // ====================================================
  // 🔎 BÚSQUEDA
  // ====================================================

  const recetasFiltradas =
    useMemo(() => {

      const texto =
        busqueda
          .trim()
          .toLowerCase();


      if (!texto) {
        return recetasFavoritas;
      }


      return recetasFavoritas.filter(
        receta => {

          return (
            receta.titulo
              .toLowerCase()
              .includes(texto)
            ||
            receta.descripcion
              ?.toLowerCase()
              .includes(texto)
            ||
            receta.cocina
              ?.toLowerCase()
              .includes(texto)
          );

        }
      );

    }, [
      busqueda,
      recetasFavoritas,
    ]);


  // ====================================================
  // 📊 ESTADÍSTICAS
  // ====================================================

  const estadisticas =
    useMemo(() => {

      if (
        recetasFavoritas.length === 0
      ) {

        return {
          masRapida: null,
          masBarata: null,
          promedio: 0,
        };

      }


      const masRapida =
        [...recetasFavoritas]
          .sort(
            (a, b) =>
              a.tiempoMinutos -
              b.tiempoMinutos
          )[0];


      const masBarata =
        [...recetasFavoritas]
          .sort(
            (a, b) =>
              a.costoTotal -
              b.costoTotal
          )[0];


      const promedio =
        recetasFavoritas.reduce(
          (total, receta) =>
            total +
            receta.costoTotal,
          0
        ) /
        recetasFavoritas.length;


      return {
        masRapida,
        masBarata,
        promedio,
      };

    }, [
      recetasFavoritas,
    ]);


  // ====================================================
  // 🎨 UI
  // ====================================================

  return (

    <ScrollView

      showsVerticalScrollIndicator={false}

      contentContainerStyle={
        styles.container
      }

    >


      {/* =================================================
          HERO
      ================================================= */}


      <View style={styles.hero}>


        <View style={styles.heroTop}>


          <View style={styles.heroIcon}>

            <MaterialCommunityIcons
              name="heart"
              size={28}
              color="#F2B35B"
            />

          </View>


          <View style={styles.heroContent}>

            <AppText style={styles.eyebrow}>
              TU RECETARIO
            </AppText>

            <AppText style={styles.heroTitle}>
              Mis favoritos
            </AppText>

          </View>


          <View style={styles.totalBadge}>

            <AppText style={styles.totalValue}>
              {recetasFavoritas.length}
            </AppText>

            <AppText style={styles.totalLabel}>
              GUARDADAS
            </AppText>

          </View>


        </View>


        <AppText style={styles.heroDescription}>
          Aquí viven las recetas que ya ganaron un lugar en tu cocina.
        </AppText>


       <View style={styles.regionRow}>
  <CiudadSelector />
</View>


      </View>


      {/* =================================================
          STATS
      ================================================= */}


      {recetasFavoritas.length > 0 && (

        <View style={styles.statsRow}>


          <View style={styles.statCard}>

            <MaterialCommunityIcons
              name="heart-outline"
              size={20}
              color="#F2B35B"
            />

            <AppText style={styles.statValue}>
              {recetasFavoritas.length}
            </AppText>

            <AppText style={styles.statLabel}>
              FAVORITAS
            </AppText>

          </View>


          <View style={styles.statCard}>

            <MaterialCommunityIcons
              name="clock-fast"
              size={20}
              color="#D7A86E"
            />

            <AppText style={styles.statValue}>
              {
                estadisticas.masRapida
                  ? `${estadisticas.masRapida.tiempoMinutos}m`
                  : '—'
              }
            </AppText>

            <AppText style={styles.statLabel}>
              MÁS RÁPIDA
            </AppText>

          </View>


          <View style={styles.statCard}>

            <MaterialCommunityIcons
              name="cash"
              size={20}
              color="#8FB276"
            />

            <AppText style={styles.statValue}>
              ${
                estadisticas.masBarata
                  ? Math.round(
                      estadisticas.masBarata.costoTotal
                    )
                  : 0
              }
            </AppText>

            <AppText style={styles.statLabel}>
              MÁS BARATA
            </AppText>

          </View>


        </View>

      )}


      {/* =================================================
          SEARCH
      ================================================= */}


      {recetasFavoritas.length > 0 && (

        <View style={styles.searchSection}>


          <AppText style={styles.sectionEyebrow}>
            TU COLECCIÓN
          </AppText>


          <AppText style={styles.sectionTitle}>
            Encuentra una favorita
          </AppText>


          <View style={styles.searchBox}>


            <MaterialCommunityIcons
              name="magnify"
              size={21}
              color="#A98A72"
            />


            <TextInput

              value={
                busqueda
              }

              onChangeText={
                setBusqueda
              }

              placeholder="Buscar entre tus recetas..."

              placeholderTextColor="#765F4D"

              style={styles.searchInput}

            />


            {busqueda.length > 0 && (

              <TouchableOpacity
                onPress={() =>
                  setBusqueda('')
                }
              >

                <MaterialCommunityIcons
                  name="close-circle"
                  size={20}
                  color="#9A7962"
                />

              </TouchableOpacity>

            )}


          </View>


        </View>

      )}


      {/* =================================================
          LIST HEADER
      ================================================= */}


      {recetasFavoritas.length > 0 && (

        <View style={styles.listHeader}>


          <View>

            <AppText style={styles.sectionEyebrow}>
              GUARDADAS
            </AppText>

            <AppText style={styles.sectionTitle}>
              Recetas que quieres repetir
            </AppText>

          </View>


          <View style={styles.countBadge}>

            <AppText style={styles.countBadgeText}>
              {recetasFiltradas.length}
            </AppText>

          </View>


        </View>

      )}


      {/* =================================================
          RECETAS
      ================================================= */}


      {recetasFiltradas.length > 0 && (

        <View style={styles.recipesList}>

          {recetasFiltradas.map(
            receta => (

              <View
                key={receta.id}
                style={styles.recipeWrapper}
              >

                <RecetaCard
                  receta={receta}
                />

              </View>

            )
          )}

        </View>

      )}


      {/* =================================================
          EMPTY SEARCH
      ================================================= */}


      {recetasFavoritas.length > 0 &&
        recetasFiltradas.length === 0 && (

        <View style={styles.searchEmpty}>


          <View style={styles.emptyIcon}>

            <MaterialCommunityIcons
              name="magnify-close"
              size={34}
              color="#F2B35B"
            />

          </View>


          <AppText style={styles.emptyTitle}>
            No encontré esa favorita
          </AppText>


          <AppText style={styles.emptyText}>
            Prueba otro nombre o limpia la búsqueda.
          </AppText>


          <TouchableOpacity

            style={styles.secondaryButton}

            onPress={() =>
              setBusqueda('')
            }

          >

            <AppText style={styles.secondaryButtonText}>
              Limpiar búsqueda
            </AppText>

          </TouchableOpacity>


        </View>

      )}


      {/* =================================================
          EMPTY FAVORITES
      ================================================= */}


      {recetasFavoritas.length === 0 && (

        <View style={styles.emptyState}>


          <View style={styles.emptyIconLarge}>

            <MaterialCommunityIcons
              name="heart-outline"
              size={40}
              color="#F2B35B"
            />

          </View>


          <AppText style={styles.emptyEyebrow}>
            TU RECETARIO ESTÁ VACÍO
          </AppText>


          <AppText style={styles.emptyTitleLarge}>
            Guarda las recetas que sí quieres volver a cocinar
          </AppText>


          <AppText style={styles.emptyDescription}>
            Cuando encuentres una receta que te guste, toca el corazón. Chef Luna la guardará aquí para que no tengas que buscarla otra vez.
          </AppText>


          <TouchableOpacity

            activeOpacity={0.86}

            style={styles.exploreButton}

            onPress={() =>
              router.push(
                '/(tabs)/explore'
              )
            }

          >


            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={19}
              color="#231309"
            />


            <AppText style={styles.exploreButtonText}>
              Explorar recetas
            </AppText>


            <MaterialCommunityIcons
              name="arrow-right"
              size={18}
              color="#231309"
            />


          </TouchableOpacity>


        </View>

      )}


      {/* =================================================
          FOOTER
      ================================================= */}


      {recetasFavoritas.length > 0 && (

        <View style={styles.footerCard}>


          <MaterialCommunityIcons
            name="book-heart-outline"
            size={24}
            color="#F2B35B"
          />


          <View style={styles.footerContent}>

            <AppText style={styles.footerTitle}>
              Tu recetario está creciendo
            </AppText>


            <AppText style={styles.footerText}>
              Tienes {recetasFavoritas.length} {
                recetasFavoritas.length === 1
                  ? 'receta guardada'
                  : 'recetas guardadas'
              }. Aquí puedes volver rápidamente a tus favoritas.
            </AppText>

          </View>


        </View>

      )}


    </ScrollView>

  );

}


// ======================================================
// 🎨 STYLES
// ======================================================

const styles =
  StyleSheet.create({


    container: {

      flexGrow:
        1,

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


    totalBadge: {

      minWidth:
        62,

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


  regionRow: {
  marginTop: 20,
  backgroundColor: '#19100C',
  borderRadius: 17,
  borderWidth: 1,
  borderColor: '#3C2920',
  padding: 12,
},

    regionLabel: {

      color:
        '#8C705B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.1,

    },


    regionName: {

      color:
        '#F3DEC7',

      fontSize:
        13,

      fontWeight:
        '900',

      marginTop:
        1,

    },


    // ==================================================
    // STATS
    // ==================================================


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


    // ==================================================
    // SECTIONS
    // ==================================================


    searchSection: {

      marginTop:
        28,

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


    searchBox: {

      marginTop:
        13,

      height:
        54,

      flexDirection:
        'row',

      alignItems:
        'center',

      backgroundColor:
        '#201610',

      borderRadius:
        17,

      borderWidth:
        1,

      borderColor:
        '#4A3226',

      paddingHorizontal:
        15,

      gap:
        10,

    },


    searchInput: {

      flex:
        1,

      color:
        '#FFF3DD',

      fontSize:
        14,

      paddingVertical:
        0,

    },


    listHeader: {

      marginTop:
        30,

      marginBottom:
        15,

      flexDirection:
        'row',

      justifyContent:
        'space-between',

      alignItems:
        'flex-end',

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


    recipesList: {

      gap:
        14,

    },


    recipeWrapper: {

      marginBottom:
        2,

    },


    // ==================================================
    // EMPTY
    // ==================================================


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


    emptyIconLarge: {

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


    emptyTitleLarge: {

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


    emptyDescription: {

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


    exploreButton: {

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


    exploreButtonText: {

      color:
        '#231309',

      fontSize:
        12,

      fontWeight:
        '900',

    },


    searchEmpty: {

      marginTop:
        25,

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
        64,

      height:
        64,

      borderRadius:
        21,

      backgroundColor:
        '#342319',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    emptyTitle: {

      color:
        '#FFF3DD',

      fontSize:
        18,

      fontWeight:
        '900',

      marginTop:
        14,

    },


    emptyText: {

      color:
        '#A98D76',

      fontSize:
        13,

      marginTop:
        6,

      textAlign:
        'center',

    },


    secondaryButton: {

      marginTop:
        17,

      paddingHorizontal:
        16,

      paddingVertical:
        10,

      borderRadius:
        999,

      borderWidth:
        1,

      borderColor:
        '#79513A',

      backgroundColor:
        '#302017',

    },


    secondaryButtonText: {

      color:
        '#F2B35B',

      fontSize:
        11,

      fontWeight:
        '900',

    },


    // ==================================================
    // FOOTER
    // ==================================================


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