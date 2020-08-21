const { parentPort, isMainThread } = require('worker_threads')
const fs = require('fs')

parentPort.on('message', (data) => {
  searchTweets(data)
})

const searchTweets = content => {
  let output = []

  fs.readFile(content.path, (err, data) => {
    json = JSON.parse(data.toString()).statuses
    json.forEach(item => {
      let hashtags = item.entities.hashtags
      if(hashtags.length !== 0) {
        hashtags.forEach(tag => {
          if(tag.text.toLowerCase() === content.tag)
            output.push(item)
        })
      }
    })
    parentPort.postMessage(output)
  })
}