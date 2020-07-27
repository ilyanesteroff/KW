import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import { width } from '../Helpers/Helpers'
import { SSS } from './styles'

export default () => {
  const aboutKeyWest = useRef(null)
  const aboutWebsite = useRef(null)
  const [current, setCurrent] = useState('KeyWest')
  const [aboutContent, setAboutContent] = useState(null)
  useLayoutEffect(() => {
    current === 'KeyWest' ? setAboutContent(<AboutKeyWest/>) : setAboutContent(<AboutWebsite/>)
  }, [current])
  useEffect(() => window.addEventListener('keyup', switchSection), [])
  useEffect(() => {
  })

  const switchSection = (event) => {
    if(event.keyCode === 13) {
      if(aboutKeyWest.current.classList.contains('activeTabLink')) {
        aboutWebsite.current.focus()
        aboutKeyWest.current.classList.remove('activeTabLink')
        aboutWebsite.current.classList.add('activeTabLink')
        setCurrent(aboutWebsite.current.id)
      } else {
        aboutKeyWest.current.focus()
        aboutWebsite.current.classList.remove('activeTabLink')
        aboutKeyWest.current.classList.add('activeTabLink')
        setCurrent(aboutKeyWest.current.id)
      }
    }
  } 

  const changeActiveElement = (event) => {
    let buttons = Array.from(document.getElementsByClassName('tabLinks'))
    buttons.forEach(button => button.classList.remove('activeTabLink'))
    event.target.classList.add('activeTabLink')
    setCurrent(event.target.id)
  }

  return (
    <div style={SSS()}>
      <Chapter additionalStyle={{textAlign: 'left', marginLeft: '2%'}}>About</Chapter>
      <div className="tab">
        <button className="tabLinks activeTabLink" id="KeyWest" ref={aboutKeyWest} onClick={changeActiveElement}>Key West</button>
        <button className="tabLinks" id="Website" ref={aboutWebsite} onClick={changeActiveElement}>This Website</button>
      </div>
      <div className="aboutContent">
        {aboutContent}
      </div>
    </div>
  )
}

const AboutWebsite = () => {
  return (
    <>
      <Chapter>In brief about this website</Chapter>
    </>
  )
}

const AboutKeyWest = () => {
  return (
    <>
    </>
  )
}