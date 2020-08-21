import React from 'react'
import Header from '../Header/Header'
import VideoSection from '../MainSection/VideoSection'
import MainSection from '../MainSection/MainSection'
import Facts from '../MainSection/Facts'
import Footer from '../FooterSection/Footer'
import StickyNavbar from '../Header/StickyNavbar'
import UpperSection from '../Header/UpperSection'
import { faVirus, faNewspaper, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import UpperOption from '../Header/UpperOption'
import { useLocation } from 'react-router-dom'
import Place from '../MainSection/Place'
import { NewsData } from '../MainSection/News'
import CovidData from '../MainSection/Covid'
import WeatherData from '../MainSection/Weather'
import Twitter from '../MainSection/Twitter'
import About from '../MainSection/About'
import History from '../MainSection/HistoryPage'
import Location from '../MainSection/LocationPage'
import { useDocumentTitleSetting } from '../Helpers/Hooks'
import { AdminLogedinContext } from './contexts'
 
const Homepage = () =>  {
  useDocumentTitleSetting('Key West - Home')
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

const AboutPage = _ => {
  useDocumentTitleSetting('Key West - About')
  return(
    <>
      <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Brickell_skyline_2012.jpg)'}/>
      <About/>
      <Footer/>
    </>
  )
}

class InitialPage extends React.Component{
  render() {
    return(
      <div className="landingPage">
          <div id="logo">{this.props.children}</div>
      </div>
    )
  }
}

const HistoryPage = _ => {
  useDocumentTitleSetting('Key West - History')
  return(
    <>
      <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/6/6e/Chiaves-la-florida-1584.jpg)'}/>
      <History/>
      <Footer/>
    </>
  )
}

const LocationPage = _ => {
  useDocumentTitleSetting('Key West - Location')
  return(
    <>
      <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Carnival_Destiny_Miami_12-22-11.JPG)'}/>
      <Location/>
      <Footer/>
    </>
  )
}

const PlacePage = (props) => {
  const { place } = props
  useDocumentTitleSetting(`Key West - ${place.place}`)
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
        <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>
      </UpperSection>
      <Twitter topic={twitt}/>
      <Footer/>
    </>
  )
}

const WeatherPage = () => {
  useDocumentTitleSetting('Key West - Weather')
  return (
    <>
      <StickyNavbar fixed={true}/>
      <UpperSection>
        <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
        <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
        <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/twitts/Florida'}/></li>
      </UpperSection>
      <WeatherData/>
      <Footer/>
    </>
  )
}

class Covid extends React.Component {
  render() {
    return(
      <>
        <StickyNavbar fixed={true}/>
        <UpperSection>
          <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
          <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>
          <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/twitts/Florida'}/></li>
        </UpperSection>
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
        <UpperSection>
          <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
          <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>
          <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/twitts/Florida'}/></li>
        </UpperSection>
        <NewsData/>
        <Footer/>
      </>
    )
  }
}

const Settings = _ => {
  return(
    <>
      <StickyNavbar fixed={true}/>
      <UpperSection>
        <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
        <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>
        <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/twitts/Florida'}/></li>
      </UpperSection>
      <AdminLogedinContext.Consumer>
          {value => <>
            {!value.value && 
              <h3 className="Warning">It seems that you are not logged in</h3>
            }
          </>
          }
        </AdminLogedinContext.Consumer>
      <Footer/>
    </>
  )
}

const NoMatchPage = () => {
  let location = useLocation()
  useDocumentTitleSetting('No Match')
  return (
    <div className="NoMatchPageDiv">
      <h3>
        No results found for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export { Homepage, AboutPage, InitialPage, 
  HistoryPage, LocationPage, PlacePage, 
  Twitts, WeatherPage, NoMatchPage, Settings, Covid, 
  News}