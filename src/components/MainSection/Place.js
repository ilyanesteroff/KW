import React, { useLayoutEffect, useRef } from 'react'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import UpperContainer from '../MainSection/UpperContainer'
import Slider from '../Slider/ReadySlider'
import { width } from '../Helpers/Helpers'
import NavArrows from './NavArrows'
import { useCurrent } from '../Helpers/Hooks'
import { WidthContext } from '../pages/contexts'
import ErrorBoundary from '../pages/ErrorBoundary'

export default ({info, places}) => {
  const Width = () => React.useContext(WidthContext)
  const [current, setCurrent, nextPrev] = useCurrent(info.index)
  useLayoutEffect(_ => {
    window.scrollTo(0, 0);
  }, [])
  
  const firstUpdate = useRef(true)
  
  useLayoutEffect(_ => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    window.scrollTo(0, 0)
  }, [current])

  let height 
  width() > 625 ? height = 60 : height = 40
  let sliderStyle = {
    height: height + 'vh', 
    width: '80%', 
    marginLeft: '10%', 
    marginTop: '5vh', 
    backgroundColor: '#fff',
    boxShadow: 'none',
  }
  let descriptions = info.descriptions.map((item, index) => <h2 key={index}>{item}</h2>)
  return (
    <div className="MainSectionStyle">
      <UpperContainer>
        <Chapter>
          {info.topic}
        </Chapter>
        <TextArea>
          {info.additionalInfo}
        </TextArea>
        <Link href={info.href}>
          More info and facts in wikipedia
        </Link> 
      </UpperContainer>
      {Width() > 700  && info.images !== undefined && 
        <>
          <div style={{ backgroundColor: '#333', height: `${height }vh`, marginTop: '10vh'}}>
            <ErrorBoundary callback={() => window.location.reload()}>
              <Slider images={info.images} info={descriptions} color={info.color} sliderStyle={sliderStyle} url={info.images}/>
            </ErrorBoundary>
          </div>
        </>
      }
      <NavArrows 
        current={current} 
        content={places.map(element => element.topic)} 
        handleClick={nextPrev} 
        hrefs={places.map(element => `/places/${element.place}`)}
      />
    </div>
  )
}