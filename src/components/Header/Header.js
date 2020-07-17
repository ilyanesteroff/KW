import React from 'react'
import UpperSection from './UpperSection'
import UpperOption from  './UpperOption'
import LowerSection from './LowerSection'
import StickyNavbar from './StickyNavbar'
import { faVirus, faNewspaper } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
        <div>
          <StickyNavbar/>
          <UpperSection>
            <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
            <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
          </UpperSection>
          <LowerSection image={this.props.image}/>
        </div>
    )
  }
}

export default Header