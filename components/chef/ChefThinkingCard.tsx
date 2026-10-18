import {
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


export function ChefThinkingCard() {

  return (

    <View style={styles.card}>


      <View style={styles.header}>


        <View style={styles.iconWrap}>

          <MaterialCommunityIcons
            name="chef-hat"
            size={27}
            color="#F2B35B"
          />

        </View>


        <View style={styles.headerText}>

          <AppText style={styles.eyebrow}>
            CHEF LUNA
          </AppText>

          <AppText style={styles.title}>
            Estoy revisando tu cocina
          </AppText>

          <AppText style={styles.subtitle}>
            Buscando la mejor salida para hoy
          </AppText>

        </View>


      </View>


      <View style={styles.progressTrack}>

        <View style={styles.progressFill} />

      </View>


      <View style={styles.steps}>


        <ThinkingStep
          icon="basket-outline"
          title="Tu despensa"
          text="Revisando los ingredientes que tienes"
        />


        <ThinkingStep
          icon="cash"
          title="Tu presupuesto"
          text="Comparando costos y opciones"
        />


        <ThinkingStep
          icon="silverware-fork-knife"
          title="Tus recetas"
          text="Buscando la mejor combinación"
        />


      </View>


      <View style={styles.footer}>

        <MaterialCommunityIcons
          name="lightbulb-outline"
          size={17}
          color="#D7A86E"
        />

        <AppText style={styles.footerText}>
          No necesitas decidir nada todavía. Chef Luna está comparando las opciones.
        </AppText>

      </View>


    </View>

  );

}


function ThinkingStep({
  icon,
  title,
  text,
}: {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >['name'];
  title: string;
  text: string;
}) {

  return (

    <View style={styles.step}>


      <View style={styles.stepIcon}>

        <MaterialCommunityIcons
          name={icon}
          size={19}
          color="#F2B35B"
        />

      </View>


      <View style={styles.stepContent}>

        <AppText style={styles.stepTitle}>
          {title}
        </AppText>

        <AppText style={styles.stepText}>
          {text}
        </AppText>

      </View>


      <MaterialCommunityIcons
        name="dots-horizontal"
        size={19}
        color="#806A59"
      />


    </View>

  );

}


const styles =
  StyleSheet.create({

    card: {

      backgroundColor: '#211510',

      borderRadius: 24,

      borderWidth: 1,

      borderColor: '#65452F',

      padding: 18,

    },

    header: {

      flexDirection: 'row',

      alignItems: 'center',

    },

    iconWrap: {

      width: 52,

      height: 52,

      borderRadius: 17,

      backgroundColor: '#39251A',

      borderWidth: 1,

      borderColor: '#704B34',

      alignItems: 'center',

      justifyContent: 'center',

      marginRight: 12,

    },

    headerText: {

      flex: 1,

    },

    eyebrow: {

      color: '#C17D48',

      fontSize: 7,

      fontWeight: '900',

      letterSpacing: 1.3,

    },

    title: {

      color: '#FFF3DD',

      fontSize: 18,

      fontWeight: '900',

      marginTop: 2,

    },

    subtitle: {

      color: '#A78971',

      fontSize: 10,

      marginTop: 3,

    },

    progressTrack: {

      height: 7,

      borderRadius: Radius.pill,

      backgroundColor: '#3A2A20',

      overflow: 'hidden',

      marginTop: 17,

    },

    progressFill: {

      width: '72%',

      height: '100%',

      borderRadius: Radius.pill,

      backgroundColor: '#F2B35B',

    },

    steps: {

      marginTop: 16,

      gap: 9,

    },

    step: {

      minHeight: 60,

      flexDirection: 'row',

      alignItems: 'center',

      backgroundColor: '#1A110D',

      borderRadius: 15,

      borderWidth: 1,

      borderColor: '#3F2B22',

      paddingHorizontal: 11,

      paddingVertical: 9,

    },

    stepIcon: {

      width: 38,

      height: 38,

      borderRadius: 12,

      backgroundColor: '#322118',

      alignItems: 'center',

      justifyContent: 'center',

      marginRight: 10,

    },

    stepContent: {

      flex: 1,

    },

    stepTitle: {

      color: '#EAD5C0',

      fontSize: 11,

      fontWeight: '900',

    },

    stepText: {

      color: '#8F7664',

      fontSize: 9,

      lineHeight: 14,

      marginTop: 2,

    },

    footer: {

      flexDirection: 'row',

      alignItems: 'flex-start',

      gap: 8,

      marginTop: 14,

      paddingTop: 13,

      borderTopWidth: 1,

      borderTopColor: '#3C2B22',

    },

    footerText: {

      flex: 1,

      color: '#9D806B',

      fontSize: 9,

      lineHeight: 15,

    },

  });