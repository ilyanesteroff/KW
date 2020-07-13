import React from 'react'
import Container from './Container'
import { WidthContext } from '../pages/contexts'

class Footer extends React.Component {
  static contextType = WidthContext
  
  render () {
    let style = getStyle(this.context)
    return (
      <div style={style}>
        <ShadowLayer/>
        <Container/>
      </div>
    )
  }
}

const ShadowLayer = () => {
    let style = {
        position:'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#111133',
        zIndex: '0',
        opacity: '0.6'
    }
    return <div style={style}></div>
}

const getStyle = (width) => {
    let output = {
        position: 'relative',
        backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/c/c6/Castillo_de_San_Marcos_Fort_Panorama_1.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginTop: '20vh',
        width: '100%',
        height: '30vh',
        borderTop: 'solid #111 1vh'
    }
    if (width < 950) {
        output.height = '40vh'
    }
    return output
}

export default Footer