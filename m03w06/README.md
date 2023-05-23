# M03W06 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware
- [x] Common Errors
  - [x] Address in Use
  - [x] Cannot Set Headers

### HTTP
* HyperText Transfer Protocol
* Request/Response protocol
* HTTP is stateless: neither party has no remember any previous communication

### Request
* HTTP verb - GET, POST
  * GET => I would like to retrieve information
  * POST => I would like to send info
* url/endpoint - '/about' '/home'
  * www.google.com/search

### Response
* Status code
  * 1xx - routing codes
  * 2xx - success
  * 3xx - redirection
  * 4xx - client errors
  * 5xx - server errors
* body -> can be anything (HTML, CSS, JS, JSON, XML, image, raw data)

                                                  request
client <======tcp/http============================> server
        middleware      middleware   middleware   app.get()
       cookie-parser    body-parser
       request.cookies  request.body
        next()          next()          next()      

web client => any application that is capable of making an HTTP request (request, curl, wget, postman, rested)
web servers => any application that is capable of respondinging to HTTP requests (capable of sending a response) - nginx, apache, puma, Node


GET /
http://localhost:54321/


### Middleware
* code (functions) that sits between the request and response
* keeps our code DRY
* parsing incoming information

```js
const str = "alice, bob, carol"
str.split(', '); // ["alice", "bob", "carol"]
``` 








