import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TopmostLine from '../components/global/header/top-most-line'

import Main from '../pages/Main'


const Router = () => (
  <BrowserRouter>
    <TopmostLine/>
    <Switch>
      <Route path="/" component={ Main }/>
    </Switch>
  </BrowserRouter>
)

export default Router