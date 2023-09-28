//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', display)

function display(){
  let inputVal = document.querySelector('input').value

  document.getElementById('recipe').innerHTML = " "
  
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // console.log(data.drinks[0].strDrinkThumb);
    // console.log(data.drinks[0].strInstructions);

    if (data.drinks !== null) {

      for (let i = 0; i < data.drinks.length; i++) {
        document.getElementById('recipe').innerHTML += `
        <h1>Name: ${data.drinks[i]["strDrink"]}</h1>
        <img src=${data.drinks[i]["strDrinkThumb"]} >
        <ul>
        <li>${data.drinks[i]["strIngredient1"]}</li>
        <li>${data.drinks[i]["strIngredient2"]}</li>
        <li>${data.drinks[i]["strIngredient3"]}</li>
        <li>${data.drinks[i]["strIngredient4"]}</li>
        <li>${data.drinks[i]["strIngredient5"]}</li>
        </ul>
        <h3>${data.drinks[i]["strInstructions"]}</h3>
        `
        document.getElementById('recipe').style.margin = "30px"  
      }

      // document.querySelector('h2').innerHTML = `Name: ${data.drinks[0]["strDrink"]}`
      // document.querySelector("img").src = data.drinks[0]["strDrinkThumb"]
      // document.querySelector("h3").innerText = `Instructions: ${data.drinks[0]["strInstructions"]}`
    }else {
      alert("wrong Spelling")
    }

  }).catch(err => {
    console.log(`error ${err}`);
  })
}
