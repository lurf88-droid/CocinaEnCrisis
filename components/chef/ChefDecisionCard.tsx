import { View, StyleSheet } from 'react-native';

import { AppText } from '@/components/ui/AppText';

type Props = {
  razones: string[];
  resumen: string[];
};


export function ChefDecisionCard({
  razones,
  resumen,
}: Props) {

  return (

    <View style={styles.card}>

      <AppText style={styles.title}>
        👨‍🍳 Decisión del Chef
      </AppText>


      <AppText style={styles.subtitle}>
        Analicé tus ingredientes, presupuesto y tiempo
      </AppText>


      <View style={styles.section}>

        {razones.map((item,index)=>(
          <AppText
            key={index}
            style={styles.text}
          >
            {item}
          </AppText>
        ))}

      </View>



      <View style={styles.divider}/>



      <View>

        {resumen.map((item,index)=>(
          <AppText
            key={index}
            style={styles.text}
          >
            {item}
          </AppText>
        ))}

      </View>


    </View>

  );
}



const styles = StyleSheet.create({

card:{
  backgroundColor:'#241812',
  borderRadius:20,
  borderWidth:1,
  borderColor:'#8A5A35',
  padding:18,
  marginTop:16,
},


title:{
  color:'#E89A2E',
  fontSize:20,
  fontWeight:'900',
},


subtitle:{
  color:'#D7A86E',
  marginTop:6,
  fontSize:14,
},


section:{
  marginTop:14,
  gap:6,
},


text:{
  color:'#FFF3DD',
  fontSize:14,
  fontWeight:'700',
},


divider:{
  height:1,
  backgroundColor:'#8A5A35',
  marginVertical:14,
},

});