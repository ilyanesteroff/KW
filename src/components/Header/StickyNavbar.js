import React from 'react'
import { ScrollTopContext, StickyNavbarContext } from '../pages/contexts'
import Navbar from './Navbar'
import LogoLabel from './LogoLabel'


export default (props) => {
    const ScrollTop = () => React.useContext(ScrollTopContext)
    let style = {
        width: '100%',
        height: '13vh',
        minHeight: '4rem',
        backgroundColor: 'rgba(51, 34, 136, 0.9)',
        position : props.fixed? 'static' : 'fixed', 
        left: '0',
        top: '-10%',
        transition: 'top 0.5s',
        zIndex: '2'
    }  
    ScrollTop() || props.fixed ? style.top = '0' : style.top = '-27%'

    return (
      <StickyNavbarContext.Provider value={style.top === '0'? true : false}>
        <div style={style} id="StickyNavbar">
            <LogoLabel/>
            <Navbar/>
        </div>
      </StickyNavbarContext.Provider>
    )
}
