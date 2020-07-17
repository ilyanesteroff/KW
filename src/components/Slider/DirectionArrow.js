import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default ({ direction, handleClick }) => {
    let style = {
        display: 'flex',
        position: 'absolute',
        top: '50%',
        heigth: '50px',
        width: 'auto',
        fontSize: '2rem',
        justifyContent: 'center',
        backgroundColor: '#333',
        borderRadius: '50%',
        cursor: 'pointer',
        alignItems: 'center',
        transition: 'transform ease-in 0.1s',
        color: '#eaeaea'
    }
    console.log(direction)
    let icon
    if(direction === 'right') { 
        style.right = '25px' 
        icon = faArrowRight
    } else {
        style.left = '25px' 
        icon = faArrowLeft
    }
    
    return <FontAwesomeIcon icon={icon} style={style} onClick={handleClick}/>
}