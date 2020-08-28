import React from 'react'

export default React.memo(props => {
  return (
    <div className="ForecastSection">
      <h4>{props.option.toUpperCase()}</h4>
      <h3 style={{fontSize: '1.5rem'}}>{props.result}</h3>
    </div>
  )
})
