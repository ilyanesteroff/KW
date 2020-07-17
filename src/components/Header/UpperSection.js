import React from 'react'
import LocalTime from './LocalTime'
import RightUpperSection from './RightUpperSection'
import { upperHeader, rightUpperSection } from './styles'
import { WidthContext } from '../pages/contexts'

class UpperSection extends React.Component {
  constructor(props){
      super(props)
  }

  static contextType = WidthContext

  render() {
    return (
      <div style={upperHeader}>
        <ul>
          {this.context > 700 && <li><LocalTime/></li>}
          <li>
            <RightUpperSection>
              <>
                {this.props.children}
              </>
            </RightUpperSection>
          </li>
        </ul>
      </div>
    )
  }
}

export default UpperSection