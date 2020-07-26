import React from 'react'
import { weather } from './refs/links'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'
import { SSS } from '../MainSection/styles'
import { Chapter, PS } from '../Helpers/DesignAssistants'
import Spinner from '../MainSection/Spinner'
import { defineIcon, extractWeather, WeatherData } from './WeatherContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
    const [ response, loading, error ] = useFetch(weather.url, weather.headers, extractWeather, 'Weather')
    const [ spin ] = useSpinnerSuspense(7)
    
    let output

    if (response !== null && !error.hasError ){
        output = 
        <>
          <Chapter additionalStyle={{textAlign: 'center', marginTop: '10vh'}}>The weather in Key West now</Chapter>
          <div style={Object.assign({}, SSS(), {backgroundColor: '#9999ee', boxShadow: '0 0 10px'})}>
            <Weather data={JSON.parse(response[0].replace(/[$]/g,','))}/>
          </div>
        </>
    }
    else if(error.hasError) output = <Spinner spinner={false} message={error.message}/>
    else if (spin) output = <Spinner/>
    else output = <></>
    
    return output
}

const Weather = ({data}) => {
  let icon = defineIcon(data.weather, true)
  return ( 
    <>
      <Chapter additionalStyle={{color: '#444', margin: '2% 0', paddingTop: '1%'}}>{data.weather.toUpperCase()}</Chapter>
      <FontAwesomeIcon icon={icon.icon} style={icon.style}/>
      <WeatherData data={Object.keys(data).map((key) => [key, data[key]])}/>
    </>
  )
}
