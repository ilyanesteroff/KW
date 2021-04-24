import React, { useContext } from 'react'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/news'
import Slider from '../../global/slider'
import Article from './Article'


const News = () => {
  const { news } = useContext(ContentContext)

  return(
    <Container className="page-container">
      <h2>New York Times news</h2>
      <Slider
        auto
        items={ news.docs.map((item, index) => (
          <Article
            key={ index }
            image={ 
              item.multimedia.length > 0
                ? `https://nytimes.com/${item.multimedia[0].url}`
                : 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg'
            }
            url={ item.web_url }
            title={ item.headline.main }
            summary={ item.lead_paragraph }
          />
        )) }
      />
      <h3>{ news.copyright }</h3>
    </Container>
  )
}

export default News