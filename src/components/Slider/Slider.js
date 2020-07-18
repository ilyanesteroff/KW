import React, { useState, useEffect, useRef, useContext } from 'react'
import { generateContainerStyle } from '../MainSection/styles'
import SliderContent from './SliderContent'
import DirArrow from './DirectionArrow'
import Items from './Items'
import Slide from './Slide'

const getWidth = () => window.innerWidth
const getHeight = () => window.innerHeight

export default (props) => {
  let style = generateContainerStyle()

  getHeight() > 900 ? style.height = '35vh': style.height = '65vh'
  style.overflow = 'hidden'
  style.whiteSpace = 'nowrap'
  style.backgroundColor = '#333'
  style.marginTop = '10vh'
  
  const { slides } = props

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
    resizeRef.current = handleResize
  })

  let interval = null

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = e => {
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current()
      }
    }

    const resize = () => {
      resizeRef.current()
    }

    const transitionEnd = window.addEventListener('transitionend', smooth)
    const onResize = window.addEventListener('resize', resize)

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000)
    }

    return () => {
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)

      if (props.autoPlay) {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  }

  const smoothTransition = () => {
    let _slides = []

    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  }

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })
  }

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })
  }

  return (
      <div style={style}>
          <SliderContent translate={translate} transition={transition} width={getWidth() * _slides.length}>
            {
                _slides.map((slide, index) => {
                  console.log(props.descriptions)
                  console.log(_slides)
                return <Slide width={getWidth()} key={slide + index} image={slide} />})
            }
          </SliderContent>

          <DirArrow direction={'left'} handleClick={prevSlide}/>
          <DirArrow direction={'right'} handleClick={nextSlide}/>
          <Items slides={slides} activeSlide={activeSlide}/>
      </div>
  )
}