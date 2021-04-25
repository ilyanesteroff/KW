import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../styles/links'


const Navigation = ({ prev, next }) => (
  <Container>
    {prev && <Link to={`/location/${ prev }`}>{ prev }</Link>}
    {next && 
      <Link 
        id="right" 
        to={`/location/${ next }`}
      >{ next }</Link>
    }
  </Container>
)

export default Navigation