import React from 'react'

const Description = () => {



    return(
        <div>
            <Chapter/>
            <TextArea/>
        </div>
    )
}

const Chapter = () => {
    return <h2 style={chapterStyle}>Fishing, diving and beaches on idyllic islands</h2>
}

const TextArea = () => {
    return <p style={paragraphStyle}>A drive through the Florida Keys and Key West is one of the best scenic road trips in the USA. Only one road connects the 161-kilometer-long island chain: It began as Flagler’s Railroad, became the legendary Overseas Highway and now has been designated an All-American Road under the National Scenic Byways program. The drive has magnificent scenery, significant historic value and an abundance of recreational opportunities, making it a vacation unto itself.</p>
}

let chapterStyle = {
    fontSize: '2.5rem',
    color: '#222255',
    fontFamily: 'Ubuntu, sans-serif',
    margin: '3%',
    marginLeft: '0'
}

let paragraphStyle = {
    fontSize: '1.5rem',
    color: '#111133',
    fontFamily: 'Josefin Sans, sans-serif'
}

export default Description