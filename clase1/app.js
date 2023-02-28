// Ejercicio 1:
// Declarar variables con datos de un usuario (user, age, email)
// Mostrar estos datos por consola
// Mostrar el tipo de dato de cada variable por consola

// let age= 10;
// let user= "pepito";
// let email= "ada@.com";
// console.log(age);
// console.log(user);
// console.log(email);





// Ejercicio 2:
// Pedir al usuario sus datos personales (nombre, edad, pais, profesion)
// Mostrar esos datos por consola usando concatenacion
// Mostrar por consola la edad + 10
// let nombre= prompt("Cual es tu nombre?");
// let edad= prompt("Cual es tu edad?");
// let pais= prompt("Cual es tu pais?");

// let profesion= prompt("Cual es tu profesion?");

// let saludar= `Hola, soy ${nombre}, tengo ${parseInt(edad)+ 10}, soy de ${pais}, y soy ${profesion}`;
// console.log(saludar);



// Ejercicio 3:
// Tomar las variables del ejercicio 1 y mostrar un texto por consola, 
//por el documento y por un alert (hagan de a uno por vez, comentando y probando) y utilizar template literals. 
//Recordar: document.write() y alert()


// let user= "pepito";
// let age= 10;
// let email= "ada@.com";
// let saludar= `Hola, soy ${user}, tengo ${parseInt(age)}, mi mail es ${email}`;

// document.write(age);
// document.write(user);
// document.write(email);

// alert(saludar)



// Ejercicio 4:
// Pedir al usuario dos numeros y mostrar por el documento los resultados de cada calculo aritmetico. 
//Ejemplo: El resultado de la suma es: ${resultado}

// let num1= prompt("Cual es tu numero?");
// let num2= prompt("Cual es tu numero?");


// let resultado= parseInt(num1) + parseInt(num2)

// console.log(`El resultado de la suma es: ${resultado}`);

// Bonus:
// A lo que hiciste en el ejercicio 4, sumale un tercer numero a cada calculo. 
//Mostrar por consola y analizar que paso en cada caso. Obtuviste los resultados esperados?

// let num1= prompt("Cual es tu numero?");
// let num2= prompt("Cual es tu numero?");


// let resultado= parseInt(num1) + parseInt(num2)

// Ejercitacion de la clase
// Se espera que puedan realizar los ejercicios utilizando todo lo visto hasta ahora, y testeando sus propios codigos con varios ejemplos (numeros enteros, positivos y negativos, con coma, etc) las veces que sea necesario para asegurarse su funcionamiento. Probar que pasa si no se reciben parametros y analizar cada caso.
// Recordar sintaxis:

// const miFuncion = (parametros) => {
//     // sentencias de codigo
//     return
// }
// miFuncion()
// Ejercicio 0
// Crear una funcion que reciba como parametro un nombre y muestre por consola un saludo a esa persona.

// const ejCero= (nombre) => {
//   return nombre
// }
// console.log(`hola`, ejCero("pepe"));

// Ejercicio 1
// Crear una funcion que reciba como parametro dos numeros y devuelva el resultado de cada calculo aritmetico.
// sumar(a, b)
// restar(a, b)
// dividir(a, b)
// multiplicar(a, b)

// const suma= (a, b)=>{
//     return a+b
// }


// const resta= (a, b)=>{
//     return a-b
// }

// const mult= (a, b)=>{
//     return a*b
// }

// const sudiv= (a, b)=>{
//     return a/b
// }

// console.log(suma(2,5));
// console.log(resta(2,2));
// console.log(mult(2,4));
// console.log(sudiv(10, 5));

// suma(2,5);
// resta(2,2);
// mult(2,4);
// sudiv(10, 5);


// Ejercicio 2
// Crear una funcion que reciba como parametro un sueldo y un numero que representa el porcentaje de aumento. 
//La funcion debe devolver el sueldo mas el aumento.
// aumentarSueldo(1000, 10) // deberia devolver 1100
// const aumentarSueldo= (sueldo, porcentaje)=>{
//     let aumento= (sueldo+ ((sueldo*porcentaje)/100))
//     return aumento
// }
// console.log(aumentarSueldo(2000,10));

// aumentarSueldo(2000,10);



// Ejercicio 3
// Crear una funcion que reciba como parametros un nombre, una edad, una profesion y un pais y retorne 
//un string con la concatenacion de los datos ingresados. 
//Probar con varios datos varias veces para comprobar funcionamiento. 
//Ejemplo: Me llamo Pepa, tengo 30 anios, vivo en Colombia y soy abogada.

// const saludo =(nombre, edad, profesion, pais)=>{
//     return `Hola, mi nombre es ${nombre}, tengo ${edad} anios, soy ${profesion} y vivo en ${pais}`
// }

