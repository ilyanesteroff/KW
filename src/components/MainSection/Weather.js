import React from 'react'
import { useFetch, useSpinnerSuspense } from '../Helpers/Hooks'
import { Chapter, TextArea, PS } from '../Helpers/DesignAssistants'
import { defineIcon, extractWeather, WeatherData } from './WeatherContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { months, days } from '../Helpers/Time'
import FetchRenderer from './FetchRenderer'

export default React.memo(() => {
  const [ response, loading, error ] = useFetch('/weather', extractWeather, 'Weather')
  const [ spin ] = useSpinnerSuspense(7)
    
  return (
    <FetchRenderer response={response} error={error} spin={spin}>
      {response !== null && 
        <>
          <div className="MainSectionContainer TableSection">
            <Chapter additionalStyle={{textAlign: 'left', marginTop: '10vh'}}>Current weather in Key West</Chapter>
            <TextArea additionalStyle={{textAlign: 'left', fontWeight: '600'}}>{defineDay()}</TextArea>
          </div>
          <div style={{backgroundColor: '#9999ee', boxShadow: '0 0 10px'}} className="MainSectionContainer TableSection">
            <Weather data={JSON.parse(response[0].replace(/[$]/g,','))}/>
          </div>
        </>
      }
    </FetchRenderer>
  )
})

const defineDay = _ => {
  let today = new Date()
  return `${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}`
}

const Weather = ({data}) => {
  let icon = defineIcon(data.weather, true)
  return ( 
    <>
      <Chapter additionalStyle={{color: '#111', margin: '2% 0', paddingTop: '1%'}}>
        <span>
          {`${data.temperature}  `}
        </span>
        {data.weather.toUpperCase()}
      </Chapter>
      <FontAwesomeIcon icon={icon.icon} style={icon.style}/>
      <WeatherData data={Object.keys(data).map((key) => [key, data[key]])}/>
    </>
  )
}


//https://keywestwebapp.herokuapp.com/