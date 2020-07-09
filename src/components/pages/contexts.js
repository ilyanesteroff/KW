import React from 'react'

const WidthContext = React.createContext(window.innerWidth)
const HeightContext = React.createContext(window.innerHeight)
const ScrollTopContext = React.createContext(false)

export { WidthContext, HeightContext, ScrollTopContext }