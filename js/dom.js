/*  let texto =
  "Soy campesino de los berracos Y soy arriero de profecion Me importa un culo hay no me interesa Yo no motivo a ningun guuevon";

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */

// nodos elementos y selectores
/*  console.log(document)
  console.log(document.head)
  console.log(document.body)
  console.log(document.documentElement)
  console.log(document.charset)
  console.log(document.title)
  console.log(document.links)
  console.log(document.images)
  console.log(document.forms)
  console.log(document.styleSheets)
  console.log(document.scripts)
  setTimeout(()=>{
    console.log(document.getSelection().toString())
  },5000)
  document.write("<h2> hola mundo desde el DOM</h2>") 
 
  console.log(document.getElementsByTagName("li"))
  console.log(document.getElementsByClassName("card"))
  console.log(document.getElementsByName("nombre"))
  console.log(document.getElementById("menu"));
  console.log(document.querySelector("#menu"));
  console.log(document.querySelector("a"));
  console.log(document.querySelectorAll("a"));
  console.log(document.querySelectorAll("a").length);
  document.querySelectorAll("a").forEach((el)=> console.log(el));

  console.log(document.querySelector(".card"));
  console.log(document.querySelectorAll(".card"));
  console.log(document.querySelector("#menu li"));
  console.log(document.querySelectorAll("#menu li"));
  */

// Atributos y Data-Attributes
/*  console.log(document.documentElement.lang);
 console.log(document.documentElement.getAttribute("lang"));
 console.log(document.querySelector(".link-dom").href);
 console.log(document.querySelector(".link-dom").getAttribute("href"));
 
 document.documentElement.lang = "es"
 console.log(document.documentElement.lang);
 document.documentElement.setAttribute("lang", "es-CO");
 console.log(document.documentElement.lang);

 const $linkDOM = document.querySelector(".link-dom");
 
 $linkDOM.setAttribute("target", "_blank")
 $linkDOM.setAttribute("rel", "noopener")
 $linkDOM.setAttribute("href", "https:/youtube.com/jonmircha")
 console.log($linkDOM.hasAttribute("target"))
 $linkDOM.removeAttribute("target");
 console.log($linkDOM.hasAttribute("target"))
 
 //  Data-Attributes
 console.log($linkDOM.getAttribute("data-description"))
 console.log($linkDOM.dataset);
 console.log($linkDOM.dataset.description);
 $linkDOM.setAttribute("data-description", "nueva cosa")
 console.log($linkDOM.dataset.description);
 $linkDOM.dataset.description = "suscribetea mi canal"
 console.log($linkDOM.dataset.description);
  */

//  estilos y variables CSS
/*  const $linkDOM = document.querySelector(".link-dom");

 console.log($linkDOM.style)
 console.log($linkDOM.getAttribute("style"))
 console.log($linkDOM.style.backgroundColor)
 console.log($linkDOM.style.color)
 console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"))

 $linkDOM.style.setProperty("text-decoration", "none");
 $linkDOM.style.setProperty("display", "block");
 $linkDOM.style.width = "50%";
 $linkDOM.style.textAlign = "center";
 $linkDOM.style.margin = "16px auto"
 $linkDOM.style.padding = "1rem";
 $linkDOM.style.borderRadius = ".5rem";

 console.log($linkDOM.style)
 console.log($linkDOM.getAttribute("style"))
 console.log(getComputedStyle($linkDOM))
 */

//  variables CSS - Custom Properties CSS
/* const $html = document.documentElement,     
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varDarkColor,varYellowColor)

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");


$body.style.setProperty("background-color", varDarkColor);

 */

// Clases CSS
/* const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
$card.classList.replace("rotate-45", "rotate-135")
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")
// $card.classList.add("sepia")
$card.classList.toggle("sepia","opacity-80")
console.log($card.classList);
 */

// texto y HTML
/* const $whatISdom = document.getElementById("que-es");

let text =`
<p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

$whatISdom.innerText = text
$whatISdom.textContent = text
$whatISdom.innerHTML= text
$whatISdom.outerHTML = text */

