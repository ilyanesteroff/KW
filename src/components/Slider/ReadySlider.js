import React from 'react' 
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default (props) => {
    let config = {
        indicators: true
    }
    return (
      <div style={{height: '60vh', width: '80%', marginLeft: '10%', backgroundColor: '#aaa', border: 'solid 0.5vh black', borderRadius: '5px'}}>
        <div className="slide-container">
          <Fade {...config}>
            {props.images.map((image, index) => <GenerateSlides image={image} isOdd={index % 2 === 0} text={props.descriptions[index]} color={props.color}/>)}
          </Fade>
        </div>
      </div>
    );
};

const GenerateSlides = ({ image, isOdd, text, color }) => {
    let style = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: '59vh',
    }
    let hstyle = {
      width: '25%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0',
      background: color, 
      padding: '0 3%',
      color: '#99dddd',
      fontSize: '1.4rem',
      fontFamily: 'Ubuntu, sans-serif'
    }

    let output
    isOdd ? output =
     <> 
       <div style={style} className="image"/>
       <h2 style={hstyle}>{text}</h2> 
     </> : output = 
     <>
       <h2 style={hstyle}>{text}</h2>
       <div style={style} className="image"/>
     </>

    return(
        <div className="each-fade">
              {output}
        </div>
    )
}
  