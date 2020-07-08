import React from 'react'

class LogoLabel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { width } = this.props
        const logoLabelStyle = {
            position: 'absolute',
            top: '5vh',
            color: 'white',
            fontFamily: 'Nunito, sans-serif',
            fontSize: '1.5rem'
        }
        if(width > 1300)
           logoLabelStyle.left = '9vw'
        else if(width > 1100)
           logoLabelStyle.left = '10vw'
        else if (width > 800) {
           logoLabelStyle.left = '15vw'
           logoLabelStyle.fontSize = '1.4rem'
           logoLabelStyle.top = '5.4vh'
        }
        else if(width > 700) {
           logoLabelStyle.left = '16vw'
           logoLabelStyle.top = '5.5vh'
           logoLabelStyle.fontSize = '1.3rem'
        } else if (width > 600) {
           logoLabelStyle.left = '17vw'
           logoLabelStyle.top = '5.6vh'
           logoLabelStyle.fontSize = '1.2rem'
        } else if (width > 500) {
            logoLabelStyle.left = '18vw'
            logoLabelStyle.top = '5.7vh'
            logoLabelStyle.fontSize = '1.1rem'
        } else if (width > 400) {
            logoLabelStyle.left = '19vw'
            logoLabelStyle.top = '5.8vh'
            logoLabelStyle.fontSize = '1rem'
        } else {
            logoLabelStyle.left = '25%'
            logoLabelStyle.top = '5.8vh'
            logoLabelStyle.fontSize = '1rem'
        }
        return(
            <div>
                <h2 style={logoLabelStyle}>Key West Florida</h2>
            </div>
        )
    }
}

export default LogoLabel