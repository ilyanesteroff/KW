import React, { useLayoutEffect, useEffect, useRef, useState } from 'react'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import { Width } from '../pages/contexts'
import { SSS } from './styles'
import { history } from './info'
import { useManageSectionSwitching } from '../Helpers/Hooks'

export default () => {
  const [changeActiveElement, refs, current] = useManageSectionSwitching()
  
  return (
    <div style={SSS()}>
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
