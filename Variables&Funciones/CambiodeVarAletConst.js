/* var nombre = "Armando";
var edad = 25;
 nombre = "Ana Maria";
 var saludo ="Hola, "+ nombre + ". Tienes " + edad + " años.";
 */
//ejercicio 1
 const nombre = "Armando";
 let edad = 25;
 
 let saludo = "Hola, "+ nombre + ". Tienes " + edad + " años.";
 console.log(saludo);

 //ejercicio 2
 const cuadradado = (numero) => numero * numero;
  let result1 = cuadradado(5);
  console.log(result1);
  let result2 = cuadradado(55);
  console.log(result2);
  let result3 = cuadradado(12);
  console.log(result3);

  //ejercicio 3
  const saludoPersonalizado = (nombre, edad) => "Hola, me llamo" + "" + nombre + " y tengo" + edad + "años";
  let mostrar = saludoPersonalizado("Isay", 37);
  console.log(mostrar);