import React from 'react'
import { faSun, faCloudSun, faCloud, faCloudMoon, faCloudMoonRain, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { weatherIconStyle } from './styles'

class WeatherIcon extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <FontAwesomeIcon icon={faMoon} style={weatherIconStyle}/>
        )
    }
}

export default WeatherIcon