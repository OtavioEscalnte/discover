// Object
/*
const person = {
  name: "Otávio",
  age: 24,
  weight: 82,
  isAdmin: true,
};

console.log(
  "Meu nome é " +
    person.name +
    " tenho " +
    person.age +
    " anos e peso " +
    person.weight +
    "kg "
);
*/

// Arrays

//acessar valores dentro de um array
//--const animals = ["Lion", "Monkey", "Cat"];

//console.log(animals.length);

// exercícios
//1. declare uma variavel de nome weight
//let weight;
//2. que tipo de variável acima?
//console.log(typeof weight);
// undefined
/* 3. Declare uma variavel e atribua valores para cada um dos dados:
    - name: string
    - age: number (integer)
    - stars: number (float)
    - isSubscribed: boolean
   
     let name= "Otávio"
     let  age= 24
     let stars= 54.2
     let isSubscribed true
    
    
    
  */

/* 
    4. A variável student abaixo é de que tipo de dados? objeto
      4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
      4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos
        valores de cada propriedade do objeto
    */

let student = {
  name: "Otávio",
  age: 24,
  weight: 82,
  isSubscribed: true,
};

//console.log(
//  `${student.name} tem ${student.age} de idade e pesa ${student.weight}kg `
//);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = [];

/*6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (
  não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
  */

students = [student];

/*
7. coloque no console o valor da posição zero do Array acima
*/
//console.log(students[0]);

/* 
8. Crie um novo student e coloque na posição 1 do array students
*/

/*
const otavio = {
  name: "otavio",
  age: 24,
  weight: 68,
  stars: 4.8,
};

students = [student, otavio];
console.log(students[1]);
*/
/*
9. sem rodar o código abaxio responda qual é a resposta do código abaxio e por que? Após sua resposta, rode o código e veja se você acertou
*/
