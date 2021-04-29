import React from 'react'
import Background from '../components/global/header/background-image'
import Main from '../components/sections/history'


const History = ({ page }) => (
  <>
    <Background imageUrl="url(https://upload.wikimedia.org/wikipedia/commons/6/6e/Chiaves-la-florida-1584.jpg)"/>
    <Main {...{ page }}/>
  </>
)

export default React.memo(History)