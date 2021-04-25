import React from 'react'
import { WithModal } from '../../../helpers/HOC'
import Container from '../../../styles/slider/cards'


const Item = ({ image, color, description, setImage }) => (
  <Container 
    className="slider-container"
    color={ color }
  >
    <img 
      src={ image }
      alt={ description }
      onClick={() => setImage(image)}
    />
    <p>{ description }</p>
  </Container>
)

export default WithModal(Item)