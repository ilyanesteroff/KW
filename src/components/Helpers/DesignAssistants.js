import React from 'react'
import { width } from '../Helpers/Helpers'
import { NewsContext } from '../pages/contexts'

const Chapter = props => {
    let chapterStyle = {
        color: '#222255',
        fontFamily: 'Ubuntu, sans-serif',
        margin: '3%',
        marginLeft: '0',
        fontSize: width() > 750 ? '1.8rem' : '1.3rem'
    }
    if (props.additionalStyle !== undefined)
      chapterStyle = Object.assign({}, chapterStyle, props.additionalStyle)
    return <h2 style={chapterStyle}>{props.children}</h2>
}

const TextArea = props => {
    let paragraphStyle = {
        color: '#111133',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: width() > 750 ? '1.4rem': '1.1rem'
    }
    return <p style={paragraphStyle}>{props.children}</p>
}

const Link = props => {
    let style = {
        color: '#222255',
        fontFamily: 'Nunito, sans-serif',
        fontSize: width() > 750? '1.6rem' : '1.2rem',
        textDecoration: 'none',
        lineHeight: '8vh'
    }
    return <a style={style} href={props.href}>{props.children}</a>
}

const PS = props => {
    const News = () => React.useContext(NewsContext)
    let style = {
        color: '#444',
        fontFamily: News() ? 'Grenze Gotisch, cursive' : 'Oxygen, sans-serif',
        color: '#111133',
        fontSize: width() > 750? '2rem': '1.5rem',
        marginTop: '5vh'
    }
    if (props.additionalStyle !== undefined)
      style = Object.assign({}, style, props.additionalStyle)
    return <h3 style={style}>{props.children}</h3>
}

export {
    Chapter, TextArea, Link, PS
}