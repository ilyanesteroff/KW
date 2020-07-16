import React from 'react'
import UpperSection from './UpperSection'
import LowerSection from './LowerSection'
import StickyNavbar from './StickyNavbar'

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
        <div>
            <StickyNavbar/>
            <UpperSection/>
            <LowerSection image={this.props.image}/>
        </div>
    )
  }
}

export default Header