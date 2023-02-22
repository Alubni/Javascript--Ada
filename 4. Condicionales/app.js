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
//         console.log(jugarPiedraPapelTijera('piedra', 'piedra'));
//         console.log(jugarPiedraPapelTijera('papel', 'papel') );
//         console.log(jugarPiedraPapelTijera('tijera', 'tijera'));