import Fact from './Fact'
import React from 'react'
import { Chapter } from '../Helpers/DesignAssistants'
import { WidthContext } from '../pages/contexts'

const Facts = ({places}) => {
  let Width = () => React.useContext(WidthContext)
    let facts = places.map((fact, index) => {
      let props = {  
        key: index, 
        url: places[index].url, 
        factType: places[index].factType, 
        content: places[index].content,
        color: places[index].color,
        href: places[index].href, 
        place: places[index].place
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