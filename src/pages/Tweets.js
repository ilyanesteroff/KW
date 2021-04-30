import React from 'react'
import Navbar from '../components/global/header/navbar'
import Main from '../components/sections/twitter'


const Tweets = ({ tag }) => (
  <>
    <Navbar withLogo bgColor/>
    <Main { ...{ tag } }/>
  </>
)

export default React.memo(Tweets)