import React, { useContext } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { ContentContext } from '../helpers/contexts'
import BackgroundImage from '../components/global/header/background-image'
import Place from '../components/sections/places'


const Places = () => {
  const { places } = useContext(ContentContext).main
  const params = useParams()
  const place = places.find(p => p.place === params.place)

  return place
    ? (
        <>  
          <BackgroundImage imageUrl={ `url(${place.url})` }/>
          <Place data={ place }/>
        </>
      )
    : <Redirect to="/"/>
}


export default Places