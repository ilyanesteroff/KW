import React from 'react'
import Video from './Video'
import VideoDescription from './VideoDescription'

export default ({data}) => {
  return(
    <div className="VideoSection">
    <VideoDescription content={{headline : data.description.headline, text: data.description.text}}/>
      <Video url={data.link}/>
    </div>
  )
}