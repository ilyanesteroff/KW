import React from 'react'
import Container from '../../../../styles/header/background-image'
import Navbar from '../navbar'


const BackgroundImage = ({ imageUrl }) => {
  return(
    <Container imageUrl={ imageUrl }>
      <Navbar withLogo/>
    </Container>
  )
}

export default BackgroundImage