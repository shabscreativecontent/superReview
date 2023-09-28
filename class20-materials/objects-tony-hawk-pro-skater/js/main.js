//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function SkatingGame(playerName,PlayerWeight,PlayerShoeColor,PlayerHelmetColor) {
  this.name = playerName
  this.weight = PlayerWeight
  this.shoeColor = PlayerShoeColor
  this.helmetColor = PlayerHelmetColor

  this.speed = function(){
    console.log("Inline Speed Skating");
  }

  this.pro = function(){
    console.log("play on Fourth line");
  }
}


let tonyHawk = new SkatingGame("Tony", 90, "black", "red")

tonyHawk.pro()
