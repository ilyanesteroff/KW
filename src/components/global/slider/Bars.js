import React from 'react'


const Bars = ({ items, setCurrent, current }) => (
  <div id="bars">
    { items.map((_, index) => (
      <Bar 
        onClick={() => setCurrent(index)}
        key={ index }
        current={ index === current }
      />
    )) }
  </div>
)


const Bar = (props) => (
  <div 
    className="bar" 
    id={ props.current ? 'active' : '' }
    { ...props }
  ></div>
)


export default Bars