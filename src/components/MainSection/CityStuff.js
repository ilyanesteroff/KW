import React from 'react'
import Item from './Item'
import { faComment, faChartBar, faBuilding, faNewspaper} from '@fortawesome/free-regular-svg-icons'

export default ({services}) => {
  let icons = [faComment, faChartBar, faBuilding, faNewspaper]
  let items = services.map((item, index) => 
  <Item url={services[index].href} icon={icons[index]} headline={services[index].point} text={services[index].text} key={index}/>)

  return (
    <>
      <div className="CityServicesSection">
        {items}
      </div>
    </>
  )
}