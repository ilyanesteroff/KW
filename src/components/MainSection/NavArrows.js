import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight, faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons'

export default ({current, content, handleClick}) => {
  let directions = {right: false, left: false}
  let contents = {}
  if(current === 0){
    directions = {right: true, left: false}
    contents = {right: content[current + 1]}
  } else if (current === content.length - 1) {
    directions = {right: false, left: true}
    contents = {left: content[current - 1]}
  } else {
    directions = {right: true, left: true}
    contents = {right: content[current + 1], left: content[current - 1]}
  }
  return (
    <Navigation directions={directions} contents={contents} current={content[current]} handleClick={handleClick}/>
  )
}

const Navigation = ({directions, contents, current, handleClick}) => {
  return (
    <>
      <h2 className="CurrentPage">{current}</h2>
      <div className="Navigation">
        {directions.left && 
          <div style={{position: 'absolute', left: '2%', bottom: '10%'}} onClick={handleClick}>
            <Arrow direction="left" content={contents.left} id="left"/> 
          </div>
        }
        {directions.right && 
          <div style={{position: 'absolute', right: '2%', bottom: '10%'}} onClick={handleClick}>
            <Arrow direction="right" content={contents.right} id="right"/> 
          </div>
        }
    </div>
    </>
  )
}

const Arrow = ({direction, content, id}) => {
  return (
    <div className="NavArrow" id={id}>
      {direction === 'left' && 
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="ArrowIcon"/>
      }
      <h2>{content}</h2>
      {direction === 'right' && 
        <FontAwesomeIcon icon={faArrowAltCircleRight} className="ArrowIcon"/>
      }
    </div>
  )
}
