import React, {Fragment} from 'react'
import Header from '../Header/Header'
import VideoSection from '../MainSection/VideoSection'
import MainSection from '../MainSection/MainSection'
import Facts from '../MainSection/Facts'
import Footer from '../FooterSection/Footer'
import StickyNavbar from '../Header/StickyNavbar'
import CovidData from '../MainSection/Covid'

class Homepage extends React.Component {
  render(){
    return(
      <div>
        <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/b/b5/Key_road.jpeg)'}/>
        <MainSection/>
        <VideoSection/> 
        <Facts/>
        <Footer/>
      </div>
    )
  }
}

class AboutPage extends React.Component{
  render() {
    return(
      <div>
        <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Brickell_skyline_2012.jpg)'}/>
        <Footer/>
      </div>
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
      <div>
        <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/6/6e/Chiaves-la-florida-1584.jpg)'}/>
        <Footer/>
      </div>
    )
  }
}

class LocationPage extends React.Component{
  render() {
    return(
      <div>
        <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Carnival_Destiny_Miami_12-22-11.JPG)'}/>
        <Footer/>
      </div>
    )
  }
}

const PlacePage = (props) => {
  const { place } = props
  return (
    <div>
      <Header image={'url('+ place.url + ')'}/>
      <Footer/>
    </div>)
}

class Covid extends React.Component{
  render() {
    return(
      <>
        <StickyNavbar fixed={true}/>
        <CovidData/>
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

export { Homepage, AboutPage, InitialPage, HistoryPage, LocationPage, PlacePage, Covid, News}