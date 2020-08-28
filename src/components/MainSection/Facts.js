import Fact from './Fact'
import React from 'react'
import { Chapter } from '../Helpers/DesignAssistants'
import { WidthContext } from '../pages/contexts'

const Facts = React.memo(({places}) => {
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
    let content
    Width() > 1000
     ? content = 
      <> 
        <div className="FlexItem">{facts.filter((item, index) => index % 2 === 0)}</div>
        <div className="FlexItem">{facts.filter((item, index) => index % 2 === 1)}</div>
      </>
      : content = <div className="FlexItem">{facts}</div>
    return (
        <div style={{backgroundColor: '#eeeeff', paddingBottom: '5vh 0'}}>
          <Chapter additionalStyle={{textAlign: 'center', paddingTop: '5vh'}}>The best places for tourists</Chapter>
          <div className="Places-Container">
            {content}
          </div>
        </div>
    )
})

export default Facts