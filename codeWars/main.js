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
  let result;

  if(num === 1){
    result = false
  } else if(num === 2 || num % 2 === 1 || num % 3 === 1){
    result = true
  } else {
    result = false
  }

  if(result){
    console.log(`${num} is prime`)
  }else{
    console.log(`${num} is not prime`)
  }
}

isPrime(5)


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:


function areYouPlayingBanjo(name){
  if(name.startsWith('R') || name.startsWith('r')){
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}

console.log(areYouPlayingBanjo("rayo"))

// // Similar code

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

// // similar code

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}



// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).


const countBy = (x, n) => {
  let newArr = []

  for(let i = 1; i <= n; i++){
    const p = x * i
    newArr.push(p)
  }

  return newArr;
}

console.log(countBy(2, 5))


// // Similar code

function countBy1(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}


 // Write a function that removes the spaces from the string, then return the resultant string.
 // trim() 
 
 const noSpace = x => {
  return x.trim().replaceAll(" ", "")
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB'));

// // Similar code

function noSpace1(x){
  return x.replace(/\s/g, '');
}
 
 
 
 // Given an array of integers, return a new array with each value doubled.
 
 const doubledIntegersValue = x => {
  return x.map((x) => x * 2)
}

console.log(doubledIntegersValue([4,4,5,3]));

//  //  Similar code
function maps(x){
  //return x.map(el => el * 2);
  let arr = [];
  for(let i = 0; i < x.length; i++){
  arr.push(x[i] * 2);
  }
  return arr;
}

// // similar code 
const maps1 = arr => arr.map( x => x * 2 )



 // You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
 
 // Considering these factors, write a function that tells you if it is possible to get to the pump or not.
 
 // Function should return true if it is possible and false if not.
 
 const zeroFuel = (distanceToPump, mpg, gallonsLeft) => {
  const journyG = distanceToPump / mpg;
  if(journyG <= gallonsLeft){
    return true;
  } else {
    return false;
  }
}

console.log(zeroFuel(100,70,2))

// // Similar code 
const zeroFuel1 = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;




// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


const countSheep = function (num){
  let newA = []

  for(let i = 0; i < num; i++){
    newA.push(`${i} sheep...`)
  }

  return newA.join().replaceAll(",", "");
} 

console.log(countSheep(4));

// // Similar code

var countSheep1 = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(num){
  if(num % 2 === 0){
    return "Even"
  } else if(num === 1 || num % 2 === 1 || num % 2 === -1) {
    return "Odd"
  }
}

console.log(evenOrOdd(-5))

// // Similar code

function evenOrOdd1(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function convertInitials(user) {
  const convert2array = user.split(' ')
  if(convert2array.length === 2){
    const convert2string = convert2array[1].split('')
    const convert2string1 = convert2array[0].split('')
    return `${convert2string1[0].toUpperCase()}.${convert2string[0].toUpperCase()}`
  }
}

console.log(convertInitials("Ajide shedrack"));

// // SimilAR Code

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function sumOfPositives(arr){
  let sumNum = 0
  arr.map((x)=>{
    if(x >= 0){
      sumNum += x
    }
  })

  console.log(sumNum)
}

sumOfPositives([-4,-5,1,4,3,2,1])

// // Similer Code

function positiveSum(arr) {
  var total = 0;    

  // setup loop to go through array of given length
  for (i = 0; i < arr.length; i++) {
    // if arr[i] is greater than zero 
    if (arr[i] > 0) {
      // add arr[i] to total
      total += arr[i];
    }
  }
  // return total
  return total;                         
}


// Array syntax 

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  // alert(`${item} is at index ${index} in ${array}`);
});


let fruits = ['Orange', 'Apple', 'Orange', 'Apple']

// alert( fruits.indexOf('Apple') ); // 0 (first Apple)
// alert( fruits.lastIndexOf('Orange') ); // 2 (last Apple)


// Sort() Method
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr99 = [ 1, 2, 15 ];

arr99.sort(compareNumeric);

// alert(arr99);  // 1, 2, 15


// OR
arr.sort( (a, b) => a - b );


// camelize("background-color") == 'backgroundColor';

let arrStr = "background-color"

