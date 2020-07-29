import React from 'react'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'
import Spinner from './Spinner'
import { twitterCredits } from './refs/links'

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
    if (item.entities.media) if(item.entities.media[0].type = 'photo') media = item.entities.media[0].media_url_https
    let element = {
      created_at: item.created_at,
      tweet_url: item.entities.urls.length === 0? '' : item.entities.urls[0].expanded_url,
      media: media,
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
  let json = data.map(item => JSON.parse(item.replace(/[$]/g,',')))
  let tweets = json.map((tweet, index) => <Tweet key={index} json={tweet}/>)
  return <div>{tweets}</div>
}

const Tweet = ({json}) => {
  let output = 
  <div className="Tweet">
    <div className="TweetUppersection">
      {json.profile_image !== '' &&
      <div className="AvatarSection" style={{background: `#${json.profile_background_color}`}}>
        <img className="Avatar" src={json.profile_image}/>
      </div>}
      {json.username !== '' && 
      <h4 className="UsernameField">{json.username}</h4>}
    </div>
    <div className="TweetContent">
      {json.text !== "" && <p className="TweetText">{json.text}</p>}
      {json.media !== "" &&
       <div className="TweetMedia">
         {<img src={json.media}/>}
       </div>}
      {json.retweet_count !== '' && 
        <h3 className="RetweetCount">Retweeted by {json.retweet_count} users</h3>}
      <h5 className="CreatedAt">{json.created_at}</h5>
      {json.tweet_url !== '' && <a className="TweetUrl" href={json.tweet_url} style={{color: `#${json.profile_link_color}`}}>View more</a>}
    </div>
  </div>
  return output
}

export { Tweets, retrieveTweets }