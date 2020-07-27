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
      <div className="paragraph">
        <Chapter>Website structure</Chapter>
        <TextArea additionalStyle={{textAlign: 'left'}}>This website is written on React js, it is completely responsive. As you noticed there is a lot of the same components that are rendered on different pages, for instance navbars, footer section, headlines, menu items etc. Creating this application a lot of advanced react stuff such as react hooks, fragments, portals was applied. High abstraction level of the components provides extreme reusability (that means components are applied several times for different purposes throughout the application). Application components that calls APIs or making expensive operations e.g. operations or actions, that requires a little bit more time to get done they are written as functional componets that use custom hooks which loads, retrieves information and provides a far better user experience. All of the data, that was retrieved from API calls is stored in the local storage, to be displayed instantly whenever user re-visits some pages. However information that is stored in the local storage updates hourly, this action is triggered by user visiting page one hour later.</TextArea>
      </div>
      <div className="paragraph">
        <Chapter>About developer</Chapter>
        <TextArea additionalStyle={{textAlign: 'left'}}>I am Ilya Nesterow, I was working on solidifying my knowledges of react js and javascript. After reading a lot of concepts from documentations I realised, I need some practice, so I decided to create this website</TextArea>
      </div>
      <div className="paragraph">
        <Chapter>About policy</Chapter>
        <TextArea additionalStyle={{textAlign: 'left'}}>This website does not tend to use anyone's private data, contrary it provides only data selected from official and public sources. The aim of this web application is to narrate to its visitors about some Key West, using publicly available data</TextArea>
      </div>
    </>
  )
}

const AboutKeyWest = () => {
  return (
    <>
      <Chapter>Key West</Chapter>
      <TextArea additionalStyle={{textAlign: 'left'}}>Is an island in the Straits of Florida, within the U.S. state of Florida. Together with all or parts of the separate islands of Dredgers Key, Fleming Key, Sunset Key, and the northern part of Stock Island, it constitutes the City of Key West. The Island of Key West is about 4 miles (6 kilometers) long and 1 mile (2 km) wide, with a total land area of 4.2 square miles (11 km2). It lies at the southernmost end of U.S. Route 1, the longest north–south road in the United States. Key West is about 95 miles (153 km) north of Cuba at their closest points. It is also 130 miles (210 km) southwest of Miami by air, about 165 miles (266 km) by road, and 106 miles (171 km) north-northeast of Havana.</TextArea>
      <Chapter>The Southernmost City in the Continental United States</Chapter>
      <TextArea additionalStyle={{textAlign: 'left'}}>Key West is surrounded by the beautiful waters of the Atlantic Ocean and the Gulf of Mexico. Dive the Vandenberg or snorkel our coral reefs, charter a day of fishing, relax on one of our beaches, book an Eco tour, and end your day with a beautiful sunset cruise. Each evening we are treated to the talented Sunset Celebration performers on Mallory Square while enjoying a spectacular sunset.</TextArea>
      
    </>
  )
}