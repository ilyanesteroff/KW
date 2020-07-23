import React from 'react'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import { Sectionstyle } from '../MainSection/styles'
import UpperContainer from '../MainSection/UpperContainer'
import ReadySlider from '../Slider/ReadySlider'
import { width } from '../Helpers/Helpers'

export default class extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        const { info } = this.props
        let height 
        width() > 625 ? height = 60 : height = 40
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
                    A lot more info and facts in wikipedia
                  </Link>
                  
              </UpperContainer>
              <div style={{padding: '2vh', backgroundColor: '#333', height: `${height + 15}vh`, marginTop: '10vh'}}>
                <ReadySlider images={info.images} info={info.descriptions} color={info.color} height={height} url={info.images}/>
              </div>
            </div>
        )
    }
}