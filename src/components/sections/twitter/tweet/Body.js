import React from 'react'
import { WithModal } from '../../../../helpers/HOC'
import Controls from './Controls'


const Body = WithModal(({ text, media, hashtags, tweet_url, retweet_count, createdAt, setImage }) => (
  <div id="tweet-body">
    {text && <p>{ text }</p>}
    {media && 
      <img 
        onClick={() => setImage(media)}
        src={ media } 
        alt=""
      />
    }
    {hashtags && 
      <div id="hashtags">
        {
          hashtags.map((item, index) => (
            <a 
              key={index} 
              rel="noopener noreferrer" 
              target="_blank" 
              href={`https://twitter.com/hashtag/${ item }`}
            >{`#${ item } `}</a>
          ))
        }
      </div>
    }
    <h5 id="created-at">{ createdAt }</h5>
    <Controls { ...{ tweet_url, retweet_count } }/>
  </div>
))

export default React.memo(Body)