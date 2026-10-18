import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { AppCard } from '@/components/ui/AppCard';

import {
  Radius,
  Spacing,
} from '@/constants/theme';

type CompraClave = {
  ingrediente: string;
  recetas: number;
};

type Props = {
  porcentaje: number;
  recetasDisponibles: number;
  ingredientesDisponibles: number;
  ahorroEstimado: number;
 
};

function obtenerEstadoDespensa(porcentaje: number) {
  if (porcentaje >= 85) {
    return {
      etiqueta: 'Excelente',
      icono: '⭐',
      color: '#B9E59B',
    };
  }

  if (porcentaje >= 65) {
    return {
      etiqueta: 'Muy completa',
      icono: '🟢',
      color: '#8FB276',
    };
  }

  if (porcentaje >= 40) {
    return {
      etiqueta: 'Funcional',
      icono: '🟡',
      color: '#F2B35B',
    };
  }

  if (porcentaje >= 20) {
    return {
      etiqueta: 'Básica',
      icono: '🟠',
      color: '#E89A2F',
    };
  }

  return {
    etiqueta: 'Necesita apoyo',
    icono: '🔴',
    color: '#D96C5F',
  };
}

export function PantryStatusCard({
  porcentaje,
  recetasDisponibles,
  ingredientesDisponibles,
  ahorroEstimado,
}: Props) {
  const porcentajeSeguro = Math.max(
    0,
    Math.min(porcentaje, 100)
  );

  const estado = obtenerEstadoDespensa(
    porcentajeSeguro
  );

  return (
    <AppCard style={styles.card}>
      <View style={styles.header}>
        <View>
          <AppText style={styles.kicker}>
            🥫 INTELIGENCIA DE DESPENSA
          </AppText>

          <AppText style={styles.title}>
            Estado de tu cocina
          </AppText>
        </View>

        <View
          style={[
            styles.statusBadge,
            {
              borderColor: estado.color,
            },
          ]}
        >
          <AppText
            style={[
              styles.statusText,
              {
                color: estado.color,
              },
            ]}
          >
            {estado.icono} {estado.etiqueta}
          </AppText>
        </View>
      </View>

      <View style={styles.scoreRow}>
        <AppText style={styles.score}>
          {porcentajeSeguro}%
        </AppText>

      <AppText style={styles.scoreDescription}>
  Cocina preparada
</AppText>
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${porcentajeSeguro}%`,
              backgroundColor: estado.color,
            },
          ]}
        />
      </View>
<AppText style={styles.levelText}>
  {estado.etiqueta} para cocinar hoy 🔥
</AppText>
      <AppText style={styles.explanation}>
  Chef Luna analizó tu despensa y encontró tus mejores oportunidades de cocina.
</AppText>

      <View style={styles.metricsGrid}>
        <View style={styles.metricCard}>
          <AppText style={styles.metricIcon}>
            🍳
          </AppText>

          <AppText style={styles.metricValue}>
            {recetasDisponibles}
          </AppText>

          <AppText style={styles.metricLabel}>
            recetas listas
          </AppText>
        </View>

        <View style={styles.metricCard}>
          <AppText style={styles.metricIcon}>
            🥕
          </AppText>

          <AppText style={styles.metricValue}>
            {ingredientesDisponibles}
          </AppText>

          <AppText style={styles.metricLabel}>
            ingredientes
          </AppText>
        </View>

        <View style={styles.metricCard}>
          <AppText style={styles.metricIcon}>
            💰
          </AppText>

          <AppText style={styles.metricValue}>
            ${Math.round(ahorroEstimado)}
          </AppText>

          <AppText style={styles.metricLabel}>
            ahorro potencial
          </AppText>
        </View>

        <View style={styles.metricCard}>
          <AppText style={styles.metricIcon}>
            🔥
          </AppText>

          <AppText style={styles.metricValue}>
            {porcentajeSeguro >= 65
              ? 'Alta'
              : porcentajeSeguro >= 40
                ? 'Media'
                : 'Baja'}
          </AppText>

          <AppText style={styles.metricLabel}>
            capacidad
          </AppText>
        </View>
      </View>

      

      <View style={styles.chefMessage}>
        <AppText style={styles.chefMessageTitle}>
          👨‍🍳 Consejo del Chef
        </AppText>

        <AppText style={styles.chefMessageText}>
          {porcentajeSeguro >= 80
            ? 'Tu despensa está en muy buen nivel. Aprovecha lo que ya tienes antes de comprar más.'
            : porcentajeSeguro >= 50
              ? 'Vas bien. Una compra estratégica puede darte muchas más opciones.'
              : 'No necesitas llenar toda la despensa. Empecemos con uno o dos ingredientes clave.'}
        </AppText>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: Spacing.xl,
    padding: Spacing.xl,
    backgroundColor: '#21150F',
    borderColor: '#8A5A35',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.md,
  },

  kicker: {
    color: '#F2B35B',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },

  title: {
    marginTop: Spacing.xs,
    color: '#FFF3DD',
    fontSize: 24,
    fontWeight: '900',
  },

  statusBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
    borderWidth: 1,
    backgroundColor: '#2B1E18',
  },

  statusText: {
    fontSize: 11,
    fontWeight: '900',
  },

  scoreRow: {
    marginTop: Spacing.xl,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.sm,
  },

  score: {
    color: '#FFF3DD',
    fontSize: 42,
    fontWeight: '900',
    lineHeight: 46,
  },

  scoreDescription: {
    marginBottom: 5,
    color: '#D7A86E',
    fontSize: 13,
    fontWeight: '800',
  },

  progressTrack: {
    height: 14,
    marginTop: Spacing.md,
    borderRadius: Radius.pill,
    backgroundColor: '#3A2418',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#6D472D',
  },

  progressFill: {
    height: '100%',
    borderRadius: Radius.pill,
  },

  explanation: {
    marginTop: Spacing.md,
    color: '#C9A982',
    fontSize: 13,
    lineHeight: 20,
  },

  metricsGrid: {
   marginTop: Spacing.lg,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },

  metricCard: {
    width: '48%',
   padding: Spacing.sm,
    borderRadius: Radius.lg,
    backgroundColor: '#2B1E18',
    borderWidth: 1,
    borderColor: '#6D472D',
  },

  metricIcon: {
    fontSize: 21,
  },

  metricValue: {
    marginTop: Spacing.xs,
    color: '#FFF3DD',
    fontSize: 18,
    fontWeight: '900',
  },

  metricLabel: {
    marginTop: 2,
    color: '#D7A86E',
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },

 

  chefMessage: {
    marginTop: Spacing.xl,
    padding: Spacing.lg,
    borderRadius: Radius.xl,
    backgroundColor: '#2D2119',
    borderLeftWidth: 4,
    borderLeftColor: '#E89A2F',
  },

  chefMessageTitle: {
    color: '#F2B35B',
    fontSize: 14,
    fontWeight: '900',
  },

  chefMessageText: {
    marginTop: Spacing.sm,
    color: '#F8E4C8',
    fontSize: 14,
    lineHeight: 22,
  },
  levelText:{
  marginTop: Spacing.sm,
  color:'#F2B35B',
  fontSize:14,
  fontWeight:'900',
},
});