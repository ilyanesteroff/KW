import React from 'react' 
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Width } from '../pages/contexts'
import { NewsContext } from '../pages/contexts'

export default (props) => {
    let config = {
      indicators: true
    }
    const { color, url } = props
    return (
      <div style={{height: props.height + 'vh', width: '80%', 
       marginLeft: '10%', marginTop: '6vh', backgroundColor: '#aaa', 
       borderRadius: '5px', boxShadow: props.shadow? '0 0 10px' : 'none'}}>
        <div className="slide-container">
          <Fade {...config}>
            {props.images.map((image, index) => {
              const properties ={
                url: url !== undefined? url[0] : '',
                height: props.height,
                color: typeof(color)? color : color[index],
                isOdd: index % 2 === 0,
                image: image,
                key: index
              }
              return <GenerateSlides
               {...properties}>
                <div>
                  {props.info[index]}
                </div>
              </GenerateSlides>})}
          </Fade>
        </div>
      </div>
    );
};

const GenerateSlides = (props) => {
    let News = () => React.useContext(NewsContext)
    let style = {
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: props.height + 'vh',
      alignItems: News() ? 'flex-end' : 'flex-start'
    }
    let linkContainer, Container
    props.url !== '' ? 
    linkContainer = <div className="TextContent" style={{background: props.color}}><a href={props.url} target="blank">{props.children}</a></div>
    : linkContainer = <div className="TextContent" style={{background: props.color}}>{props.children}</div>

    if(Width() < 500) {
      if(props.url !== ''){
        Container = 
        <div style={style} className="image">
          <div>
            <a href={props.url} target="blank">{props.children}</a>
          </div>
        </div>
      } else {
        Container = <div style={style} className="image">{props.children}</div>
      }
    } else {
        props.isOdd ?  Container =  <><div style={style} className="image"/>
        {linkContainer}</> : Container = <>{linkContainer}
        <div style={style} className="image"/></>
    }

    return(
        <div className="each-fade">
          {Container}
        </div>
    )
}
  