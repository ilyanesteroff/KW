import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { AdminLogedinContext } from '../pages/contexts'
import { Link } from "react-router-dom";

export default _ => {
  return (
    <div id="footer">
      <h2 className="AboveFooter">Key West 2020</h2>
      <div className="FooterContainer">
        <div className="FooterContent">
          <SocialMedias/>
          <div className="ContactDeveloper">
            <h1 className="Contact">Contact developer</h1>
            <p>Email: <span id="DeveloperEmail"></span></p>
          </div>
        </div>
        <div className="FooterContent">
          <AdminLogin/>
        </div>
      </div>
    </div>
  )
}

const AdminLogin = _ => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState('')

  const setInputs = (name, value) => {
    name === 'username'? setUsername(value) : setPassword(value)
  }

  const makeAuthorization = (event, cb) => {
    event.preventDefault()
    if(username === '' || password === '') 
      setWarning(
      <span className="LoginError" onClick={() => setWarning('')}>Input your {username === ''? 'username ' : 'password '}
        <FontAwesomeIcon className="LoginErrorIcon" icon={faTimesCircle}/>
      </span>)
    else {
      setWarning('')
      cb()
    }
  }

  const logOut = cb => {
    setPassword('')
    setUsername('')
    cb()
  }

  return (
    <AdminLogedinContext.Consumer>
      {value => 
        <>
          {!value.value && 
            <>
              <h2 className="Contact">Log in as an admin of this site:</h2>
              <h2>{warning}</h2>
              <form>
                <Label text="Username: " type="text" name="username" manageInput={setInputs}/>
                <Label text="Password: " type="password" name="password" manageInput={setInputs}/>
                <button className="LoginButton" onClick={(event) => makeAuthorization(event, value.method)}>Log in</button>
              </form>
            </>} 
            { value.value && 
            <div>
              <h2 className="Contact">You are currently logged in as Admin</h2>
              {window.location.pathname !== '/settings' && 
                <Link to="/settings">
                  <h4 className="ContentManagerLink">Go to content manager</h4>
                </Link>
              }
              <button className="LoginButton" onClick={() => logOut(value.method)}>Log out</button>
            </div>
          }
        </>
      }
    </AdminLogedinContext.Consumer>
  )
} 

const Label = ({text, manageInput, type, name}) => {
  const changeInput = event => {
    manageInput(event.target.name, event.target.value)
  }

  return (
    <label className="Label">
      <h3 className="FormLabel">{text}</h3>
      <input type={type} name={name} onChange={changeInput} className="SigninLabel"/>
    </label>
  )
}

const SocialMedias = _ => {
  let links = ['https://www.facebook.com', 'https://www.twitter.com', 'https://www.instagram.com', 'https://www.youtube.com/']
  let icons = [faFacebook, faTwitter, faInstagram, faYoutube]
  let content = links.map((link, index) => <Icon link={link} icon={icons[index]} key={index}/>)
  return (
    <>
      <h2 className="Contact">Connect with us</h2>
      <div className="SocialMediaSection">
        {content}
      </div>
    </>
  )
}

const Icon = ({link, icon}) => {
  return (
    <a className="SocialMediaIcon" href={link} target="_blank">
      <FontAwesomeIcon icon={icon}/>
    </a>
  )
}