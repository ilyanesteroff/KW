import React from 'react'
import Video from './Video'
import VideoDescription from './VideoDescription'
import { Width } from '../pages/contexts'

const VideoSection = () => {
  let videoSectionStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh',
    backgroundColor: '#aaaaff',
    marginBottom: '20vh'
  }
  if(Width() < 925)
    videoSectionStyle.height = '90vh'
  return(
    <div style={videoSectionStyle}>
      <Video url="https://www.youtube.com/embed/8Bx5I7z7J6I?autoplay=1"/>
      <VideoDescription />
    </div>
  )
}

export default VideoSection