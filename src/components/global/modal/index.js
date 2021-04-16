import React from 'react'
import { connect } from 'react-redux'
import { modal } from '../../../redux/selectors'
import Modal from './Modal'


const Main = ({ url }) => (
  url 
    ? <Modal url={ url }/>
    : null
)



export default connect(modal)(Main)