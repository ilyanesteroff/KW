const fs = require('fs')
const https = require('https')
const WorkerPool = require('./worker-pool.js')
const worker = require('worker_threads')
const crypto = require('crypto')

const updateOrLoad = data => {
  const pool = new WorkerPool(data.length, 'requester.js')
  data.forEach((item) => {
    pool.runTask(item, (err, result) => {
      console.log(result)
    })
  })
  setTimeout(() => pool.close(), 10000)
}

/*const stream = fs.createReadStream('./data/chart.json')
const chunks = []
stream.on('data', (chunk) => chunks.push(chunk))
stream.on('end', () => {
  let json = JSON.stringify(chunks.toString())
  const writer = fs.createWriteStream('./data/chart.json')
  writer.end(json)
  //console.log(JSON.parse(json))
})*/


module.exports = updateOrLoad