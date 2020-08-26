import React, { useState } from 'react'
import { Chapter, TextArea } from '../Helpers/DesignAssistants'
import { useFetch } from '../Helpers/Hooks'
import { serverKey, serverUrl } from './refs/key'

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
  const textarea = React.useRef(null)
  const button = React.useRef(null)
  const [ isOpened, setIsOpened ] = useState(false)
  const [response, loading, error] = useFetch(`/${category}`)

  const toggleCategory = event => {
    setIsOpened(!isOpened)
    let container
    event.target.id === 'Arrow'? container = event.target : container = event.target.parentElement
    isOpened ? container.style.transform = 'rotate(-1deg)' : container.style.transform = 'rotate(-181deg)'
  }

  const changeButton = () => {
    button.current.innerHTML === 'Update!' ? button.current.innerHTML = 'updating...' : button.current.innerHTML = 'Update!'
    button.current.style.backgroundColor === '#110044' ? button.current.style.backgroundColor = '#aaaaff' : button.current.style.backgroundColor = '#110044'
  }

  const sendData = _ => {
    changeButton()
    fetch(`${serverUrl}/${category}`, {body: textarea.current.value, method: 'POST', headers: {
        'Content-Type' : 'application/json', 
        'authorization' : serverKey
      }
    })
      .then(res => res.json())
      .then(res => {
        res.updated ? console.log('updated') : console.log('failed')
        changeButton()
      })
  }

  return (
    <div className="ModifyingCategory">
      <div>
        <h2>{category}</h2>
        <Arrow clickHandler={toggleCategory}/>
      </div>
      {isOpened && 
        <>
          <TextContent ref={textarea} content={response !== null? response : ''}/>
          <SendDataBtn handleClick={sendData} ref={button}/>
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

const TextContent = React.forwardRef((props, ref) => {
  return (
    <textarea className="CategoryTextArea" ref={ref} defaultValue={JSON.stringify(props.content)}></textarea>
  )
})

const SendDataBtn = React.forwardRef((props, ref) => {
  return (
    <h1 ref={ref} className="SendDataBtn" onClick={props.handleClick}>Update!</h1>
  )
})