import React from 'react'
import {forecastSection} from './styles'

class ForecastSection extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div style={forecastSection}>
                <h4>{this.props.option}</h4>
                <h3 style={{fontSize: '3vh'}}>{this.props.result}</h3>
            </div>
        )
    }
}

export default ForecastSection