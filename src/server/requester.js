const { parentPort } = require('worker_threads')
const fs = require('fs')
const https = require('https')

parentPort.on('message', (task) => {
  makeRequest(task)
})

const makeRequest = (data) => {
  const {url, options, path} = data
  https.get(url, options, function (res) {
    var chunks = []
    
    res.on("data", function (chunk) {
      chunks.push(chunk)
    })
    
    res.on("end", function () {
      const writer = fs.createWriteStream(path)
      writer.end(Buffer.concat(chunks).toString(), () => parentPort.postMessage('data fetched!'))
    })
  })
}