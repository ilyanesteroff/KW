import React from 'react'
import Item from './Item'
import { Width, Height } from '../pages/contexts'
import { services } from '../MainSection/info'

const CityStuff = () => {
    let style = getStyle()
    
    let items = services.map((item, index) => 
    <Item url={services[index].href} icon={services[index].icon} headline={services[index].point} text={services[index].text} key={index}/>)

    return <div style={style}>{items}</div>
}

const getStyle = () => {
    let output = {
        margin: '8vh 0 10vh 0'
    }
    if(Height() < 400)
        output.margin = '15vh 0 40vh 0'
    if(Width() > 750) {
        output.display = 'flex'
        output.flexDirection = 'row'
        output.flexWrap = 'nowrap'
        output.justifyContent = 'space-around'
        output.alignItems = 'baseline'
        output.height = '35vh'
        output.textAlign = 'center'
    } else {
        output.display = 'block'
    }
    return output
}

export default CityStuff