import React from 'react'

export default React.memo(({content}) => {
  return (
    <div className="VideoDescription">
      <h2>{content.headline}</h2>
      <p>{content.text}</p>
    </div>
  )
})

