import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { width } from '../Helpers/Helpers'

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
  if(width() > 850) return <p style={props.style}>{props.text}</p>
  else return ''
}

const getStyles = () => {
  let output = {
    iconStyle: {
      fontSize: '3rem',
      color: '#886611',
      margin: '5%'
    }, 

    headlineStyle: {
      fontSize: '1.2rem',
      color: '#111177',
      fontFamily: 'Ubuntu, sans-serif',
      marginTop: '5vh',
    }, 

    textStyle: {
      fontSize: '1rem',
      color: '#111155',
      fontFamily: 'Oxygen, sans-serif'
    }, 

    href: {
      textDecoration: 'none'
    },

    mainStyle: {
      margin: '2%',
      width: '25%'
    }
  }
  if(width() > 1000) return output
  else if (width() < 768){
    output.iconStyle.fontSize = '2.2rem'
    output.headlineStyle.display = 'inline-block'
    output.headlineStyle.fontSize = width() < 306  ? '1.2rem' : '1rem'
    output.headlineStyle.marginBottom = 'auto'
    output.iconStyle.margin = '0 4% 0 0'
    output.mainStyle.width = 'auto'
  }
  return output
}

export default Item