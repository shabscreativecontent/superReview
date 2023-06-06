//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.brand = 'Gucci'
stopwatch.shape = "Circle"
stopwatch.color = "Black"
stopwatch.owner = 'Shabs'

stopwatch.startTime = function(){
  console.log('Time Started');
}
stopwatch.stopTime = function(){
  console.log('Time Stop');
}
stopwatch.resetTime = function(){
  console.log('Time Reset');
}


let watch = {
  brand: 'Gucci',
  shape: "Circle",
  color: "Black",
  owner: 'Shabs',

  startTime: function(){
    console.log('Time Started');
  },
  stopTime: function(){
    console.log('Time Stop');
  },
  resetTime: function(){
    console.log('Time Reset');
  }
}
