const fs = require('fs')
const WorkerPool = require('./worker-pool.js')

const loadTweets = data => {
  const reader = fs.createReadStream('./data/twitter-tags.json')
  const chunks = []

  reader.on('data', (chunk) => chunks.push(chunk))
  reader.on('end', () => {
    try {
      let tags = JSON.parse(Buffer.concat(chunks).toString()).data
      const pool = new WorkerPool(tags.length, 'requester.js')

      let tweets = tags.map(tag => {
        return {
          url : data.url.replace('<Topic>', tag),
          options : data.options,
          path : data.path.replace('<Topic>', tag)
        }
      })
      tweets.forEach((item) => {
        pool.runTask(item, (err, result) => { })
      })
    } catch {

    }
  })
}

exports.loadTweets = loadTweets
