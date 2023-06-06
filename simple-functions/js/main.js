//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNums(n1,n2){
  alert(n1-n2)
}

subTwoNums(10,20)

//create a function that divides three numbers and console logs the quotient
function divThreeNums(n1,n2,n3){
  console.log(n1/n2/n3);
}

divThreeNums(75,5,3)

//create a function that multiplys three numbers and returns the product
function mulThreeNums(n1,n2,n3){
  return n1*n2*n3
}

console.log(mulThreeNums(2,3,4));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addFirstTwoDivThird(n1,n2,n3){
  return (n1 + n2)%n3
}

console.log(addFirstTwoDivThird(38,4,4));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeFourNums(n1,n2,n3,n4){
  const mulNums = n1*n2

  if(mulNums > 100){
    console.log(n3 + n4);
  }else if(mulNums < 100){
    console.log(n3 - n4);
  }else {
    alert((n1*n2*n3) % n4)
  }
}

takeFourNums(20,5,5,3)
