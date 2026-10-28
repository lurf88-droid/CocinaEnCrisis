import React, {
  useMemo,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
  router,
} from 'expo-router';

import {
  RECETAS,
  formatearPrecio,
} from '@/data/recetas';
import {
  calcularResumenCompra,
  crearListaCompra,
  obtenerCompradosCompletos,
} from '@/services/compra.service';
import { useCiudad } from '@/hooks/use-ciudad';
import { CATALOGO_INGREDIENTES } from '@/data/catalogo-ingredientes';

import {
  useIngredientes,
} from '@/context/IngredientesContext';

import {
  AppText,
} from '@/components/ui/AppText';

import {
  AppButton,
} from '@/components/ui/AppButton';

import {
  IngredientIcon,
} from '@/components/ingredients/IngredientIcon';

import {
  KitchenColors,
  Spacing,
} from '@/constants/theme';

// ======================================================
// 🗂️ CONFIGURACIÓN DE CATEGORÍAS PARA EL SÚPER
// ======================================================

const CATEGORIAS_CONFIG: Record<string, { titulo: string; icon: any }> = {
  frutas: { titulo: 'Frutas', icon: 'food-apple' },
  verduras: { titulo: 'Verduras', icon: 'leaf' },
  proteinas: { titulo: 'Carnes y Proteínas', icon: 'food-steak' },
  carnes: { titulo: 'Carnes', icon: 'food-steak' },
  lacteos: { titulo: 'Lácteos', icon: 'cup' },
  despensa: { titulo: 'Despensa', icon: 'can' },
  condimentos: { titulo: 'Condimentos', icon: 'shaker-outline' },
  chiles: { titulo: 'Chiles', icon: 'chili-hot' },
  chiles_secos: { titulo: 'Chiles secos', icon: 'chili-hot' },
  bebidas: { titulo: 'Bebidas', icon: 'bottle-soda' },
  panaderia: { titulo: 'Panadería', icon: 'bread-slice' },
  otros: { titulo: 'Otros', icon: 'basket' },
};

function formatearUnidad(unidad: string, cantidad: number): string {
  if (cantidad === 1) return unidad;
  switch (unidad) {
    case 'pieza': return 'piezas';
    case 'porcion': return 'porciones';
    case 'unidad': return 'unidades';
    default: return unidad;
  }
}

// ======================================================
// 🛒 CARRITO SCREEN
// ======================================================

