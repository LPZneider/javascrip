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
/* 
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

 */

// Maps
/* let mapa = new Map();
mapa.set("nombre","neider");
mapa.set("Apellido","lopez");
mapa.set("Edad",18);
console.log(mapa)
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("Apellido"));
console.log(mapa.get("Apellido"));
mapa.set("nombre","Neider López")
console.log(mapa);
mapa.delete("Apellido")
console.log(mapa);
mapa.set(19,"aaaa")
mapa.set(false,"amigos")
mapa.set({},{ })

for (const [key, value] of mapa) {
  console.log(`Llave: ${key}, \n Valor: ${value} `)
}

const mapa2 = new Map([
  ["nombre","mara"],
  ["animal","perro"]
])
console.log(mapa2)

const llavesMapa2 = [... mapa2.keys()]
const valoresMapa2 = [... mapa2.values()]

console.log(llavesMapa2)
console.log(valoresMapa2)
 */

// 