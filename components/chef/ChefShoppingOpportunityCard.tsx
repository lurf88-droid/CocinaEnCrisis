import { Pressable, StyleSheet, View } from 'react-native';

import { obtenerMensajeCompraChef } from '@/utils/chefMessages';
import { AppText } from '@/components/ui/AppText';


type CompraSugerida = {
  ingrediente:string;
  cantidad:number;
  costo:number;
  razon:string;
};


type Props = {
  compra: CompraSugerida | null;
  onPress?:()=>void;
};



export function ChefShoppingOpportunityCard({

compra,
onPress,

}:Props){


if(!compra){
return null;
}


const mensajeCompra =
obtenerMensajeCompraChef(
  compra.ingrediente,
  compra.cantidad,
  compra.costo
);



return (

<Pressable

style={styles.card}

onPress={()=>{

console.log(
"🔥 CLICK COMPRA INTELIGENTE:",
compra.ingrediente
);


onPress?.();

}}

>


<AppText style={styles.kicker}>
🛒 COMPRA INTELIGENTE DE CHEF LUNA
</AppText>



<AppText style={styles.title}>
Agrega:
</AppText>



<AppText style={styles.ingredient}>
🥕 {compra.ingrediente}
</AppText>



<View style={styles.info}>


<AppText style={styles.text}>
🔥 Desbloquea nuevas recetas
</AppText>



<AppText style={styles.text}>
💰 Costo aproximado ${compra.costo}
</AppText>



</View>



<AppText style={styles.reason}>
👨‍🍳 {compra.razon}
</AppText>



<AppText style={styles.reason}>
{mensajeCompra}
</AppText>



<AppText style={styles.button}>
Ver oportunidad →
</AppText>



</Pressable>

);

}




const styles = StyleSheet.create({

card:{
marginTop:20,
backgroundColor:'#2B1E18',
borderRadius:28,
padding:20,
borderWidth:1,
borderColor:'#C07A35',
},


kicker:{
color:'#E89A2F',
fontSize:11,
fontWeight:'900',
letterSpacing:1,
},


title:{
marginTop:12,
color:'#FFF3DD',
fontSize:16,
fontWeight:'800',
},


ingredient:{
marginTop:8,
color:'#B9E59B',
fontSize:26,
fontWeight:'900',
},


info:{
marginTop:16,
gap:8,
},


text:{
color:'#F2B35B',
fontSize:15,
fontWeight:'800',
},


reason:{
marginTop:14,
color:'#D9C2A3',
fontSize:14,
lineHeight:20,
},


button:{
marginTop:18,
color:'#B9E59B',
fontSize:15,
fontWeight:'900',
},

});