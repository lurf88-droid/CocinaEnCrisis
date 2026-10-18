import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

import { AppText } from '@/components/ui/AppText';
import { RusticButton } from '@/components/ui/rustic/RusticButton';
import { useIngredientes } from '@/context/IngredientesContext';

import { Rustic } from '../../constants/design-system';

import type { ResultadoBusqueda } from '@/types/receta';

import { obtenerEstadoCompatibilidad } from '@/utils/compatibilidad';
import { ChefEngine } from '@/services/chef-engine';
import { calcularChefScore } from '@/utils/chefScore';
import { AnimatedProgress } from '@/components/ui/AnimatedProgress';
import { InfoChip } from '@/components/ui/InfoChip';


type Props = {
  receta: ResultadoBusqueda;
};


export function RecomendacionCard({
  receta,
}: Props) {

const {
  favoritos,
  toggleFavorito,
} = useIngredientes();


const esFavorito =
favoritos.includes(receta.id);



const estado =
obtenerEstadoCompatibilidad(
  receta.compatibilidad
);



const razonesChef =
ChefEngine.razonamientoChef(
  receta,
  "ahorro"
);



const resumenChef =
ChefEngine.resumenChef(
  receta
);



const puntuacionChef =
calcularChefScore({

  compatibilidad:
    receta.compatibilidad,

  costo:
    receta.costoTotal,

  tiempo:
    receta.tiempoMinutos,

});



return (

<View style={styles.card}>


<ImageBackground

source={receta.imagen}

style={styles.image}

resizeMode="cover"

>


<View style={styles.imageOverlay}/>



<TouchableOpacity

onPress={() =>
 toggleFavorito(receta.id)
}

style={styles.favoriteButton}

>

<AppText style={styles.favoriteIcon}>

{esFavorito ? '♥' : '♡'}

</AppText>

</TouchableOpacity>



<View style={styles.chefBadge}>

<AppText style={styles.decisionTitle}>

👨‍🍳 EL CHEF DECIDIÓ

</AppText>

</View>



<View

style={[
styles.compatibilityBadge,
{
borderColor:estado.color,
backgroundColor:estado.fondo,
},
]}

>


<AppText

style={[
styles.compatibilityNumber,
{
color:estado.color,
},
]}

>

{receta.compatibilidad}%

</AppText>



<AppText

style={[
styles.compatibilityText,
{
color:estado.color,
},
]}

>

{estado.icono} {estado.texto}

</AppText>


</View>


</ImageBackground>



<View style={styles.content}>


<AppText style={styles.title}>

{receta.titulo}

</AppText>


<View style={styles.scoreBadge}>

<AppText style={styles.scoreText}>

🏆 Puntuación del Chef: {puntuacionChef}

</AppText>

</View>



<View style={styles.progressSection}>


<View style={styles.progressHeader}>


<AppText style={styles.progressTitle}>

Confianza del Chef

</AppText>


<AppText style={styles.progressValue}>

{puntuacionChef}%

</AppText>


</View>


<AnimatedProgress
progress={puntuacionChef}
/>


</View>

<AppText style={styles.subtitle}>
  Rápida, casera y económica
</AppText>

<InfoChip
  icon="⏱"
  value={`${receta.tiempoMinutos} min`}
/>

<InfoChip
  icon="👥"
  value={`${receta.porciones} porciones`}
/>

<InfoChip
  icon="💰"
  value={`$${Math.round(receta.costoTotal)}`}
/>
<View style={styles.chefDecision}>
  <AppText style={styles.decisionTitle}>
    👨‍🍳 Decisión del Chef
  </AppText>

  {razonesChef.map((razon, index) => (
    <AppText
      key={`razon-${index}`}
      style={styles.description}
    >
      {razon}
    </AppText>
  ))}
</View>

<View style={styles.summaryCard}>
  <AppText style={styles.summaryTitle}>
    📋 Resumen
  </AppText>

  {resumenChef.map((dato, index) => (
    <AppText
      key={`resumen-${index}`}
      style={styles.description}
    >
      {dato}
    </AppText>
  ))}
</View>
<RusticButton
  title="Preparar receta"
 onPress={() =>
  router.push({
    pathname: '/receta/[id]',
    params:{
      id: receta.id,
    },
  })
}
/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: Rustic.spacing.lg,
    borderRadius: Rustic.radius.card,
    overflow: 'hidden',
    backgroundColor: 'rgba(43, 30, 24, 0.96)',
    borderWidth: 1,
    borderColor: Rustic.colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.38,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },

image: {
  height: 340,
  justifyContent: 'space-between',
},
  imageOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.22)',
  },

  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(43, 30, 24, 0.82)',
    borderWidth: 1,
    borderColor: Rustic.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  favoriteIcon: {
    color: Rustic.colors.cream,
    fontSize: 28,
    fontWeight: '900',
  },

  compatibilityBadge: {
   position:'absolute',
left:16,
top:12,
  zIndex:10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    backgroundColor: 'rgba(27, 19, 15, 0.86)',
    borderWidth: 1,
    borderColor: '#3DB46D',
    alignItems: 'center',
  },

  compatibilityNumber: {
    color: '#6EE79A',
    fontSize: 24,
    fontWeight: '900',
  },

