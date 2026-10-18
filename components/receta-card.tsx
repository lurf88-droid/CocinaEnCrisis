import React from 'react';

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import type {
  RecetaConCosto,
  ResultadoBusqueda,
} from '@/types/receta';

import { useIngredientes } from '@/context/IngredientesContext';

import { AppText } from '@/components/ui/AppText';

import {
  KitchenColors,
  Radius,
  Shadows,
  Spacing,
} from '@/constants/theme';

import {
  formatearPrecio,
} from '@/data/recetas';

import {
  obtenerIngrediente,
} from '@/data/catalogo-ingredientes';


type Props = {
  receta: ResultadoBusqueda | RecetaConCosto;
  compacto?: boolean;
};


// ======================================================
// 🍳 RECETA CARD
// ======================================================

export function RecetaCard({
  receta,
  compacto = false,
}: Props) {

 const {
  carrito,
  favoritos,
  toggleFavorito,
  agregarAlCarrito,
} = useIngredientes();

  const resultado =
    'puedeCocinar' in receta
      ? receta
      : null;


  const enCarrito =
    carrito.includes(
      receta.id
    );

const ejecutarAccionPrincipal = () => {

  // Ya forma parte de la compra:
  // simplemente abrimos el carrito.
  if (enCarrito) {

    router.push(
      '/(tabs)/carrito'
    );

    return;

  }


  // Tarjeta sin análisis de despensa.
  if (!resultado) {

    router.push({
      pathname:
        '/receta/[id]',

      params: {
        id:
          receta.id,
      },
    });

    return;

  }


  // Tiene absolutamente todo.
  if (
    resultado.puedeCocinar
  ) {

    router.push({
      pathname:
        '/cooking/[id]',

      params: {
        id:
          receta.id,
      },
    });

    return;

  }


  // Le faltan ingredientes.
  // Agregamos LA RECETA.
  // El carrito calculará automáticamente
  // qué ingredientes necesita comprar.
  agregarAlCarrito(
    receta.id
  );


  router.push(
    '/(tabs)/carrito'
  );

};


const textoAccionPrincipal =
  enCarrito
    ? 'Ver mis compras'
    : !resultado
      ? 'Ver receta'
      : resultado.puedeCocinar
        ? 'Cocinar ahora'
        : 'Comprar lo que me falta';


const iconoAccionPrincipal =
  enCarrito
    ? 'cart-outline'
    : !resultado
      ? 'chef-hat'
      : resultado.puedeCocinar
        ? 'fire'
        : 'cart-outline';
  const esFavorito =
    favoritos.includes(
      receta.id
    );


  const estadoReceta =
    resultado?.estadoReceta;


  const compatibilidad =
    Math.max(
      0,
      Math.min(
        100,
        resultado?.compatibilidad ?? 0
      )
    );


  // ====================================================
  // 🏷 ESTADO
  // ====================================================

  const estado = (() => {

    if (!resultado) {

      return {
        label: 'RECETA',
        icon: 'silverware-fork-knife' as const,
        color: '#F2B35B',
        background: '#3B281B',
      };

    }


    if (
      estadoReceta === 'lista' ||
      resultado.puedeCocinar
    ) {

      return {
        label: 'LISTA PARA COCINAR',
        icon: 'check-circle-outline' as const,
        color: '#9BC78A',
        background: '#263723',
      };

    }


    if (
      estadoReceta === 'casi' ||
      resultado.faltantes.length === 1
    ) {

      return {
        label: 'TE FALTA SOLO 1',
        icon: 'chef-hat' as const,
        color: '#F2B35B',
        background: '#3B291B',
      };

    }


    return {
      label: 'NECESITA COMPRA',
      icon: 'cart-outline' as const,
      color: '#EFA15F',
      background: '#3B241A',
    };

  })();


  // ====================================================
  // ⭐ DIFICULTAD
  // ====================================================

  const dificultad =
  receta.dificultad === 'facil'
    ? 'Fácil'
    : receta.dificultad === 'media'
      ? 'Media'
      : receta.dificultad === 'avanzada'
        ? 'Avanzada'
        : receta.dificultad === 'chef'
          ? 'Chef'
          : receta.dificultad;

  // ====================================================
  // 👨‍🍳 RAZONES
  // ====================================================

  const razonesVisibles =
    resultado?.razones
      ?.slice(
        0,
        compacto ? 1 : 2
      )
    ?? [];


  const faltantesVisibles =
    resultado?.faltantes
      .slice(
        0,
        compacto ? 2 : 3
      )
    ?? [];


  // ====================================================
  // UI
  // ====================================================

  return (

    <TouchableOpacity

      activeOpacity={0.92}

      style={[
        styles.card,

        compacto &&
          styles.cardCompacto,

        estadoReceta === 'lista' &&
          styles.cardLista,

        estadoReceta === 'casi' &&
          styles.cardCasi,

        estadoReceta === 'faltante' &&
          styles.cardFaltante,
      ]}

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


      {/* =================================================
          IMAGE
      ================================================= */}


      <View
        style={[
          styles.imageWrap,
          compacto &&
            styles.imageWrapCompacto,
        ]}
      >


        {receta.imagen ? (

          <Image
            source={receta.imagen}
            style={styles.image}
            resizeMode="cover"
          />

        ) : (

          <View style={styles.imagePlaceholder}>

            <MaterialCommunityIcons
              name="food-outline"
              size={42}
              color="#F2B35B"
            />

          </View>

        )}


        <View style={styles.imageOverlay} />


        {/* STATUS */}


        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                estado.background,
            },
          ]}
        >

          <MaterialCommunityIcons
            name={estado.icon}
            size={13}
            color={estado.color}
          />

          <AppText
            style={[
              styles.statusText,
              {
                color:
                  estado.color,
              },
            ]}
          >
            {estado.label}
          </AppText>

        </View>


        {/* FAVORITE */}


        <TouchableOpacity

          activeOpacity={0.8}

          style={[
            styles.favoriteButton,
            esFavorito &&
              styles.favoriteButtonActive,
          ]}

          onPress={() =>
            toggleFavorito(
              receta.id
            )
          }

        >

          <MaterialCommunityIcons

            name={
              esFavorito
                ? 'heart'
                : 'heart-outline'
            }

            size={21}

            color={
              esFavorito
                ? '#F2B35B'
                : '#FFF3DD'
            }

          />

        </TouchableOpacity>


        {/* IMAGE FOOTER */}


        <View style={styles.imageFooter}>


          <View style={styles.imageMeta}>

            <MaterialCommunityIcons
              name="clock-outline"
              size={14}
              color="#FFF3DD"
            />

            <AppText style={styles.imageMetaText}>
              {receta.tiempoMinutos} min
            </AppText>

          </View>


          <View style={styles.imageMeta}>

            <MaterialCommunityIcons
              name="account-group-outline"
              size={14}
              color="#FFF3DD"
            />

            <AppText style={styles.imageMetaText}>
              {receta.porciones}
            </AppText>

          </View>


        </View>


      </View>


      {/* =================================================
          CONTENT
      ================================================= */}


      <View style={styles.content}>


        <View style={styles.titleRow}>


          <View style={styles.titleContent}>

            <AppText
              numberOfLines={
                compacto
                  ? 1
                  : 2
              }
              style={styles.titulo}
            >
              {receta.titulo}
            </AppText>


            <AppText style={styles.recipeSubtitle}>
              Lista en {receta.tiempoMinutos} minutos
            </AppText>

          </View>


          <MaterialCommunityIcons
            name="chevron-right"
            size={24}
            color="#805F49"
          />


        </View>


        {/* =================================================
            METRICS
        ================================================= */}


        <View style={styles.metricsRow}>


          <MetricItem
            icon="cash"
           label="Valor receta"
            value={
              formatearPrecio(
                receta.costoTotal
              )
            }
            accent="#9BC78A"
          />


          <View style={styles.metricDivider} />


          <MetricItem
            icon="clock-outline"
            label="Tiempo"
            value={`${receta.tiempoMinutos}m`}
          />


          <View style={styles.metricDivider} />


          <MetricItem
            icon="chef-hat"
            label="Nivel"
            value={dificultad}
          />


        </View>


        {/* =================================================
            COMPATIBILIDAD
        ================================================= */}


        {resultado && (

          <View style={styles.compatibilityCard}>


            <View style={styles.compatibilityTop}>


              <View>

                <AppText style={styles.compatibilityLabel}>
                  COMPATIBILIDAD
                </AppText>

                <AppText style={styles.compatibilityCaption}>
                  Según tu despensa
                </AppText>

              </View>


              <AppText style={styles.compatibilityValue}>
                {compatibilidad}%
              </AppText>


            </View>


            <View style={styles.compatibilityTrack}>

              <View
                style={[
                  styles.compatibilityFill,
                  {
                    width:
                      `${compatibilidad}%`,
                  },
                ]}
              />

            </View>


          </View>

        )}


        {/* =================================================
            CHEF LUNA
        ================================================= */}


        {!compacto &&
          razonesVisibles.length > 0 && (

          <View style={styles.chefBox}>


            <View style={styles.chefHeader}>


              <View style={styles.chefIcon}>

                <MaterialCommunityIcons
                  name="chef-hat"
                  size={18}
                  color="#F2B35B"
                />

              </View>


              <View>

                <AppText style={styles.chefEyebrow}>
                  CHEF LUNA
                </AppText>

                <AppText style={styles.chefTitle}>
                  Por qué te la recomiendo
                </AppText>

              </View>


            </View>


            <View style={styles.reasonsList}>

              {razonesVisibles.map(
                (razon, index) => (

                  <View
                    key={`${razon}-${index}`}
                    style={styles.reasonRow}
                  >

                    <View style={styles.reasonDot} />

                    <AppText style={styles.chefText}>
                      {razon}
                    </AppText>

                  </View>

                )
              )}

            </View>


          </View>

        )}


        {/* =================================================
            FALTANTES
        ================================================= */}


        {resultado &&
          !resultado.puedeCocinar &&
          resultado.faltantes.length > 0 && (

          <View style={styles.missingBox}>


            <View style={styles.missingHeader}>


              <View>

                <AppText style={styles.missingEyebrow}>
                  PARA COMPLETARLA
                </AppText>

                <AppText style={styles.missingTitle}>

                  {
                    resultado.faltantes.length === 1
                      ? 'Te falta 1 ingrediente'
                      : `Te faltan ${resultado.faltantes.length} ingredientes`
                  }

                </AppText>

              </View>


              <MaterialCommunityIcons
                name="cart-outline"
                size={21}
                color="#EFA15F"
              />


            </View>


            <View style={styles.missingList}>

              {faltantesVisibles.map(
                item => {

                  const nombre =
                    obtenerIngrediente(
                      item
                    )?.nombre
                    ?? item;


                  return (
<View
  key={item}
  style={styles.missingItem}
>

  <View style={styles.missingPlus}>

    <MaterialCommunityIcons
      name="alert-circle-outline"
      size={16}
      color="#EFA15F"
    />

  </View>

  <AppText
    numberOfLines={1}
    style={styles.missingName}
  >
    {nombre}
  </AppText>

  <AppText style={styles.missingAction}>
    Falta
  </AppText>

</View>
                  );

                }
              )}


              {resultado.faltantes.length >
                faltantesVisibles.length && (

                <AppText style={styles.moreMissingText}>
                  +{
                    resultado.faltantes.length -
                    faltantesVisibles.length
                  } más
                </AppText>

              )}


            </View>


          </View>

        )}


        {/* =================================================
            PRESUPUESTO
        ================================================= */}


        {resultado && (

          <View
            style={[
              styles.budgetRow,

              resultado.dentroPresupuesto
                ? styles.budgetOk
                : styles.budgetOver,
            ]}
          >


            <MaterialCommunityIcons

              name={
                resultado.dentroPresupuesto
                  ? 'check-circle-outline'
                  : 'alert-circle-outline'
              }

              size={17}

              color={
                resultado.dentroPresupuesto
                  ? '#9BC78A'
                  : '#FF9A6A'
              }

            />


            <AppText
              style={[
                styles.budgetText,

                resultado.dentroPresupuesto
                  ? styles.budgetTextOk
                  : styles.budgetTextOver,
              ]}
            >

              {
                resultado.dentroPresupuesto
                  ? 'Dentro de tu presupuesto'
                  : 'Supera tu presupuesto'
              }

            </AppText>


          </View>

        )}


        {/* =================================================
            CART
        ================================================= */}


        <View style={styles.actions}>


         <TouchableOpacity
  activeOpacity={0.84}
  style={[
    styles.cartButton,
    enCarrito &&
      styles.cartButtonActive,
  ]}
  onPress={
    ejecutarAccionPrincipal
  }
