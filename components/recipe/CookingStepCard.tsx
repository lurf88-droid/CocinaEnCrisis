import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Rustic } from '@/constants/design-system';

import type { PasoReceta } from '@/types/receta';



type Props = {
  paso: PasoReceta;
  total: number;
};


export function CookingStepCard({
  paso,
  total,
}: Props) {


return (

<View style={styles.card}>


<AppText style={styles.counter}>
Paso {paso.numero} de {total}
</AppText>


<AppText style={styles.title}>
{paso.titulo}
</AppText>


<AppText style={styles.description}>
{paso.descripcion}
</AppText>



{paso.tiempo && (

<AppText style={styles.time}>
⏱ {paso.tiempo}
</AppText>

)}



{paso.consejo && (

<View style={styles.tipBox}>

<AppText style={styles.tip}>
💡 Consejo del Chef
</AppText>

<AppText style={styles.tipText}>
{paso.consejo}
</AppText>

</View>

)}



{paso.porQue && (

<View style={styles.whyBox}>

<AppText style={styles.why}>
👨‍🍳 ¿Por qué hacemos esto?
</AppText>

<AppText style={styles.whyText}>
{paso.porQue}
</AppText>

</View>

)}
{paso.errorEvitar && (

<View style={styles.errorBox}>

<AppText style={styles.errorTitle}>
⚠️ Evita este error
</AppText>

<AppText style={styles.errorText}>
{paso.errorEvitar}
</AppText>

</View>

)}

{paso.señalCorrecta && (

<View style={styles.successBox}>

<AppText style={styles.successTitle}>
👀 Señal de que vas bien
</AppText>

<AppText style={styles.successText}>
{paso.señalCorrecta}
</AppText>

</View>

)}
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
},


counter:{
color:Rustic.colors.gold,
fontWeight:'900',
fontSize:14,
},


title:{
color:Rustic.colors.cream,
fontSize:24,
fontWeight:'900',
marginTop:10,
},


description:{
color:Rustic.colors.cream,
fontSize:16,
lineHeight:24,
marginTop:14,
},


time:{
color:'#7BD88F',
fontWeight:'800',
marginTop:14,
},


tipBox:{
marginTop:18,
padding:14,
borderRadius:16,
backgroundColor:'rgba(232,154,46,0.12)',
},


tip:{
color:Rustic.colors.gold,
fontWeight:'900',
},


tipText:{
color:Rustic.colors.cream,
marginTop:6,
},


whyBox:{
marginTop:14,
padding:14,
borderRadius:16,
backgroundColor:'rgba(123,216,143,0.10)',
},


why:{
color:'#7BD88F',
fontWeight:'900',
},


whyText:{
color:Rustic.colors.cream,
marginTop:6,
},
errorBox:{
  marginTop:18,

  padding:14,

  borderRadius:16,

  backgroundColor:'#3A2518',

  borderWidth:1,

  borderColor:'#D96C3B',
},


errorTitle:{
  color:'#FF9B6A',

  fontWeight:'900',

  fontSize:16,
},


errorText:{
  marginTop:6,

  color:Rustic.colors.cream,

  fontSize:15,

  lineHeight:22,
},



successBox:{
  marginTop:14,

  padding:14,

  borderRadius:16,

  backgroundColor:'#22301F',

  borderWidth:1,

  borderColor:'#7BA86C',
},


successTitle:{
  color:'#8FE08A',

  fontWeight:'900',

  fontSize:16,
},


successText:{
  marginTop:6,

  color:Rustic.colors.cream,

  fontSize:15,

  lineHeight:22,
},



rescueBox:{
  marginTop:14,

  padding:14,

  borderRadius:16,

  backgroundColor:'#241B16',

  borderWidth:1,

  borderColor:'#E89A2F',
},


rescueTitle:{
  color:'#E89A2F',

  fontWeight:'900',

  fontSize:16,
},


rescueText:{
  marginTop:6,

  color:Rustic.colors.cream,

  fontSize:15,

  lineHeight:22,
},
});