import React from 'react'
import { NewsContext, Width } from '../pages/contexts'

const Chapter = React.memo((props) => {
    return <h2 className="Chapter" style={props.additionalStyle}>{props.children}</h2>
})

const TextArea = React.memo((props) => {
    return <p className="Text" style={props.additionalStyle}>{props.children}</p>
})

const Link = React.memo((props) => {
    return <a className="Link" style={props.additionalStyle} href={props.href}>{props.children}</a>
})

const PS = React.memo((props) => {
    const News = () => React.useContext(NewsContext)
    let style = {
        color: '#444',
        fontFamily: News() ? 'Grenze Gotisch, cursive' : 'Oxygen, sans-serif',
        color: '#111133',
        fontSize: Width() > 750? '2rem': '1.5rem',
        marginTop: '5vh'
    }
    if (props.additionalStyle !== undefined)
      style = Object.assign({}, style, props.additionalStyle)
    return <h3 style={style}>{props.children}</h3>
})

export {
    Chapter, TextArea, Link, PS
}