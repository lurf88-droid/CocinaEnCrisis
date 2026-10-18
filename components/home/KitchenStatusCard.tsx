import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';

import { Rustic } from '@/constants/design-system';


type Props = {
  porcentaje:number;
  estado:string;
  ingredientes:number;
  recetas:number;
  consejo:string;
  accion:string;
};



export function KitchenStatusCard({
  porcentaje,
  estado,
  ingredientes,
  recetas,
  consejo,
  accion,
}:Props){


return (

<View style={styles.card}>


<View style={styles.header}>


<View>

<AppText style={styles.kicker}>
🔥 ESTADO DE TU COCINA
</AppText>


<AppText style={styles.title}>
{estado}
</AppText>

</View>


<AppText style={styles.percent}>
{porcentaje}%
</AppText>


</View>



<View style={styles.barBackground}>

<View
style={[
styles.barFill,
{
width:`${porcentaje}%`
}
]}
/>
</View>
<AppText style={styles.progressText}>
  {estado}
</AppText>





<View style={styles.stats}>


<View style={styles.box}>

<AppText style={styles.number}>
{ingredientes}
</AppText>

<AppText style={styles.label}>
Ingredientes
</AppText>

</View>



<View style={styles.box}>

<AppText style={styles.number}>
{recetas}
</AppText>

<AppText style={styles.label}>
Recetas listas
</AppText>

</View>


</View>



<View style={styles.message}>

<AppText style={styles.messageTitle}>
👨‍🍳 Consejo de Chef Luna
</AppText>

<AppText style={styles.messageText}>
{consejo}
</AppText>

<AppText style={styles.actionText}>
👉 {accion}
</AppText>

</View>


</View>

);

}




const styles=StyleSheet.create({


card:{
backgroundColor:'#24160F',
borderRadius:28,
padding:24,
borderWidth:1,
borderColor:Rustic.colors.border,
marginBottom:20,
},


header:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'flex-start',
},

kicker:{
color:Rustic.colors.gold,
fontSize:12,
fontWeight:'900',
},


title:{
color:Rustic.colors.cream,
fontSize:32,
fontWeight:'900',
marginTop:8,
marginBottom:14,
},

percent:{
color:Rustic.colors.gold,
fontSize:42,
fontWeight:'900',
lineHeight:48,
},


barBackground:{
height:12,
backgroundColor:'#3A2418',
borderRadius:20,
marginTop:28,
overflow:'hidden',
},


barFill:{
height:'100%',
backgroundColor:'#E89A2F',
borderRadius:20,
},


stats:{
flexDirection:'row',
gap:12,
marginTop:18,
},


box:{
  flex:1,
  minHeight:120,
  backgroundColor:'#2B1E18',
  padding:16,
  borderRadius:18,
  alignItems:'center',
  justifyContent:'center',
},


number:{
color:Rustic.colors.cream,
fontSize:28,
fontWeight:'900',
},


label:{
  color:Rustic.colors.gold,
  fontWeight:'800',
  marginTop:5,
  fontSize:15,
  textAlign:'center',
},

message:{
 marginTop:16,
 backgroundColor:'#3A2418',
 padding:14,
 borderRadius:18,
},


messageTitle:{
color:Rustic.colors.gold,
fontWeight:'900',
},


messageText:{
color:Rustic.colors.cream,
marginTop:8,
lineHeight:22,
},
progressText:{
color:'#D8B98A',
marginTop:20,
fontSize:16,
fontWeight:'700',
lineHeight:24,
},
actionText:{
  marginTop:10,
  color:'#E89A2F',
  fontWeight:'900',
  fontSize:14,
},
});