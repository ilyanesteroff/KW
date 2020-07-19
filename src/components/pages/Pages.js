import React, { lazy, Suspense } from 'react'
import Header from '../Header/Header'
import VideoSection from '../MainSection/VideoSection'
import MainSection from '../MainSection/MainSection'
import Facts from '../MainSection/Facts'
import Footer from '../FooterSection/Footer'
import StickyNavbar from '../Header/StickyNavbar'
import UpperSection from '../Header/UpperSection'
import { WidthContext } from './contexts'
import { faVirus, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import UpperOption from '../Header/UpperOption'
import TwitterTags  from '../Header/TwitterTags'
import { twitterTags } from '../MainSection/info'
import { useLocation } from 'react-router-dom'
import Place from '../MainSection/Place'
import Spinner from '../MainSection/Spinner'
import NewsData from '../MainSection/News'

const CovidData = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../MainSection/Covid")), 10000);
  });
});

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
      <Place info={place}/>
      <Footer/>
    </>
  )
}

const Twitts = (props) => {
  const { twitt } = props

  return(
    <>
      <StickyNavbar fixed={true}/>
      <UpperSection>
        <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
        <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
      </UpperSection>
      <TwitterTags tags={twitterTags.filter(twit => twit !== twitt)}/>
      <Footer/>
    </>
  )
}

const WeatherPage = () => {
  return (
    <>
      <StickyNavbar fixed={true}/>
      <UpperSection>
        <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
        <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
      </UpperSection>
      <Footer/>
    </>
  )
}

class Covid extends React.Component{
  static contextType = WidthContext
  render() {
    return(
      <>
        <StickyNavbar fixed={true}/>
        <UpperSection>
          <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
        </UpperSection>
        <Suspense fallback={<Spinner/>}>
          <CovidData/>
        </Suspense>
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
        <UpperSection>
          <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
        </UpperSection>
        <NewsData/>
        <Footer/>
      </>
    )
  }
}

const NoMatchPage = () => {
  let location = useLocation()

  return (
    <div style={{position: 'absolute',
      top: '50%',
      left: '50%',
      width: '80%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center'
    }}>
      <h3 style={{
        fontFamily: 'Ubuntu, sans-serif',
        color: '#444',
        fontSize: '1.5rem'
      }}>
        No results found for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export { Homepage, AboutPage, InitialPage, 
  HistoryPage, LocationPage, PlacePage, 
  Twitts, WeatherPage, NoMatchPage, Covid, 
  News}