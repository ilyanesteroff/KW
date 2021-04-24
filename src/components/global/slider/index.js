import React, { useState, useEffect } from 'react'
import Container from '../../../styles/slider'
import Arrow from './Arrows'
import Bars from './Bars'


const Slider = (props) => {
  if(
    (!props.items || props.items.length === 0) || 
    (props.transition && (props.transition < 0 || props.transition > 4))
  ) return null

  const Wrapper = ({ items, transition, auto, delay, initial = 0 }) => {
    const [ current, setCurrent ] = useState(initial)
    const [ direction, setDirection ] = useState('right')

    useEffect(() => {
      if(auto){
        const interval = setInterval(() => {
          if(direction === 'right'){
            if(current <  items.length - 1)
              setCurrent(current + 1)
            else {
              setCurrent(current - 1)
              setDirection('left')
            }
          } else {
            if(current > 0)
              setCurrent(current - 1)
            else{
              setCurrent(current + 1)
              setDirection('right')
            }
          }
        }, (delay * 1000) || 10000)

        return () => clearInterval(interval)
      }
    }, [ auto, delay, current, direction, items.length ])

    return(
      <Container 
        translateX={ current * -1 }
        transitionTime={ transition || 0.5 }
      >
        <div id="ribbon">
          {items.map((slide, index) => (
            <div id="slide" key={ index }>
              { slide }
            </div>
          ))}
        </div>
        { current > 0 && <Arrow onClick={() => setCurrent(current - 1)}/> }
        { current < items.length - 1 &&
          <Arrow 
            rightArrow
            onClick={() => setCurrent(current + 1)}
          />
        }
        { items.length > 1 && 
          <Bars 
            items={ items } 
            current={ current }
            setCurrent={ setCurrent }
          />
        }
      </Container>
    )
  }

  return Wrapper(props)
}

export default Slider
