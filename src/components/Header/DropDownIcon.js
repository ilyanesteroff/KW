import React from 'react'
import { hiddenNavbarIcon } from './styles'
import DropDownMenu from './DropDownMenu'

class DropDownIcon extends React.Component{
  constructor(props){
    super(props)
    this.openNavbar = this.openNavbar.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)

    this.state = {
      isClicked: false
    }

    this.container = React.createRef()
  }
    
  openNavbar(){
    this.setState({
    isClicked: !this.state.isClicked
    })
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        isClicked: false,
      });
    }
  }

  render(){
    return (
      <div ref={this.container}>
        <h2 style={hiddenNavbarIcon} onClick={this.openNavbar}>☰</h2>
        {this.state.isClicked && <DropDownMenu/>}
      </div>
    )
  }
}

export default DropDownIcon