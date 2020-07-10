import React from 'react'
import { WidthContext } from '../pages/contexts'

const Description = () => {

    const Width = () => React.useContext(WidthContext)
    let style = {
        marginBottom: '2vh',
        marginTop: '3vh'
    }

    return(
        <div style={style}>
            <Chapter width={Width()}/>
            <TextArea width={Width()}/>
        </div>
    )
}

const Chapter = (props) => {

    let chapterStyle = {
        color: '#222255',
        fontFamily: 'Ubuntu, sans-serif',
        margin: '3%',
        marginLeft: '0'
    }
    props.width > 750 ? chapterStyle.fontSize = '1.8rem' : chapterStyle.fontSize = '1.3rem'
    return <h2 style={chapterStyle}>Fishing, diving and beaches on idyllic islands</h2>
}

const TextArea = (props) => {
    let paragraphStyle = {
        color: '#111133',
        fontFamily: 'Josefin Sans, sans-serif'
    }
    props.width > 750 ? paragraphStyle.fontSize = '1.5rem' : paragraphStyle.fontSize = '1.1rem'
    return <p style={paragraphStyle}>A drive through the Florida Keys and Key West is one of the best scenic road trips in the USA. Only one road connects the 161-kilometer-long island chain: It began as Flagler’s Railroad, became the legendary Overseas Highway and now has been designated an All-American Road under the National Scenic Byways program. The drive has magnificent scenery, significant historic value and an abundance of recreational opportunities, making it a vacation unto itself.</p>
}

export default Description