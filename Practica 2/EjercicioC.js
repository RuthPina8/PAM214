const personas = [
    {name: "Ana", age: 22},
    {name: "Luis", age: 35},
    {name: "Maria", age: 28}
];
// Find function
/*const LuisName = personas.find(PersonName => PersonName.name === "Luis");
console.log(LuisName);*/
//forEach function
/* personas.forEach(person =>{
    console.log(person.name,person.age);
});*/
//reduce function
const AllAges = personas.reduce((AgeAccumulator,AgePerson)=>{
   return AgeAccumulator + AgePerson.age; 
},0);
console.log("Total suma: "+ AllAges);