const newResult = arrStr.split('-')
const newAns = newResult.map((items, array) => {
  if (array === 0) {
    return items
  } else {
    return items[0].toUpperCase() + items.slice(1)
  }
})

// console.log(newAns)

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// Name equals Owner	'Hello boss'
// otherwise	'Hello guest'

const Greetings = function(name, owner){
  if(name.toLowerCase() === owner.toLowerCase()){
    return `Hello boss`
  } else {
    return `Hello guest`
  }
}

console.log(Greetings('shabs', 'john'));

// Similar Code Solution

function greet (name, owner) {
  // Add Code
  return name === owner ? 'Hello boss' : 	'Hello guest';
}


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

const squareSum = function(arr){
  let total = 0
  arr.map(num => total += Math.pow(num, 2))
  console.log(total)
}

// console.log()
squareSum([2,2,2])


// Similar code 
 
function squrSum(numbers){
  const total = numbers.reduce((accumulator, currentValue) => accumulator + (currentValue * currentValue), 0)

  console.log(total);
}

squrSum([3,3,3])

// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i + i;
}

console.log(doubleInteger(3));



// #100Dev Work
// Question to practice:


// One:
// Give a non-empty array of integers, return the result of multiplying the values together in other.
// Example: [1,2,3,4] => 1*2*3*4 = 24

const mulVal = (arr)=>{
  const initialV = 1
  const total = arr.reduce((acc, curV) => acc * curV, initialV)

  return total;
}

console.log(mulVal([2,4,5,4,3]));


// Two:
// You will be given an array of the family member ages, in any order. the ages will be given in whole numbers, so a baby of 5months, will have an ascribed 'age' of 0.
// Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

const solveAgeProblem = (arr)=>{
  const lowestAge = Math.min(...arr)
  const highestAge = Math.max(...arr)
  const difBetwAge = lowestAge - highestAge

  const newArr = [lowestAge, highestAge, difBetwAge]
  console.log(newArr);
}

solveAgeProblem([3,5,7,2,3,-6])


// Three
// Sum all the number of the array excecpt the highest and the lowest(the value , not the index)/
// Example: [6,2,1,8,10] => 16
//          [1,1,11,2,3] => 6

const sumAllExcept = (arr)=>{
  let total = 0
  const lowestAge = Math.min(...arr)
  const highestAge = Math.max(...arr)

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== lowestAge && arr[i] !== highestAge){
      total += arr[i]
    }
  }

  return total;
}

console.log(sumAllExcept([3,5,7,2,3,-6]))



// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


const countVowels = (str) => {
  const lowercase = str.toLowerCase()
  const strToArr = lowercase.split('')
  let newArr = []

  strToArr.forEach((val, index) => {
    if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u'){
      return newArr.push(index)
    }
  })

  console.log(newArr.length);
}


countVowels("abracadabra")

// // Similar Code

