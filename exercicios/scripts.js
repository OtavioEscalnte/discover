/* ### Transformar notas escolares

Crie um algoritimo que transforme as notas do sistema numérico para sistema de caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/
/*
function getScore(score) {
  let score = 90;
  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;
  let scoreF = score < 60;

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreF) {
    scoreFinal = "F";
  } else {
    scoreFinal = "Nota insuficiente";
  }

  return scoreFinal;
}
console.log(getScore(90));

*/

/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  * receitas: []
  * despesas: []

Agora, crie um função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

/*
let family = {
  income: [2500, 3200, 250.23, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.0],
};


function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }

  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(family.income);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;

  const itsOk = total >= 0;

  let balanceText = "negativo";

  if (itsOk) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`);
}

calculateBalance();
*/

/* ### Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou
  fahrenheit e faça a transformação de uma unidade para outra

  C = (F-32) * 5/9

  F = C* 9/5 + 32

*/

// transform('50F')

/*
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  }

  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }

  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree("10C"));
} catch (error) {
  console.log(error.message);
}
*/

/*
  Buscando e contando dados em Arrays

  Baseado no Array de livros por categoria abaixo, faça os seguintes desafios

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
  */

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilonia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;

console.log(totalCategories);
for (let category of booksByCategory) {
  console.log("Total de livros da categoria", category.category);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }

  console.log("Total de autores: ", authors.length);
}
countAuthors();

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        book.push(book.title);
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books}`);
}
booksOfAuthor("Augusto Cury");
