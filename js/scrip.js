// Strings
/* let nombre ='neider';

let apellido ='lopez';
let saludo = new String('hola mundo')
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irzure dolor in reprehenderit in voluptate velit esse cillum dolore ";

console.log(nombre, apellido, saludo);
console.log(
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes('dolor'),
    lorem.trim(),
    lorem.split(" "),
    lorem.split(",")

) */

// number
/* let a = 2;
let b = new Number(2);
let c = 7.19;
let d ="5.6"

console.log(a,b);
console.log(c.toFixed(1));
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c +  parseInt(d));
console.log(c + parseFloat(d)); */

// booleans
/* 
let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);
console.log(typeof verdadero, typeof falso)

console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(' ')); 
*/

// null undefined NaN
/* 
let indifinida ;
console.log(indifinida);

let nulo = null;

// NaN = Not a Number

let noEsUnNumero = 3 * "hola";
console.log(noEsUnNumero)
 */

// funciones
/* 
function devolver(){
    console.log("uno")
    return 19;
    console.log("dos")
    console.log("tres")
    return 1;
}

let valor= devolver();
console.log(valor);

function saludo(nombre, edad){
 console.log(`hola ${nombre} tu edad es de ${edad} años`)
}
saludo("perra",5)

// función declarada
declarada()
function declarada(){
    console.log("hola")
}
// funcion expresada BUENA PRACTICA
const expresada = function(){
    console.log("hello")
}
expresada()
 */

// arrays
/* 
const a = [];
const b =[1,true,"hola",['a','b','c']];

console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[3]);
console.log(b[3][2]);

const c = Array.of('hola','que','mas',1,2,3);
console.log(c);

const d = Array(100).fill(false);
console.log(d)

const colores = ['azul', 'amarilo','rojo'];
console.log(colores);

colores.push("negro");
console.log(colores);
 
colores.pop();
console.log(colores);

colores.forEach(function(el,index){
    console.log(`<li id=${index}> ${el} </li>`)
}) */

// objetos
/* const neider = {
    nombre: "neider alexis",
    edad: 17,
    pasatiempos:['ver series','estudiar','correr :3'],
    soltero: false,
    contacto:{
        email: "lpzneider@gmail.com",
        movil: 313313131313,
    },
    saludar:function(){
        console.log("hola :3")
    },
    supersaludo:function(){
        console.log(`hola ${this.nombre} tu edad es de ${this.edad} años y tu email es ${this.contacto.email} gracias`)
    }


}

neider.supersaludo();


try {
    let num = "s";
    throw new Error("el caracter introducido no es un numero");
} catch (error) { 
    console.log(error)
    
}  */

// destruturación
/* let numeros =[1,2,3]
const[uno,dos,tres]= numeros;
console.log(uno,dos,tres);

let peras = {
    manzana: 2,
    pera: 3,
    platano:9
}
let{pera,manzana,platano}=peras;
console.log(pera,manzana,platano); */

// objetos literales
/* let number = 17, nombre ="palo";

const persona ={
    number,
    nombre,
    saludar(){
        console.log(`hola ${nombre} tienes ${number} años`)
    }
}
console.log(persona)
persona.saludar(); */

// Parámetros REST & Operador Spread
/* function sumar (a,b,...c){
    let result = a +b;
    c.forEach(function(n){
        result += n
    });

    return result;
};

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));


const arra1 = [1,2,3,4], arra2=[5,6,7,8,9,0];

console.log(arra1,arra2);

const arra3 = [...arra1,...arra2];
console.log(arra3); */

// Arrow Function
/*  const arrawFuction = () => {
  texto de las funcion 
 }


const perro = {
    name: "mara",
    ladrar (){
        console.log("gua guaaa guaaa ")
        console.log(this)

    }
}

perro.ladrar();
 */

// prototipos
/* const animal = {
    name: "gata",
    sonar(){
        console.log("sueno por que estoy vivo")
    }
}
console.log(animal);
const animal2 = {
    name: "perra",
    sonar(){
        console.log("sueno por que estoy vivo")
    }
}
console.log(animal2); 

/ funcion constructota

 function Animal (name,genero) {
        this.name = name,
        this.genero = genero,

        this.sonar = function (){
            console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        }
}
 
function Animal (name,genero) {
    this.name = name,
    this.genero = genero
}


 Animal.prototype.sonar = function (){
    console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
}

const gato = new Animal("mechas","hembra"),
perra = new Animal("mara","hembra")


console.log(gato,perra);
gato.sonar();
*/

//Herencia Prototípica
/*
function Animal (name,genero) {
    this.name = name,
    this.genero = genero
}


 Animal.prototype.sonar = function (){
    console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
}



function Perro(name,genero,tamanio){
    this.super= Animal;
    this.super(name,genero);
    this.tamanio = tamanio
}
// herencia aqui 
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
// sobreescribir un metodo
Perro.prototype.sonar = function (){
    console.log("soy un perro ")
}
Perro.prototype.ladrar = function (){
    console.log("guaaau guau")
}

const gato = new Animal("mechas","hembra"), 
perra = new Perro("mara","hembra","mediana")


console.log(gato,perra);
gato.sonar(); */

