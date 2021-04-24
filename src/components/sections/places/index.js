import React, { memo } from 'react'
import Links from './Links'
import Images from './Images'
import Slider from '../../global/slider'
import { WithScrollUp } from '../../../helpers/HOC'


const Place = ({ label, additionalInfo, color, descriptions, href, images }) => (
  <div className="page-container">
    <div className="introduction">
      <h2>{ label }</h2>
      <p>{ additionalInfo }</p>
      <a 
        href={ href } 
        target="_blank"
        rel="noopener noreferrer"
      >More info and facts in wikipedia</a>
    </div>
    <Slider 
      auto
      items={ images.map((image, index) => (
        <Images
          color={ color }
          description={ descriptions[index] }
          url={ image }
          key={ index + image }
        />
      ))}
    />
    <Links/>
  </div>
)

export default memo(WithScrollUp(Place))