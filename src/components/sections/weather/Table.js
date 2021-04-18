import React, { useState, useEffect } from 'react'


const Table = ({ data }) => {
  const buildTable = () => {
    let content
    if(window.innerWidth > 1024) {
      let head = data.filter(item => item[0] !== 'weather').map((item, index) => (
        <th key={index}>{ item[0].charAt(0).toUpperCase() + item[0].slice(1).replace(/[_]/g,' ') }</th>
      ))
      let body = data.filter(item => item[0] !== 'weather').map((item, index) => (
        <td key={index}>{item[1]}</td>
      ))
      content = <><thead><tr>{head}</tr></thead><tbody><tr>{body}</tr></tbody></>
    } else {
      let body = data.filter(item => item[0] !== 'weather').map((item, index) => (
        <tr key={index}>
          <th key={index+'th'}>{ item[0].charAt(0).toUpperCase() + item[0].slice(1).replace(/[_]/g,' ') }</th>
          <td key={index+'td'}>{item[1]}</td>
        </tr>
      ))
      content = <tbody>{body}</tbody>
    }
    return content
  }

  const [ content, setContent ] = useState(buildTable)

  useEffect(() => {
    const handleResize = () => setContent(buildTable)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line
  }, [])

  return (
    <table>
      {content}
    </table>
  )
}

export default Table