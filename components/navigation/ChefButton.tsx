import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { AppText } from '@/components/ui/AppText';


type Props = {
  onPress: () => void;
};


export function ChefButton({
  onPress,
}: Props) {

  return (

    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed &&
          styles.pressed,
      ]}
    >


      <View style={styles.outerRing}>


        <View style={styles.circle}>


          <MaterialCommunityIcons
            name="chef-hat"
            size={31}
            color="#24140A"
          />


        </View>


      </View>


      <View style={styles.labelBadge}>

        <AppText style={styles.label}>
          CHEF
        </AppText>

      </View>


    </Pressable>

  );

}


const styles =
  StyleSheet.create({


    container: {

      alignItems:
        'center',

      justifyContent:
        'center',

      marginTop:
        -34,

      minWidth:
        76,

    },


    outerRing: {

      width:
        72,

      height:
        72,

      borderRadius:
        36,

      backgroundColor:
        '#1B120E',

      borderWidth:
        1,

      borderColor:
        '#6B4934',

      alignItems:
        'center',

      justifyContent:
        'center',

      shadowColor:
        '#000',

      shadowOpacity:
        0.48,

      shadowRadius:
        13,

      shadowOffset: {
        width: 0,
        height: 7,
      },

      elevation:
        14,

    },


    circle: {

      width:
        62,

      height:
        62,

      borderRadius:
        31,

      backgroundColor:
        '#F2B35B',

      borderWidth:
        2,

      borderColor:
        '#FFD18A',

      alignItems:
        'center',

      justifyContent:
        'center',

      shadowColor:
        '#F2B35B',

      shadowOpacity:
        0.26,

      shadowRadius:
        10,

      shadowOffset: {
        width: 0,
        height: 2,
      },

      elevation:
        8,

    },


    labelBadge: {

      minWidth:
        45,

      height:
        19,

      marginTop:
        -7,

      paddingHorizontal:
        8,

      borderRadius:
        999,

      backgroundColor:
        '#21150F',

      borderWidth:
        1,

      borderColor:
        '#765039',

      alignItems:
        'center',

      justifyContent:
        'center',

      elevation:
        16,

    },


    label: {

      color:
        '#F2B35B',

      fontSize:
        7,

      fontWeight:
        '900',

      letterSpacing:
        1.3,

    },


    pressed: {

      transform: [
        {
          scale:
            0.93,
        },
      ],

      opacity:
        0.9,

    },

  });