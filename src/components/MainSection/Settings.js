import React, { useEffect, useState } from 'react'
import { Chapter, TextArea } from '../Helpers/DesignAssistants'

export default ({categories}) => {
  return (
    <div className="MainSectionContainer">
      <Chapter>Manage website's content here</Chapter>
      <TextArea>Here you are able to modify content of this website</TextArea>
      <div className="SettingSection">
        {categories.map((item, index) => <Category category={item} key={index}/>)}
      </div>
    </div>
  )
}

const Category = ({category}) => {
  
  const [ isOpened, setIsOpened ] = useState(false)
  const [ data, setData ] = useState('')

  const toggleCategory = event => {
    setIsOpened(!isOpened)
    let container
    event.target.id === 'Arrow'? container = event.target : container = event.target.parentElement
    isOpened ? container.style.transform = 'rotate(-1deg)' : container.style.transform = 'rotate(-181deg)'

  }

  const handleDataChange = event => {
    setData(event.target.value)
  }

  const sendData = _ => {
    console.log('data sent!')
  }

  return (
    <div className="ModifyingCategory">
      <div>
        <h2>{category}</h2>
        <Arrow clickHandler={toggleCategory}/>
      </div>
      {isOpened && 
        <>
          <TextContent handleChange={handleDataChange}/>
          <SendDataBtn handleClick={sendData}/>
        </>
      }
    </div>
  )
}

const Arrow = ({direction, clickHandler}) => {
  return (
    <div className="DownArrow" id="Arrow" onClick={(event) => clickHandler(event)}>
      <div className="LeftSide ArrowPart"></div>
      <div className="RightSide ArrowPart"></div>
    </div>
  )
}

const TextContent = ({handleChange}) => {
  return (
    <textarea className="CategoryTextArea" onChange={handleChange} defaultValue="data"></textarea>
  )
}

const SendDataBtn = ({handleClick}) => {
  return (
    <h1 className="SendDataBtn" onClick={handleClick}>Update!</h1>
  )
}