import React from 'react'
import ForecastSection from './ForecastSection'

class WeatherForecast extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <ul>
                <li><ForecastSection option="Clear" result="65°" /></li>
                <li><ForecastSection option="Hi" result="67°" /></li>
                <li><ForecastSection option="Lo" result="63°" /></li>
            </ul>
        )
    }
}

export default WeatherForecast