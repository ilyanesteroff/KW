import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComment } from '@fortawesome/free-regular-svg-icons'


const Retweets = ({ retweet_count, tweet_url }) => {
  const generateContent = () => 
    retweet_count
      ? (
          <div id="comment">
            <FontAwesomeIcon icon={faComment}/>
            <h3>{ retweet_count }</h3>
          </div>
        )
      : (
          <div id="comment">
            <FontAwesomeIcon icon={faUser}/>
            <h3>View more tweets from this user</h3>
          </div>
        )
  
  return tweet_url
    ? <a href={ tweet_url } target="_blank" rel="noopener noreferrer">{ generateContent() }</a>
    : generateContent()
}

export default React.memo(Retweets)