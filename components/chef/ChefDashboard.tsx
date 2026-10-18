import {
  Image,
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


type Props = {
  nombre?: string;
  mensaje: string;
};


// ======================================================
// 🌙 CHEF DASHBOARD
// ======================================================

export function ChefDashboard({
  nombre = 'Chef Luna',
  mensaje,
}: Props) {

  return (

    <View style={styles.container}>

      <View style={styles.card}>


        {/* =================================================
            HEADER
        ================================================= */}

        <View style={styles.header}>


          {/* AVATAR COMPACTO */}

          <View style={styles.avatarWrap}>

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
                size={11}
                color="#24140A"
              />

            </View>

          </View>


          {/* IDENTIDAD */}

          <View style={styles.identity}>

            <AppText style={styles.eyebrow}>
              ANÁLISIS DE TU COCINA
            </AppText>

            <AppText style={styles.title}>
              Consejo de {nombre}
            </AppText>

          </View>


          {/* ESTADO */}

          <View style={styles.statusBadge}>

            <MaterialCommunityIcons
              name="check-circle-outline"
              size={13}
              color="#9BC78A"
            />

            <AppText style={styles.statusText}>
              LISTO
            </AppText>

          </View>


        </View>


        {/* =================================================
            MENSAJE
        ================================================= */}

        <View style={styles.messageCard}>

          <View style={styles.quoteIcon}>

            <MaterialCommunityIcons
              name="format-quote-open"
              size={21}
              color="#F2B35B"
            />

          </View>


          <AppText style={styles.message}>
            {mensaje}
          </AppText>

        </View>


        {/* =================================================
            FOOTER
        ================================================= */}

        <View style={styles.footer}>

          <MaterialCommunityIcons
            name="chef-hat"
            size={16}
            color="#D7A86E"
          />

          <AppText style={styles.footerText}>
            Basado en tu despensa, presupuesto y opciones disponibles.
          </AppText>

        </View>


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

      width:
        '100%',

      marginBottom:
        Spacing.sm,

    },


    card: {

      width:
        '100%',

      backgroundColor:
        '#211510',

      borderRadius:
        23,

      borderWidth:
        1,

      borderColor:
        '#60412F',

      padding:
        16,

    },


    // ==================================================
    // HEADER
    // ==================================================

    header: {

      width:
        '100%',

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    // ==================================================
    // AVATAR
    // ==================================================

    avatarWrap: {

      width:
        58,

      height:
        58,

      borderRadius:
        18,

      borderWidth:
        1,

      borderColor:
        '#805438',

      backgroundColor:
        '#352319',

      padding:
        3,

      marginRight:
        11,

      position:
        'relative',

      flexShrink:
        0,

    },


    avatar: {

      width:
        '100%',

      height:
        '100%',

      borderRadius:
        14,

    },


    avatarBadge: {

      position:
        'absolute',

      right:
        -4,

      bottom:
        -4,

      width:
        25,

      height:
        25,

      borderRadius:
        9,

      backgroundColor:
        '#F2B35B',

      borderWidth:
        3,

      borderColor:
        '#211510',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    // ==================================================
    // IDENTIDAD
    // ==================================================

    identity: {

      flex:
        1,

      minWidth:
        0,

    },


    eyebrow: {

      color:
        '#C17D48',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.2,

    },


    title: {

      color:
        '#FFF3DD',

      fontSize:
        16,

      lineHeight:
        21,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    // ==================================================
    // ESTADO
    // ==================================================

    statusBadge: {

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        4,

      marginLeft:
        8,

      paddingHorizontal:
        8,

      paddingVertical:
        6,

      borderRadius:
        Radius.pill,

      backgroundColor:
        '#1E2A1E',

      borderWidth:
        1,

      borderColor:
        '#40553E',

      flexShrink:
        0,

    },


    statusText: {

      color:
        '#9BC78A',

      fontSize:
        6,

      fontWeight:
        '900',

      letterSpacing:
        0.8,

    },


    // ==================================================
    // MENSAJE
    // ==================================================

    messageCard: {

      width:
        '100%',

      marginTop:
        15,

      backgroundColor:
        '#1A110D',

      borderRadius:
        17,

      borderWidth:
        1,

      borderColor:
        '#3F2B22',

      padding:
        14,

    },


    quoteIcon: {

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

      marginBottom:
        9,

    },


    message: {

      color:
        '#E8D2BD',

      fontSize:
        13,

      lineHeight:
        21,

      fontWeight:
        '700',

    },


    // ==================================================
    // FOOTER
    // ==================================================

    footer: {

      width:
        '100%',

      marginTop:
        13,

      paddingTop:
        12,

      borderTopWidth:
        1,

      borderTopColor:
        '#3A2920',

      flexDirection:
        'row',

      alignItems:
        'center',

      gap:
        7,

    },


    footerText: {

      flex:
        1,

      color:
        '#8D735F',

      fontSize:
        8,

      lineHeight:
        13,

      fontWeight:
        '700',

    },

  });