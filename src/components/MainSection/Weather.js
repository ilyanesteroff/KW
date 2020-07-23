import React from 'react'
import { weather } from './refs/links'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'
import { SSS } from '../MainSection/styles'
import { Chapter, PS } from '../Helpers/DesignAssistants'
import Spinner from '../MainSection/Spinner'

export default () => {
    const [ response, loading, hasError, message ] = useFetch(weather.url, weather.headers, extractWeather, 'Weather')
    const [ spin ] = useSpinnerSuspense(7)
    
    let output

    if (response !== null && !hasError ){
        output = 
        <>
          <Chapter>The weather in Key West</Chapter>
          <Weather data={JSON.parse(response[0].replace(/[$]/g,','))}/>
        </>
    }
    else if(hasError) output = <Spinner spinner={false} message={message}/>
    else if (spin) output = <Spinner/>
    
    return (
      <div style={SSS}>
        {output}
      </div>
    )
}

const Weather = ({data}) => {
  console.log(data)

  return <></>
}

const toFahrenheit = temp => {
    return ((temp - 273.15) * 9/5 + 32).toFixed(2)
}

const extractWeather = json => {
    let output = {
      temp: toFahrenheit(json.main.temp),
      maxTemp: toFahrenheit(json.main.temp_max),
      minTemp: toFahrenheit(json.main.temp_min),
      feelsLike: toFahrenheit(json.main.feels_like),
      pressure: json.main.pressure,
      humidity: json.main.humidity,
      weather: json.weather[0].description,
      windSpeed: json.wind.speed / 1.6 ,
      sunrise: json.sys.sunrise,
      sunset: json.sys.sunset,
    }
    
    output = JSON.stringify(output).replace(/[,]/g,'$')
    return [output]
} 