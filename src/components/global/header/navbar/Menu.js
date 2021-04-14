import React, { useContext } from 'react'
import { NavLink as Link } from './Link'
import Container from '../../../../styles/header/menu'
import { links } from './links'
import { MenuOpenedContext } from '../../../../helpers/contexts'
import SearchInMenu from '../../search/IconAndLabel'


const Menu = () => {
  const { opened } = useContext(MenuOpenedContext)

  const generateLinks = () => {
    const output = links.map((link, index) => (
      <Link
        to={ 
          link === 'Home' 
            ? '/' 
            : `/${link.toLowerCase()}`
        }
        id="menu-link"
        key={ link + index }
        label={ link }
      />
    ))
    return output
  }

  return(
    <Container 
      id="menu-bar"
      opened={ opened }
    >
      <div>
        { generateLinks() }
        <SearchInMenu/>
      </div>
    </Container>
  )
}

export default Menu