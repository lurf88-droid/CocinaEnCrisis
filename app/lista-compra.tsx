import { 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  View 
} from 'react-native';

import { useState } from 'react';

import { Screen } from '@/components/ui/Screen';
import { AppText } from '@/components/ui/AppText';
import { AppCard } from '@/components/ui/AppCard';

import { useIngredientes } from '@/context/IngredientesContext';
import { KitchenColors } from '@/constants/theme';


export default function ListaCompraScreen(){
  const [mensaje, setMensaje] = useState('');

const {
  listaCompra,
  quitarCompra,
  vaciarCompra,
  marcarComprado,
} = useIngredientes();



return (

<Screen>

<ScrollView
contentContainerStyle={styles.container}
>


<AppText style={styles.title}>
🛒 Compra inteligente
</AppText>


<AppText style={styles.subtitle}>
Ingredientes recomendados por el Chef
</AppText>

{mensaje !== '' && (

<View style={styles.messageBox}>

<AppText style={styles.messageText}>
{mensaje}
</AppText>

</View>

)}

{listaCompra.length === 0 ? (

<AppCard>

<AppText>
No tienes ingredientes pendientes.
</AppText>

<AppText>
🔥 Cuando el Chef detecte faltantes aparecerán aquí.
</AppText>

</AppCard>


) : (


listaCompra.map((ingrediente)=>(

<AppCard
  key={ingrediente}
  style={styles.card}
>

<AppText style={styles.ingrediente}>
    🛒 {ingrediente}
  </AppText>


  <TouchableOpacity
    onPress={() => quitarCompra(ingrediente)}
    style={styles.button}
  >
    <AppText style={styles.buttonText}>
      ❌ Quitar
    </AppText>
  </TouchableOpacity>


  <TouchableOpacity
    onPress={() => {

  marcarComprado(ingrediente);

  setMensaje(
    `✅ ${ingrediente} agregado a tu despensa`
  );

  setTimeout(()=>{
    setMensaje('');
  },3000);

}}
    style={styles.compradoButton}
  >
    <AppText style={styles.buttonText}>
      ✅ Ya la compré
    </AppText>
  </TouchableOpacity>


</AppCard>


))


)}



{listaCompra.length > 0 && (

<TouchableOpacity

onPress={vaciarCompra}

style={styles.clear}

>

<AppText style={styles.clearText}>
🗑 Vaciar lista
</AppText>

</TouchableOpacity>

)}



</ScrollView>

</Screen>

);

}



const styles=StyleSheet.create({

container:{
padding:20,
gap:16,
},


title:{
  fontSize:28,
  fontWeight:'900',
  color:'#F2B35B',
},


subtitle:{
  fontSize:16,
  color:'#F8E4C8',
},

card:{
gap:10,
},


ingrediente:{
  fontSize:22,
  fontWeight:'900',
  color: KitchenColors.text,
  marginBottom:16,
},




buttonText:{
color:'#fff',
fontWeight:'900',
},


clear:{
marginTop:20,
padding:15,
borderRadius:20,
backgroundColor:'#3A2418',
alignItems:'center',
},


clearText:{
color:'#fff',
fontWeight:'900',
},



button:{
  backgroundColor:'#A65335',
  padding:16,
  borderRadius:30,
  alignItems:'center',
  marginTop:10,
},

compradoButton:{
  backgroundColor:'#7A9B76',
  padding:16,
  borderRadius:30,
  alignItems:'center',
  marginTop:10,
},

descripcion:{
 color:'#D8B98A',
 fontSize:16,
},
messageBox:{
backgroundColor:'#7A9B76',
padding:14,
borderRadius:20,
},

messageText:{
color:'#fff',
fontWeight:'900',
textAlign:'center',
},

});