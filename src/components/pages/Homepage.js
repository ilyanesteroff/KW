import React from 'react'
import Header from '../Header/Header'
import VideoSection from '../MainSection/VideoSection'
import MainSection from '../MainSection/MainSection'
import Facts from '../MainSection/Facts'

class Homepage extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <MainSection/>
        <VideoSection/> 
        <Facts/>
      </div>
    )
  }
}

export default Homepage