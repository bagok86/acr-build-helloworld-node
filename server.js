const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  let name = request.query['name'];
  if (name === null || name.trim() === "") {
    response.write('Hello World\n')
  } else {
    response.write('Hello World! My name is ' + name + '\n')
  }
  response.write('Username: admin\n')
  response.write('Password: M6<hBx1rp8HF-c£#d\n')
  response.end('Version: ' + process.env.NODE_VERSION + '\n')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
