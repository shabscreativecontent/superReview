//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
class StreetFighter {
  constructor(name, age, weight, skinColor){
    this.name = name
    this.age = age
    this.weight = weight
    this.skinColor = skinColor
  }

  speed(){
    console.log("120km");
  }

  skills(){
    console.log("Punching & Kicking");
  }

  defends(){
    console.log("Great Defender");
  }
}


const ijaye = new StreetFighter('faruck', 30, '90kg', "black")




// ES5 : ecmascript5
function Fighters(name, age, gender, skinColor){
  this.name = name
  this.age = age
  this.gender = gender
  this.skinColor = skinColor

  this.speed = function(){
    console.log("120km");
  }

  this.skills = function(){
    console.log("Punching & Kicking");
  }

  this.defends = function(){
    console.log("Great Defender");
  }
}


const alakuko = new Fighters('Tantala', 29, 'Male', 'White')



class Car{
  constructor(name, year){
    this._name = name
    this._year = year
  }

  get name(){
    return this._name
  }

  start(){
    console.log(`${this._name} started`);
  }
}

class Toyota extends Car{
  constructor(name, year, make){
    super(name, year)
    this._make = make
  }

  stop(){
    console.log(`${this.name} just Stoped`);
  }
}

let camery = new Toyota("camery", 2008, "toyota camery")
