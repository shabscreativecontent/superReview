//--- Easy
//create a variable and assign it a number
let val = 13

//minus 10 from that number
val = val - 10
//print that number to the console
console.log(val);
//--- Medium
//create a variable that holds a value from the input
let inputVal = document.querySelector('#danceDanceRevolution').value

//add 25 to that number
inputVal += 25

//alert that number
alert(inputVal)
//--- Hard
//create a variable that holds the h1
let clickMe = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
clickMe.addEventListener('click', addSum)
function addSum() {
  console.log(val + Number(inputVal));
}
