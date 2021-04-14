import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopmostLine from '../components/global/header/top-most-line'

import Main from '../pages/Main'
import About from '../pages/About'
import Location from '../pages/Location'
import History from '../pages/History'
import Weather from '../pages/Weather'
import Covid from '../pages/Covid'
import News from '../pages/News'
import Trips from '../pages/Trips'


const Router = () => (
  <BrowserRouter>
    <TopmostLine/>
    <Switch>
      <Route path="/weather" component={ Weather }/>
      <Route path="/news" component={ News }/>
      <Route path="/covid" component={ Covid }/>
      <Route path="/trips" component={ Trips }/>
      <Route path="/about" component={ About }/>
      <Route path="/history" component={ History }/>
      <Route path="/location" component={ Location }/>
      <Route path="/" component={ Main }/>
    </Switch>
  </BrowserRouter>
)

export default Router