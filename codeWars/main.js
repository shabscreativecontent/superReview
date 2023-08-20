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

// returnNum(arr)
// console.log(reTotalNum(arr));



// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false



function solution(str, ending){
  // TODO: complete
  return str.endsWith("bc") === str.endsWith(ending)
}


console.log(solution('abc', 'bc'));




// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]


function arrayDiff(a, b) {
  let newArr = []

  a.forEach(val1 => {
    if (b.length > 0) {
      b.forEach(val => {
        if (val1 !== val){
          newArr.push(val1)
        }
      })
    } else if (b.length === 0) {
      newArr.push(val1)
    }
  })

  return newArr;
}

console.log(arrayDiff([1,2,2,2,3],[]));


// Promise & async/await in the DOM
// document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}




// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Animal {
  constructor(name) {
    this._name = name
  }

  get name(){
    return this._name
  }

  walk(){
    console.log(`${this._name} is walking`);
  }
}

class Dog extends Animal {
  constructor(name, legs) {
    super(name)
    this.legs = legs
  }

  speak(){
    console.log(`${this.name} is speaking`);
  }
}


class Cat extends Dog {
  constructor(name, legs, color) {
    super(name, legs)
    this._color = color
  }
}




const pabs = new Cat('pabs', 4)
console.log(pabs.walk());



// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

 


// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNtn(arr){

  const element = arr.filter((num) => num < 2)

  // for (let i = 0; i < arr.length; i++) {
  //   const element = arr[i]
  // }

  console.log(element);
}

deleteNtn([1,2,3,4,2,1,2,3,3])



// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

let num = -10

function mulOf3and5(n){
  const newArr = []

  for(let i = 1; i < n; i++){
    if(i % 3 === 0 || i % 5 === 0){
      newArr.push(i);
    }
  }

  const sumWithInitial = newArr.reduce((acc, currentV) => acc + currentV, 0);

  console.log(sumWithInitial);
}

mulOf3and5(num)




// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

function isPrime(num){
  if(num === 1){
    return false
  }
}

console.log(isPrime(13))