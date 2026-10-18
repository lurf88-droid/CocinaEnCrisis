import { ScrollView, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppText } from '@/components/ui/AppText';
import type { ResultadoBusqueda } from '@/types/receta';
import { KitchenColors, Radius, Spacing } from '@/constants/theme';
import { obtenerEstadoCompatibilidad } from '@/utils/compatibilidad';
type Props = {
  recetasListas: ResultadoBusqueda[];
  recetasParciales: ResultadoBusqueda[];
};

export function RecipeResultsSection({
  recetasListas,
  recetasParciales,
}: Props) {
  const recetas = recetasListas.length > 0
    ? recetasListas
    : recetasParciales.slice(0, 8);

  if (recetas.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
 <View style={styles.titleRow}>

  <MaterialCommunityIcons
    name={
      recetasListas.length > 0
        ? 'basket-outline'
        : 'fire'
    }
    size={30}
    color="#F2B35B"
    style={styles.titleIcon}
  />

  <AppText style={styles.title}>
    {recetasListas.length > 0
      ? 'Recetas que puedes cocinar'
      : 'Casi puedes cocinar'}
  </AppText>

</View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >

       {recetas.map((receta) => {

const estado = obtenerEstadoCompatibilidad(
  receta.compatibilidad
);

return (
          <TouchableOpacity
            key={receta.id}
            activeOpacity={0.88}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/receta/[id]',
                params: { id: receta.id },
              })
            }
          >
     

           <View style={styles.imageWrap}>
  <Image
    source={receta.imagen}
    style={styles.image}
  />

<View
 style={[
  styles.compatBadge,
  {
    backgroundColor: estado.fondo,
    borderColor: estado.color,
  }
 ]}
>
  <AppText
    style={[
      styles.compatText,
      {
        color: estado.color,
      }
    ]}
  >
    {receta.compatibilidad}%
  </AppText>

 <AppText
  style={[
    styles.compatLabel,
    {
      color: estado.color,
    }
  ]}
>
  {estado.icono} {estado.texto}
</AppText>

</View>
</View>
            <View style={styles.content}>
              <AppText style={styles.recipeTitle}>
                {receta.titulo}
              </AppText>
            {receta.puedeCocinar ? (

<View style={styles.badgeReady}>
  <AppText style={styles.badgeReadyText}>
    ✓ Lista para cocinar
  </AppText>
</View>

) : (

<View style={styles.badgeMissing}>
  <AppText style={styles.badgeMissingText}>
    🧺 Falta: {receta.faltantes.slice(0,2).join(', ')}
  </AppText>
</View>

)}


{!receta.puedeCocinar && receta.faltantes.length === 1 && (

<View style={styles.badgeUnlock}>
  <AppText style={styles.badgeUnlockText}>
    🔥 Compra 1 ingrediente y desbloquea
  </AppText>
</View>

)}

              <View style={styles.metaRow}>
                <AppText style={styles.meta}>
                  ⭐ {receta.dificultad === 'facil' ? 'Fácil' : 'Media'}
                </AppText>

                <AppText style={styles.price}>
                  ${Math.round(receta.costoTotal)}
                </AppText>
              </View>
            </View>
          </TouchableOpacity>
);
})}
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
    marginBottom: Spacing.xxl,
  },

title: {
    color: KitchenColors.text,
    fontSize: 24,
    fontWeight: '900',
    marginBottom: Spacing.md,
},
  carousel: {
    gap: Spacing.md,
    paddingRight: Spacing.xl,
  },

card: {
    width: 175,

    backgroundColor: '#241812',

    borderRadius: Radius.xl,

    overflow: 'hidden',

    borderWidth: 1,

    borderColor: '#8A5A35',

    shadowColor: '#000',

    shadowOpacity: 0.35,

    shadowRadius: 12,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 8,
},
imageWrap: {
  position: 'relative',
},
 image: {
    width: '100%',
    height: 155,
},
compatBadge: {
  position:'absolute',

  top:10,

  right:10,

  minWidth:58,

  alignItems:'center',

  backgroundColor:'#E89A2F',

  borderRadius:Radius.lg,

  paddingHorizontal:10,

  paddingVertical:8,

  borderWidth:1,

  shadowColor:'#000',

  shadowOpacity:0.35,

  shadowRadius:8,

  shadowOffset:{
    width:0,
    height:4,
  },

  elevation:5,
},
compatText:{
 fontSize:16,
 fontWeight:'900',
},

  content: {
    padding: Spacing.md,
  },
 compatLabel:{
 fontSize:9,
 fontWeight:'900',
 marginTop:2,
 textAlign:'center',
},

recipeTitle: {
    color: KitchenColors.text,

    fontSize: 16,

    fontWeight: '900',

    lineHeight: 21,

    minHeight: 44,
},

  metaRow: {
    marginTop: Spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  meta: {
    color: '#8FB276',
    fontSize: 12,
    fontWeight: '800',
  },

price: {
  color:'#F2B35B',
  fontSize:14,
  fontWeight:'900',
},



badgeReady:{
  marginTop:6,
  alignSelf:'flex-start',

  backgroundColor:'#2D3A25',

  borderWidth:1,
  borderColor:'#7A9B76',

  borderRadius:999,

  paddingHorizontal:10,
  paddingVertical:5,
},

badgeReadyText:{
  color:'#B9E59B',
  fontSize:11,
  fontWeight:'900',
},


badgeMissing:{
  marginTop:6,
  alignSelf:'flex-start',

  backgroundColor:'#3A2418',

  borderWidth:1,
  borderColor:'#E89A2E',

  borderRadius:999,

  paddingHorizontal:10,
  paddingVertical:5,
},

badgeMissingText:{
  color:'#F2B35B',
  fontSize:11,
  fontWeight:'900',
},


badgeUnlock:{
  marginTop:5,
  alignSelf:'flex-start',

  backgroundColor:'#22301E',

  borderWidth:1,
  borderColor:'#8FB276',

  borderRadius:999,

  paddingHorizontal:10,
  paddingVertical:5,
},

badgeUnlockText:{
  color:'#B7D99B',
  fontSize:11,
  fontWeight:'900',
},
titleRow:{
  flexDirection:'row',
  alignItems:'center',
  marginBottom:Spacing.md,
},

titleIcon:{
  width:34,
  height:34,
  marginRight:10,
  borderRadius:17,
},

});