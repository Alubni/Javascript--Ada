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

// ejercicio 0
// Crear una funcion que reciba como parametro un nombre y muestre por consola un saludo a esa persona.
// const name = prompt("Ingrese su nombre")
// const saludar = (nombre) =>{
//     return `Hola ${nombre}`
// }


// console.log(saludar);



// const numeroAleatorio = Math.round(Math.random() * 10)
// let vidas = 3

// const adivinaElNumero = () => {
//     const numeroElegido = parseInt(prompt("Adivina un numero del 0 al 10:", 0))

//     if (!isNaN(numeroElegido) && (numeroElegido <= 10)) {
//         if (numeroAleatorio === numeroElegido) {
//             alert("Felicidades adivinaste!")
//         } else {
// //             vidas--
// //             console.log(`Te quedan ${vidas} vidas`)
// //             if (vidas > 0) {
// //                 adivinaElNumero()
// //             } else {
// //                 alert("Lo siento, perdiste")
// //             }
// //         }
// //     } else {
// //         alert("Che gil, te dije que metas un numero")
// //         adivinaElNumero()
// //     }
// // }

// // adivinaElNumero()

