import React from 'react'
import ForecastSection from './ForecastSection'

export default React.memo(props => {
  return (
    <ul>
      <li>
        <ForecastSection option={props.type} result={props.temps.temp} />
      </li>
      <li>
        <ForecastSection option="Highest" result={props.temps.max} />
      </li>
      <li>
        <ForecastSection option="Lowest" result={props.temps.min} />
      </li>
    </ul>
  )
})
