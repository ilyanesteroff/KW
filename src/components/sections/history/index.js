import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { ContentContext } from '../../../helpers/contexts'
import Container from '../../../styles/pages/history'
import Navigation from '../../global/Navigation'


const History = ({ page }) => {
  const { history } = useContext(ContentContext)
  const index = history.links.findIndex((i) => i.param === page)
  if(index < 0) return <Redirect to={ `/history/${ history.links[0].param }` }/>
  
  return(
    <Container className="page-container">
      <Navigation 
        path="history"
        next={
          index < history.links.length - 1
            ? ({ ...history.links[index + 1] })
            : null
        }
        prev={
          index > 0
            ? ({ ...history.links[index - 1] })
            : null
        }
      />
    </Container>
  )
}

export default History