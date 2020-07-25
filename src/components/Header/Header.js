import React from 'react'
import UpperSection from './UpperSection'
import UpperOption from  './UpperOption'
import LowerSection from './LowerSection'
import StickyNavbar from './StickyNavbar'
import {WidthContext} from '../pages/contexts'
import { faVirus, faNewspaper, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

class Header extends React.Component {
  constructor(props){
    super(props)
  }

  static contextType = WidthContext
  
  render () {
    return (
        <div>
          <StickyNavbar/>
          <UpperSection>
            <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
            <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
            {this.context < 950 && <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>}
          </UpperSection>
          <LowerSection image={this.props.image}/>
        </div>
    )
  }
}

export default Header