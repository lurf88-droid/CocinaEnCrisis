import {
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from 'react-native';

import { AppText } from '../AppText';
import { Rustic } from '../../../constants/design-system';
import { BudgetDisplay } from '@/components/ui/BudgetDisplay';

type Props = {
  presupuesto: number;
  ingredientes: number;
  recetas: number;
  limite?: number;
  cambiarPresupuesto: (cantidad:number) => void;
};

export function RusticDashboardCard({
  presupuesto,
  ingredientes,
  recetas,
  limite = 300,
  cambiarPresupuesto,
}: Props) {
  const porcentaje = Math.min(presupuesto / limite, 1);
  const gastado = Math.max(0, limite - presupuesto);

  return (
<Pressable
 style={styles.card}
>
      <View style={styles.mainRow}>
        

        <View style={styles.budgetBlock}>
          <AppText style={styles.label}>
         💰 Presupuesto semanal
          </AppText>

          <BudgetDisplay
            value={presupuesto}
            style={styles.amount}
          />
          <View style={styles.controls}>

<Pressable
  style={styles.controlButton}
  onPress={() => cambiarPresupuesto(-20)}
>
<AppText style={styles.controlText}>
−
</AppText>
</Pressable>


<Pressable
  style={styles.controlButton}
  onPress={() => cambiarPresupuesto(20)}
>
<AppText style={styles.controlText}>
+
</AppText>
</Pressable>

</View>

       <AppText style={styles.limit}>
  Has gastado ${gastado} de ${limite}
</AppText>
        </View>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${porcentaje * 100}%` },
          ]}
        />
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <AppText style={styles.statNumber}>
            {ingredientes}
          </AppText>
          <AppText style={styles.statLabel}>
            ingredientes
          </AppText>
        </View>

        <View style={styles.divider} />

        <View style={styles.statBox}>
          <AppText style={styles.statNumber}>
            {recetas}
          </AppText>
          <AppText style={styles.statLabel}>
            recetas listas
          </AppText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
card: {
  marginTop: -34,
  marginBottom: Rustic.spacing.xl,
  marginHorizontal: Rustic.spacing.sm,
  padding: Rustic.spacing.lg,
  borderRadius: Rustic.radius.card,
  backgroundColor: '#24160F',
  overflow: 'hidden',

  borderWidth: 1,
 borderColor: '#C07A35',

  shadowColor: Rustic.colors.shadow,
  shadowOpacity: 0.65,
  shadowRadius: 22,
  shadowOffset: {
    width: 0,
    height: 8,
  },

  elevation: 10,
},

  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  coin: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Rustic.colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Rustic.spacing.md,
    borderWidth: 2,
    borderColor: Rustic.colors.cream,
  },

  coinText: {
    color: '#3A2418',
    fontSize: 32,
    fontWeight: '900',
  },

budgetBlock: {
  width: '100%',
},

  label: {
    color: Rustic.colors.gold,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

amount: {
  color: Rustic.colors.cream,
  fontSize: 42,
  fontWeight: '900',
  lineHeight: 48,
},

  limit: {
    color: Rustic.colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },

  progressTrack: {
    height: 9,
    borderRadius: 99,
    backgroundColor: 'rgba(255, 243, 221, 0.18)',
    marginTop: Rustic.spacing.lg,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 99,
    backgroundColor: Rustic.colors.gold,
  },

  statsRow: {
    marginTop: Rustic.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(166, 106, 60, 0.35)',
    paddingTop: Rustic.spacing.lg,
  },

  statBox: {
    flex: 1,
    alignItems: 'center',
  },

statNumber: {
  color: Rustic.colors.cream,
  fontSize: 34,
  fontWeight: '900',
},

  statLabel: {
   color: Rustic.colors.textMuted,
    fontSize: 13,
    fontWeight: '800',
    marginTop: 2,
  },

  divider: {
    width: 1,
    height: 44,
    backgroundColor: 'rgba(166, 106, 60, 0.45)',
  },
  controls:{
  flexDirection:'row',
  gap:12,
  marginTop:12,
},

controlButton:{
  width:64,
  height:48,
  borderRadius:24,
 backgroundColor: '#8B572F',
  borderWidth:1,
  borderColor: '#C07A35',

  alignItems:'center',
  justifyContent:'center',

  shadowColor:'#000',
  shadowOpacity:0.35,
  shadowRadius:8,
  shadowOffset:{
    width:0,
    height:4,
  },

  elevation:6,
},

controlText:{
  color:'#FFF3DD',
  fontSize:30,
  fontWeight:'900',
},
});