compatibilityText: {
  color:'#A8F0C0',
  fontSize:11,
  fontWeight:'900',
  textTransform:'uppercase',
},
 content: {
  paddingHorizontal: Rustic.spacing.lg,
  paddingTop: 8,
  paddingBottom: Rustic.spacing.lg,
  gap: Rustic.spacing.md,
},
  kicker: {
    color: Rustic.colors.gold,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.1,
  },

  title: {
    color: Rustic.colors.cream,
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 34,
    marginTop:10,
  },

  subtitle: {
    color: Rustic.colors.textMuted,
    fontSize: 15,
    fontWeight: '700',
  },

  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },



  description: {
    color: Rustic.colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },

chefDecision:{
  backgroundColor:'rgba(122,75,42,0.25)',
  borderWidth:1,
  borderColor:Rustic.colors.border,
  borderRadius:16,
  padding:14,
  gap:6,
},

decisionTitle:{
  color:Rustic.colors.gold,
  fontSize:16,
  fontWeight:'900',
},
scoreBadge:{
  alignSelf:'flex-start',
  backgroundColor:'rgba(232,154,46,0.18)',
  borderWidth:1,
  borderColor:Rustic.colors.gold,
  borderRadius:999,
  paddingHorizontal:12,
  paddingVertical:6,
},

scoreText:{
  color:Rustic.colors.gold,
  fontSize:12,
  fontWeight:'900',
},
progressSection: {
  gap: Rustic.spacing.sm,
  paddingTop:8,
},

progressHeader:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  paddingTop:8,

},

progressTitle: {
  color: Rustic.colors.cream,
  fontSize: 14,
  fontWeight: '800',
},

progressValue:{
  color: Rustic.colors.gold,
  fontSize:42,
  fontWeight:'900',
  lineHeight:58,
  marginTop:10,
},
summaryCard: {
  backgroundColor: 'rgba(43,30,24,0.72)',
  borderWidth: 1,
  borderColor: Rustic.colors.border,
  borderRadius: 16,
  padding: 14,
  gap: 6,
},

summaryTitle: {
  color: Rustic.colors.gold,
  fontSize: 16,
  fontWeight: '900',
},
chefBadge:{
  position:'absolute',
  top:12,
  left:16,
  zIndex:10,

  backgroundColor:'rgba(27,19,15,0.86)',
  borderWidth:1,
  borderColor:Rustic.colors.gold,
  borderRadius:18,

  paddingHorizontal:16,
  paddingVertical:10,
},
});