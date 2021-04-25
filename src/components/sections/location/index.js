import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { ContentContext } from '../../../helpers/contexts'
import { WithModal, WithScrollUp } from '../../../helpers/HOC'
import Navigation from './Navigation'
import Container from '../../../styles/location'


const Location = ({ setImage, map }) => {
  const { location } = useContext(ContentContext)
  const index = location.items.findIndex((item) => item === map)

  if(index < 0) return <Redirect to={`/location/${ location.items[0] }`}/>
  
  return(
    <Container className="page-container">
      <h2>{ location.items[ index ] }</h2>
      <img
        src={ location.content[ index ] }
        alt="Satelite map"
        onClick={() => setImage(location.content[ index ])}
      />
      <Navigation
        prev={ index > 0 ? location.items[ index - 1 ] : null } 
        next={ index < location.items.length - 1 ? location.items[ index + 1 ] : null }
      />
    </Container>
  )
}

export default WithScrollUp(WithModal(Location))