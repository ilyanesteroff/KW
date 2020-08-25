import React from 'react'
import Description from './Description'
import CityStuff from './CityStuff'

export default (props) => {
  return (
      <div className="MainSectionContainer">
         { props.children === undefined &&
           <>
             <Description content={props.data.content}/>
             <CityStuff services={props.data.services}/>
           </>
         }
         {props.children}
      </div>
  )
}