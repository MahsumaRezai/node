/*
 rep ,req 
 http https fs path 
*/
const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader("hello", "test/html")
  res.write('<html>');
  res.write('<head><title>this my frist page</title></head>');
  res.write('<body><h1>Hello my node page</h1></body>');
  res.write('</html>');
  res.end()

})
server.listen(4000)
