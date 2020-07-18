import React from 'react'

export default ({ content, width }) => {
    let style = {
        height: '100%',
        width: `${width}px`,
        position: 'relative',
        backgroundImage: `url(${content})`,
        backgroundSize: '40% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '29% 0%',
    }
    let img = {
        width: '50%',
        height: 'auto',
        position: 'absolute',
        top: '0',
        left: '12.5%'
    }
    return (
         <div style={style}>
         </div>
    )
}