import React, { useState, useEffect, useContext } from 'react'
import { CovidLinks } from './refs/links'
import Spinner from '../MainSection/Spinner'
import { Chapter } from '../Helpers/DesignAssistants'

const Width = () => window.innerWidth

export default (props) => {

  const [response, loading, hasError] = useFetch(CovidLinks[0].link, CovidLinks[0].headers, extractCovidData)
  const [response1, loading1, hasError1] = useFetch(CovidLinks[1].link, CovidLinks[1].headers, extractCovidData)

  let style = {
    position: 'relative',
    marginLeft: Width() > 1000 ? '10%' : '2.5%',
    width: Width() > 1000 ? '80%' : '95%',
    marginTop: '15vh',
    textAlign: 'center'
  }

  let output 
  !hasError && !hasError1 ?
  response !== null && response1 !== null ? 
  output = 
    <div style={style}>
      <Chapter width={Width()}>Covid-19 Statistics</Chapter>
      <Table data={{local: response, global: response1}} width={Width()}></Table> 
    </div> : output = <Spinner/>
  : output = <Spinner spinner={false}/>
  return output 
}

const useFetch = (url, opts, func) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url, opts)
      .then(res => res.json())
      .then(res => {
        if(res.data === undefined)
          return res[0] 
        else 
          return res.data[0]
      })
      .then(res => func(res))
      .then(res => setResponse(res))
      .catch(() => setHasError(true))
    
    setLoading(false)
  }, [url])

  return [ response, loading, hasError]
}

const extractCovidData = (json) => {
  let output = []
  output.push(json.confirmed)
  output.push(json.critical || Math.floor(json.confirmed_diff / 5))
  output.push(json.deaths)
  output.push(json.recovered)
  output.push(json.lastUpdate || json.last_update)
  output.push(json.fatality_rate || 0.01)
  return output
}

const Table = ({data}) => {
  data.local = ['Florida', ...data.local]
  data.global = ['Usa', ...data.global]
  let items = ['', 'Confirmed Cases', 'Critical', 'Deaths', 'Recovered', 'Last Update', 'Fatality Rate']
  let head, content
  if(Width() > 1000) { 
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
    Width() > 1000 ? output = <>{data.map(item => <td key={item}>{item}</td>)}</> :
    output = <><th>{data[0]}</th><td>{data[1]}</td><td>{data[2]}</td></>
    return(
        <tr>
          {output}
        </tr>
    )
}
