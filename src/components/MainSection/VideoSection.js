import React from 'react'
import Video from './Video'
import VideoDescription from './VideoDescription'
import { width, height } from '../Helpers/Helpers'

const VideoSection = () => {
  let videoSectionStyle = {
    position: 'relative',
    width: '100%',
    height: '70vh',
    backgroundColor: '#aaaaff',
    marginBottom: '20vh'
  }
  if(width() < 925)
    videoSectionStyle.height = '90vh'
    //For Ipads
  if((width() >= 768 && height() >= 1024) || (width() >= 1024 && height() >= 768))
    videoSectionStyle.height = '60vh'
  return(
    <div style={videoSectionStyle}>
      <Video url="https://www.youtube.com/embed/8Bx5I7z7J6I?autoplay=1"/>
      <VideoDescription />
    </div>
  )
}

export default VideoSection