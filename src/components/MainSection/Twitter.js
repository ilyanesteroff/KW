import React, { useState, useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import { useFetch, useSpinnerSuspense, width } from '../Helpers/Helpers'
import Spinner from './Spinner'
import { twitterCredits, twitterRules } from './refs/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faComment, faUser } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { WidthContext } from '../pages/contexts'
import { Chapter } from '../Helpers/DesignAssistants'
import TwitterTags from '../Header/TwitterTags'
import { twitterTags } from '../MainSection/info'
import Modal from '../Helpers/Modal'

export default React.memo(({topic}) => {
  let url = twitterCredits.url.replace('_topic_', topic)
  const [ response, loading, error ] = useFetch(url, twitterCredits.headers, retrieveTweets, `${topic}Tweets`)
  const [ spin ] = useSpinnerSuspense(50)
  let output
  if (response !== null && response[response.length-1] === window.location.pathname.split('/')[2] && !error.hasError ){
    output = <>
      <Tweets data={response}/>
    </>
  }
  else if(error.hasError) output = <Spinner spinner={false} message={error.message}/>
  else if (spin) output = <Spinner/>
  else output = <></>
  return output
})

const UpperSection = React.memo( _ => {
  if(twitterTags.length === 3) twitterTags.push('summer')
  return (
    <div style={{textAlign: 'left', margin: '2%'}}>    
      <Chapter>More tweets on following topics</Chapter>
      <TwitterTags tags={twitterTags.filter(twit => twit != window.location.pathname.split('/')[2])} color="#333"/>
      <Chapter>Recent Tweets & Retweets on #{window.location.pathname.split('/')[2]}</Chapter>
    </div>
  )
})

const retrieveTweets = (json) => {
  let output = []
  json.statuses.forEach(item => {
    let media = ''
    let hashtags = []
    if (item.entities.media) if(item.entities.media[0].type = 'photo') media = item.entities.media[0].media_url_https
    if (item.entities.hashtags) if(item.entities.hashtags !== []) hashtags = item.entities.hashtags.map(item => hashtags.push(item.text))
    if (item.entities.hashtags) if(item.entities.hashtags !== []) hashtags = item.entities.hashtags.map(tag => tag.text)
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
  output.push(window.location.pathname.split('/')[2])
  return output
}

const Tweets = ({data}) => {
  let _data = data.filter((item, index) => {
    if(index !== 20) return item
  })
  const Width = () => React.useContext(WidthContext)
  let style = {
    tweetSection : {
      display: 'flex',
      flexWrap: 'no-wrap',
    },
    mainSection : {
      margin: Width() > 1300 ? '5vh 10%' : '5vh 5%'
    },
    mobile: {
      margin: '5vh 10%'
    }
  }
  let json = _data.map(item => JSON.parse(item.replace(/[$]/g,',')))
  let tweets = json.map((tweet, index) => <Tweet key={index} json={tweet}/>)
  let rightTweets = tweets.filter((tweet, index) => index % 2 === 0)
  let leftTweets = tweets.filter((tweet, index) => index % 2 === 1)
  let output 
  Width() > 1100 ? output = 
  <div style={style.mainSection}>
    <UpperSection/>
    <div style={style.tweetSection}>
      <div>{rightTweets}</div>
      <div>{leftTweets}</div>
    </div>
  </div> : 
    output = <div style={style.mobile}><UpperSection/>{tweets}</div>
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
  const Width = () => React.useContext(WidthContext)
  let output 
  if(retweets !== 0) 
    output = <div className="comment">
    <FontAwesomeIcon className="CommentIcon" icon={faComment}/>
    <h3 className="RetweetCount"> {retweets} {Width() > 500 && 'people are tweeting about this'}</h3>
  </div>
  else 
    output = <div className="comment">
      <FontAwesomeIcon className="CommentIcon" icon={faUser}/>
      <h3 className="RetweetCount"> {Width() > 530 && 'View more tweets from this user'}</h3>
    </div>

  if (url !== '')
    output = <a href={url} target="_blank">{output}</a>
  
  return output
}

const TweetUpperSection = _ => {
  const Avatar = () => React.useContext(AvatarContext)
  return (
    <div className="TweetUppersection">
      {Avatar() !== '' && <AvatarSection/>}
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
          { window.innerWidth > 400 && <FontAwesomeIcon className="TwitterIcon" icon={faTwitter}/>}
        </div>
      }
    </BgContext.Consumer>
  )
}

const UserNames = _ => {
  return (
    <div className="UserNames">
      <UsersNameContext.Consumer>
        { value => <h4 className="UsernameField" id="username">{value}</h4> }
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
      {json.media !== "" && <TweetMedia media={json.media}/>}
       {json.hashtags !== [] && <Hashtags source={json.hashtags}/>}
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

const TweetMedia = ({media}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <div className="TweetMedia">
          <img src={media} onClick={() => setIsModalOpen(true)}/>
        </div>
        {isModalOpen && <Modal>
          <div className="ImageInModal" onClick={() => setIsModalOpen(false)}>
            <img src={media} className="ModalImage"/>
          </div>
        </Modal>}
      </>
    )
}

const Hashtags = ({source}) => {
  let hashtags = source.map((item, index) => <a key={index} className="Hashtag" target="_blank" href={`https://twitter.com/hashtag/${item}`}>{`#${item} `}</a>)
  return <div className="HashTags">{hashtags}</div>
}

export { Tweets, retrieveTweets }