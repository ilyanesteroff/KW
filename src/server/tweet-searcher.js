const fs = require('fs')
const WorkerPool = require('./worker-pool')
const { EventEmitter } = require('events')

class TweetSearcher extends EventEmitter {
  constructor() {
    super()
  }

  searchTweets = tag => {
    let output = []
    let topics = ['Covid19', 'KeyWest', 'Florida']
    const pool = new WorkerPool(3, 'searcher.js')
    let promise = new Promise((resolve, reject) => {
      topics.forEach((topic, index) => {
        pool.runTask({path: `./data/tweets/${topic}.json`, tag: tag.toLowerCase()} , (err, result) => {
          if(result.length !== 0) result.forEach(item => output.push(item))
        })
      })
      resolve(output)
    })
    promise.then(i => console.log(i))
      .catch(err => console.log(err.message))
  }
}

module.exports = TweetSearcher
