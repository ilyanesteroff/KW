import React from 'react'
import WeatherIcon from './WeatherIcon'
import WeatherForecast from './WeatherForecast'
import { weather } from './styles'
import { Link } from 'react-router-dom'

class WeatherSection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Link to="/weather">
              <ul style={weather}>
                <li><WeatherIcon /></li>
                <li><WeatherForecast/></li>
              </ul>
            </Link>
        )
    }
}

export default WeatherSection