import React from 'react'
import Tweets from './Tweets'
import Weather from './Weather'
import Container from '../../../../styles/header/navbar'


const TweetsAndWeather = () => {
  return(
    <Container id="lowest-header">
      <Tweets/>
      <Weather/>
    </Container>
  )
}

export default TweetsAndWeather