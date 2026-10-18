import { StyleSheet, View } from 'react-native';

import { AppCard } from '@/components/ui/AppCard';
import { AppText } from '@/components/ui/AppText';
import { AppButton } from '@/components/ui/AppButton';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


type Props = {
  receta:string;
  paso:number;
  total:number;
  tituloPaso:string;
  onContinuar:()=>void;
};


export function CookingResumeCard({
  receta,
  paso,
  total,
  tituloPaso,
  onContinuar,
}:Props){

const progreso =
  total > 0
    ? Math.round(
        ((paso + 1) / total) * 100
      )
    : 0;

return (

<AppCard style={styles.card}>


<AppText style={styles.badge}>
🔥 Cocina pendiente
</AppText>


<AppText style={styles.title}>
{receta}
</AppText>


<AppText style={styles.text}>
Chef Luna recuerda dónde te quedaste.
</AppText>



<View style={styles.progressBox}>


<AppText style={styles.step}>
Paso {paso + 1} de {total}
</AppText>


<AppText style={styles.stepTitle}>
{tituloPaso}
</AppText>


<View style={styles.barBackground}>

<View
style={[
styles.barFill,
{
width:`${progreso}%`
}
]}
/>

</View>


<AppText style={styles.percent}>
{progreso}% completado
</AppText>


</View>



<AppButton
onPress={onContinuar}
>
🔥 Continuar cocinando
</AppButton>



</AppCard>

);

}



const styles = StyleSheet.create({

card:{
marginTop:Spacing.lg,
backgroundColor:KitchenColors.card,
borderColor:KitchenColors.border,
},


badge:{
color:'#E89A2F',
fontWeight:'900',
fontSize:15,
},


title:{
marginTop:Spacing.md,
color:KitchenColors.text,
fontSize:24,
fontWeight:'900',
},


text:{
marginTop:Spacing.sm,
color:KitchenColors.textMuted,
},


progressBox:{
marginTop:Spacing.lg,
padding:Spacing.md,
borderRadius:Radius.lg,
backgroundColor:'#3A2418',
},


step:{
color:'#F2B35B',
fontWeight:'900',
},


stepTitle:{
marginTop:6,
color:'#FFF3DD',
fontSize:18,
fontWeight:'800',
},


barBackground:{
marginTop:Spacing.md,
height:10,
borderRadius:20,
backgroundColor:'#21150F',
overflow:'hidden',
},


barFill:{
height:'100%',
backgroundColor:'#E89A2F',
},


percent:{
marginTop:8,
color:'#F8E7C8',
fontWeight:'800',
},


});