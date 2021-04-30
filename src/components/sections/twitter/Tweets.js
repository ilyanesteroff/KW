import React from 'react'
import Tweet from './tweet'


const Tweets = ({ tweets, tag }) => (
  <div id="tweets">
    { tweets.length > 0
        ? (
            <>
              <div id="tweet-container">
                {
                  tweets.slice(0, tweets.length / 2).map((tweet, index) => (
                    <Tweet 
                      key={ index + tweet.created_at } 
                      data={ tweet }
                    />)
                  )
                }
              </div>
              <div id="tweet-container">
                {
                  tweets.slice(-tweets.length / 2).map((tweet, index) => (
                    <Tweet 
                      key={ index + tweet.created_at } 
                      data={ tweet }
                    />)
                  )
                }
              </div>
            </>
          )
        : <h3 
            className="framed-container" 
            id="no-tweets"
          >No tweets matching #{tag} found</h3>
    }
  </div>
)

export default React.memo(Tweets)