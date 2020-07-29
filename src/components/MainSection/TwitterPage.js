import React from 'react'
import { retrieveTweets, Tweets } from './Twitter'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'
import Spinner from './Spinner'
import { twitterCredits } from './refs/links'

export default () => {
  let url = twitterCredits.url.replace('_topic_', 'summer')
  let [ response, loading, error ] = useFetch(url, twitterCredits.headers, retrieveTweets, `SummerTweets`)
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