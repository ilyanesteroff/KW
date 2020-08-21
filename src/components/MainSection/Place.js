import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import { Sectionstyle } from '../MainSection/styles'
import UpperContainer from '../MainSection/UpperContainer'
import Slider from '../Slider/ReadySlider'
import Ndslider from '../Slider/Slider'
import { width } from '../Helpers/Helpers'
import NavArrows from './NavArrows'
import { useCurrent } from '../Helpers/Hooks'
import { factInfo } from './info'
import { WidthContext } from '../pages/contexts'

export default props => {
  const Width = () => React.useContext(WidthContext)
  let { info } = props
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
  return (
    <div style={Sectionstyle}>
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
      {Width() > 1200 &&
      <Ndslider slides={info.images} autoplay={10} info={info.descriptions}/>
      }
      {info.images !== undefined && 
        <>
          <div style={{ backgroundColor: '#333', height: `${height }vh`, marginTop: '10vh'}}>
            <Slider images={info.images} info={info.descriptions} color={info.color} sliderStyle={sliderStyle} url={info.images}/>
          </div>
        </>
      }
      <NavArrows 
        current={current} 
        content={factInfo.map(element => element.topic)} 
        handleClick={nextPrev} 
        hrefs={factInfo.map(element => `/places/${element.place}`)}
      />
    </div>
  )
}