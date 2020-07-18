import React from 'react'


const Chapter = props => {
    let chapterStyle = {
        color: '#222255',
        fontFamily: 'Ubuntu, sans-serif',
        margin: '3%',
        marginLeft: '0',
        fontSize: props.width > 750 ? '1.8rem' : '1.3rem'
    }
    if (props.additionalStyle !== undefined)
      chapterStyle += props.additionalStyle
    return <h2 style={chapterStyle}>{props.children}</h2>
}

const TextArea = props => {
    let paragraphStyle = {
        color: '#111133',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: props.width > 750 ? '1.4rem': '1.1rem'
    }
    return <p style={paragraphStyle}>{props.children}</p>
}

const Link = props => {
    let style = {
        color: '#222255',
        fontFamily: 'Nunito, sans-serif',
        fontSize: props.width > 750? '1.6rem' : '1.2rem',
        textDecoration: 'none',
        lineHeight: '8vh'
    }
    return <a style={style} href={props.href}>{props.children}</a>
}

export {
    Chapter, TextArea, Link
}