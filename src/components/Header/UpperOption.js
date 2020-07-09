import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { divStyle, item, iconStyle } from './styles'
import { WidthContext } from '../pages/contexts'

class UpperOption extends React.Component{
  
  static contextType = WidthContext

  static defaultProps = {
    divStyle: divStyle,
    iconStyle: iconStyle,
    itemStyle: item,
    fontSize: '2vh' 
  }

  render() {
    const width = this.context
    let output 
    width > 700?
    output =
    <ul style={this.props.divStyle}>
      <li><FontAwesomeIcon style={this.props.iconStyle} icon={this.props.icon}/></li>
      <li><h3 style={this.props.itemStyle}> {this.props.sentence} </h3></li>
    </ul> : output = <FontAwesomeIcon style={this.props.iconStyle} icon={this.props.icon}/>

        
    return(
      <div>
        {output}
      </div>
    )
  }
}

export default UpperOption