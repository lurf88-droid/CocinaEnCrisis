import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Rustic } from '@/constants/design-system';


type Props = {
  ingrediente: string;
  recetasDesbloqueadas: number;
  costo: number;
  razon: string;
  confianza: number;
  recetas?: string[];
   listaCompra?: string[];
  onAgregar: () => void;
};


export function CompraInteligenteCard({
  ingrediente,
  recetasDesbloqueadas,
  costo,
  razon,
  confianza,
  recetas = [],
  listaCompra = [],
  onAgregar,
}: Props){
const yaEnLista =
  listaCompra.includes(ingrediente);
return (

<View style={styles.card}>

<AppText style={styles.badge}>
🔥 RECOMENDACIÓN DEL CHEF
</AppText>


<AppText style={styles.title}>
🛒 Compra inteligente
</AppText>


<AppText style={styles.text}>
Con una pequeña compra puedes ampliar mucho tus opciones de cocina:
</AppText>


<View style={styles.ingredientBox}>

<AppText style={styles.ingrediente}>
🌶 {ingrediente}
</AppText>

<AppText style={styles.unlockSmall}>
🔥 +{recetasDesbloqueadas} recetas
</AppText>

</View>


<View style={styles.info}>


<AppText style={styles.item}>
🔥 {recetasDesbloqueadas} recetas desbloqueadas
</AppText>


<AppText style={styles.item}>
💰 Inversión aproximada ${costo}
</AppText>


</View>

<View style={styles.confidenceBox}>

<AppText style={styles.confidenceTitle}>
👨‍🍳 Confianza del Chef
</AppText>


<View style={styles.progressBackground}>

<View
style={[
 styles.progressFill,
 {
   width:`${Math.min(confianza,100)}%`,
 }
]}
/>

</View>


<AppText style={styles.confidenceValue}>
{Math.min(confianza,100)}%
</AppText>
<AppText style={styles.confidenceHint}>
✓ {recetasDesbloqueadas} recetas desbloqueadas
</AppText>

<AppText style={styles.confidenceHint}>
✓ Compra económica para ampliar opciones
</AppText>


</View>

<View style={styles.reasonBox}>

<AppText style={styles.reason}>
{razon}
</AppText>

</View>

{recetas.length > 0 && (

<>
<View style={styles.unlockRecipes}>

<AppText style={styles.unlockTitle}>
🔥 Con esta compra desbloqueas:
</AppText>


{recetas.map((receta,index)=>(

<View
key={index}
style={styles.recipeUnlockItem}
>

<AppText style={styles.recipeUnlockText}>
🍳 {receta}
</AppText>

</View>

))}

</View>


<View style={styles.chefAnalysis}>

<AppText style={styles.analysisTitle}>
🧠 Análisis del Chef
</AppText>


<AppText style={styles.analysisText}>
✓ Desbloquea {recetasDesbloqueadas} recetas nuevas
</AppText>


<AppText style={styles.analysisText}>
✓ Tiene un costo accesible (${costo})
</AppText>


<AppText style={styles.analysisText}>
✓ Mejora tus opciones de cocina
</AppText>


</View>

</>

)}

<TouchableOpacity
style={styles.button}
onPress={onAgregar}
>

<AppText style={styles.buttonText}>
{
  yaEnLista
    ? '✅ En mi lista de compra'
    : '🔥 Desbloquear recetas'
}
</AppText>
</TouchableOpacity>


</View>

);

}



const styles = StyleSheet.create({

card:{
backgroundColor:'#2B1E18',
borderRadius:20,
padding:18,
marginTop:20,
borderWidth:1,
borderColor:Rustic.colors.border,
},


title:{
color:Rustic.colors.gold,
fontSize:20,
fontWeight:'900',
},


text:{
color:Rustic.colors.cream,
marginTop:8,
},


ingrediente:{
   color:'#F2B35B',
  fontSize:24,
  fontWeight:'900',
  textTransform:'capitalize',
},


info:{
gap:6,
},


item:{
color:Rustic.colors.cream,
fontWeight:'700',
},


reason:{
color:Rustic.colors.textMuted,
marginTop:12,
},


button:{
marginTop:16,
backgroundColor:'#E89A2F',
padding:14,
borderRadius:30,
alignItems:'center',
},


buttonText:{
color:'#FFF',
fontWeight:'900',
},

badge:{
color:Rustic.colors.gold,
fontSize:12,
fontWeight:'900',
marginBottom:8,
},


ingredientBox:{
  backgroundColor:'#3A2418',
  borderRadius:16,
  paddingVertical:10,
  paddingHorizontal:18,
  marginVertical:12,
  alignSelf:'flex-start',
  borderWidth:1,
  borderColor:'#8A5A35',
},


reasonBox:{
backgroundColor:'rgba(255,243,221,0.06)',
padding:12,
borderRadius:14,
marginTop:12,
},
confidenceBox:{
marginTop:16,
backgroundColor:'rgba(232,154,46,0.08)',
padding:12,
borderRadius:16,
borderWidth:1,
borderColor:Rustic.colors.border,
},

confidenceTitle:{
color:Rustic.colors.gold,
fontWeight:'900',
marginBottom:10,
},


progressBackground:{
height:12,
backgroundColor:'#3A2418',
borderRadius:20,
overflow:'hidden',
},


progressFill:{
height:'100%',
backgroundColor:'#7BD88F',
borderRadius:20,
},


confidenceValue:{
color:Rustic.colors.cream,
fontWeight:'900',
marginTop:8,
textAlign:'right',
},
unlockSmall:{
  marginTop:4,
  color:'#F2B35B',
  fontSize:13,
  fontWeight:'900',
},
confidenceHint:{
  marginTop:4,
  color:'#F8E4C8',
  fontSize:12,
  fontWeight:'700',
},
unlockRecipes:{
  marginTop:16,
  padding:12,
  borderRadius:16,
  backgroundColor:'#21150F',
  borderWidth:1,
  borderColor:'#8A5A35',
},


unlockTitle:{
  color:'#F2B35B',
  fontWeight:'900',
  fontSize:14,
  marginBottom:10,
},


recipeUnlockItem:{
  marginTop:6,
  paddingVertical:8,
  paddingHorizontal:10,
  borderRadius:12,
  backgroundColor:'#2B1E18',
},


recipeUnlockText:{
  color:'#FFF3DD',
  fontWeight:'700',
  fontSize:13,
},
chefAnalysis:{
  marginTop:16,
  padding:14,
  borderRadius:16,
  backgroundColor:'#21150F',
  borderWidth:1,
  borderColor:'#6D472D',
},


analysisTitle:{
  color:'#F2B35B',
  fontSize:15,
  fontWeight:'900',
  marginBottom:10,
},


analysisText:{
  color:'#FFF3DD',
  fontSize:13,
  fontWeight:'700',
  marginTop:6,
},
});