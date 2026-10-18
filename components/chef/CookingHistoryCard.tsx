import { StyleSheet, View } from 'react-native';

import { AppCard } from '@/components/ui/AppCard';
import { AppText } from '@/components/ui/AppText';
import { RECETAS } from '@/data/recetas';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


type Props = {
  historial:string[];
};


export function CookingHistoryCard({
  historial,
}:Props){


return (

<AppCard style={styles.card}>


<AppText style={styles.title}>
👨‍🍳 Mi historia con Chef Luna
</AppText>


<AppText style={styles.count}>
🔥 {historial.length} recetas preparadas
</AppText>



{
historial.length === 0 ? (

<AppText style={styles.empty}>
Todavía no has preparado una receta.
Chef Luna está listo para comenzar contigo.
</AppText>

)

:(

<View style={styles.list}>

{
historial
.slice(-5)
.reverse()
.map((id, index)=>{

const receta = RECETAS.find(
  (item)=>item.id === id
);


return (

<AppText
key={`${id}-${index}`}
style={styles.item}
>
🍽 {receta?.titulo ?? id}
</AppText>

);

})
}

</View>

)

}


</AppCard>

);

}



const styles = StyleSheet.create({

card:{
marginTop:Spacing.lg,
backgroundColor:KitchenColors.card,
borderColor:KitchenColors.border,
borderRadius:Radius.xl,
},


title:{
color:KitchenColors.text,
fontSize:22,
fontWeight:'900',
},


count:{
marginTop:Spacing.md,
color:'#E89A2F',
fontWeight:'900',
fontSize:16,
},


empty:{
marginTop:Spacing.md,
color:KitchenColors.textMuted,
lineHeight:24,
},


list:{
marginTop:Spacing.md,
gap:8,
},


item:{
color:KitchenColors.text,
fontSize:16,
fontWeight:'700',
},


});
