import { useState, useEffect, useLayoutEffect } from 'react'

let width = () => window.innerWidth
document.addEventListener('resize', width)
const height = () => window.innerHeight


export { width, height }