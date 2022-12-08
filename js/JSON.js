 const json ={
    cadena: "neider",
    numero: 18,
    boleano: true,
    arreglo: [1,2,3],
    objeto: {
        email: "lpzneider@gmail.com"
    }
 }

 console.log(JSON.parse("[]"))
 console.log(JSON.parse("{}"))
 console.log(JSON.parse("null"))
 console.log(JSON.parse("45"))
 console.log(JSON.parse("false"))
 
 
 console.log(JSON.stringify(json))
 console.log(JSON.parse('{"cadena":"neider","numero":18,"boleano":true,"arreglo":[1,2,3],"objeto":{"email":"lpzneider@gmail.com"}}'))