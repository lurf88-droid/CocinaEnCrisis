/* global __dirname */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Ejecuta la lógica local sin arrancar Android ni escribir archivos compilados.
function entorno({ region = 'tijuana', lectura = async () => null, escritura = async () => {}, sustituciones = {} } = {}) {
  const cache = new Map();
  const efectos = [];
  const cambios = [];
  const avisos = [];
  const react = {
    createContext: () => ({ Provider: 'Provider' }),
    useState: (initial) => [initial === 'nacional' ? region : initial, value => cambios.push(value)],
    useEffect: fn => efectos.push(fn),
    useMemo: fn => fn(),
    useCallback: fn => fn,
  };
  const mocks = {
    react,
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) },
    'react-native': { Alert: { alert: (...args) => avisos.push(args) }, View: 'View', ActivityIndicator: 'ActivityIndicator' },
    'expo-router': { Redirect: 'Redirect' },
    '@react-native-async-storage/async-storage': { getItem: lectura, setItem: escritura },
  };
  function cargar(nombre, base = path.resolve(__dirname, '..')) {
    if (sustituciones[nombre]) return sustituciones[nombre];
    if (mocks[nombre]) return mocks[nombre];
    const ruta = nombre.startsWith('@/')
      ? path.resolve(__dirname, '..', nombre.slice(2))
      : path.resolve(base, nombre);
    const archivo = [ruta, `${ruta}.ts`, `${ruta}.tsx`, path.join(ruta, 'index.ts')]
      .find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    assert.ok(archivo, `No se encontró ${nombre}`);
    if (/\.(webp|png|jpg)$/.test(archivo)) return archivo;
    if (cache.has(archivo)) return cache.get(archivo).exports;
    const modulo = { exports: {} };
    cache.set(archivo, modulo);
    const codigo = ts.transpileModule(fs.readFileSync(archivo, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
      fileName: archivo,
    }).outputText;
    vm.runInNewContext(codigo, {
      module: modulo, exports: modulo.exports,
      require: dep => cargar(dep, path.dirname(archivo)),
      __DEV__: false, console, alert: (...args) => avisos.push(args),
    }, { filename: archivo });
    return modulo.exports;
  }
  return { cargar, efectos, cambios, avisos };
}


module.exports = { entorno };
