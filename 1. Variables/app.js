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

/* saludo

Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto. */

// const nombre = prompt("Ingresa tu nombre")


// const h1 = document.querySelector("h1")

// h1.innerText += nombre
// h1.style.textAlign = "center"
// h1.style.color = "red"
// h1.style.fontFamily = "Arial"

// console.log("hola")

/* color
Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color. */
/*  const color= prompt("Ingresa un color en sistema hexadecimal,  #0000")
 const body= document.querySelector("body")
 body.style.backgroundColor = color */
 /* rgb
Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul. */

const red = parseInt(prompt("Ingrese un numero entre 0 y 255"))
const green = parseInt(prompt("Ingrese un numero entre 0 y 255"))
const blue = parseInt(prompt("Ingrese un numero entre 0 y 255"))
const color= `rgb(${red} ${green} ${blue})`


const body = document.querySelector("body")
body.style.background = color