import React from 'react'
import { lowerHeader } from './styles'
import CompleteNavbar from './CompleteNavbar'
import CompleteLowerLowerSection from './CompleteLowerLowerSection'

class LowerSection extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let output 
        this.props.width > 950?
        output = <div><CompleteNavbar width={this.props.width} height={this.props.height}/>
        <CompleteLowerLowerSection width={this.props.width} height={this.props.height}/></div> :
        output = <CompleteNavbar width={this.props.width} height={this.props.height}/>
        
        return (
            <div style={lowerHeader} className="lowerHeader">
                {output}
            </div>
        )
    }
}

export default LowerSection