import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faChartBar, faBuilding, faNewspaper} from '@fortawesome/free-regular-svg-icons'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/main/services'


const Services = () => {
  const { services } = useContext(ContentContext).main.MainSection

  const items = [faComment, faChartBar, faBuilding, faNewspaper].map((icon, index) => 
    <Section
      url={services[index].href} 
      icon={icon} 
      headline={services[index].point} 
      text={services[index].text} 
      key={index}
    />
  )

  return (
    <Container>
      { items }
    </Container>
  )
}

const Section = ({ url, icon, headline, text }) => (
  <div className="service">
    <a 
      href={ url } 
      target="_blank" 
      rel="noopener noreferrer" 
    >
      <FontAwesomeIcon icon={ icon }/>
      <h2>{headline}</h2>
      <p>{text}</p>
    </a>
  </div>
)

export default Services