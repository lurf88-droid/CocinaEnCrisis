import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Rustic } from '@/constants/design-system';


type Props = {
  ciudad:string;
  onPress:()=>void;
};


export function CiudadSelector({
  ciudad,
  onPress,
}:Props){

return (

<Pressable
onPress={onPress}
style={styles.card}
>


<View style={styles.row}>

<AppText style={styles.icon}>
📍
</AppText>


<AppText style={styles.text}>
{ciudad}
</AppText>


<AppText style={styles.arrow}>
›
</AppText>


</View>


</Pressable>

);

}



const styles = StyleSheet.create({

card:{

backgroundColor:'#2B1E18',

borderRadius:20,

padding:18,

borderWidth:1,

borderColor:Rustic.colors.border,

marginBottom:20,

},


row:{

flexDirection:'row',

alignItems:'center',

},


icon:{

fontSize:22,

marginRight:12,

},


text:{

flex:1,

color:Rustic.colors.cream,

fontSize:17,

fontWeight:'800',

},


arrow:{

color:Rustic.colors.gold,

fontSize:32,

fontWeight:'900',

},


});