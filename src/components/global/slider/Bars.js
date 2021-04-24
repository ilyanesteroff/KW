import React from 'react'


const Bars = ({ items, setCurrent, current }) => (
  <div id="bars">
    { items.map((_, index) => (
      <Bar 
        onClick={() => setCurrent(index)}
        key={ index }
        id={ index === current ? 'active' : '' }
      />
    )) }
  </div>
)


const Bar = (props) => (
  <div 
    className="bar" 
    { ...props }
  ></div>
)


export default Bars