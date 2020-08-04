import React from 'react'
import { Width } from '../pages/contexts'
import { Link } from 'react-router-dom'

export default ({current, content, handleClick, hrefs}) => {
  let links = null
  let directions = {right: false, left: false}
  let contents = {}
  if(current === 0) {
    directions = {right: true, left: false}
    if(hrefs !== undefined) links = {right: hrefs[current + 1]}
    Width() > 1000 ? contents = {right: content[current + 1]} : contents = {right: 'Next'}
  } else if (current === content.length - 1) {
    directions = {right: false, left: true}
    if(hrefs !== undefined) links = {left: hrefs[current - 1]}
    Width() > 1000 ? contents = {left: content[current - 1]} : contents = {left: 'Prev'}
  } else {
    directions = {right: true, left: true}
    if(hrefs !== undefined) links = {left: hrefs[current - 1], right: hrefs[current + 1]}
    Width() > 1000 ? contents = {right: content[current + 1], left: content[current - 1]}
    : contents = {right: 'Next', left: 'Prev'}
  }
  
  return (
    <Navigation directions={directions} contents={contents} current={content[current]} handleClick={handleClick} links={links}/>
  )
}

const Navigation = ({directions, contents, current, handleClick, links}) => {

  return (
    <div className="NavigationBar">
      {window.innerWidth > 1200 && <h2 className="CurrentPage">{current}</h2>}
      {directions.right && 
        <Link to={links === null ? window.location.pathname : links.right}>
          <div onClick={handleClick} id="right">
            <h2 className="NavigationOption RightOption">{contents.right}</h2>
            <div className="RightNavigationArrow Arrow"><RightArrow/></div>
          </div>
        </Link>
      }
      {directions.left && 
        <Link to={links === null ? window.location.pathname : links.left}>
          <div onClick={handleClick} id="left">
            <h2 className="NavigationOption LeftOption">{contents.left}</h2>
            <div className="LeftNavigationArrow Arrow"><LeftArrow/></div>
          </div>
        </Link>
      }
    </div>
  )
}

const LeftArrow = _ => {

  return (
    <div className="ArrowContainer" id="LeftArrow">
      <span>
        <div className="ArrowFragment" style={{bottom: '0', transform: 'rotate(-45deg)'}}/>
      </span> 
      <span> 
        <div className="ArrowFragment" style={{top: '0', transform: 'rotate(45deg)'}}/>
      </span>
    </div>
  )
}

const RightArrow = _ => {

  return (
    <div className="ArrowContainer" id="RightArrow">
      <span>
        <div className="ArrowFragment" style={{top: '0', transform: 'rotate(-45deg)'}}/>
      </span> 
      <span> 
        <div className="ArrowFragment" style={{bottom: '0', transform: 'rotate(45deg)'}}/>
      </span>
    </div>
  )
}