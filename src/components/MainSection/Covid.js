import React, {useEffect, useState} from 'react'
import { CovidLinks } from './refs/links'
import Spinner from '../MainSection/Spinner'
import { Chapter, PS } from '../Helpers/DesignAssistants'
import { width } from '../Helpers/Helpers'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'
import { SSS } from '../MainSection//styles'

export default (props) => {

  const [response, loading, hasError, message] = useFetch(CovidLinks[0].link, CovidLinks[0].headers, extractCovidData, 'Florida')
  const [response1, loading1, hasError1, message1] = useFetch(CovidLinks[1].link, CovidLinks[1].headers, extractCovidData, 'USA')
  const [spin] = useSpinnerSuspense(10)

  let output

  if (response1 !== null &&  response !== null && !hasError ){
    output = 
    <div style={SSS}>
      <Chapter>Covid-19 Statistics in USA and Florida</Chapter>
      {generateTable({local: response, global: response1})}
      <PS>Source: </PS>
    </div>
  }
  else if(hasError || hasError1) output = <Spinner spinner={false} message={hasError1? message1 : message}/>
  else if (spin) output = <Spinner/>

  return <>{output}</>
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
    <table className="Covid" style={{boxShadow: '0 0 10px'}}>
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
