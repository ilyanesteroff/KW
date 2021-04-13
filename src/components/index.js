import React, { useEffect } from 'react'
import Router from '../routes'
import Global from '../styles/global'
import Head from '../meta'


const App = () => {
  useEffect(() => {
    fetch('/main.json')
      .then((res) => res.json())
      .then(console.log)
  }, [])
  
  return(
    <>
      <Head/>
      <Global/>
      <Router/>
    </>
  )
}

export default App