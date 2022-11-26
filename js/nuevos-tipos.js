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

// WeakSets & WeakMaps
/*
const ws = new WeakSet();

let valor1 = {"valor 1": 1}
let valor2 = {"valor 2": 2}
let valor3 = {"valor 3": 3}

ws.add(valor1)
ws.add(valor2)

console.log(ws)

console.log(ws.has(valor1))
console.log(ws.has(valor3))

ws.delete(valor2);
console.log(ws)

ws.add(valor2)
ws.add(valor3)

 console.log(ws)
setInterval(()=>console.log(ws), 1000);
setTimeout(()=> {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 1000)
 */
/* 
const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1,1)
wm.set(llave2,2)
console.log(wm)
console.log(wm.has(llave2))
console.log(wm.has(llave3))

console.log(wm.get(llave1))
console.log(wm.get(llave2))
console.log(wm.get(llave3))

wm.delete(llave2)
console.log(wm)

wm.set(llave2,2)
wm.set(llave3,3)
console.log(wm)

setInterval(()=>console.log(wm), 1000);
setTimeout(()=> {
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 1000)

 */

// terables & Iterators

