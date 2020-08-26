const dataLoader = require('./data-refresher')
const { loadTweets } = require('./tweet-loader')
const {apis, tweets} = require('./Credentials')
const {parentPort} = require('worker_threads')
const {watchForTags} = require('./twitter-watcher')

parentPort.on('message', (data) => manageContent())

const manageContent = () => {
  dataLoader(apis)
  loadTweets(tweets)
  watchForTags()
  
  setInterval(() => {
    dataLoader(apis)
    loadTweets(tweets)
  }, 3600000)
}