// saludo("Paula", "40", "abogada", "Peru");

//console.log(saludo("Paula", "40", "abogada", "Peru"))


// Ejercicio 4
// Crear una funcion que reciba como parametro un precio y devuelva el precio mas el IVA.


// const precioMasIva= (precio) =>{
//     return (precio*1.21)
// }
// console.log(precioMasIva(150));


// Ejercicio 5
// Como harian para usar las funciones del ejercicio 1 pero que los numeros se los pidamos al usuario?

// const num1 = parseInt(prompt("Ingrese el primer numero:", 0));
// const num2 = parseInt(prompt("Ingrese el segundo numero:", 0));


// const suma= (num1, num2)=>{
//     return num1+num2
// }


// const resta= (num1, num2)=>{
//     return num1-num2
// }

// const mult= (num1, num2)=>{
//     return num1*num2
// }

// const sudiv= (num1, num2)=>{
//     return num1/num2
// }


// console.log(suma(num1,num2));


// Repetir solucion pero para el ejercicio 2 y ejercicio 3

// const num1 = parseInt(prompt("Ingrese su sueldo:", 0));
// const num2 = parseInt(prompt("Ingrese el porcentaje de aumento:", 0));

// const aumentarSueldo= (num1, num2)=>{
//     let aumento= (num1+ ((num1*num2)/100))
//     return aumento
// }
// console.log(aumentarSueldo(num1, num2));
// const nombre = (prompt("Ingrese su nombre:", "Laura"));
// const edad = parseInt(prompt("Ingrese su edad:", 0));
// const profesion = (prompt("Ingrese su profesion:", "Abogaddo"));
// const pais = (prompt("Ingrese su pais:", "Chile"));

// const saludo =(nombre, edad, profesion, pais)=>{
//     return `Hola, mi nombre es ${nombre}, tengo ${edad} anios, soy ${profesion} y vivo en ${pais}`
// }


// // const num2 = parseInt(prompt("Ingrese el segundo numero:", 0));
// // const num2 = parseInt(prompt("Ingrese el segundo numero:", 0));
// // const num2 = parseInt(prompt("Ingrese el segundo numero:", 0));
// // const num2 = parseInt(prompt("Ingrese el segundo numero:", 0));
// //console.log(saludo("Paula", "40", "abogada", "Peru"))
// console.log(saludo(nombre, edad, profesion, pais));
// Bonus:
// Crear una funcion contador() que cada vez que se ejecute, sume en una unidad a una variable.
//     let variable= 1

// const contador=(variable) =>{
//     return variable+=1
    
// }
// console.log(contador(4));
// console.log(contador(5));
// console.log(contador(1));
/*esParOImpar(numero)
Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar*/
/*const esParoimpar= (numero) =>{
 
    if(numero % 2 !== 0){
        return ("Es impar")
    }
    else{
        return("es par")
    }
}
console.log(esParoimpar(11))*/



/*esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par'
esPositivoONegativo(numero)
Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

esPositivoONegativo(3)  // 'positivo'
esPositivoONegativo(-5) // 'negativo'
avanzarSemaforo(colorActual)
Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

avanzarSemaforo('verde')     // 'amarillo'
avanzarSemaforo('amarillo')  // 'rojo'
avanzarSemaforo('rojo')      // 'verde'

/*const avanzarSemaforo = (colorActual) => {

 if (colorActual === "verde"){
    return "El siguiente color es amarillo"
 }
 else if (colorActual=== "amarillo") {
    return "El siguiente color es rojo"
 }
 else if  (colorActual=== "rojo") {
    return "El siguiente color es verde"
 }
 else  {
    return "Color incorrecto"
 }
}
console.log(avanzarSemaforo("amarillo"))*/




/*obtenerDiasMes(mes)
Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

obtenerDiasMes("diciembre") // 31
obtenerDiasMes("febrero")   // 29*/


/* const obtenerDiasMes = (mes) => {
    if (mes ==="enero"){
        return 31
    }
    if (mes ==="febrero"){
        return 28
    }
    if (mes ==="marzo"){
        return 31
    }
    if (mes ==="abril"){
        return 30
    }
    if (mes ==="mayo"){
        return 31
    }
    if (mes ==="junio"){
        return 30
    }
    if (mes ==="julio"){
        return 31
    }
    if (mes ==="agosto"){
        return 31
    }
    if (mes ==="septiembre"){
        return 30
    }
    if (mes ==="octubre"){
        return 31
    }
    if (mes ==="noviembre"){
        return 30
    }
    if (mes ==="diciembre"){
        return 31
    }
    else{
        return "boludo, colocaste el mes que no existe"
    }

}

console.log(obtenerDiasMes("octubre")) */

