import React from 'react'

export default React.memo(props => {
  return(
    <>
      <ul className="RightUpperSection">
        {props.children}
      </ul>
    </>
  ) 
})