//  Traversing: Recorriendo el DOM
/* const $cards = document.querySelector(".cards");
console.log($cards)
console.log($cards.children)
console.log($cards.children[3])
console.log($cards.parentElement)
console.log($cards.firstElementChild)
console.log($cards.lastElementChild)
console.log($cards.previousElementSibling)
console.log($cards.nextElementSibling)
console.log($cards.closest("div"))
console.log($cards.closest("body"))
console.log($cards.children[3].closest("section")) */

// creando elementos y fragmentos
/* 
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");


$img.setAttribute("src","https://placeimg.com/200/200/animals")
$img.setAttribute("alt","animals")
$figure.classList.add("card")
$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

// document.write("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

 estaciones.forEach(el =>{
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li)
});

document.write("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
const $frag = document.createDocumentFragment()
estaciones.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $frag.appendChild($li) 
});
$ul.appendChild($frag);

document.body.appendChild($ul); */

// templates HTML
/*  const $cards = document.querySelector(".cards"),
  $template = document.getElementById("tem").content,
  $frag = document.createDocumentFragment(),
  cardContent =[
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    }
  ];

  cardContent.forEach(el =>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true)

    $frag.appendChild($clone);
  });

  $cards.appendChild($frag)
   */

// modificando elementos (old style)
/* 
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $frag = document.createDocumentFragment(),
  arr =[
    {
      title: "any",
      img: "https://placeimg.com/200/200/any",
    
    }
  ];

arr.forEach(el =>{
  $img.setAttribute("src",el.img);
  $img.setAttribute("alt",el.title);
  const $figcaptionText = document.createTextNode(el.title)
  $figcaption.appendChild($figcaptionText);
  $frag.appendChild($img)
  $frag.appendChild($figcaption)

  let $clone = document.importNode($frag, true)
  $newCard.appendChild($clone)
});

$newCard.classList.add("card")


// $cards.appendChild($newCard)
// $cards.removeChild($newCard)
// $cards.replaceChild($newCard, $cards.children[1])
// $cards.insertBefore($newCard, $cards.children[1])

document.body.appendChild($cloneCards);
 */

//  modificando elementos (cool style)
/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contenCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); 
//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);
 */

// Manejadores de Eventos
/*  📝 Los Eventos

    👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

    👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
    
    👉 Hay 3 maneras de definir los Eventos en JS : 
  

     
   //1️⃣ COMO ATRIBUTO DEL HTML
    
   //👀 Muy importante: 
   /*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
    👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
   
    function holaMundo(){
      alert('Holaaa Mundo')
      console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.
      
     //👉 type.- es el tipo de evento q se desencadeno
     //👉 target.- es el elemento que origino el evento
     
     //👉 Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho elemento y los q estan en null son eventos q no tienen definida dicha función en dichos eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo
   }

   
  //2️⃣ COMO MANEJADOR SEMÁNTICO
   
  //👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
  //👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
   const $eventoSemantico = document.getElementById('evento-semantico')
   $eventoSemantico.onclick = holaMundo //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.
   
  //👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
    $eventoSemantico.onclick = function(e){  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
       alert(`Hola Manejador de Evento Semántico`)
       console.log(e)
       console.log(event)
    }
  
     
  //3️⃣ COMO MANEJADOR MÚLTIPLE
  
  //👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
  const $eventoMultiple = document.getElementById('evento-multiple')
  //👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
  // 1° Nombre de evento
  // 2° Función q se va a ejecutar, pero sin parentesis
  $eventoMultiple.addEventListener('click', holaMundo)
  
  //👇 tmb podemos trabajar con una arrow function
  $eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
     alert(`Hola Manejador de Evento Múltiple`)
     console.log(e)
     console.log(e.type)
     console.log(e.target)
     console.log(event)
  } )
    
  //📝NOTA:
  //👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento   
  //👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos
  //👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando
  //👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.
  //👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'

  */

//  Eventos con Parámetros y Remover Eventos
/* 
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");
function saludar(Nombre = "mamalon") {
  alert(`hola ${Nombre} - ${event}`);
}
$eventoMultiple.addEventListener("click", (el) => {
  alert("holaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(el);
  console.log(el.type);
  console.log(el.target);
  console.log(event);
});
$eventoMultiple.addEventListener("click", () => saludar());

const removerDobleClick = (e) => {
  alert(`eliminando evento tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", removerDobleClick);
 */


