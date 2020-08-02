import Fact from './Fact'
import React from 'react'
import { Chapter } from '../Helpers/DesignAssistants'
import { factInfo } from './info'
import { WidthContext } from '../pages/contexts'

const Facts = (props) => {
  let Width = () => React.useContext(WidthContext)
    let facts = factInfo.map((fact, index) => {
      let props = {  
        key: index, 
        url: factInfo[index].url, 
        factType: factInfo[index].factType, 
        content: factInfo[index].content,
        color: factInfo[index].color,
        href: factInfo[index].href, 
        place: factInfo[index].place
      }
      return <Fact {...props}/> 
    })
    return (
        <div style={{backgroundColor: '#77aadd'}}>
          <Chapter additionalStyle={{textAlign: 'center', paddingTop: '5vh'}}>The best places for tourists</Chapter>
          {Width() > 1000 &&
          <div style={{display: 'flex', flexWrap: 'no-wrap', justifyContent: 'space-between', margin: Width() > 1200 ? '5vh 10%' : '5vh 5%'}}>
            <div className="FlexItem">{facts.filter((item, index) => index % 2 === 0)}</div>
            <div className="FlexItem">{facts.filter((item, index) => index % 2 === 1)}</div>
          </div>
          }
          {Width() < 1000 &&
            <div style={{margin: Width() > 500 ? '5vh 10%' : '5vh 5%'}}>
              {facts}
            </div>
          }
        </div>
    )
}

export default Facts