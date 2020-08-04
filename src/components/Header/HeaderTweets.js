import React from 'react'
import TwitterTags from './TwitterTags'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { twitterTags as tags } from '../MainSection/info'
import { Link } from 'react-router-dom'


export default _ =>{
  return (
    <div className="HeaderTweets">
      <Headline sentence="Recent Twitts" link="/twitts/Florida"/>
      <TwitterTags tags={tags} />
    </div>
  )
}

const Headline = ({sentence, link}) => {
  return (
    <Link to={link}>
      <h3 className="TwitterSectionHeadline">
        <span id="HeaderTwitterIcon">
          <FontAwesomeIcon icon={faTwitter}/>
        </span>
        {sentence}
      </h3>
    </Link>
  )
}