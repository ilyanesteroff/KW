import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { divStyle, item, iconStyle } from './styles'
import { WidthContext } from '../pages/contexts'
import { Link } from 'react-router-dom'

class UpperOption extends React.Component{
  
  static contextType = WidthContext

  static defaultProps = {
    divStyle: divStyle,
    iconStyle: iconStyle,
    itemStyle: item,
    fontSize: '2vh' 
  }

  render() {
    const { divStyle, iconStyle, link, sentence, icon, itemStyle } = this.props
    const width = this.context
    let output 
    width > 700?
    output =
    <ul style={divStyle}>
      <li><FontAwesomeIcon style={iconStyle} icon={icon}/></li>
      <li><h3 style={itemStyle}> {sentence} </h3></li>
    </ul> : output = <FontAwesomeIcon style={iconStyle} icon={icon}/>

    return(
      <div>
        <Link to={link}>
          {output}
        </Link>
      </div>
    )
  }
}

export default UpperOption