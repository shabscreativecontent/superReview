//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = ` http://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)

        if (!localStorage.getItem('books')) {
          localStorage.setItem('books', data.title)
        } else {
          let book = localStorage.getItem("books") + " , " + data.title
          localStorage.setItem("books", book)
        }

        document.querySelector('h2').innerText = localStorage.getItem("books")
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// 0596156715
