import React from 'react'
import Video from './Video'
import VideoDescription from './VideoDescription'

export default () => {
  return(
    <div className="VideoSection">
    <VideoDescription content={{headline : 'Sights of Florida', text: 'In this video are shown the most remarkable places of Florida, here you will find Key West'}}/>
      <Video url="https://www.youtube.com/embed/8Bx5I7z7J6I?autoplay=1"/>
    </div>
  )
}