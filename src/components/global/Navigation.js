import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../styles/links'


const Navigation = ({ prev, next, path }) => (
  <Container>
    {prev && <Link to={`/${path}/${ prev.param || prev }`}>{ prev.label || prev }</Link>}
    {next && 
      <Link 
        id="right" 
        to={`/${path}/${ next.param || next }`}
      >{ next.label || next }</Link>
    }
  </Container>
)

export default React.memo(Navigation)