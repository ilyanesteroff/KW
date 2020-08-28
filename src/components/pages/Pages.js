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
import {Main} from '../MainSection/Twitter'
import About from '../MainSection/About'
import History from '../MainSection/HistoryPage'
import Location from '../MainSection/LocationPage'
import SettingsPage from '../MainSection/Settings'
import { useDocumentTitleSetting } from '../Helpers/Hooks'
import { AdminLogedinContext, FoundTweetContext } from './contexts'
import { useFetch, useSpinnerSuspense } from '../Helpers/Hooks'
import FetchRenderer from '../MainSection/FetchRenderer'
 
const Homepage = React.memo(() =>  {
  const [response, loading, error] = useFetch('/main')
  const [spin] = useSpinnerSuspense(40)

  useDocumentTitleSetting('Key West - Home')
  return(
    <>
      <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/b/b5/Key_road.jpeg)'}/>
      <FetchRenderer response={response} error={error} spin={spin}>
        {response !== null && 
          <>
          <MainSection data={response.MainSection}/>
          <VideoSection data={response.video}/> 
          <Facts places={response.places}/>
          </>
        }
      </FetchRenderer>
      <Footer/>
    </>
  )
})

const AboutPage = React.memo(_ => {
  const [response, loading, error] = useFetch('/about')
  const [spin] = useSpinnerSuspense(10)
  useDocumentTitleSetting('Key West - About')

  return(
    <>
      <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/e/e2/Brickell_skyline_2012.jpg)'}/>
      <FetchRenderer response={response} error={error} spin={spin}>
        <About data={response}/>
      </FetchRenderer>
      <Footer/>
    </>
  )
})

class InitialPage extends React.PureComponent{
  render() {
    return(
      <div className="landingPage">
          <div id="logo">{this.props.children}</div>
      </div>
    )
  }
}

const HistoryPage = React.memo(_ => {
  useDocumentTitleSetting('Key West - History')
  return(
    <>
      <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/6/6e/Chiaves-la-florida-1584.jpg)'}/>
      <History/>
      <Footer/>
    </>
  )
})

const LocationPage = React.memo(_ => {
  const [response, loading, error] = useFetch('/location')
  const [spin] = useSpinnerSuspense(10)

  useDocumentTitleSetting('Key West - Location')
  return(
    <>
      <Header image={'url(https://upload.wikimedia.org/wikipedia/commons/f/f4/Carnival_Destiny_Miami_12-22-11.JPG)'}/>
      <FetchRenderer response={response} error={error} spin={spin}>
        <Location data={response}/>
      </FetchRenderer>
      <Footer/>
    </>
  )
})

const PlacePage = React.memo((props) => {
  const [response, loading, error] = useFetch('/main')
  const [spin] = useSpinnerSuspense(10)
  const { place } = props
  useDocumentTitleSetting(`Key West - places`)
  let info, imgLink 
  if(response !== null) {
    info = response.places.find(item => item.place === place)
    imgLink = info.url
  }
  return (
    <>
      <Header image={`url(${imgLink})`}/>
      <FetchRenderer response={response} error={error} spin={spin}>
        {response !== null &&
          <Place info={info} places={response.places}/>
        }
      </FetchRenderer>
      <Footer/>
    </>
  )
})

const Tweets = React.memo((props) => {
  const [response, loading, error] = useFetch('/twitter-tags')
  const [spin] = useSpinnerSuspense(10)

  const { twitt } = props

  return(
    <>
      <StickyNavbar fixed={true}/>
      <UpperSection>
        <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
        <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
        <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>
      </UpperSection>
      <Main topic={twitt} tags={response}/>
      <Footer/>
    </>
  ) 
})

const WeatherPage = React.memo(() => {
  useDocumentTitleSetting('Key West - Weather')
  return (
    <>
      <StickyNavbar fixed={true}/>
      <UpperSection>
        <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
        <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
        <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/tweets/KeyWest'}/></li>
      </UpperSection>
      <WeatherData/>
      <Footer/>
    </>
  )
})

class Covid extends React.PureComponent {
  render() {
    return(
      <>
        <StickyNavbar fixed={true}/>
        <UpperSection>
          <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
          <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>
          <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/tweets/KeyWest'}/></li>
        </UpperSection>
        <CovidData/>
        <Footer/>
      </>
    )
  }
}

class News extends React.PureComponent{
  render() {
    return(
      <>
        <StickyNavbar fixed={true}/>
        <UpperSection>
          <li><UpperOption sentence={"Covid-19 Updates"} icon={faVirus} link={'/covid'}/></li>
          <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>
          <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/tweets/KeyWest'}/></li>
        </UpperSection>
        <NewsData/>
        <Footer/>
      </>
    )
  }
}

const Settings = React.memo(_ => {
  return(
    <>
      <StickyNavbar fixed={true}/>
      <UpperSection>
        <li><UpperOption sentence={"Breaking News"} icon={faNewspaper} link={'/news'}/></li>
        <li><UpperOption sentence={"Weather"} icon={faCloud} link={'/weather'}/></li>
        <li><UpperOption sentence={"Tweets"} icon={faTwitter} link={'/tweets/KeyWest'}/></li>
      </UpperSection>
      <AdminLogedinContext.Consumer>
          {value => <>
            {!value.value && 
              <h3 className="Warning">It seems that you are not logged in</h3>
            }
            {value.value && 
              <SettingsPage categories={['about', 'twitter-tags', 'main', 'location']}/>
            }
          </>
          }
        </AdminLogedinContext.Consumer>
      <Footer/>
    </>
  )
})

const NoMatchPage = React.memo(() => {
  let location = useLocation()
  useDocumentTitleSetting('No Match')
  return (
    <div className="NoMatchPageDiv">
      <h3>
        No results found for <code>{location.pathname}</code>
      </h3>
    </div>
  )
})

export { Homepage, AboutPage, InitialPage, 
  HistoryPage, LocationPage, PlacePage, 
  Tweets, WeatherPage, NoMatchPage, Settings, Covid, 
  News}