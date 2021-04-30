import React, { useContext } from 'react'
import { ContentContext } from '../../../helpers/contexts'
import Slider from '../../global/slider'
import Article from '../news/Article'


const Trip = () => {
  const { trips } = useContext(ContentContext)

  return(
    <div className="page-container">
      <h2>Tour operators & trip advisors</h2>
      <Slider
        items={
          trips.map((item) => (
            <Article 
              { ...{ ...item, url: item.link, linkLabel: item.name } }
            />
          ))
        }
      />
    </div>
  )
}

export default Trip