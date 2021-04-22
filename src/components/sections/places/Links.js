import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/links'


const Links = () => {
  const { places } = useContext(ContentContext).main
  const params = useParams()
  const place = places.findIndex(p => p.place === params.place)
  if(place < 0) return null

  return(
    <Container>
      {place > 0 &&
        <Link 
          id="left"
          to={`/places/${ places[place - 1].place }`}
        >
          { places[place - 1].label }
        </Link>
      }
      {place < places.length - 1 &&
        <Link 
          id="right"
          to={`/places/${ places[place + 1].place }`}
        >
          { places[place + 1].label }
        </Link>
      }
    </Container>
  )
}

export default Links