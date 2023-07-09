//Objects
//Please create a OOP construstor object stopwatch

function Stopwatch() {
  let startTime, stopTime, running, duration = 0

  this.start = function(){
    if (running) {
      throw new Error("Stopwatch as already started running")
    }

    running = true
    startTime = new Date()
  }

  this.stop = function(){
    if (!running) {
      throw new Error("Stopwatch stoped running")
    }

    running = false
    stopTime = new Date()

    const seconds = (stopTime.getTime() - startTime.getTime()) / 10000;
    duration += seconds
  }

  this.reset = function(){
    startTime = null
    stopTime = null
    running = false
    duration = 0
  }

  Object.defineProperty(this, "duration", {
    get: function(){
      return duration
    }
  })
}


const gucciWatch = new Stopwatch()

// console.log(gucci.start());

// const date = new Date()
// console.log(date);


class Dog {
  constructor(name, species, size){
    this.name = name;
    this.species = species;
    this.size = size;
  }

  bark(){
    return "Woof! Woof!"
  }
}

// TODO: define the Dog class here

const fang = new Dog("Fang", "boarhound", 75);

console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);


const snowy = new Dog("Snowy", "terrier", 22);

console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



class BankAccount {
  constructor(name){
    this.name = name;
    this.balance = 0;
  }

  credit(amount){
    return this.balance += amount
  }

  description(){
    console.log(`The Bank Account of ${this.name} Total Balance: ${this.balance}`);
  }
}



const sean = new BankAccount("Sean")
const brad = new BankAccount("Brad")
const georges = new BankAccount("Georges")

sean.credit(1000)
brad.credit(1000)
georges.credit(1000)

sean.description()
brad.description()
georges.description()
