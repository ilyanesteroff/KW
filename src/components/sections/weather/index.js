import React, { useContext } from 'react'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/weather'
import Lower from './Lower'
import { defineDay, extractWeather } from '../../../helpers/weather'


const Weather = () => {
  const { weather } = useContext(ContentContext)

  return(
    <Container>
      <div className="section table">
        <h2>Current weather in Key West</h2>
        <p>{defineDay()}</p>
      </div>
      <div style={{backgroundColor: '#9999ee', boxShadow: '0 0 10px'}} className="section table">
        <Lower data={ extractWeather(weather) }/> 
      </div>
    </Container>
  )
}


export default Weather