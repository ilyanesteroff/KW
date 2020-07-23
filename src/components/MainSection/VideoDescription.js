import React from 'react'
import { width, height } from '../Helpers/Helpers'

const VideoDescription = () => {
  let styles = getStyles(width(), height())
  return (
    <div style={styles.main}>
      <Headline style={styles.headline}/>
      <Paragraph style={styles.paragraph} />
    </div>
  )

}

const Headline = (props) => {
    return <h2 style={props.style}>Sights of Florida</h2>
}
const Paragraph = (props) => {
    return <p style={props.style}>In this video are introduced the most marvellous places in Florida state, in this video you will find Key West too</p>
}

const getStyles = (width, height) => {
    let output = {
      main: {
        position: 'absolute',
        width: '30%',
        top: '10%',
        left: '5%',
        margin: '5% 0'
      },
      headline: {
        fontSize: '2rem',
        fontFamily: 'Oxygen, sans-serif',
        color: '#111134',
        margin: '2%'
      },
      paragraph: {
        fontSize: '1.5rem',
        fontFamily: 'Abel, sans-serif',
        margin: '1%',
        color: '#212131',
        fontWeight: '600'
      } 
    }
    if(width < 925) {
        output.main.left = '10%'
        output.main.top = '3%'
        output.main.width = '80%'
        output.headline.fontSize = '1.4rem'
        output.paragraph.fontSize = '1.2rem'
        output.paragraph.fontWeight = '500'
    }
    if(height < 500) {
      output.headline.fontSize = '1.4rem'
      output.paragraph.fontSize = '1.2rem'
      output.main.top = '1%'
      output.main.margin = '0'
    }
    return output
}

export default VideoDescription
