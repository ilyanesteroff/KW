import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WidthContext } from '../pages/contexts'

const Width = () => React.useContext(WidthContext)

const Item = (props) => {
    const styles = getStyles()
  
    let output =
      <div style={styles.mainStyle}>
        <a href={props.url} target="_blank" style={styles.href}>
          <FontAwesomeIcon style={styles.iconStyle} icon={props.icon}/>
          <h2 style={styles.headlineStyle}>{props.headline}</h2>
          <Topic style={styles.textStyle} text={props.text}/>
        </a>
      </div>

    return output
}

const Topic = (props) => {
  if(Width() > 750) return <p style={props.style}>{props.text}</p>
  else return ''
}

const getStyles = () => {
  let output = {
    iconStyle: {
      fontSize: '3rem',
      color: '#886611',
      margin: 'auto'
    }, 
    headlineStyle: {
      fontSize: '1.8rem',
      color: '#111177',
      fontFamily: 'Ubuntu, sans-serif',
    }, 
    textStyle: {
      fontSize: '1.2rem',
      color: '#111155',
      fontFamily: 'Oxygen, sans-serif'
    }, 
    href: {
      textDecoration: 'none'
    },
    mainStyle: {
      margin: '2%'
    }
  }
  if(Width() > 750) return output
    else {
    output.iconStyle.fontSize = '2rem'
    output.headlineStyle.display = 'inline-block'
    output.headlineStyle.fontSize = '1.5rem'
    output.headlineStyle.marginTop = '7vh'
    output.textStyle.fontSize = '1.2rem'
    output.mainStyle.maxWidth = '25%'
  }
  return output
}

export default Item