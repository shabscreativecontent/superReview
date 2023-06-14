// // common JS
// const profile = require('./person')

// // ES6 JS
// // import profile from "./person";

// console.log(profile.speak(profile.name));
// // // console.log(__dirname, __filename);


// const Logger = require('./logger')

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener', data));

// logger.log('Hello World!')
// logger.log('Hello!')
// logger.log('Hi!')
// logger.log('HeyThere!')



const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
   // if (req.url === '/'){
   //    // res.writeHead(200, { 'Content-type': 'text/html' })
   //    // res.end('<h1>Ajide Shedrack Temitope</h1>');

   //    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
   //       if (err) throw err;
   //       res.writeHead(200, { 'Content-type': 'text/html' })
   //       res.end(content)
   //    })
   // }

   // if (req.url === '/about'){

   //    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
   //       if (err) throw err;
   //       res.writeHead(200, { 'Content-type': 'text/html' })
   //       res.end(content)
   //    })
   // }

   // if (req.url === '/api/users'){
   //    const users = [
   //       {name: 'Bob', age: '40'},
   //       {name: 'Shabs', age: '29'}
   //    ];

   //    res.writeHead(200, { 'Content-type': 'application/json' })
   //    res.end(JSON.stringify(users))
   // }


   // Build file path
   let filePath = path.join(__dirname, 
      'public', 
      req.url === '/' ? 'index.html' : req.url
      );

   // Extension of file
   let extname = path.extname(filePath)

   // Initial content type 
   let contentType = 'text/html'

   // Check ext and set content type
   switch(extname) {
      case '.js':
         contentType = 'test/javascript';
         break;
      case '.css':
         contentType = 'test/css';
         break;
      case '.json':
         contentType = 'application/json';
         break;
      case '.png':
         contentType = 'image/png';
         break;
      case '.jpg':
         contentType = 'image/jpg';
         break;
   }

   // Read File
   fs.readFile(filePath, (err, content) => {
      if(err){
         if(err.code == 'ENOENT'){
            // Page not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
               res.writeHead(200, { 'Content-type': 'text/html' })
               res.end(content, 'utf8')
            })
         } else {
            // some server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`)
         }
      } else {
         res.writeHead(200, { 'Content-type': contentType })
         res.end(content, 'utf8')
      }
   })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));