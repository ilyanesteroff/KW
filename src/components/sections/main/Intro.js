import React, { useContext } from 'react'
import { ContentContext } from '../../../helpers/contexts'


const Intro = () => {
  const { chapter, text } = useContext(ContentContext).main.MainSection.content

  return (
    <div className="introduction">
      <h2>{ chapter }</h2>
      <p>{ text }</p>
    </div>
  )
}

export default Intro