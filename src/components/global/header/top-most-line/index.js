import React from 'react'
import Time from './Time'
import IconLabel from './IconLabel'
import Container from '../../../../styles/header/topmostLine'
import { faVirus, faNewspaper, faCloud, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const TopmostLine = () => (
  <Container>
    <Time/>
    <div id="links">
      <IconLabel link="/covid" icon={ faVirus } label="Covid-19 Updates"/>
      <IconLabel link="/news" icon={ faNewspaper } label="Trending News"/>
      <IconLabel link="/trips" icon={ faUmbrellaBeach } label="Tour Operators"/>
      <div id="min-width-1100">
        <IconLabel link="/weather" icon={ faCloud } label="Weather"/>
        <IconLabel link="/tweets" icon={ faTwitter } label="Tweets"/>
      </div>
    </div>
  </Container>
)

export default TopmostLine