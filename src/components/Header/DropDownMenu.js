import React from 'react'
import { dropDownItem, dropDownMenu } from './styles'

class DropDownMenu extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let items = ['Home', 'About', 'History', 'Location']
        let options = items.map(item => <DropDownItem item={item} style={dropDownItem} />)
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