>

  <MaterialCommunityIcons
    name={
      iconoAccionPrincipal
    }
    size={18}
    color={
      enCarrito
        ? '#1D2B1D'
        : '#24140A'
    }
  />

  <AppText
    style={[
      styles.cartButtonText,
      enCarrito &&
        styles.cartButtonTextActive,
    ]}
  >
    {textoAccionPrincipal}
  </AppText>

</TouchableOpacity>


        </View>


      </View>


    </TouchableOpacity>

  );

}


// ======================================================
// 📊 METRIC ITEM
// ======================================================

function MetricItem({
  icon,
  label,
  value,
  accent = '#D7A86E',
}: {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >['name'];
  label: string;
  value: string;
  accent?: string;
}) {

  return (

    <View style={styles.metric}>


      <MaterialCommunityIcons
        name={icon}
        size={17}
        color={accent}
      />


      <AppText style={styles.metricValue}>
        {value}
      </AppText>


      <AppText style={styles.metricLabel}>
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

      width:
        '100%',

      backgroundColor:
        '#17100C',

      borderRadius:
        25,

      marginTop:
        Spacing.md,

      borderWidth:
        1,

      borderColor:
        '#4B3327',

      overflow:
        'hidden',

      ...Shadows.card,

    },


    cardCompacto: {

      marginTop:
        Spacing.sm,

    },


    cardLista: {

      borderColor:
        '#537250',

    },


    cardCasi: {

      borderColor:
        '#846039',

    },


    cardFaltante: {

      borderColor:
        '#71452F',

    },


    // ==================================================
    // IMAGE
    // ==================================================


    imageWrap: {

      position:
        'relative',

      width:
        '100%',

      height:
        230,

      backgroundColor:
        '#281A13',

    },


    imageWrapCompacto: {

      height:
        180,

    },


    image: {

      width:
        '100%',

      height:
        '100%',

    },


    imagePlaceholder: {

      width:
        '100%',

      height:
        '100%',

      alignItems:
        'center',

      justifyContent:
        'center',

      backgroundColor:
        '#2B1D16',

    },


    imageOverlay: {

      ...StyleSheet.absoluteFill,

      backgroundColor:
        'rgba(10, 6, 4, 0.18)',

    },


    statusBadge: {

      position:
        'absolute',

      top:
        13,

      left:
        13,

      minHeight:
        32,

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        5,

      paddingHorizontal:
        10,

      borderRadius:
        999,

      borderWidth:
        1,

      borderColor:
        'rgba(255,255,255,0.08)',

    },


    statusText: {

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1,

    },


    favoriteButton: {

      position:
        'absolute',

      top:
        13,

      right:
        13,

      width:
        42,

      height:
        42,

      borderRadius:
        14,

      alignItems:
        'center',

      justifyContent:
        'center',

      backgroundColor:
        'rgba(27,16,11,0.88)',

      borderWidth:
        1,

      borderColor:
        '#795139',

      elevation:
        5,

    },


    favoriteButtonActive: {

      borderColor:
        '#F2B35B',

      backgroundColor:
        '#3A2519',

    },


    imageFooter: {

      position:
        'absolute',

      left:
        13,

      bottom:
        13,

      flexDirection:
        'row',

      gap:
        8,

    },


    imageMeta: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        4,

      paddingHorizontal:
        9,

      paddingVertical:
        6,

      backgroundColor:
        'rgba(24,14,9,0.82)',

      borderRadius:
        999,

    },


    imageMetaText: {

      color:
        '#FFF3DD',

      fontSize:
        9,

      fontWeight:
        '900',

    },


    // ==================================================
    // CONTENT
    // ==================================================


    content: {

      padding:
        17,

    },


    titleRow: {

      flexDirection:
        'row',

      alignItems:
        'flex-start',

    },


    titleContent: {

      flex:
        1,

      paddingRight:
        5,

    },


    titulo: {

      color:
        '#FFF3DD',

      fontSize:
        20,

      lineHeight:
        25,

      fontWeight:
        '900',

    },


    recipeSubtitle: {

      color:
        '#957A65',

      fontSize:
        10,

      fontWeight:
        '700',

      marginTop:
        5,

    },


    // ==================================================
    // METRICS
    // ==================================================


    metricsRow: {

      marginTop:
        16,

      minHeight:
        71,

      flexDirection:
        'row',

      alignItems:
        'center',

      backgroundColor:
        '#201610',

      borderRadius:
        16,

      borderWidth:
        1,

      borderColor:
        '#403027',

      paddingVertical:
        10,

    },


    metric: {

      flex:
        1,

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    metricValue: {

      color:
        '#F2DFCB',

      fontSize:
        12,

      fontWeight:
        '900',

      marginTop:
        3,

    },


    metricLabel: {

      color:
        '#796354',

      fontSize:
        7,

      fontWeight:
        '900',

      textTransform:
        'uppercase',

      marginTop:
        2,

    },


    metricDivider: {

      width:
        1,

      height:
        38,

      backgroundColor:
        '#3D2D24',

    },


    // ==================================================
    // COMPATIBILITY
    // ==================================================


    compatibilityCard: {

      marginTop:
        13,

      backgroundColor:
        '#1D1712',

      borderRadius:
        15,

      borderWidth:
        1,

      borderColor:
        '#3C3027',

      padding:
        12,

    },


    compatibilityTop: {

      flexDirection:
        'row',

      justifyContent:
        'space-between',

      alignItems:
        'center',

    },


    compatibilityLabel: {

      color:
        '#B78A67',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    compatibilityCaption: {

      color:
        '#766153',

      fontSize:
        8,

      marginTop:
        2,

    },


    compatibilityValue: {

      color:
        '#9BC78A',

      fontSize:
        17,

      fontWeight:
        '900',

    },


    compatibilityTrack: {

      height:
        6,

      marginTop:
        9,

      borderRadius:
        999,

      overflow:
        'hidden',

      backgroundColor:
        '#342820',

    },


    compatibilityFill: {

      height:
        '100%',

      borderRadius:
        999,

      backgroundColor:
        '#8FB276',

    },


    // ==================================================
    // CHEF
    // ==================================================


    chefBox: {

      marginTop:
        13,

      padding:
        14,

      borderRadius:
        17,

      backgroundColor:
        '#2D1E16',

      borderWidth:
        1,

      borderColor:
        '#62432F',

    },


    chefHeader: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    chefIcon: {

      width:
        36,

      height:
        36,

      borderRadius:
        12,

      backgroundColor:
        '#42291B',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        9,

    },


    chefEyebrow: {

      color:
        '#C17D48',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    chefTitle: {

      color:
        '#F5DFC8',

      fontSize:
        12,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    reasonsList: {

      marginTop:
        11,

      gap:
        7,

    },


    reasonRow: {

      flexDirection:
        'row',

      alignItems:
        'flex-start',

    },


    reasonDot: {

      width:
        6,

      height:
        6,

      borderRadius:
        99,

      backgroundColor:
        '#F2B35B',

      marginTop:
        7,

      marginRight:
        7,

    },


    chefText: {

      flex:
        1,

      color:
        '#CDB49E',

      fontSize:
        11,

      lineHeight:
        17,

    },


    // ==================================================
    // MISSING
    // ==================================================


    missingBox: {

      marginTop:
        13,

      backgroundColor:
        '#2D1C15',

      borderRadius:
        17,

      borderWidth:
        1,

      borderColor:
        '#75472F',

      padding:
        14,

    },


    missingHeader: {

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'space-between',

    },


    missingEyebrow: {

      color:
        '#C77D4B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    missingTitle: {

      color:
        '#F2D9C1',

      fontSize:
        13,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    missingList: {

      marginTop:
        10,

      gap:
        7,

    },


    missingItem: {

      minHeight:
        42,

      flexDirection:
        'row',

      alignItems:
        'center',

      backgroundColor:
        '#211610',

      borderRadius:
        12,

      paddingHorizontal:
        9,

    },


    missingPlus: {

      width:
        27,

      height:
        27,

      borderRadius:
        9,

      backgroundColor:
        '#3D271B',

      alignItems:
        'center',

      justifyContent:
        'center',

      marginRight:
        8,

    },


    missingName: {

      flex:
        1,

      color:
        '#E5CEB8',

      fontSize:
        11,

      fontWeight:
        '800',

    },


    missingAction: {

      color:
        '#EFA15F',

      fontSize:
        8,

      fontWeight:
        '900',

      textTransform:
        'uppercase',

    },


    moreMissingText: {

      color:
        '#8D725F',

      fontSize:
        9,

      fontWeight:
        '800',

      textAlign:
        'center',

      marginTop:
        2,

    },


    // ==================================================
    // BUDGET
    // ==================================================


    budgetRow: {

      marginTop:
        12,

      minHeight:
        40,

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        7,

      borderRadius:
        13,

      paddingHorizontal:
        11,

      borderWidth:
        1,

    },


    budgetOk: {

      backgroundColor:
        '#1D291D',

      borderColor:
        '#415B40',

    },


    budgetOver: {

      backgroundColor:
        '#342019',

      borderColor:
        '#70412E',

    },


    budgetText: {

      fontSize:
        10,

      fontWeight:
        '900',

    },


    budgetTextOk: {

      color:
        '#9BC78A',

    },


    budgetTextOver: {

      color:
        '#FF9A6A',

    },


    // ==================================================
    // ACTIONS
    // ==================================================


    actions: {

      marginTop:
        14,

    },


    cartButton: {

      minHeight:
        48,

      backgroundColor:
        '#F2B35B',

      borderRadius:
        15,

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'center',

      gap:
        7,

      paddingHorizontal:
        14,

    },


    cartButtonActive: {

      backgroundColor:
        '#9BC78A',

    },


    cartButtonText: {

      color:
        '#24140A',

      textAlign:
        'center',

      fontSize:
        11,

      fontWeight:
        '900',

    },


    cartButtonTextActive: {

      color:
        '#1D2B1D',

    },

  });