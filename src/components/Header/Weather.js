import React from 'react'
import WeatherIcon from './WeatherIcon'
import WeatherForecast from './WeatherForecast'
import { weather } from './styles'

class WeatherSection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul style={weather}>
                <li><WeatherIcon /></li>
                <li><WeatherForecast/></li>
            </ul>
        )
    }
}

export default WeatherSection