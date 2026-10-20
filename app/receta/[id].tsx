import {
  router,
  useLocalSearchParams,
} from 'expo-router';

import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppCard } from '@/components/ui/AppCard';
import { AppButton } from '@/components/ui/AppButton';
import { evaluarReceta } from '@/services/recetas.service';
import { calcularCostoReceta } from '@/services/costos.service';
import { AppSectionHeader } from '@/components/ui/AppSectionHeader';
import { AppText } from '@/components/ui/AppText';
import { Screen } from '@/components/ui/Screen';

import { IngredientItem } from '@/components/recipe/IngredientItem';
import { PantryProgressCard } from '@/components/recipe/PantryProgressCard';
import { RecipeHero } from '@/components/recipe/RecipeHero';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';

import {
  RECETAS,
  formatearPrecio,
} from '@/data/recetas';

import {
  obtenerIngrediente,
} from '@/data/catalogo-ingredientes';

import {
  useIngredientes,
} from '@/context/IngredientesContext';

import {
  useCiudad,
} from '@/hooks/use-ciudad';

import {
  ChefEngine,
} from '@/services/chef-engine';


export default function RecetaDetalleScreen() {

  const {
    id,
    modo,
    ingrediente,
  } = useLocalSearchParams();


  // ====================================================
  // 🧺 INGREDIENTE DE OPORTUNIDAD
  // ====================================================

  const ingredienteFaltante =
    Array.isArray(ingrediente)
      ? ingrediente[0]
      : ingrediente;


  // ====================================================
  // 📦 CONTEXTOS
  // ====================================================

  const {
    ingredientes,
    favoritos,
    toggleFavorito,
    presupuesto,
    carrito,
    agregarAlCarrito,
    agregarCompra, // 👈 Agregamos esto para la lista de compras
  } = useIngredientes();

  const {
    recetasConCosto,
    regionId,
    region,
  } = useCiudad();


  // ====================================================
  // 🔎 RECETA
  // ====================================================

  const receta =
    RECETAS.find(
      item =>
        item.id === String(id)
    );


  // ====================================================
  // ❌ NO ENCONTRADA
  // ====================================================

  if (!receta) {
    return (
      <Screen style={styles.container}>
        <View style={styles.notFoundCard}>
          <View style={styles.notFoundIcon}>
            <MaterialCommunityIcons
              name="silverware-clean"
              size={38}
              color="#F2B35B"
            />
          </View>

          <AppText style={styles.notFoundEyebrow}>
            CHEF LUNA
          </AppText>

          <AppText style={styles.notFoundTitle}>
            Receta no encontrada
          </AppText>

          <AppText style={styles.notFoundText}>
            Esta receta ya no está disponible. Podemos buscar otra opción para tu cocina.
          </AppText>

          <TouchableOpacity
            activeOpacity={0.86}
            style={styles.notFoundButton}
            onPress={() => router.replace('/(tabs)/explore')}
          >
            <AppText style={styles.notFoundButtonText}>
              Explorar recetas
            </AppText>
            <MaterialCommunityIcons
              name="arrow-right"
              size={18}
              color="#24140A"
            />
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }


  // ====================================================
  // 💰 COSTO REGIONAL
  // ====================================================

  const recetaConCosto =
    recetasConCosto.find(
      item =>
        item.id === receta.id
    );


  const costoTotal =
    recetaConCosto?.costoTotal
    ?? 0;


  const costoPorPorcion =
    receta.porciones > 0
      ? costoTotal / receta.porciones
      : 0;


  // ====================================================
  // 🧠 RESULTADO DEL BUSCADOR
  // ====================================================

  const resultadoActual = evaluarReceta(
    recetaConCosto ?? calcularCostoReceta(receta, regionId),
    ingredientes,
    presupuesto,
    regionId
  );


  // ====================================================
  // ❌ FALTANTES
  // ====================================================

  const faltantes: string[] = resultadoActual?.faltantes ?? [];


  // ====================================================
  // 📊 ESTADO DE DESPENSA
  // ====================================================

  const totalIngredientesClave = resultadoActual?.totalIngredientes ?? 0;

  const ingredientesDisponibles =
    Math.max(0, totalIngredientesClave - faltantes.length);


  const porcentajeDisponible =
    totalIngredientesClave === 0
      ? 100
      : Math.round((ingredientesDisponibles / totalIngredientesClave) * 100);


  const listaParaCocinar = resultadoActual?.puedeCocinar ?? false;
  const recetaEnCarrito = carrito.includes(receta.id);


  const irACompras = () => {
    // Agregamos los ingredientes faltantes a la lista de compras
    faltantes.forEach(faltante => agregarCompra(faltante));

    if (!recetaEnCarrito) {
      agregarAlCarrito(receta.id);
    }

    router.push('/(tabs)/carrito');
  };


  // ====================================================
  // ❤️ FAVORITO
  // ====================================================

  const esFavorito = favoritos.includes(receta.id);


  // ====================================================
  // 👨‍🍳 CHEF LUNA
  // ====================================================

  const razonesChef = ChefEngine.explicarDecision({
    compatibilidad: resultadoActual?.compatibilidad ?? 0,
    costoTotal,
    tiempoMinutos: receta.tiempoMinutos,
  });


  const comenzarCocina = () => {
    const abrirCocina = () => {
      router.push({
        pathname: '/cooking/[id]',
        params: {
          id: receta.id,
           costo: costoTotal,
        },
      });
    };

    if (listaParaCocinar) {
      abrirCocina();
      return;
    }

    Alert.alert(
      'Te faltan ingredientes',
      faltantes.length === 1
        ? 'Te falta 1 ingrediente para completar esta receta. ¿Quieres cocinar de todos modos?'
        : `Te faltan ${faltantes.length} ingredientes para completar esta receta. ¿Quieres cocinar de todos modos?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Cocinar de todos modos', onPress: abrirCocina },
      ]
    );
  };


  // ====================================================
  // 🎨 UI
  // ====================================================

  return (
    <Screen style={styles.container}>
      <RecipeHero
        titulo={receta.titulo}
        descripcion={receta.descripcion}
        imagen={receta.imagen}
        tiempo={receta.tiempoMinutos}
        porciones={receta.porciones}
        dificultad={receta.dificultad}
        esFavorito={esFavorito}
        onToggleFavorito={() => toggleFavorito(receta.id)}
        onCook={comenzarCocina}
        costoPorPorcion={costoPorPorcion}
      />

      {/* RESUMEN */}
      <View style={styles.recipeStats}>
        <View style={styles.recipeStat}>
          <MaterialCommunityIcons name="clock-outline" size={19} color="#D7A86E" />
          <AppText style={styles.recipeStatValue}>{receta.tiempoMinutos} min</AppText>
          <AppText style={styles.recipeStatLabel}>TIEMPO</AppText>
        </View>

        <View style={styles.recipeStatDivider} />

        <View style={styles.recipeStat}>
          <MaterialCommunityIcons name="account-group-outline" size={19} color="#D7A86E" />
          <AppText style={styles.recipeStatValue}>{receta.porciones}</AppText>
          <AppText style={styles.recipeStatLabel}>PORCIONES</AppText>
        </View>

        <View style={styles.recipeStatDivider} />

        <View style={styles.recipeStat}>
          <MaterialCommunityIcons name="cash" size={19} color="#8FB276" />
          <AppText style={styles.recipeStatValueAccent}>{formatearPrecio(costoTotal)}</AppText>
          <AppText style={styles.recipeStatLabel}>VALOR RECETA</AppText>
        </View>
      </View>

      {/* COSTO POR PERSONA */}
      <View style={styles.regionBar}>
        <View style={styles.regionLeft}>
          <MaterialCommunityIcons name="map-marker-outline" size={17} color="#D7A86E" />
          <View>
            <AppText style={styles.regionEyebrow}>COSTO ESTIMADO EN</AppText>
            <AppText style={styles.regionName}>{region.nombre}</AppText>
          </View>
        </View>

        <View style={styles.costPerServing}>
          <AppText style={styles.costPerServingValue}>{formatearPrecio(costoPorPorcion)}</AppText>
          <AppText style={styles.costPerServingLabel}>POR PORCIÓN</AppText>
        </View>
      </View>

      {/* CHEF LUNA INTRO */}
      {receta.chefInicio && (
        <View style={styles.chefIntroCard}>
          <View style={styles.chefIntroTop}>
            <View style={styles.chefAvatar}>
              <MaterialCommunityIcons name="chef-hat" size={27} color="#F2B35B" />
            </View>
            <View style={styles.chefIntroIdentity}>
              <AppText style={styles.chefEyebrow}>CHEF LUNA</AppText>
              <AppText style={styles.chefIntroTitle}>Antes de comenzar</AppText>
            </View>
          </View>
          <AppText style={styles.chefIntroText}>{receta.chefInicio}</AppText>
        </View>
      )}

      {/* DISPONIBILIDAD PRINCIPAL */}
      <View style={[styles.readinessCard, listaParaCocinar && styles.readinessCardReady]}>
        <View style={styles.readinessTop}>
          <View>
            <AppText style={styles.readinessEyebrow}>ESTADO DE TU DESPENSA</AppText>
            <AppText style={styles.readinessTitle}>
              {listaParaCocinar
                ? 'Puedes cocinarla ahora'
                : faltantes.length === 1
                  ? 'Estás a un ingrediente'
                  : `Te faltan ${faltantes.length} ingredientes`}
            </AppText>
          </View>
          <View style={[styles.readinessPercent, listaParaCocinar && styles.readinessPercentReady]}>
            <AppText style={[styles.readinessPercentText, listaParaCocinar && styles.readinessPercentTextReady]}>
              {porcentajeDisponible}%
            </AppText>
          </View>
        </View>

        <AppText style={styles.readinessText}>
          Tienes {ingredientesDisponibles} de {totalIngredientesClave} ingredientes clave.
        </AppText>
        <AppText style={styles.readinessText}>
          Comprueba que las cantidades te alcancen. Se asume que tienes agua y sal.
        </AppText>

        <View style={styles.readinessTrack}>
          <View style={[styles.readinessFill, { width: `${porcentajeDisponible}%` }]} />
        </View>
      </View>

      {/* DECISIÓN CHEF */}
      <View style={styles.decisionCard}>
        <AppSectionHeader
          title="Por qué esta receta"
          iconName="chef-hat"
          subtitle="Chef Luna analizó tu despensa, costo y tiempo."
        />

        {modo === 'oportunidad' && ingredienteFaltante && (
          <View style={styles.opportunityBox}>
            <AppText style={styles.opportunityEyebrow}>OPORTUNIDAD CHEF LUNA</AppText>
            <AppText style={styles.opportunityTitle}>Estás a un ingrediente</AppText>
            <AppText style={styles.opportunityIngredient}>
              {obtenerIngrediente(ingredienteFaltante)?.nombre ?? ingredienteFaltante}
            </AppText>
            <AppText style={styles.opportunityText}>
              Agrégalo a tu compra y desbloqueas esta receta.
            </AppText>
          </View>
        )}

        <View style={styles.reasonsList}>
          {razonesChef.length > 0 ? (
            razonesChef.map((razon, index) => (
              <View key={`${razon}-${index}`} style={styles.reasonItem}>
                <View style={styles.reasonDot} />
                <AppText style={styles.reasonText}>{razon}</AppText>
              </View>
            ))
          ) : (
            <View style={styles.reasonItem}>
              <View style={styles.reasonDot} />
              <AppText style={styles.reasonText}>
                Chef Luna está evaluando esta receta según tu despensa y presupuesto.
              </AppText>
            </View>
          )}
        </View>
      </View>

      {/* INGREDIENTES */}
      <AppCard style={styles.sectionCard}>
        <AppSectionHeader
          title="Lo que necesitas"
          iconName="basket-outline"
          subtitle={`${receta.ingredientes.length} ingredientes para esta receta`}
        />

        <View style={styles.ingredientsGrid}>
          {receta.ingredientes.map(item => {
            const info = obtenerIngrediente(item.id);
            return (
              <IngredientItem
                key={item.id}
                nombre={info?.nombre ?? item.id}
                cantidad={`${item.cantidad} ${item.unidad}`}
              />
            );
          })}
        </View>

        <AppButton style={styles.missingAction} onPress={irACompras}>
          {recetaEnCarrito
            ? 'Ver mis compras'
            : faltantes.length === 1
              ? 'Comprar lo que me falta'
              : 'Agregar faltantes a compras'}
        </AppButton>
      </AppCard>

      {/* FALTANTES */}
      {faltantes.length > 0 && (
        <AppCard style={styles.missingCard}>
          <AppSectionHeader
            title={faltantes.length === 1 ? 'Casi puedes cocinar' : 'Lo que te falta'}
            iconName="cart-outline"
            subtitle={faltantes.length === 1 ? 'Solo falta un ingrediente para completar esta receta.' : `Necesitas ${faltantes.length} ingredientes más.`}
          />

          <View style={styles.ingredientsGrid}>
            {faltantes.map(idFaltante => {
              const info = obtenerIngrediente(idFaltante);
              const item = receta.ingredientes.find(ingredienteReceta => ingredienteReceta.id === idFaltante);
              return (
                <IngredientItem
                  key={idFaltante}
                  nombre={info?.nombre ?? idFaltante}
                  cantidad={item ? `${item.cantidad} ${item.unidad}` : ''}
                />
              );
            })}
          </View>
        </AppCard>
      )}

      {/* DESPENSA */}
      <AppCard style={styles.sectionCard}>
        <AppSectionHeader
          title="¿Estás listo para cocinar?"
          iconName="fire"
          subtitle="Chef Luna comparó esta receta con tu despensa."
        />

        <View style={styles.inventoryBox}>
          <View style={styles.inventoryTop}>
            <AppText style={styles.inventoryEyebrow}>DISPONIBILIDAD</AppText>
            <AppText style={styles.inventoryPercent}>{porcentajeDisponible}%</AppText>
          </View>

          <AppText style={styles.inventoryTitle}>
            {listaParaCocinar
              ? 'Tienes todo lo necesario'
              : faltantes.length === 1
                ? 'Solo falta una cosa'
                : 'Tu despensa está cerca'}
          </AppText>

          <AppText style={styles.inventoryText}>
            {ingredientesDisponibles} de {totalIngredientesClave} ingredientes clave disponibles
          </AppText>
        </View>

        <PantryProgressCard
          disponibles={ingredientesDisponibles}
          total={totalIngredientesClave}
          faltantes={faltantes}
        />
      </AppCard>

      {/* NOTAS CHEF */}
      <View style={styles.notesSection}>
        <View style={styles.notesHeader}>
          <AppText style={styles.sectionEyebrow}>CONOCIMIENTO CHEF LUNA</AppText>
          <AppText style={styles.sectionTitle}>Antes de encender la estufa</AppText>
          <AppText style={styles.sectionDescription}>
            Consejos que pueden hacer la diferencia entre una receta buena y una gran receta.
          </AppText>
        </View>

        {receta.tip && (
          <View style={styles.tipChef}>
            <View style={styles.tipHeader}>
              <View style={styles.tipIconChef}>
                <MaterialCommunityIcons name="lightbulb-outline" size={21} color="#F2B35B" />
              </View>
              <View>
                <AppText style={styles.tipEyebrow}>CONSEJO CHEF LUNA</AppText>
                <AppText style={styles.tipTitle}>Un detalle que ayuda</AppText>
              </View>
            </View>
            <AppText style={styles.tipText}>{receta.tip}</AppText>
          </View>
        )}

        {receta.ahorro && (
          <View style={styles.tipSave}>
            <View style={styles.tipHeader}>
              <View style={styles.tipIconSave}>
                <MaterialCommunityIcons name="piggy-bank-outline" size={21} color="#9BC38A" />
              </View>
              <View>
                <AppText style={styles.tipEyebrowSave}>AHORRO</AppText>
                <AppText style={styles.tipTitle}>Cuida tu compra</AppText>
              </View>
            </View>
            <AppText style={styles.tipText}>{receta.ahorro}</AppText>
          </View>
        )}

        {receta.errorComun && (
          <View style={styles.tipWarning}>
            <View style={styles.tipHeader}>
              <View style={styles.tipIconWarning}>
                <MaterialCommunityIcons name="alert-outline" size={21} color="#EFA15F" />
              </View>
              <View>
                <AppText style={styles.tipEyebrowWarning}>ERROR COMÚN</AppText>
                <AppText style={styles.tipTitle}>Ojo con esto</AppText>
              </View>
            </View>
            <AppText style={styles.tipText}>{receta.errorComun}</AppText>
          </View>
        )}
      </View>

      {/* CTA FINAL */}
      <View style={styles.finalCard}>
        <View style={styles.finalIcon}>
          <MaterialCommunityIcons name="chef-hat" size={26} color="#F2B35B" />
        </View>
        <AppText style={styles.finalEyebrow}>TODO LISTO</AppText>
        <AppText style={styles.finalTitle}>Ahora sí, vamos a cocinar</AppText>
        <AppText style={styles.finalText}>
          Chef Luna te acompañará paso a paso durante la preparación.
        </AppText>

        <TouchableOpacity activeOpacity={0.86} style={styles.cookButton} onPress={comenzarCocina}>
          <MaterialCommunityIcons name="fire" size={20} color="#24140A" />
          <AppText style={styles.cookButtonText}>Empezar a cocinar</AppText>
          <MaterialCommunityIcons name="arrow-right" size={19} color="#24140A" />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}


// ======================================================
// 🎨 ESTILOS
// ======================================================

const styles = StyleSheet.create({
  container: {
    paddingBottom: 140,
    backgroundColor: KitchenColors.background,
  },
  recipeStats: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#19100C',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#3D2B22',
    paddingVertical: 14,
  },
  recipeStat: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  recipeStatDivider: {
    width: 1,
    height: 38,
    backgroundColor: '#473126',
  },
  recipeStatLabel: {
    color: '#8E735F',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.1,
  },
  recipeStatValue: {
    color: '#FFF3DD',
    fontSize: 14,
    fontWeight: '900',
  },
  recipeStatValueAccent: {
    color: '#F2B35B',
    fontSize: 14,
    fontWeight: '900',
  },
  regionBar: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#211712',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#443027',
    padding: 13,
  },
  regionLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  regionEyebrow: {
    color: '#806A59',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
  },
  regionName: {
    color: '#E8D3BE',
    fontSize: 12,
    fontWeight: '900',
    marginTop: 1,
  },
  costPerServing: {
    alignItems: 'flex-end',
  },
  costPerServingValue: {
    color: '#8FB276',
    fontSize: 14,
    fontWeight: '900',
  },
  costPerServingLabel: {
    color: '#806A59',
    fontSize: 6,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 1,
  },
  chefIntroCard: {
    marginTop: Spacing.lg,
    backgroundColor: '#211510',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#704B34',
    padding: 20,
  },
  chefIntroTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chefAvatar: {
    width: 50,
    height: 50,
    borderRadius: 17,
    backgroundColor: '#382319',
    borderWidth: 1,
    borderColor: '#8A5A35',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  chefIntroIdentity: {
    flex: 1,
  },
  chefEyebrow: {
    color: '#C17D48',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  chefIntroTitle: {
    color: '#FFF3DD',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 2,
  },
  chefIntroText: {
    color: '#D9C1A8',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 16,
  },
  readinessCard: {
    marginTop: Spacing.lg,
    backgroundColor: '#2A1B15',
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#8D5534',
    padding: 18,
  },
  readinessCardReady: {
    backgroundColor: '#1E2A1E',
    borderColor: '#587857',
  },
  readinessTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  readinessEyebrow: {
    color: '#C17D48',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.4,
  },
  readinessTitle: {
    color: '#FFF3DD',
    fontSize: 19,
    fontWeight: '900',
    marginTop: 4,
  },
  readinessText: {
    color: '#B89C84',
    fontSize: 12,
    marginTop: 12,
  },
  readinessPercent: {
    minWidth: 57,
    height: 45,
    paddingHorizontal: 9,
    borderRadius: 15,
    backgroundColor: '#3A2418',
    alignItems: 'center',
    justifyContent: 'center',
  },
  readinessPercentReady: {
    backgroundColor: '#314531',
  },
  readinessPercentText: {
    color: '#F2B35B',
    fontSize: 17,
    fontWeight: '900',
  },
  readinessPercentTextReady: {
    color: '#A7D597',
  },
  readinessTrack: {
    height: 8,
    backgroundColor: '#3A2A20',
    borderRadius: 999,
    overflow: 'hidden',
    marginTop: 14,
  },
  readinessFill: {
    height: '100%',
    backgroundColor: '#8FB276',
    borderRadius: 999,
  },
  decisionCard: {
    marginTop: Spacing.lg,
    backgroundColor: '#251A14',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#8A5A35',
    padding: 18,
  },
  reasonsList: {
    gap: 10,
    marginTop: 14,
  },
  reasonItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  reasonDot: {
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: '#F2B35B',
    marginTop: 8,
    marginRight: 9,
  },
  reasonText: {
    flex: 1,
    color: '#E9D5BF',
    fontSize: 14,
    lineHeight: 21,
  },
  opportunityBox: {
    marginTop: Spacing.md,
    backgroundColor: '#243322',
    borderWidth: 1,
    borderColor: '#668061',
    borderRadius: Radius.lg,
    padding: 16,
  },
  opportunityEyebrow: {
    color: '#8FB276',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  opportunityTitle: {
    color: '#E7F1DE',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 4,
  },
  opportunityIngredient: {
    color: '#B9E59B',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 8,
  },
  opportunityText: {
    color: '#AFC1A5',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
  sectionCard: {
    marginTop: Spacing.lg,
    backgroundColor: KitchenColors.card,
    borderColor: KitchenColors.border,
  },
  ingredientsGrid: {
    marginTop: Spacing.md,
    gap: Spacing.sm,
  },
  missingCard: {
    marginTop: Spacing.lg,
    backgroundColor: '#2B1E18',
    borderColor: '#A66A3C',
    borderWidth: 1,
  },
  inventoryBox: {
    marginTop: Spacing.md,
    backgroundColor: '#3A2418',
    borderRadius: Radius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: '#8A5A35',
  },
  inventoryTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inventoryEyebrow: {
    color: '#C17D48',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.4,
  },
  inventoryPercent: {
    color: '#F2B35B',
    fontSize: 18,
    fontWeight: '900',
  },
  inventoryTitle: {
    color: '#FFF3DD',
    fontWeight: '900',
    fontSize: 17,
    marginTop: 8,
  },
  inventoryText: {
    marginTop: 5,
    color: '#D6B99C',
    fontSize: 13,
    lineHeight: 19,
  },
  notesSection: {
    marginTop: 30,
  },
  notesHeader: {
    marginBottom: 15,
  },
  sectionEyebrow: {
    color: '#C17D48',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.6,
  },
  sectionTitle: {
    color: '#FFF3DD',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 3,
  },
  sectionDescription: {
    color: '#9D826D',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 6,
  },
  tipChef: {
    backgroundColor: '#342219',
    borderWidth: 1,
    borderColor: '#8B5C38',
    borderRadius: 21,
    padding: 17,
    marginBottom: 11,
  },
  tipSave: {
    backgroundColor: '#223021',
    borderWidth: 1,
    borderColor: '#587356',
    borderRadius: 21,
    padding: 17,
    marginBottom: 11,
  },
  tipWarning: {
    backgroundColor: '#352319',
    borderWidth: 1,
    borderColor: '#A86537',
    borderRadius: 21,
    padding: 17,
    marginBottom: 11,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  tipIconChef: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#4A301E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipIconSave: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#30432D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipIconWarning: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#4A2E1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipEyebrow: {
    color: '#D7A86E',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.3,
  },
  tipEyebrowSave: {
    color: '#8FB276',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.3,
  },
  tipEyebrowWarning: {
    color: '#E99B5A',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.3,
  },
  tipTitle: {
    color: '#FFF3DD',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 2,
  },
  tipText: {
    color: '#DCC6AF',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 13,
  },
  finalCard: {
    marginTop: 30,
    backgroundColor: '#211510',
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#754D33',
    padding: 22,
    alignItems: 'center',
  },
  finalIcon: {
    width: 58,
    height: 58,
    borderRadius: 19,
    backgroundColor: '#382319',
    alignItems: 'center',
    justifyContent: 'center',
  },
  finalEyebrow: {
    color: '#C17D48',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginTop: 15,
  },
  finalTitle: {
    color: '#FFF3DD',
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 5,
  },
  finalText: {
    color: '#A98D76',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 7,
  },
  cookButton: {
    width: '100%',
    minHeight: 52,
    marginTop: 20,
    borderRadius: 17,
    backgroundColor: '#F2B35B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  cookButtonText: {
    color: '#24140A',
    fontSize: 13,
    fontWeight: '900',
  },
  notFoundCard: {
    marginTop: 60,
    backgroundColor: '#211712',
    borderRadius: 27,
    borderWidth: 1,
    borderColor: '#51372B',
    padding: 28,
    alignItems: 'center',
  },
  notFoundIcon: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: '#352319',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundEyebrow: {
    color: '#C17D48',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginTop: 17,
  },
  notFoundTitle: {
    color: '#FFF3DD',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 5,
  },
  notFoundText: {
    color: '#A98D76',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
  },
  notFoundButton: {
    marginTop: 20,
    minHeight: 48,
    paddingHorizontal: 18,
    borderRadius: 16,
    backgroundColor: '#F2B35B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  notFoundButtonText: {
    color: '#24140A',
    fontSize: 12,
    fontWeight: '900',
  },
  missingAction: {
    marginTop: 16,
  },
});