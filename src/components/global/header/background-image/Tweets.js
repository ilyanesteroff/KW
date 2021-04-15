import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Container from '../../../../styles/header/tweets'
import { ContentContext } from '../../../../helpers/contexts'


const TweetsTags = () => {
  const { tags } = useContext(ContentContext)

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