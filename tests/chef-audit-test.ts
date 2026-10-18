import { auditoriaChef } from '@/services/chef-audit';


const resultado =
auditoriaChef();


console.log(
  resultado
);

if (!resultado.perfecto) {
  throw new Error(`La auditoría encontró ${resultado.errores} recetas con problemas.`);
}
