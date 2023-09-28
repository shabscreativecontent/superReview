//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener("click", getPix)

function getPix(){
  let inputVal = document.querySelector('input').value

  // document.querySelector('input').innerHTML = " "
  fetch(`https://api.nasa.gov/planetary/apod?api_key=bgQsyAefFeg6TjvPA67RPmBIn1VMF1i44D1KG4E6&date=${inputVal}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)

    if (data.media_type === "image") {
      document.querySelector('img').src = data.hdurl
    } else if (data.media_type === "video") {
      document.querySelector('iframe').src = data.url
      document.querySelector('img').style.display = "none"
      document.querySelector('#video').style.display = "block"
    }
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerHTML = data.explanation
  })

  // console.log("data");
}
