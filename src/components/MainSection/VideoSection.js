import React from 'react'
import Video from './Video'

const VideoSection = () => {
  let videoSectionStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh',
    backgroundColor: '#aaaaff'
  }
  return(
    <div style={videoSectionStyle}>
      <Video url="https://www.youtube.com/embed/VOM__NZAFQM?autoplay=1&loop=1"/>
    </div>
  )
}

export default VideoSection