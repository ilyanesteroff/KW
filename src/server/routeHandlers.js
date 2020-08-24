const fs = require('fs')
const path = require('path')
const { getHandler, postHandler, headWriter } = require('./method-handlers')
const TweetSearcher = require('./tweet-searcher')

const handleGetRequests = (request, response) => {
  if(request.url.includes('/tweets/search/q=') && request.url.indexOf('/tweets/search/q=') === 0) {
    const searcher = new TweetSearcher()

    searcher.searchTweets(request.url.substr(request.url.indexOf('/q=') + 3))

    searcher.on('output', (data) => headWriter(response, 200, JSON.stringify(data)))

  } else 
    return getHandler(response, request.url.substr(1))
}

const handlePostRequests = (request, response) => {
  if(request.url === '/authorization') {
    postHandler(request, response, (chunks) => {

      let body = JSON.parse(Buffer.concat(chunks).toString())
      console.log(body)
      if(body.password === 'r*26puls' && body.username === 'PetyaPiskin') 
        return headWriter(response, 200, '{"Authentication" : "succeded"}')
      else
        return headWriter(response, 400, '{ "Authentication": "failed" }')
    })
  } else if (!request.url.includes('/tweets')) {
    fs.exists(path.resolve(__dirname, `./data/${request.url.substr(1)}.json`), (exists) => {
      postHandler(request, response, (chunks) => {
        if(exists) {
          if(chunks.length > 0) {
            const writer = fs.createWriteStream(path.resolve(__dirname, `./data/${request.url.substr(1)}.json`))
            writer.write(chunks.toString())
            writer.end()
            return response.end('{ "updated" : true }')
          } else 
            return headWriter(response, 400, '{ "updated" : false, "reason" : "empty body" }')
        } else 
          return headWriter(response, 404, '{ "Error" : "Unsupported request method" }')
      })
    })
  }
}

exports.getHandler = handleGetRequests
exports.postHandler = handlePostRequests