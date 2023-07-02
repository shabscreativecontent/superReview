const express = require('express')
const app = express()
const PORT = 3001




let persons = [
   {
     "id": 1,
     "name": "Arto Hellas",
     "number": "040-123456"
   },
   {
     "id": 2,
     "name": "Ada Lovelace",
     "number": "39-44-5323523"
   },
   {
     "id": 3,
     "name": "Dan Abramov",
     "number": "12-43-234345"
   },
   {
     "id": 4,
     "name": "Mary Poppendieck",
     "number": "39-23-6423122"
   }
]



app.get('/', (request, response) => {
   response.send("<h1>Hello Shab's</h1>")
})

app.get('/api/persons', (request, response) => {
   response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
   const peopleId = Number(request.params.id)
   const person = persons.find(num => num.id === peopleId)

   response.json(person)
})

app.get('/info', (request, response) => {
   const numP = persons.length
   const time = new Date()

   console.log(time);
   response.send(`
     <p>Phonebook has info for ${numP} people</p>
     <p>${time}</p>
     `)
})

app.listen(PORT, () => {
   console.log(`Server is live on port ${PORT}`);
})