/*obtenerGeneracion(anioNacimiento)
Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

Generación	Años de nacimiento
Baby boomer	1949-1968
Generación X	1969-1980
Millennials	1981-1993
Generación Z	1994-2010*/



// const obtenerGeneracion =(anioNacimiento) => {
//     if (anioNacimiento>=1949 && anioNacimiento <=1968){
//         return "Baby boomer"
//     }
//     if (anioNacimiento>=1969 && anioNacimiento<=1980){
//         return "Generación X"
//     }
//     if (anioNacimiento>=1981  && anioNacimiento<= 1993){
//         return "Millennials"
//     }
//     if (anioNacimiento>=1994  && anioNacimiento<= 2010){
//         return "Generación Z"
//     }

//     else {
//         return "Lo siento, no tienes generación"
//     }
// }
// console.log(obtenerGeneracion(1960));

/*
obtenerSensacion(puntaje)





Crear una función obtenerSensacion que tome como argumento un número puntaje y devuelva un string dependiendo de la puntaje, con las siguientes reglas:

puntaje	Mensaje
Menor a 0°	¡Está helando!
Mayor o igual a 0° y menor a 15°	¡Hace frío!
Mayor o igual a 15° y menor a 25°	Está lindo
Mayor o igual a entre 25° y menor a 30°	Hace calor
Mayor o igual de 30°	¡Hace mucho calor!
obtenerSensacion(33) // "¡Hace mucho calor!"*/


// const obtenerSensacion = (puntaje) =>{
//     if(puntaje < 0){
//         return "¡Está helando!"
//     }if(puntaje >= 0 && puntaje < 15){
//         return "¡Hace frío!"
//     }if(puntaje >=15 && puntaje < 25){
//         return "Está lindo"
//     }if(puntaje >= 25 && puntaje < 30){
//         return "Hace calor"
//     }if(puntaje >= 30){
//         return "¡Hace mucho calor!"
//     }

// }
//  console.log(obtenerSensacion(30));



/*obtenerNota(puntaje)
Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

Puntaje	Nota
Menor a 6	Desaprobado
Mayor o igual a 6 y menor a 7	Regular
Mayor o igual a 7 y menor a 8	Bueno
Mayor o igual a entre 8 y menor a 10	Muy bueno
10	Excelente
Menor a 0 o mayor a 10	Puntaje inválido
obtenerNota(7)    // "Bueno"
obtenerNota(9.6)  // "Excelente"
obtenerNota(12)   // "Puntaje inválido"*/


// const obtenerNota = (puntaje) =>{
//         if(puntaje < 6){
//             return "Desaprobado"
//         }if(puntaje >= 6 && puntaje < 7){
//             return "Regular"
//         }if(puntaje >=7 && puntaje < 8){
//             return "Bueno"
//         }if(puntaje >= 8 && puntaje < 10){
//             return "Muy bueno"
//         }if(puntaje === 10){
//             return "Excelente"
//         }
//         else{
//             return "El puntaje no existe"
//         }
//     }
//     console.log(obtenerNota(7));
//     console.log(obtenerNota(Math.ceil(9.6)));
//     console.log(obtenerNota(12));








/*jugarPiedraPapelTijera(a, b)
Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate! }
*/

// const jugarPiedraPapelTijera = (a, b) => {
//         if(a === "piedra"  && b ==="tijera"){
//              return "Ganó piedra"
//          }if(a === "tijera" && b ==="piedra"){
//              return "Ganó piedra"
//          } if(a === "papel"  && b ==="piedra"){
//             return "Ganó papel"
//         }if(a === "piedra" && b ==="papel"){
//             return "Ganó papel"
//         } if(a === "tijera"  && b ==="papel"){
//             return "Ganó tijera"
//         }if(a === "papel" && b ==="tijera"){
//             return "Ganó tijera"
//         }
//          else{
//              return "Empate"
//          }    
//         }
//         console.log(jugarPiedraPapelTijera('tijera', 'piedra'));
//         console.log(jugarPiedraPapelTijera('piedra', 'tijera'));
//         console.log(jugarPiedraPapelTijera('papel', 'piedra'));
//         console.log(jugarPiedraPapelTijera('piedra', 'papel') );
//         console.log(jugarPiedraPapelTijera('papel', 'tijera'));
//         console.log(jugarPiedraPapelTijera('tijera', 'papel'));
//         console.log(object);
//         console.log(object);

// Condicionales y operadores lógicos
// Ejercicios con operadores lógicos
// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// puedeVerPelicula(12, false) // false
// puedeVerPelicula(12, true)  // true
// puedeVerPelicula(16, false) // true
// puedeVerPelicula(18, true)  // true
// estaEnRango(valor, minimo, maximo)



