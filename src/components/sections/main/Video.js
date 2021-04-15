import React, { useContext } from 'react'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/main/video'


const Video = () => {
  const { video } = useContext(ContentContext).main
  
  return(
    <Container>
      <div className="description">
        <h2>{ video.description.headline }</h2>
        <p>{ video.description.text }</p>
      </div>
      <iframe 
        src={ video.link } 
        className="video" 
        title="Video from youtube"
        allowFullScreen 
      />
    </Container>
  )
}

export default Video
