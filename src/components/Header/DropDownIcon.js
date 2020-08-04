import React from 'react'
import DropDownMenu from './DropDownMenu'

class DropDownIcon extends React.Component{
  constructor(props){
    super(props)
    this.openNavbar = this.openNavbar.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.removeDropDown = this.removeDropDown.bind(this)
    this.state = {
      isClicked: false,
      scrollTop: 0,
      deltaScroll: {isSet: false, delta: 0}
    }
    this.container = React.createRef()
  }
    
  openNavbar = _ => {
    this.setState({
    isClicked: !this.state.isClicked
    })
  }

  componentDidMount = _ => {
    document.addEventListener("mousedown", this.handleClickOutside)
    window.addEventListener('scroll', this.removeDropDown)
  }

  componentWillUnmount = _ =>  {
    document.removeEventListener("mousedown", this.handleClickOutside)
    window.removeEventListener('scroll', this.removeDropDown)
  }

  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        isClicked: false
      });
    }
  }

  removeDropDown = _ => {
    if(this.state.isClicked) {
      let height = window.innerHeight
      if(!this.props.stickyNavbar) {
        this.setState({scrollTop: window.pageYOffset})
        if((((height - this.state.scrollTop)/height) * 100) < 77)
          this.setState({
            isClicked: false
          })
      } else {
        if(!this.state.deltaScroll.isSet)this.setState({deltaScroll: {isSet: true, delta: window.pageYOffset}})
        else if(((Math.abs(window.pageYOffset - this.state.deltaScroll.delta))/height)*100 > 30) this.setState({
          isClicked: false,
          deltaScroll: {isSet: false, delta: 0}
        })
      }
    }
  }

  render() {
    return (
      <div ref={this.container}>
        <h2 className="HiddenNavbarIcon" onClick={this.openNavbar}>☰</h2>
        {this.state.isClicked && <DropDownMenu/>}
      </div>
    )
  }
}

export default DropDownIcon