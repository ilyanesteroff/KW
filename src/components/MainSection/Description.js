import React from 'react'
import { Chapter, TextArea } from '../Helpers/DesignAssistants'

const Description = React.memo(({content}) => {
  return (
    <div className="Service-Description">
      <Chapter>
        {content.chapter}
      </Chapter>
      <TextArea>
        {content.text}
      </TextArea>
    </div>
  )
})

export default Description