const http = require('http')
const fs = require('fs')
const path = require('path')
const credentials = require('./Credentials')
const dataLoader = require('./data-refresher')
const TweetSearcher = require('./tweet-searcher')
const key = require('./key')
const RH = require('./request-handlers')

dataLoader(credentials)

setInterval(() => {
  dataLoader(credentials)
  console.log('updated data!', new Date().getMinutes())
}, 3600000)

http.createServer((request, response) => {
  if(request.headers.authorization === key && request.headers["content-type"] === 'application/json') {
    if (request.method === 'GET') {
      if(request.url.includes('/tweets/search/q=') && request.url.indexOf('/tweets/search/q=') === 0) {
        const searcher = new TweetSearcher()
        searcher.searchTweets(request.url.substr(request.url.indexOf('/q=') + 3))
        searcher.on('output', (data) => {
          response.setHeader('content-type', 'application/json')
          return response.end(JSON.stringify(data))
        })
      } else {
        return RH.piper(response, request.url.substr(1))
      }
    } else if (request.method === 'POST' && request.headers["content-type"] === 'application/json') {
      if(request.url === '/authorization') {
        RH.handlePost(request, response, (chunks) => {
          let body = JSON.parse(Buffer.concat(chunks).toString())
          if(body.password === 'r*26puls' && body.username === 'PetyaPiskin') {
            response.writeHead(200, {'cookie': 'id=AdminLoggedIn; Max-Age=2592000;'})
            return response.end('{"Authentication" : "succeded"}')
          } else {
            response.statusCode = 400
            return response.end('{ "Authentication": "failed" }')
          }
        })
      } else if (!request.url.includes('/tweets')) {
        fs.exists(path.resolve(__dirname, `./data/${request.url.substr(1)}.json`), (exists) => {
          RH.handlePost(request, response, (chunks) => {
            if(exists) {
              if(chunks.length > 0) {
                const writer = fs.createWriteStream(path.resolve(__dirname, `./data/${request.url.substr(1)}.json`))
                writer.write(chunks.toString())
                writer.end()
                return response.end('{ "updated" : true }')
              } else {
                response.statusCode = 400
                return response.end('{ "updated" : false, "reason" : "empty body" }')
              }
            } else {
              response.statusCode = 404
              return response.end('{ "updated" : false, "reason" : "Invalid filename" }')
            }
          })
        })
      } else {
        response.writeHead(400, {'content-type' : 'application/json'})
        return response.end('{ "updated" : false, "reason" : "Bad request" }')
      }
    } else {
      response.writeHead(400, {'content-type' : 'application/json'})
      response.end('{ "Error" : "Unsupported request method" }')
    }
  } else {
    response.writeHead(400, {'content-type' : 'application/json'})
    response.end('{ "Error" : "Missing headers" }')
  }
}).listen(777)