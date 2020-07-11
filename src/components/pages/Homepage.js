import React from 'react'
import Header from '../Header/Header'
import VideoSection from '../MainSection/VideoSection'
import MainSection from '../MainSection/MainSection'

class Homepage extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <MainSection/>
        <VideoSection/> 
      </div>
    )
  }
}

export default Homepage