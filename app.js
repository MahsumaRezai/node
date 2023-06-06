/*
 rep ,req 
 http https fs path 
*/
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader("hello", "test/html")
    res.write('<html>');
    res.write('<head><title>this my form page</title></head>');
    res.write('<body><h1><form action="/massage" method="POST"><input type="text"><button type="submit">Send me</button></form></body>');
    res.write('</html>');
    res.end();
    return res.end()
  }
  if (url === '/massage' && method === 'POST') {
    fs.writeFileSync("massage.txt", "Hello Masoumeh to node js code");
    res.statusCode = 320;
    res.setHeader('Loaction', '/');
    return res.end()

  }
  res.setHeader("hello", "test/html")
  res.write('<html>');
  res.write('<head><title>this my frist page</title></head>');
  res.write('<body><h1>Hello my node page</h1></body>');
  res.write('</html>');
  res.end()

})
server.listen(4000)
