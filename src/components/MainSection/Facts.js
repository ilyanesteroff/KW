import Fact from './Fact'
import React from 'react'
import { generateContainerStyle } from './styles'
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
        <div>
           {facts}
        </div>
    )
}

export default Facts