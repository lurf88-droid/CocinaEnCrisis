import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { RusticSubtitle } from '@/components/ui/rustic/RusticTypography';
import { Rustic } from '../../constants/design-system';
import { AppText } from '@/components/ui/AppText';


type Props = {
  nombre?: string;
};


export function HomeHero({
  nombre = 'Fernando'
}: Props) {

  const hora = new Date().getHours();

  let saludo = 'Buenas noches';


  if (hora >= 6 && hora < 12) {
    saludo = 'Buenos días';
  } 
  else if (hora >= 12 && hora < 19) {
    saludo = 'Buenas tardes';
  }



  return (

<View style={styles.hero}>


<ImageBackground

source={require('@/assets/home/hero.webp')}

style={styles.image}

resizeMode="cover"

>


<LinearGradient

colors={[
'rgba(27, 19, 15, 0.20)',
'rgba(27, 19, 15, 0.55)',
'rgba(27, 19, 15, 0.92)',
]}

locations={[0,0.5,1]}

style={styles.gradient}

/>



<View style={styles.bell}>

<Image

source={require('@/assets/images/chef-avatar.webp')}

style={styles.chef}

resizeMode="contain"

/>

</View>




<View style={styles.content}>


<RusticSubtitle>

TU COCINA HOY

</RusticSubtitle>


<Text
  style={styles.name}
  numberOfLines={1}
  adjustsFontSizeToFit
  minimumFontScale={0.75}
  allowFontScaling={false}
>
  {nombre}
</Text>




<Text
  style={styles.question}
  numberOfLines={1}
  adjustsFontSizeToFit
  minimumFontScale={0.65}
  allowFontScaling={false}
>
 Convierte lo que tienes
en algo increíble 🔥
</Text>



</View>


</ImageBackground>


</View>

  );

}



const styles = StyleSheet.create({


hero: {

height:420,

borderRadius: Rustic.radius.card,

overflow:'hidden',

marginBottom: Rustic.spacing.xl,

backgroundColor: Rustic.colors.card,

borderWidth:1,

borderColor: Rustic.colors.border,

},



image:{

flex:1,

},



gradient:{

...StyleSheet.absoluteFill,

},




content:{
  flex:1,
  justifyContent:'flex-end',
  paddingHorizontal: Rustic.spacing.xl,
  paddingBottom: 80,
},



name:{


color:'#E8A94A',

fontSize:40,

fontWeight:'900',

letterSpacing:1,


textShadowColor:'rgba(0,0,0,0.45)',

textShadowOffset:{

width:0,

height:3,

},

textShadowRadius:5,

},



question:{
marginTop:18,
color:'#FFF3DD',
fontSize:32,
fontWeight:'900',
lineHeight:38,
},




chef:{

width:55,

height:55,

},



bell:{

position:'absolute',

top:35,

right:18,

width:65,

height:65,

borderRadius:32.5,

backgroundColor:'rgba(43,30,24,0.72)',

borderWidth:1,

borderColor:Rustic.colors.border,

alignItems:'center',

justifyContent:'center',

},



});