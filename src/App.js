import React from 'react';
import reactDom from 'react-dom'
import { Homepage, InitialPage, AboutPage, 
  HistoryPage, LocationPage, PlacePage, 
  Twitts, Covid, News, WeatherPage, NoMatchPage, TwitterPage } from './components/pages/Pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WidthContext, HeightContext, ScrollTopContext, FactContext } from './components/pages/contexts'
import Head from './components/pages/Head'
import { factInfo } from './components/MainSection/info'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      width: 0, 
      height: 0,
      scrollTop: 0,
      loaded: false 
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateScrollTop = this.updateScrollTop.bind(this)
    this.changeBg = this.changeBg.bind(this)
  }

  componentDidMount = () => {
    this.updateWindowDimensions()
    this.updateScrollTop()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('scroll', this.updateScrollTop)
    window.addEventListener('load', this.changeBg)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.removeEventListener('scroll', this.updateScrollTop)
    window.removeEventListener('load', this.changeBg)
  }

  updateWindowDimensions = () => {
    this.setState({
       width: window.innerWidth, 
       height: window.innerHeight 
    });
  }

  updateScrollTop = () => {
    this.setState({
      scrollTop: document.documentElement.scrollTop > this.state.height / 4 || document.body.scrollTop > this.state.height / 4
    })
  }

  changeBg = () => {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 500)
  }

  render = () => {
    if (!this.state.loaded) { 
    document.getElementById('initial-root').style.background = '#333'
    return reactDom.createPortal (
    <InitialPage>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png'} style={{transform: 'scale(0.5)'}}/>
    </InitialPage>, document.getElementById('initial-root'))
    } else 
    return (
      <ScrollTopContext.Provider value={this.state.scrollTop}>
        <WidthContext.Provider value={this.state.width}>
          <HeightContext.Provider value={this.state.height}>
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
                    <Route path="/twitts/summer" render={() => <TwitterPage/>}/>
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

export default App;
