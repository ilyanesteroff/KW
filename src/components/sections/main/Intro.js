import React, { useContext } from 'react'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/main/intro'


const Intro = () => {
  const { chapter, text } = useContext(ContentContext).main.MainSection.content

  return (
    <Container>
      <h2>{ chapter }</h2>
      <p>{ text }</p>
    </Container>
  )
}

export default Intro