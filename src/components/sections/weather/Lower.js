import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { defineIcon } from '../../../helpers/weather'
import Table from './Table'
import Container from '../../../styles/weather/lower'


const Lower = ({ data }) => {
  let icon = defineIcon(data.weather, true)

  return ( 
    <Container iconColor={ icon.color }>
      <h2 style={{color: '#111', margin: '2% 0', paddingTop: '1%'}}>
        <span>{data.temperature}</span>{data.weather.toUpperCase()}
      </h2>
      <FontAwesomeIcon icon={icon.icon}/>
      <Table data={Object.keys(data).map((key) => [key, data[key]])}/> 
    </Container>
  )
}

export default Lower