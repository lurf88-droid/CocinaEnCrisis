import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { AppText } from '@/components/ui/AppText';

import {
  Radius,
  Spacing,
} from '@/constants/theme';

import type {
  ChefMode,
} from '@/utils/chefMode';


// ======================================================
// 🧠 TIPOS
// ======================================================

type Props = {
  modo: ChefMode;
  cambiarModo: (modo: ChefMode) => void;
};


type ModoConfig = {
  id: ChefMode;

  titulo: string;

  descripcion: string;

  microcopy: string;

  icono: React.ComponentProps<
    typeof MaterialCommunityIcons
  >['name'];
};


// ======================================================
// 🌙 CRISIS CULINARIAS
// ======================================================

const MODOS: ModoConfig[] = [

  {
    id:
      'crisis',

    titulo:
      'Resuélveme la comida',

    descripcion:
      'No quiero seguir pensando. Elige por mí con lo que ya tengo.',

    microcopy:
      'DECISIÓN TOTAL',

    icono:
      'fire',
  },


  {
    id:
      'ahorro',

    titulo:
      'No quiero gastar de más',

    descripcion:
      'Aprovecha mi despensa y evita compras innecesarias.',

    microcopy:
      'CUIDAR EL BOLSILLO',

    icono:
      'piggy-bank-outline',
  },


  {
    id:
      'rapido',

    titulo:
      'Tengo poco tiempo',

    descripcion:
      'Busca algo que pueda resolver rápido y sin complicarme.',

    microcopy:
      'SALIDA RÁPIDA',

    icono:
      'clock-fast',
  },


  {
    id:
      'antojo',

    titulo:
      'Quiero algo que se me antoje',

    descripcion:
      'Dame una opción rica y disfrutable sin ignorar mi despensa.',

    microcopy:
      'DARME UN GUSTO',

    icono:
      'heart-outline',
  },

];


// ======================================================
// 🌙 SELECTOR DE CRISIS
// ======================================================

