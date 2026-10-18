import { StyleSheet } from 'react-native';

import { AppCard } from '@/components/ui/AppCard';
import { AppText } from '@/components/ui/AppText';

import {
 KitchenColors,
 Spacing,
} from '@/constants/theme';


type Props={
 nombre?:string;
   mensaje?: string;
};


export function ChefWelcomeCard({
  mensaje,
  nombre='Fernando'
}:Props){

return(

<AppCard style={styles.card}>


<AppText style={styles.title}>
👨‍🍳 Chef Luna
</AppText>


<AppText style={styles.message}>
Hola {nombre} 👋
</AppText>


<AppText style={styles.text}>
{mensaje ??
'Ya revisé tu cocina. Vamos a encontrar algo delicioso con lo que tienes.'}
</AppText>


</AppCard>

);

}



const styles=StyleSheet.create({

card:{
backgroundColor:'#3A2418',
borderColor:'#E89A2F',
marginBottom:Spacing.lg,
},


title:{
fontSize:24,
fontWeight:'900',
color:'#F2B35B',
},


message:{
marginTop:Spacing.md,
fontSize:20,
fontWeight:'900',
color:'#FFF3DD',
},


text:{
marginTop:Spacing.sm,
color:'#F8E7C8',
lineHeight:24,
},

});