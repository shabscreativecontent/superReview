//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const arrVal = [1,2,3,4,5,6,8,7,10]

function returnEvenNums(arr){
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

console.log(returnEvenNums(arrVal));



// Using filter
let evenNum = arrVal.filter(x => x % 2 === 0)
console.log(evenNum);
