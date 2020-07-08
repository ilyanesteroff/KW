import React from 'react'

class MainSection extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const style = {
            position: 'relative',
            height: '60vh',
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/0/08/Fortzacharytaylor.jpg)',
            backgroundPosition: 'center',
            backgroundsize: 'cover'
        }

        return(
            <main style={style}>
                <h1>Main</h1>
            </main>
        )
    }
}

export default MainSection 