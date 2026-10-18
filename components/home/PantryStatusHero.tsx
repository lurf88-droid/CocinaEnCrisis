import { View, StyleSheet } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Rustic } from '@/constants/design-system';


type Props = {
  porcentaje:number;
  estado:string;
};


export function PantryStatusHero({
  porcentaje,
  estado,
}:Props){

return (

<View style={styles.card}>

<AppText style={styles.title}>
🧺 TU COCINA
</AppText>


<AppText style={styles.number}>
{porcentaje}%
</AppText>

<AppText style={styles.subtitle}>
Tienes una gran base para crear 🔥
</AppText>
<View style={styles.progressBackground}>

<View
style={[
styles.progressFill,
{
 width:`${porcentaje}%`
}
]}
/>

</View>
<AppText style={styles.status}>
{estado}
</AppText>


<AppText style={styles.message}>
Hay algo increíble por cocinar 🔥
</AppText>


</View>

);

}


const styles = StyleSheet.create({

card:{
backgroundColor:'#2B1E18',
padding:20,
borderRadius:24,
borderWidth:1,
borderColor:Rustic.colors.border,
marginTop:16,
},


title:{
color:Rustic.colors.gold,
fontWeight:'900',
fontSize:14,
marginBottom:8,
},
subtitle:{
color:'#D7A86E',
fontSize:13,
fontWeight:'800',
marginTop:2,
},

number:{
color:Rustic.colors.cream,
fontSize:38,
fontWeight:'900',
marginTop:16,
lineHeight:42,
},


status:{
color:Rustic.colors.gold,
fontSize:20,
fontWeight:'900',
},


message:{
color:Rustic.colors.cream,
marginTop:8,
},
progressBackground:{
height:12,
backgroundColor:'#3A2418',
borderRadius:20,
overflow:'hidden',
marginTop:12,
},


progressFill:{
height:'100%',
backgroundColor:'#E89A2F',
borderRadius:20,
},
});