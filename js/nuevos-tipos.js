// Symbols
/* 
let id = Symbol("id");
let id2 = Symbol("id");

console.log(id === id2);
console.log(id, id2);
console.log(typeof id, typeof id2);
console.clear();

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludo")
const persona = {
  [NOMBRE]: "neider lopez",
  edad: 18,
};
console.log(persona);

persona.NOMBRE = "alexis mancera";
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function (){
    console.log("holaaaaaaaa")
}

console.log(persona);
persona[SALUDAR]();

for (const propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}

console.log(Object.getOwnPropertySymbols(persona));
 */

// Sets
let set = new Set([1,2,33,33,4,5,6,7]);
console.log(set.size)
let set2 = new Set()
set2.add(1)
set2.add(1)
set2.add(1)
set2.add(2)
set2.add(3)
set2.add(4)
console.log(set2)
set2.delete(2)
console.log(set2)
set2.clear()
console.log(set2)
console.log(set.has(1))
console.log("***************INICIO*********************")
console.log(set.forEach( item =>console.log(item)))



