import { StyleSheet, View } from 'react-native';

import { AppCard } from '@/components/ui/AppCard';
import { AppText } from '@/components/ui/AppText';

import { RECETAS } from '@/data/recetas';

import {
  KitchenColors,
  Spacing,
} from '@/constants/theme';


type Props = {
  historial:string[];
};


export function ChefAchievementsCard({
  historial,
}:Props){


const recetas = historial
.map(id =>
  RECETAS.find(
    receta => receta.id === id
  )
)
.filter(Boolean);



const logros:string[] = [];


// Primer receta

if(recetas.length >= 1){

logros.push(
'🥚 Primera receta preparada'
);

}


// Constancia

if(recetas.length >= 5){

logros.push(
'🔥 Cocinero constante'
);

}


// Ahorro

const economicas =
recetas.filter(
receta =>
receta?.tipoComida === 'barata'
).length;


if(economicas >= 3){

logros.push(
'💰 Maestro del ahorro'
);

}


// Crisis

const crisis = 0;


if(crisis >= 3){

  logros.push(
    '🚨 Sobreviviente de cocina'
  );

}


// Familia

const familia =
recetas.filter(
receta =>
receta?.tipoComida === 'familia'
).length;


if(familia >= 3){

logros.push(
'❤️ Cocina para compartir'
);

}



return (

<AppCard style={styles.card}>


<AppText style={styles.title}>
🏆 Logros Chef Luna
</AppText>



{
logros.length === 0 ? (

<AppText style={styles.empty}>
Empieza cocinando tu primera receta.
Chef Luna estará contigo.
</AppText>

)

:

<View style={styles.list}>

{
logros.map((logro,index)=>(

<AppText
key={index}
style={styles.item}
>
{logro}
</AppText>

))
}

</View>

}



</AppCard>

);

}



const styles = StyleSheet.create({

card:{
marginTop:Spacing.lg,
backgroundColor:KitchenColors.card,
borderColor:KitchenColors.border,
},


title:{
fontSize:22,
fontWeight:'900',
color:KitchenColors.text,
},


list:{
marginTop:Spacing.md,
gap:10,
},


item:{
color:'#F8E7C8',
fontSize:16,
fontWeight:'800',
},


empty:{
marginTop:Spacing.md,
color:KitchenColors.textMuted,
lineHeight:24,
},

});