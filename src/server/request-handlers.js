const fs = require('fs')
const path = require('path')

module.exports = class {
  static piper = (response, name) => {
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
    
  static handlePost = (request, response, cb) => {
    const chunks = []
    request.on('data', (chunk) => {
      chunks.push(chunk)
    })
    return request.on('end', () => {
      response.setHeader('Content-Type', 'application/json')
      cb(chunks)
    })
  }
}