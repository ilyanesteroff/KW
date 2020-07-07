import React from 'react';
import './App.css';
import Header from './components/Header/MainHeader'
import Homepage from './components/pages/Homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { debounce } from './components/Helpers/apphelpers'


function App() {

  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  React.useEffect(() => {
     const debouncedHandleResize = debounce(function handleResize() {
       setDimensions({
         height: window.innerHeight,
         width: window.innerWidth
       })
     }, 1)

     window.addEventListener('resize', debouncedHandleResize)

     return _ => {
      window.removeEventListener('resize', debouncedHandleResize)   
     } 
  });

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Homepage width={dimensions.width} height={dimensions.height}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
