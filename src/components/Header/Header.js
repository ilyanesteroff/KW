import React from 'react'
import UpperSection from './UpperSection'
import LowerSection from './LowerSection'
import StickyNavbar from './StickyNavbar'

class Header extends React.Component {
  
  shouldComponentUpdate(){}
  render () {
    return (
        <div>
            <StickyNavbar/>
            <UpperSection/>
            <LowerSection/>
        </div>
    )
  }
}

export default Header