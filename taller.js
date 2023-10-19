let msg =
  "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . ";

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado
console.log(msg.length);
// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
console.log(msg.toLowerCase());
// 3. Si la cadena contiene la palabra filtro en algún lado imprima un mensaje por consola con el valor true.
console.log(msg.includes("filtro"));
// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola
let wordStartPos = msg.indexOf("ejercicios");
console.log(msg.slice(wordStartPos, wordStartPos + 10));
// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
console.log(msg.replace(/ /g, "-"));
// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

// 7. Crea una función que valide cuántas vocales tiene el msg entregado.

let lowertext = msg.toLowerCase();

let vowels = "";

function vowelsCounter() {
  for (let i = 0; i < lowertext.length; i++) {
    let character = lowertext.charAt(i);
    if ("aeiouáéíóú".includes(character)) {
      vowels = vowels.concat(character);
    }
  }
  console.log(vowels.length);
}
vowelsCounter();
// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.

// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes
