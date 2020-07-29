import Fact from './Fact'
import React from 'react'
import { Chapter } from '../Helpers/DesignAssistants'
import { factInfo } from './info'

const Facts = (props) => {
    
    let facts = factInfo.map((fact, index) => {
      let props = {  
        key: index, 
        url: factInfo[index].url, 
        factType: factInfo[index].factType, 
        content: factInfo[index].content,
        color: factInfo[index].color,
        href: factInfo[index].href, 
        imgDir: factInfo[index].imgDir,
        place: factInfo[index].place
      }
      return <Fact {...props}/> 
    })
    return (
        <div style={{backgroundColor: '#77aadd', padding:'5vh 0'}}>
          <Chapter additionalStyle={{marginLeft: '20%', marginBottom: '14vh'}}>The best places for tourists</Chapter>
          {facts}
        </div>
    )
}

export default Facts