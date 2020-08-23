import React, { useRef } from 'react'
import { Chapter } from '../Helpers/DesignAssistants'
import { Width } from '../pages/contexts'
import { history } from './info'
import { useManageSectionSwitching } from '../Helpers/Hooks'
import LowerNavigation from './NavArrows'

export default () => {
  const [changeActiveElement, refs, current, nextPrev] = useManageSectionSwitching()
  return (
    <div className="MainSectionContainer TableSection">
      <Chapter additionalStyle={{textAlign: 'left', marginLeft: '2%'}}>History of Key West</Chapter>
      <div className="tab">
        {history.links.map((link, index) => {
          const newRef = useRef(null);
          refs.push(newRef);
          return <button 
            className="tabLinks"
            ref={newRef} id={index} onClick={changeActiveElement} 
            style={{display: Width() > 1460 ? 'inline' : 'block'}} key={index}>
            {link}
          </button>
        })}
      </div>
      <div className="aboutContent">
        <Content index={current}/>
        <LowerNavigation current={current} content={history.links} handleClick={nextPrev}/>
      </div>
    </div>
  )
}

const Content = ({index}) => {
  return <>
    {history.content[index].fullLink}
    {history.content[index].text}
  </>
}
