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

console.log(programElement(arr1,arr2));