export default function CarritoScreen() {

  const {
    ingredientes: despensa,
    carrito,
    confirmarCompra,
    presupuesto,
    comprados,
    toggleComprado,
    limpiarComprados,
  } = useIngredientes();

  const { regionId } = useCiudad();

  // ====================================================
  // 🍳 RECETAS DEL CARRITO
  // ====================================================
  const recetasCarrito = useMemo(() => {
    const idsUnicos = new Set(carrito);
    return RECETAS.filter(receta => idsUnicos.has(receta.id));
  }, [carrito]);

  // ====================================================
  // 🛒 INGREDIENTES QUE FALTAN
  // ====================================================
  const ingredientes = useMemo(
    () => crearListaCompra(recetasCarrito, despensa, regionId),
    [recetasCarrito, despensa, regionId]
  );

  // ====================================================
  // 💰 RESUMEN DE COMPRA
  // ====================================================
  const resumenCompra = useMemo(
    () => calcularResumenCompra(ingredientes, regionId),
    [ingredientes, regionId]
  );

  const totalUso = resumenCompra.costoUsoTotal;
  const totalCompra = resumenCompra.costoCompraTotal;
  const compraCalculable = resumenCompra.compraCalculable;

  // ====================================================
  // 📊 PROGRESO
  // ====================================================
  const totalIngredientes = ingredientes.length;

  const ingredientesComprados = ingredientes.filter(ingrediente => {
    const clave = `${ingrediente.id}::${ingrediente.unidad.trim().toLowerCase()}`;
    return comprados.includes(clave);
  }).length;

  const progreso = totalIngredientes === 0
    ? 0
    : Math.round((ingredientesComprados / totalIngredientes) * 100);

  const compraCompleta = totalIngredientes > 0 && ingredientesComprados === totalIngredientes;
  const yaTienesTodo = recetasCarrito.length > 0 && totalIngredientes === 0;

  // ====================================================
  // 🗂️ AGRUPAR INGREDIENTES POR CATEGORÍA (Lógica Premium)
  // ====================================================
  const ingredientesAgrupados = useMemo(() => {
    const grupos: Record<string, typeof ingredientes> = {};

    ingredientes.forEach(ing => {
      // Buscamos la categoría en el catálogo original
      const info = CATALOGO_INGREDIENTES.find(i => i.id === ing.id);
      const categoriaKey = info?.categoria || 'otros';

      if (!grupos[categoriaKey]) {
        grupos[categoriaKey] = [];
      }
      grupos[categoriaKey].push(ing);
    });

    // Ordenamos cada grupo: primero los NO comprados, luego los comprados
    Object.keys(grupos).forEach(key => {
      grupos[key].sort((a, b) => {
        const claveA = `${a.id}::${a.unidad.trim().toLowerCase()}`;
        const claveB = `${b.id}::${b.unidad.trim().toLowerCase()}`;
        const aComprado = comprados.includes(claveA);
        const bComprado = comprados.includes(claveB);

        if (aComprado === bComprado) return 0;
        return aComprado ? 1 : -1;
      });
    });

    return grupos;
  }, [ingredientes, comprados]);


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {/* HERO */}
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.heroIcon}>
            <MaterialCommunityIcons name="cart-outline" size={28} color="#F2B35B" />
          </View>
          <View style={styles.heroContent}>
            <AppText style={styles.eyebrow}>PLAN DE COCINA</AppText>
            <AppText style={styles.heroTitle}>Mi carrito</AppText>
          </View>
          <View style={styles.totalBadge}>
            <AppText style={styles.totalBadgeValue}>{recetasCarrito.length}</AppText>
            <AppText style={styles.totalBadgeLabel}>RECETAS</AppText>
          </View>
        </View>

        <AppText style={styles.heroDescription}>
          Revisamos tu despensa y dejamos únicamente lo que necesitas comprar.
        </AppText>

        {recetasCarrito.length > 0 && (
          <View style={styles.heroStats}>
            <View style={styles.heroStat}>
              <AppText style={styles.heroStatValue}>{totalIngredientes}</AppText>
              <AppText style={styles.heroStatLabel}>por comprar</AppText>
            </View>
            <View style={styles.heroDivider} />
            <View style={styles.heroStat}>
              <AppText style={styles.heroStatValue}>{ingredientesComprados}</AppText>
              <AppText style={styles.heroStatLabel}>comprados</AppText>
            </View>
            <View style={styles.heroDivider} />
            <View style={styles.heroStat}>
              <AppText style={styles.heroStatValue}>
                {totalCompra === null ? '—' : formatearPrecio(totalCompra)}
              </AppText>
              <AppText style={styles.heroStatLabel}>estimado</AppText>
            </View>
          </View>
        )}
      </View>

      {/* EMPTY STATE */}
      {recetasCarrito.length === 0 && (
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <MaterialCommunityIcons name="cart-outline" size={40} color="#F2B35B" />
          </View>
          <AppText style={styles.emptyEyebrow}>TU CARRITO ESTÁ VACÍO</AppText>
          <AppText style={styles.emptyTitle}>Agrega recetas que quieras preparar</AppText>
          <AppText style={styles.emptyText}>
            Chef Luna revisará tu despensa y te mostrará solamente lo que te falta.
          </AppText>
          <TouchableOpacity
            activeOpacity={0.86}
            style={styles.emptyButton}
            onPress={() => router.push('/(tabs)/explore')}
          >
            <MaterialCommunityIcons name="silverware-fork-knife" size={18} color="#24140A" />
            <AppText style={styles.emptyButtonText}>Explorar recetas</AppText>
          </TouchableOpacity>
        </View>
      )}

      {recetasCarrito.length > 0 && (
        <>
          {/* RECETAS SELECCIONADAS */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View>
                <AppText style={styles.sectionEyebrow}>TU PLAN</AppText>
                <AppText style={styles.sectionTitle}>Recetas seleccionadas</AppText>
              </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recipesRow}>
              {recetasCarrito.map(receta => (
                <TouchableOpacity
                  key={receta.id}
                  activeOpacity={0.84}
                  style={styles.recipeCard}
                  onPress={() => router.push({ pathname: '/receta/[id]', params: { id: receta.id } })}
                >
                  <View style={styles.recipeIcon}>
                    <MaterialCommunityIcons name="chef-hat" size={20} color="#F2B35B" />
                  </View>
                  <AppText numberOfLines={2} style={styles.recipeTitle}>
                    {receta.titulo}
                  </AppText>
                  <View style={styles.recipeMetaRow}>
                    <MaterialCommunityIcons name="clock-outline" size={14} color="#B89476" />
                    <AppText style={styles.recipeMeta}>{receta.tiempoMinutos} min</AppText>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* YA TIENES TODO */}
          {yaTienesTodo && (
            <View style={styles.readyCard}>
              <View style={styles.readyIcon}>
                <MaterialCommunityIcons name="check-circle" size={28} color="#A9C991" />
              </View>
              <View style={styles.readyContent}>
                <AppText style={styles.readyEyebrow}>DESPENSA COMPLETA</AppText>
                <AppText style={styles.readyTitle}>Ya tienes todo</AppText>
                <AppText style={styles.readyText}>
                  No necesitas comprar ingredientes para preparar estas recetas.
                </AppText>
              </View>
            </View>
          )}

          {/* PROGRESO */}
          {totalIngredientes > 0 && (
            <View style={styles.progressCard}>
              <View style={styles.progressHeader}>
                <View>
                  <AppText style={styles.sectionEyebrow}>PROGRESO DE COMPRA</AppText>
                  <AppText style={styles.progressTitle}>
                    {compraCompleta ? 'Lista completa' : 'Vamos avanzando'}
                  </AppText>
                </View>
                <View style={styles.progressPercentBadge}>
                  <AppText style={styles.progressPercent}>{progreso}%</AppText>
                </View>
              </View>

              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${progreso}%` }]} />
              </View>

              <View style={styles.progressFooter}>
                <View style={styles.progressStatus}>
                  <MaterialCommunityIcons
                    name={compraCompleta ? 'check-circle' : 'cart-arrow-down'}
                    size={17}
                    color={compraCompleta ? '#8FB276' : '#F2B35B'}
                  />
                  <AppText style={styles.progressStatusText}>
                    {compraCompleta ? 'Todo listo para cocinar' : 'Marca lo que ya compraste'}
                  </AppText>
                </View>
                {ingredientesComprados > 0 && (
                  <TouchableOpacity onPress={limpiarComprados} style={styles.clearButton}>
                    <MaterialCommunityIcons name="restore" size={15} color="#C79A79" />
                    <AppText style={styles.clearButtonText}>Reiniciar</AppText>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}

          {/* LISTA AGRUPADA POR PASILLOS */}
          {totalIngredientes > 0 && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View>
                  <AppText style={styles.sectionEyebrow}>LISTA DE SÚPER</AppText>
                  <AppText style={styles.sectionTitle}>Qué necesitas comprar</AppText>
                </View>
              </View>

              {Object.entries(ingredientesAgrupados).map(([catKey, items]) => {
                const config = CATEGORIAS_CONFIG[catKey] || CATEGORIAS_CONFIG.otros;

                return (
                  <View key={catKey} style={styles.categoryGroup}>
                    {/* Header de Categoría */}
                    <View style={styles.categoryHeader}>
                      <MaterialCommunityIcons name={config.icon} size={18} color="#D7A86E" />
                      <AppText style={styles.categoryTitle}>{config.titulo}</AppText>
                      <View style={styles.categoryLine} />
                    </View>

                    {/* Items de la Categoría */}
                    <View style={styles.ingredientsList}>
                      {items.map(ingrediente => {
                        const claveCompra = `${ingrediente.id}::${ingrediente.unidad.trim().toLowerCase()}`;
                        const estaComprado = comprados.includes(claveCompra);

                        return (
                          <TouchableOpacity
                            key={claveCompra}
                            activeOpacity={0.8}
                            onPress={() => toggleComprado(claveCompra)}
                            style={[styles.ingredientCard, estaComprado && styles.ingredientCardDone]}
                          >
                            <View style={styles.ingredientLeft}>
                              <IngredientIcon id={ingrediente.id} size={42} />
                              <View style={styles.ingredientContent}>
                                <AppText
                                  numberOfLines={1}
                                  style={[styles.ingredientName, estaComprado && styles.ingredientNameDone]}
                                >
                                  {ingrediente.nombre}
                                </AppText>
                                <AppText style={styles.ingredientAmount}>
                                  {ingrediente.cantidad} {formatearUnidad(ingrediente.unidad, ingrediente.cantidad)}
                                </AppText>
                              </View>
                            </View>

                            <View style={[styles.checkButton, estaComprado && styles.checkButtonDone]}>
                              <MaterialCommunityIcons
                                name={estaComprado ? 'check' : 'plus'}
                                size={20}
                                color={estaComprado ? '#1D1410' : '#F2B35B'}
                              />
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </View>
          )}

          {/* RESUMEN FINAL */}
          <View style={styles.totalCard}>
            <View style={styles.totalTop}>
              <View>
                <AppText style={styles.totalEyebrow}>RESUMEN DE COMPRA</AppText>
                <AppText style={styles.totalTitle}>
                  {yaTienesTodo ? 'No necesitas comprar' : compraCalculable ? 'Compra estimada' : 'Compra por confirmar'}
                </AppText>
              </View>
              <MaterialCommunityIcons
                name={yaTienesTodo ? 'check-circle-outline' : 'wallet-outline'}
                size={26}
                color={yaTienesTodo ? '#8FB276' : '#F2B35B'}
              />
            </View>

            <AppText style={styles.totalAmount}>
              {totalCompra === null ? '—' : formatearPrecio(totalCompra)}
            </AppText>

            <AppText style={styles.totalSubtext}>
              {yaTienesTodo
                ? 'Todo lo necesario ya está registrado en tu despensa.'
                : `Para ${recetasCarrito.length} ${recetasCarrito.length === 1 ? 'receta' : 'recetas'}`}
            </AppText>

            <View style={styles.totalInfoRow}>
              <View style={styles.totalInfoItem}>
                <MaterialCommunityIcons name="basket-outline" size={17} color="#D7A86E" />
                <AppText style={styles.totalInfoText}>
                  {Math.max(0, totalIngredientes - ingredientesComprados)} pendientes
                </AppText>
              </View>
              <View style={styles.totalInfoItem}>
                <MaterialCommunityIcons name="check-circle-outline" size={17} color="#8FB276" />
                <AppText style={styles.totalInfoText}>
                  {ingredientesComprados} comprados
                </AppText>
              </View>
            </View>

            {!yaTienesTodo && (
              <AppText style={styles.totalSubtext}>
                Valor de lo que usarás: {formatearPrecio(totalUso)}.
              </AppText>
            )}

            <AppText style={styles.totalSubtext}>
              Presupuesto: {formatearPrecio(presupuesto)}.{' '}
              {yaTienesTodo
                ? 'No necesitas comprar nada.'
                : totalCompra === null
                  ? 'Aún no podemos compararlo correctamente.'
                  : totalCompra > presupuesto
                    ? `La compra lo supera por ${formatearPrecio(totalCompra - presupuesto)}.`
                    : 'La compra está dentro de tu presupuesto.'}
            </AppText>

            <AppButton
              style={styles.prepareButton}
              onPress={
                yaTienesTodo
                  ? () => router.push({ pathname: '/receta/[id]', params: { id: recetasCarrito[0].id } })
                  : confirmarCompra
              }
              disabled={!yaTienesTodo && obtenerCompradosCompletos(ingredientes, comprados).length === 0}
            >
              {yaTienesTodo
                ? recetasCarrito.length === 1 ? 'Ver receta para cocinar' : 'Ver primera receta'
                : 'Agregar compras a mi despensa'}
            </AppButton>
          </View>
        </>
      )}
    </ScrollView>
  );
}

// ======================================================
// 🎨 ESTILOS
// ======================================================

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Spacing.xl,
    paddingTop: 28,
    paddingBottom: 150,
    backgroundColor: KitchenColors.background,
  },
  
  // HERO
  hero: {
    backgroundColor: '#211510',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#65452F',
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.34,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 9,
  },
  heroTop: { flexDirection: 'row', alignItems: 'center' },
  heroIcon: {
    width: 54, height: 54, borderRadius: 18, backgroundColor: '#382319',
    borderWidth: 1, borderColor: '#8A5A35', alignItems: 'center', justifyContent: 'center', marginRight: 13,
  },
  heroContent: { flex: 1 },
  eyebrow: { color: '#D68A45', fontSize: 10, fontWeight: '900', letterSpacing: 1.8 },
  heroTitle: { color: '#FFF3DD', fontSize: 28, fontWeight: '900', marginTop: 3 },
  heroDescription: { color: '#D4BCA3', fontSize: 15, lineHeight: 23, marginTop: 18 },
  totalBadge: {
    minWidth: 58, height: 56, borderRadius: 17, backgroundColor: '#19100C',
    borderWidth: 1, borderColor: '#4A3326', alignItems: 'center', justifyContent: 'center',
  },
  totalBadgeValue: { color: '#F2B35B', fontSize: 20, fontWeight: '900' },
  totalBadgeLabel: { color: '#8E735F', fontSize: 7, fontWeight: '900', letterSpacing: 1 },
  heroStats: {
    flexDirection: 'row', marginTop: 20, paddingVertical: 14,
    backgroundColor: '#19100C', borderRadius: 17, borderWidth: 1, borderColor: '#3C2920',
  },
  heroStat: { flex: 1, alignItems: 'center' },
  heroStatValue: { color: '#F2B35B', fontSize: 15, fontWeight: '900' },
  heroStatLabel: { color: '#927560', fontSize: 8, fontWeight: '800', marginTop: 3, textTransform: 'uppercase' },
  heroDivider: { width: 1, backgroundColor: '#3C2920' },

  // SECTIONS
  section: { marginTop: 28 },
  sectionHeader: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 14 },
  sectionEyebrow: { color: '#C17D48', fontSize: 9, fontWeight: '900', letterSpacing: 1.6 },
  sectionTitle: { color: '#FFF3DD', fontSize: 22, fontWeight: '900', marginTop: 3 },

  // RECETAS
  recipesRow: { gap: 10, paddingRight: 10 },
  recipeCard: {
    width: 165, minHeight: 120, backgroundColor: '#251A14', borderRadius: 19,
    borderWidth: 1, borderColor: '#493126', padding: 14,
  },
  recipeIcon: { width: 38, height: 38, borderRadius: 13, backgroundColor: '#372319', alignItems: 'center', justifyContent: 'center' },
  recipeTitle: { color: '#FFF3DD', fontSize: 14, lineHeight: 19, fontWeight: '900', marginTop: 11 },
  recipeMetaRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 8 },
  recipeMeta: { color: '#A98A72', fontSize: 10, fontWeight: '700' },

  // READY / PROGRESS
  readyCard: {
    marginTop: 26, backgroundColor: '#1D291E', borderRadius: 22, borderWidth: 1, borderColor: '#4F6F51',
    padding: 18, flexDirection: 'row', alignItems: 'center',
  },
  readyIcon: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#293B2B', alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  readyContent: { flex: 1 },
  readyEyebrow: { color: '#8FB276', fontSize: 8, fontWeight: '900', letterSpacing: 1.4 },
  readyTitle: { color: '#EFF7EA', fontSize: 18, fontWeight: '900', marginTop: 3 },
  readyText: { color: '#A9BCA6', fontSize: 11, lineHeight: 17, marginTop: 4 },
  
  progressCard: {
    marginTop: 26, backgroundColor: '#1E1712', borderRadius: 23,
    borderWidth: 1, borderColor: '#413125', padding: 18,
  },
  progressHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  progressTitle: { color: '#F6E4D0', fontSize: 18, fontWeight: '900', marginTop: 3 },
  progressPercentBadge: { minWidth: 55, height: 42, borderRadius: 14, backgroundColor: '#302119', borderWidth: 1, borderColor: '#6A4936', alignItems: 'center', justifyContent: 'center' },
  progressPercent: { color: '#F2B35B', fontSize: 15, fontWeight: '900' },
  progressTrack: { height: 9, backgroundColor: '#35281E', borderRadius: 999, overflow: 'hidden', marginTop: 13 },
  progressFill: { height: '100%', backgroundColor: '#8FB276', borderRadius: 999 },
  progressFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 13 },
  progressStatus: { flexDirection: 'row', alignItems: 'center', gap: 6, flex: 1 },
  progressStatusText: { color: '#B69A82', fontSize: 10, fontWeight: '700' },
  clearButton: { flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 10, paddingVertical: 7, borderRadius: 999, backgroundColor: '#302119' },
  clearButtonText: { color: '#C79A79', fontSize: 9, fontWeight: '800' },

  // AGRUPACIÓN POR CATEGORÍA
  categoryGroup: {
    marginBottom: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  categoryTitle: {
    color: '#D7A86E',
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  categoryLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#3D2B22',
  },

  // ITEMS
  ingredientsList: { gap: 9 },
  ingredientCard: {
    minHeight: 70, flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#251A14', borderRadius: 16, borderWidth: 1, borderColor: '#493126', padding: 10,
  },
  ingredientCardDone: { backgroundColor: '#1F2B20', borderColor: '#4D6A4F', opacity: 0.7 },
  ingredientLeft: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 12 },
  ingredientContent: { flex: 1 },
  ingredientName: { color: '#FFF3DD', fontSize: 14, fontWeight: '900' },
  ingredientNameDone: { color: '#8A9C87', textDecorationLine: 'line-through' },
  ingredientAmount: { color: '#A98A72', fontSize: 11, marginTop: 3, fontWeight: '700' },
  checkButton: {
    width: 36, height: 36, borderRadius: 12, backgroundColor: '#382319',
    borderWidth: 1, borderColor: '#6A4936', alignItems: 'center', justifyContent: 'center',
  },
  checkButtonDone: { backgroundColor: '#8FB276', borderColor: '#8FB276' },

  // RESUMEN FINAL
  totalCard: {
    marginTop: 10, backgroundColor: '#251A14', borderRadius: 25,
    borderWidth: 1, borderColor: '#A66A3C', padding: 21,
  },
  totalTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  totalEyebrow: { color: '#C17D48', fontSize: 9, fontWeight: '900', letterSpacing: 1.6 },
  totalTitle: { color: '#FFF3DD', fontSize: 18, fontWeight: '900', marginTop: 3 },
  totalAmount: { color: '#F2B35B', fontSize: 34, fontWeight: '900', marginTop: 18 },
  totalSubtext: { color: '#A98A72', fontSize: 12, lineHeight: 18, marginTop: 6 },
  totalInfoRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 14, marginTop: 16 },
  totalInfoItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  totalInfoText: { color: '#B99D84', fontSize: 10, fontWeight: '700' },
  prepareButton: { marginTop: 20 },

  // EMPTY STATE
  emptyState: { marginTop: 34, backgroundColor: '#211712', borderRadius: 27, borderWidth: 1, borderColor: '#51372B', padding: 28, alignItems: 'center' },
  emptyIcon: { width: 78, height: 78, borderRadius: 25, backgroundColor: '#352319', borderWidth: 1, borderColor: '#754F38', alignItems: 'center', justifyContent: 'center' },
  emptyEyebrow: { color: '#C17D48', fontSize: 8, fontWeight: '900', letterSpacing: 1.6, marginTop: 18 },
  emptyTitle: { color: '#FFF3DD', fontSize: 22, lineHeight: 28, fontWeight: '900', textAlign: 'center', marginTop: 7 },
  emptyText: { color: '#A98D76', fontSize: 13, lineHeight: 20, textAlign: 'center', marginTop: 10 },
  emptyButton: {
    marginTop: 22, minHeight: 48, borderRadius: 16, paddingHorizontal: 18,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: '#F2B35B',
  },
  emptyButtonText: { color: '#24140A', fontSize: 12, fontWeight: '900' },
});