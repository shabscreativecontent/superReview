// *Variables*
// Create a variable and console log the value
let val = "ShabsCreativeContent"
console.log(val);

// Create a variable, add 10 to it, and alert the value
let num = 27
alert(num + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNum(n1,n2,n3,n4){
  alert(n1 - n2 - n3 - n4)
}

subFourNum(80,20,17,19)

// Create a function that divides one number by another and returns the remainder
function divNum(n1,n2) {
  return n1%n2
}

console.log(divNum(23,5));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNumAlertJumanji(n1,n2){
  if((n1+n2) > 50){
    alert("Jumanji")
  }else {
    console.log("Its less than 50");
  }
}

addNumAlertJumanji(20,38)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mulIfDivAlertZebra(n1,n2,n3) {
  let val = n1*n2*n3
  if (val % 3 === 0) {
    alert("ZEBRA")
  } else {
    console.log(val % 3);
  }
}


mulIfDivAlertZebra(3,4,4)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumOfTime(word, num){
  for(let i = 0; i < num; i++){
    console.log(word);
  }
}

wordNumOfTime("Shabs", 10)
