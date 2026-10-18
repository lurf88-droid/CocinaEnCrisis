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
  estado?: string;
};


export function ChefAvatar({
  nombre = 'Chef Luna',
  estado = 'Lista para ayudarte',
}: Props) {

  return (

    <View style={styles.container}>


      <View style={styles.avatarWrap}>


        <View style={styles.avatarRing}>


          <Image
            source={
              require(
                '@/assets/images/chef-avatar.webp'
              )
            }
            style={styles.avatar}
          />


        </View>


        <View style={styles.badge}>

          <MaterialCommunityIcons
            name="chef-hat"
            size={12}
            color="#24140A"
          />

        </View>


      </View>


      <View style={styles.info}>


        <AppText style={styles.eyebrow}>
          TU CHEF PERSONAL
        </AppText>


        <AppText style={styles.nombre}>
          {nombre}
        </AppText>


        <View style={styles.statusRow}>


          <View style={styles.statusDot} />


          <AppText style={styles.subtitulo}>
            {estado}
          </AppText>


        </View>


      </View>


    </View>

  );

}


const styles =
  StyleSheet.create({


    container: {

      flexDirection:
        'row',

      alignItems:
        'center',

    },


    avatarWrap: {

      width:
        62,

      height:
        62,

      position:
        'relative',

      marginRight:
        Spacing.md,

    },


    avatarRing: {

      width:
        62,

      height:
        62,

      borderRadius:
        20,

      borderWidth:
        1,

      borderColor:
        '#805438',

      backgroundColor:
        '#352319',

      padding:
        3,

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    avatar: {

      width:
        '100%',

      height:
        '100%',

      borderRadius:
        16,

    },


    badge: {

      position:
        'absolute',

      right:
        -3,

      bottom:
        -3,

      width:
        26,

      height:
        26,

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


    info: {

      flex:
        1,

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


    nombre: {

      color:
        '#FFF3DD',

      fontSize:
        18,

      fontWeight:
        '900',

      marginTop:
        2,

    },


    statusRow: {

      flexDirection:
        'row',

      alignItems:
        'center',

      marginTop:
        5,

    },


    statusDot: {

      width:
        6,

      height:
        6,

      borderRadius:
        Radius.pill,

      backgroundColor:
        '#8FB276',

      marginRight:
        6,

    },


    subtitulo: {

      color:
        '#9D806B',

      fontSize:
        10,

      fontWeight:
        '700',

    },

  });