//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
function checkAge(age) {
  if(age < 16){
    return "You cant drive";
  }else if(age < 18){
    return "You cant hate from outside the club because you cant get in.";
  }else if(age < 21){
    return "you can't drink";
  }else if(age < 25){
    return "You cant rent cars affordably";
  }else if(age < 30){
    return "You cant rent fancy cars affordably";
  }else if(age >= 30){
    return "there is nothing left to look forward";
  }else {
    return "NOT A NUMBER."
  }
}

// console.log(checkAge(13));
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', getAge)

function getAge(){
  document.querySelector('p').innerHTML = " "
  const inputVal = document.getElementById('danceDanceRevolution').value
  document.querySelector('p').innerHTML = checkAge(inputVal)
  // console.log(inputVal);
}
