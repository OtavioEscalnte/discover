/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + "está andando";
  };
}

const otavio = new Person("Otávio");
const joao = new Person("João");
console.log(otavio.walk());
console.log(joao.walk());
