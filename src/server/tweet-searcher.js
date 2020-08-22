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
      let counters = {length: 0, added: 0, enteredAll: promises.map(() => {return false})}
      const promise = new Promise((resolve, reject) => { 
        topics.forEach((topic, index) => {
          pool.runTask({path: `./data/tweets/${topic}.json`, tag: tag.toLowerCase()} , (err, result) => {
            counters.length += result.length
            if(result.length !== 0) result.forEach((item) => {
              output.push(item)
              counters.added++
              if(counters.added === counters.length) resolve(output)
            })
            counters.enteredAll[index] = true
            if(counters.enteredAll.every(item => item === true) && counters.added === 0 && counters.length === 0) resolve({ Error : 'Found nothing matching your tag'})
          })
        })
      })
      promise.then(res => this.emit('output', res))
    })
  }
}

module.exports = TweetSearcher
