const http = require('http')
const credentials = require('./Credentials')
const dataLoader = require('./data-refresher')
const key = require('./key')
const { getHandler, postHandler } = require('./routeHandlers')
const { headWriter }  = require('./method-handlers')

dataLoader(credentials)

setInterval(() => {
  dataLoader(credentials)
  console.log('updated data!', new Date().getMinutes())
}, 3600000)

http.createServer((request, response) => {
  if(request.headers.authorization === key && request.headers["content-type"] === 'application/json') {
    if (request.method === 'GET') 
      return getHandler(request, response)
    else if (request.method === 'POST' && request.headers["content-type"] === 'application/json') 
      return postHandler(request, response)
    else 
      return headWriter(response, 400, '{ "Error" : "Unsupported request method" }')
    
  } else 
    return headWriter(response, 400, '{ "Error" : "Missing headers" }')
}).listen(777)