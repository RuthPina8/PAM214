 /* //Tipos de datos
"Hello World"//String
'Hello World'//String
100 //number
-2.3
//boolean
true
false
// array
['joe','ryan','martha'  ]
console.log('THIS IS A STRING');
console.log([1,2,3,4]);
console.log({"username": "Ryan","score":70.4})
// variables
var nameuser = "jhon";
let lastanme = "carter";
nameuser = 'pepe';
const PI = 3.1415;

console.log(PI)
//camelcase
let nombreDeP ersona = 'gordon'*/
//operadores
/* let numberOne = 60;
let numberTwo = 100;
let result = numberOne + numberTwo;
console.log(result);
 let name = 'jhon';
 let lastanme = 'Carter';
 let completeName = name +''+ lastanme;
 console.log(completeName);*/

/* let numberOne = 60;
let numberTwo = 500;
let result = numberOne < numberTwo;
console.log(result);*/

/*let passwordDB = 'pepe123'
let input = 'pepe123'
let result= input == passwordDB;


// condicionales 

if (result == true){
    console.log('Login correcto');
} else{
    console.log('Login incorrecto');
}
/*if(result == false){
    console.log('Login incorrecto');
}
console.log(result);*/

/*let score = 70;
if (score > 30){
    console.log('You need to practice more');
}else if(score > 15){
    console.log('Estas mejorando');
}
else{
    console.log('You need to follow this tutorial')
}*/

let typeCard = 'Debit Card'
switch(typeCard){
     case 'Debit Card':
        console.log('This is a debit card');
        break;
     case 'Credit Card':
        console.log('This is a credit card');
        break;
        default:
        console.log ('No card'); 
}

//bucles
let count = 1;
while(count > 2){
    console.log('count ');
    count = count + 1;
}

let names = ['ryan','jhon','joe','mario'];
//console.log(names.length);
 for(let index = 0; index < names.length; index++){
 console.log(names[index]);
 }

 function add(n1, n2){
    
    console.log(n1+n2);
 }
add(3,2);
 