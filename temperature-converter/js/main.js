//Write your pseduo code first!
// get the degree celsius
// convert with the temperature converter formular
document.getElementById('convert').addEventListener('click', converter)
function converter() {
  let celsius = document.querySelector('#celsius').value

  const fahrenheit = (celsius * 9/5) + 32
  document.querySelector('h2').textContent = `${fahrenheit}°F
`
  // console.log(fahrenheit);
}
// display the result on the dom
