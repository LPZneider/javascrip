// Temporizadores (setTimeout & setInterval)
/*
 console.log("inicio")
 setTimeout(()=>{
    console.log("esto se ejecuta una sola vez")
}, 3000)

setInterval(()=>{
    console.log("esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
    
}, 5000) 

// contrapartes

let temporizador = setTimeout(()=>{
    console.log("esto se ejecuta una sola vez")
}, 3000)

clearTimeout(temporizador) 

 let temporizador = setInterval(()=>{
    console.log("esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
}, 5000)

clearInterval(temporizador)  */

// Asincronía y el Event Loop
/*      Procesamiento Single thread y Multi thread.
     Operaciones de CPU y Operaciones de I / O.
     Operaciones Concurrentes y Paralelas.
     Operaciones Bloqueantes y No Bloqueantes.
     Operaciones Síncronas y Asíncronas.

     Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, (single thread) para operaciones de entrada y salida (input/output). 
     


    
    //Código Síncrono Bloquenate
    (() => {
      console.log("Código Síncrono");
      console.log("Inicio");

      function dos() {
        console.log("Dos");
      }

      function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
      }

      uno();
      console.log("Fin");
    })();

    console.log("********************");

    //Código Asíncrono No Bloquenate
    (() => {
      console.log("Código Asíncrono");
      console.log("Inicio");

      function dos() {
        setTimeout(function () {
          console.log("Dos");
        }, 1000);
      }

      function uno() {
        setTimeout(function () {
          console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
      }

      uno();
      console.log("Fin");
    })(); 
    */

// callbacks
/* 
function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}
cuadradoCallback(5, (value, result) => {
  console.log("inicia callback");
  console.log(`callback: ${value}, ${result}`);
  cuadradoCallback(10, (value, result) => {
    console.log(`callback: ${value}, ${result}`);
    cuadradoCallback(15, (value, result) => {
      console.log(`callback: ${value}, ${result}`);
      cuadradoCallback(20, (value, result) => {
        console.log(`callback: ${value}, ${result}`);
        cuadradoCallback(25, (value, result) => {
          console.log(`callback: ${value}, ${result}`);
          cuadradoCallback(30, (value, result) => {
            console.log(`callback: ${value}, ${result}`);
          });
        });
      });
    });
  });
}); */
// promesas
/* 
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`error el valor ${value} no es un numero`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
.then(obj => {
    console.log("inicio de la promesa")
    console.log(obj);
    return cuadradoPromise(1);
  })
  .then(obj => {
    console.log(obj);
    return cuadradoPromise(2);
  })
  .then(obj => {
    console.log(obj);
    return cuadradoPromise(3);
  })
  .then(obj => {
    console.log(obj);
    return cuadradoPromise(4);
  })
  .then(obj => {
    console.log(obj);
    return cuadradoPromise(5);
  })
  .then(obj => {
    console.log(obj);
    return console.log("fin de la promesa")
  })
  .catch((err) => console.error(err));
 */

// Async - Await
/* 
function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`error el valor "${value}" no es un numero`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
} 

async function funcionasincrona (){
  try {
    console.info("inicio Asyc funcion");

    let obj = await cuadradoPromise(0)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(1)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(2)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(3)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(4)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(5)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)

    console.log("fin de la funcion asincrona")

  } catch (err) {
    console.error(err)
  }
}


const funcionasincronaE = async () =>{
  try {
    console.info("inicio Asyc funcion");

    let obj = await cuadradoPromise(6)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(7)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(8)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(9)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(10)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(11)
    console.log(`Async funtion: ${obj.value}, ${obj.result}`)
    
    console.log("fin de la funcion asincrona")
    
  } catch (err) {
    console.error(err)
  }
}
funcionasincrona()
funcionasincronaE()
 */

