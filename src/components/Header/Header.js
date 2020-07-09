import React from 'react'
import UpperSection from './UpperSection'
import LowerSection from './LowerSection'
import StickyNavbar from './StickyNavbar'

function Header(props) {
    return (
        <div>
            <StickyNavbar/>
            <UpperSection/>
            <LowerSection/>
        </div>
    )
}

export default Header