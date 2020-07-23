import React from 'react'
import { CovidLinks } from './refs/links'
import Spinner from '../MainSection/Spinner'
import { Chapter, PS } from '../Helpers/DesignAssistants'
import { width } from '../Helpers/Helpers'
import { useFetch, useLocalStorage } from '../Helpers/Helpers'
export default (props) => {

  const [response, loading, hasError] = useFetch(CovidLinks[0].link, CovidLinks[0].headers, extractCovidData, 'Florida')
  const [response1, loading1, hasError1] = useFetch(CovidLinks[1].link, CovidLinks[1].headers, extractCovidData, 'USA')

  let style = {
    position: 'relative',
    marginLeft: width() > 1000 ? '10%' : '2.5%',
    width: width() > 1000 ? '80%' : '95%',
    marginTop: '15vh',
    textAlign: 'center'
  }

  let output 
  !hasError && !hasError1 ?
  response !== null && response1 !== null ? 
  output = 
    <div style={style}>
      <Chapter>Covid-19 Statistics in USA and Florida</Chapter>
      {generateTable({local: response, global: response1})}
      <PS>Source: </PS>
    </div> : output = <Spinner/>
  : output = <Spinner spinner={false}/>
  return output 
}

const extractCovidData = (json) => {
  if(json.data === undefined)
    json = json[0] 
  else 
    json = json.data[0]
  let output = []
  output.push(json.confirmed)
  output.push(json.critical || Math.floor(json.confirmed_diff / 5))
  output.push(json.deaths)
  output.push(json.recovered)
  output.push(json.lastUpdate || json.last_update)
  output.push(json.fatality_rate || 0.01)
  console.log('data fetched!')
  return output
}

const generateTable = (data) => {
  data.local = ['Florida', ...data.local]
  data.global = ['Usa', ...data.global]
  let items = ['', 'Confirmed Cases', 'Critical', 'Deaths', 'Recovered', 'Last Update', 'Fatality Rate']
  let head, content
  if(width() > 1000) { 
    head = <>
      {
        items.map((item, index) => <th key={index}>{item}</th>)
      }
    </>
    content = [<Cols key={1} data={data.local}/>, <Cols key={2} data={data.global}/>]
  } else { 
    head = <> 
      <th key={0}>{items[0]}</th>
      <th key={1}>{data.local[0]}</th>
      <th key={2}>{data.global[0]}</th>
    </>
    content = []
    for ( let i = 1; i < items.length-1; i++){
      content = [...content, <Cols key={i} data={[items[i], data.local[i], data.global[i]]}/>]
    }
  }
  return <Table head={head} content={content}/>
}

const Table = ({head, content}) => {
  return (
    <table>
      <thead>
        <tr>
          {head}
        </tr>
      </thead>
      <tbody>
        {content}
      </tbody>
    </table>
  )
}

const Cols = ({data}) => {
    let output 
    width() > 1000 ? output = <>{data.map(item => <td key={item}>{item}</td>)}</> :
    output = <><th>{data[0]}</th><td>{data[1]}</td><td>{data[2]}</td></>
    return(
        <tr>
          {output}
        </tr>
    )
}
