import React from 'react'
import LocalTime from './LocalTime'
import RightUpperSection from './RightUpperSection'
import { WidthContext } from '../pages/contexts'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { AdminLogedinContext } from '../pages/contexts'
import UpperOption from './UpperOption'

class UpperSection extends React.PureComponent {
  constructor(props){
      super(props)
  }

  static contextType = WidthContext

  render() {
    return (
      <div className="UpperHeader">
        <ul>
          <li><LocalTime/></li>
          <li>
            <RightUpperSection>
              <>
                {this.props.children}
                <AdminLogedinContext.Consumer>
                  {value => value.value && window.location.pathname !== '/settings' &&
                    <li><UpperOption sentence={"Settings"} icon={faUserCircle} link={'/settings'}/></li>
                  }
                </AdminLogedinContext.Consumer>
              </>
            </RightUpperSection>
          </li>
        </ul>
      </div>
    )
  }
}

export default UpperSection