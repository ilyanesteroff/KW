import React from 'react'

export default ({ content, width }) => {
    let style = {
        height: '100%',
        width: `${width}px`,
        backgroundImage: `url(${content})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return <div style={style}></div>
}