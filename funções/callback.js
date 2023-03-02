// callback function

function sayMayName(name) {
  console.log(name);
  name();
}

sayMayName(() => {
  console.log("estou em uma callback");
});