function getCount(str) {
  const caseStr = str.toLowerCase()
  var vowelsCount = 0;
  for (index in caseStr){
    switch (caseStr[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vowelsCount++;
    break;
    }   
  }
  return vowelsCount;
}

console.log(getCount("Adebayo"))


// ChartAt
// is the ability to get a value of an index inside a string.


const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(`The character at index 1 is ${sentence.charAt(1)}`);


// Concat
// its the glowing of a string value with another string value.

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"


// Includes
// is a method to check is a word is inside a string
const sen = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(
  `The word "${word}" ${
    sen.includes(word) ? 'is' : 'is not'
  } in the sentence`
)


// IndexOf
// its a method use in an Array, to get an element at a giving index

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

console.log(beasts.indexOf('camel'));



// Given a string of text, write an algorithm that returns the text received in a reversed format. E.g
// reverseString('algorithms') // should return 'smhtirogla'

function reverseString(text){
  // return text.split("").reverse().join("")

  // // or 

  // return [...text].reverse().join("")

  // // or

  // let result = ''

  // // for (let i = text.length - 1; i >= 0; i--) {
  // //   result += text[i];
  // // }

  // // // Or

  // for (let char of text){
  //   result = char + result
  // }

  // return result

  // // OR 

  // if(text === ""){
  //   return ""
  // } else {
  //   return reverseString(text.substr(1)) + text[0]
  // }

  // // Or

  // return text.split("").reduce((acc, char) => char + acc, '')

  // // Or 

  return [...text].reduce((acc, char) => char + acc, '')

}

console.log(reverseString("Shabs Planta"));
const tt = "boy"
console.log(tt.length);


// Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:
// vowelsCounter('anehizxcv') // will return 3

// const vowel = ["a","e","i","o","u"]

// function vowelsCount(text){
//   let counter = 0

//   for (const letter of text.toLowerCase()) {
//     if (vowel.includes(letter)){
//       counter++
//     }
//   }

//   return counter
// }

// // OR 

function vowelsCount(text){
  let matchingInstance = text.match(/[aeiou]/gi)

  if(matchingInstance){
    return matchingInstance.length
  } else {
    return 0
  }
}

// alert(vowelsCount("ShabsLaw"))



/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// function maxRecurringChar(text){
//   let charMap = {}
//   let marCharVal = 0
//   let maxChar = ''

//   for(let char of text){
//     if(charMap.hasOwnProperty(char)){
//       charMap[char]++
//     } else {
//       charMap[char] = 1
//     }
//   }

//   for(let char in charMap){
//     // return charMap[char]
//     if(charMap[char] > marCharVal){
//       marCharVal = charMap[char]
//       maxChar = char
//     }
//   }

//   return maxChar
// }

// // Or

function maxRecurringChar(text){
  let charMap = {}
  let keysArr = []
  let valuesArr = []
  let maxCharValue = 0

  for(let char of text.toLowerCase()){
    if(charMap.hasOwnProperty(char)){
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  keysArr = Object.keys(charMap)
  valuesArr = Object.values(charMap)
  maxCharValue = Math.max(...valuesArr)

  return keysArr[valuesArr.indexOf(maxCharValue)]

}

console.log(maxRecurringChar("teeeeeextxxXXxxxeeExx"));



/* CHALLENGE
  Given a sentence containing two or more words, 
  return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'
*/

function capSentence(text){
  let wordsArr = text.toLowerCase().split(" ")
  // let capsArray = []

  // wordsArr.forEach(word => {
  //   capsArray.push(word[0].toUpperCase() + word.slice(1))
  // })

  // // Or

  // let capsArray = wordsArr.map(word => {
  //   return word[0].toUpperCase() + word.slice(1)
  // })

  // // Or

  let capsArray = wordsArr.map(word => {
    return word.replace(word[0], word[0].toUpperCase())
  })

  return capsArray.join(" ")
}

console.log(capSentence("my nAme is Shabs Law"))




/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// function palindromeChecker(text){
//   let reversedText = text.toLowerCase().split("").reverse().join("")

//   return text.toLowerCase() === reversedText
// }

// // OR

// function palindromeChecker(text){
//   let charArray = text.toLowerCase().split("")

//   let result = charArray.every((letter, index) => {
//     return letter === charArray[charArray.length - index - 1]
//   })

//   return result;
// }

// // Or

function palindromeChecker(text){
  let textLen = text.length

  for (let i = 0; i < textLen/2; i++){
    if(text[i] !== text[textLen - 1 - i]){
      return false;
    }
  }
  return true;
}

console.log(palindromeChecker("leonnoel"));



/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA, stringB){
  let result = 0

  if(stringA.length == stringB.length){
    
    for (let i = 0; i < stringA.length; i++) {
      if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
          result++
      }
    }

    return result
    
  } else {
    throw new Error("String do not have equal length")
  }
}

console.log(hammingDistance("boag", "baoy"))



/*
Given a sentence, return the longest word in the string. E.g

longestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development'
*/

// function longestWord(sentence){
//   let senWordArr = sentence.split(" ")
//   let maxWord = 0
//   let result = ''

//   for(let i = 0; i < senWordArr.length; i++){
//     if(senWordArr[i].length > maxWord){
//       maxWord = senWordArr[i].length
//       result = senWordArr[i]
//     }
//   }

//   return result
// }

// // Or

// function longestWord(text){
//   let result = text.split(" ").reduce((maxLengthWord, currentWord) => {
//     if(currentWord.length > maxLengthWord.length){
//       return currentWord
//     } else {
//       return maxLengthWord
//     }
//   }, "")

//   return result
// }

// // Or

function longestWord(text){
  let sortedArr = text.split(" ").sort((wordA, wordB) => wordB.length - wordA.length)

  return sortedArr[0]
}

console.log(longestWord("i am a nigerian nigga"));




/*
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g
searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"
*/

// function searchReplace(str, word, newWord){
//   // Code Here
//   if(word[0] === word[0].toUpperCase()){
//     newWord = newWord[0].toUpperCase() + newWord.slice(1)
//   }

//   return str.replace(word, newWord)
// }

// // Or

function searchReplace(str, word, newWord){
  // Code Here
  let regex = new RegExp(word, "gi")
  if (/[A-Z]/.test(word[0])){
    newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
  }

  return str.replace(regex, newWord)
}

console.log(searchReplace("i love Jesus", "Jesus", "god"));


/*
Translate the provided string to Pig Latin by following the rules below:

- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"
- For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”
*/


// // WITH AN IMPERATIVE approach

function pigLatin(string){
  let str = string.toLowerCase()

  let vowels = ["a", "e", "i", "o", "u"]
  let vowelIndex = 0

  if(vowels.includes(str[0])){
    return str + 'way'
  } else {
    for(let char of str){
      if(vowels.includes(char)){
        vowelIndex = str.indexOf(char)
        break;
      }
    }

    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
  }
}

// // WITH AN DECLARATIVE approach

// function pigLatin(str){
//   return str
//     .replace(/^([aeiouy])(._)/, '$1$2way')
//     .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
// }

console.log(pigLatin("tomtom"));


/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// function chunkArray(array, size) {
//   // Code goes here
//   let result = []
  
//   for(let value of array){
//       let lastArr = result[result.length -1]
      
//       if(!lastArr || lastArr.length == size){
//           result.push([value])
//       } else {
//           lastArr.push(value)
//       }
//   }

//   return result
// }

// // Or

function chunkArray(array, size){
  let result = []
  let arrCopy = [...array]

  while(arrCopy.length > 0){
    result.push(arrCopy.slice(0, size))
  }

  return result
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 5));


