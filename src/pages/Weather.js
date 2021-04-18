import React from 'react'
import Navbar from '../components/global/header/navbar'
import Main from '../components/sections/weather'


const Weather = () => {
  return(
    <>
      <Navbar withLogo bgColor/>
      <Main/>
    </>
  )
}

export default Weather