import React, { useContext } from 'react'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/pages/about'


const About = () => {
  const { about } = useContext(ContentContext)
  console.log(about)

  return(
    <Container>

    </Container>
  )
}

export default About