/*
Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below: BUild how own filter Function
*/

// function arrayFilter(arr, func){
//   for(elem of arr){
//     if(func(elem)){
//       return elem
//     }
//   }

//   return undefined
// }


// // OR

// function arrayFilter(arr, func){
//   let filteredArray = arr.filter(func)

//   return filteredArray[0] ? filteredArray[0] : undefined;
// }

// // OR

function arrayFilter(arr, func){
  return arr.find(func)
}


/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/



function factorial(num){
  let result = 1

  if(num > 0){
      for (let i = num; i > 0; i--) {
          result = result * i
      }
  } else {
      result = 1
  }

  return result
}

console.log(factorial(5));


/*
Given an integer, return an integer that has the reverse ordering of that which was received. E.g reverseInteger(-123) // should return -321
*/

function reverseString(text){
  return [...text].reduce((acc, char) => char + acc, '')
}

function reverseInteger(num){
  let reverseNum = parseInt(reverseString(num.toString()))

  return (reverseNum * Math.sign(num))
}


console.log(reverseInteger(-123));




/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



function fizzBuzz(n) {
  // Code goes here
  let arr = []

  for(let i = 1; i <= n; i++){
    // arr.push(i)
    if(i%3 === 0 && i%5 === 0){
      arr.push("Fizz")
    } else if(i%5 === 0){
      arr.push("Buzz")
    } else if(i%3 === 0){
      arr.push("FizzBuzz")
    } else{
      arr.push(i)
    }

  }

  return arr
}

console.log(fizzBuzz(17));
// fizzBuzz(17)

const vh = [1,1,2,3,4]
const vhh = [5,4,3,6,7]
console.log([...vh, ...vhh]);


/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays){
  let jointArray = []

  arrays.forEach(arr => {
    jointArray = [...jointArray, ...arr]
  })

  // return [...new Set([...jointArray])]

  // // Or

  return Array.from(new Set([...jointArray]))
}

console.log(mergeArrays([1,2,3,4,2], [2,3,4,5,1], [2,1,1,1,3,4]));


