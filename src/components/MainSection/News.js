import React, { useState, useEffect } from 'react'
import {NYTimes} from './refs/links'
import ReadySlider from '../Slider/ReadySlider'
import Spinner from '../MainSection/Spinner'
import { width } from '../Helpers/Helpers'
import { Chapter, PS } from '../Helpers/DesignAssistants'
import { NewsContext } from '../pages/contexts'
import UpperContainer from './UpperContainer'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'

const { link, domain, picture } = NYTimes

const useSetNews = () => {

  const [ response, loading, hasError, message ] = useFetch(link, {}, retrieveNews, 'News')

  const [ content, setContent] = useState([])
  const [ images, setImages] = useState([])
  const [ url, setUrl] = useState([])
  const [ error, setError ] = useState({hasError: false, message: ''})
  const [ newsLoaded, setNewsLoaded ] = useState(false)

  useEffect(() => {
    if (response !== null) {

      response.map((item) => JSON.parse(item.replace(/[$^]/g,','))).forEach((item, index) => {
        let _content 
        width() < 1000? _content = <h2 key={index + 'h2'}>{item.headline}</h2> : 
          _content = [<h2 key={index + 'h2'}>{item.headline}</h2>, <p key={index+'p'}>{item.content}</p>]
        setContent(content => [...content, _content])
        setImages(images => [...images, item.image])
        setUrl(url => [...url, item.url])
      })

      setNewsLoaded(true)
    } else if (response === null && hasError) {
      setError({hasError: hasError, message: message})
    }
  }, [response, loading])

  return[{images: images, content: content, url: url}, newsLoaded, error]
}

const NewsData = (props) => {

  const [ news, newsLoaded, error ] = useSetNews()
  const [ spin ] = useSpinnerSuspense(50)
  let output, height
  
  width() < 600? height = 30: height = 60

  if(!newsLoaded && spin) output = <Spinner/>
  else if(error.hasError) output = <Spinner spinner={false} message={error.message}/>
  else if (newsLoaded){
    output = 
    <NewsContext.Provider value={true}>
      <UpperContainer>
        <Chapter additionalStyle={{marginTop: '10vh'}}>Here are some breaking news from use and Florida</Chapter>
      </UpperContainer>
      <ReadySlider images={news.images} info={news.content} color={'#333333'} height={height} url={news.url}/>
      <UpperContainer>
        <PS>Source: New York Times</PS>
      </UpperContainer>
    </NewsContext.Provider>
  }

  return <div>{output}</div>
}




const retrieveNews = (json) => {
  let output = []
  json = json.response.docs
  json.forEach((item, index) => {
    output.push(getData(item, index))
  })
  return output
} 

const getData = json => {
  let output = {
    headline: json.headline.main.replace(/[,]/g,'^'),
    content: json.abstract.replace(/[,]/g,'^'),
    image: json.multimedia[7] === undefined ? picture : domain + json.multimedia[7].url,
    url: json.web_url
  }
  
  output = JSON.stringify(output).replace(/[,]/g,'$')
  return output
} 

export { NewsData }