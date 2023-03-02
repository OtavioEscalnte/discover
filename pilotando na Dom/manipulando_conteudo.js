// getElementById()

/*
console.log(document.getElementById("blog-title"));
document.getElementById("blog-title");
*/

// getElementByClassName()

/*
const element = document.getElementsByClassName("blog-title");
console.log(element);
*/

// getElementByTagName()

/*
const element = document.getElementsByTagName("h1");
console.log(element);
*/

// querySelector()
/*
const element = document.querySelector(".blog-title");
console.log(element);
*/

// querySelectorAll()
/*
const element = document.querySelectorAll("[src]");
console.log(element);
*/

// Qual usar?

// getElementById (element)
// getElementsByClassName (HTMLCollection)
// getElementsByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (Nodelist)

// Manipulando conteúdo
// textContent
/*
const element = document.querySelector("h1");
element.textContent += " Olá Devs!";
*/

//innerText
/*
const element = document.querySelector("h1");
element.innerText = "Olá devs";
*/

//innerHTML
/*
const element = document.querySelector("h1");

element.innerHTML = "Olá Devs! <small>!!!</small>";
*/

// value
/*
const element = document.querySelector("input");
element.value = "valor que eu quiser";
*/

// Atributos
/*
const header = document.querySelector("header");
header.setAttribute("id", "header");

const headerID = document.querySelector("#header");
console.log(headerID.getAttribute("class"));

header.removeAttribute("id");
*/
