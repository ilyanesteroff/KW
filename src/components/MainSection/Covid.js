import React from 'react'
import { CovidLinks } from './refs/links'
import Spinner from '../MainSection/Spinner'
import { Chapter, PS, TextArea, Link } from '../Helpers/DesignAssistants'
import { width } from '../Helpers/Helpers'
import { useFetch, useSpinnerSuspense } from '../Helpers/Hooks'

export default (props) => {

  const [response, loading, error] = useFetch(CovidLinks[0].link, CovidLinks[0].headers, extractCovidData, 'Florida')
  const [response1, loading1, error1] = useFetch(CovidLinks[1].link, CovidLinks[1].headers, extractCovidData, 'USA')
  const [spin] = useSpinnerSuspense(10)

  let output

  if (response1 !== null &&  response !== null && !error.hasError && !error1.hasError){
    document.title = `Covid-19 - Key West`
    output = 
    <div  className="MainSectionContainer TableSection">
      <Chapter>Covid-19 Statistics in USA and Florida</Chapter>
      <div style={{backgroundColor: '#9999ee', boxShadow: '0 0 10px'}}>
        <Chapter additionalStyle={{textAlign: 'center', marginTop: '10vh', paddingTop: '2%'}}>About Covid-19</Chapter>
        <TextArea additionalStyle={{textAlign: 'left', padding: '0 2.5%', color: '#222'}}>Covid-19 is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). It was first identified in December 2019 in Wuhan, Hubei, China, and has resulted in an ongoing pandemic. The first confirmed case has been traced back to 17 November 2019 in Hubei. Common symptoms include fever, cough, fatigue, shortness of breath, and loss of smell and taste. <a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019" style={{color: '#333'}}>Learn more...</a></TextArea>
        {generateTable({local: response, global: response1})}
      </div>
      <PS>Source: Rapid API Covid-19 API</PS>
    </div>
  }
  else if(error.hasError || error1.hasError) {
    output = <Spinner spinner={false} message={error1.hasError? error1.message : error.message}/>
    document.title = 'Error'
  } else if (spin) {
    document.title = 'Fetching data'
    output = <Spinner/>
  }

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
    <table className="Covid">
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
