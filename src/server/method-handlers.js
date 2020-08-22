const fs = require('fs')
const path = require('path')

const piper = (response, name) => {
  let _path = path.resolve(__dirname, `./data/${name}.json`)
  fs.exists(_path, (exists) => {
    response.setHeader('Content-Type', 'application/json')
    if(exists) {
      response.statusCode = 200
      const stream = fs.createReadStream(_path)
      stream.pipe(response)
    } else headWriter(response, 400, '{ "Error" : "Cannot find anything matching your request" }')
  })
}
    
const handlePost = (request, response, cb) => {
  const chunks = []
  request.on('data', (chunk) => {
    chunks.push(chunk)
  })
  return request.on('end', () => {
    response.setHeader('Content-Type', 'application/json')
    cb(chunks)
  })
}

const headWriter = (response, code, data) => {
  response.writeHead(code , {'content-type' : 'application/json'}) 
  response.end(data)
}

exports.postHandler = handlePost
exports.getHandler = piper
exports.headWriter = headWriter