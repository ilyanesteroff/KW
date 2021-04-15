import React from 'react'
import BackgroundImage from '../components/global/header/background-image'
import Upper from '../components/sections/main/Upper'
import Video from '../components/sections/main/Video'


const Main = () => {
  return(
    <>
      <BackgroundImage imageUrl="url(https://upload.wikimedia.org/wikipedia/commons/b/b5/Key_road.jpeg)"/>
      <Upper/>
      <Video/>
    </>
  )
}

export default Main