const fs = require('fs')
const https = require('https')
const WorkerPool = require('./worker-pool.js')
const worker = require('worker_threads')

const updateOrLoad = data => {
  const pool = new WorkerPool(data.length, 'requester.js')
  data.forEach((item) => {
    pool.runTask(item, (err, result) => {
      console.log(result)
    })
  })
  setTimeout(() => pool.close(), 10000)
}

module.exports = updateOrLoad