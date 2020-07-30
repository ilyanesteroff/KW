import React from 'react'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'
import Spinner from './Spinner'
import { twitterCredits, twitterRules } from './refs/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faComment, faUser } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { WidthContext } from '../pages/contexts'

export default ({topic}) => {
  let url = twitterCredits.url.replace('_topic_', topic)
  let [ response, loading, error ] = useFetch(url, twitterCredits.headers, retrieveTweets, `${topic}Tweets`)
  const [ spin ] = useSpinnerSuspense(50)
  
  let output
  if (response !== null && !error.hasError ){
    output = <Tweets data={response}/>
  }
  else if(error.hasError) output = <Spinner spinner={false} message={error.message}/>
  else if (spin) output = <Spinner/>
  else output = <></>

  return output
}

const retrieveTweets = (json) => {
  let output = []
  json.statuses.forEach(item => {
    let media = ''
    let hashtags = []
    if (item.entities.media) if(item.entities.media[0].type = 'photo') media = item.entities.media[0].media_url_https
    if (item.entities.hashtags) if(item.entities.hashtags !== []) hashtags = item.entities.hashtags.map(tag => hashtags.push(item.text))
    let element = {
      created_at: item.created_at,
      tweet_url: item.entities.urls.length === 0? '' : item.entities.urls[0].expanded_url,
      media: media,
      hashtags: hashtags,
      retweet_count: item.retweet_count,
      text: item.text,
      username: item.user.screen_name,
      profile_image: item.user.profile_image_url_https,
      profile_link_color: item.user.profile_link_color,
      profile_background_color: item.user.profile_background_color,
      user_descriptions: item.user.description,
      users_name: item.user.name
    }
    output.push(JSON.stringify(element).replace(/[,]/g,'$'))
  })
  return output
}

const Tweets = ({data}) => {
  const Width = () => React.useContext(WidthContext)
  let style = {
    tweetSection : {
      display: 'flex',
      flexWrap: 'no-wrap',
      margin: Width() > 1300 ? '5vh 10%' : '5vh 5%' ,
    }
  }
  let json = data.map(item => JSON.parse(item.replace(/[$]/g,',')))
  let tweets = json.map((tweet, index) => <Tweet key={index} json={tweet}/>)
  let rightTweets = tweets.filter((tweet, index) => index % 2 === 0)
  let leftTweets = tweets.filter((tweet, index) => index % 2 === 1)
  let output 
  Width() > 1100 ? output = 
  <div style={style.tweetSection}>
    <div>{rightTweets}</div>
    <div>{leftTweets}</div>
  </div> : 
    output = <div>{tweets}</div>
  return output
}

const getMins = mins => {
  let output = mins.toString()
  if (output.length === 1) output = '0' + output 
  return output
}

const getTime = (time) => {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'mMy', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let date = new Date(time)
  date.setFullYear(new Date().getFullYear())
  let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  let dt = new Date(utc)
  return `${dt.getUTCHours()}:${getMins(dt.getMinutes())} | ${months[dt.getMonth()]} ${dt.getUTCDate()} ${dt.getFullYear()}`
}

const AvatarContext = React.createContext('')
const UsernameContext = React.createContext('')
const UsersNameContext = React.createContext('')
const BgContext = React.createContext('')

const Tweet = ({json}) => {
  if (json.text.lastIndexOf('https://') !== -1) json.text = json.text.slice(0, json.text.lastIndexOf('https://'))
  let createdAt = getTime(json.created_at.slice(0, json.created_at.lastIndexOf('+0000')))

  let output = 
  <div className="Tweet">
    <AvatarContext.Provider value={json.profile_image}>
      <UsernameContext.Provider value={json.username}>
        <UsersNameContext.Provider value={json.users_name}>
          <BgContext.Provider value={json.profile_background_color}>
            <TweetUpperSection/>
          </BgContext.Provider>
        </UsersNameContext.Provider>
      </UsernameContext.Provider>
    </AvatarContext.Provider>
    <TweetContent json={json} createdAt={createdAt}/>
  </div>
  return output
}

const Retweets = ({retweets, url}) => {
  let output 
  if(retweets !== 0) 
    output = <div className="comment">
    <FontAwesomeIcon className="CommentIcon" icon={faComment}/>
    <h3 className="RetweetCount"> {retweets} people are tweeting about this</h3>
  </div>
  else 
    output = <div className="comment">
      <FontAwesomeIcon className="CommentIcon" icon={faUser}/>
      <h3 className="RetweetCount"> View more tweets from this user</h3>
    </div>

  if (url !== '')
    output = <a href={url} target="_blank">{output}</a>
  
  return output
}

const TweetUpperSection = _ => {
  return (
    <div className="TweetUppersection">
      <AvatarSection/>
    </div>
  )
}

const AvatarSection = _ => {
  return (
    <BgContext.Consumer>
      { bgColor => 
        <div className="AvatarSection" style={{background: `#${bgColor}99`}}>
          <AvatarContext.Consumer>
            { avatar => <img className="Avatar" src={avatar}/> }
          </AvatarContext.Consumer>
          <UserNames/>
          <FontAwesomeIcon className="TwitterIcon" icon={faTwitter}/>
        </div>
      }
    </BgContext.Consumer>
  )
}

const UserNames = _ => {
  return (
    <div className="UserNames">
      <UsersNameContext.Consumer>
        { value => <h4 className="UsernameField">{value}</h4> }
      </UsersNameContext.Consumer>
      <UsernameContext.Consumer>
        { value => <h4 className="UsernameField">@{value}</h4>}
      </UsernameContext.Consumer>
    </div>
  )
}

const TweetContent = ({json, createdAt}) => {
  return (
    <div className="TweetContent">
      {json.text !== "" && <p className="TweetText">{json.text}</p>}
      {json.media !== "" &&
      <div className="TweetMedia">
       {<img src={json.media}/>}
       </div>}
       <h5 className="CreatedAt">{createdAt}</h5>
       {json.tweet_url !== '' && 
        <a className="TweetUrl" target="_blank" href={json.tweet_url} style={{color: `#${json.profile_link_color}`}}>
          <FontAwesomeIcon className="HeartIcon" icon={faHeart}/>
        </a>
       }
      <Retweets retweets={json.retweet_count} url={json.tweet_url}/>
      <a href={twitterRules} target="_blank" className="InfoLink">
        <FontAwesomeIcon icon={faInfoCircle} className="InfoPolicy"/>
      </a>
    </div>
  )
}

export { Tweets, retrieveTweets }