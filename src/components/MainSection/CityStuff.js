import React from 'react'
import Item from './Item'
import { services } from '../MainSection/info'

export default () => {
  let items = services.map((item, index) => 
  <Item url={services[index].href} icon={services[index].icon} headline={services[index].point} text={services[index].text} key={index}/>)

  return (
    <>
      <div className="CityServicesSection">
        {items}
      </div>
    </>
  )
}