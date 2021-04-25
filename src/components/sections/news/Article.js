import React from 'react'
import { isMobile } from 'react-device-detect'
import Container from '../../../styles/slider/articles'
import { WithModal } from '../../../helpers/HOC'


const Article = ({ image, url, title, summary, setImage, byline }) => (
  !isMobile
    ? (
        <Container className="slider-container">
          <img 
            src={ image } 
            alt={ title }
            onClick={() => setImage(image)}
          />
          <div id="normal-description">
            <div>
              <h3>{ title }</h3>
              <p>{ summary }</p>
              {byline &&
                <p id="byline">{ byline }</p>
              }
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
        <Container 
          className="slider-container"
          image={ `url(${image})` }
        >
          <div 
            id="mobile-container"
            className="with-before"
            onClick={() => setImage(image)}
          >
            <a
              href={ url } 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div id="mobile-description">
                <h3>{ title }</h3>
              </div>
            </a>
          </div>
        </Container>
      )
)

export default WithModal(Article)