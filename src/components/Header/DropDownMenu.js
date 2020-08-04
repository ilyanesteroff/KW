import React from 'react'
import { Link } from "react-router-dom";
import { navbarItems } from '../MainSection/info'

export default () => {
  let options = navbarItems.map((item, index) => {
    let res
    index > 0 ? res = item.toLowerCase() : res = ''
    if(window.location.pathname === '/' + res) {
      return 
    } else {
      return (
        <Link to={'/' + res }  className="NavbarLink" key={res}>
          <DropDownItem item={item}/>
        </Link>
      )
    }
  })
  return(
    <div style={{top: window.innerHeight < 500 ? window.innerHeight < 300 ? '27vh' : '21vh' : '11vh'}} id="DropDownMenu">
      {options}
    </div>
  )
}

function DropDownItem({item}){
    return <h2 className="DropDownItem">{item}</h2>
}
