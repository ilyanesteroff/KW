import React from 'react' 
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { NewsContext, WidthContext } from '../pages/contexts'

class Slider extends React.Component {
  static contextType = WidthContext
  static defaultProps = {
    sliderStyle: {
      height: '60vh', 
      width: '80%', 
      marginLeft: '10%', 
      marginTop: '6vh', 
      backgroundColor: '#aaa', 
      borderRadius: '5px', 
      boxShadow: 'none'
    }
  }
  
  render () { 
    let config = {
      arrows: this.context > 1100,
      indicators: true
    }
    const { color, url } = this.props
    return (
      <div style={this.props.sliderStyle}>
        <div className="slide-container">
          <Fade {...config}>
            {this.props.images.map((image, index) => {
              const properties = {
                url: url !== undefined? url[0] : '',
                height: this.props.sliderStyle.height,
                color: typeof(color) === 'object'? color[index] : color,
                isOdd: index % 2 === 0,
                image: image,
                key: index
              }
              return <GenerateSlides
               {...properties}>
                <div>
                  {this.props.info[index]}
                </div>
              </GenerateSlides>})}
          </Fade>
        </div>
      </div>
    )
  }
}

const GenerateSlides = (props) => {
    let News = () => React.useContext(NewsContext)
    let Width = () => React.useContext(WidthContext)
    let style = {
      backgroundImage: `url(${props.image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      height: props.height,
      alignItems: News() ? 'flex-end' : 'flex-start',
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
  
export default Slider