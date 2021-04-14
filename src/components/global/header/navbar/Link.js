import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links } from './links'


export const NavLink = ({ to, label, id, ...props }) => {
  const { pathname } = useLocation()
  console.log(pathname.split('/'))

  if(to === '/' + pathname.split('/')[1]) return null

  return(
    <Link 
      to={ to }
      id={ id }
      { ...props }
    >{ label }</Link>
  )
}

export const generateLinks = (id) => {
  const output = links.map((link, index) => (
    <Link
      to={ 
        link === 'Home' 
          ? '/' 
          : `/${link.toLowerCase()}`
      }
      id={ id }
      key={ link + index }
      label={ link }
    />
  ))
  return output
}