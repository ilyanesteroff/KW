import React from 'react'
import { WithModal } from '../../../helpers/HOC'
import Slider from '../../global/slider'
import Slide from './SliderItems'


const KeyWest = ({ data }) => {
  console.log(data)
  return(
    <div id="key-west">
      { data.text.map((entry, index) => (
          <div 
            id="entry"
            className="framed-container"
            key={ index + entry.chapter }
          >
            <h3>{ entry.chapter }</h3>
            <p>{ entry.paragraph }</p>
          </div>
      ))
      }
      <Slider 
        items={
          data.slider.images.map((image, index) => (
            <Slide 
              image={ image }
              description={ data.slider.descriptions[index] }
              color={ data.slider.colors[index] }
            />
          ))
        }
      />
    </div>
  )
}

export default WithModal(KeyWest)