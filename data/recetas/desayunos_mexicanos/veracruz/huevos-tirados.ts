import type { Receta } from '@/types/receta';


export const HUEVOS_TIRADOS: Receta = {


id:'huevos-tirados',


titulo:'Huevos tirados veracruzanos',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/veracruz/huevos-tirados.webp'
),


descripcion:

'Desayuno tradicional veracruzano donde los frijoles, huevo y tortilla se combinan para crear un platillo económico, nutritivo y lleno de identidad culinaria.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Sotavento Veracruzano',

estadoOrigen:'Veracruz',

tradicion:'cocina veracruzana tradicional basada en frijol, huevo, chile y maíz'

},


tecnicaPrincipal:

'sofrito, integración de frijoles y cocción controlada del huevo',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',
rolCulinario: 'plato_principal',


porciones:4,


tiempoMinutos:25,


dificultad:'facil',


nivelChef:1,



// 🧺 INGREDIENTES

ingredientes:[


{

id:'huevo',

cantidad:8,

unidad:'pieza'

},


{

id:'frijol_negro',

cantidad:0.400,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.080,

unidad:'kg'

},


{

id:'chile_serrano',

cantidad:2,

unidad:'pieza'

},


{

id:'aceite_vegetal',

cantidad:0.030,

unidad:'litro'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

},


{

id:'tortilla_maiz',

cantidad:12,

unidad:'pieza'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'control del punto correcto del huevo',

'equilibrio entre proteína animal y legumbre',

'construcción de sabor mediante sofrito',

'aprovechamiento de ingredientes económicos',

'identidad regional de la cocina veracruzana'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara los frijoles base',

descripcion:

'Calienta los frijoles negros cocidos y machácalos ligeramente hasta obtener una textura cremosa pero con cuerpo.',

tiempo:'8 minutos',

consejo:

'La textura ideal no es una sopa ni un puré completamente liso; debe sentirse el frijol.',

porQue:

'El frijol será la base que dará sabor, textura y rendimiento al desayuno.',

mensajeChef:

'La cocina tradicional convierte ingredientes sencillos en grandes platos.',

objetivo:

'Crear una base cremosa para integrar el huevo.',

nivelImportancia:'clave',

señalCorrecta:

'Los frijoles tienen textura suave y pueden cubrir ligeramente una cuchara.',

errorEvitar:

'Agregar demasiado líquido y perder la consistencia del platillo.'

},



{

numero:2,

titulo:'Construye el sabor veracruzano',

descripcion:

'Calienta el aceite y cocina la cebolla junto con el chile serrano hasta que estén suaves y aromáticos. Agrega los frijoles.',

tiempo:'5 minutos',

consejo:

'El fuego medio permite desarrollar sabor sin quemar la cebolla.',

porQue:

'El sofrito crea una base aromática que transforma ingredientes simples.',

mensajeChef:

'Antes de buscar ingredientes costosos, aprende a construir sabor.',

objetivo:

'Desarrollar aromas antes de integrar el huevo.',

nivelImportancia:'clave',

señalCorrecta:

'La cebolla está transparente y tiene aroma dulce.',

errorEvitar:

'Quemar la cebolla porque aporta amargor.'

},



{

numero:3,

titulo:'Integra los huevos',

descripcion:

'Bate ligeramente los huevos y agrégalos sobre los frijoles. Cocina mezclando suavemente hasta que estén cocidos.',

tiempo:'7 minutos',

consejo:

'Retira cuando todavía estén ligeramente húmedos para conservar suavidad.',

porQue:

'El calor residual termina la cocción y evita un huevo seco.',

mensajeChef:

'Dominar un huevo sencillo es una de las bases de cualquier cocinero.',

objetivo:

'Lograr una mezcla cremosa de huevo y frijol.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué no debemos cocinar demasiado el huevo?',

respuestaEsperada:

'Porque pierde humedad y queda seco.',

señalCorrecta:

'El huevo está cocido pero conserva textura suave.',

errorEvitar:

'Dejarlo demasiado tiempo al fuego.'

},



{

numero:4,

titulo:'Sirve con tortillas calientes',

descripcion:

'Sirve los huevos tirados acompañados de tortillas de maíz recién calentadas.',

tiempo:'5 minutos',

consejo:

'La tortilla caliente completa la experiencia tradicional mexicana.',

porQue:

'El maíz es un elemento fundamental en la alimentación veracruzana.',

mensajeChef:

'Una receta también cuenta la historia de una región.',

objetivo:

'Conservar la identidad tradicional del desayuno.',

nivelImportancia:'normal',

señalCorrecta:

'El plato tiene equilibrio entre huevo, frijol y tortilla.',

errorEvitar:

'Servir sin acompañamiento de maíz porque pierde parte de su esencia.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Puedes acompañar con queso fresco, salsa o aguacate, aunque la versión tradicional se basa en huevo, frijol y tortilla.',


ahorro:

'Es un desayuno económico de alto rendimiento porque combina ingredientes accesibles con buena cantidad de proteína.',


errorComun:

'Cocinar demasiado el huevo o dejar los frijoles demasiado líquidos.',



tags:[

'veracruz',

'sotavento',

'desayuno_mexicano',

'economica',

'casera',

'proteina'

],



tipoComida:'barata',


popularidad:85,



historiaChef:

'Los huevos tirados representan la cocina cotidiana veracruzana, donde ingredientes sencillos como frijol, huevo y tortilla se transforman en un desayuno completo, nutritivo y lleno de tradición.',



trucoChef:

'La clave está en la textura del frijol: debe ser cremoso pero conservar presencia para envolver el huevo.',



ocasion:[

'diario',

'familia',

'crisis'

],



sustituciones:[

{

falta:'frijol negro',

reemplazo:'frijol bayo o frijol pinto'

},

{

falta:'chile serrano',

reemplazo:'salsa verde disponible'

},

{

falta:'aceite vegetal',

reemplazo:'manteca de cerdo tradicional'

}

],



chefInicio:

'Hoy vamos a demostrar que la cocina mexicana más poderosa muchas veces nace de ingredientes humildes.',



chefFinal:

'Aprendiste un desayuno veracruzano tradicional usando técnicas sencillas pero importantes.',



señalesExito:{

vista:

'La mezcla tiene apariencia cremosa con huevo integrado.',

olor:

'Aroma de frijol cocido, cebolla y chile fresco.',

textura:

'Huevo suave, frijoles cremosos y tortilla firme.'

},



rescates:[

{

problema:'El huevo quedó seco',

solucion:'Retíralo antes del fuego y deja que termine con el calor restante.'

},


{

problema:'Los frijoles quedaron aguados',

solucion:'Cocínalos unos minutos más hasta concentrar la textura.'

}


]



};