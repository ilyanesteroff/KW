import React, { useContext } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { ContentContext } from '../helpers/contexts'
import BackgroundImage from '../components/global/header/background-image'
import Place from '../components/sections/places'


const Places = () => {
  const { places } = useContext(ContentContext).main
  const { place } = useParams()
  const _place = places.find(p => p.place === place)

  return _place
    ? (
        <>  
          <BackgroundImage imageUrl={ `url(${_place.url})` }/>
          <Place data={ _place }/>
        </>
      )
    : <Redirect to="/"/>
}

export default Places