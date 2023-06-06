//Get a dog photo from the dog.ceo api and place the photo in the DOM
const url = "https://dog.ceo/api/breeds/image/random"

fetch().then(res => res.json()).then(data => {
  console.log(data);

  document.querySelector('img').src = data.message;
})
