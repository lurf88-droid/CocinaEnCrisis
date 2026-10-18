import {
  useMemo,
  useState,
} from 'react';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
  AppButton,
} from '@/components/ui/AppButton';

import {
  AppInput,
} from '@/components/ui/AppInput';

import {
  AppText,
} from '@/components/ui/AppText';

import {
  IngredientIcon,
} from '@/components/ingredients/IngredientIcon';

import {
  Radius,
} from '@/constants/theme';

import {
  agruparDespensa,
} from '@/utils/agruparDespensa';

import {
  CATALOGO_INGREDIENTES,
  obtenerIngrediente,
  type IngredienteCatalogo,
} from '@/data/catalogo-ingredientes';


// ======================================================
// 🧺 TYPES
// ======================================================

type Props = {
  ingredientesRapidos: string[];
  ingredientes: string[];
  ingrediente: string;
  setIngrediente: (valor: string) => void;
  agregarIngrediente: (valorRaw?: string) => void;
  eliminarIngrediente: (ingrediente: string) => void;
};


// ======================================================
// 📂 CATEGORY CONFIG
// ======================================================

type CategoriaConfig = {
  key: string;
  titulo: string;
  descripcion: string;
};

const CATEGORIAS: CategoriaConfig[] = [
  { key: 'despensa', titulo: 'Fondo de despensa', descripcion: 'Lo básico que siempre ayuda' },
  { key: 'proteinas', titulo: 'Proteínas', descripcion: 'Carnes, huevo y otras opciones' },
  { key: 'carnes', titulo: 'Carnes', descripcion: 'Res, cerdo y más' },
  { key: 'lacteos', titulo: 'Lácteos', descripcion: 'Leche, queso y derivados' },
  { key: 'verduras', titulo: 'Verduras', descripcion: 'Vegetales de tu cocina' },
  { key: 'frutas', titulo: 'Frutas', descripcion: 'Frescas y versátiles' },
  { key: 'especias', titulo: 'Especias', descripcion: 'Sabor y aroma' },
  { key: 'condimentos', titulo: 'Condimentos', descripcion: 'Para completar tus platillos' },
  { key: 'chiles', titulo: 'Chiles', descripcion: 'Frescos y secos' },
  { key: 'chiles_secos', titulo: 'Chiles secos', descripcion: 'Para salsas y guisos' },
  { key: 'panaderia', titulo: 'Panadería', descripcion: 'Pan, tortillas y similares' },
  { key: 'reposteria', titulo: 'Repostería', descripcion: 'Ingredientes dulces' },
  { key: 'bebidas', titulo: 'Bebidas', descripcion: 'Lo que tienes para tomar' },
  { key: 'refrigerador', titulo: 'Refrigerador', descripcion: 'Productos que mantienes fríos' },
  { key: 'botanas', titulo: 'Botanas', descripcion: 'Snacks y acompañamientos' },
  { key: 'proteinas_vegetales', titulo: 'Proteínas vegetales', descripcion: 'Frijol, lenteja, etc.' },
  { key: 'bases_culinarias', titulo: 'Bases culinarias', descripcion: 'Masa, caldos, etc.' },
  { key: 'salsas', titulo: 'Salsas', descripcion: 'Rojas, verdes y más' },
];

// ======================================================
// 🔤 NORMALIZACIÓN Y BÚSQUEDA
// ======================================================

function normalizarBusqueda(texto: string): string {
  return texto
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[_-]+/g, ' ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function calcularScoreBusqueda(item: IngredienteCatalogo, consulta: string): number {
  const query = normalizarBusqueda(consulta);
  if (!query) return -1;

  const id = normalizarBusqueda(item.id);
  const nombre = normalizarBusqueda(item.nombre);
  const aliases = item.aliases.map(alias => normalizarBusqueda(alias));

  if (id === query) return 1000;
  if (nombre === query) return 980;
  if (aliases.some(alias => alias === query)) return 960;
  if (nombre.startsWith(query)) return 850;
  if (id.startsWith(query)) return 820;
  if (aliases.some(alias => alias.startsWith(query))) return 800;
  if (nombre.includes(query)) return 700;
  if (id.includes(query)) return 680;
  if (aliases.some(alias => alias.includes(query))) return 660;

  const palabras = query.split(' ').filter(Boolean);
  const universoTexto = [id, nombre, ...aliases].join(' ');
  if (palabras.every(palabra => universoTexto.includes(palabra))) {
    return 500 + palabras.length;
  }

  return -1;
}

