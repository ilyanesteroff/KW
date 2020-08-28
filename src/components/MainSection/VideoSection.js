import React from 'react'
import Video from './Video'
import VideoDescription from './VideoDescription'

export default React.memo(({data}) => {
  return(
    <div className="VideoSection">
    <VideoDescription content={{headline : data.description.headline, text: data.description.text}}/>
      <Video url={data.link}/>
    </div>
  )
})