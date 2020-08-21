const http = require('http')
const fs = require('fs')
const credentials = require('./credentials')
const dataLoader = require('./data-refresher')
const path = require('path')
const TweetSearcher = require('./tweet-searcher')

//dataLoader(credentials)

setInterval(() => {
  //dataLoader(credentials)
  console.log('updated data!')
}, 216000)

http.createServer((request, response) => {

  const piper = name => {
    let _path = path.resolve(__dirname, `./data/${name}.json`)
    fs.exists(_path, (exists) => {
      response.setHeader('Content-Type', 'application/json')
      if(exists) {
        response.statusCode = 200
        const stream = fs.createReadStream(_path)
        stream.pipe(response)
      } else {
        response.statusCode = 400
        response.end('{ "Error" : "Cannot find anything matching your request" }')
      }
    })
  }

  switch (request.method){
    case ('GET') : {
      if(request.url.includes('/tweets/search/q=') && request.url.indexOf('/tweets/search/q=') === 0) {
        //tweetSearcher(request.url.substr(request.url.indexOf('/q=') + 3))
        const searcher = new TweetSearcher()
        searcher.searchTweets(request.url.substr(request.url.indexOf('/q=') + 3))
        searcher.on('event', (ev) => {
          response.end(JSON.stringify(ev))
        })
      } else {
        piper(request.url.substr(1))
      }
    }
  }  
}).listen(777)

