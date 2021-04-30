import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const Metadata = ({ profile_image, verified, users_name, username }) => (
  <div id="upper-section">
    { profile_image &&
      <img 
        src={ profile_image } 
        id="avatar-pic"
        alt=""
      />
    }
    <div>
      <h4 id="username"> 
        { verified &&
          <FontAwesomeIcon 
            icon={ faCheckCircle } 
            id="verified"
          />
        }
        { users_name }
      </h4>
      <h4>@{ username }</h4>
    </div>
    <FontAwesomeIcon 
      id="twitter-icon" 
      icon={ faTwitter }
    />
  </div>
)

export default React.memo(Metadata)