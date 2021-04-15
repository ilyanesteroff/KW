import React, { useContext, useState, memo } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/main/places'
import PlaceContainer from '../../../styles/main/place'


const Places = () => {
  const { places } = useContext(ContentContext).main

  const getPlaces = () => (
    places.map((place, index) => (
      <Place { ...place } key={ place.color + index }/>
    ))
  )

  return(
    <Container>
      <h2>The best places for visitors</h2>
      <div className="places">
        { getPlaces() }
      </div>
    </Container>
  )
}

const Place = memo(({ color, url, factType, content, place }) => {
  const [ opened, setOpened ] = useState(false)

  return (
    <>
      <PlaceContainer 
        bgClr={ color }
        opened={ opened }
        imgUrl={ url }
      >
        <div className="info">
          <h3>{ factType }</h3>
          <p>{ content }</p>
          <Link to={`/places/${ place }`}>More details</Link>
          <FontAwesomeIcon 
            icon={ faTimesCircle } 
            onClick={() => setOpened(!opened)}
          />
        </div>
      </PlaceContainer>
    </>
  )
})

export default Places