export function ChefModeSelector({
  modo,
  cambiarModo,
}: Props) {

  return (

    <View style={styles.container}>


      {/* =================================================
          INTRO
      ================================================= */}

      <View style={styles.intro}>

        <AppText style={styles.introEyebrow}>
          ¿CUÁL ES TU CRISIS HOY?
        </AppText>

        <AppText style={styles.introText}>
          Dime qué necesitas resolver y Chef Luna ajustará su decisión.
        </AppText>

      </View>


      {/* =================================================
          GRID
      ================================================= */}

      <View style={styles.grid}>

        {MODOS.map(
          item => {

            const activo =
              modo === item.id;


            return (

              <Pressable
                key={item.id}
                onPress={() =>
                  cambiarModo(
                    item.id
                  )
                }
                style={({ pressed }) => [
                  styles.card,

                  activo &&
                    styles.cardActive,

                  pressed &&
                    styles.cardPressed,
                ]}
              >


                {/* =======================================
                    HEADER DE TARJETA
                ======================================= */}

                <View style={styles.topRow}>


                  <View
                    style={[
                      styles.iconBox,

                      activo &&
                        styles.iconBoxActive,
                    ]}
                  >

                    <MaterialCommunityIcons
                      name={item.icono}
                      size={22}
                      color={
                        activo
                          ? '#24140A'
                          : '#D7A86E'
                      }
                    />

                  </View>


                  {activo && (

                    <View style={styles.activeBadge}>

                      <MaterialCommunityIcons
                        name="check"
                        size={11}
                        color="#24140A"
                      />

                      <AppText style={styles.activeBadgeText}>
                        ELEGIDO
                      </AppText>

                    </View>

                  )}


                </View>


                {/* =======================================
                    MICROCOPY
                ======================================= */}

                <AppText
                  style={[
                    styles.microcopy,

                    activo &&
                      styles.microcopyActive,
                  ]}
                >
                  {item.microcopy}
                </AppText>


                {/* =======================================
                    TÍTULO
                ======================================= */}

                <AppText
                  style={[
                    styles.name,

                    activo &&
                      styles.nameActive,
                  ]}
                >
                  {item.titulo}
                </AppText>


                {/* =======================================
                    DESCRIPCIÓN
                ======================================= */}

                <AppText
                  style={[
                    styles.description,

                    activo &&
                      styles.descriptionActive,
                  ]}
                >
                  {item.descripcion}
                </AppText>


              </Pressable>

            );

          }
        )}

      </View>


      {/* =================================================
          NOTA
      ================================================= */}

      <View style={styles.note}>

        <MaterialCommunityIcons
          name="chef-hat"
          size={15}
          color="#D7A86E"
        />

        <AppText style={styles.noteText}>
          Chef Luna usa el mismo recetario, pero cambia la estrategia según tu situación.
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


    container: {

      marginTop:
        Spacing.sm,

    },


    // ==================================================
    // INTRO
    // ==================================================

    intro: {

      marginBottom:
        12,

    },


    introEyebrow: {

      color:
        '#C17D48',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.4,

    },


    introText: {

      marginTop:
        4,

      color:
        '#9F816A',

      fontSize:
        10,

      lineHeight:
        15,

    },


    // ==================================================
    // GRID
    // ==================================================

    grid: {

      flexDirection:
        'row',

      flexWrap:
        'wrap',

      justifyContent:
        'space-between',

      rowGap:
        10,

    },


    card: {

      width:
        '48.5%',

      minHeight:
        166,

      backgroundColor:
        '#211712',

      borderWidth:
        1,

      borderColor:
        '#50372B',

      borderRadius:
        Radius.xl,

      padding:
        14,

    },


    cardActive: {

      backgroundColor:
        '#342219',

      borderColor:
        '#F2B35B',

      borderWidth:
        1.5,

      shadowColor:
        '#000',

      shadowOpacity:
        0.20,

      shadowRadius:
        10,

      shadowOffset: {
        width: 0,
        height: 6,
      },

      elevation:
        5,

    },


    cardPressed: {

      opacity:
        0.84,

      transform: [
        {
          scale:
            0.985,
        },
      ],

    },


    // ==================================================
    // TOP ROW
    // ==================================================

    topRow: {

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'space-between',

    },


    iconBox: {

      width:
        42,

      height:
        42,

      borderRadius:
        14,

      backgroundColor:
        '#36251C',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    iconBoxActive: {

      backgroundColor:
        '#F2B35B',

    },


    activeBadge: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        3,

      backgroundColor:
        '#F2B35B',

      paddingHorizontal:
        7,

      paddingVertical:
        5,

      borderRadius:
        999,

    },


    activeBadgeText: {

      color:
        '#24140A',

      fontSize:
        5.5,

      fontWeight:
        '900',

      letterSpacing:
        0.7,

    },


    // ==================================================
    // MICROCOPY
    // ==================================================

    microcopy: {

      marginTop:
        12,

      color:
        '#806A59',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        1.1,

    },


    microcopyActive: {

      color:
        '#D59B5A',

    },


    // ==================================================
    // TITLE
    // ==================================================

    name: {

      marginTop:
        5,

      fontSize:
        14,

      lineHeight:
        18,

      fontWeight:
        '900',

      color:
        '#FFF3DD',

    },


    nameActive: {

      color:
        '#F2B35B',

    },


    // ==================================================
    // DESCRIPTION
    // ==================================================

    description: {

      marginTop:
        7,

      fontSize:
        9.5,

      lineHeight:
        15,

      color:
        '#9F816A',

    },


    descriptionActive: {

      color:
        '#D5B99E',

    },


    // ==================================================
    // NOTE
    // ==================================================

    note: {

      marginTop:
        11,

      padding:
        11,

      borderRadius:
        14,

      backgroundColor:
        '#1B120E',

      borderWidth:
        1,

      borderColor:
        '#3B2920',

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        7,

    },


    noteText: {

      flex:
        1,

      color:
        '#8D735F',

      fontSize:
        8.5,

      lineHeight:
        13,

    },

  });