import React, { useContext } from 'react'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/pages/trips'
import Slider from '../../global/slider'


const Trip = () => {
  const { trips } = useContext(ContentContext)

  return(
    <Container className="page-container">
      <h2>Tour operators & trip advisors</h2>
      <Slider
        items={
          trips.map((item) => (
            <div id="section">
              <img 
                alt={ item.name }
                src={ item.image }
              />
              <a 
                id="description"
                href={ item.link }
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2>{ item.name }</h2>
                <p>{ item.summary }</p>
              </a>
            </div>
          ))
        }
      />
    </Container>
  )
}

export default Trip