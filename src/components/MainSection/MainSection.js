import React from 'react'
import UpperContainer from './UpperContainer'

export default React.memo(({data}) => {
  return(
    <main>
      <UpperContainer data={data}/>
    </main>
  )
})