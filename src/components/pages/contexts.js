import React from 'react'

const WidthContext = React.createContext(window.innerWidth)
const HeightContext = React.createContext(window.innerHeight)
const ScrollTopContext = React.createContext(false)
const NewsContext = React.createContext(false)
const StickyNavbarContext = React.createContext(null)
const Width = () => React.useContext(WidthContext)
const Height = () => React.useContext(HeightContext)

export { WidthContext, HeightContext, ScrollTopContext, NewsContext, StickyNavbarContext, Width, Height }