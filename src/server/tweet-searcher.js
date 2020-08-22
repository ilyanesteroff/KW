const fs = require('fs')
const WorkerPool = require('./worker-pool')
const { EventEmitter } = require('events')

class TweetSearcher extends EventEmitter {
  constructor() {
    super()
  }

  searchTweets = tag => {
    let output = []
    let promises = []
    
    async function getFileNames(path) {
      const dir = await fs.promises.opendir(path);
      for await (const dirent of dir) {
        new Promise((resolve, reject) => resolve(dirent.name.split('.')[0]))
          .then((val) => promises.push(val))
      }
    }

    getFileNames('./data/tweets').then(() => promises).then((topics) => {
      const pool = new WorkerPool(3, 'searcher.js')
      let counter = 0
      let counter2 = 0
      const promise = new Promise((resolve, reject) => { 
        topics.forEach((topic, index) => {
          pool.runTask({path: `./data/tweets/${topic}.json`, tag: tag.toLowerCase()} , (err, result) => {
            counter2 += result.length
            if(result.length !== 0) result.forEach((item, index2) => {
              output.push(item)
              counter++
              if(counter === counter2) resolve(output)
            })
          })
        })
      })
      promise.then(res => this.emit('output', res))
    })
  }
}

module.exports = TweetSearcher
