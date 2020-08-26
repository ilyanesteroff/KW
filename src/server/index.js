const http = require('http')
const key = require('./key')
const { getHandler, postHandler } = require('./routeHandlers')
const { headWriter }  = require('./method-handlers')
const WorkerPool = require('./worker-pool')

const manager = new WorkerPool(1, 'update-content.js')
manager.runTask('run', (err, res) => {})

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