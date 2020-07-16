import React from 'react'
import { generateContainerStyle } from './styles'
import { getCovidData } from '../Helpers/Helpers'

export default class extends React.Component{
    constructor(props){
      super(props)
      this.state = {
          totalCovidData: null, 
          localCovidData: null
      }
    }

    async componentDidMount() {
      let data = await getCovidData('bd0b30ab4dmsh22d059c15a32a28p1c4cd5jsn33d087f197cf')
      this.setState({
          totalCovidData: data[0],
          localCovidData: data[1]
      })
    }

    render() {
      return (
          <div>
            
          </div>
      )
    }
}