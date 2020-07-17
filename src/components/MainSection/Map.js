import React from 'react'
import { Map } from '@joeattardi/react-mapquest-static-map'
import { generateContainerStyle } from './styles'

export default class extends React.Component{
    render() {
        return <MapBody/>
    }
}

const MapBody = () => {
  let mapstyle = generateContainerStyle()
  return (
    <div>
      <Map apiKey={'JctifwahNA7AlwsVDe4ndnbH2327dGpW'} center="Boston, MA" width="1000" retina={true}/>
    </div>
  )
}