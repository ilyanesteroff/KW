import React from 'react'


const Website = ({ data }) => (
  <div id="website">
    {
      data.text.map((entry, index) => (
        <div 
          id="entry"
          className="framed-container"
          key={ index + entry.chapter }
        >
          <h3>{ entry.chapter }</h3>
          <p>{ entry.paragraph }</p>
        </div>
      ))
    }
  </div>
)


export default Website