import React, {useEffect, useState, useLayoutEffect} from 'react';
import reactDom from 'react-dom'
import * as Pages from './components/pages/Pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WidthContext, HeightContext, ScrollTopContext, AdminLogedinContext } from './components/pages/contexts'
import Head from './components/pages/Head'


export default React.memo(() => {
  const [ width, setWidth ] = useState(0)
  const [ height, setHeight ] = useState(0)
  const [ scrollTop, setScrollTop ] = useState(0)
  const [ loaded, setLoaded ] = useState(false)
  const [ adminLoggedin, setAdminLoggedIn ] = useState(true)

  useLayoutEffect(() => {
    updateWindowDimensions()
    updateScrollTop()
    sessionStorage.getItem('auth') === 'true' ? setAdminLoggedIn(true) : setAdminLoggedIn(false)
  }, [])
  
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions)
    window.addEventListener('scroll', updateScrollTop)
    window.addEventListener('load', changeBg)

    return _ => {
      window.removeEventListener('resize', updateWindowDimensions)
      window.removeEventListener('scroll', updateScrollTop)
      window.removeEventListener('load', changeBg)
    }
  }, [])

  const logOut = _ => {
    setAdminLoggedIn(!adminLoggedin)
  }

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
    <Pages.InitialPage>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png'} style={{transform: 'scale(0.5)'}}/>
    </Pages.InitialPage>, document.getElementById('initial-root'))
  } else {
    return (
      <ScrollTopContext.Provider value={scrollTop}>
        <WidthContext.Provider value={width}>
          <HeightContext.Provider value={height}>
            <AdminLogedinContext.Provider value={{value: adminLoggedin, method: logOut}}>
              <div className="App">
                <Head/>
                <Router>
                  <div>
                    <Switch>
                      <Route exact path="/" render={() => <Pages.Homepage />}/>
                      <Route path="/about" render={() => <Pages.AboutPage/>} />
                      <Route path="/history" render={() => <Pages.HistoryPage/>}/>
                      <Route path="/location" render={() => <Pages.LocationPage/>}/>
                      <Route path="/places/:place" render={({match}) => <Pages.PlacePage place={match.params.place}/>}/>
                      <Route path="/covid" render={() => <Pages.Covid/>}/>
                      <Route path="/news" render={() => <Pages.News/>}/>
                      <Route path="/tweets/:topic" render={({match}) => <Pages.Tweets twitt={match.params.topic}/>}/>
                      <Route path="/weather" render={() => <Pages.WeatherPage/>}/>
                      <Route path="/settings" render={() => <Pages.Settings/>}/>
                      <Route path="*" render={() => <Pages.NoMatchPage/>}/>
                    </Switch>
                  </div>
                </Router>
              </div>
            </AdminLogedinContext.Provider>
          </HeightContext.Provider>
        </WidthContext.Provider>
      </ScrollTopContext.Provider>
    )
  }
})

