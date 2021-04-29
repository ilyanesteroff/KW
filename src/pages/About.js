import React from 'react'
import Background from '../components/global/header/background-image'
import Main from '../components/sections/about'


const About = ({ page }) => (
  <>
    <Background imageUrl="url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Brickell_skyline_2012.jpg)"/>
    <Main { ...{ page } }/>
  </>
)

export default React.memo(About)
