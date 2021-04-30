import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle  } from '@fortawesome/free-solid-svg-icons'
import Retweets from './Retweets'


const Controls = ({ tweet_url, retweet_count }) => (
  <div id="controls">
    <div>
      {tweet_url && 
        <a 
          id="tweet-url" 
          target="_blank" 
          rel="noopener noreferrer" 
          href={ tweet_url } 
        >
          <FontAwesomeIcon 
            id="heart" 
            icon={ faHeart }
          />
        </a>
      }
      <Retweets { ...{ retweet_count, tweet_url } }/>
    </div>
    <a 
      href="https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy" 
      target="_blank" 
      rel="noopener noreferrer" 
      id="info"
    >
      <FontAwesomeIcon icon={ faInfoCircle } />
    </a>
  </div>
)

export default Controls