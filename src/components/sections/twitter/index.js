import React, { useContext, useState, memo } from 'react'
import { Redirect } from 'react-router-dom'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/tweets'
import Tweets from './Tweets'
import Tags from './Tags'
import { retrieveTweets } from '../../../helpers/tweets'


const Main = ({ tag }) => {
  const { tweets, tags } = useContext(ContentContext)
  const [ search, setSearch ] = useState('')
  if(!tags.find((t) => t === tag)) return <Redirect to={`/tweets/${tags[0]}`}/>

  return(
    <Container className="page-container">
      <div id="upper">
        <h2>#{tag} tweets</h2>
        <input 
          type="text" 
          placeholder="Enter tag here..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Tweets 
        tweets={ 
          retrieveTweets(tweets[tag]).filter((t) => {
            if(!search) return true
            return t.hashtags && t.hashtags.some((h) => h.toLowerCase().startsWith(search.toLowerCase()))
          }) 
        }
        tag={ search }
      />
      <Tags/>
    </Container>
  )
}

export default memo(Main)