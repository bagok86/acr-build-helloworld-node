const http = require('http')

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})

  /* Credentials in comments
    Username: admin
    Password: M63hBx1rp8HF-c5#d
    AccessToken: 34_r9?EC5g:+;h+&w0T|Ka2(Vr-^LDuBCPQL07.7tB{$fV=*V-
  */

  response.write('<!DOCTYPE html><html><body>')
  response.write('Hello World! ')

  // XSS
  let searchParams = (new URL(request.url, `http://${request.headers.host}`)).searchParams
  if (searchParams.has('name')) {
    let name = searchParams.get('name')
    response.write('My name is <b>' + name + '</b>!</br>')
  } else {
    response.write('What\'s your name?</br>')
  }

  // Credit card in HTML comments
  response.write('<!-- Credit Card: 378282246310001 -->')

  response.write('Version: ' + process.env.NODE_VERSION + '</br>')
  response.end('</body></html>')
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
