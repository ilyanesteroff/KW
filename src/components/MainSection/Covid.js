import React, { useState, useEffect } from 'react'

export default (props) => {

  const links = [ 
    {
      link: 'https://covid-19-statistics.p.rapidapi.com/reports?iso=USA&region_name=US&q=US%20Florida',
      headers: {
        "headers": {
          "x-rapidapi-host": 'covid-19-statistics.p.rapidapi.com',
          "x-rapidapi-key": 'bd0b30ab4dmsh22d059c15a32a28p1c4cd5jsn33d087f197cf'
        }
      }
    },
    {
      link: 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=us',
      headers: {
        "headers": {
          "x-rapidapi-host": 'covid-19-data.p.rapidapi.com',
          "x-rapidapi-key": 'bd0b30ab4dmsh22d059c15a32a28p1c4cd5jsn33d087f197cf'
        }
      }
    }
  ]

  const [response, loading, hasError] = useFetch(links[0].link, links[0].headers)
  const [response1, loading1, hasError1] = useFetch(links[1].link, links[1].headers)

  let style = {
    position: 'relative',
    marginLeft: '10%',
    width: '80%',
    marginTop: '15vh',
    textAlign: 'center'
  }

  return (
    <div style={style}>
      <Headline content={'Novel Coronavirus in Florida'}/>
      {response !== null & response1 !== null?
       <Table data={{local: response, global: response1}}></Table> : <h2>Loading</h2>
      }
    </div>
  )
}

const useFetch = (url, opts) => {
  const [response, setResponse] = useState({})
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
      .then(res => extractCovidData(res))
      .then(res => setResponse(res))
      .catch(() => setHasError(true))
    
    setLoading(false)
  }, [url])

  return [ response, loading, hasError]
}

const extractCovidData = (json) => {
  let output = {
      confirmed: json.confirmed,
      critical: json.critical || Math.floor(json.confirmed_diff / 5),
      deaths: json.deaths,
      recovered: json.recovered, 
      lastUpdate: json.lastUpdate || json.last_update,
      fatalityRate: json.fatality_rate || 0.01
  }
  return output
}

const Headline = (props) => {
    let style = {
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: '1.5rem',
        color: '#444',
    }
    return <h1 style={style}>{props.content}</h1>
}

const Table = ({data}) => {
  data.local.place = 'Florida'
  data.global.place = 'USA'
  let content = [<tr><Cols data={data.local}/></tr>, <tr><Cols data={data.global}/></tr>]
 
  return (
    <table>
      <thead>
        <tr>
          <th key={1}></th>
          <th key={2}>Confirmed Cases</th>
          <th key={3}>Critical</th>
          <th key={4}>Deaths</th>
          <th key={5}>Recovered</th>
          <th key={6}>Last Update</th>
          <th key={7}>Fatality Rate</th>
        </tr>
      </thead>
      <tbody>
        {content}
      </tbody>
    </table>
  )
}

const Cols = ({data}) => {
    return(
        <>
          <td key={data.place}>{data.place}</td>
          <td key={data.confirmed}>{data.confirmed}</td>
          <td key={data.critical}>{data.critical}</td>
          <td key={data.deaths}>{data.deaths}</td>
          <td key={data.recovered}>{data.recovered}</td>
          <td key={data.lastUpdate}>{data.lastUpdate}</td>
          <td key={data.fatalityRate}>{data.fatalityRate}</td>
        </>
    )
}
