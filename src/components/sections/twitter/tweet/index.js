import React from 'react'
import { getTime } from '../../../../helpers/tweets'
import Container from '../../../../styles/tweets/tweet'
import Metadata from './Metadata'
import Body from './Body'


const Tweet = ({ data }) => {
  if (data.text.lastIndexOf('https://') !== -1) data.text = data.text.slice(0, data.text.lastIndexOf('https://'))
  const createdAt = getTime(data.created_at.slice(0, data.created_at.lastIndexOf('+0000')))

  return(
    <Container bgColor={`#${data.profile_link_color}`}>
      <Metadata { ...data }/>
      <Body { ...{...data, createdAt} }/>
    </Container>
  )
}


export default Tweet
