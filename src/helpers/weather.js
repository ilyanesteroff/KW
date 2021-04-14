import {
  faCloud, faMoon, faCloudMoon, 
  faCloudMoonRain, faCloudRain, faWind, 
  faCloudSun, faSun, faCloudSunRain 
} from '@fortawesome/free-solid-svg-icons'


export const defineIcon = (type, forPage) => {
  let output = {}
  let date = new Date()
  let utc = date.getTime() + (date.getTimezoneOffset() * 60000)
  let curTime = new Date(utc + (3600000*(-4)))
  
  if (curTime.getHours() < 5 || curTime.getHours() > 20) {
    switch (type) {
      case ('few clouds') :
        output.icon = faCloudMoon
        return output
      case ('clear sky') : 
        output.icon = faMoon
        return output
      case ('moderate rain') :
        output.icon = faCloudMoonRain
        return output
      case ('light rain') :
        output.icon = faCloudMoonRain
        output.color = '#aaaaff'
        return output
      case ('scattered clouds') :
        output.icon = faCloud
        return output
      case ('heavy intensity rain') :
        output.icon = faCloudRain
        output.color = '#229'
        return output
      default : 
        output.icon = faWind
        return output
    }
  } else {
    switch (type) {
      case ('few clouds') :
        output.icon = faCloudSun
        output.color = '#aaaaff'
        return output
      case ('clear sky') : 
        output.icon = faSun
        output.color = '#ffff33'
        return output
      case ('moderate rain') :
        output.icon = faCloudRain
        output.color = '#2222ff'
        return output
      case ('light rain') :
        output.icon = faCloudSunRain
        output.color = '#4444ff'
        return output
      case ('scattered clouds') :
        output.icon = faCloud
        return output
      case ('heavy intensity rain') :
        output.icon = faCloudRain
        output.color = '#229'
        return output
      default : 
        output.icon = faWind
        return output
    }
  }
}

export const extractWeather = (json) => ({
  temperature: toFahrenheit(json.main.temp) + ' °F',
  high: toFahrenheit(json.main.temp_max) + ' °F',
  low: toFahrenheit(json.main.temp_min) + ' °F',
  feels_like: toFahrenheit(json.main.feels_like) + ' °F',
  pressure: json.main.pressure + ' Pa',
  humidity: json.main.humidity + ' %',
  weather: json.weather[0].description,
  wind_speed: (json.wind.speed / 1.6).toFixed(2) + ' mph', 
})

const toFahrenheit = temp => {
  return ((temp - 273.15) * 9/5 + 32).toFixed(2)
}