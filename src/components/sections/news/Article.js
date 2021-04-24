import React from 'react'
import { isMobile } from 'react-device-detect'
import Container from '../../../styles/slider/articles'
import { WithModal } from '../../../helpers/HOC'


const Article = ({ image, url, title, summary, setImage }) => (
  !isMobile
    ? (
        <Container className="slider-container">
          <img 
            src={ image } 
            alt={ title }
            onClick={() => setImage(image)}
          />
          <div id="description">
            <div>
              <h3>{ title }</h3>
              <p>{ summary }</p>
              <a 
                href={ url } 
                target="_blank" 
                rel="noopener noreferrer"
              >Original article</a>
            </div>
          </div>
        </Container>
      )
    : (
        <Container className="slider-container">
          <img src={ image } alt={ title }/>
          <div>
            <h3>{ title }</h3>
            <p>{ summary }</p>
            <a 
              href={ url } 
              target="_blank" 
              rel="noopener noreferrer"
            >Original article</a>
          </div>
        </Container>
      )
)

export default WithModal(Article)