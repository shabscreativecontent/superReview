//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function print21(words, num){
  for (let i = 0; i < num; i++) {
    console.log(words);
    document.querySelector('#savageSays').innerHTML += words
  }
}

print21('21',21)
