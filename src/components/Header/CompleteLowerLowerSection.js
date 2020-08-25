import React from 'react'
import HeaderTweets from './HeaderTweets'
import Weather from './Weather'
import {useFetch} from '../Helpers/Hooks'

const CompleteLowerLowerSection = () => {
  const [response, loading, error] = useFetch('/twitter-tags')

  return(
    <div>
      {response !== null && 
        <HeaderTweets tags={response.data}/>
      }
      <Weather/>
    </div>
  )
}

export default CompleteLowerLowerSection