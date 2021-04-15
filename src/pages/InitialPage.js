import React from 'react'
import Container from '../styles/initialPage'
import { useOverflowBlock } from '../helpers/hooks'
import Flag from '../assets/KW_flag.png'


const InitialPage = () => {
  useOverflowBlock()

  return(
    <Container>
      <img src={ Flag } alt="Flag of Key West"/>
    </Container>
  )
}

export default InitialPage