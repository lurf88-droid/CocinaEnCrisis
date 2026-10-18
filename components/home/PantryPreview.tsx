import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
} from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { PantryChip } from '@/components/ui/pantry/PantryChip';
import { obtenerIngrediente } from '@/data/catalogo-ingredientes';
import { Rustic } from '@/constants/design-system';


type Props = {
  ingredientes: string[];
  onAgregar: () => void;
};


export function PantryPreview({
  ingredientes,
  onAgregar,
}: Props) {


return (

<View style={styles.card}>


  <View style={styles.header}>


    <View>

      <AppText style={styles.kicker}>
        🧺 TU DESPENSA
      </AppText>


      <AppText style={styles.title}>
        Lo que tienes
      </AppText>

    </View>


    <AppText style={styles.count}>
      {ingredientes.length}
    </AppText>


  </View>



  {
    ingredientes.length === 0 ? (

      <View style={styles.empty}>

        <AppText style={styles.emptyEmoji}>
          🧺
        </AppText>


        <AppText style={styles.emptyTitle}>
          Tu despensa está vacía
        </AppText>


        <AppText style={styles.emptyText}>
          Agrega ingredientes para que Chef Luna pueda ayudarte.
        </AppText>


      </View>


    ) : (


      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ingredientsScroll}
      >


      {
  ingredientes
    .slice(0, 10)
    .map((item) => {

      const info = obtenerIngrediente(item);

      // ✅ id canónico (ej: "tortilla_maiz")
      const idCanonico = info?.id ?? item;

      return (
        <PantryChip
          key={item}
          id={idCanonico}
          nombre={info?.nombre ?? item}
          cantidad="🟢 En casa"
        />
      );
    })
}
      </ScrollView>


    )
  }




  <Pressable

    onPress={onAgregar}

    style={styles.button}

  >

    <AppText style={styles.buttonText}>
      🧺 Abrir mi despensa
    </AppText>


  </Pressable>


</View>


);

}



const styles = StyleSheet.create({


card:{

backgroundColor:'#24160F',

borderRadius:28,

padding:20,

borderWidth:1,

borderColor:Rustic.colors.border,

marginBottom:20,

},



header:{

flexDirection:'row',

justifyContent:'space-between',

alignItems:'flex-start',

},



kicker:{

color:Rustic.colors.gold,

fontSize:12,

fontWeight:'900',

letterSpacing:1,

},



title:{

color:Rustic.colors.cream,

fontSize:26,

fontWeight:'900',

marginTop:8,

},



count:{

color:Rustic.colors.gold,

fontSize:32,

fontWeight:'900',

lineHeight:38,

marginTop:10,

marginRight:8,

},



ingredientsScroll:{

marginTop:20,

paddingRight:10,

gap:12,

},



button:{

marginTop:20,

backgroundColor:'#3A2418',

borderRadius:18,

paddingVertical:12,

alignItems:'center',

borderWidth:1,

borderColor:Rustic.colors.border,

},



buttonText:{

color:Rustic.colors.gold,

fontSize:16,

fontWeight:'900',

},



empty:{

marginTop:25,

alignItems:'center',

paddingVertical:20,

},



emptyEmoji:{

fontSize:40,

},



emptyTitle:{

marginTop:10,

color:'#FFF3DD',

fontSize:20,

fontWeight:'900',

},



emptyText:{

marginTop:8,

color:'#D7A86E',

fontSize:14,

textAlign:'center',

lineHeight:20,

},


});