import React from 'react'

const WidthContext = React.createContext(window.innerWidth)
const HeightContext = React.createContext(window.innerHeight)
const ScrollTopContext = React.createContext(false)
const NewsContext = React.createContext(false)
const Width = () => React.useContext(WidthContext)
const Height = () => React.useContext(HeightContext)

export { WidthContext, HeightContext, ScrollTopContext, NewsContext, Width, Height }