function buscarIngredientesCatalogo(consulta: string): IngredienteCatalogo[] {
  const query = normalizarBusqueda(consulta);
  if (!query) return [];

  return CATALOGO_INGREDIENTES
    .map(item => ({ item, score: calcularScoreBusqueda(item, query) }))
    .filter(res => res.score >= 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (a.item.nombre.length !== b.item.nombre.length) return a.item.nombre.length - b.item.nombre.length;
      return a.item.nombre.localeCompare(b.item.nombre, 'es');
    })
    .map(res => res.item);
}


// ======================================================
// 🧺 PANTRY SECTION
// ======================================================

export function PantrySection({
  ingredientesRapidos,
  ingredientes,
  ingrediente,
  setIngrediente,
  agregarIngrediente,
  eliminarIngrediente,
}: Props) {

  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);

  const despensaAgrupada = agruparDespensa(ingredientes);

  // Catálogo agrupado para exploración visual
  const catalogoAgrupado = useMemo(() => {
    const grupos: Record<string, IngredienteCatalogo[]> = {};
    CATALOGO_INGREDIENTES.forEach(item => {
      const cat = item.categoria || 'otros';
      if (!grupos[cat]) grupos[cat] = [];
      grupos[cat].push(item);
    });
    
    // Ordenar los ingredientes de cada categoría alfabéticamente
    Object.keys(grupos).forEach(key => {
      grupos[key].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
    });
    
    return grupos;
  }, []);
  // ====================================================
  // 🔎 RESULTADOS DEL BUSCADOR
  // ====================================================

  const resultadosBusqueda = useMemo(
    () => buscarIngredientesCatalogo(ingrediente),
    [ingrediente]
  );


  // ====================================================
  // ➕ AGREGAR DESDE RESULTADO
  // ====================================================

  const agregarDesdeResultado = (item: IngredienteCatalogo) => {
    agregarIngrediente(item.id);
    setIngrediente('');
  };


  // ====================================================
  // ➕ AGREGAR DESDE TEXTO
  // ====================================================

  const handleAgregar = () => {
    const valor = ingrediente.trim();
    if (!valor) return;

    const normalizado = normalizarBusqueda(valor);

    const coincidenciaExacta = CATALOGO_INGREDIENTES.find(item => {
      if (normalizarBusqueda(item.id) === normalizado) return true;
      if (normalizarBusqueda(item.nombre) === normalizado) return true;
      return item.aliases.some(alias => normalizarBusqueda(alias) === normalizado);
    });

    if (coincidenciaExacta) {
      agregarDesdeResultado(coincidenciaExacta);
      return;
    }

    if (resultadosBusqueda.length === 1) {
      agregarDesdeResultado(resultadosBusqueda[0]);
      return;
    }
  };


  // ====================================================
  // ⚡ RÁPIDOS DISPONIBLES
  // ====================================================

  const rapidosDisponibles = ingredientesRapidos.filter(entrada => {
    const normalizado = normalizarBusqueda(entrada);
    const candidato = CATALOGO_INGREDIENTES.find(item => {
      if (normalizarBusqueda(item.id) === normalizado) return true;
      if (normalizarBusqueda(item.nombre) === normalizado) return true;
      return item.aliases.some(alias => normalizarBusqueda(alias) === normalizado);
    });

    if (candidato) return !ingredientes.includes(candidato.id);
    return !ingredientes.includes(entrada);
  });


  // ====================================================
  // ⚡ AGREGAR RÁPIDO
  // ====================================================

  const agregarRapido = (entrada: string) => {
    const normalizado = normalizarBusqueda(entrada);
    const candidato = CATALOGO_INGREDIENTES.find(item => {
      if (normalizarBusqueda(item.id) === normalizado) return true;
      if (normalizarBusqueda(item.nombre) === normalizado) return true;
      return item.aliases.some(alias => normalizarBusqueda(alias) === normalizado);
    });
    agregarIngrediente(candidato?.id ?? entrada);
  };


  // ====================================================
  // 📂 RENDER CATEGORÍA (INVENTARIO)
  // ====================================================

  const renderCategoria = (titulo: string, descripcion: string, lista: string[] = []) => {
    if (lista.length === 0) return null;

    return (
      <View style={styles.categoryBlock}>
        <View style={styles.categoryHeader}>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="food" size={18} color="#F2B35B" />
          </View>
          <View style={styles.categoryHeaderText}>
            <AppText style={styles.categoryTitle}>{titulo}</AppText>
            <AppText style={styles.categoryDescription}>{descripcion}</AppText>
          </View>
          <View style={styles.categoryCount}>
            <AppText style={styles.categoryCountText}>{lista.length}</AppText>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.ingredientsRow}>
          {lista.map(id => {
            const datos = obtenerIngrediente(id);
            return (
              <Pressable
                key={id}
                onPress={() => eliminarIngrediente(id)}
                style={({ pressed }) => [
                  styles.ingredientCard,
                  pressed && styles.ingredientCardPressed,
                ]}
              >
                <View style={styles.ingredientIconWrap}>
                  <IngredientIcon id={id} size={42} />
                </View>
                <View style={styles.ingredientInfo}>
                  <AppText numberOfLines={1} style={styles.ingredientName}>
                    {datos?.nombre ?? id}
                  </AppText>
                  <View style={styles.ingredientStatusRow}>
                    <View style={styles.availableDot} />
                    <AppText style={styles.availableText}>Disponible</AppText>
                  </View>
                </View>
                <View style={styles.removeButton}>
                  <MaterialCommunityIcons name="close" size={15} color="#BE9072" />
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    );
  };


  // ====================================================
  // 🎨 UI
  // ====================================================

  return (
    <View style={styles.container}>

      {/* CABECERA */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headerIcon}>
            <MaterialCommunityIcons name="basket-outline" size={24} color="#F2B35B" />
          </View>
          <View>
            <AppText style={styles.kicker}>INVENTARIO ACTUAL</AppText>
            <AppText style={styles.title}>Lo que tienes hoy</AppText>
          </View>
        </View>
        <View style={styles.counter}>
          <AppText style={styles.counterValue}>{ingredientes.length}</AppText>
          <AppText style={styles.counterLabel}>TOTAL</AppText>
        </View>
      </View>

      {/* BUSCADOR REAL */}
      <View style={styles.addCard}>
        <View style={styles.addCardHeader}>
          <View style={styles.addIconBox}>
            <MaterialCommunityIcons name="magnify" size={20} color="#F2B35B" />
          </View>
          <View style={styles.addHeaderContent}>
            <AppText style={styles.addTitle}>Buscar ingrediente</AppText>
            <AppText style={styles.addSubtitle}>Busca en todo el catálogo de Chef Luna.</AppText>
          </View>
        </View>

        <View style={styles.inputBlock}>
          <AppInput
            value={ingrediente}
            onChangeText={setIngrediente}
            placeholder="Ej. queso, chile, pollo, café..."
            onSubmitEditing={handleAgregar}
          />

          {/* RESULTADOS DE BÚSQUEDA */}
          {ingrediente.trim().length > 0 && (
            <View style={styles.searchResults}>
              <View style={styles.searchResultsHeader}>
                <View>
                  <AppText style={styles.searchResultsKicker}>RESULTADOS</AppText>
                  <AppText style={styles.searchResultsTitle}>
                    {resultadosBusqueda.length === 1 ? '1 ingrediente encontrado' : `${resultadosBusqueda.length} ingredientes encontrados`}
                  </AppText>
                </View>
                <MaterialCommunityIcons name="database-search-outline" size={20} color="#A98368" />
              </View>

              {resultadosBusqueda.length === 0 ? (
                <View style={styles.noResults}>
                  <MaterialCommunityIcons name="food-off-outline" size={24} color="#A98368" />
                  <View style={styles.noResultsContent}>
                    <AppText style={styles.noResultsTitle}>No encontré ese ingrediente</AppText>
                    <AppText style={styles.noResultsText}>Si debería existir, revisaremos su nombre o aliases en el catálogo.</AppText>
                  </View>
                </View>
              ) : (
                resultadosBusqueda.map(item => {
                  const yaAgregado = ingredientes.includes(item.id);
                  return (
                    <Pressable
                      key={item.id}
                      disabled={yaAgregado}
                      onPress={() => agregarDesdeResultado(item)}
                      style={({ pressed }) => [
                        styles.searchResultItem,
                        yaAgregado && styles.searchResultItemAdded,
                        pressed && !yaAgregado && styles.searchResultItemPressed,
                      ]}
                    >
                      <View style={styles.searchResultIcon}>
                        <IngredientIcon id={item.id} size={38} />
                      </View>
                      <View style={styles.searchResultContent}>
                        <AppText style={styles.searchResultName} numberOfLines={1}>{item.nombre}</AppText>
                        <AppText style={styles.searchResultId} numberOfLines={1}>{item.id}</AppText>
                        {item.aliases.length > 0 && (
                          <AppText style={styles.searchResultAlias} numberOfLines={1}>
                            También: {item.aliases.slice(0, 3).join(', ')}
                          </AppText>
                        )}
                      </View>
                      <View style={[styles.searchResultAction, yaAgregado && styles.searchResultActionAdded]}>
                        <MaterialCommunityIcons
                          name={yaAgregado ? 'check' : 'plus'}
                          size={16}
                          color={yaAgregado ? '#8FB276' : '#24150B'}
                        />
                      </View>
                    </Pressable>
                  );
                })
              )}
            </View>
          )}

          <AppButton variant="rustic" onPress={handleAgregar}>
            Agregar coincidencia
          </AppButton>
        </View>
      </View>

      {/* CATÁLOGO VISUAL (Cuando no hay búsqueda activa) */}
      {ingrediente.trim().length === 0 && (
        <View style={styles.catalogSection}>
          <View style={styles.catalogHeader}>
            <View>
              <AppText style={styles.catalogKicker}>EXPLORAR CATÁLOGO</AppText>
              <AppText style={styles.catalogTitle}>¿Qué más tienes?</AppText>
            </View>
            <MaterialCommunityIcons name="view-grid-outline" size={20} color="#A98368" />
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryChips}>
            {Object.keys(catalogoAgrupado).map(cat => (
              <Pressable
                key={cat}
                onPress={() => setCategoriaActiva(categoriaActiva === cat ? null : cat)}
                style={[styles.catChip, categoriaActiva === cat && styles.catChipActive]}
              >
                <AppText style={[styles.catChipText, categoriaActiva === cat && styles.catChipTextActive]}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1).replace(/_/g, ' ')}
                </AppText>
              </Pressable>
            ))}
          </ScrollView>

          {categoriaActiva && catalogoAgrupado[categoriaActiva] && (
            <View style={styles.catIngredientsGrid}>
              {catalogoAgrupado[categoriaActiva].map(item => {
                const yaAgregado = ingredientes.includes(item.id);
                return (
                  <Pressable
                    key={item.id}
                    disabled={yaAgregado}
                    onPress={() => agregarDesdeResultado(item)}
                    style={[styles.catGridItem, yaAgregado && styles.catGridItemAdded]}
                  >
                    <IngredientIcon id={item.id} size={28} />
                    <AppText numberOfLines={1} style={styles.catGridName}>{item.nombre}</AppText>
                    {!yaAgregado && <MaterialCommunityIcons name="plus-circle" size={18} color="#F2B35B" />}
                    {yaAgregado && <MaterialCommunityIcons name="check-circle" size={18} color="#8FB276" />}
                  </Pressable>
                );
              })}
            </View>
          )}
        </View>
      )}

      {/* INGREDIENTES RÁPIDOS */}
      {rapidosDisponibles.length > 0 && (
        <View style={styles.quickSection}>
          <View style={styles.quickHeader}>
            <View>
              <AppText style={styles.quickKicker}>ACCESO RÁPIDO</AppText>
              <AppText style={styles.quickTitle}>¿También tienes alguno?</AppText>
            </View>
            <MaterialCommunityIcons name="plus" size={20} color="#A98368" />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickRow}>
            {rapidosDisponibles.map(item => {
              const encontrado = buscarIngredientesCatalogo(item)[0];
              const id = encontrado?.id ?? item;
              const nombre = encontrado?.nombre ?? obtenerIngrediente(item)?.nombre ?? item;

              return (
                <Pressable
                  key={item}
                  onPress={() => agregarRapido(item)}
                  style={({ pressed }) => [styles.quickChip, pressed && styles.quickChipPressed]}
                >
                  <IngredientIcon id={id} size={34} />
                  <AppText numberOfLines={1} ellipsizeMode="tail" style={styles.quickItem}>
                    {nombre}
                  </AppText>
                  <View style={styles.quickPlus}>
                    <MaterialCommunityIcons name="plus" size={13} color="#24150B" />
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      )}

      {/* DIVISOR */}
      {ingredientes.length > 0 && (
        <View style={styles.inventoryDivider}>
          <View style={styles.inventoryDividerLine} />
          <AppText style={styles.inventoryDividerText}>TU INVENTARIO</AppText>
          <View style={styles.inventoryDividerLine} />
        </View>
      )}

      {/* CATEGORÍAS (INVENTARIO ACTUAL) */}
      {CATEGORIAS.map(categoria => {
        const lista = despensaAgrupada[categoria.key as keyof typeof despensaAgrupada] ?? [];
        return (
          <View key={categoria.key}>
            {renderCategoria(categoria.titulo, categoria.descripcion, lista)}
          </View>
        );
      })}

      {/* ESTADO VACÍO */}
      {ingredientes.length === 0 && (
        <View style={styles.emptyInventory}>
          <View style={styles.emptyInventoryIcon}>
            <MaterialCommunityIcons name="fridge-outline" size={32} color="#F2B35B" />
          </View>
          <AppText style={styles.emptyInventoryTitle}>Todavía no sabemos qué tienes</AppText>
          <AppText style={styles.emptyInventoryText}>
            Busca cualquier ingrediente del catálogo o explora las categorías. Cada ingrediente ayuda a Chef Luna a entender mejor tu cocina.
          </AppText>
        </View>
      )}

      {/* AYUDA */}
      {ingredientes.length > 0 && (
        <View style={styles.helpBox}>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={20} color="#F2B35B" />
          <AppText style={styles.helpText}>
            Toca cualquier ingrediente de tu inventario para eliminarlo.
          </AppText>
        </View>
      )}

    </View>
  );
}


// ======================================================
// 🎨 STYLES
// ======================================================

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1410',
    borderRadius: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#3B2920',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#382419',
    borderWidth: 1,
    borderColor: '#795137',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  kicker: {
    color: '#C17D48',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.6,
  },
  title: {
    color: '#FFF3DD',
    fontSize: 21,
    fontWeight: '900',
    marginTop: 3,
  },
  counter: {
    minWidth: 54,
    height: 54,
    borderRadius: 17,
    backgroundColor: '#271A14',
    borderWidth: 1,
    borderColor: '#563A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  counterValue: {
    color: '#F2B35B',
    fontSize: 20,
    fontWeight: '900',
  },
  counterLabel: {
    color: '#8D715D',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 1,
  },
  addCard: {
    marginTop: 18,
    padding: 16,
    backgroundColor: '#251A14',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#503629',
  },
  addCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addIconBox: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: '#392419',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },
  addHeaderContent: {
    flex: 1,
  },
  addTitle: {
    color: '#F8E7D2',
    fontSize: 15,
    fontWeight: '900',
  },
  addSubtitle: {
    color: '#9E806A',
    fontSize: 11,
    marginTop: 2,
  },
  inputBlock: {
    marginTop: 15,
    gap: 10,
  },
  searchResults: {
    backgroundColor: '#1B120E',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#493126',
    overflow: 'hidden',
  },
  searchResultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#38271F',
  },
  searchResultsKicker: {
    color: '#C17D48',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.4,
  },
  searchResultsTitle: {
    color: '#EAD8C5',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 2,
  },
  searchResultItem: {
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#34241D',
  },
  searchResultItemPressed: {
    backgroundColor: '#2B1D16',
  },
  searchResultItemAdded: {
    opacity: 0.55,
  },
  searchResultIcon: {
    marginRight: 10,
  },
  searchResultContent: {
    flex: 1,
    minWidth: 0,
  },
  searchResultName: {
    color: '#FFF0DE',
    fontSize: 13,
    fontWeight: '900',
  },
  searchResultId: {
    color: '#9B7D68',
    fontSize: 9,
    marginTop: 2,
  },
  searchResultAlias: {
    color: '#765F50',
    fontSize: 8,
    marginTop: 2,
  },
  searchResultAction: {
    width: 30,
    height: 30,
    borderRadius: 99,
    backgroundColor: '#F2B35B',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  searchResultActionAdded: {
    backgroundColor: '#263324',
    borderWidth: 1,
    borderColor: '#4E6848',
  },
  noResults: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 11,
  },
  noResultsContent: {
    flex: 1,
  },
  noResultsTitle: {
    color: '#EBD8C5',
    fontSize: 12,
    fontWeight: '900',
  },
  noResultsText: {
    color: '#927663',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 2,
  },
  
  // ESTILOS NUEVOS DEL CATÁLOGO
  catalogSection: {
    marginTop: 22,
    padding: 16,
    backgroundColor: '#251A14',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#503629',
  },
  catalogHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  catalogKicker: {
    color: '#A46D45',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  catalogTitle: {
    color: '#F0DDC8',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 2,
  },
  categoryChips: {
    gap: 8,
    paddingBottom: 4,
      paddingHorizontal: 16,
  },
  catChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#2B1D16',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#5A3D2C',
  },
  catChipActive: {
    backgroundColor: '#F2B35B',
    borderColor: '#F2B35B',
  },
  catChipText: {
    color: '#D7A86E',
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  catChipTextActive: {
    color: '#24140A',
  },
  catIngredientsGrid: {
    marginTop: 15,
    gap: 8,
  },
  catGridItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B120E',
    padding: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3B2920',
    gap: 10,
  },
  catGridItemAdded: {
    opacity: 0.6,
    backgroundColor: '#15100C',
  },
  catGridName: {
    flex: 1,
    color: '#FFF0DE',
    fontSize: 13,
    fontWeight: '700',
  },

  // QUICK SECTION
  quickSection: {
    marginTop: 22,
  },
  quickHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quickKicker: {
    color: '#A46D45',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  quickTitle: {
    color: '#F0DDC8',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 2,
  },
  quickRow: {
    paddingTop: 13,
    paddingRight: 10,
    gap: 9,
  },
  quickChip: {
    minWidth: 142,
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2B1D16',
    borderWidth: 1,
    borderColor: '#5A3D2C',
    borderRadius: 18,
    paddingHorizontal: 10,
    gap: 4,
  },
  quickChipPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  quickItem: {
    flex: 1,
    color: '#F4E1CA',
    fontSize: 11,
    fontWeight: '800',
    marginLeft: 8,
  },
  quickPlus: {
    width: 22,
    height: 22,
    borderRadius: 99,
    backgroundColor: '#F2B35B',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  inventoryDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 26,
    marginBottom: 22,
  },
  inventoryDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#3B2920',
  },
  inventoryDividerText: {
    color: '#806653',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.6,
  },
  categoryBlock: {
    marginBottom: 25,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
  },
  categoryIcon: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: '#302017',
    borderWidth: 1,
    borderColor: '#4F3528',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  categoryHeaderText: {
    flex: 1,
  },
  categoryTitle: {
    color: '#F2DCC4',
    fontSize: 14,
    fontWeight: '900',
  },
  categoryDescription: {
    color: '#8E725F',
    fontSize: 9,
    marginTop: 1,
  },
  categoryCount: {
    minWidth: 28,
    height: 28,
    borderRadius: 99,
    backgroundColor: '#302017',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryCountText: {
    color: '#C9976D',
    fontSize: 10,
    fontWeight: '900',
  },
  ingredientsRow: {
    gap: 9,
    paddingRight: 12,
  },
  ingredientCard: {
    width: 166,
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#251A14',
    borderWidth: 1,
    borderColor: '#483126',
    borderRadius: 18,
    padding: 10,
    position: 'relative',
  },
  ingredientCardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
  ingredientIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#2E1E15',
    borderWidth: 1,
    borderColor: '#5A3D2C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },
  ingredientInfo: {
    flex: 1,
    paddingRight: 13,
  },
  ingredientName: {
    color: '#FFF1DF',
    fontSize: 12,
    fontWeight: '900',
  },
  ingredientStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  availableDot: {
    width: 6,
    height: 6,
    borderRadius: 99,
    backgroundColor: '#8FB276',
    marginRight: 5,
  },
  availableText: {
    color: '#8FB276',
    fontSize: 8,
    fontWeight: '800',
  },
  removeButton: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 20,
    height: 20,
    borderRadius: 99,
    backgroundColor: '#38241B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyInventory: {
    marginTop: 25,
    backgroundColor: '#241913',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#493127',
    padding: 24,
    alignItems: 'center',
  },
  emptyInventoryIcon: {
    width: 62,
    height: 62,
    borderRadius: 20,
    backgroundColor: '#342219',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyInventoryTitle: {
    color: '#FFF3DD',
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 15,
  },
  emptyInventoryText: {
    color: '#A88B74',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 7,
  },
  helpBox: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#241A14',
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: '#463229',
    padding: 13,
    gap: 9,
  },
  helpText: {
    flex: 1,
    color: '#987D69',
    fontSize: 10,
    lineHeight: 15,
    fontWeight: '700',
  },
});