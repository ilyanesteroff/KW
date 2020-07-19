import React from 'react' 
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Width } from '../pages/contexts'

export default (props) => {
    let config = {
        indicators: true
    }
    return (
      <div style={{height: props.height + 'vh', width: '80%', marginLeft: '10%', backgroundColor: '#aaa', borderRadius: '5px'}}>
        <div className="slide-container">
          <Fade {...config}>
            {props.images.map((image, index) => 
              <GenerateSlides image={image} isOdd={index % 2 === 0}  color={props.color} height={props.height}>
                 {props.info[index]}
              </GenerateSlides>)}
          </Fade>
        </div>
      </div>
    );
};

const GenerateSlides = (props) => {
    let style = {
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: props.height + 'vh',
    }
    
    let output
    props.isOdd ? output =
     <> 
       <div style={style} className="image"/>
       <div className="TextContent" style={{background: props.color}}>{props.children}</div> 
     </> : output = 
     <>
       <div className="TextContent" style={{background: props.color}}>{props.children}</div>
       <div style={style} className="image"/>
     </>

    return(
        <div className="each-fade">
              {output}
        </div>
    )
}
  