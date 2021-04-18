import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Container from '../../../styles/footer'


const Footer = () => (
  <>
    <h2 className="above-footer">Key West 2021</h2>
    <Container>
      <SocialMedias/>
    </Container>
  </>
)

const SocialMedias = () => {
  const links = ['https://www.facebook.com', 'https://www.twitter.com', 'https://www.instagram.com', 'https://www.youtube.com/']
  const icons = [faFacebook, faTwitter, faInstagram, faYoutube]
  return (
    <>
      <div id="social-networks">
        {
          links.map((link, index) => (
            <a 
              className="SocialMediaIcon" 
              href={ link } 
              target="_blank" 
              rel="noopener noreferrer"
              key={ link + index }
            >
              <FontAwesomeIcon icon={ icons[index] }/>
            </a>
          ))
        }
      </div>
    </>
  )
}

export default Footer