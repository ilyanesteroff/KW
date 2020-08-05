import React from 'react'

export default React.memo(({ image, width }) => {
  let style = {
    height: '100%',
    width: `${width}px`,
    position: 'relative',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'auto',
  }
  return (
    <div style={style}>
    </div>
  )
})