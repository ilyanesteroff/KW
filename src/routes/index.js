import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import TopmostLine from '../components/global/header/top-most-line'
import Footer from '../components/global/footer'
import Modal from '../components/global/modal'
import Search from '../components/global/search'

import Main from '../pages/Main'
import About from '../pages/About'
import Location from '../pages/Location'
import History from '../pages/History'
import Weather from '../pages/Weather'
import Covid from '../pages/Covid'
import News from '../pages/News'
import Trips from '../pages/Trips'
import Place from '../pages/Places'
import Tweets from '../pages/Tweets'


const Router = () => (
  <BrowserRouter>
    <TopmostLine/>
    <Switch>
      <Route exact path="/weather" component={ Weather }/>
      <Route exact path="/news" component={ News }/>
      <Route exact path="/covid" component={ Covid }/>
      <Route exact path="/trips" component={ Trips }/>
      <Route 
        exact 
        path="/about/:page" 
        render={({ match }) => <About page={ match.params.page }/>}
      />
      <Route 
        exact 
        path="/history/:page" 
        render={({ match }) => <History page={ match.params.page }/>}
      />
      <Route 
        exact 
        path="/location/:map" 
        render={({ match }) => <Location map={ match.params.map }/>}
      />
      <Route
        path="/tweets/:tag"
        render={({ match }) => <Tweets/>}
      />
      <Route exact path="/places/:place" component={ Place }/>
      <Route exact path="/" component={ Main }/>
      <Redirect from="/location" to="/location/1"/>
      <Redirect from="/about" to="/about/1"/>
      <Redirect from="/history" to="/history/1"/>
      <Redirect to="/"/>
    </Switch>
    <Modal/>
    <Search/>
    <Footer/>
  </BrowserRouter>
)

export default Router