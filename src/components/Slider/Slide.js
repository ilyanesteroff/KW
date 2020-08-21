import React from 'react'

export default React.memo(({ image, width, height, info }) => {
  let style = {
    height: '100%',
    width: `${width}px`,
    position: 'relative',
  }
  let imageStyle = {
    height: height,
    width: `auto`,
    //maxWidth: '60%',
    position: 'absolute',
    transform: 'translate(25%, 0%)'
  }

  return (
    <div style={style}>
      <div className="SlideImage">
        <img src={image} style={imageStyle}/>
      </div>
      <div className="SlideDescription">
        {info}
      </div>
    </div>
  )
})