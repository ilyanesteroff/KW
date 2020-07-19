import React from 'react'
import {NYTimes} from './refs/links'
import ReadySlider from '../Slider/ReadySlider'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      images: [],
      info: [], 
      urls: []
    }
  }

  componentDidMount() {
    const { link, domain, picture } = NYTimes
    fetch(link)
      .then(res => res.json())
      .then(res => res.response.docs)
      .then(res => res.forEach((item, index) => {
        return getData(item, index)
      }))
      .catch(() => console.log('Error!'))

    const getData = (json, index) => {
      let output = {
        headline: <h2 key={index + 'h2'}>{json.headline.main}</h2>,
        content: <p key={index + 'p'}>{json.abstract}</p>,
        image: json.multimedia[7] === undefined ? picture : domain + json.multimedia[7].url,
        url: json.web_url
      }

      this.setState(state => {
        const images = [...state.images, output.image]
        const info = [...state.info, [output.headline, output.content]]
        const urls = [...state.urls, output.url]
      })
    }
  }


  render() {
    let { images, info, urls } = this.state
    images = images.filter((image, index) => index % 2 == 0)
    info = info.filter((item, index) => index % 2 == 0)
    return (
      <div>
        { images !== [] &&
          <ReadySlider images={images} info={info} color={'#333333'} height={60} />
        }
      </div> 
    )
  }
}