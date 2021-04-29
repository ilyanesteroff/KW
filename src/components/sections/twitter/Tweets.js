import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComment, faCheckCircle, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { getTime } from '../../../helpers/tweets'
import { WithModal } from '../../../helpers/HOC'
import TweetContainer from '../../../styles/tweets/tweet'


const Tweets = ({ tweets, tag }) => (
  <div id="tweets">
    { tweets.filter((t) => {
        if(!tag) return true
        return t.hashtags && t.hashtags.some((h) => h.toLowerCase().startsWith(tag.toLowerCase()))
      }).map((tweet, index) => (
        <Tweet 
          key={ index + tweet.created_at } 
          data={ tweet }
        />)
      )
    }
  </div>
)


const Metadata = ({ profile_image, verified_user, users_name, username }) => (
  <div id="upper-section">
    { profile_image &&
      <img 
        src={ profile_image } 
        alt=""
      />
    }
    { verified_user &&
      <FontAwesomeIcon 
        icon={ faCheckCircle } 
        id="verified"
      />
    }
    <h4 
      id="username" 
      style={{display: 'inline'}}
    >{ users_name }</h4>
    <h4 className="UsernameField">@{ username }</h4>
    <FontAwesomeIcon id="twitter-icon" icon={faTwitter}/>
  </div>
)


const Retweets = React.memo(({ retweet_count, tweet_url }) => {
  const generateContent = () => 
    retweet_count
      ? (
          <div className="comment">
            <FontAwesomeIcon className="CommentIcon" icon={faComment}/>
            <h3 className="RetweetCount">{ retweet_count }</h3>
          </div>
        )
      : (
          <div className="comment">
            <FontAwesomeIcon className="CommentIcon" icon={faUser}/>
            <h3 className="RetweetCount">View more tweets from this user</h3>
          </div>
        )
  
  return tweet_url
    ? <a href={ tweet_url } target="_blank" rel="noopener noreferrer">{ generateContent() }</a>
    : generateContent()
})


const Body = WithModal(({ text, media, hashtags, tweet_url, retweet_count, profile_link_color, createdAt, setImage }) => (
  <div className="TweetContent">
    {text && <p className="TweetText">{ text }</p>}
    {media && <img src={ media } alt=""/>}
    {hashtags && 
      hashtags.map((item, index) => (
        <a 
          key={index} 
          rel="noopener noreferrer" 
          className="Hashtag" 
          target="_blank" 
          href={`https://twitter.com/hashtag/${ item }`}
        >{`#${ item } `}</a>
      ))
    }
    <h5 className="CreatedAt">{ createdAt }</h5>
    {tweet_url && 
      <a className="TweetUrl" target="_blank" rel="noopener noreferrer" href={ tweet_url } style={{color: `#${profile_link_color}`}}>
        <FontAwesomeIcon 
          className="HeartIcon" 
          icon={faHeart}
        />
      </a>
    }
    <Retweets { ...{ retweet_count, tweet_url } }/>
    <a 
      href="https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="InfoLink"
    >
      <FontAwesomeIcon 
        icon={faInfoCircle} 
        className="InfoPolicy"
      />
    </a>
  </div>
))


const Tweet = ({ data }) => {
  if (data.text.lastIndexOf('https://') !== -1) data.text = data.text.slice(0, data.text.lastIndexOf('https://'))
  const createdAt = getTime(data.created_at.slice(0, data.created_at.lastIndexOf('+0000')))

  return(
    <TweetContainer bgColor={`#${data.profile_link_color}`}>
      <Metadata { ...data }/>
      <Body { ...{...data, createdAt} }/>
    </TweetContainer>
  )
}


export default Tweets