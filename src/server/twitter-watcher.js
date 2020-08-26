const fs = require('fs')
const { loadTweets } = require('./tweet-loader')
const { tweets } = require('./Credentials')

const watchForTags = () => {
  const file = './data/twitter-tags.json'

  const watcher = fs.watchFile(file, (curr, prev) => {
    loadTweets(tweets)
  })
}

exports.watchForTags = watchForTags