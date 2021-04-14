import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Container from '../../../../styles/header/tweets'


const TweetsTags = () => {
  const [ tags, setTags ] = useState([])

  useEffect(() => {
    fetch('/twitter-tags.json')
      .then(res => res.json())
      .then(res => {
        if(res.data) setTags(res.data)
      })
  })

  return(
    <Container>
      <div id="flex">
        <h3>Recent tweets</h3>
        <FontAwesomeIcon icon={ faTwitter }/>
      </div>
      {tags.map((tag, index) => (
        <Link 
          to={`/tweets/${tag}`}
          key={ tag + index }
        >{'#' + tag}</Link>
      ))}
    </Container>
  )
}

export default TweetsTags