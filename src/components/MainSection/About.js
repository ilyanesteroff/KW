import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import { Width } from '../pages/contexts'
import { SSS } from './styles'
import Slider from '../Slider/ReadySlider'
import { about } from './info'
import Chart from './KeyWestPopulation'

export default () => {
  const aboutKeyWest = useRef(null)
  const aboutWebsite = useRef(null)
  const [current, setCurrent] = useState('KeyWest')
  const [aboutContent, setAboutContent] = useState(null)
  useLayoutEffect(() => {
    current === 'KeyWest' ? setAboutContent(<AboutKeyWest/>) : setAboutContent(<AboutWebsite/>)
  }, [current])
  useEffect(() => {
    window.addEventListener('keyup', switchSection)
    return _ => window.removeEventListener('keyup', switchSection)
  }, [])

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
      <div className="paragraph">
        <Chapter>{about.website.text[0].chapter}</Chapter>
        <TextArea additionalStyle={{textAlign: 'left'}}>{about.website.text[0].paragraph}</TextArea>
      </div>
      <div className="paragraph">
        <Chapter>{about.website.text[1].chapter}</Chapter>
        <TextArea additionalStyle={{textAlign: 'left'}}>{about.website.text[1].paragraph}</TextArea>
      </div>
      <div className="paragraph">
        <Chapter>{about.website.text[2].chapter}</Chapter>
        <TextArea additionalStyle={{textAlign: 'left'}}>{about.website.text[2].paragraph}</TextArea>
      </div>
    </>
  )
}

const AboutKeyWest = () => {
  let slider = {
    height:  Width() > 800? '60vh' : '40vh', 
    width:  Width() > 800? '90%' : '100%', 
    marginLeft: Width() > 800? '5%' : '0%', 
    marginTop: '4vh', 
    marginBottom: '7vh',
    background: 'linear-gradient(#aaf, #eee)', 
    borderRadius: 'none', 
    boxShadow: '0 0 10px',
    padding: Width() > 800? '2% 0' : '0'
  }
  const { images, descriptions, urls, colors } = about.keyWest.slider
  console.log(Width())
  return (
    <>
      <Chapter>{about.keyWest.text[0].chapter}</Chapter>
      <TextArea additionalStyle={{textAlign: 'left'}}>{about.keyWest.text[0].paragraph}</TextArea>
      <Chapter>{about.keyWest.text[1].chapter}</Chapter>
      <TextArea additionalStyle={{textAlign: 'left'}}>{about.keyWest.text[1].paragraph}</TextArea>
      {Width() > 800 && <Chart/>}
      <Chapter additionalStyle={{textAlign: 'left', marginTop: '10vh', marginLeft: '8%'}}>A little gallery</Chapter>
      <Slider images={images} info={descriptions} url={urls} sliderStyle={slider} color={colors}/>
    </>
  )
}