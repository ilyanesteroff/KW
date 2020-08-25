const http = require('http')
const dataLoader = require('./data-refresher')
const key = require('./key')
const { getHandler, postHandler } = require('./routeHandlers')
const { headWriter }  = require('./method-handlers')
const { loadTweets } = require('./tweet-loader')
const {apis, tweets} = require('./Credentials')

dataLoader(apis)
loadTweets(tweets)

setInterval(() => {
  dataLoader(apis)
  loadTweets(tweets)
  console.log('updated data!', new Date().getMinutes())
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