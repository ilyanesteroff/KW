import React from 'react'
import { Width } from '../pages/contexts'

const Rights = () => {
  let style = getStyle(Width())
  return <div style={style.main}>Key West Florida USA © 2020. All rights reserved.</div>
}

const getStyle = (width) => {
    let output = {
      main: {
          fontSize: '1.1rem',
          fontFamily: 'Nunito, sans-serif',
          color: '#eee'
      }
    }
    return output
}

export default Rights