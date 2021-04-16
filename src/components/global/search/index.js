import React from 'react'
import { connect } from 'react-redux'
import { search } from '../../../redux/selectors'
import Search from './Search'


const Main = ({ opened }) => (
  opened
    ? <Search/>
    : null
)



export default connect(search)(Main)