// const puedeVerPelicula = (edad, tieneAutorizacion) =>{
//     if(edad >= 15 || tieneAutorizacion == true){
//         return "Puede ver pelicula"
//     }else{
//         return "No puede ver la pelicula"
//     }

// }
// console.log(puedeVerPelicula(14, true));
// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

// estaEnRango(3, 1, 10)   // true
// estaEnRango(1, 1, 10)   // true
// estaEnRango(10, 1, 10)  // true
// estaEnRango(12, 1, 10)  // false
// estaEnRango(-3, 1, 10)  // false
// puedeAvanzar(colorSemaforo)
// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// puedeAvanzar('verde')     // true
// puedeAvanzar('amarillo')  // false
// puedeAvanzar('rojo')      // false
// puedeAvanzar('lila')      // 'Error: color de semáforo inválido'
// esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

// esVocal('a') // true
// esVocal('n') // false
// esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// esVocal('a') // false
// esVocal('n') // true
// esHoraValida(hora)
// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true
// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// puedeRenovarCarnet(true, true, true)    // false
// puedeRenovarCarnet(true, true, false)   // false
// puedeRenovarCarnet(true, false, true)   // true
// puedeRenovarCarnet(true, false, false)  // false
// puedeRenovarCarnet(false, true, true)   // false
// puedeRenovarCarnet(false, true, false)  // false
// puedeRenovarCarnet(false, false, true)  // false
// puedeRenovarCarnet(false, false, false) // false
// puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
// Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

// puedeGraduarse(80, 50, true)  // true
// puedeGraduarse(80, 50, false) // false
// puedeGraduarse(80, 45, true)  // false
// puedeGraduarse(80, 45, false) // false
// puedeGraduarse(65, 50, true)  // false
// puedeGraduarse(33, 55, false) // false
// puedeGraduarse(42, 45, true)  // false
// puedeGraduarse(28, 45, false) // false



// tienenMismaLongitud(a, b)
// Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario

// tienenMismaLongitud('javascript', 'java') // false
// tienenMismaLongitud('manzana', 'cerveza') // true

// const tienenMismaLongitud = (a, b) => {
//         return  a.length === b.length
//     }

// console.log(tienenMismaLongitud('javascript', 'java'));

// Crear una función sonIguales que tome como argumentos dos strings a y b y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.


// const sonIguales = (a, b) => {
//     return a.length===b.length
// }

// console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'));
// / sonIguales('AdA LoVeLaCe', 'Ada Lovelace') // true
// // sonIguales() // false

// esContraseniaValida(contrasenia)
// Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

// const esContraseniaValida = () =>{

// }
// const ocultarContrasenia = (cont) => {
//     const str= cont.toString()
//     return str.replace(/1234567890/gi, "*")
//   }
//   console.log(ocultarContrasenia(1234));

// const aprueba = (nota) => {
//     return nota >= 6 Math.ceil(nota);
// }


// console.log(aprueba(1)) // false
// console.log(aprueba(5.4)) // false
// // aprueba(5.5) // true
// // aprueba(5.6) // true
// // aprueba(8) // true


// obtenerDuracionEnSegundos(duracion)
// Crear una función obtenerDuracionEnSegundos que tome como argumento un string duracion con el formato (mm:ss) y la cantidad de segundos totales de la duración

// obtenerDuracionEnSegundos('00:33') // 33
// obtenerDuracionEnSegundos('01:05') // 65
// obtenerDuracionEnSegundos('10:42') // 642

//  const obtenerDuracionEnSegundos  = (duracion) => {
//      console.log(typeof(duracion));
//      let minutos= Number(duracion.slice(0,2))

//      let segundos= Number(duracion.slice(3,5))
 
//      let durSeg= minutos*60 + segundos
   
//     return durSeg
//  }

//  console.log(obtenerDuracionEnSegundos('00:33'))
// console.log(obtenerDuracionEnSegundos('01:05'));


// const ocultarContrasenia = (cont) => {
//     const str= cont.toString()
//     return str.replace(/1234567890/gi, "*")
//   }

// espaciarCaracteres(str)
// Crear una función espaciarCaracteres que tome como argumento un string str y devuelva un string con todos sus caracteres separados por un espacio

// espaciarCaracteres('javascript') // 'j a v a s c r i p t'
// espaciarCaracteres('ada lovelace') // 'a d a l o v e l a c e'


// const espaciarCaracteres = (str) => {
//     return str.split(""). join(" ")
// }

// console.log(espaciarCaracteres('javascript'));
// console.log(espaciarCaracteres('ada lovelace'));