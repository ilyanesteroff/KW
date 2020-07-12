import React from 'react'
import Header from '../Header/Header'
import VideoSection from '../MainSection/VideoSection'
import MainSection from '../MainSection/MainSection'
import Facts from '../MainSection/Facts'
import Footer from '../FooterSection/Footer'

class Homepage extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <MainSection/>
        <VideoSection/> 
        <Facts/>
        <Footer/>
      </div>
    )
  }
}

export default Homepage