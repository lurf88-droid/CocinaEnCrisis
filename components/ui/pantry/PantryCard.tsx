import { Pressable, StyleSheet, View, Image } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Rustic } from '@/constants/design-system';
import { INGREDIENT_IMAGES } from '@/constants/ingredientImages';


type Props = {
  id:string;
  emoji:string;
  nombre:string;
  onPress?:()=>void;
};


export function PantryCard({
  id,
  emoji,
  nombre,
  onPress,
}:Props){

return (

<Pressable
style={({pressed})=>[
 styles.card,
 pressed && styles.pressed
]}
onPress={onPress}
>

<View style={styles.jarLid} />

<View style={styles.jarBody}>

<View style={styles.glassShine} />

{
INGREDIENT_IMAGES[id]
?
<Image
 source={INGREDIENT_IMAGES[id]}
 style={styles.image}
 resizeMode="contain"
/>
:
<AppText style={styles.emoji}>
{emoji}
</AppText>
}

</View>

<View style={styles.label}>

<AppText style={styles.labelText}>
{nombre.toUpperCase()}
</AppText>

</View>

<View style={styles.statusBox}>
<AppText style={styles.status}>
🟢 En casa
</AppText>
</View>


</Pressable>

);

}



const styles = StyleSheet.create({

card:{
width:120,
height:205,
backgroundColor:'rgba(36,22,15,0.92)',
borderRadius:34,
borderWidth:1,
borderColor:'#A66A3C',
alignItems:'center',
justifyContent:'flex-start',
paddingTop:14,
marginRight:14,
overflow:'hidden',
},


pressed:{
transform:[
 {
  scale:0.96
 }
],
},

jarBody:{
width:78,
height:78,
borderRadius:39,
backgroundColor:'rgba(255,243,221,0.05)',
alignItems:'center',
justifyContent:'center',
borderWidth:1,
borderColor:'rgba(192,122,53,0.7)',
marginBottom:12,
overflow:'hidden',
},


image:{
width:56,
height:56,
borderRadius:28,
},

emoji:{
fontSize:34,
},


labelText:{
color:'#4A2B18',
fontSize:12,
fontWeight:'900',
textAlign:'center',
letterSpacing:0.5,
},

statusBox:{
marginTop:8,
backgroundColor:'rgba(122,155,118,0.18)',
paddingHorizontal:10,
paddingVertical:5,
borderRadius:20,
borderWidth:1,
borderColor:'rgba(143,178,118,0.3)',
},

status:{
color:'#8FB276',
fontSize:11,
fontWeight:'900',
},

jarLid:{
width:52,
height:12,
backgroundColor:'#C07A35',
borderRadius:8,
marginBottom:4,
borderWidth:1,
borderColor:'#E0A15A',
},
label:{
marginTop:4,
backgroundColor:'#F3DFC1',
borderWidth:1,
borderColor:'#C08A52',
borderRadius:10,
paddingHorizontal:10,
paddingVertical:6,
minWidth:82,
alignItems:'center',
},
glassShine:{
position:'absolute',
top:8,
left:12,
width:12,
height:35,
borderRadius:10,
backgroundColor:'rgba(255,255,255,0.12)',
},
});