import React, { useContext } from 'react'
import Container from '../../../styles/covid'
import { ContentContext } from '../../../helpers/contexts'


const Covid = () => {
  const { covid } = useContext(ContentContext)
  const items = ['', 'Confirmed Cases', 'Critical', 'Deaths', 'Recovered', 'Last Update', 'Fatality Rate']
  const florida = extractCovidData(covid.florida)
  const usa = extractCovidData(covid.usa)

  return(
    <Container className="page-container">
      <h2>{ covid.covid.title }</h2>
      <div id="table-section">
        <h3>{ covid.covid.about.title }</h3>
        <p>
          { covid.covid.about.content }
          <a href={ covid.covid.about.link }>Learn more...</a>
        </p>
        <table id="wide-table">
          <thead>
            <tr>
              { items.map((item, index) => <th key={index}>{item}</th>) }
            </tr>
          </thead>
          <tbody>
            <tr>
              { ['Florida', ...florida].map(item => <td key={item}>{item}</td>) }
            </tr>
            <tr>
              { ['Usa', ...usa].map(item => <td key={item}>{item}</td>) }
            </tr>
          </tbody>
        </table>
        <table id="flat-table">
          <thead>
            <tr>
              <th key={0}>{ items.shift() }</th>
              <th key={1}>Florida</th>
              <th key={2}>USA</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                <th>{ item }</th>
                <td>{ florida[index] }</td>
                <td>{ usa[index] }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p id="ps">Source: Rapid API Covid-19 API</p>
    </Container>
  )
}


const extractCovidData = (json) => {
  const output = []

  output.push(json.confirmed)
  output.push(json.critical || Math.floor(json.confirmed_diff / 5))
  output.push(json.deaths)
  output.push(json.recovered)
  output.push(json.lastUpdate || json.last_update)
  output.push(json.fatality_rate || 0.01)
  
  return output
}

export default Covid