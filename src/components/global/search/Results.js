import React, { useContext, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeSearch } from '../../../redux/actions'
import { ContentContext } from '../../../helpers/contexts'


const Results = ({ value, closeModal }) => {
  const { keywords } = useContext(ContentContext)
  const [ matches, setMatches ] = useState([])

  useEffect(() => {
    setMatches(() => {
        const newMatches = []
        if(!value) return newMatches
        Object.keys(keywords).forEach(key => {
          keywords[key].forEach(val => {
            if(val.startsWith(value) && key !== window.location.pathname) newMatches.push({ link: key, label: val })
          })
        })
        return newMatches
      }
    )
  }, [ value, keywords ])

  return(
    <div id="results">
      {matches.length
        ? (
            <div>
              {
                matches.map(({ link, label }) => (
                  <Link 
                    to={ link }
                    key={ link + label }
                    onClick={ closeModal }
                  >{ label[0].toUpperCase() + label.substring(1) }</Link>
                ))
              }
            </div>
          )
        : value
            ? <h3>Found nothing matching "{ value }"</h3>
            : <h3>Enter anything...</h3>
      }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeSearch())
})

export default connect(null, mapDispatchToProps)(Results)