const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  /*var url = require('url');
  var url_parts = url.parse(request.url, true);
  var name = url_parts.query.name;
  if (name === null || name.trim() === "") {
    response.write('Hello World\n')
  } else {
    response.write('Hello World! My name is ' + name + '\n')
  }*/
  response.write('Username: admin\n')
  response.write('Password: M6<hBx1rp8HF-c£#d\n')
  response.write(request.query + '\n')
  response.end('Version: ' + process.env.NODE_VERSION + '\n')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
