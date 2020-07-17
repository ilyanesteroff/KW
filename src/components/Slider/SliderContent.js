import React from 'react'

export default (props) => {
    let style = {
        transform: `translateX(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`,
        height: '100%',
        width: `${props.width}px`,
        display: 'flex'
    }
    return (
        <div style={style} className={'SliderContent'}>
            {props.children}
        </div>
    )
}