import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';

import type { ResultadoBusqueda } from '@/types/receta';


type Props = {
  receta: ResultadoBusqueda | null;
  razones: string[];
  onPress?: () => void;
};


export function ChefOpportunityCard({
  receta,
  razones,
  onPress,
}: Props) {





if (!receta) {
  return null;
}


return (

<View style={styles.card}>


  <AppText style={styles.kicker}>
    🧑‍🍳 OPORTUNIDAD CHEF LUNA
  </AppText>


  <AppText style={styles.title}>
    {receta.titulo}
  </AppText>



  <View style={styles.stats}>


    <AppText style={styles.stat}>
      💰 Costo aproximado: ${Math.round(receta.costoTotal)}
    </AppText>


    <AppText style={styles.stat}>
      ⏱ Tiempo: {receta.tiempoMinutos} minutos
    </AppText>


  </View>



  {razones.map((razon,index)=>(

    <AppText
      key={index}
      style={styles.reason}
    >
      {razon}
    </AppText>

  ))}



  <Pressable

    onPress={()=>{

      console.log(
        "🔥 BOTÓN VER OPORTUNIDAD:",
        receta.titulo
      );


      onPress?.();

    }}

    style={styles.actionButton}

  >

    <AppText style={styles.button}>
      🛒 Ver oportunidad →
    </AppText>


  </Pressable>



</View>

);

}



const styles = StyleSheet.create({


card:{
marginTop:24,
backgroundColor:'#24160F',
borderRadius:28,
padding:20,
borderWidth:1,
borderColor:'#A66A3C',
},


kicker:{
color:'#E89A2F',
fontSize:11,
fontWeight:'900',
letterSpacing:1,
},


title:{
color:'#FFF3DD',
fontSize:24,
fontWeight:'900',
marginTop:10,
},


stats:{
marginTop:16,
gap:8,
},


stat:{
color:'#F2B35B',
fontSize:14,
fontWeight:'800',
},


reason:{
color:'#D9C2A3',
fontSize:14,
marginTop:10,
lineHeight:20,
},


actionButton:{
marginTop:18,
paddingVertical:12,
paddingHorizontal:14,
borderRadius:14,
backgroundColor:'#2D3A25',
borderWidth:1,
borderColor:'#7A9B76',
alignSelf:'flex-start',
},


button:{
color:'#B9E59B',
fontSize:15,
fontWeight:'900',
},


});