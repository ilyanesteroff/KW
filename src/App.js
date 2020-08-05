import React, {useEffect, useState, useLayoutEffect} from 'react';
import reactDom from 'react-dom'
import { Homepage, InitialPage, AboutPage, 
  HistoryPage, LocationPage, PlacePage, 
  Twitts, Covid, News, WeatherPage, NoMatchPage, TwitterPage } from './components/pages/Pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WidthContext, HeightContext, ScrollTopContext, FactContext } from './components/pages/contexts'
import Head from './components/pages/Head'
import { factInfo } from './components/MainSection/info'
import { useCookies } from 'react-cookie' 

export default () => {
  const [ width, setWidth ] = useState(0)
  const [ height, setHeight ] = useState(0)
  const [ scrollTop, setScrollTop ] = useState(0)
  const [ loaded, setLoaded ] = useState(false)
  const [ cookies, setCookie ] = useCookies(['KeyWest'])

  useLayoutEffect(() => {
    updateWindowDimensions()
    updateScrollTop()
  }, [])
  
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions)
    window.addEventListener('scroll', updateScrollTop)
    window.addEventListener('load', changeBg)
    setCookie('KeyWest', 'security', { path: '/', sameSite: 'None', maxAge: 259200 })

    return _ => {
      window.removeEventListener('resize', updateWindowDimensions)
      window.removeEventListener('scroll', updateScrollTop)
      window.removeEventListener('load', changeBg)
    }
  }, [])

  const updateWindowDimensions = () => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
  }

  const updateScrollTop = () => {
    setScrollTop(document.documentElement.scrollTop > height / 4 || document.body.scrollTop > height / 4)
  }

  const changeBg = () => {
    setTimeout(() => {
      setLoaded(true)
    }, 500)
  }

  if (!loaded) { 
    return reactDom.createPortal (
    <InitialPage>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png'} style={{transform: 'scale(0.5)'}}/>
    </InitialPage>, document.getElementById('initial-root'))
  } else {
    return (
      <ScrollTopContext.Provider value={scrollTop}>
        <WidthContext.Provider value={width}>
          <HeightContext.Provider value={height}>
            <div className="App">
              <Head/>
              <Router>
                <div>
                  <Switch>
                    <Route exact path="/" render={() => <Homepage />}/>
                    <Route path="/about" render={() => <AboutPage/>} />
                    <Route path="/history" render={() => <HistoryPage/>}/>
                    <Route path="/location" render={() => <LocationPage/>}/>
                    <Route path="/places/:place" render={({match}) => <PlacePage place={factInfo.find(fact =>
                      fact.place === match.params.place
                    )}/>}/>
                    <Route path="/covid" render={() => <Covid/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/twitts/:topic" render={({match}) => <Twitts twitt={match.params.topic}/>}/>
                    <Route path="/twitts/Florida" render={() => <Twitts twitt={'Florida'}/>}/>
                    <Route path="/weather" render={() => <WeatherPage/>}/>
                    <Route path="*" render={() => <NoMatchPage/>}/>
                  </Switch>
                </div>
              </Router>
            </div>
          </HeightContext.Provider>
        </WidthContext.Provider>
      </ScrollTopContext.Provider>
    )
  }
}

