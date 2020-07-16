import React, {Fragment} from 'react'
import Header from '../Header/Header'
import VideoSection from '../MainSection/VideoSection'
import MainSection from '../MainSection/MainSection'
import Facts from '../MainSection/Facts'
import Footer from '../FooterSection/Footer'
import StickyNavbar from '../Header/StickyNavbar'
import UpperSection from '../Header/UpperSection'
import CovidData from '../MainSection/Covid'

class Homepage extends React.Component {
  render(){
    return(
      <>
        <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/b/b5/Key_road.jpeg)'}/>
        <MainSection/>
        <VideoSection/> 
        <Facts/>
        <Footer/>
      </>
    )
  }
}

class AboutPage extends React.Component{
  render() {
    return(
      <>
        <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Brickell_skyline_2012.jpg)'}/>
        <Footer/>
      </>
    )
  }
}

class InitialPage extends React.Component{
  constructor(props){
      super(props)
  }
  render() {
      let style = {
          position: 'relative',
          height: '100vh', 
          width: '100%',
          backgroundColor: '#9999ff'
      }
      let innerStyle = {
          position: 'absolute', 
          top: '50vh',
          left: '50%',
          transform: 'translate(-50%, -50%)'
      }
      return(
        <div style={style}>
            <div style={innerStyle}>{this.props.children}</div>
        </div>
      )
  }
}

class HistoryPage extends React.Component{
  render() {
    return(
      <>
        <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/6/6e/Chiaves-la-florida-1584.jpg)'}/>
        <Footer/>
      </>
    )
  }
}

class LocationPage extends React.Component{
  render() {
    return(
      <>
        <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Carnival_Destiny_Miami_12-22-11.JPG)'}/>
        <Footer/>
      </>
    )
  }
}

const PlacePage = (props) => {
  const { place } = props
  return (
    <>
      <Header image={'url('+ place.url + ')'}/>
      <Footer/>
    </>
  )
}

const Twitts = (props) => {
  const { twitt } = props
  return(
    <>
      <StickyNavbar fixed={true}/>
      <Footer/>
    </>
  )
}

class Covid extends React.Component{
  render() {
    return(
      <>
        <StickyNavbar fixed={true}/>
        <Footer/>
      </>
    )
  }
}

class News extends React.Component{
  render() {
    return(
      <>
        <StickyNavbar fixed={true}/>
        <Footer/>
      </>
    )
  }
}

export { Homepage, AboutPage, InitialPage, HistoryPage, LocationPage, PlacePage, Twitts, Covid, News}