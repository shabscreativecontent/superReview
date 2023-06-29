const express = require('express')
const app = express()
const PORT = 7000


let ballers = [
   {
      "name": "shedrack",
      "Hennesy": "6 Bottles",
      "Rose Moet": "3 Bottles"
   },
   {
      "name": "imole",
      "Hennesy": "6 Bottles",
      "Rose Moet": "3 Bottles"
   },
   {
      "name": "samuel",
      "Hennesy": "6 Bottles",
      "Rose Moet": "3 Bottles"
   }
]

// To access the data easily, we need the help of the express json-parser that is taken to use with command 
app.use(express.json())

// // Adding a note happens by making an HTTP POST request to the address http://localhost:3001/api/notes, and by sending all the information for the new note in the request body in JSON format.
// app.post('/api/baller', (request, response) => {
//    const note = request.body
//    console.log(note)
//    response.json(note)
// })

const generateId = () => {
   const maxId = notes.length > 0
     ? Math.max(...notes.map(n => n.id))
     : 0
   return maxId + 1
}
 
app.post('/api/notes', (request, response) => {
   const body = request.body
 
   if (!body.content) {
     return response.status(400).json({ 
       error: 'content missing' 
     })
   }
 
   const note = {
     content: body.content,
     important: body.important || false,
     id: generateId(),
   }
 
   notes = notes.concat(note)
 
   response.json(note)
})

app.get('/', (request, response) => {
   response.send('<h1>Hello World!</h1>')
})

app.get('/api/baller/:name', (request, response) => {
   const name = request.params.name.toLowerCase()
   const ballerName = ballers.find(note => note.name === name)
   if(ballerName){
      response.json(ballerName)
   }else{
      response.json(404, ()=> console.error(error))
   }
   
})

app.delete('/api/baller/:name', (request,response) => {
   const name = request.params.name.toLowerCase()
   const ballerName = ballers.filter(note => note.name !== name)

   response.status(204).end()
})

app.listen(PORT, () => console.log(`Server running on post ${PORT}`))