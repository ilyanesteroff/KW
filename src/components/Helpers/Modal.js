import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
    document.body.style.overflowY = 'hidden'
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    document.body.style.overflowY = 'auto'
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

export { modalRoot }