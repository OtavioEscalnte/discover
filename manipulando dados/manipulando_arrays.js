// Manipulando Arrays

// Criar Array com construtor

/*
let myArray = new Array("a", "b", "c");
console.log(myArray);
*/

// Contar elementos de um Array

/*
let myArray = ["A", "B", "C"];
console.log(myArray.length);
*/

// Transformar uma cadeia de caracteres em elementos de um array

/*
let word = "manipulação";
console.log(Array.from(word));
*/

// adicionar um item no fim

let array = ["otavio", "joao", "maria"];
array.push("pedro");

// adicionar no inicio
array.unshift("julia");

// remover do final
//array.pop();

//remover do começo
//array.shift();

//pegar somente alguns elementos
//console.log(array.slice(1, 3));

// remover 1 ou mais items em qualquer posição do array
//array.splice(1, 1);

// encontrar a posição de um elemento no array
let index = array.indexOf("otavio");
console.log(index);
