import React from 'react'
import { Chapter, TextArea } from '../Helpers/DesignAssistants'

const Description = ({content}) => {
  let style = {
    marginBottom: '1vh',
    marginTop: '3vh'
  }
  return (
    <div style={style}>
      <Chapter>
        {content.chapter}
      </Chapter>
      <TextArea>
        {content.text}
      </TextArea>
    </div>
  )
}

export default Description