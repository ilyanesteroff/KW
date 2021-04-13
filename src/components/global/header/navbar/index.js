import React from 'react'
import Navigation from './navigation'
import Container from '../../../../styles/header/navbar'


const Navbar = ({ withLogo = false }) => {
  return(
    <Container>
      <div id="image-label">
        {withLogo &&
          <img 
            alt="Key West Seal"
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png"
            className="logo-image"
          />
        }
        <h2 className="logo-label">Key West Florida</h2>
      </div>
      <Navigation/>
    </Container>
  )
}

export default Navbar