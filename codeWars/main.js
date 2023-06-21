// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
  // TODO
  if(names.length === 0){
    return "no one likes this"
  }else if(names.length === 1){
    return `${names[0]} likes this`
  }else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }else if(names.length === 4){
    return `${names[0]}, ${names[1]} and 2 others like this`
  }
}

let people = ['shedrack', 'jack', 'tolu']

// console.log(likes(people));


// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

function maskify(input) {
  return input.slice(0,-4).replace(/./g, "#") + input.slice(-4);
}

const cc = "1234 7382 8833 1732 1023"
console.log(maskify(cc));


function mulThreeNums(n1,n2,n3){
  return n1*n2*n3
}


// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
function friend(friends){
  //your code here
  return friends.filter(friend => friend.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]));


//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
let pokemonList = ["pikachu", "eevee", "charizard", "ditti", "charmander"]

function reverseList(list){
console.log(list.reverse());
}

reverseList(pokemonList)

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
const arr1 = [3,4,5,9]
const arr2 = [27,8]

function programElement(a,b){
  let aElement = 0
  let bElement = 0
  for (let i = 0; i < a.length; i++) {
    aElement += Math.pow(a[i], 2);
  }

  for (let i = 0; i < b.length; i++) {
    bElement += Math.pow(b[i], 3);
  }

  if (aElement > bElement) {
    return true
  } else {
    return false
  }
}

// console.log(programElement(arr1,arr2));

// or

function compareArr(a,b) {
  return a.reduce((acc, c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**2, 0)
}

console.log(compareArr(arr2,arr1));


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

const newArr = [22, -6, 32, 82, 9, 25]
const newArr1 = [68, -1, 1, -7, 10, 10]

function mulIndex(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % i === 0) {
      newArray.push(arr[i]);
      // console.log(arr[i]);
    }
  }
  console.log(newArray);
}

// OR

function isMultiple(arr) {
  return arr.filter((e,i) => e % i === 0)
}

mulIndex(newArr1)
console.log(isMultiple(newArr));


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let arr = ["3","5", 4, 8, 9, "4"]

function returnNum(val) {
  totalVal = 0

  for (let i = 0; i < val.length; i++) {
    totalVal += Number(val[i]);
  }

  console.log(totalVal);
}

// OR

function reTotalNum(arr){
  return arr.reduce((acc, c) => acc + Number(c), 0)
}

returnNum(arr)
console.log(reTotalNum(arr));
