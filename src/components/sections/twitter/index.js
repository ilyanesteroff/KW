import React, { useContext, useState } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/tweets'
import Tweets from './Tweets'
import { retrieveTweets } from '../../../helpers/tweets'


const Main = () => {
  const { tag } = useParams()
  const { tweets, tags } = useContext(ContentContext)
  const [ search, setSearch ] = useState('')
  if(!tags.find((t) => t === tag)) return <Redirect to={`/tweets/${tags[0]}`}/>

  return(
    <Container className="page-container">
      <input type="text" onChange={(e) => setSearch(e.target.value)}/>
      <Tweets 
        tweets={ retrieveTweets(tweets[tag]) }
        tag={ search }
      />
    </Container>
  )
}

export default Main