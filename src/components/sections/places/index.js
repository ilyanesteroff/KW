import React from 'react'
import Links from './Links'
import Images from './Images'
import Slider from '../../global/slider'
import { WithScrollUp } from '../../../helpers/HOC'


const Place = ({ data }) => (
  <div className="page-container">
    <div className="introduction">
      <h2>{ data.label }</h2>
      <p>{ data.additionalInfo }</p>
      <a 
        href={ data.href } 
        target="_blank"
        rel="noopener noreferrer"
      >More info and facts in wikipedia</a>
    </div>
    <Slider 
      auto
      items={ data.images.map((image, index) => (
        <Images
          color={ data.color }
          description={ data.descriptions[index] }
          url={ image }
          key={ index + image }
        />
      ))}
    />
    <Links/>
  </div>
)

export default WithScrollUp(Place)