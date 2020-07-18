import React from 'react'

export default ({ slides, activeSlide }) => {
    let style = {
      position: 'absolute',
      bottom: '4%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    return (
        <div style={style}>
          {slides.map((slide, index) => 
              <Item key={slide} active={activeSlide === index}/>
          )}
        </div>
    )
}

const Item = ({ active }) => {
  let style = {
      padding: '1.5vh',
      marginRight: '6px',
      border: 'solid 2px black',
      cursor: 'pointer',
      borderRadius: '50%',
      backgroundColor: active ? '#232323' : '#afafaf'
  }
  return <span style={style}/>
}


