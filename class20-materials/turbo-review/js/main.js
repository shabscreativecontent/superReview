// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
let mySelf = "self-confident!  "
console.log(`i am naturally ${mySelf.repeat(3)}`);


//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it
let arrOfLetters = ["s","h","a","b","s"]
alert(arrOfLetters.join(""))

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function game(){
  let randomNum = Math.random().toFixed(3)
  if (randomNum * 3 > 2.0) {
    return "rock"
  }else if (randomNum * 3 > 1.5) {
    return "paper"
  }else if (randomNum * 3 > 1.0) {
    return "lizard"
  }else if (randomNum * 3 > 0.5) {
    return "spock"
  }else {
    return "scissors"
  }
}

// console.log(game());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function pickName(name){
  let botChoice = game()

  if ((name === "rock" && botChoice === "paper") || (name === "paper" && botChoice === "lizard") || (name === "lizard" && botChoice === "spock") || (name === "spock" && botChoice === "scissors") ) {
    console.log("YOU WON!!!");
  }else if (name === botChoice) {
    console.log("You Tie!");
  } else {
    console.log("YOU LOST!!!");
  }
}

pickName("rock")
