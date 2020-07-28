import React from 'react'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import { Sectionstyle } from '../MainSection/styles'
import UpperContainer from '../MainSection/UpperContainer'
import Slider from '../Slider/ReadySlider'
import { width } from '../Helpers/Helpers'

export default class extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    const { info } = this.props
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
        <div style={{ backgroundColor: '#333', height: `${height }vh`, marginTop: '10vh'}}>
          <Slider images={info.images} info={info.descriptions} color={info.color} sliderStyle={sliderStyle} url={info.images}/>
        </div>
      </div>
    )
  }
}