const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>{
      if(err) throw err
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(content)
    })
    
  } else if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) =>{
      if(err) throw err
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.end(content)
    })
    
  } else if(req.url === '/api/users'){
    fs.readFile(path.join(__dirname, 'public', 'application.json'), (err, content) =>{
      if(err) throw err
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(content)
    })
  }
});

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
