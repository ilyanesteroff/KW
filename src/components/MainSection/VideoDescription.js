import React from 'react'
import { Width } from '../pages/contexts'

const VideoDescription = () => {
  const width = Width()
  let styles = getStyles(width)
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

const getStyles = (width) => {
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
    console.log(width)
    if(width < 925) {
        output.main.left = '10%'
        output.main.top = '5%'
        output.main.width = '80%'
        output.headline.fontSize = '1.4rem'
        output.paragraph.fontSize = '1.2rem'
        output.paragraph.fontWeight = '500'
    }
    return output
}

export default VideoDescription
