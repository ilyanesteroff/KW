import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import { width } from '../Helpers/Helpers'
import { SSS } from './styles'

export default () => {
  const aboutKeyWest = useRef(null)
  const aboutWebsite = useRef(null)
  useLayoutEffect(() => {
    
  })
  useEffect(() => {
    window.addEventListener('keyup', switchSection)
  })

  const switchSection = (event) => {
    if(event.keyCode === 13) {
      if(aboutKeyWest.current.classList.contains('activeTabLink')) {
        aboutWebsite.current.focus()
        aboutKeyWest.current.classList.remove('activeTabLink')
        aboutWebsite.current.classList.add('activeTabLink')
      } else {
        aboutKeyWest.current.focus()
        aboutWebsite.current.classList.remove('activeTabLink')
        aboutKeyWest.current.classList.add('activeTabLink')
      }
    }
  } 

  return (
    <div style={SSS()}>
      <Chapter additionalStyle={{textAlign: 'left', marginLeft: '2%'}}>About</Chapter>
      <div className="tab">
        <button className="tabLinks activeTabLink" ref={aboutKeyWest} onClick={changeActiveElement}>Key West</button>
        <button className="tabLinks" ref={aboutWebsite} onClick={changeActiveElement}>This Website</button>
      </div>
      <div className="aboutContent">
        
      </div>
    </div>
  )
}

const changeActiveElement = (event) => {
  let buttons = Array.from(document.getElementsByClassName('tabLinks'))
  buttons.forEach(button => button.classList.remove('activeTabLink'))
  event.target.classList.add('activeTabLink')
}