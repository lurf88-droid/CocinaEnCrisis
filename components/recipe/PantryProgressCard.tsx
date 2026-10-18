import { View, StyleSheet } from 'react-native';

import { AppText } from '@/components/ui/AppText';

type Props = {
  disponibles:number;
  total:number;
  faltantes:string[];
};


export function PantryProgressCard({
  disponibles,
  total,
  faltantes,
}:Props){

const porcentaje =
 Math.round((disponibles / total) * 100);


return(
<View style={styles.card}>

<AppText style={styles.title}>
🧺 Estado de tu despensa
</AppText>


<View style={styles.bar}>
<View
style={[
styles.fill,
{
width:`${porcentaje}%`
}
]}
/>
</View>


<AppText style={styles.text}>
{disponibles} de {total} ingredientes disponibles
</AppText>


{faltantes.length > 0 && (

<AppText style={styles.missing}>
🔥 Falta: {faltantes.join(', ')}
</AppText>

)}

</View>
)

}
const styles = StyleSheet.create({

card:{
backgroundColor:'#3A2418',
borderWidth:1,
borderColor:'#A66A3C',
borderRadius:22,
padding:20,
marginBottom:20,
},

title:{
color:'#E89A2E',
fontSize:18,
fontWeight:'900',
},

bar:{
height:10,
backgroundColor:'#24160F',
borderRadius:20,
marginTop:16,
overflow:'hidden',
},

fill:{
height:'100%',
backgroundColor:'#7A9B76',
borderRadius:20,
},

text:{
color:'#FFF3DD',
fontSize:16,
fontWeight:'800',
marginTop:14,
},

missing:{
color:'#E8A23A',
fontSize:15,
fontWeight:'900',
marginTop:8,
},

});