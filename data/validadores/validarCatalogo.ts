import { CATALOGO_INGREDIENTES } from '@/data/catalogo-ingredientes';



export function validarCatalogo(){


const errores:string[] = [];



// =================================
// IDS DUPLICADOS
// =================================


const ids = new Set<string>();


CATALOGO_INGREDIENTES.forEach(item=>{


if(ids.has(item.id)){

errores.push(
`❌ ID duplicado: ${item.id}`
);

}

ids.add(item.id);


});



// =================================
// NOMBRES DUPLICADOS
// =================================


const nombres = new Set<string>();


CATALOGO_INGREDIENTES.forEach(item=>{


const nombre =
item.nombre
.toLowerCase()
.trim();



if(nombres.has(nombre)){


errores.push(
`❌ Nombre duplicado: ${item.nombre}`
);


}


nombres.add(nombre);


});



// =================================
// ALIASES VACIOS
// =================================


CATALOGO_INGREDIENTES.forEach(item=>{


if(
!item.aliases ||
item.aliases.length===0
){


errores.push(
`❌ Sin aliases: ${item.nombre}`
);


}


});



// =================================
// PRECIOS
// =================================


CATALOGO_INGREDIENTES.forEach(item=>{


if(
!item.precioUnitario ||
item.precioUnitario<=0
){


errores.push(
`❌ Precio inválido: ${item.nombre}`
);


}


});



// =================================
// CATEGORIA
// =================================


const CATEGORIAS_VALIDAS = [

'despensa',

'refrigerador',

'lacteos',

'proteinas',

'verduras',

'frutas',

'especias',

'condimentos',

'panaderia',

'reposteria',

'bebidas',

'botanas',

'proteinas_vegetales',

'salsas_base',

'bases_culinarias',

'salsas',

'preparaciones',

'carnes',



];



CATALOGO_INGREDIENTES.forEach(item=>{


if (!CATEGORIAS_VALIDAS.includes(item.categoria)) {


errores.push(
`❌ Categoría inválida: ${item.nombre}`
);


}


});


// =================================
// DATOS PARA MOTOR DE RECETAS
// =================================


CATALOGO_INGREDIENTES.forEach(item=>{


if(!item.cocinas || item.cocinas.length===0){


errores.push(
`⚠️ Sin cocina asociada: ${item.nombre}`
);


}



if(!item.tecnicas || item.tecnicas.length===0){


errores.push(
`⚠️ Sin técnicas: ${item.nombre}`
);


}



if(!item.nivel){


errores.push(
`⚠️ Sin nivel: ${item.nombre}`
);


}


});



// =================================
// DUPLICADOS DE ALIAS
// =================================


const aliasesGlobal =
new Map<string,string>();



CATALOGO_INGREDIENTES.forEach(item=>{


item.aliases.forEach(alias=>{


const limpio =
alias
.toLowerCase()
.trim();



if(
aliasesGlobal.has(limpio)
){


errores.push(
`⚠️ Alias repetido "${alias}" usado en ${item.nombre} y ${aliasesGlobal.get(limpio)}`
);


}
else{


aliasesGlobal.set(
limpio,
item.nombre
);


}



});


});



// =================================
// RESULTADO
// =================================



if(errores.length===0){


console.log(
"🔥 CATÁLOGO CHEF LUNA: PERFECTO"
);



return true;


}



console.log(
`🚨 CATÁLOGO CON ${errores.length} PROBLEMAS`
);



errores.forEach(e=>console.log(e));



return errores;


}