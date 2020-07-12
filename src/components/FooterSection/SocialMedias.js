import React from 'react'
import { Width, Height } from '../pages/contexts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
const os = require('os')

const SocialMedias = () => {
  let styles = getStyles(Width(), Height())
  let elementsInfo = [
      {
         icon: faFacebook, 
         link: 'https://www.facebook.com/',
         color: '#222277'
      },
      {
          icon: faTwitter,
          link: 'https://www.twitter.com/',
          color: '#00cccc'
      },
      {
          icon: faYoutube, 
          link: 'https://www.youtube.com/',
          color: '#ff0000'
      },
      {
          icon: faInstagram, 
          link: 'https://www.instagram.com',
          color: '#ffaa00'
      }
  ]
  let result = elementsInfo.map((element,index) => 
  <SocialMedia 
    key={index}
    style={styles.link} 
    icon={elementsInfo[index].icon} 
    link={elementsInfo[index].link}
    color={elementsInfo[index].color}
    />
  )

  return <div style={styles.main}>{result}</div>
}

class SocialMedia extends React.Component{
  constructor(props){
    super(props)
    this.mouseEnters = this.mouseEnters.bind(this)
    this.mouseLeaves = this.mouseLeaves.bind(this)
  }
  
  mouseEnters = (event) => {
    event.target.style.color = this.props.color
  }
  
  mouseLeaves = (event) => {
    event.target.style.color = '#fff'
  }

  render() {
    let icon 
    os.platform() === 'browser'? icon = <FontAwesomeIcon
    icon={this.props.icon} 
    onMouseEnter={this.mouseEnters}
    onMouseLeave={this.mouseLeaves}  
    /> : icon = <FontAwesomeIcon icon={this.props.icon}/>
    
    return(
      <a style={this.props.style} href={this.props.link}>
          {icon}
      </a>
    )
  }
}

const getStyles = (width, height) => {
    let output = {
        main: {},
        link: 
        {
          zIndex: '1',
          color: '#fff'
        }
    }
    if(width > 950) {
        output.main.width = '50%'
        output.main.height = '10%'
        output.link.fontSize = '3rem'
        output.link.marginRight = '6%'
    } else {
        output.main.top = '15%'
        output.main.width = '70%'
        output.link.fontSize = '2rem'
        output.link.marginRight = '4%'
    }
    return output
}


export default SocialMedias
