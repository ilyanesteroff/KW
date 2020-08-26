import React from 'react'

const WidthContext = React.createContext(window.innerWidth)
const HeightContext = React.createContext(window.innerHeight)
const AdminLogedinContext = React.createContext(false)
const ScrollTopContext = React.createContext(false)
const NewsContext = React.createContext(false)
const StickyNavbarContext = React.createContext(null)
const Width = () => React.useContext(WidthContext)
const Height = () => React.useContext(HeightContext)
const PlacesContext = React.createContext({})

export { WidthContext, HeightContext, ScrollTopContext,
     NewsContext, StickyNavbarContext, 
     AdminLogedinContext, PlacesContext, Width, Height 
}