// clases y herencia y Métodos estáticos, getters y setter
/*  class Animal {
  constructor(name, genero) {
    (this.name = name), (this.genero = genero);
  }
  sonar() {
    console.log("dos");
  }
  saludar() {
    console.log("hola");
  }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
      //con el método super() se manda a llamar el constructor de la clase padre
      super(nombre, genero);
      this.tamanio = tamanio;
      this.raza = null;
    }

    sonar() {
      console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
      console.log("Guauuu Guauuu!!!");
    }

    //un método estático se pueden ejecutar sin necesidad de instanciar la clase
    static queEres() {
      console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
    }

    //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza() {
      return this.raza;
    }

    set setRaza(raza) {
      this.raza = raza;
    }
  }

//   Perro.queEres();

  const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Gigante");

//   console.log(mimi);
//   mimi.saludar();
//   mimi.sonar();
//   console.log(scooby);
//   scooby.saludar();
//   scooby.sonar();
//   scooby.ladrar();
  Perro.queEres()
  console.log(scooby.getRaza);
  scooby.setRaza = "Grán Danés";
  console.log(scooby.getRaza); 
  */

// Objeto console
/*
console.error("Esto es un error");
    console.warn("Esto es un aviso");
    console.info("Esto es un mensje informativo");
    console.log("Un registro de lo que ha pasado en nuestra aplicación");

    let nombre = "Jon",
      apellido = "MirCha",
      edad = 35;

    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(nombre, apellido, edad);
    console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
    console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
    console.clear();
    console.log(window);
    console.log(document);
    console.dir(window);
    console.dir(document);
    console.clear();

    console.group("Cursos de @jonmircha en YouTube");
    console.log("Curso de JavaScript");
    console.log("Curso de Node.js");
    console.log("Curso de PWAs");
    console.log("Curso de Flexbox");
    console.log("Curso de Diseño y Programación Web");
    console.groupEnd();

    console.groupCollapsed("Cursos de @jonmircha en YouTube");
    console.log("Curso de JavaScript");
    console.log("Curso de Node.js");
    console.log("Curso de PWAs");
    console.log("Curso de Flexbox");
    console.log("Curso de Diseño y Programación Web");
    console.groupEnd();
    console.clear();
    console.log(console);
    console.table(Object.entries(console).sort());

    const numeros = [1, 2, 3, 4, 5],
      vocales = ["a", "e", "i", "o", "u"];

    console.table(numeros);
    console.table(vocales);

    const perro = {
      nombre: "Boni",
      raza: "Boxer",
      color: "cafe"
    }
    console.table(perro);
    console.clear();

    console.time('Cuanto tiempo tarda mi código');
    const arreglo = Array(1000000);

    for (let i = 0; i < arreglo.length; i++) {
      arreglo[i] = i;
    }

    console.timeEnd('Cuanto tiempo tarda mi código');
    //console.log(arreglo);

    console.clear();


    for (let i = 0; i <= 100; i++) {
      console.count("código for");
      console.log(i);
    }

    console.clear();

    let x = 3,
      y = 2,
      pruebaXY = "Se espera que X siempre sea menor que Y";

    console.assert(x < y, { x, y, pruebaXY }); */

// objeto date
/* console.log(Date())

let fecha = new Date();
console.log(fecha);

// dia del mes
console.log(fecha.getDate());
// mes del año 
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(Date.now());

let cumplealex = new Date(2003,9,20);
console.log(cumplealex) */

// objeto math
/* console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.99));
console.log(Math.ceil(7.199));
console.log(Math.floor(7.99));
console.log(Math.round(7.49));
console.log(Math.sqrt(7.49));
console.log(Math.pow(7,3));
console.log(Math.sign(-73)); */

// OPERADOR CORTOCIRCUITO
/* Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto

    Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
    

     console.log("cadena" || "Valor de la derecha");
     console.log(19 || "Valor de la derecha");
     console.log(true || "Valor de la derecha");
     console.log([] || "Valor de la derecha");
     console.log({} || "Valor de la derecha");
     console.log(false || "Valor de la derecha");
     console.log(null || "Valor de la derecha");
     console.log(undefined || "Valor de la derecha");
     console.log("" || "Valor de la derecha");
     console.log(-2 || "Valor de la derecha");
     console.log(0 || "Valor de la derecha");

     console.log(false && "Valor de la derecha");
     console.log(null && "Valor de la derecha");
     console.log(undefined && "Valor de la derecha");
     console.log("" && "Valor de la derecha");
     console.log(-2 && "Valor de la derecha");
     console.log(0 && "Valor de la derecha");

     console.log("cadena" && "Valor de la derecha");
     console.log(19 && "Valor de la derecha");
     console.log(true && "Valor de la derecha");
     console.log([] && "Valor de la derecha");
     console.log({} && "Valor de la derecha");
 */

// alert, confirm y prompt
/* 
// alert("esto es una alerta");
// confirm("esto es una confirmacion");
// prompt("esto es un aviso y le permite al usuario ingresar un valor");

let a = alert("esto es una alerta"),
  b = confirm("esto es una confirmacion"),
  c = prompt("esto es un aviso y le permite al usuario ingresar un valor");
console.log(a);
console.log(b);
console.log(c); */

// expresiones regulares
/* let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores, non deleniti dolorem totam quos corrupti hic repudiandae iure reiciendis? Ut aliquam labore harum in veritatis ipsam odit sed ab?"

let expReg = new RegExp("lorem","ig");
let expReg2 = /lorem{1,}/ig;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena)); */

//  Funciones Anónimas Autoejecutable  
/* (function () {
     console.log("mi primer funcion IIFE")
})();
(function (d,w,c) {
     console.log("mi segunda funcion IIFE")
     console.log(d)
     console.log(w)
     console.log(c)
     c.log("esto es un console.log")
})(document,window,console); */
