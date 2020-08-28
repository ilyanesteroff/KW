import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

export default React.memo(_ => {
  return(
    <div>
      <Logo url={'https://upload.wikimedia.org/wikipedia/commons/2/24/Seal_of_Key_West%2C_Florida.png'}/>
      <Navbar/>
    </div>
  )
})

