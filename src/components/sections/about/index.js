import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { ContentContext } from '../../../helpers/contexts'
import { WithScrollUp } from '../../../helpers/HOC'
import Website from './Website'
import KeyWest from './KeyWest'
import Container from '../../../styles/pages/about'
import Navigation from '../../global/Navigation'


const About = ({ page }) => {
  const { about } = useContext(ContentContext)
  const index = about.links.findIndex((i) => i.param === page)
  if(index < 0) return <Redirect to={ `/about/${ about.links[0].param }` }/>

  return(
    <Container className="page-container">
      <h2>{ about.links[index].label }</h2>
      {
        index === 0
          ? <KeyWest data={ about.keyWest }/>
          : <Website data={ about.website }/>
      }
      <Navigation
        path="about"
        prev={
          index > 0
            ? ({ ...about.links[0] })
            : null
        }
        next={
          index === 0
            ? ({ ...about.links[1] })
            : null
        }
      />
    </Container>
  )
}

export default WithScrollUp(About)