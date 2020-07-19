import React from 'react'
import { WidthContext } from '../pages/contexts'
import { Chapter, TextArea, Link } from '../Helpers/DesignAssistants'
import { Sectionstyle } from '../MainSection/styles'
import UpperContainer from '../MainSection/UpperContainer'
import Slider from '../Slider/Slider'
import ReadySlider from '../Slider/ReadySlider'

export default class extends React.Component{
    constructor(props){
        super(props)
    }

    static contextType = WidthContext

    render() {
        const { info } = this.props
        let height 
        this.context > 625 ? height = 60 : height = 40
        return (
            <div style={Sectionstyle}>
              <UpperContainer>
                  <Chapter width={this.context}>
                    {info.topic}
                  </Chapter>
                  <TextArea width={this.context}>
                    {info.additionalInfo}
                  </TextArea>
                  <Link href={info.href} width={this.context}>
                    A lot more info and facts in wikipedia
                  </Link>
                  
              </UpperContainer>
              <div style={{padding: '2vh', backgroundColor: '#333', height: `${height + 8}vh`, marginTop: '10vh'}}>
                <ReadySlider images={info.images} info={info.descriptions} color={info.color} height={height}/>
              </div>
              { this.context > 1950 && <Slider slides={info.images} autoPlay={10} descriptions={info.descriptions}/>}
            </div>
        )
    }
}