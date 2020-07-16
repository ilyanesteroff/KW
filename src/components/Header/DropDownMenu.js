import React from 'react'
import { dropDownItem, dropDownMenu } from './styles'
import { Link } from "react-router-dom";
import { link } from './styles'

class DropDownMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let items = ['Home', 'About', 'History', 'Location']
        let options = items.map((item, index) => {
          let res
          index > 0 ? res = item.toLowerCase() : res = ''
          return <Link to={'/' + res } style={link}>
                   <DropDownItem item={item} style={dropDownItem} />
                 </Link>
        })
        return(
            <div style={dropDownMenu}>
                {options}
            </div>
        )
    }
}

function DropDownItem(props){
    return <h2 style={props.style}>{props.item}</h2>
}

export default DropDownMenu