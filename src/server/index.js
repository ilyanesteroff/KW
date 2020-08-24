const http = require('http')
const credentials = require('./Credentials')
const dataLoader = require('./data-refresher')
const key = require('./key')
const { getHandler, postHandler } = require('./routeHandlers')
const { headWriter }  = require('./method-handlers')

dataLoader(credentials)

setInterval(() => {
  dataLoader(credentials)
  //console.log('updated data!', new Date().getMinutes())
}, 3600000)

http.createServer((request, response) => {
  const { method, headers } = request
  if(headers.authorization === key && headers["content-type"] === 'application/json' ) {
    if (method === 'GET') 
      return getHandler(request, response)
    else if (method === 'POST' && headers["content-type"] === 'application/json') 
      return postHandler(request, response)
    else 
      return headWriter(response, 400, '{ "Error" : "Unsupported request method" }')
    
  } else 
    return headWriter(response, 400, '{ "Error" : "Missing headers" }')
}).listen(777)