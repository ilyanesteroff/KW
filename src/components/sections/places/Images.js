import React from 'react'
import { isMobile } from 'react-device-detect'
import Container from '../../../styles/slider/images'
import { WithModal } from '../../../helpers/HOC'


const Images = ({ color, description, url, setImage }) => (
  !isMobile
    ? (
        <Container 
          className="slider-container"
          color={ color }
        >
          <div id="normal-container">
            <img 
              src={ url } 
              alt={ description }
              onClick={() => setImage(url)}
            />
            <div id="normal-description">
              <h2>{ description}</h2>
            </div>
          </div>
        </Container>
      )
    : (
        <Container 
          className="slider-container"
          color={ color }
          url={ `url(${url})` }
        >
          <div 
            id="mobile-container"
            className="with-before"
            onClick={() => setImage(url)}
          >
            <div 
              id="mobile-description"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{ description }</h2>
            </div>
          </div>
        </Container>
      )
)

export default WithModal(Images)