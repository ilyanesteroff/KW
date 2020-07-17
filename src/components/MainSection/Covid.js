import React, { Fragment } from 'react'
import { getCovidData } from '../Helpers/Helpers'

export default (props) =>{
    /*constructor(props){
      super(props)
      this.state = {
          totalCovidData: null, 
          localCovidData: null
      }
    }*/
  
    /*async componentDidMount() {
      let data = await getCovidData('bd0b30ab4dmsh22d059c15a32a28p1c4cd5jsn33d087f197cf')
      this.setState({
          totalCovidData: data[0],
          localCovidData: data[1]
      })
      console.log('now' + [this.state.totalCovidData, this.state.localCovidData])
    }*/
    
    const [covidLocalData, setCovidLocalData] = React.useState({})
    const [covidTotalData, setCovidTotalData] = React.useState({})

    React.useEffect(() => {
        let data = getCovidData('bd0b30ab4dmsh22d059c15a32a28p1c4cd5jsn33d087f197cf')
         .then(result => {
             
         })
    })

    return (
      <div>
        <Headline content={'Novel Coronavirus in Florida'}/>
      </div>
    )
}

const Headline = (props) => {
    let style = {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1.5rem',
        color: '#444'
    }
    return <h1 style={style}>{props.content}</h1>
}

const Table = (props) => {
    if(props.data !== null) {
      let data = props.data.map(tab => 
      <tr>
        <Cols data={tab}/>
      </tr>
      )
    }
    console.log(props.data)
 
    return (
        <table>
          <thead>
            <tr>
              <th>Confirmed Cases</th>
              <th>Critical</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Last Update</th>
              <th>Fatality Rate</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
    )
}

const Cols = (props) => {
    const { data } = props
    return(
        <>
          <td>{data.confirmed}</td>
          <td>{data.critical}</td>
          <td>{data.deaths}</td>
          <td>{data.recovered}</td>
          <td>{data.lastUpdate}</td>
          <td>{data.fatalityRate}</td>
        </>
    )
}