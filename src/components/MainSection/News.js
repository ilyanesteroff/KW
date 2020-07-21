import React from 'react'
import {NYTimes} from './refs/links'
import ReadySlider from '../Slider/ReadySlider'
import Spinner from '../MainSection/Spinner'
import { width } from '../Helpers/Helpers'
import { NewsContext } from '../pages/contexts'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      images: [],
      info: [], 
      urls: [],
      colors: []
    }
  }

  controller = new AbortController()

  async componentDidMount() {
    this.setState({
      isMounted: true
    })
    const { link, domain, picture } = NYTimes

    const getData = (json, index) => {
      let output = {
        headline: <h2 key={index + 'h2'}>{json.headline.main}</h2>,
        content: <p key={index + 'p'}>{json.abstract}</p>,
        image: json.multimedia[7] === undefined ? picture : domain + json.multimedia[7].url,
        url: json.web_url
      }
      let info 
      width() < 1000? info = output.headline : info = [output.headline, output.content]
      this.setState({
        images: [...this.state.images, output.image],
        info: [...this.state.info, info],
        urls: [...this.state.urls, output.url]
      })
    } 

    try {
      const res = await fetch(link, {signal: this.controller.signal})
      const res_1 = await res.json()
      const res_2 = res_1.response.docs
      return res_2.forEach((item, index_1) => {
        return getData(item, index_1)
      })
    }
    catch (err) {
      return console.log(err)
    }
  }

  componentWillUnmount() {
    this.controller.abort()
  }


  render() {
    let { images, info, urls } = this.state
    let output, height
    width() < 600? height = 30: height = 60
    images.length > 0 ? output =
    <NewsContext.Provider value={true}>
      <ReadySlider images={images} info={info} color={'#333333'} height={height} url={urls}/>
    </NewsContext.Provider>
      : output = <Spinner/>
    return (
      <div>
        { output }
      </div> 
    )
  }
}