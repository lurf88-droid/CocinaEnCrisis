import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Rustic } from '@/constants/design-system';

import {
  REGIONES,
  type RegionId,
} from '@/data/regiones-mexico';


type Props = {
  visible:boolean;
  cerrar:()=>void;
  seleccionar:(id:RegionId)=>void;
};


export function CiudadModal({
  visible,
  cerrar,
  seleccionar,
}:Props){


return (

<Modal
visible={visible}
transparent
animationType="slide"
>


<View style={styles.overlay}>


<View style={styles.container}>


<AppText style={styles.title}>
📍 Selecciona tu ciudad
</AppText>



<ScrollView
showsVerticalScrollIndicator={false}
>


{REGIONES.map((region)=>(


<Pressable

key={region.id}

style={styles.card}

onPress={()=>{

seleccionar(region.id);

cerrar();

}}

>


<View>

<AppText style={styles.city}>
{region.nombre}
</AppText>


<AppText style={styles.info}>
{region.estado} · {region.zona}
</AppText>


<AppText style={styles.price}>
Tortilla ${region.tortillaKg}/kg · Jitomate ~${region.jitomateKg}/kg
</AppText>


</View>


</Pressable>


))}



</ScrollView>



<Pressable

style={styles.close}

onPress={cerrar}

>


<AppText style={styles.closeText}>
Cerrar
</AppText>


</Pressable>



</View>

</View>


</Modal>

);

}



const styles = StyleSheet.create({

overlay:{
flex:1,
backgroundColor:'rgba(0,0,0,0.65)',
justifyContent:'flex-end',
},


container:{
backgroundColor:'#24160F',
borderTopLeftRadius:30,
borderTopRightRadius:30,
padding:24,
maxHeight:'85%',
borderWidth:1,
borderColor:Rustic.colors.border,
},


title:{
color:Rustic.colors.cream,
fontSize:30,
fontWeight:'900',
marginBottom:20,
},


card:{
backgroundColor:'#3A2418',
padding:18,
borderRadius:18,
marginBottom:12,
borderWidth:1,
borderColor:Rustic.colors.border,
},


city:{
color:Rustic.colors.cream,
fontSize:20,
fontWeight:'900',
},


info:{
color:'#D9B88A',
fontSize:15,
marginTop:5,
fontWeight:'700',
},


price:{
color:'#FFF3DD',
fontSize:14,
marginTop:8,
fontWeight:'700',
},


close:{
marginTop:10,
padding:18,
alignItems:'center',
},


closeText:{
color:Rustic.colors.gold,
fontSize:18,
fontWeight:'900',
},

});