import React from 'react'

export default (props) => {
  return (
    <div className="Video">
      <iframe src={props.url} className="Video" allowFullScreen/>
    </div>
  )
}
