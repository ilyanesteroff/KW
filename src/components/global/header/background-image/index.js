import React, { memo } from 'react'
import Container from '../../../../styles/header/background-image'
import Navbar from '../navbar'
import LowerSection from './TweetsNWeather'


const BackgroundImage = ({ imageUrl }) => {
  return(
    <Container imageUrl={ imageUrl }>
      <Navbar withLogo/>
      <LowerSection/>
    </Container>
  )
}

export default memo(BackgroundImage)