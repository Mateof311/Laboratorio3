//1. Crear un arreglo de nombres a partir del siguiente input:
let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];
const arrayNames = input.map( user => user.name);
console.log(arrayNames);

//2. Crear un arreglo de nombres a partir del arreglo anterior pero solo para las
//personas mayores de 20 años y menores de 29.

const btw20_29 = input.filter(user => user.age>20 && user.age <29).map(user => user.name);
console.log(btw20_29);

//3. Dado un arreglo de objetos de países que poseen dos propiedades:
// name y population, ordenarlos de mayor a menor en cuanto a su población utilizando la
//función de arreglo sort().

let countries = [
    { name: "Argentina", population: 458100000},
    { name: "Brasil", population: 2153100000},
    { name: "Uruguay", population: 34230000},
    { name: "Chile", population: 196000000},
    { name: "Paraguay", population: 67810000},
];
//b-a mayor a menor , a-b menor a mayor
countries.sort((a,b) => b.population - a.population);
console.log(countries)

//4. Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
//torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
//velas más altas de la torta.
//Tu objetivo es contar cuántas son las más altas de la torta
let candles = [5,4,1,3,5,5]
const max = Math.max(...candles);
const tallCandles = candles.filter(candle => candle === max).length
console.log(tallCandles)

//5.
//Devolver la cadena "YES" si la clase SE CANCELA o "NO" si la clase NO SE CANCELA.
const studentsAttendance =[0,0,1,1,1];
const minAttendance = 3;
const cancelClass = studentsAttendance.filter(student => student <= 0).length
if(cancelClass >= minAttendance){
    console.log("NO")
}else{
    console.log("YES")
}

//6 (flexboxfroggy)

//7. Escribir una función que convierta un objeto de JS en un arreglo de JS:
//Ejemplos:
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",12]]
//toArray({}) ➞ []
const toArray = (obj) => Object.keys(obj).map((key) => [key,obj[key]]);
console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))
let ejemplo={ shrimp: 15, tots: 12 }
console.log(ejemplo)
console.log(ejemplo["shrimp"])//porque con ""??