import React from 'react'
import Tweet from './tweet'


const Tweets = ({ tweets, tag }) => (
  <div id="tweets">
    { tweets.length > 0
        ? (tweets.map((tweet, index) => (
            <Tweet 
              key={ index + tweet.created_at } 
              data={ tweet }
            />)
          ))
        : <h3 
            className="framed-container" 
            id="no-tweets"
          >No tweets matching #{tag} found</h3>
    }
  </div>
)

export default React.memo(Tweets)