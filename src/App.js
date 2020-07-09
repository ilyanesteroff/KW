import React from 'react';
import './App.css';
import Homepage from './components/pages/Homepage'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { WidthContext, HeightContext, ScrollTopContext } from './components/pages/contexts'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      width: 0, 
      height: 0,
      scrollTop: 0 
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateScrollTop = this.updateScrollTop.bind(this)
  }

  componentDidMount = () => {
    this.updateWindowDimensions()
    this.updateScrollTop()
    window.addEventListener('resize', this.updateWindowDimensions)
    window.addEventListener('scroll', this.updateScrollTop)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions)
    window.removeEventListener('scroll', this.updateScrollTop)
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

  render = () => {
    return (
      <ScrollTopContext.Provider value={this.state.scrollTop}>
        <WidthContext.Provider value={this.state.width}>
          <HeightContext.Provider value={this.state.height}>
            <div className="App">
              <Router>
                <div>
                  <Switch>
                    <Route exact path="/">
                      <Homepage />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </div>
          </HeightContext.Provider>
        </WidthContext.Provider>
      </ScrollTopContext.Provider>
    );
  }
}

export default App;
