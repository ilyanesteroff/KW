import React from 'react'
import HeaderTweets from './HeaderTweets'
import Weather from './Weather'
import { Width } from '../pages/contexts'

const CompleteLowerLowerSection = () => {
  return(
    <div>
      <HeaderTweets/>
      {Width() > 1000 && <Weather/>}
    </div>
  )
}

export default CompleteLowerLowerSection