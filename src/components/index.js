import React, { useEffect, useState } from 'react'
import Router from '../routes'
import Global from '../styles/global'
import Head from '../meta'
import InitialPage from '../pages/InitialPage'
import { ContentContext } from '../helpers/contexts'


const App = () => {
  const [ content, setContent ] = useState(null)
  const [ showInitialPage, setShowInitialPage ] = useState(true)

  useEffect(() => {
    fetch('/data.json')
      .then((res) => {
        if(res.ok) return res.json()
      })
      .then(setContent)
      .then(() => setTimeout(() => setShowInitialPage(false), 500))
  }, [])
  
  return(
    <>
      <Head/>
      <Global/>
      {showInitialPage && <InitialPage/>}
      {content && 
        <ContentContext.Provider value={ content }>
          <Router/>
        </ContentContext.Provider>
      }
    </>
  )
}

export default App