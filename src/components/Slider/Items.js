import React from 'react'

export default ({ slides, activeSlide, handleClick }) => {
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
            <Item key={slide} active={activeSlide === index} handleClick={handleClick} id={index}/>
        )}
      </div>
    )
}

const Item = ({ active, handleClick, id }) => {
  let style = {
      padding: '0.3rem',
      marginRight: '6px',
      border: 'solid 2px black',
      cursor: 'pointer',
      borderRadius: '50%',
      backgroundColor: active ? '#232323' : '#afafaf'
  }
  return <span style={style} onClick={handleClick} id={id}/>
}


