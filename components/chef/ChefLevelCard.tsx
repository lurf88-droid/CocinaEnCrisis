import { StyleSheet } from 'react-native';

import { AppCard } from '@/components/ui/AppCard';
import { AppText } from '@/components/ui/AppText';

import {
  KitchenColors,
  Spacing,
} from '@/constants/theme';


type Props = {
  recetas:number;
};


export function ChefLevelCard({
  recetas,
}:Props){


let nivel = '🌱 Explorador de cocina';
let mensaje = 'Tu aventura apenas comienza.';

if(recetas >= 1){
  nivel = '🍳 Cocinero comenzando';
  mensaje = 'Ya diste tus primeros pasos.';
}

if(recetas >= 5){
  nivel = '👨‍🍳 Cocinero en progreso';
  mensaje = 'Chef Luna empieza a conocerte.';
}

if(recetas >= 15){
  nivel = '🔥 Aprendiz del Chef Luna';
  mensaje = 'Tu técnica sigue creciendo.';
}

if(recetas >= 30){
  nivel = '⭐ Maestro de cocina';
  mensaje = 'Has dominado muchas recetas.';
}


return (

<AppCard style={styles.card}>

<AppText style={styles.title}>
👨‍🍳 Nivel Chef Luna
</AppText>


<AppText style={styles.level}>
{nivel}
</AppText>


<AppText style={styles.text}>
{mensaje}
</AppText>


<AppText style={styles.count}>
🔥 {recetas} recetas preparadas
</AppText>


</AppCard>

);

}



const styles = StyleSheet.create({

card:{
marginTop:Spacing.lg,
backgroundColor:KitchenColors.card,
borderColor:KitchenColors.border,
},


title:{
color:KitchenColors.text,
fontSize:20,
fontWeight:'900',
},


level:{
marginTop:Spacing.md,
color:'#E89A2F',
fontSize:18,
fontWeight:'900',
},


text:{
marginTop:Spacing.sm,
color:KitchenColors.textMuted,
},


count:{
marginTop:Spacing.md,
color:'#F8E7C8',
fontWeight:'800',
},

});