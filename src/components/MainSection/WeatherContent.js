import React from 'react'
import { faSun, faCloud, faCloudSun, 
    faCloudRain, faCloudSunRain, faMoon, 
    faCloudMoonRain, faCloudMoon, faWind } from '@fortawesome/free-solid-svg-icons'
import { Height, Width } from '../pages/contexts' 

const WeatherData = (props) => {
  const { data } = props
  let content
  if(Width() > 1024) {
    let head = data.map((item, index) => { 
      if (item[0] !== 'weather')
        return <th key={index}>{item[0].charAt(0).toUpperCase() + item[0].slice(1).replace(/[_]/g,' ')}</th>
    })
    let body = data.map((item, index) => {
      if (item[0] !== 'weather')
        return <td key={index}>{item[1]}</td>
    })
    content = <><thead><tr>{head}</tr></thead><tbody><tr>{body}</tr></tbody></>
  } else {
    let body = data.map((item, index) => {
      if (item[0] !== 'weather')
        return <tr key={index}>
          <th key={index+'th'}>{item[0].charAt(0).toUpperCase() + item[0].slice(1).replace(/[_]/g,' ')}</th>
          <td key={index+'td'}>{item[1]}</td>
        </tr>
    })
    content = <tbody>{body}</tbody>
  }

  return (
    <table>
      {content}
    </table>
  )
}

const defineIcon = (type, forPage) => {
    let output = {
        icon: '', 
        style: {
          color: '#f3f3f3',
          margin: '3% 0'     
        }
    }
    let date = new Date()
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000)
    let curTime = new Date(utc + (3600000*(-4)))
    if(forPage){
      Height > 400 ? output.style.fontSize = '10vh' : output.style.fontSize = '12vh'
    }
    if (curTime.getHours() < 5 || curTime.getHours() > 20) {
      switch (type) {
        case ('few clouds') :
          output.icon =  faCloudMoon
          return output
        case ('clear sky') : 
          output.icon = faMoon
          return output
        case ('moderate rain') :
          output.icon = faCloudMoonRain
          return output
        case ('light rain') :
          output.icon = faCloudMoonRain
          output.style.color = '#aaaaff'
          return output
        case ('scattered clouds') :
          output.icon = faCloud
          return output
        case ('heavy intensity rain') :
          output.icon = faCloudRain
          output.style.color = '#229'
          return output
        default : 
          output.icon = faWind
          return output
      }
    } else {
      switch (type) {
        case ('few clouds') :
          output.icon = faCloudSun
          output.style.color = '#aaaaff'
          return output
        case ('clear sky') : 
          output.icon = faSun
          output.style.color = '#ffff33'
          return output
        case ('moderate rain') :
          output.icon = faCloudRain
          output.style.color = '#2222ff'
          return output
        case ('light rain') :
          output.icon = faCloudSunRain
          output.style.color = '#4444ff'
          return output
        case ('scattered clouds') :
          output.icon = faCloud
          return output
        case ('heavy intensity rain') :
          output.icon = faCloudRain
          output.style.color = '#229'
          return output
        default : 
          output.icon = faWind
          return output
      }
    }
}

const extractWeather = json => {
    let output = {
      temperature: toFahrenheit(json.main.temp) + ' °F',
      high: toFahrenheit(json.main.temp_max) + ' °F',
      low: toFahrenheit(json.main.temp_min) + ' °F',
      feels_like: toFahrenheit(json.main.feels_like) + ' °F',
      pressure: json.main.pressure + ' Pa',
      humidity: json.main.humidity + ' %',
      weather: json.weather[0].description,
      wind_speed: (json.wind.speed / 1.6).toFixed(2) + ' mph', 
    }
    
    output = JSON.stringify(output).replace(/[,]/g,'$')
    return [output]
} 

const toFahrenheit = temp => {
    return ((temp - 273.15) * 9/5 + 32).toFixed(2)
}

export { defineIcon, extractWeather, WeatherData }