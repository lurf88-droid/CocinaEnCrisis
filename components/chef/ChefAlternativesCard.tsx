import { StyleSheet, View, ScrollView,Image } from 'react-native';

import { AppText } from '@/components/ui/AppText';

import type { ResultadoBusqueda } from '@/types/receta';


type Props = {
  recetas: ResultadoBusqueda[];
};


export function ChefAlternativesCard({
  recetas,
}: Props) {


  if (recetas.length === 0) {
    return null;
  }


  return (

    <View style={styles.card}>


      <AppText style={styles.title}>
        ✨ Otras ideas de Chef Luna
      </AppText>


      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >


        {recetas.map((receta,index)=>(


          <View
  key={receta.id}
  style={styles.item}
>


<Image
  source={receta.imagen}
  style={styles.image}
/>


<AppText style={styles.rank}>
  {index === 0
    ? '🥈'
    : index === 1
      ? '🥉'
      : '🍽️'
  }
</AppText>


<View style={styles.info}>

              <AppText style={styles.recipe}>
                {receta.titulo}
              </AppText>


              <AppText style={styles.detail}>
                💰 ${Math.round(receta.costoTotal)}
                {' · '}
                ⏱ {receta.tiempoMinutos} min
              </AppText>


            </View>


          </View>


        ))}


      </ScrollView>


    </View>

  );

}



const styles = StyleSheet.create({


  card:{
    marginTop:20,
    padding:20,
    borderRadius:28,
    backgroundColor:'#2B1E18',
    borderWidth:1,
    borderColor:'#6D472D',
  },


  title:{
    color:'#F2B35B',
    fontSize:18,
    fontWeight:'900',
    marginBottom:16,
  },


  scroll:{
    paddingRight:20,
  },





  rank:{
    fontSize:26,
    marginBottom:10,
  },


  info:{
    flex:1,
  },


  recipe:{
    color:'#FFF3DD',
    fontSize:16,
    fontWeight:'900',
  },


  detail:{
    marginTop:8,
    color:'#D7A86E',
    fontSize:13,
    fontWeight:'800',
  },
image:{
  width:'100%',
  height:90,
  borderRadius:16,
  marginBottom:12,
},
item:{
  width:180,
  padding:14,
  marginRight:12,
  borderRadius:20,
  backgroundColor:'#24160F',
  borderWidth:1,
  borderColor:'#6D472D',
},
});