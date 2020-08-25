import React from 'react'
import UpperSection from './UpperSection'
import UpperOption from  './UpperOption'
import LowerSection from './LowerSection'
import StickyNavbar from './StickyNavbar'
import {Width} from '../pages/contexts'
import { faVirus, faNewspaper, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default props => {
  return (
    <div>
      <StickyNavbar/>
      <UpperSection>
        <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
        <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
        {Width() < 1000 && <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>}
        {Width() < 1000 && <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/twitts/KeyWest'}/></li>}
      </UpperSection>
      <LowerSection image={props.image}/>
    </div>
  )
}