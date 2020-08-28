import React, {useState, useEffect} from 'react'
import { StickyNavbarContext } from '../pages/contexts'
import Navbar from './Navbar'
import LogoLabel from './LogoLabel'


export default React.memo(({fixed}) => {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false)
    useEffect(() => {
      window.addEventListener('scroll', calculateRatio)
      return _ => window.removeEventListener('scroll', calculateRatio)
    })

    const calculateRatio = _ => {
      if(window.scrollY > window.innerHeight / 2.5) setShowStickyNavbar(true)
      else setShowStickyNavbar(false)
    }

    let style = {
      position : fixed? 'static' : 'fixed', 
      top: showStickyNavbar || fixed ? '0' : '-27%',
      zIndex: '2'
    }  

    return (
      <StickyNavbarContext.Provider value={style.top === '0'? true : false}>
        <div style={style} id="StickyNavbar">
            <LogoLabel/>
            <Navbar/>
        </div>
      </StickyNavbarContext.Provider>
    )
})
