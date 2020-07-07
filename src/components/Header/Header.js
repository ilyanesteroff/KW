import React from 'react'
import UpperSection from './UpperSection'
import LowerSection from './LowerSection'
  
function Header(props) {
    return (
        <div>
            <UpperSection width={props.width} height={props.height}/>
            <LowerSection width={props.width} height={props.height}/>
        </div>
    )
}

export default Header