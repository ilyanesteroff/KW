import React from 'react'
import Spinner from './Spinner'

export default (props) => {
  if (props.response !== null && !props.error.hasError ) return props.children
  else if(props.error.hasError) return <Spinner spinner={false} message={props.error.message}/>
  else if (props.spin) return  <Spinner/>
  else return <></>
}