import React from 'react'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'
import Spinner from './Spinner'
import { twitterCredits } from './refs/links'

export default () => {
  let tweetTopic  = window.location.pathname.split('/')[2]
  let url = twitterCredits.url.replace('_topic_', tweetTopic)
  let [ response, loading, error ] = useFetch(url, twitterCredits.headers, retrieveTweets, `${tweetTopic}Tweets`)
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
  //console.log(json)
  return <div></div>
}