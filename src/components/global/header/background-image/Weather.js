import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '../../../../styles/header/weather'
import { useFetch } from '../../../../helpers/hooks'
import { defineIcon, extractWeather } from '../../../../helpers/weather'


const Weather = () => {
  const [ data, setData ] = useState(null)
  const [ icon, setIcon ] = useState(null)
  const [ color, setColor ] = useState('#bbb')

  useFetch('/weather.json', setData, extractWeather)

  useEffect(() => {
    if(data){
      let icon = defineIcon(data.weather, false)
      if(icon.color) setColor(icon.color)
      setIcon(icon.icon)
    }
  }, [ data ])

  return(
    <Link to="/weather">
      <Container svgColor={ color }>
        { icon && <FontAwesomeIcon icon={ icon }/> }
        { data && 
          <WeatherForecast 
            type={ data.weather } 
            temps={{
              max: data.high, 
              min: data.low, 
              temp: data.temperature}}
            /> 
        }
      </Container>
    </Link>
  )
}

const WeatherForecast = ({ type, temps }) => (
  <div id="flex">
    <ForecastSection option={ type } result={ temps.temp } />
    <ForecastSection option="highest" result={ temps.max } />
    <ForecastSection option="lowest" result={ temps.min } />
  </div>
)

const ForecastSection = ({ option, result }) => (
  <div className="forecast-section">
    <h4>{ option.toUpperCase() }</h4>
    <h3>{ result }</h3>
  </div>
)

export default Weather