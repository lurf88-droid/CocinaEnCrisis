import {
  ImageBackground,
  StyleSheet,
  View,
    Image,
} from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Rustic } from '@/constants/design-system';


type Props = {
  nombre:string;
};


export function KitchenWelcomeHero({
  nombre,
}:Props){


const hora = new Date().getHours();


const saludo =
hora < 12
? '☀️ Buenos días'
: hora < 19
? '🌤️ Buenas tardes'
: '🌙 Buenas noches';



return (

<ImageBackground

source={require('@/assets/home/hero.jpg')}

style={styles.card}

imageStyle={{
borderRadius:28,
}}

>


{/* capa oscura sobre imagen */}
<View style={styles.overlay}/>



<View style={styles.content}>


<View style={styles.top}>


<View>

<AppText style={styles.saludo}>
{saludo}
</AppText>


<AppText style={styles.nombre}>
{nombre}
</AppText>


</View>


<Image
  source={require('@/assets/images/chef-avatar.png')}
  style={styles.avatar}
/>

</View>



<AppText style={styles.question}>
¿Qué cocinaremos hoy?
</AppText>




<View style={styles.message}>


<AppText style={styles.messageTitle}>
Chef Luna está listo 🔥
</AppText>


<AppText style={styles.messageText}>
Analizaré tus ingredientes y crearé la mejor opción con lo que tienes.
</AppText>


</View>



</View>



</ImageBackground>

);

}



const styles = StyleSheet.create({


card:{


height:340,

borderRadius:28,

overflow:'hidden',

marginBottom:20,


},



overlay:{


position:'absolute',

top:0,

left:0,

right:0,

bottom:0,


backgroundColor:'rgba(25,15,10,0.55)',


},



content:{


flex:1,

padding:22,

justifyContent:'space-between',


},



top:{


flexDirection:'row',

justifyContent:'space-between',

alignItems:'flex-start',


},



saludo:{


color:Rustic.colors.gold,

fontSize:18,

fontWeight:'900',


},



nombre:{


color:Rustic.colors.cream,

fontSize:42,

fontWeight:'900',

marginTop:4,


},



avatar:{
 width:85,
 height:85,
 borderRadius:42,
},



question:{


color:Rustic.colors.cream,

fontSize:22,

fontWeight:'900',

marginTop:20,


},



message:{
 marginTop:18,
 backgroundColor:'#3A2418',
 padding:14,
 borderRadius:18,
},



messageTitle:{


color:Rustic.colors.gold,

fontSize:17,

fontWeight:'900',


},



messageText:{
  color:'#F8E7C8',
  marginTop:10,
  fontSize:16,
  lineHeight:24,
  fontWeight:'600',
},



});