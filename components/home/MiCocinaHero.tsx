import { StyleSheet, View } from 'react-native';

import { AppCard } from '@/components/ui/AppCard';
import { AppText } from '@/components/ui/AppText';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


type Props = {
  mensaje: string;
  receta?: string;
};


export function MiCocinaHero({
  mensaje,
  receta,
}: Props) {

  return (
    <AppCard style={styles.card}>

      <View style={styles.header}>

        <AppText style={styles.avatar}>
          👨‍🍳
        </AppText>

        <View>

          <AppText style={styles.title}>
            Chef Luna
          </AppText>


          <AppText style={styles.subtitle}>
            Tu asistente de cocina
          </AppText>

        </View>

      </View>


   <AppText style={styles.message}>
 Hola Fernando 👋
</AppText>


{receta && (

  <View style={styles.recipeBox}>

    <AppText style={styles.recipeTitle}>
      🔥 Mi recomendación de hoy:
    </AppText>


    <AppText style={styles.recipe}>
      {receta}
    </AppText>


    <AppText style={styles.reason}>
     Tienes todo para preparar algo rico hoy.
    </AppText>

  </View>

)}

    </AppCard>
  );
}


const styles = StyleSheet.create({

  card:{
    backgroundColor: '#2A1A12',
    borderColor:'#A66A3C',
    borderRadius:Radius.xl,
    padding:Spacing.lg,
    marginBottom:Spacing.lg,
  },


  header:{
    flexDirection:'row',
    alignItems:'center',
  },


  avatar:{
    fontSize:45,
    marginRight:Spacing.md,
  },


  title:{
    color:'#F2B35B',
    fontSize:24,
    fontWeight:'900',
  },


  subtitle:{
    color:KitchenColors.textMuted,
    fontSize:14,
  },


  message:{
    marginTop:Spacing.lg,
    color:'#FFF3E2',
    fontSize:17,
    lineHeight:26,
  },


  recipeBox:{
    marginTop:Spacing.lg,
    backgroundColor:'#3A2418',
    padding:Spacing.md,
    borderRadius:Radius.lg,
  },


  recipeTitle:{
    color:'#E89A2E',
    fontWeight:'900',
  },


  recipe:{
    marginTop:Spacing.sm,
    color:'#FFF3E2',
    fontSize:20,
    fontWeight:'800',
  },
reason:{
  marginTop:Spacing.sm,
  color:'#D8C2A8',
  fontSize:14,
  lineHeight:20,
},
});