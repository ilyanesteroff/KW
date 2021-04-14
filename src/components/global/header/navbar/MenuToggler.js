import React, { useContext } from 'react'
import Container from '../../../../styles/header/menuToggler'
import { MenuOpenedContext } from '../../../../helpers/contexts'


const MenuToggler = () => {
  const { opened, setOpened } = useContext(MenuOpenedContext)
  
  return(
    <Container 
      opened={ opened }
      onClick={() => setOpened(!opened)}
    >
      <div id="top"></div>
      <div id="middle"></div>
      <div id="bottom"></div>
    </Container>
  )
}

export default MenuToggler