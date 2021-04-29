import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ContentContext } from '../../../helpers/contexts'
import { WithScrollUp } from '../../../helpers/HOC'


const Tags = () => {
  const { tags } = useContext(ContentContext)
  const { tag } = useParams()

  return(
    <div id="tags">
      {tags.filter((t) => t !== tag).map((t, index) => (
        <Link 
          to={`/tweets/${t}`}
          key={ index + t }
        >#{t}</Link>
      ))}
    </div>
  )
}

export default WithScrollUp(Tags)